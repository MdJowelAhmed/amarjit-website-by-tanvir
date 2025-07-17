// "use client";
// import { Button } from "@/components/ui/button";
// import {
// 	Card,
// 	CardContent,
// 	CardFooter,
// 	CardHeader,
// } from "@/components/ui/card";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
// 	Dialog,
// 	DialogContent,
// 	DialogHeader,
// 	DialogTitle,
// 	DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";

// import HeadingSection from "@/utils/provideHeadingSubheading";
// import Image from "next/image";

// import Link from "next/link";
// import React, { useState } from "react";
// import {
// 	LuMoveRight,
// 	LuUser,
// 	LuMail,
// 	LuPhone,
// 	LuBriefcase,
// } from "react-icons/lu";

// function EngageMentModel() {
// 	const [openDialog, setOpenDialog] = useState(null);

// 	function staffAugmnetHeading() {
// 		return (
// 			<section>
// 				<HeadingSection
// 					heading="Engagement Models"
// 					subheading="We offer flexible engagement models to align with your project timelines, staffing strategy, and compliance needs:"
// 				/>
// 			</section>
// 		);
// 	}

// 	const engagementModel = [
// 		{
// 			id: 1,
// 			heading: "Contact",
// 			content:
// 				"Deploy highly skilled professionals for short- or long-term assignments ideal for surge needs, special projects, or temporary vacancies.",
// 		},
// 		{
// 			id: 2,
// 			heading: "Contract-to-Hire",
// 			content:
// 				"Evaluate a candidate's fit on the job before making a full-time commitment. A low-risk path to long-term success.",
// 		},
// 		{
// 			id: 3,
// 			heading: "Direct Hire",
// 			content:
// 				"Tap into our national talent network to fill key permanent roles with pre-vetted candidates — quickly and confidently.",
// 		},
// 		{
// 			id: 4,
// 			heading: "Managed Services & Project Staffing",
// 			content:
// 				"Tap into our national talent network to fill key permanent roles with pre-vetted candidates — quickly and confidently.",
// 		},
// 	];

// 	// Contact Form Dialog
// 	const ContactDialog = () => (
// 		// <DialogContent className="min-w-xl  border-2 border-red-300">
// 		// 	<div className="mt-2 text-center">
// 		// 		<h1>Let’s Connect</h1>
// 		// 		<p>
// 		// 			Deploy highly skilled professionals for short- or long-term
// 		// 			assignments — ideal for surge needs, special projects, or temporary
// 		// 			vacancies.
// 		// 		</p>
// 		// 	</div>
// 		// 	<div className="border rounded-md p-2">
// 		// 		<DialogHeader className="pb-4">
// 		// 			<DialogTitle>Contact Form</DialogTitle>
// 		// 		</DialogHeader>
// 		// 		<form className="space-y-4">
// 		// 			<div className="space-y-2">
// 		// 				<Label htmlFor="name">Name</Label>
// 		// 				<Input id="name" placeholder="Your full name" />
// 		// 			</div>
// 		// 			<div className="space-y-2">
// 		// 				<Label htmlFor="email">Email</Label>
// 		// 				<Input id="email" type="email" placeholder="your@email.com" />
// 		// 			</div>
// 		// 			<div className="space-y-2">
// 		// 				<Label htmlFor="phone">Phone</Label>
// 		// 				<Input id="phone" type="tel" placeholder="Your phone number" />
// 		// 			</div>
// 		// 			<div className="space-y-2">
// 		// 				<Label htmlFor="phone">Organization Name</Label>
// 		// 				<Input
// 		// 					id="phone"
// 		// 					type="tel"
// 		// 					placeholder="Name of Your Organaization"
// 		// 				/>
// 		// 			</div>
// 		// 			<div className="space-y-2">
// 		// 				<Label htmlFor="phone">Service Type</Label>
// 		// 				<Select
// 		// 					id="phone"
// 		// 					type="tel"
// 		// 					placeholder="Name of Your Organaization"
// 		// 				/>
// 		// 			</div>
// 		// 			<div className="space-y-2">
// 		// 				<Label htmlFor="message">Message</Label>
// 		// 				<Textarea
// 		// 					id="message"
// 		// 					placeholder="Tell us about your staffing needs..."
// 		// 					rows={4}
// 		// 				/>
// 		// 			</div>
// 		// 			<Checkbox id="terms" />
// 		// 			<Label htmlFor="terms">
// 		// 				“I’d like to receive a capabilities statement.
// 		// 			</Label>
// 		// 			<Button type="submit" className="w-full">
// 		// 				Send Message
// 		// 			</Button>
// 		// 		</form>
// 		// 	</div>
// 		// </DialogContent>

// 		<DialogContent className="max-w-lg  md:max-w-2xl lg:max-w-4xl border-2 border-red-300">
// 			<div className="mt-2 text-center">
// 				<h1 className="text-xl md:text-2xl lg:text-3xl  font-semibold md:font-bold">
// 					Let’s Connect
// 				</h1>
// 				<p className="text-gray-600 mt-2">
// 					Deploy highly skilled professionals for short- or long-term
// 					assignments — ideal for surge needs, special projects, or temporary
// 					vacancies.
// 				</p>
// 			</div>

// 			<div className="border rounded-md p-4 mt-4">
// 				<DialogHeader className="pb-4">
// 					<DialogTitle>Contact Form</DialogTitle>
// 				</DialogHeader>

// 				<form className="space-y-4">
// 					<div className="space-y-2">
// 						<Label htmlFor="name">Full Name</Label>
// 						<Input id="name" placeholder="Your full name here" />
// 					</div>

// 					<div className="space-y-2">
// 						<Label htmlFor="email">Email Address</Label>
// 						<Input id="email" type="email" placeholder="your@email.com" />
// 					</div>

// 					<div className="space-y-2">
// 						<Label htmlFor="phone">Phone Number</Label>
// 						<Input id="phone" type="tel" placeholder="+1234567890" />
// 					</div>

// 					<div className="space-y-2">
// 						<Label htmlFor="organization">Organization Name</Label>
// 						<Input id="organization" placeholder="Name of your organization" />
// 					</div>

// 					<div className="space-y-2">
// 						<Label htmlFor="service">Service Type</Label>
// 						<Select id="service">
// 							<SelectTrigger className="w-full">
// 								<SelectValue placeholder="Select a service" />
// 							</SelectTrigger>
// 							<SelectContent>
// 								<SelectItem value="extra-services">Extra Services</SelectItem>
// 								<SelectItem value="protection">Protection</SelectItem>
// 								<SelectItem value="consulting">Consulting</SelectItem>
// 							</SelectContent>
// 						</Select>
// 					</div>

// 					<div className="space-y-2">
// 						<Label htmlFor="message">Message</Label>
// 						<Textarea
// 							id="message"
// 							placeholder="Tell us about your staffing needs..."
// 							rows={4}
// 						/>
// 					</div>

// 					<div className="flex items-start space-x-2">
// 						<Checkbox id="terms" />
// 						<Label htmlFor="terms">
// 							I’d like to receive a capabilities statement.
// 						</Label>
// 					</div>

// 					<Button type="submit" className="w-full">
// 						Send Message
// 					</Button>
// 				</form>
// 			</div>
// 		</DialogContent>
// 	);

// 	// Contract-to-Hire Dialog
// 	const ContractToHireDialog = () => (
// 		// <DialogContent className="max-w-lg  md:max-w-2xl lg:max-w-4xl border-2 border-red-300">
// 		// 	<div className="mt-2 text-center">
// 		// 		<h1 className="text-xl md:text-2xl lg:text-3xl  font-semibold md:font-bold">
// 		// 			Contract-to-Hire
// 		// 		</h1>
// 		// 		<p className="text-gray-600 mt-2">
// 		// 			Evaluate a candidate’s fit on the job before making a full-time
// 		// 			commitment a low-risk path to long-term success.
// 		// 		</p>
// 		// 		<Button className="h-12 mt-4 ">Talk to Our HR Team</Button>
// 		// 	</div>
// 		// 	<div className="flex flex-col sm:flex sm:flex-row gap-10 items-start justify-between mt-6 px-6 w-full">
// 		// 		<div className="w-1/2 ">
// 		// 			<Image
// 		// 				src={"/Our Service/group.png"}
// 		// 				alt={""}
// 		// 				width={400}
// 		// 				height={400}
// 		// 				className=""
// 		// 			/>
// 		// 		</div>
// 		// 		<div className="w-1/2 ">
// 		// 			<h1 className="text-2xl font-bold">How It Works</h1>
// 		// 			<ul className="space-y-4 mt-2">
// 		// 				<li>
// 		// 					<Label className="text-xl">Deploy Pre-Vetted Talent</Label>
// 		// 					<p className="text-gray-600 mt-1">
// 		// 						We match you with qualified candidates who meet your technical
// 		// 						and cultural needs.
// 		// 					</p>
// 		// 				</li>
// 		// 				<li>
// 		// 					<Label className="text-xl">Evaluate on the Job</Label>
// 		// 					<p className="text-gray-600 mt-1">
// 		// 						Assess performance and fit over a trial period with minimal
// 		// 						commitment
// 		// 					</p>
// 		// 				</li>
// 		// 				<li>
// 		// 					<Label className="text-xl">Hire with Confidence</Label>
// 		// 					<p className="text-gray-600 mt-1">
// 		// 						Transition top performers to full-time with no disruption to
// 		// 						your workflow.
// 		// 					</p>
// 		// 				</li>
// 		// 			</ul>
// 		// 		</div>
// 		// 	</div>
// 		// </DialogContent>

// 		<DialogContent className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl border-2 border-red-300 p-4 sm:p-6 lg:p-8">
// 			<div className="text-center">
// 				<h1 className="text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold">
// 					Contract-to-Hire
// 				</h1>
// 				<p className="text-gray-600 mt-2">
// 					Evaluate a candidate’s fit on the job before making a full-time
// 					commitment — a low-risk path to long-term success.
// 				</p>
// 				<Button className="h-12 mt-4">Talk to Our HR Team</Button>
// 			</div>

// 			<div className="flex flex-col lg:flex-row gap-8 items-center justify-between mt-6 w-full">
// 				{/* Image Section */}
// 				<div className="w-3/5 sm:w-1/2 lg:w-1/2">
// 					<Image
// 						src="/Our Service/group.png"
// 						alt="Contract-to-Hire illustration"
// 						width={400}
// 						height={400}
// 						className="w-full h-auto object-contain"
// 					/>
// 				</div>

// 				{/* Text Section */}
// 				<div className="w-full lg:w-1/2">
// 					<h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
// 						How It Works
// 					</h2>
// 					<ul className="space-y-6">
// 						<li>
// 							<Label className="text-xl">Deploy Pre-Vetted Talent</Label>
// 							<p className="text-gray-600 mt-1">
// 								We match you with qualified candidates who meet your technical
// 								and cultural needs.
// 							</p>
// 						</li>
// 						<li>
// 							<Label className="text-xl">Evaluate on the Job</Label>
// 							<p className="text-gray-600 mt-1">
// 								Assess performance and fit over a trial period with minimal
// 								commitment.
// 							</p>
// 						</li>
// 						<li>
// 							<Label className="text-xl">Hire with Confidence</Label>
// 							<p className="text-gray-600 mt-1">
// 								Transition top performers to full-time with no disruption to
// 								your workflow.
// 							</p>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 		</DialogContent>
// 	);

// 	// Direct Hire Dialog
// 	const DirectHireDialog = () => (
// 		<DialogContent className="max-w-lg">
// 			<DialogHeader>
// 				<DialogTitle className="flex items-center gap-2">
// 					<LuUser className="w-5 h-5" />
// 					Direct Hire Services
// 				</DialogTitle>
// 			</DialogHeader>
// 			<div className="space-y-4">
// 				<div className="bg-green-50 p-4 rounded-lg">
// 					<h3 className="font-semibold text-green-900 mb-2">Our Process:</h3>
// 					<ul className="text-sm text-green-800 space-y-1">
// 						<li>• Access to national talent network</li>
// 						<li>• Pre-vetted candidates</li>
// 						<li>• Quick turnaround time</li>
// 						<li>• Quality guarantee</li>
// 					</ul>
// 				</div>
// 				<div className="space-y-2">
// 					<Label htmlFor="jobTitle">Job Title</Label>
// 					<Input id="jobTitle" placeholder="e.g., Senior Manager" />
// 				</div>
// 				<div className="space-y-2">
// 					<Label htmlFor="salary">Salary Range</Label>
// 					<Input id="salary" placeholder="e.g., $80,000 - $120,000" />
// 				</div>
// 				<div className="space-y-2">
// 					<Label htmlFor="location">Location</Label>
// 					<Input id="location" placeholder="e.g., New York, NY or Remote" />
// 				</div>
// 				<div className="space-y-2">
// 					<Label htmlFor="jobDescription">Job Description</Label>
// 					<Textarea
// 						id="jobDescription"
// 						placeholder="Describe the role and responsibilities..."
// 						rows={4}
// 					/>
// 				</div>
// 				<Button type="submit" className="w-full">
// 					Find Candidates
// 				</Button>
// 			</div>
// 		</DialogContent>
// 	);

// 	// Managed Services Dialog
// 	const ManagedServicesDialog = () => (
// 		<DialogContent className="max-w-lg">
// 			<DialogHeader>
// 				<DialogTitle className="flex items-center gap-2">
// 					<LuBriefcase className="w-5 h-5" />
// 					Managed Services & Project Staffing
// 				</DialogTitle>
// 			</DialogHeader>
// 			<div className="space-y-4">
// 				<div className="bg-purple-50 p-4 rounded-lg">
// 					<h3 className="font-semibold text-purple-900 mb-2">What we offer:</h3>
// 					<ul className="text-sm text-purple-800 space-y-1">
// 						<li>• End-to-end project management</li>
// 						<li>• Dedicated project teams</li>
// 						<li>• Scalable solutions</li>
// 						<li>• Performance metrics & reporting</li>
// 					</ul>
// 				</div>
// 				<div className="space-y-2">
// 					<Label htmlFor="projectType">Project Type</Label>
// 					<Input
// 						id="projectType"
// 						placeholder="e.g., Software Development, IT Infrastructure"
// 					/>
// 				</div>
// 				<div className="space-y-2">
// 					<Label htmlFor="teamSize">Team Size Needed</Label>
// 					<Input id="teamSize" placeholder="e.g., 5-10 professionals" />
// 				</div>
// 				<div className="space-y-2">
// 					<Label htmlFor="timeline">Project Timeline</Label>
// 					<Input id="timeline" placeholder="e.g., 6 months" />
// 				</div>
// 				<div className="space-y-2">
// 					<Label htmlFor="budget">Budget Range</Label>
// 					<Input id="budget" placeholder="e.g., $100,000 - $500,000" />
// 				</div>
// 				<div className="space-y-2">
// 					<Label htmlFor="projectDetails">Project Details</Label>
// 					<Textarea
// 						id="projectDetails"
// 						placeholder="Describe your project requirements..."
// 						rows={3}
// 					/>
// 				</div>
// 				<Button type="submit" className="w-full">
// 					Request Proposal
// 				</Button>
// 			</div>
// 		</DialogContent>
// 	);

// 	const getDialogContent = (id) => {
// 		switch (id) {
// 			case 1:
// 				return <ContactDialog />;
// 			case 2:
// 				return <ContractToHireDialog />;
// 			case 3:
// 				return <DirectHireDialog />;
// 			case 4:
// 				return <ManagedServicesDialog />;
// 			default:
// 				return null;
// 		}
// 	};

// 	return (
// 		<div className="container mx-auto px-4 sm:px-6 lg:px-20">
// 			{staffAugmnetHeading()}
// 			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// 				{engagementModel.map((service) => (
// 					<Card
// 						key={service.id}
// 						className="w-full h-full hover:shadow-lg transition-shadow duration-300 text-center flex flex-col">
// 						<CardHeader className="flex-shrink-0 pb-3 mt-2">
// 							<h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl  font-semibold md:font-bold leading-tight min-h-[3rem] flex items-center justify-center">
// 								{service.heading}
// 							</h3>
// 						</CardHeader>

// 						<CardContent className="flex-grow flex items-start justify-center px-4 ">
// 							<p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed text-center">
// 								{service.content}
// 							</p>
// 						</CardContent>

// 						<CardFooter className="flex-shrink-0 pt-1 pb-4 flex items-center justify-center">
// 							<Dialog
// 								open={openDialog === service.id}
// 								onOpenChange={(open) =>
// 									setOpenDialog(open ? service.id : null)
// 								}>
// 								<DialogTrigger asChild>
// 									<Button
// 										type="button"
// 										className="bg-transparent border rounded shadow-none h-10 text-black hover:bg-transparent hover:border-black flex items-center justify-center gap-2 transition-colors duration-200">
// 										Read More <LuMoveRight className="w-4 h-4" />
// 									</Button>
// 								</DialogTrigger>
// 								{getDialogContent(service.id)}
// 							</Dialog>
// 						</CardFooter>
// 					</Card>
// 				))}
// 			</div>
// 		</div>
// 	);
// }

// export default EngageMentModel;

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

// Import dialog components
import ContactDialog from "./ContactDialog";
import ContractToHireDialog from "./ContractToHireDialog";
import DirectHireDialog from "./DirectHireDialog";
import ManagedServicesDialog from "./ManagedServicesDialog";

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

	const getDialogContent = (id) => {
		switch (id) {
			case 1:
				return <ContactDialog />;
			case 2:
				return <ContractToHireDialog />;
			case 3:
				return <DirectHireDialog />;
			case 4:
				return <ManagedServicesDialog />;
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
							<Dialog
								open={openDialog === service.id}
								onOpenChange={(open) =>
									setOpenDialog(open ? service.id : null)
								}>
								<DialogTrigger asChild>
									<Button
										type="button"
										className="bg-transparent border rounded shadow-none h-10 text-black hover:bg-transparent hover:border-black flex items-center justify-center gap-2 transition-colors duration-200">
										Read More <LuMoveRight className="w-4 h-4" />
									</Button>
								</DialogTrigger>
								{getDialogContent(service.id)}
							</Dialog>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}

export default EngageMentModel;
