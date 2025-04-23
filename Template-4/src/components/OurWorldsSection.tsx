import Link from 'next/link';
import FadeInSection from "@/components/fadeInSection";

export default function OurWorldsSection() {
  return (
    <div
      className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/our-worlds.png')",
      }}
    >
      <div className="text-center px-4">
      <FadeInSection>
        <h2 className="text-5xl md:text-7xl font-semibold mb-6">Our Worlds</h2>
        <Link href="/our-worlds">
          <span className="inline-block text-lg md:text-xl cursor-pointer border-b-2 border-white hover:opacity-80 transition">
            Explore
          </span>
        </Link>
      </FadeInSection>
      </div>
    </div>
  );
}
