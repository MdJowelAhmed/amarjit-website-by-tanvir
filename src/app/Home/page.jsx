import Banner from "@/app/components/Home/banner/Banner";
import CoreOfferings from "@/app/components/Home/coreOfferings/CoreOfferings";
import GetInTouch from "@/app/components/Home/getInTouch/GetInTouch";
import WhyChooseUs from "@/app/components/Home/whyChoseUs/WhyChooseUs";
import React from "react";

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
