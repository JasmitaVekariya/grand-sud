import PageBanner from "@/components/common/PageBanner";

export default function AlternancePageFR() {
  const t = {
    title: "Réaliser sa formation en alternance",
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
              L'Avantage de l'Alternance
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                L'alternance est un moyen puissant de combler le fossé entre la théorie académique et la 
                pratique professionnelle. À Grand Sud, nous proposons plusieurs programmes en format 
                alternance, vous permettant d'acquérir une expérience professionnelle précieuse tout en 
                obtenant votre diplôme.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Avantages de l'Alternance :</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Exonération des frais de scolarité (pris en charge par l'OPCO de l'entreprise).</li>
                <li>Perception d'un salaire mensuel pendant vos études.</li>
                <li>Expérience professionnelle significative pour booster votre CV.</li>
                <li>Forte employabilité dès l'obtention du diplôme.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Besoin d'aide ?</h3>
              <p className="text-gray-600 mb-6">
                Notre équipe est là pour vous aider à trouver une entreprise d'accueil et vous guider 
                dans les démarches administratives.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
                CONTACTER LES ADMISSIONS
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
