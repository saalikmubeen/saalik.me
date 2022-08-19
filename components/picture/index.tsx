import { useInView } from 'react-intersection-observer'
import 'intersection-observer'

import styles from './picture.module.css'

const Picture = ({
  image,
  position,
  setPicture
}: {
  image: string
  position?: string
  // eslint-disable-next-line no-unused-vars
  setPicture: (picture: string | null) => void
}) => {
  const [ref, inView] = useInView({ triggerOnce: true })

  return (
    <section
      ref={ref}
      onClick={() => setPicture(image)}
      className={styles.picture}
      style={{
        backgroundImage: image ? (!inView ? 'none' : `url(${image})`) : 'none',
        backgroundPosition: position ? position : 'center'
      }}
    ></section>
  )
}

export default Picture
