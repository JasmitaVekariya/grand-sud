import PageBanner from "@/components/common/PageBanner";
import CampusToulousePage from "@/components/campus/CampusToulousePage";

export default function LivingInToulousePage() {
  const t = {
    title: "Living in Toulouse",
    image: "/assets/campus-toulouse.jpg"
  };

  return (
    <main className="bg-white">
      <PageBanner 
        title={t.title} 
        image={t.image} 
      />
      
      <CampusToulousePage lang="en" />
    </main>
  );
}
