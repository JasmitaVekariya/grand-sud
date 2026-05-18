import CareerCenterPage from "@/components/campus/CareerCenterPage";
import PageBanner from "@/components/common/PageBanner";

export default function CareerCenterPageFr() {
  const t = {
    title: "E-CAMPUS & CAREER CENTER",
    image: "/assets/pexels-pixabay-532173-scaled.jpg"
  };

  return (
    <>
      <PageBanner 
        title={t.title} 
        image={t.image} 
      />
      <CareerCenterPage lang="fr" />
    </>
  );
}
