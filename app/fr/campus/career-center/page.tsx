import CareerCenterPage from "@/components/campus/CareerCenterPage";
import PageBanner from "@/components/common/PageBanner";

export default function CareerCenterPageFr() {
  const t = {
    title: "E-CAMPUS & CAREER CENTER",
    image: "/assets/pexels-marta-klement-636760-1438081-scaled.jpg"
  };

  return (
    <main className="bg-white">
      <PageBanner 
        title={t.title} 
        image={t.image} 
      />
      <CareerCenterPage lang="fr" />
    </main>
  );
}
