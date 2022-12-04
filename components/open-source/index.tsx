import { IRepo } from '@interfaces/github'
import React from 'react'
import useSWR from 'swr'
import { useTheme } from 'next-themes'
import fetcher from '@lib/fetcher'
import styles from './styles.module.css'
import linkStyles from '../link/link.module.css'

import {
  ForkDark,
  ForkWhite,
  GitHub,
  StarDark,
  StarWhite
} from '@components/icons'

const OpenSource = () => {
  const { data }: { data?: { repos: IRepo[] } } = useSWR<{ repos: IRepo[] }>(
    '/api/github',
    fetcher
  )

  const { theme } = useTheme()

  return (
    <div>
      <h2 style={{ marginBottom: '1rem' }}>Open Source</h2>

      <div className={styles.container}>
        {data?.repos.map((repo) => {
          return (
            <a
              key={repo.id}
              href={repo.homepage || repo.url}
              className={styles.repoWrapper}
            >
              <div className={styles.repository}>
                <div className={styles.header}>
                  <h3>{repo.name}</h3>
                </div>
                <div className={styles.description}>
                  <p>{repo.description}</p>
                </div>

                <div className={styles.stars}>
                  {theme === 'dark' ? <StarWhite /> : <StarDark />}
                  {repo.stars}

                  {repo.forks > 0 &&
                    (theme === 'dark' ? (
                      <>
                        <ForkWhite />
                        {repo.forks}
                      </>
                    ) : (
                      <>
                        <ForkDark />
                        {repo.forks}
                      </>
                    ))}

                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkStyles.gray}
                  >
                    <GitHub size={30} />
                  </a>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default OpenSource
