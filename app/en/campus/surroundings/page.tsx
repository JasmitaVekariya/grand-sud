import PageBanner from "@/components/common/PageBanner";

export default function SurroundingsPage() {
  const t = {
    title: "The Toulouse-Labège campus and its surroundings",
    image: "/assets/campus-toulouse.jpg"
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
              A Modern Learning Environment
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Located in the heart of the Labège Enova tech hub, the Grand Sud campus offers 
                students a modern and professional environment. Surrounded by leading technology 
                companies, research centers, and diverse amenities, our campus is perfectly 
                integrated into one of Toulouse's most dynamic economic areas.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Life at Labège Enova:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Direct access to public transport (Metro, Bus, and soon the 3rd Metro line).</li>
                <li>Proximity to the Labège 2 shopping center and numerous restaurants.</li>
                <li>Green spaces and leisure areas for breaks and student meetups.</li>
                <li>A safe and professional atmosphere ideal for concentration and networking.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Us</h3>
              <p className="text-gray-600 mb-6">
                Come and discover our campus during our next Open Day or schedule a private tour.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors uppercase tracking-wider">
                Book a Campus Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
