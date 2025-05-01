'use client';
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Blogs() {
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
        headline1="Blogs"
        headline2=""
      />

      <BlogSection imageSrc="/images/reputation-section.png" />

      <BlogSection
        imageSrc="/images/standard.png"
        title="Blog 2"
        description="By partnering with strong institutional investors, Discovery not only provides buyers with the confidence that all projects will be completed as promised, but also leans into its powerful member database to propel initial sales."
        flip={true}
      />
      
      <Footer />
    </main>
  );
}