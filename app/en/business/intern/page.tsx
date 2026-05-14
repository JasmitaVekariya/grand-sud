import PageBanner from "@/components/common/PageBanner";

export default function HireInternPage() {
  const t = {
    title: "Hire an intern with Grand Sud",
    image: "/assets/pexels-danxavier-1239291-scaled.jpg"
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
              Invest in Emerging Talent
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Recruiting an intern from Grand Sud is an excellent opportunity to bring fresh 
                perspectives and enthusiasm to your team while supporting the next generation of 
                tourism professionals. Our students are trained in the latest industry practices 
                and are ready to contribute to your projects.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Why Recruit Our Interns?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Students with strong operational and digital skills.</li>
                <li>Internships aligned with the specific needs of the tourism sector.</li>
                <li>Support from the school to manage administrative conventions.</li>
                <li>An opportunity to pre-recruit future talents for your company.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Post an Offer</h3>
              <p className="text-gray-600 mb-6">
                Share your internship opportunities with our students and find the right candidate 
                for your missions.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors uppercase tracking-wider">
                Post an Internship
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
