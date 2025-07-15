import { Card, CardHeader, CardContent } from "@/components/ui/card";
import provideIcon from "@/IconProvider/IconProvider";
import React from "react";

function IndustrialSector() {
	const sectors = [
		{
			id: 1,
			icon: provideIcon({ name: "indutry_serve_1" }),
			heading: "Federal Government",
			content:
				"We support civilian and agency-level programs with compliant staffing, procurement, and IT solutions – streamlining operations through GSA and SBA-certified channels.",
		},
		{
			id: 2,
			icon: provideIcon({ name: "indutry_serve_2" }),
			heading: "Defense & Homeland Security",
			content:
				"From cleared technical talent to supply chain support, we help defense and security agencies meet evolving missions with speed, reliability, and precision.",
		},
		{
			id: 3,
			icon: provideIcon({ name: "indutry_serve_3" }),
			heading: "Healthcare & Life Sciences",
			content:
				"We provide clinical, administrative, and technical professionals, as well as PPE, lab supplies, and facility support to hospitals, public health agencies, and research institutions.",
		},
		{
			id: 4,
			icon: provideIcon({ name: "indutry_serve_4" }),
			heading: "Education",
			subheading: "(K–12 & Higher Ed)",
			content:
				"Whether it's IT support for school systems or staffing for administrative and finance roles, we help educational institutions operate efficiently and safely.",
		},
		{
			id: 5,
			icon: provideIcon({ name: "indutry_serve_5" }),
			heading: "Energy & Utilities",
			content:
				"Our skilled technical workforce and safety gear provisioning support utility companies and public works projects in maintaining critical infrastructure and compliance.",
		},
		{
			id: 6,
			icon: provideIcon({ name: "indutry_serve_6" }),
			heading: "Commercial Enterprises",
			content:
				"We deliver staffing and procurement solutions to private-sector organizations – enhancing agility, scalability, and cost-efficiency for growing businesses.",
		},
	];

	return (
		<div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{sectors.map((sector) => (
					<Card
						key={sector.id}
						className="h-full hover:shadow-lg transition-shadow duration-300 text-center">
						<CardHeader className="pb-2">
							<div className="flex flex-col items-center gap-4">
								<div className="w-12 h-12 flex items-center justify-center">
									{sector.icon}
								</div>
								<div>
									<h3 className="text-xl font-semibold">{sector.heading}</h3>
									{sector.subheading && (
										<p className="text-sm text-gray-600">{sector.subheading}</p>
									)}
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<p className="text-gray-700">{sector.content}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}

export default IndustrialSector;
