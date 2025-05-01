'use client';
import Image from "next/image";
import Link from "next/link";

const allProducts = [
    {
      id: "1",
      name: "Epi Saint-Tropez",
      location: "Saint-Tropez, France",
      imageSrc: "/images/our-worlds/epi-saint-tropez.png",
      slug: "epi-saint-tropez"
    },
    {
      id: "2",
      name: "Tenuta Toscana",
      location: "Tuscany, Italy",
      imageSrc: "/images/our-worlds/toscana.png",
      slug: "tenutatoscana"
    },
    {
      id: "3",
      name: "Mohala",
      location: "Honolulu, Hawaii",
      imageSrc: "/images/our-worlds/mohala.png",
      slug: "mohala"
    },
    {
      id: "4",
      name: "Crazy Mountain Ranch",
      location: "Shields Valley, Montana",
      imageSrc: "/images/our-worlds/mountain.png",
      slug: "crazy-mountain-ranch"
    },
    {
      id: "5",
      name: "Maverick Golf & Ranch Club",
      location: "Fort Worth, Texas",
      imageSrc: "/images/our-worlds/ranch-club.png",
      slug: "maverick-golf-ranch-club"
    },
    {
      id: "6",
      name: "Austin Surf Club",
      location: "Austin, Texas",
      imageSrc: "/images/our-worlds/austin.png",
      slug: "austin-surf-club"
    },
    {
      id: "7",
      name: "Atlantic Fields",
      location: "Hobe Sound, Florida",
      imageSrc: "/images/our-worlds/atlantic.png",
      slug: "atlantic-fields"
    },
    {
      id: "8",
      name: "The Hills",
      location: "The Hamptons, New York",
      imageSrc: "/images/our-worlds/hills.png",
      slug: "the-hills"}, 
    {
      id: "9",
      name: "Discovery Dunes",
      location: "Dubai South, United Arab Emirates",
      imageSrc: "/images/our-worlds/dubai.png",
      slug: "discovery-dunes"
    }, 
    {
      id: "10",
      name: "Naples Beach Club",
      location: "Naples, Florida",
      imageSrc: "/images/our-worlds/naples.png",
      slug: "naples-beach-club"
    }, 
    {
      id: "11",
      name: "Taymouth Castle",
      location: "Perthshire, Scotland",
      imageSrc: "/images/our-worlds/castle.png",
      slug: "taymouth-castle"
    },
    {
      id: "12",
      name: "Homewood",
      location: "Lake Tahoe, California",
      imageSrc: "/images/our-worlds/homewood.png",
      slug: "homewood"
    },
    {
      id: "13",
      name: "Zapotal Golf & Beach Club",
      location: "Guanacaste, Costa Rica",
      imageSrc: "/images/our-worlds/zapotal.png",
      slug: "zapotal-golf-beach-club"
    }, 
    {
      id: "14",
      name: "North Shore Preserve",
      location: "Kaua'i, Hawaii",
      imageSrc: "/images/our-worlds/north-shore.png",
      slug: "north-shore-preserve"
    }, 
    {
      id: "15",
      name: "CostaTerra Golf & Ocean Club",
      location: "Comporta, Portugal",
      imageSrc: "/images/our-worlds/comporta.png",
      slug: "costaterra-golf-ocean-club"
    }, 
    {
      id: "16",
      name: "Playa Grande Golf & Ocean Club",
      location: "Rio San Juan, Dominican Republic",
      imageSrc: "/images/our-worlds/grande-gulf.png",
      slug: "playa-grande-golf-ocean-club"
    }, 
    {
      id: "17",
      name: "Yellowstone Club",
      location: "Big Sky, Montana",
      imageSrc: "/images/our-worlds/yellowstone.png",
      slug: "yellowstone-club"
    }, 
    {
      id: "18",
      name: "James Island",
      location: "British Columbia, Canada",
      imageSrc: "/images/our-worlds/james-island.png",
      slug: "james-island"
    }, 
    {
      id: "19",
      name: "Barbuda Ocean Club",
      location: "Barbuda, West Indies",
      imageSrc: "/images/our-worlds/barbuda.png",
      slug: "barbuda-ocean-club"
    }, 
    {
      id: "20",
      name: "Troubadour Golf & Field Club",
      location: "Nashville, Tennessee",
      imageSrc: "/images/our-worlds/tennessee.png",
      slug: "troubadour-golf-field-club"
    }
  ];

  const ProductSection = () => {
    return(
        <section className="py-16 px-8">
        <div className="max-w-screen-2xl mx-auto mt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {allProducts.map((product) => (
          <Link href={`/our-products/${product.slug}`} key={product.id}>
            <div className="cursor-pointer">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-400 text-sm">{product.location}</p>
            </div>
          </Link>
        ))}
        </div>
      </section>
    )
  }

  export default ProductSection;