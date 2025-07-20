import Image from "next/image";
import React from "react";

function Features() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between p-4 sm:p-6 lg:p-8 gap-6 lg:gap-8 text-white">
      <div className="flex-1 lg:max-w-[60%]">
        <h1 className=" gradient-h1  text-2xl sm:text-3xl lg:text-6xl font-bold">
          What We Offer
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold mt-4 sm:mt-6 lg:mt-8">
          Comprehensive IT & Cybersecurity Staffing
        </h2>
        <p className="text-base sm:text-lg mt-2">
          We deploy top-tier professionals for short-term, long-term, or
          permanent roles.
        </p>

        <div className="mt-4 sm:mt-6">
          <ul className="space-y-3 sm:space-y-4">
            <li>
              <h3 className="text-lg sm:text-xl font-semibold">
                Cybersecurity Experts
              </h3>
              <p className="text-sm sm:text-base mt-1 ">
                SOC Analysts, Penetration Testers, Threat Intelligence Analysts
              </p>
            </li>
            <li>
              <h3 className="text-lg sm:text-xl font-semibold">
                Cloud & Infrastructure
              </h3>
              <p className="text-sm sm:text-base mt-1">
                AWS, Azure, Google Cloud Engineers, Systems Admins
              </p>
            </li>
            <li>
              <h3 className="text-lg sm:text-xl font-semibold">
                Software Development
              </h3>
              <p className="text-sm sm:text-base mt-1">
                Full-stack Developers, DevSecOps, QA Engineers
              </p>
            </li>
            <li>
              <h3 className="text-lg sm:text-xl font-semibold">
                IT Support & Network Admins
              </h3>
              <p className="text-sm sm:text-base mt-1">
                Helpdesk, NOC Engineers, Field Technicians
              </p>
            </li>
          </ul>
        </div>

        <div className="mt-6 sm:mt-8">
          <h3 className="text-lg sm:text-xl font-semibold">
            Managed IT & Security Services
          </h3>
          <p className="text-sm sm:text-base mt-1 mb-3">
            We can fully or partially manage IT operations.
          </p>
          <ul className="space-y-2 list-disc pl-4 sm:pl-6 lg:pl-8">
            <li className="text-sm sm:text-base">
              24/7 Security Operations Center (SOC) Support
            </li>
            <li className="text-sm sm:text-base">
              Cloud Monitoring & Performance Optimization
            </li>
            <li className="text-sm sm:text-base">
              Patch Management & Endpoint Protection
            </li>
            <li className="text-sm sm:text-base">
              Network Hardening & Compliance Audits (NIST, FISMA, HIPAA)
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-shrink-0 w-full sm:w-auto lg:max-w-[40%] lg:w-auto">
        <Image
          src={"/Home/Staffing Solution/it_cybersecurity.png"}
          alt="Sample Image"
          width={500}
          height={400}
          className="object-cover w-full h-auto"
          // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
        />
      </div>
    </div>
  );
}

export default Features;
