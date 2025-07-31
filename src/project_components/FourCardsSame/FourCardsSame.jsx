import { Card, CardContent } from "@/components/ui/card";
import provideIcon from "@/IconProvider/IconProvider";

function FourCardsSame() {
	const features = [
		{
			icon: provideIcon({ name: "engagement_models" }),
			title: " Engagement Models",

			description:
				"We offer flexible delivery models to meet the unique needs of government agencies and commercial organizations — whether you're scaling fast, filling gaps, or outsourcing entire functions.",
		},
		{
			icon: provideIcon({ name: "why_clients_trust_us" }),
			title: "Why Clients Trust Us",

			description:
				"We don’t just deliver — we deliver right, on time, and in full compliance. Here’s why public and private sector clients choose us as their go-to partner for staffing and product solutions.",
		},
		{
			icon: provideIcon({ name: "certifications_contract_vehicles" }),

			title: "Certifications & Contract Vehicles",
			description:
				"We are fully qualified and certified to serve federal, state, and commercial clients with speed, compliance, and precision. ",
		},
		{
			icon: provideIcon({ name: "industries_we_Support" }),
			title: "Industries We Support",
			description:
				"We proudly serve a diverse range of sectors where precision, compliance, and security are critical. Our scalable staffing and provisioning capabilities help agencies and enterprises deliver.",
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{features.map((feature, index) => (
				<Card key={index} className="border-2 border-[#4f3075] h-full">
					<CardContent className="p-6 flex flex-col items-center text-center h-full">
						{/* Icon */}
						<div className="mb-4 flex-shrink-0 ">{feature.icon}</div>

						{/* Title */}
						<h3 className="text-xl font-semibold text-[#343432] mb-3 leading-tight">
							{feature.title}
						</h3>

						{/* Description */}
						<p className="text-[#343432] leading-relaxed text-sm flex-grow">
							{feature.description}
						</p>
					</CardContent>
				</Card>
			))}
		</div>
	);
}

export default FourCardsSame;
