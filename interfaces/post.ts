interface IPostContent {
  title: string
  slug: string
  html: string
  hidden: boolean
  og?: string
  description: string
  date: string
}

interface IPostNavigation {
  previous: IPost
  next: IPost
}

type IPost = IPostContent & IPostNavigation

export type { IPostContent, IPostNavigation, IPost }
