"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useForm, Controller } from "react-hook-form";

function TransportInfoQuote() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      transportFrom: "",
      transportTo: "",
      vehicleType: "",
      othersVehicleType: "",
      name: "",
      phone: "",
      email: "",
    },
    mode: "onSubmit", // Only validate on form submission
  });

  // Watch the vehicleType field to conditionally show the "Others" input
  const watchVehicleType = watch("vehicleType");

  // Add conditional validation for othersVehicleType
  React.useEffect(() => {
    // If vehicle type is "others", make othersVehicleType required
    if (watchVehicleType === "others") {
      register("othersVehicleType", {
        required: "Please specify the vehicle type",
      });
    } else {
      // Clear any errors when not showing the field
      clearErrors("othersVehicleType");
    }
  }, [watchVehicleType, register, clearErrors]);

  const vehicleType = [
    {
      name: "Car",
      value: "car",
    },
    {
      name: "SUV",
      value: "suv",
    },
    {
      name: "Pickup Truck",
      value: "pickup truck",
    },
    {
      name: "RTS",
      value: "rtv",
    },
    {
      name: "JetSki",
      value: "jetski",
    },
    {
      name: "Motor Bike",
      value: "motor bike",
    },
    {
      name: "ATV",
      value: "atv",
    },
    {
      name: "Others",
      value: "others",
    },
  ];

  const onSubmit = (data) => {
    console.log("Form submitted with validated data:", data);

    // Show success toast
    toast.success("Quote Request Submitted!", {
      description: "We'll get back to you with your quote soon.",
      position: "top-right",
    });

    // Reset form
    reset();
  };

  return (
    <div className="py-6 px-4 max-w-[90rem] mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Column - Information */}
        <div className="space-y-8">
          {/* How Does It Work Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gradient-heading mb-6">
              How Does It Work?
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Open trailer car transport works by loading vehicles onto an
              open-air trailer, typically designed with multiple levels to
              maximize space. The vehicles are securely fastened onto the
              trailer deck using straps, chains, or wheel nets to prevent
              movement during transit. Once loaded, the trailer is driven to its
              destination, whether it's a centralized location for mass delivery
              or individual addresses for each vehicle. Throughout the journey,
              the transporter ensures the safety and security of the vehicles,
              adhering to transportation regulations and guidelines. Upon
              arrival, the vehicles are carefully unloaded, completing the
              transport process.
            </p>
          </div>

          {/* Professional Car Transportation Service Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gradient-heading mb-2">
              Professional
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-gradient-heading mb-6">
              Car Transportation Service
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              Open trailer car transport works by loading vehicles onto an
              open-air trailer, typically designed with multiple levels to
              maximize space. The vehicles are securely fastened onto the
              trailer deck using straps, chains, or wheel nets to prevent
              movement during transit. Once loaded, the trailer is driven to its
              destination, whether it's a centralized location for mass delivery
              or individual addresses for each vehicle. Throughout the journey,
              the transporter ensures the safety and security of the vehicles,
              adhering to transportation regulations and guidelines. Upon
              arrival, the vehicles are carefully unloaded, completing the
              transport process.
            </p>
          </div>
        </div>

        {/* Right Column - Quote Form */}
        <div className="">
          <Card className="footer-newsletter-gradient border-none  rounded">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl md:text-3xl font-bold text-gradient-heading">
                Get an Instant Quote
              </CardTitle>
              <p className="text-sm text-gray-600 mt-2">
                Speak Logistics Expert 513-966-9567
              </p>
            </CardHeader>
            <CardContent className="space-y-5">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Transport From and To */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="transportFrom"
                      className="text-gray-700 font-medium"
                    >
                      Transport Car From:
                    </Label>
                    <Input
                      id="transportFrom"
                      placeholder="Zip Code"
                      className={`bg-white border-gray-300 placeholder:text-gray-400 h-12 ${
                        errors.transportFrom ? "border-red-500" : ""
                      }`}
                      {...register("transportFrom", {
                        required: "Origin location is required",
                        pattern: {
                          value: /^[0-9]{5}(-[0-9]{4})?$/,
                          message: "Please enter a valid ZIP code",
                        },
                      })}
                    />
                    {errors.transportFrom && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.transportFrom.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="transportTo"
                      className="text-gray-700 font-medium"
                    >
                      Transport Car To:
                    </Label>
                    <Input
                      id="transportTo"
                      placeholder="City or Zip Code"
                      className={`bg-white border-gray-300 placeholder:text-gray-400 h-12 ${
                        errors.transportTo ? "border-red-500" : ""
                      }`}
                      {...register("transportTo", {
                        required: "Destination is required",
                      })}
                    />
                    {errors.transportTo && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.transportTo.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Vehicle Type */}
                <div className="space-y-2">
                  <Label
                    htmlFor="vehicleType"
                    className="text-gray-700 font-medium"
                  >
                    Vehicle Type:
                  </Label>
                  <Controller
                    name="vehicleType"
                    control={control}
                    rules={{ required: "Please select a vehicle type" }}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger
                          className={`bg-white border-gray-300 w-full ${
                            errors.vehicleType ? "border-red-500" : ""
                          }`}
                        >
                          <SelectValue placeholder="Select vehicle type" />
                        </SelectTrigger>
                        <SelectContent>
                          {vehicleType.map((vehicle) => (
                            <SelectItem
                              key={vehicle.value}
                              value={vehicle.value}
                            >
                              {vehicle.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.vehicleType && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.vehicleType.message}
                    </p>
                  )}
                </div>

                {/* Others Vehicle Type Input - Conditional */}
                {watchVehicleType === "others" && (
                  <div className="space-y-2">
                    <Label
                      htmlFor="othersVehicleType"
                      className="text-gray-700 font-medium"
                    >
                      Others:
                    </Label>
                    <Input
                      id="othersVehicleType"
                      placeholder="Please specify vehicle type"
                      className={`bg-white border-gray-300 placeholder:text-gray-400 h-12 ${
                        errors.othersVehicleType ? "border-red-500" : ""
                      }`}
                      {...register("othersVehicleType", {
                        required: "Please specify the vehicle type",
                      })}
                    />
                    {errors.othersVehicleType && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.othersVehicleType.message}
                      </p>
                    )}
                  </div>
                )}

                {/* Name and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Name"
                      className={`bg-white border-gray-300 placeholder:text-gray-400 h-12 ${
                        errors.name ? "border-red-500" : ""
                      }`}
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
                    <Label
                      htmlFor="phone"
                      className="text-gray-700 font-medium"
                    >
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+3540 5656"
                      className={`bg-white border-gray-300 placeholder:text-gray-400 h-12 ${
                        errors.phone ? "border-red-500" : ""
                      }`}
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
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email:
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@domain.com"
                    className={`bg-white border-gray-300 placeholder:text-gray-400 h-12 ${
                      errors.email ? "border-red-500" : ""
                    }`}
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

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full custom-btn hover:opacity-90 text-white font-semibold py-3 h-12"
                  >
                    Get A Quote
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default TransportInfoQuote;
