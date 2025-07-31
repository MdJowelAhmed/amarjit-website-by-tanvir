import React from "react";
import Banner from "../Home/banner/Banner";
import AutoTransportFeature from "./AutoTransportFeature";
import TransportInfoQuote from "./TransportInfoQuote";

function AutoTransportServiceLayout() {
	const setAutoTransportBanner = {
		src: "/Logistic/auto_transport.jpg",
		heading: "Auto Transportation Services",
		subheading:
			"Whether you're relocating, managing fleet logistics, or selling vehicles across states—KFBUSA provides dependable auto transportation services tailored to your needs. From sedans and SUVs to motorcycles and commercial fleets, we move your vehicles securely and on time.",
	};
	return (
		<div>
			<Banner
				src={setAutoTransportBanner.src}
				heading={setAutoTransportBanner.heading}
				subheading={setAutoTransportBanner.subheading}
			/>
			<div className="py-8 lg:py-20">
				<div>
					<h1 className="text-gradient-heading text-2xl sm:text-3xl leading-relaxed lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-6 text-center">
						What Is Open Trailer Car Transport?
					</h1>
					<p className="text-base  sm:text-lg text-[#181818] max-w-7xl mx-auto text-center">
						Open trailer car transport is a method of transporting vehicles
						using an open-air trailer. Unlike enclosed transport, open trailers
						expose vehicles to the elements during transit. This method is
						commonly used for standard vehicles and is often more cost-effective
						than enclosed transport. While vehicles may be exposed to weather
						conditions and road debris, open trailer transport is generally safe
						and efficient for short to medium-distance transportation needs.
					</p>
				</div>
				<AutoTransportFeature />
				<TransportInfoQuote />
			</div>
		</div>
	);
}

export default AutoTransportServiceLayout;
