'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import { motion, useAnimation } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Person 1',
    position: 'Product Manager, InnovateTech',
    imageSrc: '/image/review-1.png',
    content: `“Working with Justvy has been a game-changer. Their on-time completion and exceptional quality consistently exceed expectations. Highly recommended for reliable and innovative solutions!”`
  },
  {
    id: 2,
    name: 'Person 2',
    position: 'Software Engineer, CodeWorks',
    imageSrc: '/image/review-2.png',
    content: `“They made our software much easier to manage. Everything runs smoother now, saving us time and effort. We’re really happy with how everything turned out!”`
  },
  {
    id: 3,
    name: 'Person 3',
    position: 'CTO, TechCorp',
    imageSrc: '/image/review-3.png',
    content: `“JustVy has transformed our business. Their energetic team brings new ideas and offers 24/7 support, keeping us covered at all times. Their dedication and skill have truly exceeded our expectations”`
  }
];

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
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </span>
);

interface ClientsExperienceSectionProps {
  title?: string;
  subtitle?: string;
}

const ClientsExperienceSection = ({
  title = "Client Testimonials",
  subtitle = "Feedback from Those Who Matter Most",
}: ClientsExperienceSectionProps) => {
  const [hasMounted, setHasMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  
    const checkVisibility = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
  
    useEffect(() => {
      const handleScroll = () => {
        checkVisibility();
      };
  
      window.addEventListener('scroll', handleScroll);
      checkVisibility();
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      if (isVisible) {
        controls1.start('visible').then(() => {
          controls2.start('visible');
        });
      }
    }, [isVisible]);
  

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const visibleCards = isMobile ? 1 : 2;

  const extended = [
    ...testimonials.slice(-visibleCards),
    ...testimonials,
    ...testimonials.slice(0, visibleCards)
  ];

  const [index, setIndex] = useState(visibleCards);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev: number) => prev + 1);
      setIsTransitioning(true);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (index === extended.length - visibleCards) {
        setIsTransitioning(false);
        setIndex(visibleCards);
      }
      if (index === 0) {
        setIsTransitioning(false);
        setIndex(extended.length - visibleCards * 2);
      }
    };

    const slider = sliderRef.current;
    slider?.addEventListener('transitionend', handleTransitionEnd);
    return () => {
      slider?.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [index, extended.length, visibleCards]);

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  }, [isTransitioning]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        const slider = sliderRef.current;
        if (!slider) return;

        setIsTransitioning(false);
        setIndex((prev: number) => {
          const validIndex = prev >= extended.length - visibleCards
            ? visibleCards
            : prev < visibleCards
              ? extended.length - visibleCards * 2
              : prev;

          requestAnimationFrame(() => {
            if (slider) {
              slider.style.transition = 'none';
              slider.style.transform = `translateX(-${(100 / extended.length) * validIndex}%)`;

              requestAnimationFrame(() => {
                if (slider) {
                  slider.style.transition = 'transform 0.5s ease-in-out';
                  setIsTransitioning(true);
                }
              });
            }
          });

          return validIndex;
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [extended.length, visibleCards]);

  if (!hasMounted) return null;

  return (
    <section ref={sectionRef} className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12 md:mb-16 flex items-end justify-between pl-4 md:pl-12 pr-4 md:pr-12">
            <h2 className="text-3xl md:text-4xl">
              <span className="italic-heading block pb-2">
                {renderAnimatedText(title, controls1)}
              </span>
              <span>
                {renderAnimatedText(subtitle, controls2)}
              </span>
            </h2>
        </div>
      </div>

      <div className="overflow-hidden w-full">
        <div
          ref={sliderRef}
          className="flex"
          style={{
            width: `${(extended.length * 100) / visibleCards}%`,
            transform: `translateX(-${(100 / extended.length) * index}%)`,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
          }}
        >
          {extended.map((t, i) => (
            <div
              key={i}
              className="px-3"
              style={{ width: `${100 / extended.length}%` }}
            >
              <div className="rounded-lg border border-black bg-white p-6 shadow-lg h-full flex flex-col justify-between min-h-[200px]">
                <div>
                  <div className="flex items-center text-yellow-400 mb-4">
                    {Array(5).fill(0).map((_, i) => (
                      <FaStar key={i} className="mr-1" />
                    ))}
                  </div>
                  <p className="italic text-lg leading-relaxed">{t.content}</p>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      src={t.imageSrc}
                      alt={t.name}
                      width={80}
                      height={80}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-black">{t.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsExperienceSection;