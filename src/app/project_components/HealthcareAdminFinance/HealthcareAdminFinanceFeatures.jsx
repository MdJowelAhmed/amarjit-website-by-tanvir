import Image from "next/image";
import React from "react";

function HealthcareAdminFinanceFeatures() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between p-4 sm:p-6 lg:p-8 gap-6 lg:gap-8 text-white mb-10">
      <div className="flex-1 lg:max-w-[55%]">
        <div>
          <h1 className="gradient-h1 text-2xl sm:text-3xl lg:text-6xl font-bold w-full">
            Our Staffing Capabilities
          </h1>
          <h2 className="text-lg font-bold sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8">
            Healthcare Support Roles
          </h2>
          <p className="text-base sm:text-lg mt-2">
            We staff trained, credentialed personnel for clinical and
            non-clinical environments:
          </p>

          <div>
            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-3 list-disc pl-4 sm:pl-6 lg:pl-8">
              <li>Mechanical & Electrical Engineers</li>
              <li>Civil & Structural Engineers</li>
              <li>Systems Engineers & Technicians</li>
              <li>CAD Designers & Drafters</li>
              <li>Field Service Engineers & Technicians</li>
              <li>Construction Managers & Estimators</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8">
            Administrative Professionals
          </h2>
          <p className="text-base sm:text-lg mt-2">
            From front-line support to back-office operations, we deliver
            professionals who improve efficiency and service delivery:
          </p>

          <div>
            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-3 list-disc pl-4 sm:pl-6 lg:pl-8">
              <li>Administrative Assistants</li>
              <li>Office Managers</li>
              <li>Data Entry Specialists</li>
              <li>Call Center & Customer Service Reps</li>
              <li>Scheduling & Records Coordinators</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8">
            Finance & Business Support
          </h2>
          <p className="text-base sm:text-lg mt-2">
            We match finance professionals with organizations requiring
            compliance, accuracy, and performance:
          </p>

          <div>
            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-3 list-disc pl-4 sm:pl-6 lg:pl-8">
              <li>Accountants & Bookkeepers</li>
              <li>Payroll Specialists</li>
              <li>Financial Analysts</li>
              <li>Procurement Assistants</li>
              <li>Budget Coordinators</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 w-full sm:w-auto lg:max-w-[45%] lg:w-auto">
        <Image
          src="/Home/Staffing Solution/health_care.png"
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

export default HealthcareAdminFinanceFeatures;
