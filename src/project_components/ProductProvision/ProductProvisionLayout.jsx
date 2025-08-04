import React from "react";
import Banner from "../Home/banner/Banner";
import ProductProvisioningServices from "./ProductProvisioningServices";
import ProvisionEngageMentModel from "./ProvisionEngageMentModel";
import Image from "next/image";

function ProductProvisionLayout() {
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
					className="absolute top-64 left-0 scale-170"
					alt="bg-image"
				/>
				<Image
					src={"/right_img.png"}
					width={500}
					height={500}
					className="absolute -bottom-[35rem] right-0 scale-170"
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
