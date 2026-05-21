import CommunityLifePage from "@/components/campus/CommunityLifePage";
import PageBanner from "@/components/common/PageBanner";

export default function VieAssociativePageFR() {
  const t = {
    title: "VIE ASSOCIATIVE",
    image: "/assets/Gemini_Generated_Image_ug7he5ug7he5ug7h-scaled-e1754316372260-1536x894.png"
  };

  return (
    <main className="bg-white">
      <PageBanner 
        title={t.title} 
        image={t.image} 
      />
      <CommunityLifePage lang="fr" />
    </main>
  );
}

