import React from 'react';
import FadeInSection from "@/components/fadeInSection";

const CompanyTextSection = () => {
  return (
    <section id="next-section" className="bg-white py-24 px-4 text-center">
      <div className="max-w-5xl mx-auto">
      <FadeInSection>
        <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-black">
          Our <span className="italic">private</span> residential communities deliver<br />
          modern <span className="italic">luxury</span> living in the most <span className="italic">spectacular</span> settings.<br />
          With more than thirty years’ experience in land<br />
          development and real estate and relationships<br />
          with strong venture partners, Discovery always<br />
          delivers an <span className="italic">unparalleled</span> experience.
        </p>
      </FadeInSection> 
      </div>
    </section>
  );
};

export default CompanyTextSection;
