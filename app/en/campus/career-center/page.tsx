import PageBanner from "@/components/common/PageBanner";

export default function CareerCenterPage() {
  const t = {
    title: "E-campus and career center",
    image: "/assets/pexels-marta-klement-636760-1438081-scaled.jpg"
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
              Your Professional Launchpad
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                The Grand Sud E-campus and Career Center provide students with the digital tools and 
                professional support needed to succeed in their studies and launch their careers in 
                the tourism industry. From online course materials to exclusive internship offers, 
                everything is designed to facilitate your professional integration.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">What the Career Center Offers:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personalized coaching for CVs and cover letters.</li>
                <li>Access to a network of over 1,000 partner companies.</li>
                <li>Regular workshops on interview techniques and professional branding.</li>
                <li>Direct access to exclusive internship and job opportunities.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Access Your Space</h3>
              <p className="text-gray-600 mb-6">
                Connect to the E-campus to access your courses or the Career Center to manage your professional 
                opportunities.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors mb-4 uppercase tracking-wider">
                Log in to E-campus
              </button>
              <button className="w-full border-2 border-primary-red text-primary-red py-3 rounded-lg font-bold hover:bg-red-50 transition-colors uppercase tracking-wider">
                Career Center Portal
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
