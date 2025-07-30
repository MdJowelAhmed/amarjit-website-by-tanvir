import React from "react";
import { Card, CardContent } from "@/components/ui/card";

function AutoTransportFeature() {
	const openTrailerServices = [
		{
			id: 1,
			src: "/Logistic/auto_image_1.png",
			name: "Door To Door",
		},
		{
			id: 2,
			src: "/Logistic/auto_image_2.png",
			name: "Dealerships",
		},
		{
			id: 3,
			src: "/Logistic/auto_image_3.png",
			name: "Snow Bird",
		},
		{
			id: 4,
			src: "/Logistic/auto_image_4.png",
			name: "Auto Auctions",
		},
	];

	return (
		<div className="py-12 px-4 max-w-7xl mx-auto my-5">
			<div className="text-center">
				<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-[#4f3075]">
					Open Trailer Transport Services
				</h1>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
					{openTrailerServices.map((service) => (
						<Card
							key={service.id}
							className="border-none shadow-none bg-transparent">
							<CardContent className="flex flex-col items-center p-0">
								<div className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden mb-4 shadow-lg ">
									<img
										src={service.src}
										alt={service.name}
										className="w-full h-full object-cover"
									/>
								</div>
								<h3 className="text-lg md:text-xl font-bold text-[#4f3075] text-center">
									{service.name}
								</h3>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}

export default AutoTransportFeature;
