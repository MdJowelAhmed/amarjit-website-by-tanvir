import React from "react";
import Banner from "../Home/banner/Banner";
import ProductProvisioningServices from "./ProductProvisioningServices";
import ProvisionEngageMentModel from "./ProvisionEngageMentModel";

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
			<div className="py-12 lg:py-24 flex flex-col gap-20">
				<ProductProvisioningServices />
				<ProvisionEngageMentModel />
			</div>
		</div>
	);
}

export default ProductProvisionLayout;
