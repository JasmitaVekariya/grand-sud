import PageBanner from "@/components/common/PageBanner";

export default function BusinessPage() {
  const t = {
    title: (
      <>
        Partner with <br />
        Grand Sud
      </>
    ),
    image: "/assets/pexels-fauxels-3183173-scaled.jpg"
  };

  return (
    <main className="bg-white">
      <PageBanner 
        title={t.title} 
        image={t.image} 
        height="h-[450px]"
      />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 xl:px-[200px] py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <aside className="lg:col-span-4 space-y-8">
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-4 h-4 bg-primary-red mt-1.5 flex-shrink-0" />
              <span className="text-sm md:text-base font-bold uppercase tracking-wider text-primary-red">
                CORPORATE PARTNERSHIPS
              </span>
            </div>
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-4 h-4 bg-gray-200 mt-1.5 flex-shrink-0" />
              <span className="text-sm md:text-base font-bold uppercase tracking-wider text-gray-800 hover:text-primary-red transition-colors">
                RECRUITMENT SOLUTIONS
              </span>
            </div>
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-4 h-4 bg-gray-200 mt-1.5 flex-shrink-0" />
              <span className="text-sm md:text-base font-bold uppercase tracking-wider text-gray-800 hover:text-primary-red transition-colors">
                CONTINUING EDUCATION
              </span>
            </div>
          </aside>

          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">
                A Strategic Alliance for the Future of Tourism
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                At <strong className="text-gray-900 font-extrabold">Grand Sud</strong>, we believe that the link between education and the professional world is the key to success. We work closely with companies in the tourism, travel, and hospitality sectors to provide them with the best talents and tailored training solutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="bg-gray-50 p-8 border border-gray-100 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Talent Sourcing</h3>
                  <p className="text-gray-600">Access our pool of graduates and students for your internship, apprenticeship, and permanent recruitment needs.</p>
                </div>
                <div className="bg-gray-50 p-8 border border-gray-100 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Bespoke Training</h3>
                  <p className="text-gray-600">Develop your teams' skills with our customized training modules designed specifically for your business challenges.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
