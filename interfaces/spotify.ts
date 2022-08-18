interface SpotifyArtistInterface {
  external_urls: {
    spotify: string
  }
  name: string
}

interface SpotifyTopTracksInterface {
  artists: { name: string }[]
  external_urls: { spotify: string }
  name: string
  album: {
    images: { url: string }[]
  }
}

export type { SpotifyArtistInterface, SpotifyTopTracksInterface }
