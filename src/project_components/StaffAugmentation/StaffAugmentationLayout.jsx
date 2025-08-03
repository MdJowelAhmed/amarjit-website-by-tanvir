import React from "react";
import Banner from "../Home/banner/Banner";
import StaffServices from "./StaffServices";
import EngageMentModel from "./EngageMentModel";
import OurServices from "./OurServices";
import Image from "next/image";

function StaffAugmentationLayout() {
	const setServiceBanner = {
		src: "/Our Service/our_service.jpg",
		heading: "Our Service",
		subheading:
			"We deliver flexible staffing and reliable product sourcing to help our clients meet operational goals with confidence, compliance, and speed.",
	};
	return (
		<div>
			<Banner
				src={setServiceBanner.src}
				heading={setServiceBanner.heading}
				subheading={setServiceBanner.subheading}
			/>
			<div className="relative overflow-hidden">
				<Image
					src={"/left_img.png"}
					width={500}
					height={500}
					className="absolute top-32 left-0 xl:left-[0rem] scale-100 xl:scale-110"
					alt="bg-image"
				/>
				<Image
					src={"/right_img.png"}
					width={500}
					height={500}
					className="absolute -bottom-[0rem] right-0 xl:right-[0rem] scale-100 xl:scale-130"
					alt="bg-image"
				/>
				<div className="py-12 lg:py-24 flex flex-col gap-20">
					<OurServices />
					<StaffServices />
					<EngageMentModel />
				</div>
			</div>
		</div>
	);
}

export default StaffAugmentationLayout;
