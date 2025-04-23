'use client';
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import WelcomeSection from "@/components/WelcomeSection";
import DestinationsGrid from "@/components/DestinationsGrid";
import GlobeSection from "@/components/GlobeSection";
import ExperienceCategories from "@/components/ExperienceCategories";
import Footer from "@/components/Footer";
import { useEffect } from "react";

//Destinations data
const featuredDestinations = [
  {
    id: "1",
    name: "Epi Saint-Tropez",
    location: "Saint-Tropez, France",
    imageSrc: "/images/destinations/epi-saint.png",
    slug: "epi-saint-tropez"
  },
  {
    id: "2",
    name: "Tenuta Toscana",
    location: "Tuscany, Italy",
    imageSrc: "/images/destinations/tuscany.png",
    slug: "tenutatoscana"
  },
  {
    id: "3",
    name: "Mohala",
    location: "Honolulu, Hawaii",
    imageSrc: "/images/destinations/mohala.png",
    slug: "mohala"
  },
  {
    id: "4",
    name: "Discovery Dunes",
    location: "Dubai South, United Arab Emirates",
    imageSrc: "/images/destinations/discovery-dunes.png",
    slug: "discovery-dunes"
  },
  {
    id: "5",
    name: "Homewood",
    location: "Lake Tahoe, California",
    imageSrc: "/images/destinations/homewood.png",
    slug: "homewood"
  },
  {
    id: "6",
    name: "North Shore Preserve",
    location: "Kaua'i, Hawaii",
    imageSrc: "/images/destinations/north-shore.png",
    slug: "north-shore"
  },
  {
    id: "7",
    name: "Yellowstone Club",
    location: "Big Sky, Montana",
    imageSrc: "/images/destinations/yellowstone.png",
    slug: "yellowstone-club"
  },
  {
    id: "8",
    name: "North Shore PreservChileno Bay Golf & Beach Club",
    location: "Cabo San Lucas, Mexico",
    imageSrc: "/images/destinations/mexico.png",
    slug: "chileno-bay"
  },
  {
    id: "9",
    name: "The Madison Club",
    location: "La Quinta, California",
    imageSrc: "/images/destinations/california.png",
    slug: "madison-club"
  },
  {
    id: "10",
    name: "The Estancia Club",
    location: "Scottsdale, Arizona",
    imageSrc: "/images/destinations/arizona.png",
    slug: "estancia-club"
  },
  {
    id: "11",
    name: "Makena Golf & Beach Club",
    location: "Maui, Hawaii",
    imageSrc: "/images/destinations/hawaii.png",
    slug: "makena-golf"
  },
  {
    id: "12",
    name: "Vaquero Golf Club",
    location: "Westlake, Texas",
    imageSrc: "/images/destinations/texas.png",
    slug: "westlake-texas"
  }
];

//Locations data
const locations = [
  {
    id: "1",
    resort: "Epi Saint-Tropez",
    city: "Saint-Tropez",
    country: "France",
    temp: 56,
    wind: 18,
    direction: 295,
    latitude: "43.2675° N",
    longitude: "6.6406° E",
    image: "/images/destinations/epi-saint.png"
  },
  {
    id: "2",
    resort: "Tenuta Toscana",
    city: "Tuscany",
    country: "Italy",
    temp: 61,
    wind: 12,
    direction: 230,
    latitude: "43.7711° N",
    longitude: "11.2486° E",
    image: "/images/destinations/tuscany.png"
  },
  {
    id: "3",
    resort: "Mohala",
    city: "Honolulu",
    country: "Hawaii",
    temp: 78,
    wind: 10,
    direction: 135,
    latitude: "21.3069° N",
    longitude: "157.8583° W",
    image: "/images/destinations/mohala.png"
  },
  {
    id: "4",
    resort: "Discovery Dunes",
    city: "Dubai South",
    country: "United Arab Emirates",
    temp: 95,
    wind: 20,
    direction: 150,
    latitude: "24.8886° N",
    longitude: "55.1572° E",
    image: "/images/destinations/discovery-dunes.png"
  },
  {
    id: "5",
    resort: "Homewood",
    city: "Lake Tahoe",
    country: "California",
    temp: 48,
    wind: 15,
    direction: 270,
    latitude: "39.0800° N",
    longitude: "120.1590° W",
    image: "/images/destinations/homewood.png"
  },
  {
    id: "6",
    resort: "North Shore Preserve",
    city: "Kaua'i",
    country: "Hawaii",
    temp: 76,
    wind: 14,
    direction: 140,
    latitude: "22.0964° N",
    longitude: "159.5261° W",
    image: "/images/destinations/north-shore.png"
  },
  {
    id: "7",
    resort: "Yellowstone Club",
    city: "Big Sky",
    country: "Montana",
    temp: 42,
    wind: 10,
    direction: 310,
    latitude: "45.2845° N",
    longitude: "111.4013° W",
    image: "/images/destinations/yellowstone.png"
  },
  {
    id: "8",
    resort: "Chileno Bay Golf & Beach Club",
    city: "Cabo San Lucas",
    country: "Mexico",
    temp: 88,
    wind: 17,
    direction: 180,
    latitude: "22.8905° N",
    longitude: "109.9167° W",
    image: "/images/destinations/mexico.png"
  },
  {
    id: "9",
    resort: "The Madison Club",
    city: "La Quinta",
    country: "California",
    temp: 84,
    wind: 13,
    direction: 220,
    latitude: "33.6634° N",
    longitude: "116.3100° W",
    image: "/images/destinations/california.png"
  },
  {
    id: "10",
    resort: "The Estancia Club",
    city: "Scottsdale",
    country: "Arizona",
    temp: 82,
    wind: 11,
    direction: 200,
    latitude: "33.4942° N",
    longitude: "111.9261° W",
    image: "/images/destinations/arizona.png"
  },
  {
    id: "11",
    resort: "Makena Golf & Beach Club",
    city: "Maui",
    country: "Hawaii",
    temp: 77,
    wind: 13,
    direction: 165,
    latitude: "20.7084° N",
    longitude: "156.4390° W",
    image: "/images/destinations/hawaii.png"
  },
  {
    id: "12",
    resort: "Vaquero Golf Club",
    city: "Westlake",
    country: "Texas",
    temp: 72,
    wind: 12,
    direction: 250,
    latitude: "32.9876° N",
    longitude: "97.1836° W",
    image: "/images/destinations/texas.png"
  }
];

//Categories data
const experienceCategories = [
  {
    id: "1",
    title: "Experiences",
    description: "Experience the ultimate round of golf on championship courses designed by the world’s most highly acclaimed architects or take a thrilling adventure with limitless activities for everyone to enjoy.",
    imageSrc: "/images/experiences.png",
    videoSrc: "/videos/experiences.mp4",
    link: "/experiences"
  },
  {
    id: "2",
    title: "Lifestyle",
    description: "Relish the very best times of your life with the ones you love in our bespoke communities that cater to a family orientated lifestyle through unparalleled amenities and inspired experiences.",
    imageSrc: "/images/lifestyle.png",
    videoSrc: "/videos/lifestyle.mp4",
    link: "/experiences"
  },
  {
    id: "3",
    title: "Wellness",
    description: "Relax and refresh your body and your mind in exquisite surroundings. Escape to our stunning pools, unwind in relaxing spas and explore innovative international culinary offerings.",
    imageSrc: "/images/wellness.png",
    videoSrc: "/videos/wellness.mp4",
    link: "/experiences"
  }
];

export default function Home() {
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
        videoSrc="/videos/hero.mp4" backgroundImage={""}
      />

      <WelcomeSection
        imageSrc="/images/hero-bg.png"
        secondImageSrc="/images/welcome-img.jpg"
      />

      <DestinationsGrid
        destinations={featuredDestinations}
      />

      <GlobeSection
        locations={locations}
      />

      <ExperienceCategories
        categories={experienceCategories}
      />

      <Footer />
    </main>
  );
}
