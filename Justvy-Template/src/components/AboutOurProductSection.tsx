'use client'
import React, { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: string;
  title: string;
  imageSrcDesktop: string;
  imageSrcTablet: string;
  imageSrcMobile: string;
  link: string;
  description: string;
}

const ProductCategories: Product[] = [
  {
    id: "1",
    title: "Gubera-Ecom Builder",
    description: "Experience the ultimate round of golf on championship courses designed by the world’s most highly acclaimed architects or take a thrilling adventure with limitless activities for everyone to enjoy.",
    imageSrcDesktop: "/images/gubera-2.png",
    imageSrcTablet: "/images/gubera-1.png",
    imageSrcMobile: "/images/gubera.png",
    link: "#"
  },
  {
    id: "2",
    title: "Justvy VoIP",
    description: "Relish the very best times of your life with the ones you love in our bespoke communities that cater to a family orientated lifestyle through unparalleled amenities and inspired experiences.",
    imageSrcDesktop: "/images/voip-1.png",
    imageSrcTablet: "/images/voip-1.png",
    imageSrcMobile: "/images/voip.png",
    link: "#"
  },
  {
    id: "3",
    title: "WhatsApp Chat Bot",
    description: "Relax and refresh your body and your mind in exquisite surroundings. Escape to our stunning pools, unwind in relaxing spas and explore innovative international culinary offerings.",
    imageSrcDesktop: "/images/whatsapp-1.png",
    imageSrcTablet: "/images/whatsapp-1.png",
    imageSrcMobile: "/images/whatsapp.png",
    link: "#"
  }
];

const AboutOurProductSection = () => {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const handleExplore = (link: string) => {
    window.location.href = link;
  };
  
  return (
    <section className="w-full h-[570px] relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
          {ProductCategories.map((product) => (
            <div
              key={product.id}
              className="relative group cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-100">
                <div className="hidden lg:block">
                  <Image
                    src={product.imageSrcDesktop}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                 </div>

                 <div className="hidden md:block lg:hidden">
                 <Image
                    src={product.imageSrcTablet}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                 </div>

                  <div className="block md:hidden lg:hidden">
                  <Image
                    src={product.imageSrcMobile}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                  </div>   
              </div>

              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition duration-300" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10">
                <h2 className="text-3xl font-bold">{product.title}</h2>
                <button
                  onClick={() => handleExplore(product.link)}
                  className="mt-6 w-12 h-12 rounded-full border border-white flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-black"
                  aria-label={`Explore ${product.title}`}
                >
                  <span className="text-2xl">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default AboutOurProductSection;
