/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import Page from '@components/page'
import NowPlaying from '../../components/now-playing'
// import ViewCounter from '@components/view-counter'
import pictures from '@data/pictures.json'

import styles from '../../components/picture/picture.module.css'
import Picture from '@components/picture'
import Overlay from '@components/picture/overlay'
import ViewCounter from '@components/view-counter'

const HR = () => {
  const { hopelessRomantics } = pictures
  const [image, setImage] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

  const setPicture = (picture: string | null) => {
    setImage(picture)
    setOpen(true)
  }

  return (
    <Page
      title="Hopeless romantics"
      description="Books? flowers? poetry? moon? music? sunset? autumn? spring? Art? how
        can you not be in love."
    >
      <Overlay open={open} setOpen={setOpen} picture={image} />
      <blockquote>
        'Books? flowers? poetry? moon? music? sunset? autumn? spring? Art? how
        can you not be in love.'
      </blockquote>
      <p style={{ margin: '10px', fontSize: '13px' }}>
        <em> Click on the images :)</em>
      </p>
      <div className={styles.grid}>
        {hopelessRomantics.map((url: any, idx: number) => {
          return <Picture key={idx} image={url} setPicture={setPicture} />
        })}
      </div>

      <NowPlaying />
      <ViewCounter
        slug={'hopeless-romantics'}
        string={true}
        title="Page views"
      />
    </Page>
  )
}

export default HR
