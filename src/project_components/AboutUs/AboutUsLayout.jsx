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
					className="absolute top-12 left-0 xl:left-[0rem] scale-100 xl:scale-110"
					alt="bg-image"
				/>
				<Image
					src={"/right_img.png"}
					width={500}
					height={500}
					className="absolute top-[52rem] right-0 xl:right-[0rem] scale-100 xl:scale-110"
					alt="bg-image"
				/>
				<Image
					src={"/left_img.png"}
					width={500}
					height={500}
					className="absolute bottom-36 left-0 xl:left-[0rem] scale-100 xl:scale-110 -z-10"
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
