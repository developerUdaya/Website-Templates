'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const  clientsList = [
  {
    id: "1",
    name: "SportsIMS",
    location: "Chennai",
    imageSrc: "/images/clients/sportims.jpg",
  },
  {
    id: "2",
    name: "FT Digital Solutions",
    location: "Chennai",
    imageSrc: "/images/clients/fds.webp",
  },
  {
    id: "3",
    name: "MGR University",
    location: "Chennai",
    imageSrc: "/images/clients/mgr.png",
  },
  {
    id: "4",
    name: "FTDC",
    location: "Chennai",
    imageSrc: "/images/clients/ftdc.png",
  },
  {
    id: "5",
    name: "Wencuts",
    location: "Chennai",
    imageSrc: "/images/clients/wencuts.jpeg",
  },
  {
    id: "6",
    name: "BETF",
    location: "Chennai",
    imageSrc: "/images/clients/BETF.png",
  },
  {
    id: "7",
    name: "TNSSCA",
    location: "Chennai",
    imageSrc: "/images/clients/tnssca.png",
  },
  {
    id: "8",
    name: "Om Sri Tara",
    location: "Chennai",
    imageSrc: "/images/clients/omsritara.avif",
  },
  {
    id: "9",
    name: "AKC",
    location: "Chennai",
    imageSrc: "/images/clients/akc.webp",
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

interface ClientSectionProps {
  title?: string;
  subtitle?: string;
}

const ClientSection = ({
  title = "Trusted By",
  subtitle = "Our Esteemed Clients",
}: ClientSectionProps) => {
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
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const isArrowClickedRef = useRef(false);
  const scrollSpeed = 1;

  const loopedDestinations = [...clientsList, ...clientsList, ...clientsList];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollLeft = el.scrollWidth / 3 + 0.5;

    const scroll = () => {
      if (!el) return;

      if (!isArrowClickedRef.current) {
        el.scrollLeft += scrollSpeed;

        if (el.scrollLeft >= (el.scrollWidth * 2) / 3 + 0.5) {
          el.scrollLeft = el.scrollWidth / 3 + 0.5;
        }
      }

      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationRef.current!);
  }, []);

  const handleArrowClick = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
  
    isArrowClickedRef.current = true;
    const amount = dir === 'left' ? -400 : 400;
  
    el.scrollBy({ left: amount, behavior: 'smooth' });
  
    setTimeout(() => {
      if (!el) return;

      if (el.scrollLeft >= el.scrollWidth * 2 / 3) {
        el.scrollLeft = el.scrollWidth / 3;
      }

      if (el.scrollLeft <= 0) {
        el.scrollLeft = el.scrollWidth / 3;
      }
  
      isArrowClickedRef.current = false;
    }, 600);
  };
  
  return (
    <section ref={sectionRef} className="pt-10 pb-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12 md:mb-16 flex items-end justify-between pl-2 lg:pl-12 pr-2 lg:pr-12">
          <h2 className="text-3xl md:text-4xl">
            <span className="italic-heading block pb-0 md:pb-1">
              {renderAnimatedText(title, controls1)}
            </span>
              {renderAnimatedText(subtitle, controls2)}
          </h2>
          <div className="flex gap-2 md:gap-4 text-2xl md:text-3xl">
            <button onClick={() => handleArrowClick('left')} className="hover:scale-110 transition">←</button>
            <button onClick={() => handleArrowClick('right')} className="hover:scale-110 transition">→</button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6 no-scrollbar px-4 md:px-6 scroll-smooth scroll-snap-x scroll-snap-mandatory"
          style={{
            scrollBehavior: 'auto',
            overflowX: 'hidden',
            touchAction: 'pan-y'
          }}
        >
          {loopedDestinations.map((destination, idx) => (
            <div
              key={`${destination.id}-${idx}`}
              className="group block w-[85vw] sm:w-[50vw] md:w-[50vw] lg:w-[360px] xl:w-[360px] h-[300px] flex-shrink-0 relative overflow-hidden shadow-lg scroll-snap-align-start"
            >
              <div className="relative w-full h-full  flex items-center justify-center" >
                <Image
                  src={destination.imageSrc}
                  alt={destination.name}
                  width={200}
                  height={200}
                  className="object-contain transition-transform duration-700 group-hover:scale-110 justify-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-full p-5 text-white">
                  <h3 className="text-xl font-serif font-semibold">{destination.name}</h3>
                  <p className="text-sm text-gray-300">{destination.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;