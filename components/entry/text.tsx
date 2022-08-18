import { memo } from 'react'
import cn from 'classnames'
import useSWR from 'swr'
import fetcher from '@lib/fetcher'

import Link from '@components/link'
import styles from './text.module.css'

const TextEntry = ({
  title,
  description,
  type,
  href,
  as,
  slug
}: {
  title: string
  description: string
  type: string
  href: string
  as: string
  slug: string
}) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher)
  const views = data?.total

  return (
    <li className={styles.item}>
      <Link
        href={href}
        as={as}
        external={!as}
        title={`${title} (${description})`}
        className={styles.link}
      >
        <div className={styles.type}>{type}</div>
        <div>
          <p className={cn(styles.title, 'clamp')}>{title}</p>
          {description && (
            <p className={cn(styles.description, 'clamp')}>{description}</p>
          )}
        </div>
        {`${views ? views.toLocaleString() : '–––'} views`}
      </Link>
    </li>
  )
}

export default memo(TextEntry)
