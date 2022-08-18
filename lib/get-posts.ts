import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

const getPosts = () => {
  const posts = fs
    .readdirSync('./posts/')
    .filter((file) => path.extname(file) === '.md')
    .map((file) => {
      const postContent = fs.readFileSync(`./posts/${file}`, 'utf8')
      const { data, content }: { data: any; content: string } =
        matter(postContent)

      if (data.published === false) {
        return null
      }

      return { ...data, body: content }
    })
    .filter(Boolean)
    .sort((a, b) => {
      return (
        new Date(b?.date || '').valueOf() - new Date(a?.date || '').valueOf()
      )
    })

  // Metadata for searching posts
  const meta = posts.map((p) => ({ ...p, body: null }))
  fs.writeFileSync(
    path.resolve(process.cwd(), 'data/blog.json'),
    JSON.stringify(meta)
  )

  return posts
}

export default getPosts
