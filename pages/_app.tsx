import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | AI Tools Hub"
        defaultTitle="AI Tools Hub - Best AI Tools & Software Reviews"
        description="Discover the best AI tools and software with our in-depth reviews, comparisons, and recommendations. Find the perfect AI solution for your needs."
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://aitoolshub.com/',
          site_name: 'AI Tools Hub',
        }}
        twitter={{
          handle: '@aitoolshub',
          site: '@aitoolshub',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  )
}