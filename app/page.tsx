import Banner from "@/components/banner/Banner";
import CoupleSummary from "@/components/coupleSummary/CoupleSummary";
import PostFeed from "@/components/postFeed/PostFeed";

export default function Home() {
  // Données factices pour tester le rendu
  const dummyPosts = [
    {
      id: "1",
      author: "Alexis & Partner",
      date: "2026-03-13",
      content: "Premier post sur notre réseau amoureux !",
      mediaUrl: "/example.jpg",
      mediaType: "image" as const,
    },
    {
      id: "2",
      author: "Alexis & Partner",
      date: "2026-03-12",
      content: "Un petit moment partagé aujourd'hui",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      {/* Bannière du couple */}
      <Banner
        bannerUrl="/banner-example.jpg"
        coupleName="Alexis & Partner"
        isOwner={true}
      />

      {/* Résumé du couple */}
      <div className="my-8">
        <CoupleSummary
          city="La Roche-sur-Yon"
          anniversary="01/01/2020"
          interests={["Jeux de rôles", "Jeux vidéo", "Warhammer"]}
          description="Nous aimons partager notre passion pour les jeux et passer du temps ensemble."
        />
      </div>

      {/* Fil d'actualité */}
      <div className="my-8">
        <PostFeed posts={dummyPosts} />
      </div>
    </div>
  );
}