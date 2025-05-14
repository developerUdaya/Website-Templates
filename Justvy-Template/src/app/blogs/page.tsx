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
        description="Successful software development hinges on the ability to adapt, communicate, and deliver with purpose. Agile collaboration offers a structured yet flexible approach that empowers teams to build solutions incrementally, focusing on real-world functionality and continuous improvement. By embracing short development cycles and regular feedback, agile practices help ensure that projects stay aligned with evolving goals."
        additionalDescription="This methodology also encourages strong cross-functional teamwork, where developers, designers, and stakeholders work together from concept to delivery. Through automation, iterative testing, and shared ownership, agile teams not only produce robust and scalable digital products—they also cultivate a process that’s built to evolve and succeed in changing environments."
        flip={true}
        link="/blog-content/blog-2"
      />
      
      <Footer />
    </main>
  );
}