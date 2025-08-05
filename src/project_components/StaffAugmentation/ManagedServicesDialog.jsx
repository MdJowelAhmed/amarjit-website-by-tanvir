import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import SharedForm from "./SharedForm/SharedForm";

const ManagedServicesDialog = ({ parentOpen }) => {
  const [openForm, setOpenForm] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const handleClose = () => {
    setOpenForm(false);
    setFormTitle("");
  };

  React.useEffect(() => {
    if (!parentOpen) {
      setOpenForm(false);
      setFormTitle("");
    }
  }, [parentOpen]);

  const serviceFeatures = [
    {
      id: 1,
      title: "Project-Based Staffing",
      description: "Quickly ramp up for initiatives or deadlines.",
    },
    {
      id: 2,
      title: "Managed IT Services",
      description: "Full-cycle service delivery with SLAs and oversight.",
    },
    {
      id: 3,
      title: "Team Augmentation",
      description: "Expand your capabilities without full-time commitments",
    },
    {
      id: 4,
      title: "Dedicated Engagement Managers",
      description: "Your single point of contact for service accountability",
    },
  ];
  return (
    <>
      <DialogContent className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl  p-4 sm:p-6 lg:p-8">
        <div className="text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold">
            Scalable Managed Services & Project-Based Staffing
          </h1>
          <p className="text-gray-600 mt-2">
            Deploy the right people and resources for mission-critical projects,
            without overburdening internal teams.
          </p>
          <div className="flex gap-5 items-center justify-center">
            <Button
              className="h-12 mt-4 gardient-style"
              onClick={() => {
                setFormTitle("Request a Consultation");
                setOpenForm(true);
              }}
            >
              Request a Consultation
            </Button>
            <Button
              className="h-12 mt-4 gardient-style"
              onClick={() => {
                setFormTitle("Talk to a Project Manager");
                setOpenForm(true);
              }}
            >
              Talk to a Project Manager
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between mt-6 w-full">
          {/* Image Section */}
          <div className="w-3/5 sm:w-1/2 lg:w-1/2">
            <Image
              src="/Our Service/group_3.png"
              alt="Contract-to-Hire illustration"
              width={400}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
              Flexible Support, On-Demand Talent
            </h2>
            <p>
              From full-service managed teams to highly specialized consultants,
              we tailor workforce solutions for agencies and enterprises
              tackling complex IT, engineering, or compliance-heavy projects.
            </p>

            <ul className="space-y-5 mt-3">
              {serviceFeatures.map((item) => (
                <li key={item.id}>
                  <Label className="text-xl">{item.title}</Label>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>

      <SharedForm 
        formTitle={formTitle} 
        open={openForm}
        onOpenChange={setOpenForm}
      />
    </>
  );
};

export default ManagedServicesDialog;
