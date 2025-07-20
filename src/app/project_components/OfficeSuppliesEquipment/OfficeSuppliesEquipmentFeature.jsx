import Image from "next/image";
import React from "react";

function OfficeSuppliesEquipmentFeature() {
  return (
    <div className="min-h-screen lg:py-24 text-white">
      <div className="relative z-10 container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <h1 className="gradient-h1 text-2xl sm:text-3xl lg:text-6xl font-bold">
              Our Product Categories
            </h1>

            {/* Office Essentials */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Office Essentials</h2>
              <p className=" mb-4 leading-relaxed">
                Pens, Notebooks, Paper, Binders, Toner & Ink Cartridges. Stay
                stocked with the critical items your office can't live without.
                From jotting down ideas to printing important documents, our
                curated selection ensures you're always ready.
              </p>

              <div className="space-y-3">
                <h3 className="text-lg font-medium ">Featured Products:</h3>
                <ul className="space-y-2 text-sm list-disc pl-5">
                  <li>
                    Pens & Writing Instruments- Ballpoint, gel, markers, and
                    highlighters
                  </li>
                  <li>Notebooks & Pads - Spiral, legal pads, sticky notes</li>
                  <li>
                    Copy & Specialty Paper - All sizes and types for printing,
                    copying, and presentations
                  </li>
                  <li>
                    Binders & Filing - Binders, folders, dividers, clips, and
                    staplers
                  </li>
                  <li>
                    Toner & Ink Cartridges - Compatible with all major brands
                    (HP, Canon, Epson, etc.)
                  </li>
                </ul>
              </div>
            </div>

            {/* Office Technology */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Office Technology</h2>
              <p className=" mb-4 leading-relaxed">
                Laptops, Printers, Scanners, Monitors, Networking Gear. From
                powerful laptops to reliable networking gear, we offer a full
                range of office technology designed to keep your operations
                running smoothly and efficiently.
              </p>

              <div className="space-y-3">
                <h3 className="text-lg font-medium ">
                  Our Technology Solutions Include:
                </h3>
                <ul className="space-y-2 text-sm list-disc pl-5">
                  <li>Laptops & Desktops.</li>
                  <p>
                    Business-grade devices from top brands like Dell, HP, Lenovo
                  </p>
                  <li>Printers & Scanners.</li>
                  <p>Laser, inkjet, multifunction, and high-volume models</p>
                  <li>Monitors & Displays.</li>
                  <p>Full HD, 4K, widescreen setups, and ergonomic mounts</p>
                  <li>Networking Gear.</li>
                  <p>
                    Routers, switches, firewalls, access points, and cabling
                  </p>
                  <li>Software Licensing.</li>
                  <p>Productivity suites, security tools, cloud platforms</p>
                </ul>
              </div>
            </div>

            {/* Office Furniture */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Office Furniture & Fixtures
              </h2>
              <p className="mb-4 leading-relaxed">
                Desks, Chairs, Filing Cabinets, Ergonomic Solutions. Furnish
                your office with durable, ergonomic, and stylish furniture built
                for performance and comfort. From individual desks to full
                workspace layouts, we've got you covered.
              </p>

              <div className="space-y-3">
                <h3 className="text-lg font-medium ">
                  Our Furniture Solutions Include:
                </h3>
                <ul className="space-y-2 text-sm list-disc pl-5">
                  <li>
                    Desks & Workstations - Executive desks, modular setups,
                    standing desks
                  </li>
                  <li>
                    Chairs & Seating - Ergonomic office chairs, conference
                    seating, guest chairs
                  </li>
                  <li>
                    Filing Cabinets & Storage - Lateral files, vertical drawers,
                    secure storage
                  </li>
                  <li>
                    Conference Room Furniture - Tables, podiums, seating, media
                    stations
                  </li>
                  <li>
                    Ergonomic Accessories - Monitor arms, footrests, keyboard
                    trays, anti-fatigue mats
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            <div>
              <Image
                src="/Home/Product Provisioning/office-supplies.png"
                alt="Office Supplies"
                width={400}
                height={300}
                className="w-full h-auto  mb-6"
              />
            </div>

            {/* Why Choose Us */}
            <div className=" rounded-lg p-6 get-in-touch-card">
              <h2 className="text-2xl font-semibold mb-6">Why Choose Us?</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold  mb-1">• Nationwide Delivery</h3>
                  <p className="text-sm ">
                    Fast, reliable shipping to your office or warehouse
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold  mb-1">
                    • Government & Commercial Contracts
                  </h3>
                  <p className="text-sm ">
                    GSA schedules, cooperative agreements & more
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold  mb-1">
                    • Certified & Compliant
                  </h3>
                  <p className="text-sm ">MBE, WOSB, SBA, HUBZone and more</p>
                </div>

                <div>
                  <h3 className="font-semibold  mb-1">
                    • Tailored Procurement Support
                  </h3>
                  <p className="text-sm ">Get custom quotes and bulk pricing</p>
                </div>

                <div>
                  <h3 className="font-semibold  mb-1">
                    • Vendor Neutral Solutions
                  </h3>
                  <p className="text-sm ">Your priorities drive our sourcing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfficeSuppliesEquipmentFeature;
