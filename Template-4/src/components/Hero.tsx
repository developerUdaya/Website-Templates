'use client';
import React from 'react';
import FadeInSection from "@/components/fadeInSection";

interface HeroProps {
  videoSrc?: string;
  backgroundImage: string;
  headline1?: string;
  headline2?: string;
  subheadline?: string;
}

const Hero = ({
  videoSrc,
  backgroundImage,
  headline1 = "Discover",
  headline2 = "yourworld",
  subheadline = "Scroll to explore"
}: HeroProps) => {
  const handleScroll = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
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
      <FadeInSection>
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-2">
            <span className="italic-heading">
              {headline1}{" "}
            </span>
            <br />
            {headline2}
          </h1>
        </div>
        </FadeInSection>

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
