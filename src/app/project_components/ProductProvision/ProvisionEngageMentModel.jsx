"use client";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";

import HeadingSection from "@/utils/provideHeadingSubheading";
import React, { useState } from "react";
import { LuMoveRight } from "react-icons/lu";

// Import dialog components

function ProvisionEngageMentModel() {
	const [openDialog, setOpenDialog] = useState(null);

	function provisionEngagementHeading() {
		return (
			<section>
				<HeadingSection
					heading="Engagement Models"
					subheading="We offer flexible engagement models to align with your project timelines, staffing strategy, and compliance needs:"
				/>
			</section>
		);
	}

	const engagementModel = [
		{
			id: 1,
			heading: "GSA Schedules",
			content:
				"Pre-negotiated pricing, terms, and categories through our GSA Schedule Contract(s) for federal procurement ease and speed.",
		},
		{
			id: 2,
			heading: "State & Local Purchasing Contracts",
			content:
				"Active vendor registrations and contract awards across multiple states and municipalities.",
		},
		{
			id: 3,
			heading: "Cooperative Purchasing Agreements",
			content:
				"Participation in nationally recognized co-ops (e.g., OMNIA, TIPS, Source well) to streamline bulk or multi-agency purchases.",
		},
		{
			id: 4,
			heading: "Vendor-Agnostic Sourcing",
			content:
				"We are not tied to specific OEMs or brands  which allows us to: Optimize for best pricing, shortest lead times, and mission fit",
		},
	];

	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-20">
			{provisionEngagementHeading()}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{engagementModel.map((service) => (
					<Card
						key={service.id}
						className="w-full h-full hover:shadow-lg transition-shadow duration-300 text-center flex flex-col">
						<CardHeader className="flex-shrink-0 pb-3 mt-2">
							<h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold md:font-bold leading-tight min-h-[3rem] flex items-center justify-center">
								{service.heading}
							</h3>
						</CardHeader>

						<CardContent className="flex-grow flex items-start justify-center px-4">
							<p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed text-center">
								{service.content}
							</p>
						</CardContent>

						<CardFooter className="flex-shrink-0 pt-1 pb-4 flex items-center justify-center">
							<Button
								type="button"
								className="bg-transparent border rounded shadow-none h-10 text-black hover:bg-transparent hover:border-black flex items-center justify-center gap-2 transition-colors duration-200">
								Continue <LuMoveRight className="w-4 h-4" />
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}

export default ProvisionEngageMentModel;
