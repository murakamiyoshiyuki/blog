import Head from 'next/head'
import Link from 'next/link'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

export default function Layout({ children, title = 'AI Tools Review - Best AI Tools & Software Reviews', description = 'Discover the best AI tools and software with our in-depth reviews, comparisons, and recommendations. Find the perfect AI solution for your needs.' }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <header className="bg-white shadow-sm border-b">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700">
                  AI Tools Hub
                </Link>
              </div>
              <div className="flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Home
                </Link>
                <Link href="/categories" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Categories
                </Link>
                <Link href="/reviews" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Reviews
                </Link>
                <Link href="/comparisons" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Comparisons
                </Link>
              </div>
            </div>
          </nav>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-gray-100 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About AI Tools Hub</h3>
                <p className="text-gray-600 text-sm">
                  Your trusted source for AI tool reviews and recommendations. We help you find the perfect AI solutions for your business needs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Popular Categories</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/categories/writing" className="text-gray-600 hover:text-gray-900">AI Writing Tools</Link></li>
                  <li><Link href="/categories/image" className="text-gray-600 hover:text-gray-900">AI Image Generators</Link></li>
                  <li><Link href="/categories/coding" className="text-gray-600 hover:text-gray-900">AI Coding Assistants</Link></li>
                  <li><Link href="/categories/chatbots" className="text-gray-600 hover:text-gray-900">AI Chatbots</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
                  <li><Link href="/disclosure" className="text-gray-600 hover:text-gray-900">Affiliate Disclosure</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
              <p>&copy; 2024 AI Tools Hub. All rights reserved.</p>
              <p className="mt-2">Some links may be affiliate links. We may earn a commission at no extra cost to you.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}