import React from "react";

import Banner from "../Home/banner/Banner";
import { StaffingSection } from "../Home/whyChoseUs/WhyChooseUs";
import ItHardwareSoftwareFeature from "./ItHardwareSoftwareFeature";

function ItHardwareSoftwareLayout() {
  const setItHardwareSoftwareBanner = {
    src: "/Home/Home Image.jpg",
    heading: " IT Hardware & Software Solutions",
    subheading:
      "From enterprise-grade hardware to modern software platforms, we provide scalable IT solutions tailored to your needs.",
  };
  return (
    <div>
      <Banner
        src={setItHardwareSoftwareBanner.src}
        heading={setItHardwareSoftwareBanner.heading}
        subheading={setItHardwareSoftwareBanner.subheading}
      />
      <div className="container mx-auto lg:py-24">
        <ItHardwareSoftwareFeature />
        <StaffingSection />
      </div>
    </div>
  );
}

export default ItHardwareSoftwareLayout;
