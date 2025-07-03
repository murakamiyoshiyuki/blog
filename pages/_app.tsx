import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | AIツール比較ナビ"
        defaultTitle="AIツール比較ナビ - 2024年最新AIツール徹底比較"
        description="最新のAIツールを徹底比較。ChatGPT、Claude、画像生成AI、文章作成AIなど、あなたに最適なAIツールが見つかります。"
        openGraph={{
          type: 'website',
          locale: 'ja_JP',
          url: 'https://blog-orcin-psi.vercel.app/',
          site_name: 'AIツール比較ナビ',
        }}
        twitter={{
          handle: '@aitoolsnavi',
          site: '@aitoolsnavi',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  )
}