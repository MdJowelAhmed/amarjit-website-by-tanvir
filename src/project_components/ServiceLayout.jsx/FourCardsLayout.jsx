"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { useForm, Controller } from "react-hook-form";

function FourCardsLayout({ isGCA }) {
  // const isVendor = path === "/vendor-sourcing";
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const path = usePathname();

  const {
    register,
    handleSubmit,
    control,
    reset,
    clearErrors,
    formState: { errors },
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
    mode: "onSubmit", // Only validate on form submission
  });

  // Handle dialog open/close to reset form
  React.useEffect(() => {
    if (!dialogOpen) {
      // Reset form when dialog closes
      reset();
      clearErrors();
    }
  }, [dialogOpen, reset, clearErrors]);

  const isVendor = path === "/product-provisioning-services/vendor-sourcing";
  const cardDataGCA = [
    {
      id: 1,
      title: "What Is a GSA Schedule?",
      type: "description",
      content:
        "A GSA Schedule is a government-wide contract that streamlines purchasing for federal agencies by offering pre-approved pricing and vetted vendors. Through our GSA contract, agencies access our full suite of solutions faster and more efficiently.",
    },
    {
      id: 2,
      title: "Who We Serve",
      type: "list",
      items: [
        "Federal Civilian Agencies",
        "Department of Defense",
        "State & Local Governments",
        "Educational Institutions",
      ],
    },
    {
      id: 3,
      title: "Benefits of Buying Through Our GSA Schedule",
      type: "list",
      items: [
        "FAR-compliant Procurement",
        "Faster Acquisition Cycle",
        "Pre-negotiated Pricing",
        "Standardized Terms & Conditions",
        "Streamlined Invoicing & Tracking",
      ],
    },
    {
      id: 4,
      title: "Supporting Documents & Downloads",
      type: "table",
      items: [
        { name: "GSA Contract Overview", icon: FileText },
        { name: "Capability Statement", icon: FileText },
        { name: "SIN Category Breakdown", icon: FileText },
      ],
    },
  ];

  const cardVendor = [
    {
      id: 1,
      title: "What Is Vendor-Agnostic Sourcing?",
      type: "description",
      content:
        "We source from a wide network of suppliers — not tied to any single vendor — to provide the right solution at the right price. Whether it's IT hardware, office essentials, or safety equipment, our recommendations are driven solely by your needs, budget, and deadlines.",
    },
    {
      id: 2,
      title: "Why Vendor-Agnostic?",
      type: "list",
      items: [
        {
          listTitle: "Comparative Sourcing",
          listDescription:
            "We compare vendors for price, lead time, and quality.",
        },
        {
          listTitle: "Faster Fulfillment",
          listDescription:
            "Skip the brand limitations — source what's available now.",
        },
      ],
    },
    {
      id: 3,
      title: "What We Source",
      type: "list",
      items: [
        {
          listTitle: "IT Hardware & Software",
          listDescription: "Laptops, servers, licensing",
        },
        {
          listTitle: "Office Essentials",
          listDescription: "Furniture, printers, stationery",
        },
        {
          listTitle: "Industrial & Safety Gear",
          listDescription: "PPE, tools, materials",
        },
      ],
    },
    {
      id: 4,
      title: "Who We Serve",
      type: "list",
      items: [
        "Government & Defense",
        "Healthcare & Public Health",
        "Education",
        "Infrastructure & Engineering",
        "Commercial Enterprise",
      ],
    },
  ];

  // Select the appropriate card data based on path
  const cardData = isGCA ? cardDataGCA : cardVendor;
  console.log("isC", isGCA);

  const onSubmit = (data) => {
    console.log("Form submitted with validated data:", data);
    toast.success("Form submitted successfully", {
      position: "top-right",
    });
    reset(); // Reset form after successful submission
    setDialogOpen(false); // Close dialog after submission
  };
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 h-full">
        {cardData.map((card) => (
          <Card
            key={card.id}
            className="get-in-touch-card text-black w-full h-full hover:shadow-lg transition-shadow duration-300 border border-gray-200"
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl font-semibold leading-tight text-[#4f3075] ">
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {card.type === "description" && (
                <CardDescription className=" leading-relaxed text-black">
                  {card.content}
                </CardDescription>
              )}

              {card.type === "list" && (
                <ul className="space-y-2 ">
                  {card.items.map((item, index) => (
                    <li key={index} className="list-disc ml-5 ">
                      <div className="">
                        {typeof item === "string" ? (
                          <span>{item}</span>
                        ) : (
                          <div>
                            <div className="font-semibold ">
                              {item.listTitle}
                            </div>
                            <div className="text-sm  mt-1">
                              {item.listDescription}
                            </div>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {card.type === "table" && (
                <Table className="text-black">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-black">
                        Document Name
                      </TableHead>
                      <TableHead className="text-right w-[100px] text-black">
                        Action
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {card.items.map((item, index) => (
                      <TableRow key={index} className="hover:bg-gray-50">
                        <TableCell className="font-medium">
                          {item.name}
                        </TableCell>
                        <TableCell className="text-right">
                          <button className="inline-flex items-center justify-center p-1 rounded hover:bg-gray-100 transition-colors">
                            <FileText className="w-4 h-4 text-red-500" />
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      {isVendor && (
        <div className="mt-10 flex items-center justify-center">
          <Button
            className="min-w-72 custom-btn h-12 text-white font-bold"
            onClick={() => setDialogOpen(true)}
          >
            Request a Custom Quote
          </Button>
        </div>
      )}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg md:max-w-2xl lg:max-w-4xl ">
          <div className="mt-2 text-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold">
              Request a Custom Quote
            </h1>
          </div>

          <div className="border border-blue-950 rounded-md p-4 mt-4">
            <DialogHeader className="pb-4">
              <DialogTitle>Contact Form</DialogTitle>
            </DialogHeader>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Your full name here"
                  className={`border border-blue-950 placeholder:text-gray-400 ${
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
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className={`border border-blue-950 placeholder:text-gray-400 ${
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

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1234567890"
                  className={`border border-blue-950 placeholder:text-gray-400 ${
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

              <div className="space-y-2">
                <Label htmlFor="organization">Organization Name</Label>
                <Input
                  id="organization"
                  placeholder="Name of your organization"
                  className={`border border-blue-950 placeholder:text-gray-400 ${
                    errors.organization ? "border-red-500" : ""
                  }`}
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
                        className={`w-full border border-blue-950 ${
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
                  className={`border border-blue-950 placeholder:text-gray-400 ${
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

              <div className="flex items-start space-x-2">
                <Controller
                  name="terms"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      id="terms"
                      className="border border-blue-950"
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
                Send Message
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default FourCardsLayout;
