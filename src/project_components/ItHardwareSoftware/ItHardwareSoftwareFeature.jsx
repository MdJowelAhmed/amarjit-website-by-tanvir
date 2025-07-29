import Image from "next/image";
import React from "react";

function ItHardwareSoftwareFeature() {
	return (
		<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between p-4 sm:p-6 lg:p-8 gap-6 lg:gap-8 text-black mb-10">
			<div className="flex-1 lg:max-w-[45%]">
				<div>
					<h1 className="text-gradient-heading  text-2xl sm:text-6xl lg:text-6xl font-bold  py-2.5 ">
						Our Services
					</h1>
					<div className="space-y-2">
						<h2 className="text-lg font-bold sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-10">
							Freight Shipping
						</h2>
						<p>Domestic & International cargo movement</p>
					</div>
				</div>
				<div className="space-y-2">
					<h2 className="text-lg font-bold sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8">
						Last-Mile Delivery
					</h2>
					<p>On-time urban and rural drop-offs</p>
				</div>
				<div className="space-y-2">
					<h2 className="text-lg font-bold sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8">
						Warehousing & Storage
					</h2>
					<p>Secure, scalable, and efficient</p>
				</div>
				<div className="space-y-2">
					<h2 className="text-lg font-bold sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8">
						Fleet Management
					</h2>
					<p>Real-time tracking and optimized routing</p>
				</div>
				<div className="space-y-2">
					<h2 className="text-lg font-bold sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8">
						E-commerce Fulfillment
					</h2>
					<p>Seamless logistics for online businesses</p>
				</div>
				<div className="mt-10">
					<h1 className="text-gradient-heading  text-2xl sm:text-6xl lg:text-5xl font-bold  py-2.5 ">
						Why Choose Us
					</h1>
					<div className="my-4">
						<ul className="list-disc ml-10 space-y-1.5">
							<li>24/7 Tracking & Support</li>
							<li>Cost-Effective, Transparent Pricing</li>
							<li>Nationwide & Cross-Border Reach</li>
							<li>Certified & Trusted Drivers</li>
							<li>Eco-Friendly Fleet Options</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="flex-shrink-0 w-full sm:w-auto lg:max-w-[45%] lg:w-auto">
				<Image
					src="/Home/Product Provisioning/logistics_2.png"
					alt="Sample Image"
					width={500}
					height={400}
					className="object-cover w-full h-auto"
					// sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
				/>
			</div>
		</div>
	);
}

export default ItHardwareSoftwareFeature;
