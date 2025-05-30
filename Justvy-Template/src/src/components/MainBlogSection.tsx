import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FadeInSection from '@/components/fadeInSection';

interface MainBlogSectionProps {
  imageSrc: string;
  title?: string;
  description?: string;
  additionalDescription?: string;
  flip?: boolean;
  link?: string;
}

const MainBlogSection = ({
  imageSrc,
  title = 'Empowering Innovation with Scalable Software Solutions',
  description = `In today’s fast-paced digital world, businesses need more than just code—they need adaptable, high-performance systems that grow with them. The demand is shifting toward scalable software solutions that not only meet current operational needs but also support future expansion and innovation.`,
  additionalDescription = 'Tailored software plays a vital role in this shift, enabling organizations to streamline workflows, respond quickly to market changes, and achieve measurable impact across various industries. By combining technical precision with a strong focus on user experience, modern development teams are building solutions that are intuitive, efficient, and aligned with strategic business goals.',
  flip = false,
  link = "#"
}: MainBlogSectionProps) => {
  return (
    <section id="next-section" className="pt-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 items-stretch gap-12">
          <div className={`${flip ? 'md:order-2' : 'md:order-1'}`}>
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
              <FadeInSection>{title}</FadeInSection>
            </h2>
            <div className="text-base text-gray-600 leading-relaxed mb-2">
              <FadeInSection>{description}</FadeInSection>
            </div>
            <div className="text-base text-gray-600 leading-relaxed mb-6">
              <FadeInSection>{additionalDescription}</FadeInSection>
            </div>
            <Link href="/blog-content/blog-1">
              <FadeInSection>
                <button className="px-6 py-2 border border-gray-800 text-gray-800 hover:bg-gray-100 transition duration-200">
                  Explore
                </button>
              </FadeInSection>
            </Link>
          </div>

          <div className={`${flip ? 'md:order-1' : 'md:order-2'} flex`}>
            <div className="w-full relative h-64 md:h-auto">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover rounded-md"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBlogSection;
