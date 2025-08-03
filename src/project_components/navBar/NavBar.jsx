"use client";
import React, { useState } from "react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import provideIcon from "@/IconProvider/IconProvider";

function NavBar() {
	const pathname = usePathname();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [isServiceOpen, setIsServiceOpen] = useState(false);

	const navLinks = [
		{
			id: 1,
			label: "Home",
			link: "/",
		},
		{
			id: 2,
			label: "About Us",
			link: "/about-us",
		},
		{
			id: 3,
			label: "Service",
			children: [
				{
					id: 3.1,
					label: "Staff Augmentation Services",
					link: "/staff-augmentation-services",
					description:
						"Professional staffing solutions for your business needs",
				},
				{
					id: 3.2,
					label: "Product Provisioning Services",
					link: "/product-provisioning-services",
					description: "Complete product delivery and provisioning solutions",
				},
				{
					id: 3.3,
					label: "Logistics Services",
					link: "/logistics-services",
					description:
						"Reliable logistics and supply chain solutions to ensure timely delivery and operational efficiency",
				},
			],
		},
		// {
		// 	id: 4,
		// 	label: "Blog",
		// 	link: "/blog",
		// },
		{
			id: 5,
			label: "Certification",
			link: "/certification",
		},
		{
			id: 6,
			label: "Industries Served",
			link: "/industries-served",
		},
		{
			id: 7,
			label: "Contact Us",
			link: "/contact-us",
		},
	];

	// Helper to check if a link is active
	const isActive = (link) => {
		// For root, match exactly
		if (link === "/") return pathname === "/";
		// For others, match if pathname starts with link
		return pathname.startsWith(link);
	};

	const isCertificate = pathname === "/certification";

	const handleLinkClick = () => {
		setIsDrawerOpen(false);
		setIsServiceOpen(false);
	};

	return (
		<nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-transparent">
			<div className="flex-shrink-0">
				<Link href="/" className="text-white text-xl font-bold">
					{provideIcon({ name: "company_logo" })}
				</Link>
			</div>

			{/* Desktop Navigation */}
			<div className="hidden md:block">
				<NavigationMenu>
					<NavigationMenuList className="flex gap-2">
						{navLinks.map((nav) => {
							if (nav.children) {
								return (
									<NavigationMenuItem key={nav.id}>
										<NavigationMenuTrigger className="bg-transparent text-white text-xl cursor-pointer data-[state=open]:text-white data-[state=open]:underline">
											{nav.label}
										</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[300px]">
												{nav.children.map((child) => (
													<li key={child.id}>
														<NavigationMenuLink asChild>
															<Link
																href={child.link}
																className={cn(
																	"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:underline",
																	isActive(child.link) &&
																		"underline text-[#7181E8]"
																)}>
																<div className="text-sm font-medium leading-none">
																	{child.label}
																</div>
																<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
																	{child.description}
																</p>
															</Link>
														</NavigationMenuLink>
													</li>
												))}
											</ul>
										</NavigationMenuContent>
									</NavigationMenuItem>
								);
							} else {
								return (
									<NavigationMenuItem key={nav.id}>
										<NavigationMenuLink asChild>
											<Link
												href={nav.link}
												className={cn(
													"group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-xl font-medium transition-colors hover:underline text-white hover:text-[#7181E8] hover:bg-transparent disabled:pointer-events-none disabled:opacity-50",
													isActive(nav.link) && "underline text-[#7181E8]"
												)}>
												{nav.label}
											</Link>
										</NavigationMenuLink>
									</NavigationMenuItem>
								);
							}
						})}
					</NavigationMenuList>
				</NavigationMenu>
			</div>

			{/* Mobile Navigation Drawer */}
			<div className="md:hidden">
				<Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
					<DrawerTrigger asChild>
						<button className="text-white p-2">
							<Menu size={24} />
						</button>
					</DrawerTrigger>
					<DrawerContent className="h-[80vh]">
						<DrawerHeader className="flex items-center justify-between">
							<DrawerTitle className="text-lg font-semibold">
								Navigation
							</DrawerTitle>
							<DrawerClose asChild>
								<button className="p-2">
									<X size={20} />
								</button>
							</DrawerClose>
						</DrawerHeader>
						<div className="px-4 pb-6 overflow-y-auto">
							<nav className="space-y-2">
								{navLinks.map((nav) => {
									if (nav.children) {
										return (
											<Collapsible
												key={nav.id}
												open={isServiceOpen}
												onOpenChange={setIsServiceOpen}>
												<CollapsibleTrigger className="flex items-center justify-between w-full p-3 text-left rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
													<span className="font-medium">{nav.label}</span>
													<ChevronDown
														size={16}
														className={cn(
															"transition-transform duration-200",
															isServiceOpen && "rotate-180"
														)}
													/>
												</CollapsibleTrigger>
												<CollapsibleContent className="space-y-1 pl-4">
													{nav.children.map((child) => (
														<Link
															key={child.id}
															href={child.link}
															onClick={handleLinkClick}
															className={cn(
																"block p-3 rounded-md text-sm hover:bg-accent hover:text-accent-foreground transition-colors",
																isActive(child.link) &&
																	"bg-accent text-[#7181E8] font-medium"
															)}>
															<div className="font-medium">{child.label}</div>
															<p className="text-xs text-muted-foreground mt-1">
																{child.description}
															</p>
														</Link>
													))}
												</CollapsibleContent>
											</Collapsible>
										);
									} else {
										return (
											<Link
												key={nav.id}
												href={nav.link}
												onClick={handleLinkClick}
												className={cn(
													"block p-3 rounded-md font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
													isActive(nav.link) &&
														"bg-accent text-[#7181E8] font-semibold"
												)}>
												{nav.label}
											</Link>
										);
									}
								})}
							</nav>
						</div>
					</DrawerContent>
				</Drawer>
			</div>
		</nav>
	);
}

export default NavBar;
