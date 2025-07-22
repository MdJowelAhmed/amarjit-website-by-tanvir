import React from "react";
import OfficeSuppliesEquipmentFeature from "./OfficeSuppliesEquipmentFeature";
import Banner from "../Home/banner/Banner";

function OfficeSuppliesEquipmentLayout() {
  const setOfficeSuppliesEquipmentBanner = {
    src: "/Home/office-supplies.jpg",
    heading: "Office Supplies & Equipment",
    subheading: "Your Trusted Source for Quality Office Supplies and Equipment",
  };
  return (
    <div>
      <Banner
        src={setOfficeSuppliesEquipmentBanner.src}
        heading={setOfficeSuppliesEquipmentBanner.heading}
        subheading={setOfficeSuppliesEquipmentBanner.subheading}
      />
      <OfficeSuppliesEquipmentFeature />
    </div>
  );
}

export default OfficeSuppliesEquipmentLayout;
