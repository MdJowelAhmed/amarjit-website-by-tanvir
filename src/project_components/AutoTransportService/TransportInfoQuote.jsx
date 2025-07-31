"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

function TransportInfoQuote() {
	const [formData, setFormData] = useState({
		transportFrom: "",
		transportTo: "",
		vehicleType: "",
		name: "",
		phone: "",
		email: "",
	});

	const handleSubmit = () => {
		console.log("Form submitted:", formData);
		// Handle form submission here
	};

	const handleInputChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	return (
		<div className="py-6 px-4 max-w-[90rem] mx-auto ">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
				{/* Left Column - Information */}
				<div className="space-y-8">
					{/* How Does It Work Section */}
					<div>
						<h2 className="text-2xl md:text-3xl font-bold text-gradient-heading mb-6">
							How Does It Work?
						</h2>
						<p className="text-gray-700 leading-relaxed text-justify">
							Open trailer car transport works by loading vehicles onto an
							open-air trailer, typically designed with multiple levels to
							maximize space. The vehicles are securely fastened onto the
							trailer deck using straps, chains, or wheel nets to prevent
							movement during transit. Once loaded, the trailer is driven to its
							destination, whether it's a centralized location for mass delivery
							or individual addresses for each vehicle. Throughout the journey,
							the transporter ensures the safety and security of the vehicles,
							adhering to transportation regulations and guidelines. Upon
							arrival, the vehicles are carefully unloaded, completing the
							transport process.
						</p>
					</div>

					{/* Professional Car Transportation Service Section */}
					<div>
						<h2 className="text-2xl md:text-3xl font-bold text-gradient-heading mb-2">
							Professional
						</h2>
						<h3 className="text-2xl md:text-3xl font-bold text-gradient-heading mb-6">
							Car Transportation Service
						</h3>
						<p className="text-gray-700 leading-relaxed text-justify">
							Open trailer car transport works by loading vehicles onto an
							open-air trailer, typically designed with multiple levels to
							maximize space. The vehicles are securely fastened onto the
							trailer deck using straps, chains, or wheel nets to prevent
							movement during transit. Once loaded, the trailer is driven to its
							destination, whether it's a centralized location for mass delivery
							or individual addresses for each vehicle. Throughout the journey,
							the transporter ensures the safety and security of the vehicles,
							adhering to transportation regulations and guidelines. Upon
							arrival, the vehicles are carefully unloaded, completing the
							transport process.
						</p>
					</div>
				</div>

				{/* Right Column - Quote Form */}
				<div className="">
					<Card className="footer-newsletter-gradient border-none  rounded">
						<CardHeader className="text-center pb-4">
							<CardTitle className="text-2xl md:text-3xl font-bold text-gradient-heading">
								Get an Instant Quote
							</CardTitle>
							<p className="text-sm text-gray-600 mt-2">
								Speak Logistics Expert 513-966-9567
							</p>
						</CardHeader>
						<CardContent className="space-y-5">
							<div className="space-y-5">
								{/* Transport From and To */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="space-y-2">
										<Label
											htmlFor="transportFrom"
											className="text-gray-700 font-medium">
											Transport Car From:
										</Label>
										<Input
											id="transportFrom"
											placeholder="Zip Code"
											className="bg-white border-gray-300 placeholder:text-gray-400 h-12"
											value={formData.transportFrom}
											onChange={(e) =>
												handleInputChange("transportFrom", e.target.value)
											}
										/>
									</div>
									<div className="space-y-2">
										<Label
											htmlFor="transportTo"
											className="text-gray-700 font-medium">
											Transport Car To:
										</Label>
										<Input
											id="transportTo"
											placeholder="City or Zip Code"
											className="bg-white border-gray-300 placeholder:text-gray-400 h-12"
											value={formData.transportTo}
											onChange={(e) =>
												handleInputChange("transportTo", e.target.value)
											}
										/>
									</div>
								</div>

								{/* Vehicle Type */}
								<div className="space-y-2">
									<Label
										htmlFor="vehicleType"
										className="text-gray-700 font-medium">
										Vehicle Type:
									</Label>
									<Select
										onValueChange={(value) =>
											handleInputChange("vehicleType", value)
										}>
										<SelectTrigger className="bg-white border-gray-300 w-full">
											<SelectValue placeholder="Car" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="sedan">Sedan</SelectItem>
											<SelectItem value="suv">SUV</SelectItem>
											<SelectItem value="truck">Truck</SelectItem>
											<SelectItem value="coupe">Coupe</SelectItem>
											<SelectItem value="convertible">Convertible</SelectItem>
											<SelectItem value="motorcycle">Motorcycle</SelectItem>
										</SelectContent>
									</Select>
								</div>

								{/* Name and Phone */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="space-y-2">
										<Label htmlFor="name" className="text-gray-700 font-medium">
											Name
										</Label>
										<Input
											id="name"
											placeholder="Name"
											className="bg-white border-gray-300 placeholder:text-gray-400 h-12"
											value={formData.name}
											onChange={(e) =>
												handleInputChange("name", e.target.value)
											}
										/>
									</div>
									<div className="space-y-2">
										<Label
											htmlFor="phone"
											className="text-gray-700 font-medium">
											Phone
										</Label>
										<Input
											id="phone"
											placeholder="+3540 5656"
											className="bg-white border-gray-300 placeholder:text-gray-400 h-12"
											value={formData.phone}
											onChange={(e) =>
												handleInputChange("phone", e.target.value)
											}
										/>
									</div>
								</div>

								{/* Email */}
								<div className="space-y-2">
									<Label htmlFor="email" className="text-gray-700 font-medium">
										Email:
									</Label>
									<Input
										id="email"
										type="email"
										placeholder="example.com"
										className="bg-white border-gray-300 placeholder:text-gray-400 h-12"
										value={formData.email}
										onChange={(e) => handleInputChange("email", e.target.value)}
									/>
								</div>

								{/* Submit Button */}
								<div className="pt-4">
									<Button
										onClick={handleSubmit}
										className="w-full custom-btn hover:opacity-90 text-white font-semibold py-3 h-12">
										Get A Quote
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default TransportInfoQuote;
