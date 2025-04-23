'use client';
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import CompanyTextSection from "@/components/CompanyTextSection";
import OurWorldsSection from "@/components/OurWorldsSection";
import ReputationSection from "@/components/ReputationSection";
import TeamSection from "@/components/TeamSection";

const executiveTeam = [
  {
    id: "1",
    name: "Steve Adelson",
    imageSrc: "/images/team/steve.png",
    slug: "steve",
    role: 'Chaiemain, Discovery Creative'
  },
  {
    id: "2",
    name: "Monica Green",
    imageSrc: "/images/team/monica.png",
    slug: "monica",
    role: 'Chief Marketing Officer'
  },
  {
    id: "3",
    name: "Ed david",
    imageSrc: "/images/team/david.png",
    slug: "ed",
    role: 'Partner, Discovery Land Company'
  },
  {
    id: "4",
    name: "John Doe",
    imageSrc: "/images/team/john.png",
    slug: "john",
    role: 'Executive Vice President of Global saled'
  },
  {
    id: "5",
    name: "Frank Smith",
    imageSrc: "/images/team/frank.png",
    slug: "frank",
    role: 'Senior Vice President of Sales'
  },
  {
    id: "6",
    name: "Katie Perry",
    imageSrc: "/images/team/katie.png",
    slug: "katie",
    role: 'Chief Human Resources Officer'
  },
  {
    id: "7",
    name: "Mike Johnson",
    imageSrc: "/images/team/mike.png",
    slug: "mike",
    role: 'Chief Legal Officer'
  }
];

export default function Company() {
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
        videoSrc=""
        backgroundImage="/images/company-section.png"
        headline1="Modern"
        headline2="luxury living"
      />
      
      <CompanyTextSection />

      <ReputationSection imageSrc="/images/reputation-section.png" />

      <ReputationSection
        imageSrc="/images/standard.png"
        title="Only the highest of standards"
        description="By partnering with strong institutional investors, Discovery not only provides buyers with the confidence that all projects will be completed as promised, but also leans into its powerful member database to propel initial sales."
        reverse={true}
      />
      
      <TeamSection teams={executiveTeam}/>

      <OurWorldsSection />

      <Footer />
    </main>
  );
}