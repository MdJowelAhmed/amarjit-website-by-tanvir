import Image from "next/image";
import React from "react";

function IndustrialSafetyGearFeature() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between p-4 sm:p-6 lg:p-8 gap-6 lg:gap-8">
      <div className="flex-1 lg:max-w-[45%]">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Industrial Equipment
          </h1>
          <h2 className="text-lg font-bold sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8">
            Industrial Equipment
          </h2>

          <div>
            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-3 list-disc pl-4 sm:pl-6 lg:pl-8">
              <li>Power Tools & Hand Tools</li>
              <li>Heavy-Duty Machinery & Parts</li>
              <li>Construction & Workshop Equipment</li>
              <li>Ladders, Trolleys, and Material Handling</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8">
            Safety & Personal Protective Equipment (PPE)
          </h2>

          <div>
            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-3 list-disc pl-4 sm:pl-6 lg:pl-8">
              <li>Helmets, Gloves, Safety Glasses</li>
              <li>Reflective Vests, Coveralls, Hard Hats</li>
              <li>Respirators, Face Shields, Hearing Protection</li>
              <li>Safety Shoes & Anti-slip Footwear</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8">
            Electrical & Fire Safety
          </h2>

          <div>
            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-3 list-disc pl-4 sm:pl-6 lg:pl-8">
              <li>Lockout/Tagout Devices</li>
              <li>Circuit Breakers, Surge Protectors</li>
              <li>Fire Extinguishers & Fire Blankets</li>
              <li>Smoke Detectors, Alarms, Safety Signs</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8">
            Workplace Compliance Essentials
          </h2>

          <div>
            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-3 list-disc pl-4 sm:pl-6 lg:pl-8">
              <li>First Aid Kits & Eye Wash Stations</li>
              <li>Spill Control Kits & Safety Cabinets</li>
              <li>Warning Labels & Floor Signage</li>
              <li>ANSI/OSHA Compliant Gear</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 w-full sm:w-auto lg:max-w-[45%] lg:w-auto">
        <div className="border rounded-lg overflow-hidden shadow-lg max-w-md mx-auto lg:mx-0">
          <Image
            src="/sample.png"
            alt="Sample Image"
            width={500}
            height={400}
            className="object-cover w-full h-auto"
            // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
          />
        </div>
      </div>
    </div>
  );
}

export default IndustrialSafetyGearFeature;
