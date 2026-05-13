import PageBanner from "@/components/common/PageBanner";

export default function VAEPage() {
  const t = {
    title: "Validation of Acquired Experience (VAE)",
    image: "/assets/pexels-olly-3756679-scaled.jpg"
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
              Turn Your Experience into a Degree
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                The Validation of Acquired Experience (VAE) allows anyone, regardless of age, education level, 
                or status, to have their professional experience recognized to obtain a certification. 
                At Grand Sud, we support you in this process to validate your skills and obtain a degree 
                aligned with your expertise in the tourism industry.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Who is the VAE for?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Employees, self-employed workers, or volunteers.</li>
                <li>Anyone with at least one year of experience directly related to the target degree.</li>
                <li>Professionals looking to secure their career path or advance in their company.</li>
              </ul>
              <h3 className="text-xl font-bold mt-8 mb-4">Our Support Process:</h3>
              <p>
                We provide personalized coaching to help you build your validation file, prepare for the 
                jury interview, and highlight your professional achievements effectively.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Start Your VAE</h3>
              <p className="text-gray-600 mb-6">
                Ready to validate your experience? Download our guide or schedule a discovery meeting 
                with our VAE coordinator.
              </p>
              <button className="w-full bg-primary-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors mb-4">
                DOWNLOAD VAE GUIDE
              </button>
              <button className="w-full border-2 border-primary-red text-primary-red py-3 rounded-lg font-bold hover:bg-red-50 transition-colors">
                SCHEDULE A MEETING
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
