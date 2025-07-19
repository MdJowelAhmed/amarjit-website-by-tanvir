import React from "react";

import { StaffingSection } from "../Home/whyChoseUs/WhyChooseUs";
import Banner from "../Home/banner/Banner";
import IndustrialSafetyGearFeature from "./IndustrialSafetyGearFeature";

function IndustrialSafetyGearLayout() {
  const setIndustrialSafetyGearBanner = {
    src: "/Home/Home Image.jpg",
    heading: "Industrial & Safety Gear",
    subheading:
      "Your Trusted Source for Workplace Protection, Compliance & Performance",
  };
  return (
    <div>
      <Banner
        src={setIndustrialSafetyGearBanner.src}
        heading={setIndustrialSafetyGearBanner.heading}
        subheading={setIndustrialSafetyGearBanner.subheading}
      />
      <div className="container mx-auto lg:py-24">
        <IndustrialSafetyGearFeature />
        <StaffingSection />
      </div>
    </div>
  );
}

export default IndustrialSafetyGearLayout;
