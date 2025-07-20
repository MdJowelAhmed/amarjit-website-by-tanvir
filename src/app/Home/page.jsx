import React from "react";
import Banner from "../project_components/Home/banner/Banner";
import CoreOfferings from "../project_components/Home/coreOfferings/CoreOfferings";
import GetInTouch from "../project_components/Home/getInTouch/GetInTouch";
import WhyChooseUs from "../project_components/Home/whyChoseUs/WhyChooseUs";

function Homepage() {
  const setHomeBanner = {
    src: "/Home/Home Image.jpg",
    heading: "Delivering Talent and Technology — When and Where You Need It.",
    subheading:
      "End-to-end staffing and product solutions for government and commercial clients.",
  };
  return (
    <div>
      <Banner
        src={setHomeBanner.src}
        heading={setHomeBanner.heading}
        subheading={setHomeBanner.subheading}
      />
      {/* <div
        className="bg"
        style={{
          backgroundImage: "linear-gradient(90deg, #040412 0%, #0E2263 47.12%)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
          boxShadow: "0 0 80px 0 rgba(0,0,0,0.2) inset",
        }}
      > */}
      <CoreOfferings />
      <WhyChooseUs />
      {/* </div> */}
      <GetInTouch />
    </div>
  );
}

export default Homepage;
