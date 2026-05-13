import PageBanner from "@/components/common/PageBanner";

export default function HireApprenticePageFR() {
  const t = {
    title: "Recrutez un alternant avec Grand Sud",
    image: "/assets/pexels-mikhail-nilov-7820321-scaled.jpg"
  };

  return (
    <main className="bg-white">
      <PageBanner 
        title={t.title} 
        image={t.image} 
      />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-[200px] py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 uppercase tracking-wider border-l-4 border-primary-red pl-6">
              Un Choix de Recrutement Stratégique
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Choisir l'alternance vous permet de former un futur collaborateur selon les méthodes 
                et la culture de votre entreprise. Grand Sud vous accompagne dans chaque étape du 
                processus de recrutement et d'administration, vous aidant à intégrer des talents 
                motivés dans vos équipes avec des conditions financières avantageuses.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Pourquoi choisir l'alternance ?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Formez un étudiant spécifiquement aux métiers de votre entreprise.</li>
                <li>Bénéficiez des aides de l'État pour le recrutement d'apprentis.</li>
                <li>Exonération de certaines cotisations sociales selon le contrat.</li>
                <li>Un moyen éprouvé de sécuriser vos besoins de recrutement à long terme.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Aide au Recrutement</h3>
              <p className="text-gray-600 mb-6">
                Notre service alternance est là pour vous aider à rédiger vos offres et à 
                sélectionner les meilleurs candidats.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors uppercase tracking-wider">
                Devenir Partenaire
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
