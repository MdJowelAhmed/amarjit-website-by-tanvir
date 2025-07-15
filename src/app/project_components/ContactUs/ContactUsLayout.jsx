import React from "react";
import Banner from "../Home/banner/Banner";
import GetInTouch from "../Home/getInTouch/GetInTouch";

function ContactUsLayout() {
	const setAboutUsBanner = {
		src: "/Contact US/contact_us.jpg",
		heading: "Contact Us",
	};
	return (
		<div>
			<Banner src={setAboutUsBanner.src} heading={setAboutUsBanner.heading} />
			<GetInTouch />
		</div>
	);
}

export default ContactUsLayout;
