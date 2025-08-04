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
					className="absolute top-64 left-0 scale-170"
					alt="bg-image"
				/>
				<Image
					src={"/right_img.png"}
					width={500}
					height={500}
					className="absolute -bottom-[28rem] right-0 scale-170"
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
