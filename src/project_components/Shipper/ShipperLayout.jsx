import React from "react";
import LogisticsCard from "./LogisticsCard";
import Banner from "../Home/banner/Banner";

function ShipperLayout() {
	const serShipperBanner = {
		src: "/Logistic/logistic_banner.jpg",
		heading: "Shipper",
		subheading:
			"We provide tailored logistics solutions for shippers seeking reliability, visibility, and cost-efficiency. Whether you're moving full truckloads or managing multi-point deliveries, our platform connects you with a trusted carrier network, real-time tracking, and flexible freight options. ",
	};
	return (
		<div>
			<Banner
				src={serShipperBanner.src}
				heading={serShipperBanner.heading}
				subheading={serShipperBanner.subheading}
			/>
			<LogisticsCard />
		</div>
	);
}

export default ShipperLayout;
