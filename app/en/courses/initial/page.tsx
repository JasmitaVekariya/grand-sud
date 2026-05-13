import PageBanner from "@/components/common/PageBanner";

export default function InitialTrainingPage() {
  const t = {
    title: "Complete a course as an initial training",
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
              Initial Training Focus
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Initial training is the traditional academic route, allowing you to focus entirely on your 
                studies and personal development within the school environment. This modality is ideal 
                for students who want to immerse themselves in the academic experience before entering 
                the professional world.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Key Aspects of Initial Training:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full immersion in the academic and student life.</li>
                <li>Strategic internships throughout the course to gain hands-on experience.</li>
                <li>More time dedicated to theoretical learning and group projects.</li>
                <li>Flexibility to choose diverse specializations.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Questions?</h3>
              <p className="text-gray-600 mb-6">
                Not sure which modality is right for you? Our admissions counselors are here to help.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
                TALK TO AN ADVISOR
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
