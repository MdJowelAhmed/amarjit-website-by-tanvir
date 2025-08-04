import React from "react";
import LogisticsCard from "./LogisticsCard";
import Banner from "../Home/banner/Banner";
import Image from "next/image";

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
			<div className="relative overflow-hidden">
				<Image
					src={"/left_img.png"}
					width={500}
					height={500}
					className="absolute top-64 left-0 scale-170 "
					alt="bg-image"
				/>
				<Image
					src={"/right_img.png"}
					width={500}
					height={500}
					className="absolute -bottom-[0rem] right-0 scale-170"
					alt="bg-image"
				/>
				<LogisticsCard />
			</div>
		</div>
	);
}

export default ShipperLayout;
