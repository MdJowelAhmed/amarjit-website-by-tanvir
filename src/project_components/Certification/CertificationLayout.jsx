import React from "react";
import Banner from "../Home/banner/Banner";
import GSATable from "./GSATable";
import SocioEconomic from "./SocioEconomic";
import NAICSTable from "./GSATable";
import Image from "next/image";

function CertificationLayout() {
	const setCertifcationBanner = {
		src: "/Certificate/Certifications.jpg",
		heading: "Contract Vehicles & Certifications",
		subheading:
			'"Demonstrating our compliance, capability, and eligibility to serve government and commercial clients."',
	};
	return (
		<div>
			<Banner
				src={setCertifcationBanner.src}
				heading={setCertifcationBanner.heading}
				subheading={setCertifcationBanner.subheading}
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
					className="absolute top-[60rem] right-0 scale-170"
					alt="bg-image"
				/>
				<Image
					src={"/left_img.png"}
					width={500}
					height={500}
					className="absolute bottom-0 left-0 scale-170"
					alt="bg-image"
				/>
				<NAICSTable />
				<SocioEconomic />
			</div>
		</div>
	);
}

export default CertificationLayout;
