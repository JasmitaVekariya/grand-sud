import CampusBanner from "@/components/campus/CampusBanner";
import CampusSurroundingsPage from "@/components/campus/CampusSurroundingsPage";

export const metadata = {
  title: "The campus and its surroundings - Grand Sud",
  description: "Explore the Toulouse-Labège campus, its facilities, and its dynamic environment.",
};

export default function SurroundingsPageEN() {
  return (
    <main className="bg-white">
      <CampusBanner
        title="The Toulouse-Labège campus and its surroundings"
        image="/assets/campus-toulouse.jpg"
        postalLabel="Postal address"
        postalAddress="Bâtiment 6 - 21 rue du Village d'Entreprises - 31670 Labège (FRANCE)"
        programsLabel="Available programs"
        programs="all the programs are available on this campus"
      />
      <CampusSurroundingsPage lang="en" />
    </main>
  );
}
