"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import NavBar from "../../navBar/NavBar";

import { usePathname } from "next/navigation";

function Banner({ src, heading, subheading }) {
	const path = usePathname();
	console.log("Path name is: ", path);

	const isHome = path === "/";
	const isIndustryServe = path === "/industrial-serve";
	const isCertification = path === "/certification";
	const isBlog = path === "/blog";
	const isDynamicBlog = path.includes("/blog/");
	const isStaffAugment = path === "/staff-augmentation-services";
	const isProvision = path === "/product-provisioning-services";
	return (
		<>
			<div
				className={`w-full  relative overflow-hidden ${
					isHome ? "h-screen" : "min-h-[70vh]"
				}`}>
				{/* NavBar at the top, absolutely positioned */}
				<div className="absolute top-0 left-0 w-full z-20">
					<NavBar />
				</div>
				{isHome ? (
					<Image
						src={src}
						alt="Home Banner"
						fill
						className="object-cover object-center"
						priority
					/>
				) : (
					<Image
						src={src}
						alt="Home Banner"
						fill
						className="w-full  object-cover object-center"
						priority
					/>
				)}

				<div className="absolute inset-0 bg-black/10" />

				<div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
					<div className="w-full max-w-7xl text-center text-white">
						<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl xl:text-7xl 2xl:text-7xl font-semibold leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight mb-4 sm:mb-6">
							{/* Delivering Talent and Technology — When and Where You Need It. */}
							{heading}
						</h1>
						{isHome ||
						isIndustryServe ||
						isCertification ||
						isBlog ||
						isDynamicBlog ||
						isProvision ||
						isStaffAugment ? (
							<p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-6 sm:mb-8 lg:mb-10 max-w-5xl mx-auto">
								{subheading}
							</p>
						) : null}
						{isHome ? (
							<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
								<Button className="w-full sm:w-auto sm:max-w-60 h-10 sm:h-12 rounded-full border-2 bg-transparent border-white text-white px-4 sm:px-6 py-2 text-sm sm:text-base transition hover:bg-white backdrop-blur-sm hover:text-black">
									Get a Free Consultation
								</Button>
								<Button className="w-full sm:w-auto sm:max-w-60 h-10 sm:h-12 rounded-full border-2 bg-transparent border-white text-white px-4 sm:px-6 py-2 text-sm sm:text-base transition hover:bg-white backdrop-blur-sm hover:text-black">
									Explore Services
								</Button>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</>
	);
}

export default Banner;
