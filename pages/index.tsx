import Layout from '../components/Layout'
import BlogCard from '../components/BlogCard'
import SEO from '../components/SEO'
import { getAllPosts, PostData } from '../lib/posts'
import { GetStaticProps } from 'next'

interface HomeProps {
  posts: PostData[]
}

export default function Home({ posts }: HomeProps) {
  const featuredPost = posts[0]
  const recentPosts = posts.slice(1, 7)

  return (
    <Layout>
      <SEO
        title="AIツール比較ナビ - 2024年最新AIツール徹底比較"
        description="2024年最新のAIツールを徹底比較。ChatGPT、Claude、画像生成AI、文章作成AIなど、人気AIツールの料金、機能、使い勝手を詳しくレビュー。"
        url="/"
      />
      
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            あなたに最適なAIツールが見つかる
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            ChatGPT、Claude、Midjourneyなど人気AIツールを徹底比較。
            料金、機能、使い勝手を詳しく解説します。
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#featured" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              レビューを見る
            </a>
            <a href="/categories" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium border-2 border-blue-600 hover:bg-blue-50 transition-colors">
              カテゴリー一覧
            </a>
          </div>
        </div>
      </section>

      <section id="featured" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">注目のレビュー</h2>
          {featuredPost && (
            <BlogCard
              slug={featuredPost.slug}
              title={featuredPost.title}
              excerpt={featuredPost.excerpt}
              date={featuredPost.date}
              category={featuredPost.category}
              readTime={featuredPost.readTime || '5 min'}
              featured={true}
            />
          )}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">最新レビュー</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                readTime={post.readTime || '5 min'}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            最新AIトレンドをキャッチ
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            最新のAIツール情報、お得なキャンペーン、使い方のコツを配信します。
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="メールアドレスを入力"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              登録する
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()
  
  return {
    props: {
      posts,
    },
  }
}