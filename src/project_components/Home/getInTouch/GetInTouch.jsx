"use client";
import React, { useState } from "react";
import { Mail, MapPin, Linkedin, Send } from "lucide-react";
import { CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

function GetInTouch() {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		service: "",
		message: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSelectChange = (value) => {
		setFormData((prev) => ({
			...prev,
			service: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		// Handle form submission here
	};

	const contactInfo = [
		{
			id: 1,
			icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#4f3075]" />,
			label: "OUR HEADQUARTER",
			content: "5356 Elmwood Lane, Liberty Township, OH - 45044",
		},
		{
			id: 2,
			icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#4f3075]" />,
			label: "E-mail",
			content: "example@gmail.com",
		},

		{
			id: 3,
			icon: (
				<LiaPhoneVolumeSolid className="w-4 h-4 sm:w-5 sm:h-5 text-[#4f3075]" />
			),
			label: "Contact",
			content: "examplelinkedin.com",
		},
	];

	return (
		<div className="get-in-touch-card flex flex-col lg:flex-row items-start gap-8 lg:gap-12 xl:gap-20 max-w-[90rem] mx-auto mt-8 sm:mt-12 mb-12 sm:mb-24 px-4 sm:px-8 md:px-12 lg:px-14 py-6 sm:py-8 md:py-10">
			{/* Left Column - Contact Info */}
			<div className="w-full lg:w-1/3 h-full flex flex-col items-start">
				<h1 className="text-2xl text-gradient-heading sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight sm:leading-snug lg:leading-normal gradient-h1">
					Engage with Us
				</h1>

				<div className="space-y-4 sm:space-y-5 py-4 sm:py-6 w-full">
					{contactInfo.map((item) => (
						<div
							key={item.id}
							className="flex items-start space-x-3 sm:space-x-4 group  p-2 sm:py-2 rounded-lg transition-colors w-full">
							<div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-50 border border-[#4f3075] rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
								{item.icon}
							</div>
							<div className="flex-1 min-w-0">
								<p className="text-xs sm:text-sm text-black font-medium uppercase tracking-wide">
									{item.label}
								</p>
								<p className="text-sm sm:text-base text-black font-medium break-words">
									{item.content}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Right Column - Contact Form */}
			<div className="w-full lg:w-2/3 pt-0 sm:pt-3">
				<div className="text-start pb-4 sm:pb-6">
					<CardTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
						GET IN TOUCH
					</CardTitle>
				</div>

				<form
					onSubmit={handleSubmit}
					className="space-y-3 sm:space-y-4 md:space-y-6">
					{/* Name and Phone */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
						<div className="space-y-1 sm:space-y-2">
							<Input
								type="text"
								name="name"
								placeholder="Your Name"
								value={formData.name}
								onChange={handleInputChange}
								className="h-10 sm:h-12 text-black border-[#302d70] focus:border-blue-500 focus:ring-blue-500 placeholder:text-gray-500"
								required
							/>
						</div>
						<div className="space-y-1 sm:space-y-2">
							<Input
								type="tel"
								name="phone"
								placeholder="Phone Number"
								value={formData.phone}
								onChange={handleInputChange}
								className="h-10 sm:h-12 text-black border-[#302d70]  focus:border-blue-500 focus:ring-blue-500 placeholder:text-gray-500"
								required
							/>
						</div>
					</div>

					{/* Email and Service */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
						<div className="space-y-1 sm:space-y-2">
							<Input
								type="email"
								name="email"
								placeholder="Your Email"
								value={formData.email}
								onChange={handleInputChange}
								className="h-10 sm:h-12 text-black border-[#302d70] focus:border-blue-500 focus:ring-blue-500 placeholder:text-gray-500"
								required
							/>
						</div>
						<div className="space-y-1 sm:space-y-2">
							<Select
								value={formData.service}
								onValueChange={handleSelectChange}>
								<SelectTrigger className="h-10 w-full sm:h-12  border-[#302d70] focus:border-blue-500 focus:ring-blue-500 placeholder:text-gray-500">
									<SelectValue placeholder="Service Interest" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="web-development">
										Web Development
									</SelectItem>
									<SelectItem value="mobile-app">
										Mobile App Development
									</SelectItem>
									<SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
									<SelectItem value="consulting">Consulting</SelectItem>
									<SelectItem value="other">Other</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>

					{/* Message */}
					<div className="space-y-1 sm:space-y-2">
						<Textarea
							name="message"
							placeholder="Your Message"
							value={formData.message}
							onChange={handleInputChange}
							rows={4}
							className="text-black border-[#302d70] focus:border-blue-500 focus:ring-blue-500 resize-none h-24 sm:h-32 placeholder:text-gray-500"
							required
						/>
					</div>

					{/* Submit Button */}
					<Button
						type="submit"
						className="w-full h-10 sm:h-12 rounded-full gardient-style text-white py-2 sm:py-3 px-4 sm:px-6 font-medium hover:opacity-90 active:bg-gray-700 transition-colors duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base">
						<span>Contact Us</span>
						<FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
					</Button>
				</form>
			</div>
		</div>
	);
}

export default GetInTouch;
