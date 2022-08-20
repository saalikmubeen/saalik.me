import Page from '@components/page'
import getMarkdown from '@lib/get-markdown'

const About = ({ html }: { html: string }) => {
  return (
    <Page
      title="Software and me"
      description="My brief introduction as a software developer"
    >
      <article dangerouslySetInnerHTML={{ __html: html }} />
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
