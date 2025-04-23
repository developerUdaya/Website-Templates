import React from 'react';
import Image from 'next/image';
import FadeInSection from '@/components/fadeInSection';

interface ExclusiveSectionProps {
  imageSrc: string;
  title?: string;
  description?: string;
}

const ExclusiveSection = ({
  imageSrc,
  title = 'Exclusive to your world',
  description = `Our worlds are designed to offer you endless opportunities to share incredible once-in-a-lifetime experiences and adventures every single minute of the day. Each of our settings offer a relaxed sense of community through exceptional clubhouses, world-class
                 golf courses, welcoming staff, and an extensive Outdoor Pursuits program. Create moments of joy and wonder, unforgettable memories, and cherished times together with those who matter most.`,
  }: ExclusiveSectionProps) => {
  return (
    <section className="pb-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
                {title}
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                {description}
              </p>
            </FadeInSection>
          </div>

          <div className="relative w-full h-[600px]">
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

export default ExclusiveSection;
