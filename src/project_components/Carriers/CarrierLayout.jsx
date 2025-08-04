import React from "react";
import Banner from "../Home/banner/Banner";
import CarriersFeature from "./CarriersFeature";
import Image from "next/image";

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
			<div className="relative overflow-hidden">
				<Image
					src={"/left_img.png"}
					width={500}
					height={500}
					className="absolute top-64 left-0 scale-170 -z-10"
					alt="bg-image"
				/>
				<Image
					src={"/right_img.png"}
					width={500}
					height={500}
					className="absolute -bottom-[30rem] right-0 scale-170 -z-10"
					alt="bg-image"
				/>
				<CarriersFeature />
			</div>
		</div>
	);
}

export default CarrierLayout;
