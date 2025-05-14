import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import FadeInSection from "@/components/fadeInSection";

const charVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};

const renderAnimatedText = (
  text: string,
  controls: ReturnType<typeof useAnimation>
) => {
  const words = text.split(' ');

  return (
    <span className="inline-block">
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-2">
          {[...word].map((char, charIndex) => {
            const i = wordIndex * 10 + charIndex;
            return (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate={controls}
                variants={charVariant}
                className="inline-block"
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
};

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
  description = "At Justvy, we are dedicated to transforming visionary ideas into cutting-edge software solutions. Our team of expert developers and innovators collaborates to create technologies that drive progress and redefine possibilities. Experience the Justvy difference—where innovation meets excellence in the digital realm.​",
  additionalDescription = "With a focus on agility and precision, Justvy leverages the latest technologies to build custom solutions tailored to your unique business needs. Whether you’re looking to enhance operational efficiency, improve customer experiences, or drive digital transformation, our team is committed to helping you achieve your goals. Let’s shape the future together, one innovation at a time."
}: WelcomeSectionProps) => {
    const controls1 = useAnimation();
    const controls2 = useAnimation();
  
    const sectionRef = useRef<HTMLDivElement>(null);
  
    const isInView = useInView(sectionRef, {margin: "-10% 0px" });
  
    useEffect(() => {
      if (isInView) {
        controls1.start('visible').then(() => {
          controls2.start('visible');
        });
      }
    }, [isInView]);
    
  return (
    <section ref={sectionRef} id="next-section" className="pt-20 pb-10 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 items-start">
          <div className="flex flex-col justify-between h-full space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
              <span>
              {renderAnimatedText(title, controls1)}
              </span></h2>
              <div className="text-base text-gray-600 leading-relaxed mb-4"><FadeInSection>{description}</FadeInSection></div>
              <div className="text-base text-gray-600 leading-relaxed"><FadeInSection>{additionalDescription}</FadeInSection></div>
            </div>
            {secondImageSrc && (
              <div className="hidden md:hidden lg:block relative w-auto h-full overflow-hidden">
                <Image
                  src={secondImageSrc}
                  alt="Secondary"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>

          <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden">
            <Image
              src={imageSrc}
              alt="Justvy"
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