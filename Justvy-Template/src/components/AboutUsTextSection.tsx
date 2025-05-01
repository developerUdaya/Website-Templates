import React from 'react';
import FadeInSection from "@/components/fadeInSection";

const AboutUsTextSection = () => {
  return (
    <section id="next-section" className="bg-white py-20 px-4 text-center">
      <div className="max-w-5xl mx-auto">
      <FadeInSection>
        <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-black">
          At <span className="italic font-semibold">JustVy</span>, we are driven by a simple belief — innovation should be purposeful, scalable, and human-centered.<br /> 
          We specialize in delivering high-impact digital solutions <br/> that empower businesses to grow and adapt in a rapidly evolving world.
        </p>
      </FadeInSection> 
      </div>
    </section>
  );
};

export default AboutUsTextSection;