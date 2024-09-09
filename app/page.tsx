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
          <AccordionTrigger>Iš kur aš?</AccordionTrigger>
          <AccordionContent>Blablabla</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Ką mėgstu veikti?</AccordionTrigger>
          <AccordionContent>Blablabla</AccordionContent>
        </AccordionItem>
      </Accordion>

      
      <div className="mt-8">
        <HoverCardDemo />
      </div>
    </div>
  );
}


