interface INotPlaying {
  isPlaying: false
}

interface INowPlaying {
  isPlaying: true
  track: ITrack
  artists: IArtist[]
}

interface ITrack {
  title: string
  album: string
  albumUrl: string
  image: string
  url: string
}

interface IArtist {
  name: string
  url: string
}

export type { INotPlaying, INowPlaying, ITrack, IArtist }
