import PageBanner from "@/components/common/PageBanner";

export default function ApprenticeshipPage() {
  const t = {
    title: "Pay your studies with an apprenticeship",
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
              Learn, Work, and Succeed
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Choosing an apprenticeship is a strategic move that allows you to combine high-level 
                academic instruction with real-world professional experience. At Grand Sud, we help 
                you find the perfect match with our partner companies, ensuring your tuition is 
                covered while you earn a salary and build your career.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Benefits of Apprenticeship:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tuition fees are 100% covered by the host company.</li>
                <li>Receive a monthly salary while you study.</li>
                <li>Gain direct professional experience and boost your CV.</li>
                <li>High employment rates immediately after graduation.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Start Your Journey</h3>
              <p className="text-gray-600 mb-6">
                Our apprenticeship department is ready to help you find your host company and manage 
                your contract.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors uppercase tracking-wider">
                Find an Apprentice Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
