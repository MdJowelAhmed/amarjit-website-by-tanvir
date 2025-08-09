import React from "react";
import Banner from "../Home/banner/Banner";
import ProductProvisioningServices from "./ProductProvisioningServices";
import ProvisionEngageMentModel from "./ProvisionEngageMentModel";
import Image from "next/image";

function ProductProvisionLayout() {
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
					className="hidden lg:block absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:top-56 md:left-28 2xl:left-18 scale-170"
					alt="bg-image"
				/>
				<Image
					src={"/right_img.png"}
					width={500}
					height={500}
					className="hidden lg:block absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:-bottom-[15rem] 2xl:-bottom-[24rem] md:right-5 2xl:right-12 scale-170"
					alt="bg-image"
				/>

				<div className="py-12 lg:py-24 flex flex-col gap-20">
					<ProductProvisioningServices />
					<ProvisionEngageMentModel />
				</div>
			</div>
		</div>
	);
}

export default ProductProvisionLayout;
