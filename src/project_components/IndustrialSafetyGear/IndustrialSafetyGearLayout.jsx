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
					className="hidden lg:block absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:top-56 md:left-28 2xl:left-10 scale-170"
					alt="bg-image"
				/>
				<Image
					src={"/right_img.png"}
					width={500}
					height={500}
					className="hidden lg:block absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:-bottom-[10rem] 2xl:-bottom-[18rem] md:right-5 2xl:right-12 scale-170"
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
