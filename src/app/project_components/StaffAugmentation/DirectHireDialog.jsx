import { Button } from "@/components/ui/button";
import {
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LuUser } from "react-icons/lu";

const DirectHireDialog = () => (
	<DialogContent className="max-w-lg">
		<DialogHeader>
			<DialogTitle className="flex items-center gap-2">
				<LuUser className="w-5 h-5" />
				Direct Hire Services
			</DialogTitle>
		</DialogHeader>
		<div className="space-y-4">
			<div className="bg-green-50 p-4 rounded-lg">
				<h3 className="font-semibold text-green-900 mb-2">Our Process:</h3>
				<ul className="text-sm text-green-800 space-y-1">
					<li>• Access to national talent network</li>
					<li>• Pre-vetted candidates</li>
					<li>• Quick turnaround time</li>
					<li>• Quality guarantee</li>
				</ul>
			</div>
			<div className="space-y-2">
				<Label htmlFor="jobTitle">Job Title</Label>
				<Input id="jobTitle" placeholder="e.g., Senior Manager" />
			</div>
			<div className="space-y-2">
				<Label htmlFor="salary">Salary Range</Label>
				<Input id="salary" placeholder="e.g., $80,000 - $120,000" />
			</div>
			<div className="space-y-2">
				<Label htmlFor="location">Location</Label>
				<Input id="location" placeholder="e.g., New York, NY or Remote" />
			</div>
			<div className="space-y-2">
				<Label htmlFor="jobDescription">Job Description</Label>
				<Textarea
					id="jobDescription"
					placeholder="Describe the role and responsibilities..."
					rows={4}
				/>
			</div>
			<Button type="submit" className="w-full">
				Find Candidates
			</Button>
		</div>
	</DialogContent>
);

export default DirectHireDialog;
