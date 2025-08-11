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

const DirectHireDialog = ({ parentOpen }) => {
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
      title: "Pre-vetted Candidates",
      description: "Thorough background checks & skills validation.",
    },
    {
      id: 2,
      title: "Faster Time-to-Hire",
      description: "Rapid placement without sacrificing quality.",
    },
    {
      id: 3,
      title: "Specialized Recruiting Teams",
      description: "Industry-focused recruiters who understand your needs.",
    },
    {
      id: 4,
      title: "Cost-Efficient",
      description: "Save time and reduce turnover with better-fit hires.",
    },
  ];
  return (
    <>
      <DialogContent className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl p-4 sm:p-6 lg:p-8">
        <DialogHeader>
          <DialogTitle>Direct Hire</DialogTitle>
        </DialogHeader>
        <div className="text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold">
            Direct Hire
          </h1>
          <p className="text-gray-600 mt-2">
            Fill key permanent roles with top-tier, pre-vetted candidates —
            quickly and confidently.
          </p>
          <div className="flex gap-5 items-center justify-center">
            <Button
              className="h-12 mt-4 gardient-style"
              onClick={() => {
                setFormTitle("Request Talent Now");
                setOpenForm(true);
              }}
            >
              Request Talent Now
            </Button>
            <Button
              className="h-12 mt-4 gardient-style"
              onClick={() => {
                setFormTitle("Talk to a Hiring Expert");
                setOpenForm(true);
              }}
            >
              Talk to a Hiring Expert
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between mt-6 w-full">
          {/* Image Section */}
          <div className="w-3/5 sm:w-1/2 lg:w-1/2">
            <Image
              src="/Our Service/group_2.png"
              alt="Contract-to-Hire illustration"
              width={400}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
              Why Choose Direct Hire
            </h2>
            <ul className="space-y-6">
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

export default DirectHireDialog;
