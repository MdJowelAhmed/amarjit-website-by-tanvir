import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import provideIcon from "@/IconProvider/IconProvider";

export function Footer() {
	return (
		<div className="gardient-style text-white dark:text-gray-300">
			<div className=" mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Logo and Quick Links */}
					<div className="space-y-4">
						<h1 className="text-2xl ml-4 font-bold text-white dark:text-white">
							{provideIcon({ name: "company_logo_shield" })}
						</h1>
					</div>
					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-white dark:text-gray-200">
							Quick Links
						</h3>
						<div className="flex gap-10 ">
							<div>
								<ul className="space-y-1">
									<li>
										<Link
											href="/"
											className="hover:text-white/70 transition-colors">
											Home
										</Link>
									</li>
									<li>
										<Link
											href="/product-provisioning-services"
											className="hover:text-white/70 transition-colors">
											Service
										</Link>
									</li>
									<li>
										<Link
											href="/about-us"
											className="hover:text-white/70 transition-colors">
											About Us
										</Link>
									</li>
									<li>
										<Link
											href="/contact-us"
											className="hover:text-white/70 transition-colors">
											Contact Us
										</Link>
									</li>
								</ul>
							</div>
							<div>
								<ul className="space-y-1">
									<li>
										<Link
											href="/blog"
											className="hover:text-white/70 transition-colors">
											Blog
										</Link>
									</li>
									<li>
										<Link
											href="/industries-served"
											className="hover:text-white/70 transition-colors">
											Industries Served
										</Link>
									</li>
									<li>
										<Link
											href="/certification"
											className="hover:text-white/70 transition-colors">
											Certifications
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Mobile App */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-white dark:text-gray-200 ">
							Our Contact
						</h3>
						<div className="flex flex-col space-y-3">
							<p className="leading-6 font-light text-xs">
								HEADQUARTER <br />
								<span className="font-bold text-base">
									5356 Elmwood Lane, Liberty Township, <br />
									OH - 45044
								</span>
							</p>
							<p className="leading-6 font-light text-xs">
								E-mail: <br />
								<span className="font-bold text-base">support@kfbusa.com</span>
							</p>

							<p className="leading-6 font-light text-xs">
								Phone: <br />
								<span className="font-bold text-base">513-966-9567</span>
							</p>
						</div>
					</div>

					{/* Newsletter */}
					<div className="space-y-4">
						<div>
							<h3 className="text-3xl font-bold text-white dark:text-gray-200">
								Join Our Community
							</h3>
							<p className="text-sm mt-1">
								Receive pricing updates, shopping tips & more!
							</p>
						</div>

						<div className="flex flex-col space-y-2 max-w-full">
							<div className="footer-newsletter-gradient p-4 max-w-[20rem] rounded-full flex justify-between">
								<Input
									type="email"
									placeholder="Your email"
									className="border-none focus:border-none shadow-none h-9 text-black max-w-64 placeholder:text-blue-950"
								/>
								<Button className="gardient-style max-w-20 rounded-full">
									Sign Up
								</Button>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom section */}
				<div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-sm">© 2024 example.com. All rights reserved.</p>
					<div className="flex gap-4">
						<Link
							href="#"
							className="text-sm hover:scale-105 transition-colors">
							Terms & Conditions
						</Link>
						<Link
							href="#"
							className="text-sm hover:scale-105 transition-colors">
							Privacy Notice
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
