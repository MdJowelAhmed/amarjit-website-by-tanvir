import React from "react";
import Banner from "../Home/banner/Banner";
import OurMission from "./OurMission";
import CoreValue from "./CoreValue";
import LeadershipTeam from "./LeadershipTeam";

function AboutUsLayout() {
	const setAboutUsBanner = {
		src: "/About Us/About_Us.png",
		heading: "About Us",
	};
	// console.log("setAboutUsBanner");
	// console.log(setAboutUsBanner.src);
	// console.log(setAboutUsBanner);
	// console.log(setAboutUsBanner.heading);
	return (
		<div>
			<Banner src={setAboutUsBanner.src} heading={setAboutUsBanner.heading} />
			<OurMission />
			<CoreValue />
			<LeadershipTeam />
		</div>
	);
}

export default AboutUsLayout;
