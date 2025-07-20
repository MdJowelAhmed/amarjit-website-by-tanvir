"use client";
import React from "react";
import Banner from "./Home/banner/Banner";
import FourCardsLayout from "./ServiceLayout.jsx/FourCardsLayout";
import HeadingSection from "@/utils/provideHeadingSubheading";
import { usePathname, useRouter } from "next/navigation";
import TableLayout from "./ServiceLayout.jsx/TableLayout";
import { Button } from "@/components/ui/button";
import { LuMoveRight } from "react-icons/lu";

function ServiceDynamicPageLayout() {
  const path = usePathname();
  const router = useRouter();

  const isGCA = path === "/product-provisioning-services/gca-schedule";
  const isVendor = path === "/product-provisioning-services/vendor-sourcing";
  const isLocalPuchasing =
    path === "/product-provisioning-services/local-purchasing";
  const isCooperativePurchasing =
    path === "/product-provisioning-services/cooperative-purchasing";
  const setServiceBanner = {
    src: "/Our Service/our_service.jpg",
    heading: "Our Service",
    subheading:
      "We deliver flexible staffing and reliable product sourcing to help our clients meet operational goals with confidence, compliance, and speed.",
  };

  const handleBack = () => {
    router.back(); // Navigates to the previous page
  };

  return (
    <div className="w-full">
      <Banner
        src={setServiceBanner.src}
        heading={setServiceBanner.heading}
        subheading={setServiceBanner.subheading}
      />

      {isGCA && <GCA />}
      {isLocalPuchasing && <LocalPurchasing />}
      {isCooperativePurchasing && <CooperativePurchasing />}
      {isVendor && <VendorSourcing />}
      <div className="container mx-auto flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <Button
          onClick={handleBack}
          className="w-40 h-10 rounded-sm bg-transparent border-2 text-white hover:scale-105 hover:bg-transparent -mt-16 sm:-mt-20 lg:-mt-20 mb-6 sm:mb-8 lg:mb-12 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base flex items-center gap-4"
        >
          <LuMoveRight className="w-4 h-4 rotate-180" />
          Back
        </Button>
      </div>
    </div>
  );
}

export default ServiceDynamicPageLayout;

function GCA() {
  function provisionEngagementHeading() {
    return (
      <section className="px-4 sm:px-6 lg:px-8">
        <HeadingSection
          heading="GCA Schedules: Simplifying Federal Procurement"
          subheading="Pre-negotiated pricing, terms, and categories through our GSA Schedule Contract(s) — enabling faster, compliant acquisitions."
        />
      </section>
    );
  }
  return (
    <div className="w-full py-12 sm:py-16 lg:py-24">
      {provisionEngagementHeading()}
      <div className="px-4 sm:px-6 lg:px-8">
        <FourCardsLayout isGCA={true} />
      </div>
    </div>
  );
}

function LocalPurchasing() {
  function localPurchasingHeading() {
    return (
      <section className="px-4 sm:px-6 lg:px-8">
        <HeadingSection
          heading="State & Local Purchasing Contracts"
          subheading="Streamlined procurement through cooperative agreements, state contracts, and vendor registrations — built for government buyers."
        />
      </section>
    );
  }

  const localPurchasingData = {
    title: "How We Support State & Local Agencies",
    description:
      "We simplify procurement for state, county, and city governments through pre-approved purchasing channels and cooperative contract vehicles. Our solutions are tailored to local agency needs—from IT hardware to professional staffing and managed services.",
    sectionTitle: "Contract Listings",
    contracts: [
      {
        id: 1,
        contractName: "IT Hardware & Services",
        stateAgency: "State of Texas",
        contractNumber: "DIR-TSO-4726",
        servicesCovered: "Devices, Licensing, Support",
      },
      {
        id: 2,
        contractName: "Professional Services",
        stateAgency: "State of California",
        contractNumber: "CMAS-5-17-70-4726",
        servicesCovered: "Consulting, Staffing, Training",
      },
      {
        id: 3,
        contractName: "Software Solutions",
        stateAgency: "State of Florida",
        contractNumber: "FGSS-970-4726",
        servicesCovered: "Software, Implementation, Support",
      },
      {
        id: 4,
        contractName: "Managed Services",
        stateAgency: "State of New York",
        contractNumber: "NYS-ITS-4726",
        servicesCovered: "Cloud Services, Maintenance, Support",
      },
      {
        id: 5,
        contractName: "Cybersecurity Services",
        stateAgency: "State of Virginia",
        contractNumber: "VA-CYBER-4726",
        servicesCovered: "Security Assessment, Monitoring, Training",
      },
    ],
  };

  return (
    <div className="w-full py-12 sm:py-16 lg:py-24">
      {localPurchasingHeading()}
      <div className="px-4 sm:px-6 lg:px-8">
        <TableLayout
          title={localPurchasingData.title}
          description={localPurchasingData.description}
          sectionTitle={localPurchasingData.sectionTitle}
          contracts={localPurchasingData.contracts}
        />
      </div>
    </div>
  );
}

function CooperativePurchasing() {
  function cooperativePurchasingHeading() {
    return (
      <section className="px-4 sm:px-6 lg:px-8">
        <HeadingSection
          heading="Cooperative Purchasing Agreements"
          subheading="Access our products and services through pre-approved, competitively bid cooperative contracts — saving time, cost, and administrative effort."
        />
      </section>
    );
  }

  const cooperativePurchasingData = {
    title: "How We Support Through Cooperative Contracts",
    description:
      "Access our products and services through pre-approved, competitively bid cooperative contracts — saving time, cost, and administrative effort. These contracts are available to eligible government agencies, educational institutions, and nonprofit organizations.",
    sectionTitle: "Available Cooperative Contracts",
    contracts: [
      {
        id: 1,
        contractName: "IT Solutions & Services",
        stateAgency: "NASPO ValuePoint",
        contractNumber: "NASPO-IT-2024",
        servicesCovered: "Hardware, Software, Support",
      },
      {
        id: 2,
        contractName: "Professional Services",
        stateAgency: "OMNIA Partners",
        contractNumber: "OMNIA-PS-2024",
        servicesCovered: "Consulting, Staffing, Training",
      },
      {
        id: 3,
        contractName: "Technology Solutions",
        stateAgency: "E&I Cooperative",
        contractNumber: "EI-TECH-2024",
        servicesCovered: "Cloud Services, Networking, Security",
      },
      {
        id: 4,
        contractName: "Managed IT Services",
        stateAgency: "NJPA Cooperative",
        contractNumber: "NJPA-MIS-2024",
        servicesCovered: "Infrastructure, Maintenance, Support",
      },
      {
        id: 5,
        contractName: "Digital Transformation",
        stateAgency: "TCPN Cooperative",
        contractNumber: "TCPN-DT-2024",
        servicesCovered: "Modernization, Migration, Training",
      },
    ],
  };

  return (
    <div className="w-full py-12 sm:py-16 lg:py-24">
      {cooperativePurchasingHeading()}
      <div className="px-4 sm:px-6 lg:px-8">
        <TableLayout
          title={cooperativePurchasingData.title}
          description={cooperativePurchasingData.description}
          sectionTitle={cooperativePurchasingData.sectionTitle}
          contracts={cooperativePurchasingData.contracts}
        />
      </div>
    </div>
  );
}

function VendorSourcing() {
  function vendorSourcingHeading() {
    return (
      <section className="px-4 sm:px-6 lg:px-8">
        <HeadingSection
          heading="Vendor-Agnostic Sourcing"
          subheading="Get the best-fit products and services without brand bias — optimized for performance, price, and availability."
        />
      </section>
    );
  }
  return (
    <div className="w-full py-12 sm:py-16 lg:py-24">
      {vendorSourcingHeading()}
      <div className="px-4 sm:px-6 lg:px-8">
        <FourCardsLayout isGCA={false} />
      </div>
    </div>
  );
}
