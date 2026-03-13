interface PostCardProps {
  author: string
  date: string
  content: string
  mediaUrl?: string
  mediaType?: "image" | "video"
}

export default function PostCard({ author, date, content, mediaUrl, mediaType }: PostCardProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow mb-4">
      <p className="text-gray-600">{author} • {date}</p>
      <p className="mt-2">{content}</p>
      {mediaUrl && mediaType === "image" && (
        <img src={mediaUrl} alt="media" className="mt-2 rounded" />
      )}
      {mediaUrl && mediaType === "video" && (
        <video src={mediaUrl} controls className="mt-2 rounded" />
      )}
    </div>
  )
}