import React from "react";
import Banner from "../Home/banner/Banner";
import OurMission from "./OurMission";
import CoreValue from "./CoreValue";
import LeadershipTeam from "./LeadershipTeam";

function AboutUsLayout() {
<<<<<<< HEAD
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
=======
  const setAboutUsBanner = {
    src: "/AboutUs/AboutUs.jpg",
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
>>>>>>> fb846457869f57c9e62ebba9e4ffb829f2e908ac
}

export default AboutUsLayout;
