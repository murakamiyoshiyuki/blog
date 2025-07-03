import AffiliateLink from './AffiliateLink'

interface ProductBoxProps {
  name: string
  description: string
  price: string
  rating: number
  pros: string[]
  cons: string[]
  affiliateUrl: string
  badge?: string
}

export default function ProductBox({
  name,
  description,
  price,
  rating,
  pros,
  cons,
  affiliateUrl,
  badge
}: ProductBoxProps) {
  return (
    <div className="border-2 border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
          {badge && (
            <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold text-white bg-green-600 rounded-full">
              {badge}
            </span>
          )}
        </div>
        <div className="text-right">
          <div className="flex items-center mb-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-2xl font-bold text-gray-900">{price}</p>
        </div>
      </div>

      <p className="text-gray-600 mb-4">{description}</p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="font-semibold text-green-700 mb-2">Pros</h4>
          <ul className="space-y-1">
            {pros.map((pro, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700">{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-red-700 mb-2">Cons</h4>
          <ul className="space-y-1">
            {cons.map((con, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700">{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <AffiliateLink
        href={affiliateUrl}
        productName={name}
        className="block w-full text-center bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Try {name} Now →
      </AffiliateLink>
    </div>
  )
}