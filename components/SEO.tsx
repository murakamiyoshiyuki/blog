import { NextSeo, ArticleJsonLd } from 'next-seo'

interface SEOProps {
  title: string
  description: string
  url: string
  type?: 'website' | 'article'
  article?: {
    publishedTime: string
    modifiedTime?: string
    author: string
    tags?: string[]
  }
  image?: string
}

export default function SEO({ title, description, url, type = 'website', article, image }: SEOProps) {
  const siteName = 'AI Tools Hub'
  const siteUrl = 'https://aitoolshub.com'
  
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${siteUrl}${url}`}
        openGraph={{
          type: type,
          url: `${siteUrl}${url}`,
          title: title,
          description: description,
          images: image ? [
            {
              url: `${siteUrl}${image}`,
              width: 1200,
              height: 630,
              alt: title,
            }
          ] : [],
          site_name: siteName,
          ...(article && {
            article: {
              publishedTime: article.publishedTime,
              modifiedTime: article.modifiedTime,
              authors: [article.author],
              tags: article.tags,
            }
          })
        }}
        twitter={{
          handle: '@aitoolshub',
          site: '@aitoolshub',
          cardType: 'summary_large_image',
        }}
      />
      {type === 'article' && article && (
        <ArticleJsonLd
          url={`${siteUrl}${url}`}
          title={title}
          images={image ? [`${siteUrl}${image}`] : []}
          datePublished={article.publishedTime}
          dateModified={article.modifiedTime || article.publishedTime}
          authorName={article.author}
          publisherName={siteName}
          publisherLogo={`${siteUrl}/logo.png`}
          description={description}
        />
      )}
    </>
  )
}