import Image from "next/image";
import FadeInSection from "@/components/fadeInSection";

const DiscoveryBuildersSection = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-24">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-between">
          <div>
            <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Discovery Builders</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Every Discovery property is wonderfully in-tune with its natural surroundings—
              a harmonious blend of the architecturally impressive with the environmentally sensitive.
              With Discovery, your every expectation will be met with our meticulous eye for detail
              matching outstanding levels of craftsmanship and master building.
            </p>
            <button  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="border border-black px-6 py-3 hover:bg-black hover:text-white transition-all">
              Explore
            </button>
            </FadeInSection>
          </div>

          <div className="mt-12 w-full max-w-md">
            <Image
              src="/images/about-page-1.png"
              alt="Trees and Sky"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="w-full h-full flex items-center justify-center">
          <Image
            src="/images/about-page-2.png"
            alt="Modern House"
            width={1000}
            height={700}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DiscoveryBuildersSection;
