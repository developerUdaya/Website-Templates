'use client';
import { useEffect } from "react";
import React from 'react';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TermsAndConditions from "@/components/Terms&Conditions";
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
        headline1="Terms and"
        headline2="Conditions"
      />

      <TermsAndConditions />

      <Footer />
    </main>
  );
};
