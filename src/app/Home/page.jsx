import React from "react";
import Banner from "../project_components/Home/banner/Banner";
import CoreOfferings from "../project_components/Home/coreOfferings/CoreOfferings";
import GetInTouch from "../project_components/Home/getInTouch/GetInTouch";
import WhyChooseUs from "../project_components/Home/whyChoseUs/WhyChooseUs";

function Homepage() {
	const setHomeBanner = {
		src: "/Home Image.jpg",
		heading: "Delivering Talent and Technology — When and Where You Need It.",
	};
	return (
		<div>
			<Banner src={setHomeBanner.src} heading={setHomeBanner.heading} />
			<CoreOfferings />
			<WhyChooseUs />
			<GetInTouch />
		</div>
	);
}

export default Homepage;
