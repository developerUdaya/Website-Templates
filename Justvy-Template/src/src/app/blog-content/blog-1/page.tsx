'use client';
import { useEffect } from "react";
import React from 'react';
import Navigation from "@/components/Navigation";
import FirstBlogContent from "@/components/FirstBlogContent";
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
    
      <FirstBlogContent />

      <Footer />
    </main>
  );
};
