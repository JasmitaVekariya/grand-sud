import PageBanner from "@/components/common/PageBanner";

export default function StudentLifePage() {
  const t = {
    title: (
      <>
        Student Life at <br />
        Grand Sud
      </>
    ),
    image: "/assets/Gemini_Generated_Image_ug7he5ug7he5ug7h-scaled-e1754316372260-1536x894.jpg"
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
                CAMPUS EXPERIENCE
              </span>
            </div>
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-4 h-4 bg-gray-200 mt-1.5 flex-shrink-0" />
              <span className="text-sm md:text-base font-bold uppercase tracking-wider text-gray-800 hover:text-primary-red transition-colors">
                COMMUNITY LIFE
              </span>
            </div>
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-4 h-4 bg-gray-200 mt-1.5 flex-shrink-0" />
              <span className="text-sm md:text-base font-bold uppercase tracking-wider text-gray-800 hover:text-primary-red transition-colors">
                STUDENT SERVICES
              </span>
            </div>
          </aside>

          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">
                More Than Just a School: A True Community
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                At <strong className="text-gray-900 font-extrabold">Grand Sud</strong>, student life is vibrant, dynamic, and focused on your well-being. From our modern campus in Toulouse-Labège to our diverse student associations, we provide an environment where you can thrive academically and socially.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="bg-gray-50 p-8 border border-gray-100 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Campus Life</h3>
                  <p className="text-gray-600">Discover our modern facilities, relaxation areas, and the dynamic environment of the Labège Enova tech hub.</p>
                </div>
                <div className="bg-gray-50 p-8 border border-gray-100 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Associations</h3>
                  <p className="text-gray-600">Join our student office (BDE) and various clubs to organize events, trips, and build lasting friendships.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
