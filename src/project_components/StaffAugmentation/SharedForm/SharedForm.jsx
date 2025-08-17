import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import React from "react";
import { useForm, Controller } from "react-hook-form";

function SharedForm({ formTitle, open, onOpenChange }) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      service: "",
      message: "",
      terms: false,
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted with validated data:", data);
    toast.success("Form submitted successfully", {
      position: "top-right",
    });
    reset(); // Reset form after successful submission
    onOpenChange(false); // Close the dialog after submission
  };

  // Handle dialog close without triggering validation
  const handleOpenChange = (isOpen) => {
    if (!isOpen) {
      // If closing, reset form and clear errors
      reset();
      clearErrors();
    }
    onOpenChange(isOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-lg md:max-w-2xl lg:max-w-4xl ">
        <div className="mt-2 text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold">
            {formTitle}
          </h1>
        </div>

        <div className="border rounded-md p-4 mt-4">
          <DialogHeader className="pb-4">
            <DialogTitle>Contact Form</DialogTitle>
          </DialogHeader>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Your full name here"
                className={errors.name ? "border-red-500" : ""}
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className={errors.email ? "border-red-500" : ""}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1234567890"
                className={errors.phone ? "border-red-500" : ""}
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9+-\s()]{10,15}$/,
                    message: "Please enter a valid phone number",
                  },
                })}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization">Organization Name</Label>
              <Input
                id="organization"
                placeholder="Name of your organization"
                className={errors.organization ? "border-red-500" : ""}
                {...register("organization", {
                  required: "Organization name is required",
                })}
              />
              {errors.organization && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.organization.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Service Type</Label>
              <Controller
                name="service"
                control={control}
                rules={{ required: "Please select a service" }}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger
                      className={`w-full ${
                        errors.service ? "border-red-500" : ""
                      }`}
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="staff-augmentation-services">
                        Staff Augmentation Services
                      </SelectItem>
                      <SelectItem value="product-provisioning-services">
                        Product Provisioning Services
                      </SelectItem>
                      <SelectItem value="logistics-services">
                        Logistics Services
                      </SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.service && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.service.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your staffing needs..."
                rows={4}
                className={errors.message ? "border-red-500" : ""}
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="flex items-start space-x-2">
              <Controller
                name="terms"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id="terms"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <Label htmlFor="terms">
                I'd like to receive a capabilities statement.
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full custom-btn hover:opacity-90"
            >
              Send Messages
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SharedForm;
