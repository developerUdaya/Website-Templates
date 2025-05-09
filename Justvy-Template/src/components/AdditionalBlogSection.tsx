import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FadeInSection from '@/components/fadeInSection';

interface AdditionalBlogSectionProps {
  imageSrc: string;
  title?: string;
  description?: string;
  additionalDescription?: string;
  flip?: boolean;
  link?: string;
}

const AdditionalBlogSection = ({
  imageSrc,
  title = '',
  description = ``,
  additionalDescription = '',
  flip = false,
  link = "#"
}: AdditionalBlogSectionProps) => {
  return (
    <section className="pt-20 pb-20 bg-white">
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
            <Link href={link}>
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

export default AdditionalBlogSection;
