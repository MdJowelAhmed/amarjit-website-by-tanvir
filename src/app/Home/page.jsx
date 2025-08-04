// import Banner from "@/project_components/Home/banner/Banner";
// import CoreOfferings from "@/project_components/Home/coreOfferings/CoreOfferings";
// import GetInTouch from "@/project_components/Home/getInTouch/GetInTouch";
// import WhyChooseUs from "@/project_components/Home/whyChoseUs/WhyChooseUs";
// import Image from "next/image";
// import React from "react";

// function Homepage() {
// 	const setHomeBanner = {
// 		src: "/Home/home.png",
// 		heading: "Delivering Talent and Technology — When and Where You Need It.",
// 		subheading:
// 			"End-to-end staffing and product solutions for government and commercial clients.",
// 	};
// 	return (
// 		<div>
// 			<Banner
// 				src={setHomeBanner.src}
// 				heading={setHomeBanner.heading}
// 				subheading={setHomeBanner.subheading}
// 			/>
// 			<div className="relative overflow-hidden">
// 				<Image
// 					src={"/left_img.png"}
// 					width={500}
// 					height={500}
// 					className="absolute top-52 left-[7rem] scale-150"
// 					alt="bg-image"
// 				/>
// 				<Image
// 					src={"/left_img.png"}
// 					width={500}
// 					height={500}
// 					className="absolute top-[150rem] left-[7rem] scale-150"
// 					alt="bg-image"
// 				/>
// 				<Image
// 					src={"/left_img.png"}
// 					width={500}
// 					height={500}
// 					className="absolute -bottom-[28rem] left-[7rem] scale-130"
// 					alt="bg-image"
// 				/>
// 				<Image
// 					src={"/right_img.png"}
// 					width={500}
// 					height={500}
// 					className="absolute top-[85rem] right-[7rem] scale-150"
// 					alt="bg-image"
// 				/>
// 				<Image
// 					src={"/right_img.png"}
// 					width={500}
// 					height={500}
// 					className="absolute bottom-[33rem] right-[7rem] scale-150"
// 					alt="bg-image"
// 				/>
// 				<CoreOfferings />
// 				<WhyChooseUs />
// 				<GetInTouch />
// 			</div>
// 		</div>
// 	);
// }

// export default Homepage;

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
			<div
				// style={{
				// 	backgroundImage: "url('/left_img.png')",
				// }}
				className="relative overflow-hidden">
				{/* Background Images */}
				<div className="hidden lg:block">
					<Image
						src={"/left_img.png"}
						width={500}
						height={500}
						className="absolute top-[18rem] left-40  lg:scale-170 "
						alt="bg-image"
					/>
					<Image
						src={"/left_img.png"}
						width={500}
						height={500}
						className="absolute top-[150rem] left-40 scale-170 "
						alt="bg-image"
					/>
					<Image
						src={"/left_img.png"}
						width={500}
						height={500}
						className="absolute -bottom-[28rem] left-40  scale-170 "
						alt="bg-image"
					/>
					<Image
						src={"/right_img.png"}
						width={500}
						height={500}
						className="absolute top-[85rem] right-40  scale-170 "
						alt="bg-image"
					/>
					<Image
						src={"/right_img.png"}
						width={500}
						height={500}
						className="absolute bottom-[33rem] right-0  scale-170 "
						alt="bg-image"
					/>
				</div>

				<CoreOfferings />
				<WhyChooseUs />
				<GetInTouch />
			</div>
		</div>
	);
}

export default Homepage;
