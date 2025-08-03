import React from "react";

import Banner from "../Home/banner/Banner";
import { StaffingSection } from "../Home/whyChoseUs/WhyChooseUs";
import LogisticFeature from "./LogisticFeature";
import FourCardsSame from "../FourCardsSame/FourCardsSame";
import Image from "next/image";

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
			/>{" "}
			<div className="relative overflow-hidden">
				<Image
					src={"/left_img.png"}
					width={500}
					height={500}
					className="absolute top-32 left-0 xl:left-[0rem] scale-100 xl:scale-130"
					alt="bg-image"
				/>
				<Image
					src={"/right_img.png"}
					width={500}
					height={500}
					className="absolute -bottom-[28rem] right-0 xl:right-[0rem] scale-100 xl:scale-130"
					alt="bg-image"
				/>
				<div className="container mx-auto lg:py-24">
					<LogisticFeature />
					<FourCardsSame />
				</div>
			</div>
		</div>
	);
}

export default LogisticsLayout;
