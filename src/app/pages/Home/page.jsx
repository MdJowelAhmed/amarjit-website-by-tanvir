import Banner from "@/app/components/Home/banner/Banner";
import CoreOfferings from "@/app/components/Home/coreOfferings/CoreOfferings";
import GetInTouch from "@/app/components/Home/getInTouch/GetInTouch";
import WhyChooseUs from "@/app/components/Home/whyChoseUs/WhyChooseUs";
import React from "react";

function Homepage() {
	return (
		<div>
			<Banner />
			<CoreOfferings />
			<WhyChooseUs />
			<GetInTouch />
		</div>
	);
}

export default Homepage;
