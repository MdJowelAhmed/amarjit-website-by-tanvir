import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

function OurMission() {
	return (
		<div className="bg-transparent min-h-screen py-8 px-4">
			<div className="container mx-auto max-w-7xl">
				{/* Our Mission Section */}
				<div className="mb-16">
					<div className="flex flex-col lg:flex-row items-center justify-between gap-8">
						<div className="flex-1 lg:max-w-2xl order-2 lg:order-1">
							<h1 className="text-gradient-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
								Our Mission
							</h1>
							<p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
								Our mission is to close the gap between urgent organizational
								needs and reliable delivery through the seamless integration of
								skilled professionals, essential products, and cutting-edge
								technology. We are driven by a commitment to operational
								excellence—delivering solutions with responsiveness, compliance,
								and measurable value. From high-stakes federal missions to
								dynamic commercial ventures, we operate with purpose, precision,
								and partnership—empowering our clients to achieve their highest
								performance.
							</p>
						</div>
						<div className="flex-shrink-0 order-1 lg:order-2">
							<Image
								src="/AboutUs/About_1.png"
								width={400}
								height={400}
								alt="Our Mission"
								className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
							/>
						</div>
					</div>
				</div>

				{/* Who We Are Section */}
				{/* Our Mission Section */}
				<div className="mb-16">
					<div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8">
						<div className="flex-1 lg:max-w-2xl order-2 lg:order-1">
							<h1 className="text-gradient-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
								Who We Are
							</h1>
							<p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
								We are a woman-owned business built to simplify how
								organizations source talent, essential products, logistics, and
								technology solutions. From our agile beginnings to becoming a
								trusted partner to government and commercial clients, we deliver
								fast, compliant, and dependable support. Our strength lies in
								meeting the complex demands of public sector contracting while
								staying responsive to the pace of modern business—all with a
								focus on client success.
							</p>
						</div>
						<div className="flex-shrink-0 order-1 lg:order-2">
							<Image
								src="/AboutUs/About_2.png"
								width={400}
								height={400}
								alt="Our Mission"
								className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
							/>
						</div>
					</div>
				</div>

				{/* WOSB Section */}

				<div className="mb-16">
					<div className="flex flex-col  lg:flex-row-reverse items-center justify-between gap-8">
						<div className="flex-1 lg:max-w-2xl order-2 lg:order-1">
							<h1 className="text-gradient-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
								WOSB (Women-Owned Small Business)
							</h1>
							<p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
								As a Women-Owned Small Business (WOSB) certified by the U.S.
								Small Business Administration, we are part of a vital initiative
								to level the playing field in federal contracting. This
								certification demonstrates that our company is:
							</p>
							<ul className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify list-disc pl-6">
								<li>At least 51% owned and controlled by one or more women</li>
								<li>
									Actively managed by women on a day-to-day and long-term basis
								</li>
								<li>
									Eligible to compete for set-aside federal contracts under the
									WOSB Federal Contracting Program
								</li>
							</ul>
						</div>
						<div className="flex-shrink-0 order-1 lg:order-2">
							<Image
								src="/AboutUs/About_3.png"
								width={400}
								height={400}
								alt="Our Mission"
								className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OurMission;
