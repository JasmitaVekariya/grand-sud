import PageBanner from "@/components/common/PageBanner";

export default function FinancialAidsPageFR() {
  const t = {
    title: "Financer ses études avec des aides",
    image: "/assets/card-aides.jpg"
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
              Soutien Financier pour Votre Réussite
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Grand Sud s'engage à rendre l'éducation accessible. Il existe diverses options 
                d'aide financière pour vous aider à couvrir vos frais de scolarité et vos dépenses 
                quotidiennes. Des bourses d'État aux plans de paiement personnalisés, nous vous 
                guidons à travers les solutions disponibles pour sécuriser votre investissement 
                éducatif.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Options d'aides disponibles :</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Bourses d'État du CROUS (sur critères sociaux).</li>
                <li>Aides régionales pour le tourisme et la mobilité internationale.</li>
                <li>Plans de paiement personnalisés (versements mensuels).</li>
                <li>Partenariats avec des banques locales pour des prêts étudiants à taux préférentiels.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Besoin de conseils ?</h3>
              <p className="text-gray-600 mb-6">
                Notre service administratif est disponible pour vous aider à comprendre à quelles aides 
                vous êtes éligible et vous assister dans vos démarches.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors uppercase tracking-wider">
                Télécharger le guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
