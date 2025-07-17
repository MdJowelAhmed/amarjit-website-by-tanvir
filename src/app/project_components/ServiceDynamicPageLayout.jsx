"use client";
import React from "react";
import Banner from "./Home/banner/Banner";
import FourCardsLayout from "./ServiceLayout.jsx/FourCardsLayout";
import HeadingSection from "@/utils/provideHeadingSubheading";
import { usePathname } from "next/navigation";
import TableLayout from "./ServiceLayout.jsx/TableLayout";

function ServiceDynamicPageLayout() {
	const path = usePathname();
	const isGCA = path === "/product-provisioning-services/gca-schedule";
	const isVendor = path === "/product-provisioning-services/vendor-sourcing";
	const isLocalPuchasing =
		path === "/product-provisioning-services/local-purchasing";
	const isCooperativePurchasing =
		path === "/product-provisioning-services/cooperative-purchasing";
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
			{isGCA && <GCA />}
			{isLocalPuchasing && <LocalPurchasing />}
			{isCooperativePurchasing && <CooperativePurchasing />}
			{isVendor && <VendorSourcing />}
		</div>
	);
}

export default ServiceDynamicPageLayout;

function GCA() {
	function provisionEngagementHeading() {
		return (
			<section>
				<HeadingSection
					heading="GCA Schedules: Simplifying Federal Procurement"
					subheading="Pre-negotiated pricing, terms, and categories through our GSA Schedule Contract(s) — enabling faster, compliant acquisitions."
				/>
			</section>
		);
	}
	return (
		<div className="w-full lg:py-24">
			{provisionEngagementHeading()}
			<FourCardsLayout isGCA={true} />
		</div>
	);
}
function LocalPurchasing() {
	function localPurchasingHeading() {
		return (
			<section>
				<HeadingSection
					heading="State & Local Purchasing Contracts"
					subheading="Streamlined procurement through cooperative agreements, state contracts, and vendor registrations — built for government buyers."
				/>
			</section>
		);
	}
	return (
		<div className="w-full lg:py-24">
			{localPurchasingHeading()}
			<TableLayout />
		</div>
	);
}
function CooperativePurchasing() {
	function cooperativePurchasingHeading() {
		return (
			<section>
				<HeadingSection
					heading="Cooperative Purchasing Agreements"
					subheading="Access our products and services through pre-approved, competitively bid cooperative contracts — saving time, cost, and administrative effort."
				/>
			</section>
		);
	}
	return (
		<div className="w-full lg:py-24">
			{cooperativePurchasingHeading()}
			<TableLayout />
		</div>
	);
}
function VendorSourcing() {
	function vendorSourcingHeading() {
		return (
			<section>
				<HeadingSection
					heading="Vendor-Agnostic Sourcing"
					subheading="Get the best-fit products and services without brand bias — optimized for performance, price, and availability."
				/>
			</section>
		);
	}
	return (
		<div className="w-full lg:py-24">
			{vendorSourcingHeading()}
			<FourCardsLayout isGCA={false} />
		</div>
	);
}
