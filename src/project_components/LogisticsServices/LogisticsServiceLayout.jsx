import React from "react";
import Banner from "../Home/banner/Banner";

import ThreeServiceCard from "./ThreeServiceCard";

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

			<ThreeServiceCard />
		</div>
	);
}

export default LogisticsServiceLayout;
