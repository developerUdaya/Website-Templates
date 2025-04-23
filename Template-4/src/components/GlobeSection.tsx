'use client';
import Image from 'next/image';
import { useState } from 'react';
import FadeInSection from "@/components/fadeInSection";

interface Location {
  temp: number;
  wind: number;
  direction: number;
  city: string;
  country: string;
  resort: string;
  latitude: string;
  longitude: string;
  image: string;
}

const GlobeSectionWithLocation = ({ locations }: { locations: Location[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = locations[currentIndex];

  const prevLocation = () => {
    setCurrentIndex((prev) => (prev === 0 ? locations.length - 1 : prev - 1));
  };

  const nextLocation = () => {
    setCurrentIndex((prev) => (prev === locations.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#f2f2f2] pt-32 py-12 px-6 md:px-0">
      <div className="flex flex-col md:flex-row gap-0">
        <div className="w-full md:w-[52%] px-6 md:px-20 mb-10 md:mb-0">
        <FadeInSection>
          <h2 className="text-4xl font-bold mb-4">Lands of Discovery</h2>
          <p className="text-base text-gray-600 mb-8">
            A world away from the day-to-day. Your escape. Your world. Explore the map below and take a journey to our communities.
          </p>
         </FadeInSection>
          <div className="relative w-full h-[400px]">
            <Image
              src="/images/earth.png"
              alt="Globe"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex h-[400px] w-full md:w-[48%] pr-0">
          <div className="bg-black text-white flex flex-col justify-evenly pt-0 px-6 w-[70%]">
            <div className="flex space-x-4 text-xl">
              <button onClick={prevLocation} aria-label="Previous Location">&larr;</button>
              <button onClick={nextLocation} aria-label="Next Location">&rarr;</button>
            </div>

            <div className="flex space-x-6 text-sm text-gray-300">
              <span>🌤 {current.temp}°F</span>
              <span>💨 {current.wind} mph</span>
              <span>🧭 {current.direction}°</span>
            </div>

            <div>
              <p className="text-sm text-gray-400">{current.city}, {current.country}</p>
              <h3 className="text-2xl font-serif">{current.resort}</h3>
            </div>

            <p className="text-sm text-gray-300 flex items-center">
              📍 {current.latitude} / {current.longitude}
            </p>
          </div>

          <div className="relative w-[40%] h-full">
            <Image
              src={current.image}
              alt={current.resort}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobeSectionWithLocation;
