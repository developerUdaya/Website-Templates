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
              src="/image/justvy.webp"
              alt="Justvy"
              width={48}
              height={48}
              className="w-auto h-20"
            />
          </div>

          <div className="space-y-6">
          <div>
              <h4 className="text-lg text-gray-400 pb-1">Contact Us</h4>
              <a href="tel:+919677758128" className="text-sm pb-1 block hover:opacity-80">
                +91 96777 58128
              </a>
              <a
                href="mailto:info@justvy.in"
                className="hover:opacity-80"
              >
                info@justvy.in
              </a>
            </div>
            <div>
              <h4 className="text-lg text-gray-400 pb-1">Address</h4>
              <a
                href="https://maps.app.goo.gl/VJat4P2nkWMziJ1P6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white hover:opacity-80"
              >
                358G+RGH, Mulakalacheru, Golden George Nagar, Mogappair West, 
                Maduravoyal, Chennai, Tamil Nadu 600107
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 md:gap-8">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <Link href="/" className="hover:opacity-80 text-base">Home</Link>
              <Link href="/about-us" className="hover:opacity-80 text-base">About Us</Link>
              <Link href="/our-products" className="hover:opacity-80 text-base">Our Products</Link>
              <Link href="/blogs" className="hover:opacity-80 text-base">Blogs</Link>
              <Link href="/contact-us" className="hover:opacity-80 text-base">Contact Us</Link>
            </div>
            <div className="flex flex-col items-center md:items-start space-y-2">
              <Link href="#" className="hover:opacity-80 text-base">Terms and Condition</Link>
              <Link href="#" className="hover:opacity-80 text-base">Privacy Policy</Link>
              <Link href="#" className="hover:opacity-80 text-base">Cancellation Policy</Link>
              <Link href="#" className="hover:opacity-80 text-base">Payment Policy</Link>
              <Link href="#" className="hover:opacity-80 text-base">Refund Policy</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 flex flex-col md:flex-row items-center justify-center text-sm text-gray-400 gap-4">
          <p>Copyright © 2024 JustVy Global Innovations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;