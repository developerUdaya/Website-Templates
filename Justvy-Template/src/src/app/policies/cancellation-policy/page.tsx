'use client';
import { useEffect } from "react";
import React from 'react';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CancellationPolicy from "@/components/CancellationPolicy";
import Footer from "@/components/Footer";

export default function TermsAndConditionPage() {
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
        headline1="Cancellation"
        headline2="Policy"
      />

      <CancellationPolicy />

      <Footer />
    </main>
  );
};
