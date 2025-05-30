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
        scrolled ? 'bg-white py-4 shadow-md' : 'bg-neutral-900 py-4'
      }`}
    >
      <nav className="w-full max-w-[1200px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-4">

        <Link href="/" className="flex items-center">
          <Image
            src={scrolled ? '/images/dark-logo.png' : '/images/logo.png'}
            alt="Justvy"
            width={180}
            height={48}
            className="h-12 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`text-sm font-normal hover:opacity-70 transition-opacity ${
              scrolled ? 'text-black' : 'text-white'
            }`}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`text-sm font-normal hover:opacity-70 transition-opacity ${
              scrolled ? 'text-black' : 'text-white'
            }`}
          >
            About Us
          </Link>
          <Link
            href="/blogs"
            className={`text-sm font-normal hover:opacity-70 transition-opacity ${
              scrolled ? 'text-black' : 'text-white'
            }`}
          >
            Blogs
          </Link>
          <Link
            href="/contact-us"
            className={`text-sm font-normal hover:opacity-70 transition-opacity ${
              scrolled ? 'text-black' : 'text-white'
            }`}
          >
            Contact Us
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
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center mt-6 mb-7">
            <Image
              src="/images/logo.png"
              alt="Justvy"
              width={180}
              height={40}
              className="h-12 w-auto pl-6"
            />
            <button
              onClick={toggleMobileMenu}
              className="text-white text-4xl pr-10 pb-2"
            >
              ×
            </button>
          </div>
          <div className="flex flex-col space-y-6 pl-10">
          <Link
              href="/"
              className="text-base text-white hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-base text-white hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/blogs"
              className="text-base text-white hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="/contact-us"
              className="text-base text-white hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;