interface CoupleSummaryProps {
  city: string
  anniversary: string
  interests: string[]
  description: string
}

export function CoupleSummary({ city, anniversary, interests, description }: CoupleSummaryProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <p><strong>Ville :</strong> {city}</p>
      <p><strong>Anniversaire :</strong> {anniversary}</p>
      <p><strong>Centres d&apos;intérêt :</strong> {interests.join(", ")}</p>
      <p>{description}</p>
    </div>
  )
}