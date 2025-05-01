'use client';
import { useEffect } from "react";import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutUsTextSection from "@/components/AboutUsTextSection";
import ServiceSectionsContainer from "@/components/ServiceSection";
import Footer from "@/components/Footer";

export default function AboutUs() {
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
        headline1="About Us"
        headline2=""
      />

      <AboutUsTextSection /> 

      <ServiceSectionsContainer />

      <Footer />
    </main>
  );
}