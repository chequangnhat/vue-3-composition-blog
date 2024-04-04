export type BlogType = {
  id: number
  title: string
  content: string
  author: string
  publishedAt: Date
  urlToImage: string
  description: string
}

export type BlogResponse = {
  status: string
  totalResult: number
  articles: BlogType[]
}

