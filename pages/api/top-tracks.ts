import { getTopTracks } from '@lib/spotify'
import { NextApiRequest, NextApiResponse } from 'next'
import { SpotifyTopTracksInterface } from '@interfaces/spotify'
import { ITopTracks } from '@interfaces/top-tracks'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ITopTracks>
) {
  const response = await getTopTracks()
  const { items } = await response.json()

  const tracks = items.map((track: SpotifyTopTracksInterface) => ({
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
    image: track.album.images[0].url
  }))

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  )

  return res.status(200).json({ tracks })
}
