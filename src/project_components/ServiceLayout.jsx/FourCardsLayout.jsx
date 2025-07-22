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

function FourCardsLayout({ isGCA }) {
  // const isVendor = path === "/vendor-sourcing";

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

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 h-full">
        {cardData.map((card) => (
          <Card
            key={card.id}
            className="get-in-touch-card text-white w-full h-full hover:shadow-lg transition-shadow duration-300 border border-gray-200"
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl font-semibold leading-tight ">
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {card.type === "description" && (
                <CardDescription className=" leading-relaxed text-white">
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
                <Table className="text-white">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-white">
                        Document Name
                      </TableHead>
                      <TableHead className="text-right w-[100px] text-white">
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
    </div>
  );
}

export default FourCardsLayout;
