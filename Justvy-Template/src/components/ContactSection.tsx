'use client';
import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaInstagram, FaLinkedin} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="next-section" className="bg-[#f2f2f2] py-20 px-6 md:px-0">
      <div className="flex flex-col md:flex-row gap-0">
        <div className="w-full md:w-[50%] px-6 md:px-20 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold pt-4 mb-8">Get In Touch</h2>
          
          <div className="space-y-6 text-base text-black w-full">
            <div className="flex flex-col lg:flex-row lg:items-start items-center gap-2 lg:gap-4">
              <FaPhoneAlt className="text-black text-2xl mt-1" />
              <div className="text-center md:text-left">
                <h4 className="font-semibold">Phone Number</h4>
                <a href="tel:+919677758128">+91 9677758128</a>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-start items-center gap-2 lg:gap-4">
              <FaEnvelope className="text-black text-2xl mt-1" />
              <div className="text-center lg:text-left">
                <h4 className="font-semibold">Email</h4>
                <a href="mailto:info@justvy.in">info@justvy.in</a>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-start items-center gap-2 lg:gap-4">
              <FaMapMarkerAlt className="text-black text-2xl mt-1" />
              <div className="text-center lg:text-left">
                <h4 className="font-semibold">Location</h4>
                <a
                  href="https://maps.app.goo.gl/VJat4P2nkWMziJ1P6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  358G+RGH, Mulakalacheru, Golden George Nagar, Mogappair West, 
                  Maduravoyal, Chennai, Tamil Nadu 600107
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap justify-center lg:justify-start mt-6">
              <span className="text-lg whitespace-nowrap">Follow Us On:</span>
              <a
                href="https://www.instagram.com/" target="_blank"
                className="text-black text-2xl hover:text-blue-700 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/" target="_blank"
                className="text-black text-2xl hover:text-blue-700 transition duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="flex h-[400px] w-full md:w-[70%] pr-0">
          <div className="relative w-full h-full">
            <iframe
              title="Justvy Global Innovations LLP Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5063942106012!2d80.17378027377812!3d13.067060787257109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261007853a7ad%3A0x596bf9eb93657d39!2sJustvy%20Global%20Innovations%20LLP!5e0!3m2!1sen!2sin!4v1746011915036!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: '0' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;