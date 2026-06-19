import PageBanner from "@/components/common/PageBanner";
import CampusToulousePage from "@/components/campus/CampusToulousePage";

export default function LivingInToulousePageFR() {
  const t = {
    title: "Vivre à Toulouse",
    image: "/assets/pexels-tbd-traveller-2149583744-30753255-min-scaled.jpg"
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
