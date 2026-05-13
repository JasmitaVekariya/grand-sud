import PageBanner from "@/components/common/PageBanner";

export default function WorkStudyPage() {
  const t = {
    title: "Complete your course with a work-study training program",
    image: "/assets/pexels-olly-3769021-scaled.jpg"
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
              The Work-Study Advantage
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Work-study training is a powerful way to bridge the gap between academic theory and professional 
                practice. At Grand Sud, we offer several programmes in work-study format, allowing you to 
                gain valuable work experience while completing your degree.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Benefits of the Work-Study Program:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Exemption from tuition fees (covered by the host company's OPCO).</li>
                <li>Receive a monthly salary while studying.</li>
                <li>Significant professional experience to boost your CV.</li>
                <li>High employability upon graduation.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-6">
                Our team is here to help you find a host company and guide you through the administrative process.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
                CONTACT ADMISSIONS
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
