import React from 'react';
import FadeInSection from "@/components/fadeInSection";

const AboutUsTextSection = () => {
  return (
    <section id="next-section" className="bg-white py-20 px-4 text-center">
      <div className="max-w-5xl mx-auto">
      <FadeInSection>
        <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-black">
          At <span className="italic font-semibold">Justvy</span>, we bring all your business needs into one place 
          with cutting-edge technology and intelligent automation. From streamlining operations to boosting 
          productivity, our solutions are designed to drive innovation and growth across your organization.
        </p>
      </FadeInSection> 
      </div>
    </section>
  );
};

export default AboutUsTextSection;