import Page from '@components/page'
import PostsList from '@components/posts-list'
import getPosts from '@lib/get-posts'
import { IPost } from '@interfaces/post'

const Blog = ({ posts }: { posts: IPost[] }) => {
  return (
    <Page title="Blog" description="Writing about whatever comes to mind.">
      <article>
        <ul>
          <PostsList posts={posts} />
        </ul>
      </article>
    </Page>
  )
}

export const getStaticProps = () => {
  const posts = getPosts()

  return {
    props: {
      posts
    }
  }
}

export default Blog
