'use client';
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MainBlogSection from "@/components/MainBlogSection";
import AdditionalBlogSection from "@/components/AdditionalBlogSection";
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

      <MainBlogSection imageSrc="/images/blog-1.png" />

      <AdditionalBlogSection
        imageSrc="/images/blog-2.png"
        title="Building Digital Solutions Through Agile Collaboration"
        description="At the core of our software development process is a commitment to agility and partnership. We don’t just deliver code—we work closely with clients to understand their challenges, adapt to their evolving needs, and ship functional, scalable solutions that drive real results."
        additionalDescription="Whether it's a custom enterprise platform or a lightweight MVP for startups, our cross-functional teams follow agile methodologies that prioritize transparency, iterative feedback, and rapid delivery. With continuous integration, automated testing, and a user-centric mindset, we ensure our solutions are not only robust but also future-ready."
        flip={true}
      />
      
      <Footer />
    </main>
  );
}