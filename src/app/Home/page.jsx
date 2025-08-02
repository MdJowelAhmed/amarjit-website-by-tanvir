import Banner from "@/project_components/Home/banner/Banner";
import CoreOfferings from "@/project_components/Home/coreOfferings/CoreOfferings";
import GetInTouch from "@/project_components/Home/getInTouch/GetInTouch";
import WhyChooseUs from "@/project_components/Home/whyChoseUs/WhyChooseUs";
import React from "react";

function Homepage() {
	const setHomeBanner = {
		src: "/Home/Home Image.jpg",
		heading: "Delivering Talent and Technology — When and Where You Need It.",
		subheading:
			"End-to-end staffing and product solutions for government and commercial clients.",
	};
	return (
		<div>
			<Banner
				src={setHomeBanner.src}
				heading={setHomeBanner.heading}
				subheading={setHomeBanner.subheading}
			/>
			<div
				style={
					{
						// backgroundImage: "url('/bg_2.png')",
						// backgroundSize: "cover",
						// backgroundPosition: "center",
						// backgroundRepeat: "no-repeat",
						// // minHeight: "100vh",
						// paddingTop: "0px",
					}
				}>
				<CoreOfferings />
				<WhyChooseUs />
				<GetInTouch />
			</div>
		</div>
	);
}

export default Homepage;
