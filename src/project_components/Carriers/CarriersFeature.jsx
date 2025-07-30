import Image from "next/image";
import React from "react";

function CarriersFeature() {
	return (
		<div className="max-w-7xl container mx-auto p-6  py-12 lg:py-20">
			<ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
				<li className="text-lg">
					A leading freight brokerage team that accelerates your growth.
				</li>
				<li className="text-lg">
					With our vast network of customers, we provide you with access to
					shipments that best fit your needs.
				</li>
				<li className="text-lg">
					Large or small fleets, we have all the opportunities for you.
				</li>
			</ul>

			<Image
				src={"/Logistic/carrier.png"}
				alt={"carrier image"}
				width={1500}
				height={1900}
				className="object-cover my-5 rounded-lg"
			/>

			<p className="mb-4 text-gray-700">
				KFB works with a network of carriers committed to providing safe,
				efficient, and on-time service to our customers across the nation.
			</p>

			<p className="mb-4 text-gray-700">
				Our Team is deeply connected with its carrier partners. We are always
				looking for reliable, skilled, and trustworthy carriers with excellent
				driving records, low claims, and losses, and who know how to deliver on
				time, all the time.
			</p>

			<p className="mb-4 text-gray-700">
				Working with us comes with several benefits, including flexible payment
				terms, online bidding, and direct deposit payments. We’re well-known in
				the transportation industry as a top choice for carriers to do business
				with.
			</p>

			<p className="mb-6 text-gray-700">
				Our dedicated carrier relations department exists to ensure our carriers
				are consistently happy with our service. We strive to ensure the freight
				you need to keep moving forward and work to build lasting relationships.
				We invite you to signup with us today to start hauling and make money.
			</p>
		</div>
	);
}

export default CarriersFeature;
