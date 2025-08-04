import React from "react";
import Banner from "../Home/banner/Banner";
import GetInTouch from "../Home/getInTouch/GetInTouch";
import Image from "next/image";

function ContactUsLayout() {
	const setContactUsBanner = {
		src: "/Contact Us/contact_us.png",
		heading: "Contact Us",
		subheading:
			"Get in Touch — We’re Here to Help Whether you're looking for IT solutions, staffing support, or have questions about our services, our team is ready to assist you.",
	};
	return (
		<div>
			<Banner
				src={setContactUsBanner.src}
				heading={setContactUsBanner.heading}
				subheading={setContactUsBanner.subheading}
			/>

			<div className="relative overflow-hidden">
				<Image
					src={"/left_img.png"}
					width={500}
					height={500}
					className="hidden lg:block absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:top-56 2xl:top-52 md:left-0 2xl:left-10  scale-170"
					alt="bg-image"
				/>
				<div className="pt-12 px-4">
					<GetInTouch />
				</div>
			</div>
		</div>
	);
}

export default ContactUsLayout;
