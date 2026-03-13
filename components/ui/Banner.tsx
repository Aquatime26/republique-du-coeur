import Image from "next/image"

interface BannerProps {
  bannerUrl?: string
  coupleName: string
  isOwner?: boolean
}

export function Banner({ bannerUrl, coupleName }: BannerProps) {
  return (
    <div className="relative h-48 w-full bg-gray-200 rounded-lg overflow-hidden">
      {bannerUrl && (
        <Image
          src={bannerUrl}
          alt={`${coupleName} banner`}
          fill
          className="object-cover"
        />
      )}
      <div className="absolute bottom-2 left-4 text-white">
        <h1 className="text-2xl font-bold">{coupleName}</h1>
      </div>
    </div>
  )
}