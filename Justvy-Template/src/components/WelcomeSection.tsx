import React from 'react';
import Image from 'next/image';
import FadeInSection from "@/components/fadeInSection";

interface WelcomeSectionProps {
  imageSrc: string;
  secondImageSrc?: string;
  title?: string;
  description?: string;
  additionalDescription?:String;
}

const WelcomeSection = ({
  imageSrc,
  secondImageSrc,
  title = "Welcome to Justvy Global Innovations",
  description = "At Justvy, we are dedicated to transforming visionary ideas into cutting-edge software solutions. Our team of expert developers and innovators collaborates to create technologies that drive progress and redefine possibilities. Experience the JustVy difference—where innovation meets excellence in the digital realm.​",
  additionalDescription = "With a focus on agility and precision, JustVy leverages the latest technologies to build custom solutions tailored to your unique business needs. Whether you’re looking to enhance operational efficiency, improve customer experiences, or drive digital transformation, our team is committed to helping you achieve your goals. Let’s shape the future together, one innovation at a time."
}: WelcomeSectionProps) => {
  return (
    <section id="next-section" className="pt-20 pb-10 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col justify-between h-full space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6"><FadeInSection>{title}</FadeInSection></h2>
              <div className="text-base text-gray-600 leading-relaxed mb-4"><FadeInSection>{description}</FadeInSection></div>
              <div className="text-base text-gray-600 leading-relaxed"><FadeInSection>{additionalDescription}</FadeInSection></div>
            </div>
            {secondImageSrc && (
              <div className="relative w-auto h-full overflow-hidden">
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