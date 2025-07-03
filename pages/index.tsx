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
        title="AI Tools Hub - Best AI Tools & Software Reviews 2024"
        description="Discover the best AI tools and software in 2024. Expert reviews, comparisons, and recommendations for ChatGPT alternatives, AI writers, image generators, and more."
        url="/"
      />
      
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find the Perfect AI Tools for Your Needs
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Expert reviews and comparisons of the best AI tools and software. 
            Save time and money with our in-depth analysis and recommendations.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#featured" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Browse Reviews
            </a>
            <a href="/categories" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium border-2 border-blue-600 hover:bg-blue-50 transition-colors">
              View Categories
            </a>
          </div>
        </div>
      </section>

      <section id="featured" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Review</h2>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Reviews</h2>
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
            Stay Updated with AI Trends
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get weekly updates on the latest AI tools, exclusive deals, and expert tips delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Subscribe
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