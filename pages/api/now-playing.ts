import { getNowPlaying } from '@lib/spotify'
import { NextApiRequest, NextApiResponse } from 'next'
import {
  IArtist,
  INotPlaying,
  INowPlaying,
  ITrack
} from '@interfaces/now-playing'
import { SpotifyArtistInterface } from '@interfaces/spotify'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<INowPlaying | INotPlaying>
) {
  const response = await getNowPlaying()

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false })
  }

  const song = await response.json()

  if (song.item === null) {
    return res.status(200).json({ isPlaying: false })
  }

  const isPlaying = song.is_playing
  const track: ITrack = {
    title: song.item.name,
    album: song.item.album.name,
    albumUrl: song.item.album.external_urls.spotify,
    image: song.item.album.images[0].url,
    url: song.item.external_urls.spotify
  }
  const artists: IArtist[] = song.item.artists.map(
    (_artist: SpotifyArtistInterface) => {
      return {
        name: _artist.name,
        url: _artist.external_urls.spotify
      }
    }
  )

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  )

  return res.status(200).json({
    artists,
    track,
    isPlaying
  })
}
