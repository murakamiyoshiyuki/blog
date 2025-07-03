import { GetStaticProps, GetStaticPaths } from 'next'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import { getAllPosts, getPostBySlug, PostData } from '../../lib/posts'
import { formatDate } from '../../lib/utils'
import Link from 'next/link'

interface PostProps {
  post: PostData
}

export default function Post({ post }: PostProps) {
  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.excerpt}
        url={`/posts/${post.slug}`}
        type="article"
        article={{
          publishedTime: post.date,
          author: post.author || 'AI Tools Hub Team',
          tags: post.tags,
        }}
      />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <div className="mb-4">
            <Link href={`/categories/${post.category.toLowerCase()}`} className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors">
              {post.category}
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-600 space-x-4">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>•</span>
            <span>{post.readTime} read</span>
            <span>•</span>
            <span>By {post.author || 'AI Tools Hub Team'}</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <p className="text-sm">
              <strong>Disclosure:</strong> This post contains affiliate links. If you make a purchase through these links, we may earn a commission at no extra cost to you.
            </p>
          </div>
          
          <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
        </div>

        <footer className="mt-12 pt-8 border-t">
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags?.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag.toLowerCase()}`}
                className="inline-block px-3 py-1 text-sm text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>

          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">About the Author</h3>
            <p className="text-gray-600">
              {post.author || 'AI Tools Hub Team'} is dedicated to helping you find the best AI tools for your needs. 
              We test and review AI software to provide honest, detailed insights.
            </p>
          </div>

          <div className="mt-8 flex justify-between">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              ← Back to Home
            </Link>
            <Link href="/reviews" className="text-blue-600 hover:text-blue-800 font-medium">
              More Reviews →
            </Link>
          </div>
        </footer>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts()
  
  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug as string)
  
  return {
    props: {
      post,
    },
  }
}