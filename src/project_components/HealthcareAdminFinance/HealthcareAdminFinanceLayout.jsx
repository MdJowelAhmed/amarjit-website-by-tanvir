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
					className="hidden lg:block absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:top-[15rem] 2xl:top-[16rem] md:left-10 2xl:left-12 scale-170"
					alt="bg-image"
				/>
				<Image
					src={"/right_img.png"}
					width={500}
					height={500}
					className="hidden lg:block absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:-bottom-[5rem] 2xl:bottom-[15rem] md:right-5 2xl:right-12 scale-170"
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
