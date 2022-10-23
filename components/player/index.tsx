import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './player.module.css'

declare global {
  interface Window {
    onSpotifyWebPlaybackSDKReady: any
    Spotify: any
  }
}

const track = {
  name: '',
  album: {
    images: [{ url: '' }]
  },
  artists: [{ name: '' }]
}

function SpotifyPlayer() {
  const [token, setToken] = useState('')
  const [player, setPlayer] = useState<any>({})
  const [is_paused, setPaused] = useState(false)
  const [is_active, setActive] = useState(false)
  const [current_track, setTrack] = useState(track)

  useEffect(() => {
    console.log('from first effect')
    async function getToken() {
      const response = await fetch('/api/token')
      const json = await response.json()
      setToken(json.access_token)
    }

    getToken()
  }, [])

  useEffect(() => {
    if (!token) {
      return
    }
    console.log(token)
    const script = document.createElement('script')
    script.src = 'https://sdk.scdn.co/spotify-player.js'
    script.async = true

    document.body.appendChild(script)

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: (cb: any) => {
          cb(token)
        },
        volume: 1
      })

      setPlayer(player)

      player.addListener('ready', ({ device_id }: any) => {
        console.log('Ready with Device ID', device_id)

        fetch(`https://api.spotify.com/v1/me/player`, {
          method: 'PUT',
          body: JSON.stringify({
            device_ids: [device_id]
          }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        })

        // fetch(`https://api.spotify.com/v1/me/player/devices`, {
        //   method: 'GET',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     Authorization: `Bearer ${token}`
        //   }
        // })
        //   .then((res) => res.json())
        //   .then((data) => console.log(data))
      })

      player.addListener('not_ready', ({ device_id }: any) => {
        console.log('Device ID has gone offline', device_id)
      })

      player.connect()

      player.addListener('autoplay_failed', () => {
        console.log('Autoplay is not allowed by the browser autoplay rules')
      })

      player.addListener('player_state_changed', (state: any) => {
        if (!state) {
          return
        }

        setTrack(state.track_window.current_track)
        setPaused(state.paused)

        player.getCurrentState().then((state: any) => {
          !state ? setActive(false) : setActive(true)
        })
      })
    }
  }, [token])

  if (!is_active || !player) {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.mainWrapper}>
            <b>
              {' '}
              Instance not active. Transfer your playback using your Spotify app{' '}
            </b>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.mainWrapper}>
            <Image
              src={current_track.album.images[0].url}
              width={400}
              height={400}
              className={styles.nowPlayingCover}
              alt=""
            />

            <div className={styles.nowPlayingSide}>
              <div className={styles.nowPlayingName}>{current_track.name}</div>

              <div className={styles.nowPlayingArtist}>
                {current_track.artists[0].name}
              </div>

              <button
                className={styles.btnSpotify}
                onClick={() => {
                  player.previousTrack()
                }}
              >
                &lt;&lt;
              </button>

              <button
                className={styles.btnSpotify}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  player.togglePlay()
                }}
              >
                {is_paused ? 'PLAY' : 'PAUSE'}
              </button>

              <button
                className={styles.btnSpotify}
                onClick={() => {
                  player.nextTrack()
                }}
              >
                &gt;&gt;
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default SpotifyPlayer
