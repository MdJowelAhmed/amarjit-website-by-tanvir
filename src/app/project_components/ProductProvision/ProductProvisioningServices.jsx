import { Card, CardContent, CardHeader } from "@/components/ui/card";
import provideIcon from "@/IconProvider/IconProvider";

import HeadingSection from "@/utils/provideHeadingSubheading";
import React from "react";

function ProductProvisioningServices() {
  function provisionHeading() {
    return (
      <section>
        <HeadingSection
          heading="Product Provisioning Services"
          subheading="Your One-Stop Supplier for Mission-Critical Equipment and Supplies"
        />
      </section>
    );
  }

  const provisionServiceList = [
    {
      id: 1,
      icon: provideIcon({ name: "provision_1" }),
      heading: "Technology Products",
      content: [
        "Laptops, desktops, monitors, and mobile devices",
        "Servers, networking gear, and peripherals",
        "Software licensing and renewals",
      ],
    },
    {
      id: 2,
      icon: provideIcon({ name: "provision_2" }),
      heading: "Office Essentials",
      content: [
        "Printers, copiers, scanners",
        "Office furniture and ergonomic setups",
        "Stationery, consumables, and day-to-day supplies",
      ],
    },
    {
      id: 3,
      icon: provideIcon({ name: "provision_3" }),
      heading: "Industrial & Safety Equipment",
      content: [
        "PPE (gloves, masks, respirators, gowns)",
        "Tools, power equipment, ladders",
        "Construction and field materials",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-32 text-white">
      {provisionHeading()}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {provisionServiceList.map((service) => (
          <Card
            key={service.id}
            className="get-in-touch-card w-full min-h-[90%] hover:shadow-lg transition-shadow duration-300 flex flex-col px-4"
          >
            <CardHeader className="flex-shrink-0 pt-4 ">
              <div className="w-16 h-16 flex items-center justify-center flex-shrink-0 ">
                {service.icon}
              </div>
            </CardHeader>

            <CardContent className="flex-grow flex flex-col justify-start  pb-6 text-white">
              <div className="space-y-2.5 flex flex-col items-start">
                <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold md:font-bold leading-tight min-h-[3rem] flex items-center justify-center">
                  {service.heading}
                </h3>

                <ul className="pl-5 space-y-2 text-white">
                  {service.content.map((item, index) => (
                    <li className="list-disc" key={index}>
                      <p className="text-sm md:text-base lg:text-lg leading-relaxed text-start">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProductProvisioningServices;
