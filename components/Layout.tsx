import Head from 'next/head'
import Link from 'next/link'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

export default function Layout({ children, title = 'AIツール比較ナビ - 2024年最新のAIツール徹底比較', description = '最新のAIツールを徹底比較。ChatGPT、Claude、画像生成AI、文章作成AIなど、あなたに最適なAIツールが見つかります。' }: LayoutProps) {
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
                  AIツール比較ナビ
                </Link>
              </div>
              <div className="flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  ホーム
                </Link>
                <Link href="/categories" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  カテゴリー
                </Link>
                <Link href="/reviews" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  レビュー
                </Link>
                <Link href="/comparisons" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  比較
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
                <h3 className="text-lg font-semibold mb-4">AIツール比較ナビについて</h3>
                <p className="text-gray-600 text-sm">
                  最新のAIツールを徹底的に比較・レビュー。あなたのビジネスや個人利用に最適なAIツールが見つかります。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">人気カテゴリー</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/categories/writing" className="text-gray-600 hover:text-gray-900">AI文章作成ツール</Link></li>
                  <li><Link href="/categories/image" className="text-gray-600 hover:text-gray-900">AI画像生成ツール</Link></li>
                  <li><Link href="/categories/coding" className="text-gray-600 hover:text-gray-900">AIコーディング支援</Link></li>
                  <li><Link href="/categories/chatbots" className="text-gray-600 hover:text-gray-900">AIチャットボット</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">規約・ポリシー</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900">プライバシーポリシー</Link></li>
                  <li><Link href="/terms" className="text-gray-600 hover:text-gray-900">利用規約</Link></li>
                  <li><Link href="/disclosure" className="text-gray-600 hover:text-gray-900">アフィリエイト開示</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
              <p>&copy; 2024 AIツール比較ナビ. All rights reserved.</p>
              <p className="mt-2">当サイトはアフィリエイトプログラムに参加しています。</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}