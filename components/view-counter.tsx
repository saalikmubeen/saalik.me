import { useEffect } from 'react'
import useSWR from 'swr'

import fetcher from '@lib/fetcher'

export default function ViewCounter({
  title = 'Views',
  slug,
  string = true
}: {
  slug: string
  string?: boolean
  title?: string
}) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher)
  const views = data?.total

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST'
      })

    registerView()
  }, [slug])

  return (
    <>
      {string && views ? (
        <div style={{ marginTop: '9px' }}>
          <h5>
            {title}:{' '}
            <span style={{ fontSize: '16px', marginLeft: '5px' }}>{views}</span>
          </h5>
        </div>
      ) : null}
    </>
  )
}
