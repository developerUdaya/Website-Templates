import Image from 'next/image';
import FadeInSection from './fadeInSection';

interface ServiceSectionProps {
  imageSrc: string;
  title: string;
  text: string;
  flip?: boolean;
}

const ServiceSection = ({
  imageSrc,
  title,
  text,
  flip = false,
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
        </div>
      </div>

      <div className="hidden md:block relative w-full h-[80vh] max-h-[550px] overflow-hidden">
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
        </div>
      </div>
    </section>
  );
}

const allServices = [
  {
    id: "1",
    title: "Web Development",
    description: "We craft responsive, fast, and secure websites that drive engagement and business growth. Our expertise includes modern frameworks and technologies for building everything from simple landing pages to complex web applications. Every website we build is optimized for performance, SEO, and user experience.",
    imageSrc: "/images/web.png",
    link: "/experiences",
    flip: false,
  },
  {
    id: "2",
    title: "App Development",
    description: "We specialize in developing high-performance mobile applications tailored to your business needs. Our team builds scalable, user-friendly apps for Android and iOS platforms. From concept to deployment, we ensure seamless functionality and intuitive UI/UX. Let us turn your ideas into powerful mobile solutions.",
    imageSrc: "/images/app.jpg",
    link: "/experiences",
    flip: true,
  },
  {
    id: "3",
    title: "CRM and Business Tools",
    description: "We build powerful CRM and business automation tools designed to enhance productivity, streamline operations, and drive informed decision-making. From custom dashboards and data management systems to collaborative platforms and workflow automation, our solutions are tailored to your unique business needs.",
    imageSrc: "/images/CRM.png",
    link: "/experiences",
    flip: false,
  },
  {
    id: "4",
    title: "Social Media Automation",
    description: "Our social media automation tools help you save time, boost reach, and maintain consistent engagement across platforms. From post scheduling to analytics and reporting, we deliver smart solutions that simplify your digital marketing efforts and help you scale your brand presence effectively.",
    imageSrc: "/images/social-media.jpg",
    link: "/experiences",
    flip: true,
  },
  {
    id: "5",
    title: "IoT Applications",
    description: "We specialize in versatile IoT applications for Android, iOS, and web platforms, covering home automation, healthcare, smart agriculture, industrial automation, environmental monitoring, energy management, and smart transportation. Our secure, scalable solutions drive innovation in a more connected world.",
    imageSrc: "/images/IOT.png",
    link: "/experiences",
    flip: false,
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
          flip={item.flip}
        />
      ))}
    </>
  );
};

export default ServiceSectionsContainer;