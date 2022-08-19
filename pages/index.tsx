import Page from '@components/page'
import Link from '@components/link'
import NowPlaying from '../components/now-playing'
import ViewCounter from '@components/view-counter'

const About = () => {
  return (
    <Page description="Saalik Mubeen - Software developer, open-source & software engineering enthusiast; musicophile,  poetry and art lover; peripatetic,introverted, empathetic, melancholic & emotive by nature.">
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
          and software engineering enthusiast ;{'   '}
          <Link underline href="/music">
            musicophile,{' '}
          </Link>
          <Link underline href="/pictures/hopeless-romantics">
            poetry & art lover{' '}
          </Link>
          , day dreamer;{' '}
          <Link underline href="/world">
            peripatetic{'  '}
          </Link>
          ,introverted, empathetic,
          <Link underline href="/pictures/melancholy">
            melancholic{' '}
          </Link>
          &{' '}
          <Link underline href="/pictures/emotive">
            emotive{' '}
          </Link>
          by nature.
        </p>
      </article>
      <NowPlaying />
      <ViewCounter slug={'home'} string={true} title="Profile views" />
    </Page>
  )
}

export default About
