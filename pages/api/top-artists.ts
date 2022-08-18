import { getTopArtists } from '@lib/spotify'
import { NextApiRequest, NextApiResponse } from 'next'
// import { SpotifyTopTracksInterface } from '@interfaces/spotify'
// import { ITopTracks } from '@interfaces/top-tracks'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const response = await getTopArtists()
  const { items } = await response.json()

  const artists = items.map((artist: any) => ({
    name: artist.name,
    url: artist.external_urls.spotify,
    followers: artist.followers.total,
    image: artist.images[0].url
  }))

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  )

  return res.status(200).json({ artists: artists })
}
