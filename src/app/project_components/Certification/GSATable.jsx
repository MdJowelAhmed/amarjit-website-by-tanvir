import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import HeadingSection from "@/utils/provideHeadingSubheading";

function GSATable() {
  function gsaHeading() {
    return (
      <section>
        <HeadingSection
          heading="GSA Schedule Holder"
          subheading="As a GSA Schedule Holder, we offer streamlined procurement with pre-approved pricing, terms, and compliance standards trusted by federal agencies. Our services and products are easily accessible through the General Services Administration Schedule, reducing procurement time and risk."
        />
      </section>
    );
  }
  function naicsHeading() {
    return (
      <section>
        <HeadingSection
          heading="NAICS Codes & DUNS/CAGE"
          subheading="We maintain all required business identifiers to ensure full alignment with federal and commercial procurement standards."
        />
      </section>
    );
  }

  const gsaData = [
    { label: "GSA Contract Number", value: "+1234567890" },
    {
      label: "State / City",
      value: "State of New York, Washington, D.C., Maryland, Virginia",
    },
    { label: "Schedule Type", value: "IT Schedule 70, MAS, etc" },
    { label: "SINs (Special Item Numbers)", value: "123456" },
    { label: "Awarded Categories", value: "[List categories or services]" },
    { label: "Contract Period", value: "01 July 2025 - 10 July 2025" },
  ];

  const naicsData = [
    {
      label: "NAICS Codes",
      value: "541519 (IT), 541611 (Consulting), 541512 (Systems Design)",
    },
    { label: "DUNS Number", value: "123456789" },
    { label: "CAGE Code", value: "1A2B3" },
  ];

  return (
    <div className="max-w-6xl flex flex-col gap-10 mx-auto py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="mb-8">
        {gsaHeading()}
        <Table className="border-2">
          <TableBody>
            {gsaData.map((item, index) => (
              <TableRow key={index} className="border-2">
                <TableCell className="font-medium w-1/2 border-2 text-center p-4">
                  {item.label}
                </TableCell>
                <TableCell className="text-center">{item.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mb-8">
        {naicsHeading()}
        <Table className="border-2">
          <TableBody>
            {naicsData.map((item, index) => (
              <TableRow key={index} className="border-2">
                <TableCell className="font-medium w-1/2 border-2 text-center p-4">
                  {item.label}
                </TableCell>
                <TableCell className="text-center">{item.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default GSATable;
