import NowPlaying from '@components/now-playing'
import Page from '@components/page'
import ViewCounter from '@components/view-counter'
import getMarkdown from '@lib/get-markdown'

const About = ({ html }: { html: string }) => {
  return (
    <Page
      title="Software and me"
      description="My brief introduction as a software developer"
    >
      <article dangerouslySetInnerHTML={{ __html: html }} />

      <NowPlaying />
      <ViewCounter slug={'about'} string={true} title="Page views" />
    </Page>
  )
}

export const getStaticProps = async () => {
  const md = await getMarkdown('data/about.md')

  return {
    props: {
      html: md
    }
  }
}

export default About
