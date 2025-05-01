'use client';
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import WelcomeSection from "@/components/WelcomeSection";
import ClientSection from "@/components/ClientSection";
import AboutOurProductSection from "@/components/AboutOurProductSection";
import ClientsExperienceSection from "@/components/ClientsExperienceSection";
import Footer from "@/components/Footer";

const experienceCategories = [
  {
    id: "1",
    title: "Experiences",
    description: "Experience the ultimate round of golf on championship courses designed by the world’s most highly acclaimed architects or take a thrilling adventure with limitless activities for everyone to enjoy.",
    imageSrc: "/images/experiences.png",
    videoSrc: "/videos/experiences.mp4",
    link: "/experiences"
  },
  {
    id: "2",
    title: "Lifestyle",
    description: "Relish the very best times of your life with the ones you love in our bespoke communities that cater to a family orientated lifestyle through unparalleled amenities and inspired experiences.",
    imageSrc: "/images/lifestyle.png",
    videoSrc: "/videos/lifestyle.mp4",
    link: "/experiences"
  },
  {
    id: "3",
    title: "Wellness",
    description: "Relax and refresh your body and your mind in exquisite surroundings. Escape to our stunning pools, unwind in relaxing spas and explore innovative international culinary offerings.",
    imageSrc: "/images/wellness.png",
    videoSrc: "/videos/wellness.mp4",
    link: "/experiences"
  }
];

export default function Home() {
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
        videoSrc="/video/home.mp4" backgroundImage={""}
      />

      <WelcomeSection
        imageSrc="/images/hero-bg.png"
        secondImageSrc="/images/welcome-img.jpg"
      />

      <ClientSection />

      <AboutOurProductSection
        products={experienceCategories}
      />

      <ClientsExperienceSection />

      <Footer />
    </main>
  );
}