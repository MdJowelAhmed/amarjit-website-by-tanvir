import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

function LeadershipTeam() {
	const teamMembers = [
		{
			name: "Jane Doe",
			title: "Chief Executive Officer",
			src: "/About Us/leader_1.png",
			alt: "leader_1",
			description:
				" A visionary leader and certified 8(a)/WOSB business owner, Jane has over 20 years of experience in federal contracting and workforce solutions. She leads strategic growth",
		},
		{
			name: "John Smith",
			title: "Chief Operating Officer",
			src: "/About Us/leader_2.png",
			alt: "leader_2",
			description:
				" John manages daily operations, delivery timelines, and large-scale client programs across multiple industries. His background in IT services, logistics, and contract fulfillment ensures smooth execution from intake to implementation.",
		},
		{
			name: "Maria Chen",
			title: "Chief Technology Officer",
			src: "/About Us/leader_3.png",
			alt: "leader_3",
			description:
				" John manages daily operations, delivery timelines, and large-scale client programs across multiple industries. His background in IT services, logistics, and contract fulfillment ensures smooth execution from intake to implementation.",
		},
		{
			name: "Steve Mark",
			title: "Chief Financial Officer",
			src: "/About Us/leader_4.png",
			alt: "leader_4",
			description:
				" John manages daily operations, delivery timelines, and large-scale client programs across multiple industries. His background in IT services, logistics, and contract fulfillment ensures smooth execution from intake to implementation.",
		},
	];

	return (
		<div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 ">
			<div className="max-w-[85%] mx-auto ">
				<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">
					Leadership Team
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:px-4">
					{teamMembers.map((member, index) => (
						<Card
							key={index}
							className="group  h-full shadow-none border-none bg-gray-50 transition-shadow duration-300 p-0">
							<CardHeader className="p-0">
								<Image
									src={member.src}
									width={400}
									height={400}
									alt={member.alt}
									className="w-full group-hover:scale-105 ease-in duration-300 "
								/>
							</CardHeader>
							<CardContent className="text-center px-4">
								<h3 className="text-xl md:text-2xl font-semibold text-blue-950">
									{member.name}
								</h3>
								<p className="text-sm text-gray-600">{member.title}</p>
								<p className="text-gray-700 pt-5">{member.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}

export default LeadershipTeam;
