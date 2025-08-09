import React from "react";
import Banner from "../Home/banner/Banner";
import StaffServices from "./StaffServices";
import EngageMentModel from "./EngageMentModel";
import OurServices from "./OurServices";
import Image from "next/image";

function StaffAugmentationLayout() {
	const setServiceBanner = {
		src: "/Our Service/our_service.jpg",
		heading: "Our Services",
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
					className="hidden lg:block absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:top-42 2xl:top-[16rem] md:left-28 2xl:left-10 scale-170"
					alt="bg-image"
				/>
				<Image
					src={"/right_img.png"}
					width={500}
					height={500}
					className="hidden lg:block absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:bottom-[14rem] 2xl:bottom-[8rem] md:right-14 2xl:right-12 scale-170"
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
