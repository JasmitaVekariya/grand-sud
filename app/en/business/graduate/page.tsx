import PageBanner from "@/components/common/PageBanner";

export default function HireGraduatePage() {
  const t = {
    title: "Hire a graduate from Grand Sud",
    image: "/assets/pexels-teddyjmodel-2955375-scaled.jpg"
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
              Recruit Ready-to-Work Experts
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Grand Sud graduates are highly sought after in the tourism and hospitality sectors. 
                With solid academic foundations and extensive professional experience gained through 
                internships or apprenticeships, they are ready to take on responsibilities and 
                contribute to your company's growth from day one.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Our Graduate Profile:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Double competence: Operational and Management.</li>
                <li>International mindset and multilingual capabilities.</li>
                <li>Mastery of professional tools and industry software.</li>
                <li>A vast alumni network spanning the global tourism industry.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Alumni Network</h3>
              <p className="text-gray-600 mb-6">
                Access our talent pool of recent graduates and experienced alumni through our 
                dedicated recruitment platform.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors uppercase tracking-wider">
                Recruit an Alumnus
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
