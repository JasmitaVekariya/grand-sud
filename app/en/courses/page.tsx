import PageBanner from "@/components/common/PageBanner";

export default function CoursesPage() {
  const t = {
    title: (
      <>
        Explore Our <br />
        Expert Programs
      </>
    ),
    image: "/assets/Gemini_Generated_Image_hromqqhromqqhrom-e1756710798902.jpg"
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
                BACHELOR PROGRAMS
              </span>
            </div>
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-4 h-4 bg-gray-200 mt-1.5 flex-shrink-0" />
              <span className="text-sm md:text-base font-bold uppercase tracking-wider text-gray-800 hover:text-primary-red transition-colors">
                MASTÈRE PROGRAMS
              </span>
            </div>
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-4 h-4 bg-gray-200 mt-1.5 flex-shrink-0" />
              <span className="text-sm md:text-base font-bold uppercase tracking-wider text-gray-800 hover:text-primary-red transition-colors">
                TRAINING MODALITIES
              </span>
            </div>
          </aside>

          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">
                Specialized Training for Global Careers
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Grand Sud offers a comprehensive range of academic programs from <strong className="text-gray-900 font-extrabold">Bac+2 to Bac+5</strong>, specifically designed for the tourism, hospitality, and digital travel industries. All our courses are certified and recognized by the state (France Compétences), ensuring high academic standards and professional legitimacy.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="bg-gray-50 p-8 border border-gray-100 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Bachelor Degree</h3>
                  <p className="text-gray-600">3-year programs focused on operational management and industry expertise in Business, Tourism, and IT.</p>
                </div>
                <div className="bg-gray-50 p-8 border border-gray-100 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Mastère Degree</h3>
                  <p className="text-gray-600">2-year advanced programs for strategic management and leadership in global tourism and hospitality.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
