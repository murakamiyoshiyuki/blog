import { ReactNode } from 'react'

interface AffiliateLinkProps {
  href: string
  productName: string
  children: ReactNode
  className?: string
  trackingId?: string
  rel?: string
}

export default function AffiliateLink({ 
  href, 
  productName, 
  children, 
  className = "text-blue-600 hover:text-blue-800 font-medium underline",
  trackingId = "aitoolshub-20",
  rel = "nofollow noopener noreferrer sponsored"
}: AffiliateLinkProps) {
  const affiliateUrl = href.includes('?') 
    ? `${href}&tag=${trackingId}` 
    : `${href}?tag=${trackingId}`

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'affiliate',
        event_label: productName,
        value: href
      })
    }
  }

  return (
    <a
      href={affiliateUrl}
      target="_blank"
      rel={rel}
      className={className}
      onClick={handleClick}
      data-affiliate="true"
      data-product={productName}
    >
      {children}
    </a>
  )
}