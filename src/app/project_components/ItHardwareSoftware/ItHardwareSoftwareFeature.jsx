import Image from "next/image";
import React from "react";

function ItHardwareSoftwareFeature() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between p-4 sm:p-6 lg:p-8 gap-6 lg:gap-8">
      <div className="flex-1 lg:max-w-[45%]">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Our Offerings
          </h1>
          <h2 className="text-lg font-bold sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8">
            Hardware Solutions
          </h2>

          <div>
            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-3 list-disc pl-4 sm:pl-6 lg:pl-8">
              <li>Laptops, Desktops, Workstations (HP, Dell, Lenovo)</li>
              <li>Servers & Storage Solutions (Rack, Blade, SAN/NAS)</li>
              <li>Network Infrastructure (Switches, Routers, Firewalls)</li>
              <li>Printers, Scanners & Peripherals</li>
              <li>Accessories & Spare Parts</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8">
            Software Licensing
          </h2>

          <div>
            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-3 list-disc pl-4 sm:pl-6 lg:pl-8">
              <li>Microsoft 365 / Azure / Windows Server</li>
              <li>Adobe Creative Cloud, AutoCAD, QuickBooks</li>
              <li>Cybersecurity Suites (Symantec, McAfee, Bitdefender)</li>
              <li>ERP, CRM, Productivity Tools</li>
              <li>Custom Software Deployment & Integration</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8">
            Services We Provide
          </h2>

          <div>
            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-3 list-disc pl-4 sm:pl-6 lg:pl-8">
              <li>Product Sourcing & Vendor-Agnostic Consultation</li>
              <li>Licensing Management & Renewal Support</li>
              <li>Installation & Configuration</li>
              <li>Managed IT Support & Maintenance</li>
              <li>Asset Tagging, Imaging & Lifecycle Management</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 w-full sm:w-auto lg:max-w-[45%] lg:w-auto">
        <Image
          src="/Home/Product Provisioning/it_hardware.png"
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

export default ItHardwareSoftwareFeature;
