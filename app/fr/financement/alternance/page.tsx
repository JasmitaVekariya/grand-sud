import PageBanner from "@/components/common/PageBanner";

export default function AlternancePageFR() {
  const t = {
    title: "Financer ses études avec l'alternance",
    image: "/assets/pexels-olly-3769021-scaled.jpg"
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
              Apprendre, Travailler et Réussir
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Choisir l'alternance est une décision stratégique qui vous permet de combiner un 
                enseignement académique de haut niveau avec une expérience professionnelle concrète. 
                À Grand Sud, nous vous aidons à trouver l'entreprise partenaire idéale, garantissant 
                le financement de votre formation pendant que vous percevez un salaire.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Avantages de l'alternance :</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Frais de scolarité pris en charge à 100% par l'entreprise.</li>
                <li>Perception d'un salaire mensuel pendant vos études.</li>
                <li>Acquisition d'une expérience professionnelle directe pour votre CV.</li>
                <li>Taux d'employabilité élevé immédiatement après le diplôme.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lancez votre projet</h3>
              <p className="text-gray-600 mb-6">
                Notre service alternance est prêt à vous aider à trouver votre entreprise d'accueil 
                et à gérer votre contrat.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors uppercase tracking-wider">
                Trouver une offre
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
