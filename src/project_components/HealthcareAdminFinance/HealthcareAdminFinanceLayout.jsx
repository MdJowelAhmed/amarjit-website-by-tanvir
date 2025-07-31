import React from "react";
import Banner from "../Home/banner/Banner";
import HealthcareAdminFinanceFeatures from "./HealthcareAdminFinanceFeatures";
import FourCardsSame from "../FourCardsSame/FourCardsSame";

function HealthcareAdminFinanceLayout() {
	const setHealthcareAdminFinanceBanner = {
		src: "/Home/healthcare.jpg",
		heading: "People You Can Rely On — For the Roles That Keep You Running",
		subheading:
			"From medical assistants to case managers, administrative support to accounting professionals — we provide vetted talent to keep operations smooth, secure, and fully compliant.",
	};
	return (
		<div>
			<Banner
				src={setHealthcareAdminFinanceBanner.src}
				heading={setHealthcareAdminFinanceBanner.heading}
				subheading={setHealthcareAdminFinanceBanner.subheading}
			/>
			<div className="container mx-auto lg:py-24">
				<HealthcareAdminFinanceFeatures />
				<FourCardsSame />
			</div>
		</div>
	);
}

export default HealthcareAdminFinanceLayout;
