import React from "react";
import Banner from "../Home/banner/Banner";
import HealthcareAdminFinanceFeatures from "./HealthcareAdminFinanceFeatures";
import FourCardsSame from "../FourCardsSame/FourCardsSame";
import Image from "next/image";

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
			/>{" "}
			<div className="relative overflow-hidden">
				<Image
					src={"/left_img.png"}
					width={500}
					height={500}
					className="absolute top-32 left-0 xl:left-[0rem] scale-100 xl:scale-130"
					alt="bg-image"
				/>
				<Image
					src={"/right_img.png"}
					width={500}
					height={500}
					className="absolute -bottom-[28rem] right-0 xl:right-[0rem] scale-100 xl:scale-130"
					alt="bg-image"
				/>
				<div className="container mx-auto lg:py-24">
					<HealthcareAdminFinanceFeatures />
					<FourCardsSame />
				</div>
			</div>
		</div>
	);
}

export default HealthcareAdminFinanceLayout;
