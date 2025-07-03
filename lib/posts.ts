import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { calculateReadTime } from './utils'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface PostData {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  content?: string
  readTime?: string
  author?: string
  tags?: string[]
}

export async function getPostBySlug(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    content: contentHtml,
    readTime: calculateReadTime(content),
    ...(data as Omit<PostData, 'slug' | 'content' | 'readTime'>),
  }
}

export function getAllPosts(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        readTime: calculateReadTime(content),
        ...(data as Omit<PostData, 'slug' | 'readTime'>),
      }
    })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostsByCategory(category: string): PostData[] {
  return getAllPosts().filter((post) => post.category === category)
}