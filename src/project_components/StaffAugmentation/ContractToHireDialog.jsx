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

const ContractToHireDialog = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <DialogContent className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl  p-4 sm:p-6 lg:p-8">
        <div className="text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold">
            Contract-to-Hire
          </h1>
          <p className="text-gray-600 mt-2">
            Evaluate a candidate's fit on the job before making a full-time
            commitment — a low-risk path to long-term success.
          </p>
          <Button
            className="h-12 mt-4 gardient-style"
            onClick={() => setOpenForm(true)}
          >
            Talk to Our HR Teams
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between mt-6 w-full">
          {/* Image Section */}
          <div className="w-3/5 sm:w-1/2 lg:w-1/2">
            <Image
              src="/Our Service/group.png"
              alt="Contract-to-Hire illustration"
              width={400}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
              How It Works
            </h2>
            <ul className="space-y-6">
              <li>
                <Label className="text-xl">Deploy Pre-Vetted Talent</Label>
                <p className="text-gray-600 mt-1">
                  We match you with qualified candidates who meet your technical
                  and cultural needs.
                </p>
              </li>
              <li>
                <Label className="text-xl">Evaluate on the Job</Label>
                <p className="text-gray-600 mt-1">
                  Assess performance and fit over a trial period with minimal
                  commitment.
                </p>
              </li>
              <li>
                <Label className="text-xl">Hire with Confidence</Label>
                <p className="text-gray-600 mt-1">
                  Transition top performers to full-time with no disruption to
                  your workflow.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </DialogContent>

      <SharedForm 
        formTitle={"Talk to HR"} 
        open={openForm}
        onOpenChange={setOpenForm}
      />
    </>
  );
};

export default ContractToHireDialog;
