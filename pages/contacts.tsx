import { CV, GitHub, LinkedIn, Mail } from '@components/icons'
import Page from '@components/page'

import linkStyles from '../components/link/link.module.css'

const Contacts = () => {
  return (
    <Page title="Contacts" description="Get in touch.">
      <article className="contacts">
        <div className="social">
          <a
            href="mailto:salikmubien@gmail.com?subject=Hello Saalik, You are awesome."
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyles.gray}
          >
            <Mail size={50} />
          </a>
          <a
            href="https://github.com/saalikmubeen"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyles.gray}
          >
            <GitHub size={48} />
          </a>
          <a
            href="https://linkedin.com/in/saalikmubeen"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyles.gray}
          >
            <LinkedIn size={46} style={{ padding: '4 4' }} />
          </a>
          <a
            href="/Saalik_Mubeen.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyles.gray}
          >
            <CV size={48} style={{ padding: '4 4' }} />
          </a>
        </div>
      </article>
    </Page>
  )
}

export default Contacts
