import React from "react";
import Banner from "../Home/banner/Banner";
import OurMission from "./OurMission";
import CoreValue from "./CoreValue";
import LeadershipTeam from "./LeadershipTeam";
import Image from "next/image";

function AboutUsLayout() {
	const setAboutUsBanner = {
		src: "/AboutUs/AboutUs.jpg",
		heading: "About Us",
	};
	return (
		<div>
			<Banner src={setAboutUsBanner.src} heading={setAboutUsBanner.heading} />
			<div className="relative overflow-hidden">
				<Image
					src={"/left_img.png"}
					width={500}
					height={500}
					className="absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:top-[12rem] 2xl:top-[14rem] md:left-40 2xl:left-48 scale-170"
					alt="bg-image"
				/>
				<Image
					src={"/right_img.png"}
					width={500}
					height={500}
					className="absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:top-[62rem] 2xl:top-[65rem] md:right-0 2xl:right-20 scale-170"
					alt="bg-image"
				/>
				<Image
					src={"/left_img.png"}
					width={500}
					height={500}
					className="absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:bottom-[24rem] 2xl:bottom-[20rem] md:left-0 2xl:left-48 scale-170 -z-10"
					alt="bg-image"
				/>

				<OurMission />
				<CoreValue />
				<LeadershipTeam />
			</div>
		</div>
	);
}

export default AboutUsLayout;
