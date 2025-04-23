'use client';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import IntentionSection from "@/components/IntentionSection";
import SpotGrid from "@/components/SpotGrid";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import CompanyIntroSection from "@/components/CompanyIntroSection";
import DiscoveryStory from "@/components/DiscoveryStory";
import DiscoveryBuildersSection from "@/components/DiscoveryBuildersSection";
import OurWorldsSection from "@/components/OurWorldsSection";

const featuredSpots = [
  {
    id: "1",
    name: "Luxury Bespoke Homes",
    imageSrc: "/images/spots/room.png",
    slug: "room"
  },
  {
    id: "2",
    name: "Fun for the Whole Family",
    imageSrc: "/images/spots/kid.png",
    slug: "kid"
  },
  {
    id: "3",
    name: "Experiences Beyond Compare",
    imageSrc: "/images/spots/golf.png",
    slug: "golf"
  },
  {
    id: "4",
    name: "Inspired By The Land",
    imageSrc: "/images/spots/swimming-pool.png",
    slug: "swimming-pool"
  },
  {
    id: "5",
    name: "Sustainable Future",
    imageSrc: "/images/spots/garden.png",
    slug: "garden"
  }
];

export default function AboutDLC() {
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
        videoSrc="" backgroundImage={"/images/about-hero.png"}
        headline1="Creating Your"
        headline2="perfect world"
      />

      <CompanyIntroSection /> 

      <IntentionSection imageSrc="/images/intention-section.png" />

      <SpotGrid spots={featuredSpots}/>

      <DiscoveryStory />

      <DiscoveryBuildersSection />
      
      <OurWorldsSection />

      <Footer />
    </main>
  );
}
