import { Card, CardContent, CardHeader } from "@/components/ui/card";
import provideIcon from "@/IconProvider/IconProvider";
import HeadingSection from "@/utils/provideHeadingSubheading";
import React from "react";

function StaffServices() {
  function staffAugmnetHeading() {
    return (
      <section>
        <HeadingSection
          heading="Staff Augmentation Services"
          subheading="We provide scalable, pre-vetted talent across industries, ready to integrate seamlessly into your team and mission."
        />
      </section>
    );
  }

  const staffAugmentServiceList = [
    {
      id: 1,
      icon: provideIcon({ name: "service_1" }),
      heading: "IT & Cybersecurity",
      content: "Developers, Network Engineers, Cloud Specialists, SOC Analysts",
    },
    {
      id: 2,
      icon: provideIcon({ name: "service_2" }),
      heading: "Professional Services",
      content: "Finance, Procurement, HR, Project Management",
    },
    {
      id: 3,
      icon: provideIcon({ name: "service_3" }),
      heading: "Healthcare & Administrative Support",
      content: "Medical Assistants, Front Desk Personnel, Case Workers",
    },
    {
      id: 4,
      icon: provideIcon({ name: "service_4" }),
      heading: "Skilled Trades & Field Services",
      content: "Technicians, Maintenance, Warehouse, Facilities Support",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-20">
      {staffAugmnetHeading()}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {staffAugmentServiceList.map((service) => (
          <Card
            key={service.id}
            className="get-in-touch-card w-full h-full hover:shadow-lg transition-shadow duration-300 text-center flex flex-col"
          >
            <CardHeader className="flex-shrink-0 pb-2 pt-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  {service.icon}
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-grow flex flex-col justify-start px-4 pb-6 text-white">
              <div className="space-y-2.5">
                <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold md:font-bold leading-tight min-h-[3rem] flex items-center justify-center">
                  {service.heading}
                </h3>

                <p className="text-sm md:text-sm lg:text-base  leading-relaxed text-center">
                  {service.content}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default StaffServices;
