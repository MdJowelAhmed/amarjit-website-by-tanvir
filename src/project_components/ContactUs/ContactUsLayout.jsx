import React from "react";
import Banner from "../Home/banner/Banner";
import GetInTouch from "../Home/getInTouch/GetInTouch";

function ContactUsLayout() {
  const setContactUsBanner = {
    src: "/Contact Us/contact_us.png",
    heading: "Contact Us",
    subheading:
      "Get in Touch — We’re Here to Help Whether you're looking for IT solutions, staffing support, or have questions about our services, our team is ready to assist you.",
  };
  return (
    <div>
      <Banner
        src={setContactUsBanner.src}
        heading={setContactUsBanner.heading}
        subheading={setContactUsBanner.subheading}
      />
      <div className="">
        <GetInTouch />
      </div>
    </div>
  );
}

export default ContactUsLayout;
