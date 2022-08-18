import Page from '@components/page'
import getMarkdown from '@lib/get-markdown'

const Ideas = ({ html }: { html: string }) => {
  return (
    <Page
      title="Ideas"
      description="Collections of ideas for side projects and blog posts."
    >
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </Page>
  )
}

export const getStaticProps = async () => {
  const md = await getMarkdown('data/ideas.md')

  return {
    props: {
      html: md
    }
  }
}

export default Ideas
