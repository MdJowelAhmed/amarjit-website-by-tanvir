import { Button } from "@/components/ui/button";
import {
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LuBriefcase } from "react-icons/lu";

const ManagedServicesDialog = () => (
	<DialogContent className="max-w-lg">
		<DialogHeader>
			<DialogTitle className="flex items-center gap-2">
				<LuBriefcase className="w-5 h-5" />
				Managed Services & Project Staffing
			</DialogTitle>
		</DialogHeader>
		<div className="space-y-4">
			<div className="bg-purple-50 p-4 rounded-lg">
				<h3 className="font-semibold text-purple-900 mb-2">What we offer:</h3>
				<ul className="text-sm text-purple-800 space-y-1">
					<li>• End-to-end project management</li>
					<li>• Dedicated project teams</li>
					<li>• Scalable solutions</li>
					<li>• Performance metrics & reporting</li>
				</ul>
			</div>
			<div className="space-y-2">
				<Label htmlFor="projectType">Project Type</Label>
				<Input
					id="projectType"
					placeholder="e.g., Software Development, IT Infrastructure"
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="teamSize">Team Size Needed</Label>
				<Input id="teamSize" placeholder="e.g., 5-10 professionals" />
			</div>
			<div className="space-y-2">
				<Label htmlFor="timeline">Project Timeline</Label>
				<Input id="timeline" placeholder="e.g., 6 months" />
			</div>
			<div className="space-y-2">
				<Label htmlFor="budget">Budget Range</Label>
				<Input id="budget" placeholder="e.g., $100,000 - $500,000" />
			</div>
			<div className="space-y-2">
				<Label htmlFor="projectDetails">Project Details</Label>
				<Textarea
					id="projectDetails"
					placeholder="Describe your project requirements..."
					rows={3}
				/>
			</div>
			<Button type="submit" className="w-full">
				Request Proposal
			</Button>
		</div>
	</DialogContent>
);

export default ManagedServicesDialog;
