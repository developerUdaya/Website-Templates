'use client';
import { useEffect } from "react";import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ExperiencesTextSection from "@/components/ExperiencesTextSection";
import ExclusiveSection from "@/components/ExclusiveSection";
import ExperienceSection from "@/components/ExperienceSection";

const experienceCategories = [
  {
    id: "1",
    title: "Experiences",
    description: "We commission the world’s most renowned course architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses. Our trademark comfort stations also set new standards in on-course amenities.",
    imageSrc: "/images/golf-court.png",
    link: "/experiences",
    flip: false,
  },
  {
    id: "2",
    title: "Lifestyle",
    description: "Our signature Outdoor Pursuits program is designed for families to create lasting memories together. Whether you’re trying a new sport or taking a day trip, our team will ensure you make the most of every minute with activities designed to help you take advantage of everything each region has to offer.",
    imageSrc: "/images/beach.png",
    link: "/experiences",
    flip: true,
  },
  {
    id: "3",
    title: "Wellness",
    description: "Unwind at an indulgent spa. Set challenging targets with a tailor-made fitness plan. Or let our talented chefs treat you to our flavorful international menus created using the finest, carefully selected foods sourced locally from organic farms.",
    imageSrc: "/images/make-up.png",
    link: "/experiences",
    flip: false,
  }
];

export default function Experiences() {
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
        videoSrc="/videos/experiences-hero.mp4"
        headline1="Unforgettable"
        headline2="experiences" backgroundImage={""} />

      <ExperiencesTextSection /> 

      <ExclusiveSection imageSrc="/images/exclusive-section.png" />

      {experienceCategories.map((item) => (
        <ExperienceSection
          key={item.id}
          imageSrc={item.imageSrc}
          title={item.title}
          text={item.description}
          flip={item.flip}
        />
      ))}

      <Footer />
    </main>
  );
}
