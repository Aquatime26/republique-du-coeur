import PostCard from "./PostCard"

interface PostFeedProps {
  posts: {
    id: string
    author: string
    date: string
    content: string
    mediaUrl?: string
    mediaType?: "image" | "video"
  }[]
}

export default function PostFeed({ posts }: PostFeedProps) {
  return (
    <div className="mt-4">
      {posts.map(post => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  )
}