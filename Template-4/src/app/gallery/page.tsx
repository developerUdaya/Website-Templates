'use client';
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const galleryItems = [
  {
    id: "1",
    src: "/images/gallery/image-1.png",
    alt: "Landscapes",
    label: "Landscapes",
    slug: "landscapes"
  },
  {
    id: "2",
    src: "/images/gallery/image-2.png",
    alt: "Golf",
    label: "Golf",
    slug: "golf"
  },
  {
    id: "3",
    src: "/images/gallery/image-3.png",
    alt: "Wellness",
    label: "Wellness",
    slug: "wellness"
  },
  {
    id: "4",
    src: "/images/gallery/image-4.png",
    alt: "Outdoor Pursuits",
    label: "Outdoor Pursuits",
    slug: "outdoor-pursuits"
  },
  {
    id: "5",
    src: "/images/gallery/image-5.png",
    alt: "Clubhouses",
    label: "Clubhouses",
    slug: "clubhouses"
  },
  {
    id: "6",
    src: "/images/gallery/image-6.png",
    alt: "Lifestyle",
    label: "Lifestyle",
    slug: "lifestyle"
  }
];

export default function Gallery() {
  useEffect(() => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }, []);

  return (
    <main>
      <Navigation />

      <Hero
        backgroundImage="/images/gallery.png"
        headline1="Gallery"
        headline2=""
      />

      <section id="next-section" className="bg-black pb-12">
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {galleryItems.map((item) => (
              <Link href={`/gallery/${item.slug}`} key={item.id}>
                <div className="w-full cursor-pointer">
                  <div className="relative w-full h-[300px]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center mt-4 mb-4">
                    <span className="text-white text-lg">{item.label}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
