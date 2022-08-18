import { getMe } from '@lib/spotify'
import { NextApiRequest, NextApiResponse } from 'next'
// import { SpotifyTopTracksInterface } from '@interfaces/spotify'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const response = await getMe()
  const data = await response.json()

  const me = {
    name: data.display_name,
    url: data.external_urls.spotify,
    followers: data.followers.total,
    image: data.images[0].url
  }

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  )

  return res.status(200).json({ me })
}
