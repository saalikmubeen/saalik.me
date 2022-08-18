import Head from 'next/head'

import Navigation from './navigation'
import Page from '@components/page'
import styles from './post.module.css'
import ViewCounter from '@components/view-counter'
import { IPost } from '@interfaces/post'

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const Post = ({
  title,
  slug,
  html,
  description,
  date,
  previous,
  next
}: IPost) => {
  return (
    <Page title={title} description={description} showHeaderTitle={false}>
      <Head>{date && <meta name="date" content={date} />}</Head>

      <article
        dangerouslySetInnerHTML={{
          __html: `<span class="${styles.date}">${date}</span><h1 class="${
            styles.title
          }">${escapeHtml(title)}</h1>${html}`
        }}
      />

      <Navigation previous={previous} next={next} />
      <ViewCounter slug={slug} title="Post Views" />
    </Page>
  )
}

export default Post
