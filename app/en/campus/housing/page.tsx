import PageBanner from "@/components/common/PageBanner";

export default function HousingPage() {
  const t = {
    title: "STAYING AROUND TOULOUSE-LABÈGE",
    image: "/assets/pexels-harriet-b-392993362-14768387-min-scaled.jpg"
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
              Find Your Home in Toulouse
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Finding the right accommodation is a priority when starting your studies. Toulouse-Labège 
                offers a wide range of housing options, from modern student residences to private 
                rentals. At Grand Sud, we provide you with the resources and partnerships to help 
                you find a comfortable place to live close to the campus.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Housing Options:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Partner student residences with exclusive rates for Grand Sud students.</li>
                <li>Private rental listings via our internal student platform.</li>
                <li>Shared housing opportunities with other Grand Sud students.</li>
                <li>Assistance with administrative procedures (APL, Visale, etc.).</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Housing Guide</h3>
              <p className="text-gray-600 mb-6">
                Download our comprehensive guide to housing in Toulouse-Labège, including partner 
                addresses and tips.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors uppercase tracking-wider">
                Download Housing Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
