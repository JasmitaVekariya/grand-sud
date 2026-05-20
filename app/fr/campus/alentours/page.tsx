import PageBanner from "@/components/common/PageBanner";
import CampusSurroundingsPage from "@/components/campus/CampusSurroundingsPage";

export const metadata = {
  title: "Le campus et ses alentours - Grand Sud",
  description: "Découvrez le campus Toulouse-Labège, ses infrastructures et son environnement dynamique.",
};

export default function SurroundingsPageFR() {
  const banner = {
    title: "Le campus et ses alentours",
    image: "/assets/campus-toulouse.jpg"
  };

  return (
    <main className="bg-white">
      <PageBanner 
        title={banner.title} 
        image={banner.image} 
      />
      <CampusSurroundingsPage lang="fr" />
    </main>
  );
}
