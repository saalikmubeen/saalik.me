import NextHead from 'next/head'
import { useTheme } from 'next-themes'

const defaultOgImage =
  'https://res.cloudinary.com/afonsojramos/image/upload/v1619293728/og-image_lnsn0r.png'

const Head = ({
  title = 'Afonso Jorge Ramos - Sofware Engineer',
  description = "Hi, I'm Afonso, ⚡️ Software Engineer who ❤️ loves to learn on a daily basis.",
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
      <meta name="og:url" content="https://afonsojramos.me" />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@afonsojramos" />
      <meta name="apple-mobile-web-app-title" content="Afonso" />
      <meta name="author" content="Afonso Jorge Ramos" />

      {/* RSS feed */}
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS Feed for afonsojramos.me"
        href="/feed.xml"
      />

      {/* Favicons */}
      <link rel="manifest" href="/favicons/manifest.webmanifest" />
      <meta name="theme-color" content="#000000" />
      <link rel="mask-icon" href="/favicons/pinned.svg" color="#000000" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/favicon-180x180.png"
      />

      {/* Dynamic favicon */}
      {!systemTheme || systemTheme === 'dark' ? (
        <>
          <link
            rel="alternate icon"
            type="image/png"
            href="/favicons/dark.png"
            key="dynamic-favicon-alternate"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/favicons/dark.svg"
            key="dynamic-favicon"
          />
        </>
      ) : (
        <>
          <link
            rel="alternate icon"
            type="image/png"
            href="/favicons/light.png"
            key="dynamic-favicon-alternate"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/favicons/light.svg"
            key="dynamic-favicon"
          />
        </>
      )}
      {children}
    </NextHead>
  )
}

export default Head
