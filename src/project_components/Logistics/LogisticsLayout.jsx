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
					className="hidden lg:block absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:top-56 2xl:top-[16rem] md:left-28 2xl:left-10 scale-170"
					alt="bg-image"
				/>
				<Image
					src={"/right_img.png"}
					width={500}
					height={500}
					className="hidden lg:block absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:-bottom-[15rem] 2xl:-bottom-[24rem] md:right-5 2xl:right-12 scale-170"
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
