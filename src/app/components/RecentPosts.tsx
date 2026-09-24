import { getRecentPosts } from '@/lib/posts'
import RecentPostsClient from './RecentPostsClient'

export default function FeaturedPosts() {
  const posts = getRecentPosts()
  return <RecentPostsClient posts={posts} />
}