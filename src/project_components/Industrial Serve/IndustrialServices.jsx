import React from "react";
import Banner from "../Home/banner/Banner";
import IndustrialSector from "./IndustrialSector";
import Image from "next/image";

function IndustrialServices() {
	const setIndustrialBanner = {
		src: "/Industry/industrial_serve.jpg",
		heading: "Industries Served",
		subheading:
			"We support mission-critical operations across public and private sectors — delivering tailored staffing, technology, and product solutions where they’re needed most.",
	};
	return (
		<div>
			<Banner
				src={setIndustrialBanner.src}
				heading={setIndustrialBanner.heading}
				subheading={setIndustrialBanner.subheading}
			/>
			<div className="relative overflow-hidden">
				<Image
					src={"/left_img.png"}
					width={500}
					height={500}
					className="hidden lg:block absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:top-56 md:left-5 2xl:left-16 scale-170"
					alt="bg-image"
				/>
				<IndustrialSector />
			</div>
		</div>
	);
}

export default IndustrialServices;
