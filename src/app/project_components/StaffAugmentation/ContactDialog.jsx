import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const ContactDialog = () => (
	<DialogContent className="max-w-lg md:max-w-2xl lg:max-w-4xl border-2 border-red-300">
		<div className="mt-2 text-center">
			<h1 className="text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold">
				Let's Connect
			</h1>
			<p className="text-gray-600 mt-2">
				Deploy highly skilled professionals for short- or long-term assignments
				— ideal for surge needs, special projects, or temporary vacancies.
			</p>
		</div>

		<div className="border rounded-md p-4 mt-4">
			<DialogHeader className="pb-4">
				<DialogTitle>Contact Form</DialogTitle>
			</DialogHeader>

			<form className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="name">Full Name</Label>
					<Input id="name" placeholder="Your full name here" />
				</div>

				<div className="space-y-2">
					<Label htmlFor="email">Email Address</Label>
					<Input id="email" type="email" placeholder="your@email.com" />
				</div>

				<div className="space-y-2">
					<Label htmlFor="phone">Phone Number</Label>
					<Input id="phone" type="tel" placeholder="+1234567890" />
				</div>

				<div className="space-y-2">
					<Label htmlFor="organization">Organization Name</Label>
					<Input id="organization" placeholder="Name of your organization" />
				</div>

				<div className="space-y-2">
					<Label htmlFor="service">Service Type</Label>
					<Select id="service">
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Select a service" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="extra-services">Extra Services</SelectItem>
							<SelectItem value="protection">Protection</SelectItem>
							<SelectItem value="consulting">Consulting</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="space-y-2">
					<Label htmlFor="message">Message</Label>
					<Textarea
						id="message"
						placeholder="Tell us about your staffing needs..."
						rows={4}
					/>
				</div>

				<div className="flex items-start space-x-2">
					<Checkbox id="terms" />
					<Label htmlFor="terms">
						I'd like to receive a capabilities statement.
					</Label>
				</div>

				<Button type="submit" className="w-full">
					Send Message
				</Button>
			</form>
		</div>
	</DialogContent>
);

export default ContactDialog;
