import React from 'react';
import Image from 'next/image';
import FadeInSection from '@/components/fadeInSection';

interface IntentionSectionProps {
  imageSrc: string;
  title?: string;
  description?: string;
}

const IntentionSection = ({
  imageSrc,
  title = 'Our Intention',
  description = `We create unique, members-only settings where families can create intergenerational memories and enrich their lives amongst nature’s exquisite beauty. Everything we do is driven by our desire to create one-of-a-kind spaces where families can be together.`,
}: IntentionSectionProps) => {
  return (
    <section className="py-2 bg-white">
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

export default IntentionSection;
