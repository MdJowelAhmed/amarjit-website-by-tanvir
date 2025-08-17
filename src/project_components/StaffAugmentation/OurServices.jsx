import Image from "next/image";
import React from "react";

function OurServices() {
  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 2xl:px-0">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-gradient-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
          Our Services
        </h1>

        <div className="relative w-full h-auto md:h-[25rem] lg:h-[45rem] 2xl:h-[42rem]">
          <Image
            src="/StaffAugmentaion/staff_services.png"
            alt="Our services"
            width={1200}
            height={600}
            className="  rounded-lg h-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default OurServices;
