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
					className="absolute top-52 left-0 xl:left-[0rem] scale-100 xl:scale-150"
					alt="bg-image"
				/>
				<IndustrialSector />
			</div>
		</div>
	);
}

export default IndustrialServices;
