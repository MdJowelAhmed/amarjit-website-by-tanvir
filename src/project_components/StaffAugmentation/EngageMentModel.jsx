"use client";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import HeadingSection from "@/utils/provideHeadingSubheading";
import React, { useState } from "react";
import { LuMoveRight } from "react-icons/lu";
import ContactDialog from "./ContactDialog";
import ContractToHireDialog from "./ContractToHireDialog";
import DirectHireDialog from "./DirectHireDialog";
import ManagedServicesDialog from "./ManagedServicesDialog";

// Import dialog components

function EngageMentModel() {
	const [openDialog, setOpenDialog] = useState(null);

	function staffAugmnetHeading() {
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
			heading: "Contact",
			content:
				"Deploy highly skilled professionals for short- or long-term assignments ideal for surge needs, special projects, or temporary vacancies.",
		},
		{
			id: 2,
			heading: "Contract-to-Hire",
			content:
				"Evaluate a candidate's fit on the job before making a full-time commitment. A low-risk path to long-term success.",
		},
		{
			id: 3,
			heading: "Direct Hire",
			content:
				"Tap into our national talent network to fill key permanent roles with pre-vetted candidates — quickly and confidently.",
		},
		{
			id: 4,
			heading: "Managed Services & Project Staffing",
			content:
				"Tap into our national talent network to fill key permanent roles with pre-vetted candidates — quickly and confidently.",
		},
	];

	const getDialogContent = (id, parentOpen) => {
		switch (id) {
			case 1:
				return <ContactDialog />;
			case 2:
				return <ContractToHireDialog />;
			case 3:
				return <DirectHireDialog parentOpen={parentOpen} />;
			case 4:
				return <ManagedServicesDialog parentOpen={parentOpen} />;
			default:
				return null;
		}
	};

	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-20">
			{staffAugmnetHeading()}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{engagementModel.map((service) => (
					<Card
						key={service.id}
						className="border-2 border-[#4f3075] w-full h-full hover:shadow-lg transition-shadow duration-300 text-center flex flex-col">
						<CardHeader className="flex-shrink-0 pb-3 mt-2">
							<h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold md:font-bold leading-tight text-black min-h-[3rem] flex items-center justify-center">
								{service.heading}
							</h3>
						</CardHeader>

						<CardContent className="flex-grow flex items-start justify-center px-4">
							<p className="text-sm md:text-base lg:text-lg text-black leading-relaxed text-center">
								{service.content}
							</p>
						</CardContent>

						<CardFooter className="flex-shrink-0 pt-1 pb-4 flex items-center justify-center">
							<Dialog
								open={openDialog === service.id}
								onOpenChange={(open) =>
									setOpenDialog(open ? service.id : null)
								}>
								<DialogTrigger asChild>
									<Button
										type="button"
										className="bg-transparent border border-[#4f3075] rounded shadow-none h-10 text-[#4f3075] hover:bg-transparent hover:scale-105 flex items-center justify-center gap-2 transition-colors duration-200 z-10">
										Read More <LuMoveRight className="w-4 h-4" />
									</Button>
								</DialogTrigger>
								{getDialogContent(service.id, openDialog === service.id)}
							</Dialog>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}

export default EngageMentModel;
