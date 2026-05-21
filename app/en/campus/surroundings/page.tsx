import PageBanner from "@/components/common/PageBanner";
import CampusSurroundingsPage from "@/components/campus/CampusSurroundingsPage";

export const metadata = {
  title: "The campus and its surroundings - Grand Sud",
  description: "Explore the Toulouse-Labège campus, its facilities, and its dynamic environment.",
};

export default function SurroundingsPageEN() {
  const banner = {
    title: "The campus and its surroundings",
    image: "/assets/campus-toulouse.jpg"
  };

  return (
    <main className="bg-white">
      <PageBanner 
        title={banner.title} 
        image={banner.image} 
      />
      <CampusSurroundingsPage lang="en" />
    </main>
  );
}
