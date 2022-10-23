import Page from '@components/page'
import ViewCounter from '@components/view-counter'
import getMarkdown from '@lib/get-markdown'

const HitsDifferent = ({ html }: { html: string }) => {
  return (
    <Page
      title="Taylor Swift's Hits Different"
      description=" Hits Different ~ Midnights Deluxe Edition Bonus Track, not available on spotify and youtube :)"
    >
      <blockquote>
        Hits Different ~ Midnights Deluxe Edition Bonus Track
      </blockquote>
      <p style={{ margin: '10px 0' }}>Not available on spotify and youtube</p>
      <div style={{ display: 'grid', placeItems: 'center' }}>
        <audio
          controls
          controlsList="nodownload"
          autoPlay
          loop
          style={{ margin: '10px 0' }}
        >
          <source src="/HitsDifferent.mp3" type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>

        <article dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      <ViewCounter slug={'hitsDifferent'} string={true} title="Page views" />
    </Page>
  )
}

export const getStaticProps = async () => {
  const md = await getMarkdown('data/hits-different.md')

  return {
    props: {
      html: md
    }
  }
}

export default HitsDifferent
