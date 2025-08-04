import React from "react";
import Features from "./Features";
import Banner from "../Home/banner/Banner";
import FourCardsSame from "../FourCardsSame/FourCardsSame";
import Image from "next/image";

function ItAndSecurityLayout() {
	const setItAndCyberSecurityBanner = {
		src: "/Home/it-cyber-security.jpg",
		heading:
			"Secure, Scalable, and Ready to Deploy IT & Cyber Talent & Solutions.",
		subheading:
			"From cloud migration to 24/7 cybersecurity support — we deliver technology that powers mission success.",
	};
	return (
		<div>
			<Banner
				src={setItAndCyberSecurityBanner.src}
				heading={setItAndCyberSecurityBanner.heading}
				subheading={setItAndCyberSecurityBanner.subheading}
			/>

			<div className="relative overflow-hidden">
				<Image
					src={"/left_img.png"}
					width={500}
					height={500}
					className="hidden lg:block absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:top-56 md:left-28 2xl:left-10 scale-170"
					alt="bg-image"
				/>
				<Image
					src={"/right_img.png"}
					width={500}
					height={500}
					className="hidden lg:block absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:-bottom-[15rem] 2xl:-bottom-[24rem] md:right-5 2xl:right-12 scale-170"
					alt="bg-image"
				/>
				<div className="container mx-auto lg:py-24">
					<Features />
					<FourCardsSame />
				</div>
			</div>
		</div>
	);
}

export default ItAndSecurityLayout;
