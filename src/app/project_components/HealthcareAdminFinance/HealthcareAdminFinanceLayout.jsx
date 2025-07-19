import React from "react";
import { StaffingSection } from "../Home/whyChoseUs/WhyChooseUs";
import Banner from "../Home/banner/Banner";
import HealthcareAdminFinanceFeatures from "./HealthcareAdminFinanceFeatures";

function HealthcareAdminFinanceLayout() {
  const setHealthcareAdminFinanceBanner = {
    src: "/Home/Home Image.jpg",
    heading: "People You Can Rely On — For the Roles That Keep You Running",
    subheading:
      "From medical assistants to case managers, administrative support to accounting professionals — we provide vetted talent to keep operations smooth, secure, and fully compliant.",
  };
  return (
    <div>
      <Banner
        src={setHealthcareAdminFinanceBanner.src}
        heading={setHealthcareAdminFinanceBanner.heading}
        subheading={setHealthcareAdminFinanceBanner.subheading}
      />
      <div className="container mx-auto lg:py-24">
        <HealthcareAdminFinanceFeatures />
        <StaffingSection />
      </div>
    </div>
  );
}

export default HealthcareAdminFinanceLayout;
