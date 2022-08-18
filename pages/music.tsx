import useSWR from 'swr'
import Page from '@components/page'
import Entry from '@components/entry'

import entryStyles from '../components/entry/entry.module.css'

// Data
import NowPlaying from '@components/now-playing'
import Fetcher from '@lib/fetcher'
import Profile from '@components/profile'

const Music = () => {
  const { data }: { data?: any } = useSWR<any>('/api/me', Fetcher)
  const { data: topTracks }: { data?: any } = useSWR<any>(
    '/api/top-tracks',
    Fetcher
  )

  const { data: allTimeTopTracks }: { data?: any } = useSWR<any>(
    '/api/all-time-top-tracks',
    Fetcher
  )

  const { data: recentlyPlayed }: { data?: any } = useSWR<any>(
    '/api/recently-played',
    Fetcher
  )

  const { data: playlists }: { data?: any } = useSWR<any>(
    '/api/playlists',
    Fetcher
  )

  const { data: artists }: { data?: any } = useSWR<any>(
    '/api/top-artists',
    Fetcher
  )

  return (
    <Page title="Music" description="Collection of my spotify music">
      {data?.me && (
        <Profile me={data.me} playlists={playlists?.playlists.length} />
      )}

      <NowPlaying bigPicture />
      <article>
        <h2 id="top-tracks">Songs I love right now</h2>
        <div className={entryStyles.grid}>
          {topTracks?.tracks.map((entry: any) => {
            return (
              <Entry
                key={`${entry.title} - ${entry.artist}`}
                title={entry.title}
                image={entry.image}
                href={entry.songUrl}
                description={entry.artist}
              />
            )
          })}
        </div>

        <h2 id="recently-played">Recently Played</h2>
        <div className={entryStyles.grid}>
          {recentlyPlayed?.tracks.map((entry: any) => {
            return (
              <Entry
                key={entry.playedAt}
                title={entry.name}
                image={entry.image}
                href={entry.trackUrl}
                description={entry.artist}
                playedAt={entry.playedAt}
              />
            )
          })}
        </div>

        <h2 id="all-time-top-tracks">My All Time fav tracks</h2>
        <div className={entryStyles.grid}>
          {allTimeTopTracks?.tracks.map((entry: any) => {
            return (
              <Entry
                key={`${entry.title} - ${entry.artist}`}
                title={entry.title}
                image={entry.image}
                href={entry.songUrl}
                description={entry.artist}
              />
            )
          })}
        </div>

        <h2 id="playlists">My Playlists</h2>
        <div className={entryStyles.grid}>
          {playlists?.playlists.map((entry: any) => {
            return (
              <Entry
                key={entry.playlistUrl}
                title={entry.name}
                image={entry.image}
                href={entry.playlistUrl}
                description={entry.description}
              />
            )
          })}
        </div>

        <h2 id="top-artists">My All Time fav artists</h2>
        <div className={entryStyles.grid}>
          {artists?.artists.map((entry: any) => {
            return (
              <Entry
                key={entry.name}
                title={entry.name}
                image={entry.image}
                href={entry.url}
                description={`${entry.followers} followers`}
              />
            )
          })}
        </div>
      </article>
    </Page>
  )
}

export default Music
