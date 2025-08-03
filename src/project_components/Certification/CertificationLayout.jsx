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
				<div className="hidden lg:block">
					<Image
						src={"/left_img.png"}
						width={500}
						height={500}
						className="absolute top-16 left-0 xl:left-[0rem] scale-100 xl:scale-110"
						alt="bg-image"
					/>
					<Image
						src={"/right_img.png"}
						width={500}
						height={500}
						className="absolute top-[60rem] right-0 xl:right-[0rem] scale-100 xl:scale-110"
						alt="bg-image"
					/>
					<Image
						src={"/left_img.png"}
						width={500}
						height={500}
						className="absolute bottom-0 left-0 xl:left-[0rem] scale-100 xl:scale-110"
						alt="bg-image"
					/>
					<NAICSTable />
					<SocioEconomic />
				</div>
			</div>
		</div>
	);
}

export default CertificationLayout;
