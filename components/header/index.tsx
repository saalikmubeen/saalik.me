import { memo } from 'react'
import Link from '@components/link'

import styles from './header.module.css'
import { Saalik } from '@components/icons'
import Command from '@components/command'

const Header = ({ title }: { title?: string }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <Link href="/" aria-label="Navigate Home" className={styles.logo}>
          <Saalik strokeWidth="0" className={styles.saalik} />
          Saalik
        </Link>

        {title !== '404' ? (
          <Link className={styles.content} href="#">
            {title}
          </Link>
        ) : (
          <p className={styles.content}>{title}</p>
        )}

        <Command />
      </div>
    </nav>
  )
}

Header.displayName = 'Header'
export default memo(Header)
