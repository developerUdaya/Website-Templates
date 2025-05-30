'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useLoading } from '@/app/ClientBody';

interface HeroProps {
  videoSrc?: string;
  backgroundImage: string;
  headline1?: string;
  headline2?: string;
  subheadline?: string;
}

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

const Hero = ({
  videoSrc,
  backgroundImage,
  headline1 = "Modern Twist",
  headline2 = "On Tradition",
  subheadline = "Scroll to explore"
}: HeroProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const { isAnimating } = useLoading();

  useEffect(() => {
    if (!isAnimating && isInView) {
      controls1.start("visible").then(() => {
        controls2.start("visible");
      });
    }
  }, [isInView, isAnimating]);

  const handleScroll = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderAnimatedText = (
    text: string,
    controls: ReturnType<typeof useAnimation>
  ) => (
    <span className="inline-block">
      {[...text].map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate={controls}
          variants={charVariant}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      {videoSrc ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={backgroundImage}
          alt="Background"
        />
      )}

      <div className="absolute inset-0 bg-black bg-opacity-20" />

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-2">
            <span className="italic-heading">
              {renderAnimatedText(headline1, controls1)}
              <br />
              {renderAnimatedText(headline2, controls2)}
            </span>
          </h1>
        </div>

        <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center">
          <p className="text-sm mb-4">{subheadline}</p>
          <button onClick={handleScroll} aria-label="Scroll to next section">
            <div className="animate-bounce text-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;