import { Card, CardContent, CardHeader } from "@/components/ui/card";
import provideIcon from "@/IconProvider/IconProvider";
import React from "react";

const coreValues = [
	{
		id: 1,
		icon: "our_core_v_1",
		title: "Integrity",
		description:
			"At KFBUSA, integrity is the cornerstone of every relationship and solution we deliver. We hold ourselves to the highest ethical and professional standards—ensuring transparency, compliance, and trust at every level. Whether managing complex contracts or mission-critical supply chains, we lead with honesty and clarity to earn and keep our clients’ confidence.",
	},
	{
		id: 2,
		icon: "our_core_v_2",
		title: "Excellence",
		description:
			"Innovation at KFBUSA goes beyond technology—it’s about solving real-world challenges through smarter, agile thinking. We apply a forward-focused mindset, using modern tools, data insights, and adaptable strategies to meet evolving client needs. From streamlining logistics to modernizing workforce systems, we deliver inventive, measurable results.",
	},
	{
		id: 3,
		icon: "our_core_v_3",
		title: "Innovation",
		description:
			"Excellence is our standard—not just our goal. Every service we offer—from staffing to logistics—is delivered with precision, speed, and meticulous attention to detail. Our commitment ensures consistent, high-quality outcomes that meet the demands of both public and private sectors. We pride ourselves on delivering scalable solutions that empower clients to thrive.",
		extraClasses: "md:col-span-2 lg:col-span-1",
	},
];

function CoreValue() {
	return (
		<div className="py-12 px-4 sm:px-6 lg:px-8">
			<h1 className="text-gradient-heading text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10">
				Our Core Value
			</h1>
			<div className="container mx-auto mt-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{coreValues.map((value) => (
						<Card
							key={value.id}
							className={`border-2 border-[#4f3075] h-full flex flex-col text-gray-700 ${
								value.extraClasses || ""
							}`}>
							<CardHeader className="flex items-center gap-4">
								{provideIcon({ name: value.icon })}
								<h3 className="text-lg md:text-2xl font-bold">{value.title}</h3>
							</CardHeader>
							<CardContent className="flex-grow text-justify">
								<p>{value.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}

export default CoreValue;
