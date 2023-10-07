import NextHead from 'next/head'
import { useTheme } from 'next-themes'

const defaultOgImage =
  'https://res.cloudinary.com/dqxiycnxu/image/upload/v1696706755/saalik.me/og_ndaoxv.png'

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
      <link rel="manifest" href="/favicon_package_v0/manifest.webmanifest" />
      <meta name="theme-color" content="#000000" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon_package_v0/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon_package_v0/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon_package_v0/favicon-16x16.png"
      />
      {/* <link rel="manifest" href="/favicon_package_v0/site.webmanifest" /> */}
      <link
        rel="mask-icon"
        href="/favicon_package_v0/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      {/* ------------------------------------- */}

      {/* Dynamic favicon */}
      {!systemTheme || systemTheme === 'dark' ? (
        <>
          <link
            rel="alternate icon"
            type="image/png"
            href="/favicon_package_v0/dark.png"
            key="dynamic-favicon-alternate"
          />
        </>
      ) : (
        <>
          <link
            rel="alternate icon"
            type="image/png"
            href="/favicon_package_v0/light.png"
            key="dynamic-favicon-alternate"
          />
        </>
      )}
      {children}
    </NextHead>
  )
}

export default Head
