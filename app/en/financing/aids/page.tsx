import PageBanner from "@/components/common/PageBanner";

export default function FinancialAidsPage() {
  const t = {
    title: "Pay your studies with financial help",
    image: "/assets/card-aides.jpg"
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
              Financial Support for Your Success
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Grand Sud is committed to making education accessible. There are various financial 
                aid options available to help you cover your tuition fees and living expenses. From 
                state scholarships to personalized payment plans, we guide you through the 
                available solutions to secure your educational investment.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Available Aid Options:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>CROUS State Scholarships (based on social criteria).</li>
                <li>Regional grants for tourism and international mobility.</li>
                <li>Personalized tuition payment plans (monthly installments).</li>
                <li>Partnerships with local banks for low-interest student loans.</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Need Advice?</h3>
              <p className="text-gray-600 mb-6">
                Our administrative department is available to help you understand which aids you 
                are eligible for and assist with your applications.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors uppercase tracking-wider">
                Download Aid Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
