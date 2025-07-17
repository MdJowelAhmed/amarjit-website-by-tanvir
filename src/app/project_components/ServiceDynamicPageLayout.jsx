import React from "react";
import Banner from "./Home/banner/Banner";
import FourCardsLayout from "./ServiceLayout.jsx/FourCardsLayout";
import HeadingSection from "@/utils/provideHeadingSubheading";

function ServiceDynamicPageLayout() {
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
			<GCA />
			<LocalPurchasing />
			<CooperativePurchasing />
			<VendorSourcing />
		</div>
	);
}

export default ServiceDynamicPageLayout;

function GCA() {
	function provisionEngagementHeading() {
		return (
			<section>
				<HeadingSection
					heading="GSA Schedules: Simplifying Federal Procurement"
					subheading="Pre-negotiated pricing, terms, and categories through our GSA Schedule Contract(s) — enabling faster, compliant acquisitions."
				/>
			</section>
		);
	}
	return (
		<div className="w-full lg:py-24">
			{provisionEngagementHeading()}
			<FourCardsLayout />
		</div>
	);
}
function LocalPurchasing() {}
function CooperativePurchasing() {}
function VendorSourcing() {}
