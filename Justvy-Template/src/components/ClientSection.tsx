'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const  clientsList = [
  {
    id: "1",
    name: "Epi Saint-Tropez",
    location: "Saint-Tropez, France",
    imageSrc: "/images/destinations/epi-saint.png",
    slug: "epi-saint-tropez"
  },
  {
    id: "2",
    name: "Tenuta Toscana",
    location: "Tuscany, Italy",
    imageSrc: "/images/destinations/tuscany.png",
    slug: "tenutatoscana"
  },
  {
    id: "3",
    name: "Mohala",
    location: "Honolulu, Hawaii",
    imageSrc: "/images/destinations/mohala.png",
    slug: "mohala"
  },
  {
    id: "4",
    name: "Discovery Dunes",
    location: "Dubai South, United Arab Emirates",
    imageSrc: "/images/destinations/discovery-dunes.png",
    slug: "discovery-dunes"
  },
  {
    id: "5",
    name: "Homewood",
    location: "Lake Tahoe, California",
    imageSrc: "/images/destinations/homewood.png",
    slug: "homewood"
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
        <div className="mb-16 md:mb-16 flex items-end justify-between pl-4 md:pl-12 pr-4 md:pr-12">
          <h2 className="text-3xl md:text-4xl">
            <span className="italic-heading block pb-1">
              {renderAnimatedText(title, controls1)}
            </span>
              {renderAnimatedText(subtitle, controls2)}
          </h2>
          <div className="flex gap-4 text-2xl">
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
            <Link
              href={`/locations/${destination.slug}`}
              key={`${destination.id}-${idx}`}
              className="group block w-[85vw] sm:w-[50vw] md:w-[50vw] lg:w-[360px] xl:w-[360px] h-[300px] flex-shrink-0 relative overflow-hidden shadow-lg scroll-snap-align-start"
            >
              <div className="relative w-full h-full">
                <Image
                  src={destination.imageSrc}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-full p-5 text-white">
                  <h3 className="text-xl font-serif font-semibold">{destination.name}</h3>
                  <p className="text-sm text-gray-300">{destination.location}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;