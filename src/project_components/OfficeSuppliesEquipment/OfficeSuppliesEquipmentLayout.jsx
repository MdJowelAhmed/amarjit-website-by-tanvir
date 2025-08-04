import React from "react";
import OfficeSuppliesEquipmentFeature from "./OfficeSuppliesEquipmentFeature";
import Banner from "../Home/banner/Banner";
import Image from "next/image";

function OfficeSuppliesEquipmentLayout() {
	const setOfficeSuppliesEquipmentBanner = {
		src: "/Home/office-supplies.jpg",
		heading: "Office Supplies & Equipment",
		subheading: "Your Trusted Source for Quality Office Supplies and Equipment",
	};
	return (
		<div>
			<Banner
				src={setOfficeSuppliesEquipmentBanner.src}
				heading={setOfficeSuppliesEquipmentBanner.heading}
				subheading={setOfficeSuppliesEquipmentBanner.subheading}
			/>
			<div className="relative overflow-hidden">
				<Image
					src={"/left_img.png"}
					width={500}
					height={500}
					className="absolute top-64 left-0 scale-170"
					alt="bg-image"
				/>
				<Image
					src={"/right_img.png"}
					width={500}
					height={500}
					className="absolute -bottom-[10rem] right-0 scale-170"
					alt="bg-image"
				/>
				<OfficeSuppliesEquipmentFeature />
			</div>
		</div>
	);
}

export default OfficeSuppliesEquipmentLayout;
