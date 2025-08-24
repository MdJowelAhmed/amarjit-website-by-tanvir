"use client";
import React from "react";
import { Mail, MapPin } from "lucide-react";
import { CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { toast } from "sonner";
import { useForm, Controller } from "react-hook-form";

function GetInTouch() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted with validated data:", data);
    toast.success("Form submitted successfully", {
      description: "Thank you for contacting us!",
      position: "top-right",
    });
    reset(); // Reset form after successful submission
  };

  const contactInfo = [
    {
      id: 1,
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#4f3075]" />,
      label: "OUR HEADQUARTER",
      content: "5356 Elmwood Lane, Liberty Township, OH - 45044",
    },
    {
      id: 2,
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#4f3075]" />,
      label: "E-mail",
      content: "info@kfbusa.com",
    },

    {
      id: 3,
      icon: (
        <LiaPhoneVolumeSolid className="w-4 h-4 sm:w-5 sm:h-5 text-[#4f3075]" />
      ),
      label: "Contact",
      content: "513-966-9567",
    },
  ];

  return (
    <div className="border-2 border-[#4f3075] rounded-xl flex flex-col lg:flex-row items-start gap-8 lg:gap-10 xl:gap-20 max-w-[90rem] mx-auto mt-8 sm:mt-12 mb-12 sm:mb-24 px-4 sm:px-8 md:px-12 lg:px-14 py-6 sm:py-8 md:py-10 ">
      {/* Left Column - Contact Info */}
      <div className="w-full lg:w-full h-full flex flex-col items-start ">
        <h1 className="text-2xl text-gradient-heading sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight sm:leading-snug lg:leading-normal gradient-h1">
          Engage with Us
        </h1>

        <div className="space-y-4 sm:space-y-5 py-4 sm:py-6 w-full">
          {contactInfo.map((item) => (
            <div
              key={item.id}
              className="flex items-start space-x-3 sm:space-x-4 group  p-2 sm:py-2 rounded-lg transition-colors w-full"
            >
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-50 border border-[#4f3075] rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-black font-medium uppercase tracking-wide">
                  {item.label}
                </p>
                <p className="text-sm sm:text-base text-black font-medium break-words">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - Contact Form */}
      <div className="w-full lg:w-[130rem] pt-0 sm:pt-3 ">
        <div className="text-start pb-4 sm:pb-6">
          <CardTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            GET IN TOUCH
          </CardTitle>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 sm:space-y-4 md:space-y-6"
        >
          {/* Name and Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1 sm:space-y-2">
              <Input
                type="text"
                placeholder="Your Name"
                className={`h-10 sm:h-12 text-black border-[#302d70] focus:border-blue-500 focus:ring-blue-500 placeholder:text-gray-500 ${
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
            <div className="space-y-1 sm:space-y-2">
              <Input
                type="tel"
                placeholder="Phone Number"
                className={`h-10 sm:h-12 text-black border-[#302d70] focus:border-blue-500 focus:ring-blue-500 placeholder:text-gray-500 ${
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

          {/* Email and Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1 sm:space-y-2">
              <Input
                type="email"
                placeholder="Your Email"
                className={`h-10 sm:h-12 text-black border-[#302d70] focus:border-blue-500 focus:ring-blue-500 placeholder:text-gray-500 ${
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
            <div className="space-y-1 sm:space-y-2">
              <Controller
                name="service"
                control={control}
                rules={{ required: "Please select a service" }}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger
                      className={`h-10 w-full sm:h-12 border-[#302d70] focus:ring-2 focus:border-gray-400 focus:ring-gray-400 data-[state=open]:ring-2 placeholder:text-gray-500 ${
                        errors.service ? "border-red-500" : ""
                      }`}
                    >
                      <SelectValue placeholder="Service Interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="staff-augmentation-servies">
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
          </div>

          {/* Message */}
          <div className="space-y-1 sm:space-y-2">
            <Textarea
              placeholder="Your Message"
              rows={4}
              className={`text-black border-[#302d70] focus:border-blue-500 focus:ring-blue-500 resize-none h-24 sm:h-32 placeholder:text-gray-500 ${
                errors.message ? "border-red-500" : ""
              }`}
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

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-10 sm:h-12 rounded-full gardient-style text-white py-2 sm:py-3 px-4 sm:px-6 font-medium hover:opacity-90 active:bg-gray-700 transition-colors duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base"
          >
            <span>Contact Us</span>
            <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}

export default GetInTouch;
