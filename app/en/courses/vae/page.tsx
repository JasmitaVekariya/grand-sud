import PageBanner from "@/components/common/PageBanner";
import CourseDetailLayout from "@/components/courses/CourseDetailLayout";

export default function VAEPageEN() {
  const sections = [
    { id: "accessibles", label: "TRAINING COURSES ACCESSIBLE THROUGH THE VAE" },
    { id: "etapes", label: "THE DIFFERENT STAGES OF VALIDATING PRIOR LEARNING" },
  ];

  return (
    <main className="bg-white">
      <PageBanner
        title={
          <>
            Validation of Acquired <br />
            Experience (VAE)
          </>
        }
        image="/assets/pexels-olly-3756679-scaled.jpg"
      />

      <CourseDetailLayout sections={sections}>
        <div className="space-y-24">
          <div className="space-y-6">
            <p className="text-[15px] font-bold text-black leading-relaxed">
              Note: this page is for informational purposes only for English-speaking students; only French-language courses are currently available through VAE.
            </p>
            <p className="text-[15px] text-gray-700 leading-relaxed font-medium">
              The Validation of Acquired Experience (VAE) offers the opportunity to obtain professional certification by recognizing skills acquired through professional, personal, or volunteer experience. The certification obtained through this process has the same value as that awarded at the end of initial or continuing education.
            </p>
          </div>

          <section id="accessibles" className="scroll-mt-32 space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
              TRAINING COURSES ACCESSIBLE THROUGH THE VAE
            </h2>
            <p className="text-[15px] text-gray-700 leading-relaxed font-medium">
              From BTS to Bachelor&apos;s degrees, our French qualifications are available through VAE (validation of acquired experience), with different terms and conditions depending on the qualification.
            </p>
          </section>

          <section id="etapes" className="scroll-mt-32 space-y-8">
            <h2 className="text-[32px] md:text-[42px] font-bold text-primary-red uppercase tracking-tight leading-tight">
              THE DIFFERENT STAGES OF VALIDATING PRIOR LEARNING
            </h2>

            <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed font-medium">
              <p>
                VAE is accessible to everyone, regardless of age, status, or level of education. All experience related to the certification sought, including volunteer work, can be taken into account. A real lever for professional development, it allows you to:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>Showcase your skills</li>
                <li>Give meaning and coherence to your career path</li>
                <li>Revive or boost your career</li>
                <li>Anticipate or accelerate a change of position</li>
                <li>Change your career path</li>
              </ul>
              <p>
                The VAE process is organized into several essential stages, for which we recommend support to help you complete each one with confidence.
              </p>
              <p className="italic">
                Whether you complete your VAE with support or independently, you will need to pay fees related to the jury. The conditions and procedures for this jury will be explained to you before you commit to the VAE process.
              </p>
            </div>
          </section>
        </div>
      </CourseDetailLayout>
    </main>
  );
}
