/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import Page from '@components/page'
import NowPlaying from '../../components/now-playing'
// import ViewCounter from '@components/view-counter'
import pictures from '@data/pictures.json'

import styles from '../../components/picture/picture.module.css'
import Picture from '@components/picture'
import Overlay from '@components/picture/overlay'

const Emotive = () => {
  const { emotive } = pictures
  const [image, setImage] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

  const setPicture = (picture: string | null) => {
    setImage(picture)
    setOpen(true)
  }

  return (
    <Page
      title="Emotions"
      description="Pity those who don't feel anything at all."
    >
      <Overlay open={open} setOpen={setOpen} picture={image} />
      <blockquote style={{ textAlign: 'right', fontSize: '15px' }}>
        <div>درد دل کے واسطے پیدا کیا انسان کو</div>
        <div>ورنہ عطاعت کے لئےکچھ کم نہ تھے کروبیاں</div>
      </blockquote>
      <p style={{ margin: '10px', fontSize: '13px' }}>
        <em> Click on the images :)</em>
      </p>
      <div className={styles.grid}>
        {emotive.map((url: any, idx: number) => {
          return <Picture key={idx} image={url} setPicture={setPicture} />
        })}
      </div>

      <NowPlaying />
      {/* <ViewCounter slug={'home'} string={true} title="Profile views" /> */}
    </Page>
  )
}

export default Emotive
