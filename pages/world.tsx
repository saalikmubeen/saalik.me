import Page from '@components/page'
import Globe from '@components/globe'
import getMarkdown from '@lib/get-markdown'

const Travels = ({ html }: { html: string }) => {
  return (
    <Page
      title="World Travels"
      description="I want to travel the whole world, one day, maybe, eventually :)"
    >
      <Globe />
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </Page>
  )
}

export const getStaticProps = async () => {
  const md = await getMarkdown('data/world.md')

  return {
    props: {
      html: md
    }
  }
}

export default Travels
