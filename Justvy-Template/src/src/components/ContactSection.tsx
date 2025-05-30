'use client';
import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaInstagram, FaLinkedin} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="next-section" className="bg-[#f2f2f2] py-12 md:py-20 px-6 md:px-2">
      <div className="flex flex-col md:flex-row gap-0">
        <div className="w-full md:w-[70%] lg:w-[40%] px-6 md:px-10 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold text-center md:text-left pt-0 mb-8">Get In Touch</h2>
  
          <div className="space-y-6 text-base text-black w-full">
          <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-2 md:gap-4">
              <div className="w-8 flex justify-center pt-0 md:pt-3">
                <FaPhoneAlt className="text-black text-2xl" />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-lg font-semibold">Phone Number</h4>
                <a className="text-gray-700" href="tel:+919677758128">+91 9677758128</a>
              </div>
            </div>

            <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-2 md:gap-4">
              <div className="w-8 flex justify-center pt-0 md:pt-3">
                <FaEnvelope className="text-black text-2xl" />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-lg font-semibold">Email</h4>
                <a className="text-gray-700" href="mailto:info@Justvy.in">info@Justvy.in</a>
              </div>
            </div>

            <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-2 md:gap-6">
              <div className="w-8 flex justify-center pt-0 md:pt-4">
                <FaMapMarkerAlt className="text-black text-2xl" />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-lg font-semibold">Location</h4>
                <a
                  className="text-gray-700"
                  href="https://maps.app.goo.gl/VJat4P2nkWMziJ1P6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Devapragasam Trade Centre, <br /> 
                  Wing, 3rd Floor, Madura Garden, <br />
                  Maduravayol , Chennai,<br />
                  Tamil Nadu - 600095
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start mt-6 pl-2">
              <span className="text-lg whitespace-nowrap">Follow us on:</span>
              <a
                href="https://www.instagram.com/Justvy_global_innovations_llp?igsh=d3k0cnlyOTIxbmVs"
                target="_blank"
                className="text-black text-2xl hover:text-blue-700 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/Justvy-global-innovations/"
                target="_blank"
                className="text-black text-2xl hover:text-blue-700 transition duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="flex h-[400px] w-full md:w-[75%] lg:w-[90%] pr-0 md:pr-10">
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