'use client';
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection"; 
import Footer from "@/components/Footer";

export default function ContactUs() {
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
        headline1="Contact Us"
        headline2=""
      />

      <ContactSection />

      <Footer />
    </main>
  );
}
