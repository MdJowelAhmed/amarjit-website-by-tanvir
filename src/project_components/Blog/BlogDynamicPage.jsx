"use client";
import React from "react";
import Banner from "../Home/banner/Banner";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { ArrowLeft } from "lucide-react";
import { cardInfo } from "./blogData";

function BlogDynamicPage() {
  const params = useParams();
  const router = useRouter();
  const blogId = parseInt(params.id, 10);
  const card = cardInfo.find((item) => item.id === blogId);

  console.log(card);

  const setBlogBanner = {
    src: "/Blog/Blog.jpg",
    heading: "Stay Ahead with Actionable Insights",
    subheading:
      "From federal staffing trends to smarter procurement strategies, our team shares expert perspectives to help decision-makers drive results.",
  };

  const handleBack = () => {
    router.back();
  };

  if (!card) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Blog post not found
          </h2>
          <Button onClick={handleBack} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent">
      <Banner
        src={setBlogBanner.src}
        heading={setBlogBanner.heading}
        subheading={setBlogBanner.subheading}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Main Content Container */}
        <div className="max-w-4xl mx-auto">
          {/* Author Info Section */}
          <div className="get-in-touch-card bg-transparent rounded-lg shadow-sm border p-4 sm:p-6 mb-6 sm:mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={card.avatar}
                  alt={card.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-lg sm:text-xl text-white truncate">
                  {card.author}
                </h4>
                <p className="text-sm sm:text-base text-white mt-1">
                  {card.date}
                </p>
              </div>
            </div>
            <Button
              onClick={handleBack}
              variant="outline"
              className="flex items-center justify-center gap-2 sm:w-auto bg-transparent text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </div>

          {/* Blog Title */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              {card.title}
            </h1>
          </div>

          {/* Featured Image */}
          <div className="mb-6 sm:mb-8">
            <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Blog Content */}
          {/* <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 lg:p-8"> */}
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            {/* Introduction */}
            <p className="text-white leading-relaxed text-sm sm:text-base lg:text-lg mb-6">
              {card.description}
            </p>

            {/* Main Content Sections */}
            <div className="space-y-6 sm:space-y-8">
              {/* Section 1 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  1. Leverage the Approved Contract Vehicles
                </h2>
                <p className="text-white mb-4 text-sm sm:text-base">
                  One of the most effective ways to simplify procurement is by
                  using pre-negotiated government contract vehicles such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white text-sm sm:text-base">
                  <li>GSA and Local Purchasing Contracts</li>
                  <li>Cooperative Agreements (e.g., NASPO, Sourcewell)</li>
                  <li>
                    SEWP (Solutions for Enterprise-Wide Procurement) for IT
                    equipment
                  </li>
                </ul>
                <p className="text-white mt-4 text-sm sm:text-base">
                  These contracts have already gone through the lengthy bidding
                  process for price, quality, and compliance. Public agencies
                  can make purchases directly from these platforms, reducing
                  procurement timelines from months to weeks—or even days.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  2. Work with Certified & Qualified Vendors
                </h2>
                <p className="text-white mb-4 text-sm sm:text-base">
                  Partnering with businesses that carry socio-economic
                  certifications—such as MBE, WOSB, 8(a), or HUBZone—can not
                  only fulfill set-aside requirements but also help your agency
                  access:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white text-sm sm:text-base">
                  <li>Competitive pricing and specialized offerings</li>
                  <li>MWBE-shared procurement platforms</li>
                  <li>Diverse supplier networks</li>
                  <li>Proven track record in government contracting</li>
                </ul>
                <p className="text-white mt-4 text-sm sm:text-base">
                  Many of these vendors offer faster onboarding and flexible
                  solutions tailored to public sector needs.
                </p>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  3. Implement Digital Procurement Systems
                </h2>
                <p className="text-white mb-4 text-sm sm:text-base">
                  Modern e-procurement platforms can:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white text-sm sm:text-base">
                  <li>Digitize RFP/RFQ processes</li>
                  <li>Automate vendor qualification checks</li>
                  <li>Standardize evaluation criteria</li>
                  <li>Generate reports for audit and transparency</li>
                </ul>
                <p className="text-white mt-4 text-sm sm:text-base">
                  This reduces manual effort and ensures consistent evaluation
                  while providing clear performance and workflow benchmarks.
                </p>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  4. Centralize and Standardize Product Procurement
                </h2>
                <p className="text-white mb-4 text-sm sm:text-base">
                  Agencies often purchase common items—IT hardware, safety
                  equipment, office supplies—from multiple sources, which drives
                  up costs and increases processing times. Instead:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white text-sm sm:text-base">
                  <li>Establish preferred supplier agreements</li>
                  <li>
                    Negotiate volume discounts using agency-approved suppliers
                    that offer:
                  </li>
                  <li className="ml-4">
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Real-time pricing and workflow automation</li>
                      <li>Catalogue-enabled purchasing and delivery terms</li>
                      <li>Transparent cost tracking and reporting</li>
                    </ul>
                  </li>
                </ul>
                <p className="text-white mt-4 text-sm sm:text-base">
                  This not only improves consistency but also allows you to
                  negotiate volume-based pricing and reduce administrative
                  overhead.
                </p>
              </section>

              {/* Conclusion */}
              <section className="get-in-touch-card border bg-gray-100 p-4 sm:p-6 rounded-lg">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  Key Takeaways
                </h2>
                <p className="text-white text-sm sm:text-base">
                  Streamlining procurement for public sector agencies requires a
                  strategic approach that combines pre-approved contract
                  vehicles, certified vendors, digital systems, and centralized
                  purchasing. By implementing these practices, agencies can
                  significantly reduce procurement timelines while maintaining
                  compliance and achieving better value for taxpayers.
                </p>
              </section>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDynamicPage;
