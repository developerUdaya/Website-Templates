import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1.5fr] gap-12 md:gap-12 text-center md:text-left">

          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/logo-mark.svg"
              alt="Compass Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm text-gray-400 pb-1">GET IN TOUCH</h4>
              <p className="text-lg">(480) 624-5200</p>
              <a
                href="mailto:info@discoverylandco.com"
                className="underline hover:opacity-80"
              >
                info@discoverylandco.com
              </a>
            </div>
            <div>
              <h4 className="text-sm text-gray-400 pb-1">REAL ESTATE</h4>
              <a
                href="mailto:realestate@discoverylandco.com"
                className="underline hover:opacity-80"
              >
                realestate@discoverylandco.com
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 md:gap-8">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <Link href="/" className="hover:opacity-80 text-base">Home</Link>
              <Link href="/about-dlc" className="hover:opacity-80 text-base">About</Link>
              <Link href="/our-worlds" className="hover:opacity-80 text-base">Our Worlds</Link>
              <Link href="/experiences" className="hover:opacity-80 text-base">Experiences</Link>
              <Link href="/gallery" className="hover:opacity-80 text-base">Gallery</Link>
            </div>
            <div className="flex flex-col items-center md:items-start space-y-2">
              <Link href="#" className="hover:opacity-80 text-base">Foundation</Link>
              <Link href="#" className="hover:opacity-80 text-base">Careers</Link>
              <Link href="#" className="hover:opacity-80 text-base">Company</Link>
              <Link href="#" className="hover:opacity-80 text-base">Contact</Link>
              <Link href="#" className="hover:opacity-80 text-base">Privacy</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-4">
          <p>© Discovery Land Company. All rights reserved.</p>
          <p>Site by Outpost</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
