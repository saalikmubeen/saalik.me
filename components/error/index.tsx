import Head from 'next/head'
import Lottie from 'react-lottie-player'
import { replaceColor } from 'lottie-colorify'
import { useTheme } from 'next-themes'

import Page from '@components/page'
import Link from '@components/link'
import lottie404 from '@components/icons/lottie/404.json'
import lottieloading from '@components/icons/lottie/loading.json'
import styles from './error.module.css'

const Error = ({
  title,
  loading = false
}: {
  title?: string
  loading?: Boolean
}) => {
  const { theme } = useTheme()
  const animationData: JSON =
    theme === 'dark' ? replaceColor('#000000', '#ffffff', lottie404) : lottie404

  const loadingAnimationData: JSON =
    theme === 'dark'
      ? replaceColor('#000000', '#ffffff', lottieloading)
      : lottieloading

  return (
    <Page title={`${title}` || 'Error'} description={'Error 404'}>
      {title === '404' ? (
        <>
          <Head>
            <title>404 — Saalik</title>
          </Head>

          <Lottie
            play
            loop
            animationData={animationData}
            style={{
              width: 300,
              height: 300,
              margin: '0 auto',
              marginBottom: '-50px',
              marginTop: '-50px'
            }}
            audioFactory={undefined}
          />
          <h1>This page cannot be found.</h1>

          <blockquote cite="https://saalik.me/">
            <p>The perfect personal website doesn&apos;t exist :) </p>

            <footer>
              <Link external href="https://saalik.me/">
                <cite>Back to home</cite>
              </Link>
            </footer>
          </blockquote>
        </>
      ) : (
        <section className={styles.section}>
          {loading ? (
            <Lottie
              play
              loop
              animationData={loadingAnimationData}
              style={{
                width: 300,
                height: 300,
                margin: '0 auto',
                marginBottom: '-50px',
                marginTop: '-50px'
              }}
              audioFactory={undefined}
            />
          ) : (
            <>
              <h3>This definitely should not have happened.</h3>

              <blockquote cite="https://saalik.me/">
                <p>Going fast makes you focus on what&apos;s important;</p>

                <footer>— Me, trying to find excuses for this 💀 </footer>
              </blockquote>

              <p>
                Please go back to the{' '}
                <Link href="https://saalik.me/" underline>
                  homepage
                </Link>{' '}
                as that is the thing <b>I&apos;m sure</b> is not broken.
              </p>
            </>
          )}
        </section>
      )}
    </Page>
  )
}

export default Error
