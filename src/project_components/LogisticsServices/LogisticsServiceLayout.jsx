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
					className="hidden lg:block absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:top-[10rem] 2xl:top-[14rem] md:left-5 2xl:left-12 md:scale-160 2xl:scale-170"
					alt="bg-image"
				/>

				<ThreeServiceCard />
			</div>
		</div>
	);
}

export default LogisticsServiceLayout;
