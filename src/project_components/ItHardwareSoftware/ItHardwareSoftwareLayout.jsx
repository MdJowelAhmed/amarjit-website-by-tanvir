import React from "react";

import Banner from "../Home/banner/Banner";
import { StaffingSection } from "../Home/whyChoseUs/WhyChooseUs";
import ItHardwareSoftwareFeature from "./ItHardwareSoftwareFeature";

function ItHardwareSoftwareLayout() {
	const setItHardwareSoftwareBanner = {
		src: "/Home/logistics_transportation.jpg",
		heading: "Logistics & Transportation",
		subheading: "Delivering Your Goods Safely, Swiftly, and Smartly",
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
