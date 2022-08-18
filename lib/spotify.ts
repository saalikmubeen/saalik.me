import { stringify } from 'querystring'

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing?market=PT`
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?limit=30&time_range=short_term`
const ALL_TIME_TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?limit=30&time_range=long_term`
const RECENTLY_PLAYED_ENDPOINT =
  'https://api.spotify.com/v1/me/player/recently-played?limit=30'
const PLAYLISTS_ENDPOINT = 'https://api.spotify.com/v1/me/playlists?limit=30'
const ME_ENDPOINT = 'https://api.spotify.com/v1/me'
const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists?limit=20&time_range=long_term`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const getAccessToken = async (): Promise<{ access_token: string }> => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: stringify({
      grant_type: 'refresh_token',
      refresh_token
    })
  })

  return await response.json()
}

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken()

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken()

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const getAllTimeTopTracks = async () => {
  const { access_token } = await getAccessToken()

  return fetch(ALL_TIME_TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const getRecentlyPlayed = async () => {
  const { access_token } = await getAccessToken()

  return fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const getPlaylists = async () => {
  const { access_token } = await getAccessToken()

  return fetch(PLAYLISTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const getMe = async () => {
  const { access_token } = await getAccessToken()

  return fetch(ME_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const getTopArtists = async () => {
  const { access_token } = await getAccessToken()

  return fetch(TOP_ARTISTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}
