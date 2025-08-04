import Banner from "@/project_components/Home/banner/Banner";
import CoreOfferings from "@/project_components/Home/coreOfferings/CoreOfferings";
import GetInTouch from "@/project_components/Home/getInTouch/GetInTouch";
import WhyChooseUs from "@/project_components/Home/whyChoseUs/WhyChooseUs";
import Image from "next/image";
import React from "react";

function Homepage() {
	const setHomeBanner = {
		src: "/Home/home_banner_image_2.png",
		heading: "Delivering Talent and Technology — When and Where You Need It.",
		subheading:
			"End-to-end staffing and product solutions for government and commercial clients.",
	};
	return (
		<div>
			<Banner
				src={setHomeBanner.src}
				heading={setHomeBanner.heading}
				subheading={setHomeBanner.subheading}
			/>
			<div className="relative overflow-hidden">
				{/* Background Images */}
				<div className="hidden lg:block ">
					<Image
						src={"/left_img.png"}
						width={500}
						height={500}
						className="absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:top-[14rem] 2xl:top-[16rem] md:left-0 2xl:left-48 scale-170 "
						alt="bg-image"
					/>
					<Image
						src={"/left_img.png"}
						width={500}
						height={500}
						className="absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:top-[150rem] 2xl:top-[148rem] 2xl:left-48 scale-170 "
						alt="bg-image"
					/>
					<Image
						src={"/left_img.png"}
						width={500}
						height={500}
						className="absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:-bottom-[18rem] 2xl:-bottom-[24rem] 2xl:left-20  scale-170 "
						alt="bg-image"
					/>
					<Image
						src={"/right_img.png"}
						width={500}
						height={500}
						className="absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:top-[85rem] 2xl:top-[86rem] md:right-36 2xl:right-48 scale-170 "
						alt="bg-image"
					/>
					<Image
						src={"/right_img.png"}
						width={500}
						height={500}
						className="absolute h-full md:h-[450px] 2xl:h-[550px] w-full md:w-[420px] 2xl:w-[550px] md:bottom-[45rem] 2xl:bottom-[40rem] md:right-0 2xl:right-48 scale-170 "
						alt="bg-image"
					/>
				</div>

				<CoreOfferings />
				<WhyChooseUs />
				<div className="px-4">
					<GetInTouch />
				</div>
			</div>
		</div>
	);
}

export default Homepage;
