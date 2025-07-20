import { Card, CardContent, CardHeader } from "@/components/ui/card";
import provideIcon from "@/IconProvider/IconProvider";
import React from "react";

const coreValues = [
  {
    id: 1,
    icon: "our_core_v_1",
    title: "Integrity",
    description: [
      "Honest Communication: We provide clear, accurate information to clients, partners, suppliers, and employees—no hidden fees, surprises, or fine‑print caveats.",
      "Transparent Processes: Our sourcing, vetting, and delivery workflows are fully documented and auditable, ensuring compliance with federal, state, and industry regulations.",
      "Consistent Ethics: We do what we say we will do, even when challenges arise, and we hold ourselves accountable for results.",
      "Trust‑First Relationships: By putting ethical conduct at the center of every decision, we build long‑term partnerships based on mutual respect and reliability.",
    ],
  },
  {
    id: 2,
    icon: "our_core_v_2",
    title: "Excellence",
    description: [
      "Honest Communication: We provide clear, accurate information to clients, partners, suppliers, and employees—no hidden fees, surprises, or fine‑print caveats.",
      "Transparent Processes: Our sourcing, vetting, and delivery workflows are fully documented and auditable, ensuring compliance with federal, state, and industry regulations.",
      "Consistent Ethics: We do what we say we will do, even when challenges arise, and we hold ourselves accountable for results.",
      "Trust‑First Relationships: By putting ethical conduct at the center of every decision, we build long‑term partnerships based on mutual respect and reliability.",
    ],
  },
  {
    id: 3,
    icon: "our_core_v_3",
    title: "Innovation",
    description: [
      "Honest Communication: We provide clear, accurate information to clients, partners, suppliers, and employees—no hidden fees, surprises, or fine‑print caveats.",
      "Transparent Processes: Our sourcing, vetting, and delivery workflows are fully documented and auditable, ensuring compliance with federal, state, and industry regulations.",
      "Consistent Ethics: We do what we say we will do, even when challenges arise, and we hold ourselves accountable for results.",
      "Trust‑First Relationships: By putting ethical conduct at the center of every decision, we build long‑term partnerships based on mutual respect and reliability.",
    ],
    extraClasses: "md:col-span-2 lg:col-span-1",
  },
];

function CoreValue() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="gradient-h1 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10">
        Our Core Value
      </h1>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value) => (
            <Card
              key={value.id}
              className={`get-in-touch-card h-full flex flex-col text-white ${
                value.extraClasses || ""
              }`}
            >
              <CardHeader className="flex items-center gap-4">
                {provideIcon({ name: value.icon })}
                <h3 className="text-lg md:text-2xl font-bold">{value.title}</h3>
              </CardHeader>
              <CardContent className="flex-grow text-justify">
                We uphold the highest ethical standards in every
                interaction—acting with honesty, transparency, and consistency
                from proposal to project close‑out. Integrity means: <br />
                <ul className="list-disc space-y-2 mt-2 pl-4">
                  {value.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoreValue;
