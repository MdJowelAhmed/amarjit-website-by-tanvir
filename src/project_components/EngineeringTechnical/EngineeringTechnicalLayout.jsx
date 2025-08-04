import React from "react";
import Banner from "../Home/banner/Banner";
import EngineeringTechnicalFeatures from "./EngineeringTechnicalFeatures";
import FourCardsSame from "../FourCardsSame/FourCardsSame";
import Image from "next/image";

function EngineeringTechnicalLayout() {
	const setEngineeringTechnicalBanner = {
		src: "/Home/engineering_technical.jpg",
		heading:
			"From Concept to Completion — The Right Technical Talent Delivered On Demand",
		subheading:
			"We deploy certified engineering professionals and technical staff to support infrastructure, innovation, and mission success — nationwide",
	};
	return (
		<div>
			<Banner
				src={setEngineeringTechnicalBanner.src}
				heading={setEngineeringTechnicalBanner.heading}
				subheading={setEngineeringTechnicalBanner.subheading}
			/>
			<div className="relative overflow-hidden">
				<Image
					src={"/left_img.png"}
					width={500}
					height={500}
					className="hidden lg:block absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:top-56 md:left-28 2xl:left-16 scale-170"
					alt="bg-image"
				/>
				<Image
					src={"/right_img.png"}
					width={500}
					height={500}
					className="hidden lg:block absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:-bottom-[5rem] 2xl:-bottom-[12rem] md:right-5 2xl:right-12 scale-170"
					alt="bg-image"
				/>
				<div className="container mx-auto lg:py-24">
					<EngineeringTechnicalFeatures />
					<FourCardsSame />
				</div>
			</div>
		</div>
	);
}

export default EngineeringTechnicalLayout;
