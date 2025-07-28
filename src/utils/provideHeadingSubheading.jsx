import React from "react";

function HeadingSection({ icon, heading, subheading }) {
	return (
		<div className="text-center mb-12 sm:mb-16">
			{icon && <div className="mb-4">{icon}</div>}
			<h3 className="text-2xl sm:text-3xl leading-relaxed lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-6 text-gradient-heading  ">
				{heading}
			</h3>
			<p className="text-base  sm:text-lg text-[#181818] max-w-3xl mx-auto">
				{subheading}
			</p>
		</div>
	);
}

export default HeadingSection;
