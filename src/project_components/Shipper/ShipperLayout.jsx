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
					className="hidden lg:block absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:top-[10rem] 2xl:top-[14rem] md:left-5 2xl:left-12 md:scale-160 2xl:scale-170"
					alt="bg-image"
				/>
				<Image
					src={"/right_img.png"}
					width={500}
					height={500}
					className="hidden lg:block absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:bottom-[5rem] 2xl:-bottom-[5rem] md:right-5 2xl:right-18 md:scale-160 2xl:scale-170"
					alt="bg-image"
				/>
				<LogisticsCard />
			</div>
		</div>
	);
}

export default ShipperLayout;
