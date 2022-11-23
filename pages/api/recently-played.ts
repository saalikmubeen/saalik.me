import { getRecentlyPlayed } from '@lib/spotify'
import { NextApiRequest, NextApiResponse } from 'next'
// import { SpotifyTopTracksInterface } from '@interfaces/spotify'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const response = await getRecentlyPlayed()
  const { items } = await response.json()
  console.log(items.length)

  const tracks = items.map(({ track, played_at }: any) => ({
    artist: track.artists.map((_artist: any) => _artist.name).join(', '),
    trackUrl: track.external_urls.spotify,
    image: track.album.images[0].url,
    name: track.name,
    playedAt: played_at
  }))

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  )

  return res.status(200).json({ tracks })
}
