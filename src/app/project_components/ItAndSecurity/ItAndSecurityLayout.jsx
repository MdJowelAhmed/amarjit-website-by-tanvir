import React from "react";
import Features from "./Features";
import Banner from "../Home/banner/Banner";
import { StaffingSection } from "../Home/whyChoseUs/WhyChooseUs";

function ItAndSecurityLayout() {
  const setItAndCyberSecurityBanner = {
    src: "/Home/Home Image.jpg",
    heading:
      "Secure, Scalable, and Ready to Deploy IT & Cyber Talent & Solutions.",
    subheading:
      "From cloud migration to 24/7 cybersecurity support — we deliver technology that powers mission success.",
  };
  return (
    <div>
      <Banner
        src={setItAndCyberSecurityBanner.src}
        heading={setItAndCyberSecurityBanner.heading}
        subheading={setItAndCyberSecurityBanner.subheading}
      />
      <div className="container mx-auto lg:py-24">
        <Features />
        <StaffingSection />
      </div>
    </div>
  );
}

export default ItAndSecurityLayout;
