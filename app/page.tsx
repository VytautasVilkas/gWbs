import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { HoverCardDemo } from "@/components/ui/MyHover"; // Import HoverCardDemo

export default function Home() {
  return (
    <div className="w-1/2 mx-auto p-4">
      {/* Accordion Section */}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Kaip aš čia atsidūriau?</AccordionTrigger>
          <AccordionContent>na visų pirma tai...</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Kodėl kūrybinės industrijos?</AccordionTrigger>
          <AccordionContent>papasakok kaip yra ištikrųjų :P</AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="mt-8">
        <HoverCardDemo />
      </div>
    </div>
  );
}


