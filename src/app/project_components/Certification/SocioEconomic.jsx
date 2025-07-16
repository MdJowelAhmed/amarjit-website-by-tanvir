import { Card } from "@/components/ui/card";
import provideIcon from "@/IconProvider/IconProvider";
import HeadingSection from "@/utils/provideHeadingSubheading";
import React from "react";

function SocioEconomic() {
	function socioEconomicHeading() {
		return (
			<section>
				<HeadingSection
					heading="Socio-Economic Certifications"
					subheading="As a certified small and minority-owned business, we bring diversity value to your contracts while meeting key socio-economic goals."
				/>
			</section>
		);
	}

	const socioEconomic = [
		{
			id: 1,
			icon: provideIcon({ name: "certificate" }),
			headline: "MBE",
			subheadLine: "Minority Business Enterprise",
		},
		{
			id: 2,
			icon: provideIcon({ name: "certificate" }),
			headline: "WOSB",
			subheadLine: "Women-Owned Small Business",
		},
		{
			id: 3,
			icon: provideIcon({ name: "certificate" }),
			headline: "8(a) Certification ",
			subheadLine: " SBA Certified",
		},
		{
			id: 4,
			icon: provideIcon({ name: "certificate" }),
			headline: "HUB Zone",
			subheadLine: "Historically Underutilized Business",
		},
	];
	return (
		<div className="pb-24">
			{socioEconomicHeading()}
			<div className="container mx-auto grid lg:grid-cols-4 gap-10">
				{socioEconomic.map((item) => (
					<Card key={item.id} className="flex items-center gap-1 ">
						{provideIcon({ name: "certificate" })}
						<div className="flex flex-col items-center gap-2">
							<h1 className="text-3xl font-bold">{item.headline}</h1>
							<p className="text-lg font-medium">{item.subheadLine}</p>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
}

export default SocioEconomic;
