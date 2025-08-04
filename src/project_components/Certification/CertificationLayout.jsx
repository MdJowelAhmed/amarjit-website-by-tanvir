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
					className="absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:top-44 2xl:top-52 md:left-0 2xl:left-10 scale-170"
					alt="bg-image"
				/>
				<Image
					src={"/right_img.png"}
					width={500}
					height={500}
					className="absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:top-[68rem] 2xl:top-[70rem] md:right-0 2xl:right-10 scale-170"
					alt="bg-image"
				/>
				<Image
					src={"/left_img.png"}
					width={500}
					height={500}
					className="absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:bottom-40 2xl:bottom-14 md:left-0 2xl:left-10 scale-170"
					alt="bg-image"
				/>
				<NAICSTable />
				<SocioEconomic />
			</div>
		</div>
	);
}

export default CertificationLayout;
