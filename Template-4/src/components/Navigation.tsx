"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-white py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="w-full max-w-[1200px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-4">

        <Link href="/" className="flex items-center">
          <Image
            src={scrolled ? '/images/logo-dark.svg' : '/images/logo-light.svg'}
            alt="Discovery Land Company"
            width={180}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/about-dlc"
            className={`text-sm font-normal hover:opacity-70 transition-opacity ${
              scrolled ? 'text-black' : 'text-white'
            }`}
          >
            About DLC
          </Link>
          <Link
            href="/our-worlds"
            className={`text-sm font-normal hover:opacity-70 transition-opacity ${
              scrolled ? 'text-black' : 'text-white'
            }`}
          >
            Our Worlds
          </Link>
          <Link
            href="/experiences"
            className={`text-sm font-normal hover:opacity-70 transition-opacity ${
              scrolled ? 'text-black' : 'text-white'
            }`}
          >
            Experiences
          </Link>
          <Link
            href="/company"
            className={`text-sm font-normal hover:opacity-70 transition-opacity ${
              scrolled ? 'text-black' : 'text-white'
            }`}
          >
            Company
          </Link>
          <Link
            href="/gallery"
            className={`text-sm font-normal hover:opacity-70 transition-opacity ${
              scrolled ? 'text-black' : 'text-white'
            }`}
          >
            Gallery
          </Link>
        </div>

        <button
          onClick={toggleMobileMenu}
          className={`md:hidden flex items-center justify-center w-10 h-10 ${
            scrolled ? 'text-black' : 'text-white'
          }`}
        >
          <Menu />
        </button>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-full bg-black bg-opacity-90 z-50 transform transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-10">
          <div className="flex justify-between items-center mb-16">
            <Image
              src="/images/logo-light.svg"
              alt="Discovery Land Company"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
            <button
              onClick={toggleMobileMenu}
              className="text-white text-4xl"
            >
              ×
            </button>
          </div>
          <div className="flex flex-col space-y-8">
            <Link
              href="/about-dlc"
              className="text-lg text-white hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              About DLC
            </Link>
            <Link
              href="/our-worlds"
              className="text-lg text-white hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Worlds
            </Link>
            <Link
              href="/experiences"
              className="text-lg text-white hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Experiences
            </Link>
            <Link
              href="/company"
              className="text-lg text-white hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Company
            </Link>
            <Link
              href="/gallery"
              className="text-lg text-white hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
