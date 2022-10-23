import { getAccessToken } from '@lib/spotify'
import { NextApiRequest, NextApiResponse } from 'next'
// import { SpotifyTopTracksInterface } from '@interfaces/spotify'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { access_token } = await getAccessToken()

  return res.status(200).json({ access_token })
}
