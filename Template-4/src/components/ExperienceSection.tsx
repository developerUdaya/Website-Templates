import Link from 'next/link';
import Image from 'next/image';

interface ExperienceImageSectionProps {
  imageSrc: string;
  title: string;
  text: string;
  flip?: boolean;
  link?: string;
}

export default function ExperienceImageSection({
  imageSrc,
  title,
  text,
  flip = false,
  link = "#"
}: ExperienceImageSectionProps) {
  return (
    <section className="w-full bg-white relative px-0 pb-16 my-0">

      <div className="flex flex-col md:hidden gap-6 px-4">
        <div className="relative w-full h-[300px]">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="bg-white p-6 shadow-2xl">
          <h2 className="text-2xl font-serif mb-4">{title}</h2>
          <p className="text-gray-700 text-base mb-6 leading-relaxed">
            {text}
          </p>
          <Link href={link}>
            <button className="px-6 py-2 border border-gray-800 text-gray-800 hover:bg-gray-100 transition duration-200">
              Explore
            </button>
          </Link>
        </div>
      </div>

      <div className="hidden md:block relative w-full min-h-[600px] md:min-h-[80vh] lg:min-h-[100vh] overflow-hidden">
        <div className={`absolute top-0 ${flip ? 'right-0' : 'left-0'} w-full md:w-[70%] h-full`}>
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div
          className={`absolute top-1/2 ${flip ? 'left-[5%] md:left-[10%]' : 'right-[5%] md:right-[10%]'} -translate-y-1/2 bg-white max-w-md p-8 shadow-2xl z-10`}
        >
          <h2 className="text-3xl font-serif mb-4">{title}</h2>
          <p className="text-gray-700 text-base mb-6 leading-relaxed">{text}</p>
          <Link href={link}>
            <button className="px-6 py-2 border border-gray-800 text-gray-800 hover:bg-gray-100 transition duration-200">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
