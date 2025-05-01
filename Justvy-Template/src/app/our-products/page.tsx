'use client';
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import ProductSection from "@/components/ProductSection"
import Footer from "@/components/Footer";

export default function OurProducts() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black text-white">
      <Navigation />

      <ProductSection />

      <Footer />
    </main>
  );
}