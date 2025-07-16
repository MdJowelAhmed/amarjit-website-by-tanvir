import React from "react";
import Banner from "../Home/banner/Banner";
import GSATable from "./GSATable";
import SocioEconomic from "./SocioEconomic";

function CertificationLayout() {
	const setCertifcationBanner = {
		src: "/About US/About_Us.jpg",
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
			<GSATable />
			<SocioEconomic />
		</div>
	);
}

export default CertificationLayout;
