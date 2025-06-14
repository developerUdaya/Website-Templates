'use client';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FadeInSection from "@/components/fadeInSection";

interface Spot {
  id: string;
  name: string;
  imageSrc: string;
  slug: string;
}

interface SpotsGridProps {
  title?: string;
  spots: Spot[];
}

const SpotsGrid = ({
  title = "The Discovery Difference",
  spots
}: SpotsGridProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const isArrowClickedRef = useRef(false);
  const scrollSpeed = 0.5;

  const loopedSpots = [...spots, ...spots, ...spots];

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
      isArrowClickedRef.current = false;
    }, 600);
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12 md:mb-16 flex items-end justify-between pl-4 md:pl-12 pr-4 md:pr-12">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl">
              <span className="italic-heading block">{title}</span>
            </h2>
          </FadeInSection>
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
          {loopedSpots.map((spot, idx) => (
            <Link
              href={`/about/${spot.slug}`}
              key={`${spot.id}-${idx}`}
              className="group block w-[340px] h-[460px] flex-shrink-0 relative overflow-hidden shadow-lg scroll-snap-align-start"
            >
              <div className="relative w-full h-full">
                <Image
                  src={spot.imageSrc}
                  alt={spot.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-full p-5 text-white">
                  <h3 className="text-xl font-serif font-semibold">{spot.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpotsGrid;
