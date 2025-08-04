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
					className="absolute top-[16rem] left-40  scale-170"
					alt="bg-image"
				/>
				<Image
					src={"/right_img.png"}
					width={500}
					height={500}
					className="absolute top-[90rem] right-40 scale-170"
					alt="bg-image"
				/>
				<Image
					src={"/left_img.png"}
					width={500}
					height={500}
					className="absolute -bottom-[35rem] left-40 scale-170 -z-10"
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
