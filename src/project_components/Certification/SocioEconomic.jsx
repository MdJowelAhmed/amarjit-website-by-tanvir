"use client";
import { Card } from "@/components/ui/card";
import provideIcon from "@/IconProvider/IconProvider";
import HeadingSection from "@/utils/provideHeadingSubheading";
import React, { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function SocioEconomic() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  function socioEconomicHeading() {
    return (
      <section>
        <HeadingSection
          heading="Socio-Economic Certifications"
          subheading="As a certified small and minority-owned business, we bring diversity value to your contracts while meeting key socio-economic goals."
        />
      </section>
    );
  }

  const socioEconomic = [
    {
      id: 1,
      icon: provideIcon({ name: "certificate" }),
      src: "/Certificate/cartificate.png",
      headline: "MBE",
      subheadLine: "Minority Business Enterprise",
    },
    // {
    // 	id: 2,
    // 	icon: provideIcon({ name: "certificate" }),
    // 	src: "/Certificate/cartificate.png",
    // 	headline: "WOSB",
    // 	subheadLine: "Women-Owned Small Business",
    // },
    {
      id: 2,
      icon: provideIcon({ name: "certificate" }),
      src: "/Certificate/cartificate.png",
      headline: "8(a) Certification ",
      subheadLine: " SBA Certified",
    },
  ];

  return (
    <div className="pb-24">
      {socioEconomicHeading()}
      <div className="max-w-7xl px-4 md:px-6 lg:px-8 2xl:px-8 mx-auto grid lg:grid-cols-2 gap-10">
        {socioEconomic.map((item) => (
          <Card key={item.id} className=" text-black flex items-center gap-1 ">
            <Dialog>
              <DialogTrigger
                asChild
                className="md:max-w-36 cursor-pointer hover:opacity-80 transition-opacity z-10"
                onClick={() => setSelectedCertificate(item)}
              >
                {provideIcon({ name: "certificate" })}
              </DialogTrigger>
              <DialogContent className=" max-w-4xl lg:min-w-4xl">
                <DialogHeader>
                  <DialogTitle>{item.headline}</DialogTitle>
                  <DialogDescription>{item.subheadLine}</DialogDescription>
                </DialogHeader>
                <div className="flex justify-center">
                  <Image
                    src={item.src}
                    alt={`${item.headline} Certificate`}
                    width={800}
                    height={600}
                    className="max-w-full h-auto border rounded-lg shadow-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-3xl font-bold">{item.headline}</h1>
              <p className="text-lg font-medium">{item.subheadLine}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default SocioEconomic;
