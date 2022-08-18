import { getPlaylists } from '@lib/spotify'
import { NextApiRequest, NextApiResponse } from 'next'
// import { SpotifyTopTracksInterface } from '@interfaces/spotify'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const response = await getPlaylists()
  const { items } = await response.json()
  console.log(items.length)

  const playlists = items.map((playlist: any) => ({
    description: playlist.description,
    playlistUrl: playlist.external_urls.spotify,
    image: playlist.images[0].url,
    name: playlist.name
  }))

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  )

  return res.status(200).json({ playlists })
}
