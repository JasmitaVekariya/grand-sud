import PageBanner from "@/components/common/PageBanner";
import HousingPage from "@/components/campus/HousingPage";

export const metadata = {
  title: "Housing around the campus - Grand Sud",
  description: "Explore all housing solutions for students on the Toulouse-Labège campus.",
};

export default function HousingPageEN() {
  const banner = {
    title: <>STAYING AROUND THE <br /> TOULOUSE</>,
    image: "/assets/pexels-harriet-b-392993362-14768387-min-scaled.jpg"
  };

  return (
    <main className="bg-white">
      <PageBanner 
        title={banner.title} 
        image={banner.image} 
      />
      <HousingPage lang="en" />
    </main>
  );
}
