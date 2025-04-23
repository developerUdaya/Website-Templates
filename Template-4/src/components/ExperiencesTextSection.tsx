import React from 'react';
import FadeInSection from "@/components/fadeInSection";

const ExperiencesTextSection = () => {
  return (
    <section id="next-section" className="bg-white py-24 px-4 text-center">
      <div className="max-w-5xl mx-auto">
      <FadeInSection>
        <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-black">
            Memorable days. Exceptional nights. We believe<br />
            it’s our <span className="italic">mission</span> to make every minute <span className="italic">matter</span>. So you<br />
            can live your life to the fullest, with the <span className="italic">people</span><br />
            closest to you.
        </p>
      </FadeInSection> 
      </div>
    </section>
  );
};

export default ExperiencesTextSection;
