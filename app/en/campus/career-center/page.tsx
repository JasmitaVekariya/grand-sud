import CareerCenterPage from "@/components/campus/CareerCenterPage";
import PageBanner from "@/components/common/PageBanner";

export default function CareerCenterPageEn() {
  const t = {
    title: "E-CAMPUS & CAREER CENTER",
    image: "/assets/pexels-pixabay-532173-scaled.jpg"
  };

  return (
    <main className="bg-white">
      <PageBanner 
        title={t.title} 
        image={t.image} 
      />
      <CareerCenterPage lang="en" />
    </main>
  );
}
