import React from "react";
import { Download } from "lucide-react";

function TableLayout({
	title = "How We Support State & Local Agencies",
	description = "We simplify procurement for state, county, and city governments through pre-approved purchasing channels and cooperative contract vehicles. Our solutions are tailored to local agency needs—from IT hardware to professional staffing and managed services.",
	sectionTitle = "Contract Listings",
	contracts = [],
}) {
	const defaultContracts = [
		{
			id: 1,
			contractName: "IT Hardware & Services",
			stateAgency: "State of Texas",
			contractNumber: "DIR-TSO-XXXX",
			servicesCovered: "Devices, Licensing, Support",
		},
		{
			id: 2,
			contractName: "IT Hardware & Services",
			stateAgency: "State of Texas",
			contractNumber: "DIR-TSO-XXXX",
			servicesCovered: "Devices, Licensing, Support",
		},
		{
			id: 3,
			contractName: "IT Hardware & Services",
			stateAgency: "State of Texas",
			contractNumber: "DIR-TSO-XXXX",
			servicesCovered: "Devices, Licensing, Support",
		},
		{
			id: 4,
			contractName: "IT Hardware & Services",
			stateAgency: "State of Texas",
			contractNumber: "DIR-TSO-XXXX",
			servicesCovered: "Devices, Licensing, Support",
		},
		{
			id: 5,
			contractName: "IT Hardware & Services",
			stateAgency: "State of Texas",
			contractNumber: "DIR-TSO-XXXX",
			servicesCovered: "Devices, Licensing, Support",
		},
	];

	const contractData = contracts.length > 0 ? contracts : defaultContracts;

	return (
		<div className="max-w-6xl mx-auto p-6 space-y-6">
			{/* Header Section */}
			<div className="space-y-4">
				<h1 className="text-2xl font-bold text-gray-900">{title}</h1>
				<p className="text-gray-600 leading-relaxed">{description}</p>
			</div>

			{/* Contract Table Section */}
			<div className="bg-white border border-gray-200 rounded-lg shadow-sm">
				<div className="px-6 py-4 border-b border-gray-200">
					<h2 className="text-lg font-semibold text-gray-900">
						{sectionTitle}
					</h2>
				</div>
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead>
							<tr className="bg-gray-50 border-b border-gray-200">
								<th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
									Contract Name
								</th>
								<th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
									State/Agency
								</th>
								<th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
									Contract Number
								</th>
								<th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
									Services Covered
								</th>
								<th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
									Download
								</th>
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-200">
							{contractData.map((contract) => (
								<tr
									key={contract.id}
									className="hover:bg-gray-50 transition-colors">
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
										{contract.contractName}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
										{contract.stateAgency}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
										{contract.contractNumber}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
										{contract.servicesCovered}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-center">
										<button
											className="inline-flex items-center justify-center p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
											onClick={() => {
												// Handle download logic here
												console.log(`Downloading contract ${contract.id}`);
											}}>
											<Download className="h-4 w-4" />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default TableLayout;
