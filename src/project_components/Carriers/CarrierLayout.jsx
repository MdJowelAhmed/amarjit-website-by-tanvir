import React from "react";
import Banner from "../Home/banner/Banner";
import CarriersFeature from "./CarriersFeature";

function CarrierLayout() {
	const setCarriersBanner = {
		src: "/Logistic/logistic_banner.jpg",
		heading: "Carriers",
		subheading:
			"At KFBUSA, we believe carriers are the backbone of successful logistics. Our platform connects reliable trucking companies and independent drivers with consistent freight opportunities across the country. Whether you specialize in regional hauls, long-distance routes, or last-mile delivery—we have the right loads for you.",
	};
	return (
		<div>
			<Banner
				src={setCarriersBanner.src}
				heading={setCarriersBanner.heading}
				subheading={setCarriersBanner.subheading}
			/>
			<CarriersFeature />
		</div>
	);
}

export default CarrierLayout;
