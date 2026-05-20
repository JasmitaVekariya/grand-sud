import PageBanner from "@/components/common/PageBanner";
import CampusToulousePage from "@/components/campus/CampusToulousePage";

export default function LivingInToulousePageFR() {
  const t = {
    title: "Vivre à Toulouse",
    image: "/assets/campus-toulouse.jpg"
  };

  return (
    <main className="bg-white">
      <PageBanner 
        title={t.title} 
        image={t.image} 
      />
      
      <CampusToulousePage lang="fr" />
    </main>
  );
}
