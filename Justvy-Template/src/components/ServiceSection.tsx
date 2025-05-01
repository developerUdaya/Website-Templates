import Link from 'next/link';
import Image from 'next/image';
import FadeInSection from './fadeInSection';

interface ServiceSectionProps {
  imageSrc: string;
  title: string;
  text: string;
  flip?: boolean;
  link?: string;
}

const ServiceSection = ({
  imageSrc,
  title,
  text,
  flip = false,
  link = "#"
}: ServiceSectionProps) => {
  return (
    <section className="w-full bg-white relative px-0 pt-2 pb-20 my-0">

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
          <h2 className="text-2xl font-serif mb-4"><FadeInSection>{title}</FadeInSection></h2>
          <div className="text-gray-700 text-base mb-6 leading-relaxed">
          <FadeInSection>{text}</FadeInSection>
          </div>
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
          <h2 className="text-3xl font-serif mb-4"><FadeInSection>{title}</FadeInSection></h2>
          <div className="text-gray-700 text-base mb-6 leading-relaxed"><FadeInSection>{text}</FadeInSection></div>
          <Link href={link}>
          <FadeInSection><button className="px-6 py-2 border border-gray-800 text-gray-800 hover:bg-gray-100 transition duration-200">
              Explore
            </button></FadeInSection>
          </Link>
        </div>
      </div>
    </section>
  );
}

const allServices = [
  {
    id: "1",
    title: "WhatsApp Automation Services",
    description: "Streamline operations and boost customer engagement with our WhatsApp Automation Services. Our bots simplify ticket and appointment booking with seamless integration and 24/7 availability, providing efficient, secure, and scalable communication across industries.",
    imageSrc: "/images/golf-court.png",
    link: "/experiences",
    flip: false,
  },
  {
    id: "2",
    title: "Native, Cross-Platform, and Hybrid Solutions",
    description: "We develop mobile applications across Native, Cross-Platform, and Hybrid solutions, covering e-commerce, AR/VR, IoT, health and fitness, education, entertainment, and productivity. Our apps prioritize innovation and user-friendliness for Android, iOS, and web platforms.",
    imageSrc: "/images/beach.png",
    link: "/experiences",
    flip: true,
  },
  {
    id: "3",
    title: "Diverse Website Development",
    description: "We craft diverse websites, including blogs, e-commerce platforms, online communities, specialized portals, and sites with 3D animated elements. Our expertise covers dynamic content for news, real estate, job boards, travel services, and appointment scheduling, aligned with industry needs and digital trends.",
    imageSrc: "/images/make-up.png",
    link: "/experiences",
    flip: false,
  },
  {
    id: "4",
    title: "IoT Applications",
    description: "We specialize in versatile IoT applications for Android, iOS, and web platforms, covering home automation, healthcare, smart agriculture, industrial automation, environmental monitoring, energy management, and smart transportation. Our secure, scalable solutions drive innovation in a more connected world.",
    imageSrc: "/images/golf-court.png",
    link: "/experiences",
    flip: true,
  },
  {
    id: "5",
    title: "AWS Cloud Services",
    description: "Boost your business efficiency and scalability with Amazon Web Services (AWS). Our expertise in AWS delivers robust cloud solutions, including infrastructure management and application deployment. Whether you need to migrate, build, or scale, we ensure seamless integration, high availability, and cost-effective operations to help your business thrive.",
    imageSrc: "/images/beach.png",
    link: "/experiences",
    flip: false,
  },
  {
    id: "6",
    title: "Google Cloud Platform (GCP) Services",
    description: "Unlock the potential of Google Cloud Platform (GCP) with our tailored solutions. We harness GCP's tools for data analytics, machine learning, and scalable app development. Our services optimize performance, enhance security, and ensure smooth cloud migration, empowering your business to innovate and grow confidently.",
    imageSrc: "/images/make-up.png",
    link: "/experiences",
    flip: true,
  }
];

const ServiceSectionsContainer = () => {
  return (
    <>
      {allServices.map((item) => (
        <ServiceSection
          key={item.id}
          imageSrc={item.imageSrc}
          title={item.title}
          text={item.description}
          link={item.link}
          flip={item.flip}
        />
      ))}
    </>
  );
};

export default ServiceSectionsContainer;