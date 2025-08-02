"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";
import NavBar from "../../navBar/NavBar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

function Banner({ src, heading, subheading }) {
	const path = usePathname();

	// Memoize route checks to prevent unnecessary recalculations
	const routeConfig = useMemo(() => {
		const routes = {
			isHome: path === "/",
			isIndustryServe: path === "/industrial-serve",
			isCertification: path === "/certification",
			isBlog: path === "/blog",
			isDynamicBlog: path.includes("/blog/"),
			isStaffAugment: path === "/staff-augmentation-services",
			isProvision: path === "/product-provisioning-services",
			isContact: path === "/contact-us",
			isItAndCyberSecurity: path === "/it-&-cybersecurity",
			isEngineeringAndTechnical: path === "/engineering-technical",
			isHealthCareAdminFinance: path === "/healthcare-admin-finance",
			isLogistic: path === "/logistics-&-transportation",
			isOfficeEquipment: path === "/office-supplies-equipment",
			isIndustrialSafetyGear: path === "/industrial-safety-gear",
			isLogisticPage: path === "/logistics-services",
			isShipper: path === "/logistics-services/shipper",
			isCarrier: path === "/logistics-services/carriers",
			isAutoTransport: path === "/logistics-services/auto-transport",
		};

		// Routes that should show subheading
		const showSubheading = [
			routes.isHome,
			routes.isIndustryServe,
			routes.isCertification,
			routes.isBlog,
			routes.isDynamicBlog,
			routes.isProvision,
			routes.isContact,
			routes.isStaffAugment,
			routes.isItAndCyberSecurity,
			routes.isEngineeringAndTechnical,
			routes.isHealthCareAdminFinance,
			routes.isLogistic,
			routes.isLogisticPage,
			routes.isOfficeEquipment,
			routes.isIndustrialSafetyGear,
			routes.isShipper,
			routes.isCarrier,
			routes.isAutoTransport,
		].some(Boolean);

		return { ...routes, showSubheading };
	}, [path]);

	// Memoize container classes
	const containerClasses = useMemo(() => {
		return `w-full relative overflow-hidden ${
			routeConfig.isHome ? "h-screen" : "min-h-[70vh]"
		}`;
	}, [routeConfig.isHome]);

	// Memoize button component to prevent re-renders
	const ActionButtons = useMemo(() => {
		if (!routeConfig.isHome) return null;

		return (
			<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
				<Link href="/contact-us">
					<Button
						className="w-full sm:w-auto sm:max-w-60 h-10 sm:h-12 rounded-full 
    border-2 border-white text-white px-4 sm:px-6 py-2 text-sm sm:text-base 
    bg-white/15 backdrop-blur-xs shadow-md transition-all duration-200 
    hover:bg-white hover:text-black">
						Get a Free Consultation
					</Button>
				</Link>

				<Link href="/product-provisioning-services">
					<Button
						className="w-full sm:w-auto sm:max-w-60 h-10 sm:h-12 rounded-full 
    border-2 border-white text-white px-4 sm:px-6 py-2 text-sm sm:text-base 
    bg-white/15 backdrop-blur-xs shadow-md transition-all duration-200 
    hover:bg-white hover:text-black">
						Explore Services
					</Button>
				</Link>
			</div>
		);
	}, [routeConfig.isHome]);

	return (
		<div className={containerClasses}>
			{/* NavBar - Fixed positioning for better performance */}
			<header className="absolute top-0 left-0 w-full z-20">
				<NavBar />
			</header>

			{/* Background Image */}
			<div className="absolute inset-0">
				<Image
					src={src}
					alt={routeConfig.isHome ? "Home Banner" : "Page Banner"}
					fill
					className="object-cover object-center"
					priority={routeConfig.isHome}
					sizes="100vw"
					quality={routeConfig.isHome ? 90 : 75}
				/>
			</div>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/10" />

			{/* Content */}
			<main className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
				<div className="w-full max-w-7xl text-center text-white">
					{/* Main Heading */}
					<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-4 sm:mb-6 drop-shadow-lg">
						<Typewriter
							words={[heading]}
							loop={1}
							cursor
							cursorStyle=""
							typeSpeed={60}
							deleteSpeed={70}
							delaySpeed={2000}
						/>
					</h1>

					{/* Subheading */}
					{routeConfig.showSubheading && subheading && (
						<p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-6 sm:mb-8 lg:mb-10 max-w-5xl mx-auto drop-shadow-md">
							{subheading}
						</p>
					)}

					{/* Action Buttons for Home */}
					{ActionButtons}
				</div>
			</main>
		</div>
	);
}

export default React.memo(Banner);
