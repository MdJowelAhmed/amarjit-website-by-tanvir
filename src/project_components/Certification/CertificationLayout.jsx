import React from "react";
import Banner from "../Home/banner/Banner";
import GSATable from "./GSATable";
import SocioEconomic from "./SocioEconomic";
import NAICSTable from "./GSATable";

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
			<NAICSTable />
			<SocioEconomic />
		</div>
	);
}

export default CertificationLayout;
