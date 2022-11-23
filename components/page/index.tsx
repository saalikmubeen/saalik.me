import Head from '@components/head'
import Header from '@components/header'
import styles from './page.module.css'

const Page = ({
  header = true,
  title,
  description,
  image = undefined,
  showHeaderTitle = true,
  children
}: {
  header?: boolean
  title?: string
  description?: string
  image?: string
  showHeaderTitle?: boolean
  children: any
}) => {
  return (
    <div className={styles.wrapper}>
      <Head
        title={`Saalik Mubeen | ${
          title ? ` ${title}` : ' Software Developer and a day dreamer'
        }`}
        description={description}
        image={image}
      />

      {header && <Header title={showHeaderTitle ? title : undefined} />}
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Page
