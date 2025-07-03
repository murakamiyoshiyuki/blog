import Link from 'next/link'
import { formatDate } from '../lib/utils'

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  featured?: boolean
}

export default function BlogCard({ slug, title, excerpt, date, category, readTime, featured = false }: BlogCardProps) {
  return (
    <article className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${featured ? 'md:col-span-2' : ''}`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
            {category}
          </span>
          <span className="text-sm text-gray-500">{readTime}</span>
        </div>
        <h2 className={`mb-3 ${featured ? 'text-3xl' : 'text-xl'} font-bold text-gray-900 hover:text-blue-600`}>
          <Link href={`/posts/${slug}`}>
            {title}
          </Link>
        </h2>
        <p className="mb-4 text-gray-600 line-clamp-3">{excerpt}</p>
        <div className="flex items-center justify-between">
          <time className="text-sm text-gray-500" dateTime={date}>
            {formatDate(date)}
          </time>
          <Link 
            href={`/posts/${slug}`}
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            詳しく見る
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}