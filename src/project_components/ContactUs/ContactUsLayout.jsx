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

			<div className="pt-12">
				<div className="relative overflow-hidden">
					<Image
						src={"/left_img.png"}
						width={500}
						height={500}
						className="absolute top-12 left-0 xl:left-[0rem] scale-100 xl:scale-110"
						alt="bg-image"
					/>
					<GetInTouch />
				</div>
			</div>
		</div>
	);
}

export default ContactUsLayout;
