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
import { cardInfo } from "./blogData";

function BlogLayout() {
  const setBlogBanner = {
    src: "/Blog/Blog.jpg",
    heading: "Stay Ahead with Actionable Insights",
    subheading:
      "From federal staffing trends to smarter procurement strategies, our team shares expert perspectives to help decision-makers drive results.",
  };

  return (
    <div>
      <Banner
        src={setBlogBanner.src}
        heading={setBlogBanner.heading}
        subheading={setBlogBanner.subheading}
      />

      <div className="container mx-auto max-w-11/12 flex items-center justify-evenly flex-wrap lg:py-24">
        <BlogCard cardInfo={cardInfo} />
        <Pagination className="mt-4 text-white">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive className="text-blue-900">
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
