import PageBanner from "@/components/common/PageBanner";

export default function StudentJobsPage() {
  const t = {
    title: "finance your studies with a student job",
    image: "/assets/pexels-rdne-4921254-scaled.jpg"
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
              Balance Work and Study
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Many of our students choose to finance their studies through student jobs. Toulouse 
                offers a dynamic job market for students, with many opportunities in the hospitality, 
                event, and service sectors. At Grand Sud, we support your efforts to find a 
                flexible job that respects your academic schedule.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Finding a Student Job:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access job boards specifically curated for student schedules.</li>
                <li>Exclusive partnerships with local event agencies.</li>
                <li>Workshops on managing your time between work and study.</li>
                <li>Opportunities within the campus for specific student roles.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Current Offers</h3>
              <p className="text-gray-600 mb-6">
                Check our latest student job offers in Toulouse and surrounding areas.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors uppercase tracking-wider">
                Browse Student Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
