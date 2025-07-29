import React from "react";

import Banner from "../Home/banner/Banner";
import { StaffingSection } from "../Home/whyChoseUs/WhyChooseUs";
import LogisticFeature from "./LogisticFeature";
import FourCardsSame from "../FourCardsSame/FourCardsSame";

function LogisticsLayout() {
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
				<LogisticFeature />
				<FourCardsSame />
			</div>
		</div>
	);
}

export default LogisticsLayout;
