import PageBanner from "@/components/common/PageBanner";

export default function SchoolPage() {
  const t = {
    title: (
      <>
        Welcome to <br />
        Grand Sud
      </>
    ),
    image: "/assets/pexels-gold7k-69004-1536x1024.jpg"
  };

  return (
    <main className="bg-white">
      <PageBanner 
        title={t.title} 
        image={t.image} 
        height="h-[450px]"
      />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-[100px] lg:px-[200px] py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <aside className="lg:col-span-4 space-y-8">
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-4 h-4 bg-primary-red mt-1.5 flex-shrink-0" />
              <span className="text-sm md:text-base font-bold uppercase tracking-wider text-primary-red">
                THE SCHOOL
              </span>
            </div>
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-4 h-4 bg-gray-200 mt-1.5 flex-shrink-0" />
              <span className="text-sm md:text-base font-bold uppercase tracking-wider text-gray-800 hover:text-primary-red transition-colors">
                OUR COMMITMENTS
              </span>
            </div>
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-4 h-4 bg-gray-200 mt-1.5 flex-shrink-0" />
              <span className="text-sm md:text-base font-bold uppercase tracking-wider text-gray-800 hover:text-primary-red transition-colors">
                INTERNATIONAL FOCUS
              </span>
            </div>
          </aside>

          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">
                Excellence in Tourism & Management Since 1991
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                <strong className="text-gray-900 font-extrabold">Grand Sud</strong> is a premier institution dedicated to training future leaders in the tourism and hospitality industry. With over 30 years of experience, we provide our students with the skills, network, and professional experience needed to succeed in a global market.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="bg-gray-50 p-8 border border-gray-100 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-600">To bridge the gap between academic theory and industry practice, ensuring our graduates are immediately operational and highly employable.</p>
                </div>
                <div className="bg-gray-50 p-8 border border-gray-100 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Key Figures</h3>
                  <p className="text-gray-600">Over 5,000 alumni, 1,000 partner companies, and a 95% employment rate within 6 months of graduation.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
