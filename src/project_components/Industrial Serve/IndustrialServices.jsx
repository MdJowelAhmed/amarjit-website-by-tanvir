import React from "react";
import Banner from "../Home/banner/Banner";
import IndustrialSector from "./IndustrialSector";

function IndustrialServices() {
	const setIndustrialBanner = {
		src: "/Industry/industrial_serve.jpg",
		heading: "Industries We Serve",
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
			<IndustrialSector />
		</div>
	);
}

export default IndustrialServices;
