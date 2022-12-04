import Page from '@components/page'
import Link from '@components/link'
import NowPlaying from '../components/now-playing'
import ViewCounter from '@components/view-counter'
import OpenSource from '@components/open-source'

const About = () => {
  return (
    <Page description="Saalik Mubeen - Software developer, open-source & software engineering enthusiast.">
      <article>
        <h1>I&apos;m Saalik Mubeen</h1>

        <p>
          Waiting, against insurmountable odds, for something extraordinary to
          happen, one day, maybe, eventually, hopefully :)
        </p>

        <p>
          Civil Engineer,{' '}
          <Link underline href="/blog/software-and-me">
            Software developer
          </Link>
          ,{' '}
          <Link underline href="https://github.com/saalikmubeen" external>
            open-source
          </Link>{' '}
          and software engineering enthusiast;{'   '}
          <Link underline href="/music">
            musicophile,{' '}
          </Link>
          <Link underline href="/pictures/hopeless-romantics">
            poetry & art seeker,{' '}
          </Link>
          day dreamer;{' '}
          <Link underline href="/world">
            peripatetic,{'  '}
          </Link>
          introverted, empathetic,{' '}
          <Link underline href="/pictures/melancholy">
            melancholic{' '}
          </Link>
          &{' '}
          <Link underline href="/pictures/emotive">
            emotive{' '}
          </Link>
          by nature
        </p>

        <OpenSource />
      </article>
      <NowPlaying />
      <ViewCounter slug={'home'} string={true} title="Profile views" />
    </Page>
  )
}

export default About
