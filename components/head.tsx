import NextHead from 'next/head'
import { useTheme } from 'next-themes'

const defaultOgImage =
  'https://res.cloudinary.com/dqxiycnxu/image/upload/v1669056607/saalik.me/logo-512x512_dbqj0k.png'

const Head = ({
  title = 'Saalik Mubeen - Sofware Engineer',
  description = "Hi, I'm Saalik, ⚡️ Software Engineer who ❤️ loves to learn on a daily basis.",
  image = defaultOgImage,
  children
}: {
  title: string
  description?: string
  image?: string
  children?: any
}) => {
  const { systemTheme } = useTheme()

  return (
    <NextHead>
      {/* Title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* Image */}
      <meta name="twitter:image" content={image} />
      <meta name="image" property="og:image" content={image} />

      {/* URL */}
      <meta name="og:url" content="https://saalik.me" />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@salik_mubeen" />
      <meta name="apple-mobile-web-app-title" content="Saalik" />
      <meta name="author" content="Saalik Mubeen" />

      {/* RSS feed */}
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS Feed for saalik.me"
        href="/feed.xml"
      />

      {/* Favicons */}
      <link rel="manifest" href="/favicons/manifest.webmanifest" />
      <meta name="theme-color" content="#000000" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />

      {/* ------------------- */}

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      {/* <link rel="manifest" href="/site.webmanifest" /> */}
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />

      {/* ------------------------------------- */}

      {/* Dynamic favicon */}
      {!systemTheme || systemTheme === 'dark' ? (
        <>
          <link
            rel="alternate icon"
            type="image/png"
            href="/favicons/dark.png"
            key="dynamic-favicon-alternate"
          />
          {/* <link
            rel="icon"
            type="image/svg+xml"
            href="/favicons/dark.svg"
            key="dynamic-favicon"
          /> */}
        </>
      ) : (
        <>
          <link
            rel="alternate icon"
            type="image/png"
            href="/favicons/light.png"
            key="dynamic-favicon-alternate"
          />
          {/* <link
            rel="icon"
            type="image/svg+xml"
            href="/favicons/light.svg"
            key="dynamic-favicon"
          /> */}
        </>
      )}
      {children}
    </NextHead>
  )
}

export default Head
