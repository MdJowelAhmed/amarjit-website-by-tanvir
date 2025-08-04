import React from "react";

import { StaffingSection } from "../Home/whyChoseUs/WhyChooseUs";
import Banner from "../Home/banner/Banner";
import IndustrialSafetyGearFeature from "./IndustrialSafetyGearFeature";
import FourCardsSame from "../FourCardsSame/FourCardsSame";
import Image from "next/image";

function IndustrialSafetyGearLayout() {
	const setIndustrialSafetyGearBanner = {
		src: "/Home/industrial_safety.jpg",
		heading: "Industrial & Safety Gear",
		subheading:
			"Your Trusted Source for Workplace Protection, Compliance & Performance",
	};
	return (
		<div>
			<Banner
				src={setIndustrialSafetyGearBanner.src}
				heading={setIndustrialSafetyGearBanner.heading}
				subheading={setIndustrialSafetyGearBanner.subheading}
			/>
			<div className="relative overflow-hidden">
				<Image
					src={"/left_img.png"}
					width={500}
					height={500}
					className="absolute top-64 left-0 scale-170"
					alt="bg-image"
				/>
				<Image
					src={"/right_img.png"}
					width={500}
					height={500}
					className="absolute -bottom-[28rem] right-0 scale-170"
					alt="bg-image"
				/>
				<div className="container mx-auto lg:py-24">
					<IndustrialSafetyGearFeature />
					<FourCardsSame />
				</div>
			</div>
		</div>
	);
}

export default IndustrialSafetyGearLayout;
