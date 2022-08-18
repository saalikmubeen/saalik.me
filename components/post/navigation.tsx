import Link from '@components/link'
import { IPost } from '@interfaces/post'

import styles from './navigation.module.css'

const Previous = ({ previous, next }: { previous?: IPost; next?: IPost }) => {
  return (
    <div className={styles.navigation}>
      <div className={styles.previous}>
        {previous && (
          <Link href="/blog/[slug]" gray as={`/blog/${previous.slug}`}>
            <div className={styles.title}>← Older</div>
            {previous.title}
          </Link>
        )}
      </div>

      <div className={styles.next}>
        {next && (
          <Link href="/blog/[slug]" gray as={`/blog/${next.slug}`}>
            <div className={styles.title}>Newer →</div>
            {next.title}
          </Link>
        )}
      </div>
    </div>
  )
}

export default Previous
