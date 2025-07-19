import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import provideIcon from "@/IconProvider/IconProvider";
import HeadingSection from "@/utils/provideHeadingSubheading";

function WhyChooseUs() {
  function whyChooseUsHeading() {
    return (
      <section>
        <HeadingSection
          heading="Why Choose Us?"
          subheading="With full compliance across federal and state procurement standards,
						national diversity certifications, and a vast talent and product
						network, we are your reliable partner for mission-critical staffing
						and supply chain needs."
        />
      </section>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 lg:pt-0 lg:pb:12  overflow-hidden">
      <div className="relative z-10">
        {/* Header */}
        {whyChooseUsHeading()}

        {/* Features Grid */}
        <StaffingSection />
      </div>
    </div>
  );
}

export default WhyChooseUs;

export function StaffingSection() {
  const features = [
    {
      icon: provideIcon({ name: "government_compliance" }),
      title: "100% Government Compliance",

      description:
        "We strictly adhere to federal, state, and local procurement regulations, including FAR and SBA standards.",
    },
    {
      icon: provideIcon({ name: "certified_vendor" }),
      title: "Diversity-Certified Vendor",

      description:
        "Proudly Minority-Owned, SBA-Certified, and Women-Owned (WOSB)",
    },
    {
      icon: provideIcon({ name: "nationwide_talent_network" }),

      title: "Nationwide Talent Network",
      description:
        "Access to a coast-to-coast talent pool for IT, admin, healthcare, and skilled labor staffing — ready for deployment.",
    },
    {
      icon: provideIcon({ name: "product_delivery" }),
      title: "On-Time Product Delivery",
      description:
        "Reliable sourcing and logistics workflows ensure your critical equipment and supplies arrive on time, every time.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full"
        >
          <CardContent className="p-6 flex flex-col items-center text-center h-full">
            {/* Icon */}
            <div className="mb-4 flex-shrink-0">{feature.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-sm flex-grow">
              {feature.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
