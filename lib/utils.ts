export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function calculateReadTime(content: string): string {
  const charactersPerMinute = 400 // 日本語の場合は文字数で計算
  const characters = content.trim().length
  const minutes = Math.ceil(characters / charactersPerMinute)
  return `${minutes}分で読めます`
}