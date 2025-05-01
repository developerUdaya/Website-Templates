import React from 'react';
import Image from 'next/image';
import FadeInSection from '@/components/fadeInSection';

interface BlogSectionProps {
  imageSrc: string;
  title?: string;
  description?: string;
  flip?: boolean;
}

const BlogSection = ({
  imageSrc,
  title = 'Blog 1',
  description = `Discovery's highly experienced, dedicated management team has developed and operated more than 35 luxury communities worldwide. Our fully integrated business model allows us to create a shared vision across our properties, resulting in cost efficiencies, early project revenues, and effective management of peak capital investment.`,
  flip = false,
}: BlogSectionProps) => {
  return (
    <section className="pt-20 pb-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div className={`${flip ? 'md:order-2' : 'md:order-1'}`}>
              <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
              <FadeInSection>{title}</FadeInSection>
              </h2>
              <div className="text-base text-gray-600 leading-relaxed">
              <FadeInSection>{description}</FadeInSection>
              </div>
          </div>

          <div className={`relative w-full h-[600px] ${flip ? 'md:order-1' : 'md:order-2'}`} >
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;