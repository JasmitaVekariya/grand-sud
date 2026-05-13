import PageBanner from "@/components/common/PageBanner";

export default function ContinuingEducationPage() {
  const t = {
    title: "Continuing education",
    image: "/assets/pexels-silverkblack-30535785-scaled.jpg"
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
              Lifelong Learning & Professional Growth
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Our continuing education programmes are designed for professionals looking to upgrade their 
                skills, change careers, or stay current with the latest industry trends. We offer flexible 
                learning paths that respect your professional commitments while providing high-quality 
                instruction from industry experts.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Why Choose Continuing Education at Grand Sud?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Customized training modules tailored to your specific career goals.</li>
                <li>Instruction from seasoned professionals with real-world expertise.</li>
                <li>Flexible scheduling options to accommodate working professionals.</li>
                <li>Access to a vast professional network and career development resources.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Corporate Solutions</h3>
              <p className="text-gray-600 mb-6">
                Are you looking for training solutions for your entire team? We offer bespoke corporate 
                programmes designed to meet your company's specific needs.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
                REQUEST A QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
