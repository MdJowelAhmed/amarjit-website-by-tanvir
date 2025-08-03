import React from "react";
import Banner from "../Home/banner/Banner";

import ThreeServiceCard from "./ThreeServiceCard";
import Image from "next/image";

function LogisticsServiceLayout() {
	const serLogisticsServicesBanner = {
		src: "/Logistic/logistic_banner.jpg",
		heading: "Logistics & Transportation Services",
		subheading: "Smart, Scalable, and Seamless Logistics for Modern Business",
	};

	return (
		<div>
			<Banner
				src={serLogisticsServicesBanner.src}
				heading={serLogisticsServicesBanner.heading}
				subheading={serLogisticsServicesBanner.subheading}
			/>
			<div className="relative overflow-hidden">
				<Image
					src={"/left_img.png"}
					width={500}
					height={500}
					className="absolute top-5 left-0 xl:left-[0rem] scale-100 xl:scale-105"
					alt="bg-image"
				/>

				<ThreeServiceCard />
			</div>
		</div>
	);
}

export default LogisticsServiceLayout;
