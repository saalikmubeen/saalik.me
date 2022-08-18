import Page from '@components/page'
import Link from '@components/link'
import NowPlaying from '../components/now-playing'
import ViewCounter from '@components/view-counter'

const About = () => {
  return (
    <Page description="Saalik Mubeen - Software developer, open-source & software engineering enthusiast, music lover & poetry seeker, peripatetic by nature.">
      <article>
        <h1>Saalik Mubeen</h1>

        <p>
          Waiting, against insurmountable odds, for something extraordinary to
          happen, one day, maybe, eventually, hopefully :)
        </p>

        <p>
          Civil Engineer, Software developer,{' '}
          <Link underline href="https://github.com/saalikmubeen" external>
            open-source
          </Link>{' '}
          &{' '}
          <Link underline href="/music">
            music lover,{' '}
          </Link>
          poetry seeker & day dreamer,{' '}
          <Link underline href="/world">
            peripatetic{'  '}
          </Link>
          ,introverted, empathetic, melancholic & emotive by nature.
        </p>
      </article>
      <NowPlaying />
      <ViewCounter slug={'home'} string={true} title="Profile views" />
    </Page>
  )
}

export default About
