import React from "react";
import Banner from "../Home/banner/Banner";
import OurMission from "./OurMission";
import CoreValue from "./CoreValue";
import LeadershipTeam from "./LeadershipTeam";

function AboutUsLayout() {
	const setAboutUsBanner = {
		src: "/About US/About_Us.jpg",
		heading: "About Us",
	};
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
