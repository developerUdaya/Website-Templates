'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FadeInSection from "@/components/fadeInSection";

interface Team {
  id: string;
  name: string;
  imageSrc: string;
  slug: string;
  role: string;
}

interface TeamSectionProps {
  title?: string;
  teams: Team[];
}

const TeamSection = ({
  title = "Executive Team",
  teams
}: TeamSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleArrowClick = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;

    const amount = dir === 'left' ? -375 : 375;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-10 sm:mb-12 md:mb-16 flex items-end justify-between px-2 sm:px-6 md:px-12">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl">
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
          className="flex gap-4 sm:gap-6 no-scrollbar px-4 sm:px-6 scroll-smooth scroll-snap-x scroll-snap-mandatory"
          style={{
            scrollBehavior: 'smooth',
            overflowX: 'auto',
            touchAction: 'auto'
          }}
        >
          {teams.map((team) => (
            <Link
              href={`/about/${team.slug}`}
              key={team.id}
              className="group block w-[80vw] sm:w-[300px] md:w-[340px] flex-shrink-0 scroll-snap-align-start"
            >
              <div className="flex flex-col">
                <div className="w-full h-[300px] sm:h-[420px] md:h-[460px] relative overflow-hidden shadow-lg rounded-lg">
                  <Image
                    src={team.imageSrc}
                    alt={team.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-300" />
                </div>

                <div className="mt-4 px-2 text-left">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">{team.name}</h3>
                  <p className="text-sm text-gray-600">{team.role}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
