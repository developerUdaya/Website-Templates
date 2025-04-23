import React from 'react';
import Image from 'next/image';
import FadeInSection from '@/components/fadeInSection';

interface ReputationSectionProps {
  imageSrc: string;
  title?: string;
  description?: string;
  reverse?: boolean;
}

const ReputationSection = ({
  imageSrc,
  title = 'An unmatched reputation for excellence',
  description = `Discovery's highly experienced, dedicated management team has developed and operated more than 35 luxury communities worldwide. Our fully integrated business model allows us to create a shared vision across our properties, resulting in cost efficiencies, early project revenues, and effective management of peak capital investment.`,
  reverse = false,
}: ReputationSectionProps) => {
  return (
    <section className="pb-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div className={`${reverse ? 'md:order-2' : 'md:order-1'}`}>
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
                {title}
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                {description}
              </p>
            </FadeInSection>
          </div>

          <div className={`relative w-full h-[600px] ${reverse ? 'md:order-1' : 'md:order-2'}`} >
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

export default ReputationSection;
