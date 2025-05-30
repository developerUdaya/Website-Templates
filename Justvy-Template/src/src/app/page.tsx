'use client';
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WelcomeSection from "@/components/WelcomeSection";
import ClientSection from "@/components/ClientSection";
import AboutOurProductSection from "@/components/AboutOurProductSection";
import ClientsExperienceSection from "@/components/ClientsExperienceSection";
import Footer from "@/components/Footer";

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
        imageSrc="/images/welcome.png"
        secondImageSrc="/images/welcome-2.png"
      />

      <ClientSection />

      <AboutOurProductSection />

      <ClientsExperienceSection />

      <Footer />
    </main>
  );
}