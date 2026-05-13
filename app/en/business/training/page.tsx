import PageBanner from "@/components/common/PageBanner";

export default function BusinessTrainingPage() {
  const t = {
    title: "Train your team with Grand Sud",
    image: "/assets/pexels-fauxels-3183173-scaled.jpg"
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
              Upskill Your Workforce
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                In a rapidly evolving tourism industry, continuous training is essential for 
                maintaining a competitive edge. Grand Sud offers bespoke training solutions designed 
                to meet the specific needs of your company. From digital transformation to luxury 
                hospitality standards, we help your teams master the skills of tomorrow.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Our Training Expertise:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Customized modules tailored to your business objectives.</li>
                <li>Instruction from top-tier industry experts and consultants.</li>
                <li>Flexible formats: on-site, at our campus, or online.</li>
                <li>Support with financing files (OPCO, etc.).</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Request a Quote</h3>
              <p className="text-gray-600 mb-6">
                Tell us about your training needs, and our corporate relations team will design a 
                personalized proposal for you.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors uppercase tracking-wider">
                Get a Bespoke Proposal
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
