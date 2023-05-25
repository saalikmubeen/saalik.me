/* eslint-disable react/no-unescaped-entities */
import useSWR from 'swr'
import Page from '@components/page'
import Entry from '@components/entry'

import entryStyles from '../components/entry/entry.module.css'

// Data
import NowPlaying from '@components/now-playing'
import Fetcher from '@lib/fetcher'
import Profile from '@components/profile'
import Error from '@components/error'
import ViewCounter from '@components/view-counter'

const Music = () => {
  const { data } = useSWR<any>('/api/me', Fetcher)
  const { data: topTracks } = useSWR<any>('/api/top-tracks', Fetcher)

  const { data: allTimeTopTracks } = useSWR<any>(
    '/api/all-time-top-tracks',
    Fetcher
  )

  const { data: recentlyPlayed } = useSWR<any>('/api/recently-played', Fetcher)

  const { data: playlists } = useSWR<any>('/api/playlists', Fetcher)

  const { data: artists } = useSWR<any>('/api/top-artists', Fetcher)

  // if (error) return <Error title="Error loading data" />
  if (!data) return <Error title="Loading..." loading />

  return (
    <Page title="Music" description="Collection of my spotify music">
      {data?.me && (
        <Profile me={data.me} playlists={playlists?.playlists.length} />
      )}

      <NowPlaying bigPicture={false} />

      <blockquote style={{ margin: '20px 0 15px 0px' }}>
        'People want to hear songs with the words they're afraid to say.'
      </blockquote>

      <article>
        <h4 id="top-tracks">Songs I love right now</h4>
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

        <h4 id="recently-played">Recently Played</h4>
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

        <h4 id="all-time-top-tracks">My All Time fav tracks</h4>
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

        <h4 id="playlists">My Playlists</h4>
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

        <h4 id="top-artists">My All Time fav artists</h4>
        <div className={entryStyles.grid}>
          {artists?.artists.map((entry: any) => {
            return (
              <Entry
                key={entry.name}
                title={entry.name}
                image={entry.image}
                href={entry.url}
              />
            )
          })}
        </div>
      </article>
      <ViewCounter slug={'music'} string={true} title="Page views" />
    </Page>
  )
}

export default Music
