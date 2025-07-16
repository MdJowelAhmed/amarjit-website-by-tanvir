import React from "react";
import Banner from "../Home/banner/Banner";
import BlogCard from "./BlogCard";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

function BlogLayout() {
	const setBlogBanner = {
		src: "/About US/About_Us.jpg",
		heading: "Stay Ahead with Actionable Insights",
		subheading:
			"From federal staffing trends to smarter procurement strategies, our team shares expert perspectives to help decision-makers drive results.",
	};

	const cardInfo = [
		{
			id: 1,
			image: "/Blog/blog_image.png",
			title: "How to Streamline Procurement for Public Sector Agencies",
			description:
				"The federal IT workforce is undergoing a major transformation. As agencies modernize their systems and defend against increasingly complex threats, the demand for agile, specialized, and security-cleared tech talent is at an all-time high.",
			author: "Johan Smith",
			avatar: "/Blog/author.png",
			date: "01 July 2025",
		},
		{
			id: 2,
			image: "/Blog/blog_image.png",
			title: "Staff Augmentation vs. Outsourcing – What’s Right for You?",
			description:
				"The federal IT workforce is undergoing a major transformation. As agencies modernize their systems and defend against increasingly complex threats, the demand for agile, specialized, and security-cleared tech talent is at an all-time high.",
			author: "Johan Smith",
			avatar: "/Blog/author.png",
			date: "01 July 2025",
		},
		{
			id: 3,
			image: "/Blog/blog_image.png",
			title: "Staff Augmentation vs. Outsourcing – What’s Right for You?",
			description:
				"The federal IT workforce is undergoing a major transformation. As agencies modernize their systems and defend against increasingly complex threats, the demand for agile, specialized, and security-cleared tech talent is at an all-time high.",
			author: "Johan Smith",
			avatar: "/Blog/author.png",
			date: "01 July 2025",
		},
		{
			id: 4,
			image: "/Blog/blog_image.png",
			title: "How to Streamline Procurement for Public Sector Agencies",
			description:
				"The federal IT workforce is undergoing a major transformation. As agencies modernize their systems and defend against increasingly complex threats, the demand for agile, specialized, and security-cleared tech talent is at an all-time high.",
			author: "Johan Smith",
			avatar: "/Blog/author.png",
			date: "01 July 2025",
		},
		{
			id: 5,
			image: "/Blog/blog_image.png",
			title: "Staff Augmentation vs. Outsourcing – What’s Right for You?",
			description:
				"The federal IT workforce is undergoing a major transformation. As agencies modernize their systems and defend against increasingly complex threats, the demand for agile, specialized, and security-cleared tech talent is at an all-time high.",
			author: "Johan Smith",
			avatar: "/Blog/author.png",
			date: "01 July 2025",
		},
		{
			id: 6,
			image: "/Blog/blog_image.png",
			title: "Staff Augmentation vs. Outsourcing – What’s Right for You?",
			description:
				"The federal IT workforce is undergoing a major transformation. As agencies modernize their systems and defend against increasingly complex threats, the demand for agile, specialized, and security-cleared tech talent is at an all-time high.",
			author: "Johan Smith",
			avatar: "/Blog/author.png",
			date: "01 July 2025",
		},
	];
	return (
		<div>
			<Banner
				src={setBlogBanner.src}
				heading={setBlogBanner.heading}
				subheading={setBlogBanner.subheading}
			/>

			<div className="container mx-auto max-w-11/12 flex items-center justify-evenly flex-wrap lg:py-24">
				<BlogCard cardInfo={cardInfo} />
				<Pagination className="mt-4">
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious href="#" />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">1</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#" isActive>
								2
							</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">3</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationNext href="#" />
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</div>
	);
}

export default BlogLayout;
