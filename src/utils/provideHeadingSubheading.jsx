import React from "react";

function HeadingSection({ icon, heading, subheading }) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-b from-[#EFF4FF] to-[#BFD3FE] bg-clip-text text-transparent">
        {heading}
      </h3>
      <p className="text-base  sm:text-lg text-white max-w-3xl mx-auto">
        {subheading}
      </p>
    </div>
  );
}

export default HeadingSection;
