import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

function LeadershipTeam() {
  const teamMembers = [
    {
      name: "Vikram Sharma",
      title: "Chief Executive officer, Chairman",
      src: "/AboutUs/vikram_sharma.png",
      alt: "chairman",
      description:
        " Vikram Sharma brings deep expertise in scaling small businesses through strategic execution and operational excellence. Specializes in navigating and expanding government contract opportunities to drive sustainable growth.",
    },
    {
      name: "Amarjit Kaur",
      title: "Chief Finance Officer",
      src: "/AboutUs/leader_2.png",
      alt: "leader_2",
      description:
        "Amarjit brings strategic and hands-on experience specializing in small business growth, financial planning, and cash flow management. Skilled in streamlining operations, guiding strategic decisions, and building strong financial foundations for long-term success.",
    },
    {
      name: "Anuradha Bhardwaj",
      title: "Chief Operating Officer",
      src: "/AboutUs/anuradha_vardwaj.png",
      alt: "leader_3",
      description:
        "Anuradha Bhardwaj is a seasoned entrepreneur and operations expert, She specializes in talent acquisition, organizational growth, and workforce strategy. With a strong track record of scaling teams and leading recruitment initiatives, she brings both strategic insight and executional excellence to fast-growing businesses.",
    },
    {
      name: "Neeraj Joshi",
      title: "Chief Client Officer",
      src: "/AboutUs/neeraj_joshi.png",
      alt: "leader_4",
      description:
        "Neeraj Joshi leads client engagement and strategic growth initiatives. With deep experience in public sector solutions, he ensures government partners receive tailored, compliant, and impactful services that drive long-term value.",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-transparent mb-10">
      <div className="max-w-[85%] mx-auto ">
        <h2 className="text-gradient-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">
          Leadership Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:px-4">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group  h-full shadow-none border-none bg-transparent transition-shadow duration-300 p-0"
            >
              <CardHeader className="p-0">
                <Image
                  src={member.src}
                  width={400}
                  height={400}
                  alt={member.alt}
                  className="w-full h-[20rem] md:h-[19rem] lg:h-[15rem] 2xl:h-[21rem] rounded-lg group-hover:scale-105 ease-in duration-300 "
                />
              </CardHeader>
              <CardContent className="text-center px-4">
                <h3 className="text-xl md:text-2xl font-semibold text-gradient-heading">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-gray-700 mt-1">
                  {member.title}
                </p>
                <p className="text-gray-700 pt-5">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeadershipTeam;
