import PageBanner from "@/components/common/PageBanner";

export default function HireApprenticePage() {
  const t = {
    title: "Hire an apprentice with Grand Sud",
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
              A Strategic Recruitment Choice
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Choosing apprenticeship allows you to train a future employee according to your 
                company's methods and culture. Grand Sud supports you in every step of the 
                recruitment and administrative process, helping you integrate motivated talents 
                into your teams with advantageous financial conditions.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Why Choose Apprenticeship?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Train a student specifically for your company's roles.</li>
                <li>Benefit from state financial aid for recruiting apprentices.</li>
                <li>Exemption from certain social contributions depending on the contract.</li>
                <li>A proven way to secure your long-term recruitment needs.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recruitment Support</h3>
              <p className="text-gray-600 mb-6">
                Our apprenticeship service is here to help you draft your offers and select the 
                best candidates.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors uppercase tracking-wider">
                Partner with Grand Sud
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
