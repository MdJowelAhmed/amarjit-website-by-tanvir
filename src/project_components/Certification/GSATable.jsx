import HeadingSection from "@/utils/provideHeadingSubheading";

function NAICSTable() {
	function naicsHeading() {
		return (
			<section>
				<HeadingSection
					heading="NAICS Codes"
					subheading="We maintain all required business identifiers to ensure full alignment with federal and commercial procurement standards."
				/>
			</section>
		);
	}
	const naicsData = {
		staffingTalent: [
			{ code: "561320", description: "Temporary Help Services" },
			{ code: "561311", description: "Employment Placement Agencies" },
			{ code: "541612", description: "Human Resources Consulting Services" },
		],
		procurementProducts: [
			{
				code: "423840",
				description: "Industrial Supplies Merchant Wholesalers",
			},
			{
				code: "423430",
				description:
					"Computer and Computer Peripheral Equipment and Software Wholesalers",
			},
			{
				code: "423490",
				description:
					"Other Professional Equipment and Supplies Merchant Wholesalers",
			},
		],
		technologySolutions: [
			{ code: "541511", description: "Custom Computer Programming Services" },
			{ code: "541512", description: "Computer Systems Design Services" },
			{ code: "541519", description: "Other Computer Related Services" },
		],
		logisticsSupplyChain: [
			{ code: "488510", description: "Freight Transportation Arrangement" },
			{
				code: "541614",
				description:
					"Process, Physical Distribution, and Logistics Consulting Services",
			},
			{ code: "492110", description: "Couriers and Express Delivery Services" },
			{ code: "493110", description: "General Warehousing and Storage" },
		],
		governmentSupport: [
			{ code: "561110", description: "Office Administrative Services" },
			{
				code: "541611",
				description:
					"Administrative Management and General Management Consulting Services",
			},
		],
	};

	const CategoryTable = ({ title, data }) => (
		<div className="mb-10 border border-[#4f3075]">
			{/* Category Header */}
			<div className=" border-b border-[#4f3075]">
				<h3 className="text-center font-semibold py-4 px-4 text-gray-800 text-lg">
					{title}
				</h3>
			</div>

			{/* Column Headers */}
			<div className="grid grid-cols-2 bg-gray-50 border-b border-[#4f3075]">
				<div className="border-r border-[#4f3075] text-center font-semibold text-gray-800 py-3 px-4">
					Code Type
				</div>
				<div className="text-center font-semibold text-gray-800 py-3 px-4">
					Value
				</div>
			</div>

			{/* Data Rows */}
			{data.map((item, index) => (
				<div
					key={index}
					className="grid grid-cols-2 border-b border-[#4f3075] hover:bg-gray-50">
					<div className="border-r border-[#4f3075] text-center py-4 px-4 font-medium">
						{item.code}
					</div>
					<div className="text-center py-4 px-4">{item.description}</div>
				</div>
			))}
		</div>
	);

	return (
		<div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-white">
			{/* Header Section */}
			<div className="text-center mb-10">{naicsHeading()}</div>

			{/* Tables */}
			<div className="space-y-6">
				<CategoryTable
					title="Staffing & Talent Services"
					data={naicsData.staffingTalent}
				/>

				<CategoryTable
					title="Procurement & Essential Products"
					data={naicsData.procurementProducts}
				/>

				<CategoryTable
					title="Technology Solutions & Services"
					data={naicsData.technologySolutions}
				/>

				<CategoryTable
					title="Logistics & Supply Chain Services"
					data={naicsData.logisticsSupplyChain}
				/>

				<CategoryTable
					title="Government Contracting Support (General)"
					data={naicsData.governmentSupport}
				/>
			</div>
		</div>
	);
}

export default NAICSTable;
