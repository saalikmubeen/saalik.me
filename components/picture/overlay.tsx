import { memo } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import useDelayedRender from 'use-delayed-render'
import { DialogContent, DialogOverlay } from '@reach/dialog'

import styles from './overlay.module.css'

const Overlay = memo(
  ({
    open,
    setOpen,
    picture
  }: {
    open: boolean
    // eslint-disable-next-line no-unused-vars
    setOpen: (open: boolean) => void
    picture: string | null
  }) => {
    const { mounted, rendered } = useDelayedRender(open, {
      enterDelay: -1,
      exitDelay: 200
    })

    return (
      <DialogOverlay
        isOpen={mounted}
        className={cn(styles.screen, {
          [styles.show]: rendered
        })}
        onDismiss={() => setOpen(false)}
      >
        <DialogContent
          className={styles['dialog-content']}
          aria-label="Site Navigation"
        >
          <div
            className={cn(styles.content, {
              [styles.show]: rendered
            })}
          >
            {picture && (
              <Image src={picture} alt="picture" height={450} width={450} />
            )}
          </div>
        </DialogContent>
      </DialogOverlay>
    )
  }
)

Overlay.displayName = 'Overlay'
export default Overlay
