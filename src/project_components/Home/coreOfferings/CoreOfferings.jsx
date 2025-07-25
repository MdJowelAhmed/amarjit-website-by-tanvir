import React, { use } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import provideIcon from "@/IconProvider/IconProvider";
import HeadingSection from "@/utils/provideHeadingSubheading";
import Link from "next/link";

const CoreOfferings = () => {
  const staffingSolutions = [
    {
      id: 1,
      title: "IT & Cybersecurity",
      link: "it-&-cybersecurity",
      description: "Protect your business with IT and cybersecurity solutions.",
      image: "/Home/CO_Image1.jpg",
      alt: "IT professionals working on cybersecurity",
    },
    {
      id: 2,
      title: "Engineering & Technical",
      link: "engineering-technical",
      description: "Innovative engineering and technical solutions.",
      image: "/Home/CO_Image2.jpg",
      alt: "Engineering professional working on technical solutions",
    },
    {
      id: 3,
      title: "Healthcare, Admin, Finance",
      link: "healthcare-admin-finance",
      description: "Solutions for healthcare, admin, and finance.",
      image: "/Home/CO_Image3.jpg",
      alt: "Healthcare and finance professionals collaborating",
    },
  ];
  const productProvisioning = [
    {
      id: 1,
      title: "IT Hardware & Software",
      link: "it-hardware-software",
      description: "Protect your business with IT and cybersecurity solutions.",
      image: "/Home/CO_Image1.jpg",
      alt: "IT professionals working on cybersecurity",
    },
    {
      id: 2,
      title: "Office Supplies & Equipment",
      link: "office-supplies-equipment",
      description: "Innovative engineering and technical solutions.",
      image: "/Home/CO_Image2.jpg",
      alt: "Engineering professional working on technical solutions",
    },
    {
      id: 3,
      title: "Industrial & Safety Gear",
      link: "industrial-safety-gear",
      description: "Solutions for healthcare, admin, and finance.",
      image: "/Home/CO_Image3.jpg",
      alt: "Healthcare and finance professionals collaborating",
    },
  ];

  function StaffingSection() {
    return (
      <section>
        <HeadingSection
          heading="Staffing Solutions"
          subheading="Providing tailored staffing solutions to meet your business needs. Our services connect you with skilled professionals, ensuring the right talent is in place to drive success and growth."
        />
      </section>
    );
  }
  function productProvision() {
    return (
      <section>
        <HeadingSection
          heading="Product Provisioning "
          subheading="Streamline your business with efficient product provisioning. We
								ensure smooth and timely delivery, manage inventory, and
								optimize supply chains, helping you provide products seamlessly
								to meet customer demands and enhance operational efficiency."
        />
      </section>
    );
  }

  return (
    <>
      <section className="bg-transparent py-16 sm:py-20 lg:pt-24 lg:pb-0  overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="flex items-start justify-center gap-4 mb-6">
              <div>{provideIcon({ name: "core_offering" })}</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-b from-[#EFF4FF] to-[#BFD3FE] bg-clip-text text-transparent mb-6 sm:mb-8">
                Our Core Offerings
              </h2>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-white max-w-4xl mx-auto leading-relaxed">
              We offer end-to-end solutions tailored to your business needs,
              optimizing operations, enhancing efficiency, and providing
              strategic guidance. Our services drive growth through process
              improvements, data insights, and expert support for long-term
              success.
            </p>
          </div>

          {/* Staffing Solutions Section */}
          <div className="mb-16 sm:mb-20">
            {StaffingSection()}

            {/* Staffing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {staffingSolutions.map((solution) => (
                <Link href={solution.link} key={solution.id}>
                  <Card className="get-in-touch-card h-[30rem] group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    {/* Solid color overlay that grows from top on hover */}
                    <div className="absolute left-0 top-0 w-full h-0 group-hover:h-full bg-[#bbbbfa] transition-all duration-500 z-10 pointer-events-none"></div>
                    <CardHeader className="mt-5 text-center relative z-20">
                      <CardTitle className=" text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                        {solution.title}
                      </CardTitle>
                      <CardDescription className=" max-w-60 mx-auto text-white text-sm sm:text-base leading-relaxed">
                        {solution.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 relative z-20">
                      <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden rounded-lg ">
                        <Image
                          src={solution.image}
                          alt={solution.alt}
                          fill
                          className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-transparent  py-16 sm:py-20 lg:py-12  overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          {/* Header Section */}

          {/* Staffing Solutions Section */}
          <div className="mb-16 sm:mb-20">
            {productProvision()}

            {/* Staffing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {productProvisioning.map((item) => (
                <Link href={item.link} key={item.id}>
                  <Card className="get-in-touch-card h-[30rem] group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    {/* Solid color overlay that grows from top on hover */}
                    <div className="absolute left-0 top-0 w-full h-0 group-hover:h-full bg-[#bbbbfa] transition-all duration-500 z-10 pointer-events-none"></div>
                    <CardHeader className="mt-5 text-center relative z-20">
                      <CardTitle className=" text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                        {item.title}
                      </CardTitle>
                      <CardDescription className=" max-w-60 mx-auto text-white text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 relative z-20">
                      <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden rounded-lg ">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoreOfferings;
