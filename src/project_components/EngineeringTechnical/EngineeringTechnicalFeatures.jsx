import Image from "next/image";
import React from "react";

function EngineeringTechnicalFeatures() {
	return (
		<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between p-4 sm:p-6 lg:p-8 gap-6 lg:gap-8 text-black mb-10">
			<div className="flex-1 lg:max-w-[60%]">
				<h1 className="text-gradient-heading text-2xl sm:text-3xl lg:text-6xl font-bold">
					What We Provide
				</h1>
				<h2 className="text-lg font-bold sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8">
					Expertise Across Core Disciplines
				</h2>
				<p className="text-base sm:text-lg mt-2">
					We deliver professionals across every engineering discipline — ready
					to support government projects, field operations, or enterprise
					innovation.
				</p>

				<div>
					<ul className="mt-4 sm:mt-6 space-y-1 sm:space-y-4 list-disc pl-4 sm:pl-6 lg:pl-8 ">
						<li>Mechanical & Electrical Engineers</li>
						<li>Civil & Structural Engineers</li>
						<li>Systems Engineers & Technicians</li>
						<li>CAD Designers & Drafters</li>
						<li>Field Service Engineers & Technicians</li>
						<li>Construction Managers & Estimators</li>
					</ul>
				</div>
				<div className="mt-4 sm:mt-6">
					<h1 className="text-2xl text-gradient-heading sm:text-3xl lg:text-4xl font-bold mt-6 sm:mt-8 lg:mt-10">
						Where We Add Value
					</h1>
					<ul className="space-y-3 sm:space-y-4 mt-6">
						<li>
							<h3 className="text-lg sm:text-xl font-semibold">
								Technical Program Staffing
							</h3>
							<p className="text-sm sm:text-base mt-1">
								We provide workforce support for engineering-intensive programs
								in energy, construction, utilities, aerospace, manufacturing,
								and defense.
							</p>
						</li>
						<li>
							<h3 className="text-lg sm:text-xl font-semibold">
								Facility & Site Support
							</h3>
							<p className="text-sm sm:text-base mt-1">
								We place skilled field engineers, maintenance specialists, and
								QA/QC techs in locations ranging from data centers to industrial
								job sites.
							</p>
						</li>
						<li>
							<h3 className="text-lg sm:text-xl font-semibold">
								Design & Project Services
							</h3>
							<p className="text-sm sm:text-base mt-1">
								CAD, BIM, and drafting professionals who help deliver precision
								design and support construction workflows.
							</p>
						</li>
					</ul>
				</div>
			</div>

			<div className="flex-shrink-0 w-full sm:w-auto lg:max-w-[40%] lg:w-auto">
				<Image
					src="/Home/Staffing Solution/engineering_technical.png"
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

export default EngineeringTechnicalFeatures;
