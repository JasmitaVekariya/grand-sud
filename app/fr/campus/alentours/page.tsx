import CampusBanner from "@/components/campus/CampusBanner";
import CampusSurroundingsPage from "@/components/campus/CampusSurroundingsPage";

export const metadata = {
  title: "Le campus et ses alentours - Grand Sud",
  description: "Découvrez le campus Toulouse-Labège, ses infrastructures et son environnement dynamique.",
};

export default function SurroundingsPageFR() {
  return (
    <main className="bg-white">
      <CampusBanner
        title="Le campus Toulouse-Labège et ses alentours"
        image="/assets/campus-toulouse.jpg"
        postalLabel="Adresse postale"
        postalAddress="Bâtiment 6 - 21 rue du Village d'Entreprises - 31670 Labège (FRANCE)"
        programsLabel="Formations disponibles"
        programs="l'ensemble des formations est disponible sur ce campus"
      />
      <CampusSurroundingsPage lang="fr" />
    </main>
  );
}
