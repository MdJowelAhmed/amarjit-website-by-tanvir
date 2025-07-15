// import provideIcon from "@/app/IconProvider/IconProvider";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import React from "react";

// function CoreValue() {
// 	return (
// 		<div>
// 			<h1 className="text-center">Our Core Value</h1>
// 			<div className="container flex items-center justify-between gap-6 mx-auto">
// 				<Card className="">
// 					<CardHeader>
// 						{provideIcon({ name: "our_core_v_1" })}fsdfsfsff
// 					</CardHeader>
// 					<CardContent className="text-justify">
// 						We uphold the highest ethical standards in every interaction—acting
// 						with honesty, transparency, and consistency from proposal to project
// 						close‑out. Integrity means: <br />
// 						<li>
// 							Honest Communication: We provide clear, accurate information to
// 							clients, partners, suppliers, and employees—no hidden fees,
// 							surprises, or fine‑print caveats.
// 						</li>
// 						<li>
// 							Transparent Processes: Our sourcing, vetting, and delivery
// 							workflows are fully documented and auditable, ensuring compliance
// 							with federal, state, and industry regulations.
// 						</li>
// 						<li>
// 							Consistent Ethics: We do what we say we will do, even when
// 							challenges arise, and we hold ourselves accountable for results.
// 						</li>
// 						<li>
// 							Trust‑First Relationships: By putting ethical conduct at the
// 							center of every decision, we build long‑term partnerships based on
// 							mutual respect and reliability.
// 						</li>
// 					</CardContent>
// 				</Card>
// 				<Card className="">
// 					<CardHeader>
// 						{provideIcon({ name: "our_core_v_2" })}fsdfsfsff
// 					</CardHeader>
// 					<CardContent>
// 						We uphold the highest ethical standards in every interaction—acting
// 						with honesty, transparency, and consistency from proposal to project
// 						close‑out. Integrity means: <br />
// 						<li>
// 							Honest Communication: We provide clear, accurate information to
// 							clients, partners, suppliers, and employees—no hidden fees,
// 							surprises, or fine‑print caveats.
// 						</li>
// 						<li>
// 							Transparent Processes: Our sourcing, vetting, and delivery
// 							workflows are fully documented and auditable, ensuring compliance
// 							with federal, state, and industry regulations.
// 						</li>
// 						<li>
// 							Consistent Ethics: We do what we say we will do, even when
// 							challenges arise, and we hold ourselves accountable for results.
// 						</li>
// 						<li>
// 							Trust‑First Relationships: By putting ethical conduct at the
// 							center of every decision, we build long‑term partnerships based on
// 							mutual respect and reliability.
// 						</li>
// 					</CardContent>
// 				</Card>
// 				<Card className="">
// 					<CardHeader className="w-full h-20 flex">
// 						{provideIcon({ name: "our_core_v_3" })}fsdfsfsff
// 					</CardHeader>
// 					<CardContent>
// 						We uphold the highest ethical standards in every interaction—acting
// 						with honesty, transparency, and consistency from proposal to project
// 						close‑out. Integrity means: <br />
// 						<li>
// 							Honest Communication: We provide clear, accurate information to
// 							clients, partners, suppliers, and employees—no hidden fees,
// 							surprises, or fine‑print caveats.
// 						</li>
// 						<li>
// 							Transparent Processes: Our sourcing, vetting, and delivery
// 							workflows are fully documented and auditable, ensuring compliance
// 							with federal, state, and industry regulations.
// 						</li>
// 						<li>
// 							Consistent Ethics: We do what we say we will do, even when
// 							challenges arise, and we hold ourselves accountable for results.
// 						</li>
// 						<li>
// 							Trust‑First Relationships: By putting ethical conduct at the
// 							center of every decision, we build long‑term partnerships based on
// 							mutual respect and reliability.
// 						</li>
// 					</CardContent>
// 				</Card>
// 			</div>
// 		</div>
// 	);
// }

// export default CoreValue;

import provideIcon from "@/app/IconProvider/IconProvider";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

function CoreValue() {
	return (
		<div className="py-12 px-4 sm:px-6 lg:px-8">
			<h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
				Our Core Value
			</h1>
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<Card className="h-full flex flex-col">
						<CardHeader className="flex items-center gap-4">
							{provideIcon({ name: "our_core_v_1" })}
							<h3 className="text-lg md:text-2xl font-bold">Integrity</h3>
						</CardHeader>
						<CardContent className="flex-grow text-justify">
							We uphold the highest ethical standards in every
							interaction—acting with honesty, transparency, and consistency
							from proposal to project close‑out. Integrity means: <br />
							<ul className="space-y-2 mt-2">
								<li className="flex items-start">
									<span className="mr-2">•</span>
									<span>
										Honest Communication: We provide clear, accurate information
										to clients, partners, suppliers, and employees—no hidden
										fees, surprises, or fine‑print caveats.
									</span>
								</li>
								<li className="flex items-start">
									<span className="mr-2">•</span>
									<span>
										Transparent Processes: Our sourcing, vetting, and delivery
										workflows are fully documented and auditable, ensuring
										compliance with federal, state, and industry regulations.
									</span>
								</li>
								<li className="flex items-start">
									<span className="mr-2">•</span>
									<span>
										Consistent Ethics: We do what we say we will do, even when
										challenges arise, and we hold ourselves accountable for
										results.
									</span>
								</li>
								<li className="flex items-start">
									<span className="mr-2">•</span>
									<span>
										Trust‑First Relationships: By putting ethical conduct at the
										center of every decision, we build long‑term partnerships
										based on mutual respect and reliability.
									</span>
								</li>
							</ul>
						</CardContent>
					</Card>

					<Card className="h-full flex flex-col">
						<CardHeader className="flex items-center gap-4">
							{provideIcon({ name: "our_core_v_2" })}
							<h3 className="text-lg md:text-2xl font-bold">Excellence</h3>
						</CardHeader>
						<CardContent className="flex-grow text-justify">
							We uphold the highest ethical standards in every
							interaction—acting with honesty, transparency, and consistency
							from proposal to project close‑out. Integrity means: <br />
							<ul className="space-y-2 mt-2">
								<li className="flex items-start">
									<span className="mr-2">•</span>
									<span>
										Honest Communication: We provide clear, accurate information
										to clients, partners, suppliers, and employees—no hidden
										fees, surprises, or fine‑print caveats.
									</span>
								</li>
								<li className="flex items-start">
									<span className="mr-2">•</span>
									<span>
										Transparent Processes: Our sourcing, vetting, and delivery
										workflows are fully documented and auditable, ensuring
										compliance with federal, state, and industry regulations.
									</span>
								</li>
								<li className="flex items-start">
									<span className="mr-2">•</span>
									<span>
										Consistent Ethics: We do what we say we will do, even when
										challenges arise, and we hold ourselves accountable for
										results.
									</span>
								</li>
								<li className="flex items-start">
									<span className="mr-2">•</span>
									<span>
										Trust‑First Relationships: By putting ethical conduct at the
										center of every decision, we build long‑term partnerships
										based on mutual respect and reliability.
									</span>
								</li>
							</ul>
						</CardContent>
					</Card>

					<Card className="h-full flex flex-col md:col-span-2 lg:col-span-1">
						<CardHeader className="flex items-center gap-4">
							{provideIcon({ name: "our_core_v_3" })}
							<h3 className="text-lg md:text-2xl font-bold">Innovation</h3>
						</CardHeader>
						<CardContent className="flex-grow text-justify">
							We uphold the highest ethical standards in every
							interaction—acting with honesty, transparency, and consistency
							from proposal to project close‑out. Integrity means: <br />
							<ul className="space-y-2 mt-2">
								<li className="flex items-start">
									<span className="mr-2">•</span>
									<span>
										Honest Communication: We provide clear, accurate information
										to clients, partners, suppliers, and employees—no hidden
										fees, surprises, or fine‑print caveats.
									</span>
								</li>
								<li className="flex items-start">
									<span className="mr-2">•</span>
									<span>
										Transparent Processes: Our sourcing, vetting, and delivery
										workflows are fully documented and auditable, ensuring
										compliance with federal, state, and industry regulations.
									</span>
								</li>
								<li className="flex items-start">
									<span className="mr-2">•</span>
									<span>
										Consistent Ethics: We do what we say we will do, even when
										challenges arise, and we hold ourselves accountable for
										results.
									</span>
								</li>
								<li className="flex items-start">
									<span className="mr-2">•</span>
									<span>
										Trust‑First Relationships: By putting ethical conduct at the
										center of every decision, we build long‑term partnerships
										based on mutual respect and reliability.
									</span>
								</li>
							</ul>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default CoreValue;
