import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Banner from "../Home/banner/Banner";
import Image from "next/image";

function LogisticsCard() {
	const shipper = [
		{
			id: 1,
			src: "/Shipper/shipper_1.jpg",
			title: "FULL TRUCK LOAD",
			description:
				"Full Truck Load (FTL) services is our strong hold and is the larger part of the core business. Our access to truck capacity (vans & reefers) from over 55,000 qualified carriers daily will assist your high volume and high-capacity needs.",
		},
		{
			id: 2,
			src: "/Shipper/shipper_2.jpg",
			title: "CLIMATE CONTROL",
			description:
				"For high value and temperature sensitive items. Set temperature according to your product requirements. Our selected equipment, offer the most protection for extreme heat or cold, for transporting in summer or winter.",
		},
		{
			id: 3,
			src: "/Shipper/shipper_3.png",
			title: "POWER ONLY",
			description:
				"Power-only service allows you to enhance your existing operations without significant disruption by pairing your company owned trailers with the power capacity. With access to more than 10,000 carriers with power only capacity.",
		},
		{
			id: 4,
			src: "/Shipper/shipper_4.jpg",
			title: "FLATBED TRUCKING",
			description:
				"We deliver carefully engineered flatbed trucking solutions with that help of advanced logistics technology. The logistics experts will map a route that ensure the most efficient transport of your inventory including permits and escorts wherever necessary.",
		},
		{
			id: 5,
			src: "/Shipper/shipper_5.jpg",
			title: "LTL FREIGHT",
			description:
				"With our advanced TMS system, we provide online booking and quote system from multiple carriers. Shipment tracking is done in real time. We have guaranteed and expedited delivery capabilities. The most cost-efficient way to ship larger items.",
		},
		{
			id: 6,
			src: "/Shipper/shipper_6.png",
			title: "CROSS BORDER LOGISTICS",
			description:
				"Our brokers can facilitate every step of the US-Canada cross-border process, from sourcing carriers to coordinating with customs brokers on your behalf.",
		},
		{
			id: 7,
			src: "/Shipper/shipper_7.jpg",
			title: "DRAYAGE",
			description:
				"We coordinate efficiently with customers to ensure the smooth delivery and return of containers, resulting in cost savings and better customer satisfaction.",
		},
	];

	return (
		<div className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
			<div className="container mx-auto max-w-7xl">
				{/* Grid layout matching the image */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* First row - 3 items */}
					{shipper.slice(0, 3).map((item) => (
						<Card
							key={item.id}
							className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
							<CardHeader>
								<div className="relative h-56 overflow-hidden rounded-lg">
									<Image
										src={item.src}
										alt={item.title}
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>
								</div>
							</CardHeader>

							<CardContent className="p-6">
								<h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
									{item.title}
								</h3>
								<p className="text-sm text-gray-600 leading-relaxed text-center">
									{item.description}
								</p>
							</CardContent>
						</Card>
					))}

					{/* Second row - 3 items */}
					{shipper.slice(3, 6).map((item) => (
						<Card
							key={item.id}
							className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
							<CardHeader>
								<div className="relative h-56 overflow-hidden rounded-lg">
									<Image
										src={item.src}
										alt={item.title}
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>
								</div>
							</CardHeader>

							<CardContent className="p-6">
								<h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
									{item.title}
								</h3>
								<p className="text-sm text-gray-600 leading-relaxed text-center">
									{item.description}
								</p>
							</CardContent>
						</Card>
					))}

					{/* Third row - 1 item centered */}
					<div className="md:col-span-2 lg:col-span-3 flex justify-center">
						<Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full max-w-sm">
							<CardHeader>
								<div className="relative h-56  overflow-hidden rounded-lg">
									<Image
										src={shipper[6].src}
										alt={shipper[6].title}
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, 384px"
									/>
								</div>
							</CardHeader>

							<CardContent className="p-6">
								<h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
									{shipper[6].title}
								</h3>
								<p className="text-sm text-gray-600 leading-relaxed text-center">
									{shipper[6].description}
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LogisticsCard;
