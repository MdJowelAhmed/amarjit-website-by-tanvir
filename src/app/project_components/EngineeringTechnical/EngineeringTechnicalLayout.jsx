import React from "react";
import { StaffingSection } from "../Home/whyChoseUs/WhyChooseUs";
import Banner from "../Home/banner/Banner";
import EngineeringTechnicalFeatures from "./EngineeringTechnicalFeatures";

function EngineeringTechnicalLayout() {
  const setEngineeringTechnicalBanner = {
    src: "/Home/engineering_technical.jpg",
    heading:
      "From Concept to Completion — The Right Technical Talent Delivered On Demand",
    subheading:
      "We deploy certified engineering professionals and technical staff to support infrastructure, innovation, and mission success — nationwide",
  };
  return (
    <div>
      <Banner
        src={setEngineeringTechnicalBanner.src}
        heading={setEngineeringTechnicalBanner.heading}
        subheading={setEngineeringTechnicalBanner.subheading}
      />
      <div className="container mx-auto lg:py-24">
        <EngineeringTechnicalFeatures />
        <StaffingSection />
      </div>
    </div>
  );
}

export default EngineeringTechnicalLayout;
