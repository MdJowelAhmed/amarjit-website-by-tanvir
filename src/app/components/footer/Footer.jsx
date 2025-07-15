import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import provideIcon from "@/app/IconProvider/IconProvider";

export function Footer() {
	return (
		<footer className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
			<div className=" mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Logo and Quick Links */}
					<div className="space-y-4">
						<h1 className="text-2xl font-bold text-gray-800 dark:text-white">
							Company Logo
						</h1>
					</div>
					<div className="space-y-4">
						<h3 className="font-semibold text-gray-800 dark:text-gray-200">
							Quick Links
						</h3>
						<div className="flex gap-4">
							<div>
								<ul className="space-y-1">
									<li>
										<a
											href="#"
											className="hover:text-primary transition-colors">
											Service
										</a>
									</li>
									<li>
										<a
											href="#"
											className="hover:text-primary transition-colors">
											About Us
										</a>
									</li>
									<li>
										<a
											href="#"
											className="hover:text-primary transition-colors">
											Contact Us
										</a>
									</li>
								</ul>
							</div>
							<div>
								<ul className="space-y-1">
									<li>
										<a
											href="#"
											className="hover:text-primary transition-colors">
											Blog
										</a>
									</li>
									<li>
										<a
											href="#"
											className="hover:text-primary transition-colors">
											Industrial Serve
										</a>
									</li>
									<li>
										<a
											href="#"
											className="hover:text-primary transition-colors">
											Featured Clients
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Mobile App */}
					<div className="space-y-4">
						<h3 className="font-semibold text-gray-800 dark:text-gray-200">
							Our Mobile App
						</h3>
						<div className="flex flex-col space-y-3">
							<Link
								href={"#"}
								className="flex items-center justify-center gap-2 bg-white max-w-fit px-5 py-3 rounded-xl">
								<div>{provideIcon({ name: "apple" })}</div>

								<p className="leading-6">
									Download on the <br />
									<span className="font-bold">Apple Store</span>
								</p>
							</Link>
							<Link
								href={"#"}
								className="flex items-center justify-start gap-2 bg-white max-w-fit px-5 py-3 rounded-xl">
								<div>{provideIcon({ name: "googleplay" })}</div>

								<p className="leading-6">
									Download on the <br />
									<span className="font-bold">Google Play</span>
								</p>
							</Link>
						</div>
					</div>

					{/* Newsletter */}
					<div className="space-y-4">
						<div>
							<h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
								Join Our Community
							</h3>
							<p className="text-sm mt-1">
								Receive pricing updates, shopping tips & more!
							</p>
						</div>

						<div className="flex flex-col space-y-2 max-w-full">
							<div className="bg-white p-4 max-w-4/5 rounded-full flex gap-4">
								<Input
									type="email"
									placeholder="Your email"
									className="border-none shadow-none max-w-64"
								/>
								<Button className="max-w-20 rounded-full">Sign Up</Button>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom section */}
				<div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-sm">© 2024 example.com. All rights reserved.</p>
					<div className="flex gap-4">
						<a
							href="#"
							className="text-sm hover:text-primary transition-colors">
							Terms & Conditions
						</a>
						<a
							href="#"
							className="text-sm hover:text-primary transition-colors">
							Privacy Notice
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
