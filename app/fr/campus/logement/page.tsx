import PageBanner from "@/components/common/PageBanner";
import HousingPage from "@/components/campus/HousingPage";

export const metadata = {
  title: "Se loger autour du campus - Grand Sud",
  description: "Toutes les solutions de logement pour les étudiants du campus Toulouse-Labège.",
};

export default function HousingPageFR() {
  const banner = {
    title: "Se loger autour du campus",
    image: "/assets/campus-toulouse.jpg"
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
