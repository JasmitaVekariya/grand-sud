import PageBanner from "@/components/common/PageBanner";
import HousingPage from "@/components/campus/HousingPage";

export const metadata = {
  title: "Se loger autour du campus - Grand Sud",
  description: "Toutes les solutions de logement pour les étudiants du campus Toulouse-Labège.",
};

export default function HousingPageFR() {
  const banner = {
    title: <>Se loger autour de <br/> Toulouse-Labège</>,
      image: "/assets/pexels-harriet-b-392993362-14768387-min-scaled.jpg"
    };

  return (
    <main className="bg-white">
      <PageBanner 
        title={banner.title} 
        image={banner.image} 
      />
      <HousingPage lang="fr" />
    </main>
  );
}
