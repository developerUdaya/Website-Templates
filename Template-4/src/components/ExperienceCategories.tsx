'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface Category {
  id: string;
  title: string;
  imageSrc: string;
  link: string;
  videoSrc: string;
  description: string;
}

interface ExperienceCategoriesProps {
  categories: Category[];
}

const ExperienceCategories = ({ categories }: ExperienceCategoriesProps) => {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const handleExplore = (link: string) => {
    window.location.href = link;
  };
  

  const handleClose = () => {
    setActiveCategory(null);
  };

  return (
    <section className="w-full h-[600px] relative overflow-hidden">
      {!activeCategory && (
        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group cursor-pointer overflow-hidden"
              onClick={() => setActiveCategory(category)}
            >
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={category.imageSrc}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10">
                <h2 className="text-3xl font-medium">{category.title}</h2>
                <div className="mt-6 w-12 h-12 rounded-full border border-white flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-black">
                  <span className="text-2xl">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeCategory && (
        <div className="absolute inset-0 z-20 bg-black/80 flex flex-col items-center justify-center">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-black text-3xl flex items-center justify-center z-30 hover:scale-110 transition-transform">
            ×
          </button>

          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src={activeCategory.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-black/50 z-10" />

          <div className="relative z-10 text-white text-center p-8 max-w-3xl">
            <h2 className="text-4xl font-bold mb-4">{activeCategory.title}</h2>
            <p className="text-lg mb-6">
              {activeCategory.description}
            </p>
            <button
              onClick={() => handleExplore(activeCategory.link)}
              className="bg-white text-black px-6 py-3 rounded-full text-lg"
            >
              Explore
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceCategories;
