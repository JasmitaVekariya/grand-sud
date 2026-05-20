import CommunityLifePage from "@/components/campus/CommunityLifePage";
import PageBanner from "@/components/common/PageBanner";

export default function CommunityLifePageEn() {
  const t = {
    title: "COMMUNITY LIFE",
    image: "/assets/Gemini_Generated_Image_ug7he5ug7he5ug7h-scaled-e1754316372260-1536x894.png"
  };

  return (
    <>
      <PageBanner 
        title={t.title} 
        image={t.image} 
      />
      <CommunityLifePage lang="en" />
    </>
  );
}
