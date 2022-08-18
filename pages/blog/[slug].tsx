import Post from '@components/post'
import getPosts from '@lib/get-posts'
import renderMarkdown from '@lib/render-markdown'
import { IPost, IPostNavigation } from '../../interfaces'

const PostPage = (props: IPost & IPostNavigation) => {
  return <Post {...props} />
}

export const getStaticProps = ({
  params: { slug }
}: {
  params: { slug: string }
}): { props: IPost & IPostNavigation } => {
  const posts = getPosts()
  const postIndex = posts.findIndex((p) => p.slug === slug)
  const post = posts[postIndex]
  const { body, ...rest } = post

  return {
    props: {
      previous: posts[postIndex + 1] || null,
      next: posts[postIndex - 1] || null,
      ...rest,
      html: renderMarkdown(body)
    }
  }
}

export const getStaticPaths = () => {
  return {
    paths: getPosts().map((p) => `/blog/${p.slug}`),
    fallback: false
  }
}

export default PostPage
