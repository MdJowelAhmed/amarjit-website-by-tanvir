import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import HeadingSection from "@/utils/provideHeadingSubheading";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
function ThreeServiceCard() {
	const threeServices = [
		{
			id: 1,
			title: "Shipper",
			description:
				"We provide tailored logistics solutions for shippers seeking reliability, visibility, and cost-efficiency. Whether you're moving full truckloads or managing multi-point deliveries, our platform connects you with a trusted carrier network, real-time tracking, and flexible freight options.",
			buttonText: "Learn More",
			href: "/logistics-services/shipper",
		},
		{
			id: 2,
			title: "Carriers",
			description:
				"At KFBUSA, we believe carriers are the backbone of successful logistics. Our platform connects reliable trucking companies and independent drivers with consistent freight opportunities across the country. Whether you specialize in regional hauls, long-distance routes, or last-mile delivery—we have the right loads for you.",
			buttonText: "Join Network",
			href: "/logistics-services/carriers",
		},
		{
			id: 3,
			title: "Auto Transportation Services",
			description:
				"Whether you're relocating, managing fleet logistics, or selling vehicles across states—KFBUSA provides dependable auto transportation services tailored to your needs. From sedans and SUVs to motorcycles and commercial fleets, we move your vehicles securely and on time.",
			buttonText: "Get Quote",
			href: "/logistics-services/auto-transport",
		},
	];
	function ourService() {
		return (
			<section>
				<HeadingSection
					heading="Our Services"
					subheading="Fast, secure, and cost-effective transportation for your goods. Whether local or long-haul, we ensure end-to-end visibility and timely deliveries."
				/>
			</section>
		);
	}
	return (
		<div className="py-12 px-4 sm:px-6 lg:px-8 mb-10">
			<div className="container mx-auto max-w-7xl">
				{ourService()}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{threeServices.map((service) => (
						<Card
							key={service.id}
							className="h-full flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
							<CardHeader className="pb-4">
								<CardTitle className="text-xl font-bold text-gray-800 text-center">
									{service.title}
								</CardTitle>
							</CardHeader>
							<CardContent className="flex-grow px-6 pb-4">
								<p className="text-gray-600 leading-relaxed text-base">
									{service.description}
								</p>
							</CardContent>
							<CardFooter className="pt-4 pb-6 px-6">
								<Link href={service.href} className="w-full">
									<Button className="w-full custom-btn">
										Continue <FaLongArrowAltRight />
									</Button>
								</Link>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}

export default ThreeServiceCard;
