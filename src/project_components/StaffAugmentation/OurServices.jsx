import Image from "next/image";
import React from "react";

function OurServices() {
	const services = [
		"24 hours dispatch service",
		"Dry Van",
		"Temperature Controlled",
		"Full Truck Load (FTL)",
		"Less than truck loads (LTL)",
		"Team and Expedite service",
		"Drayage",
		"Flatbed",
		"Multi Stop Loads",
		"Just in time deliver",
		"Floor loading",
	];

	return (
		<div className="py-8 px-4 sm:px-6 lg:px-8">
			<div className="container mx-auto max-w-7xl">
				<div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10 w-full">
					{/* Image Section */}
					<div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
						<div className="relative w-full max-w-md lg:max-w-lg">
							<Image
								src={"/StaffAugmentaion/staff_services.png"}
								alt="service image"
								width={500}
								height={400}
								className="w-full h-auto object-contain rounded-lg"
								priority
							/>
						</div>
					</div>

					{/* Content Section */}
					<div className="w-full lg:w-1/2 text-center lg:text-left">
						<h1 className="text-gradient-heading text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
							Our Services
						</h1>

						{/* Services List */}
						<div className="text-left">
							<ul className="list-disc ml-5 space-y-2 text-sm sm:text-base lg:text-lg text-gray-700">
								{services.map((service, index) => (
									<li key={index} className="leading-relaxed">
										{service}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OurServices;
