import React from 'react';
import FadeInSection from "@/components/fadeInSection";

const CompanyIntroSection = () => {
  return (
    <section id="next-section" className="bg-white py-24 px-4 text-center">
      <div className="max-w-5xl mx-auto">
      <FadeInSection>
        <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-black">
          Founded in <span className="italic">1994</span> by Mike Meldman, Discovery<br />
          Land Company is a US-based real estate<br />
          developer and operator of private <span className="italic">residential</span><br />
          communities and resorts with a <span className="italic">world-renowned</span><br />
          portfolio of domestic and international<br />
          properties.
        </p>
      </FadeInSection> 
      </div>
    </section>
  );
};

export default CompanyIntroSection;
