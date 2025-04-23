import React from 'react';
import Image from 'next/image';
import FadeInSection from "@/components/fadeInSection";


interface WelcomeSectionProps {
  imageSrc: string;
  secondImageSrc?: string;
  title?: string;
  description?: string;
}

const WelcomeSection = ({
  imageSrc,
  secondImageSrc,
  title = "Welcome to Discovery",
  description = "Explore the unique atmosphere of our private residential communities and experience the Discovery difference. This is classic, comfortable, elevated living in nature's most spectacular settings. Find your unique world - a place where your family can create unforgettable moments, together."
}: WelcomeSectionProps) => {
  return (
    <section id="next-section" className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col justify-between h-full space-y-12">
            <div>
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">{title}</h2>
              <p className="text-base text-gray-600 leading-relaxed">{description}</p>
            </FadeInSection>
            </div>
            {secondImageSrc && (
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={secondImageSrc}
                  alt="Secondary"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>

          <div className="relative w-full h-[600px] overflow-hidden">
            <Image
              src={imageSrc}
              alt="Welcome to Discovery"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
