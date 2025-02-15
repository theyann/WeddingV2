import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface FAQItem {
  q: {
    [key: string]: string;
  };
  a: {
    [key: string]: string;
  };
  link?: {
    label: {
      [key: string]: string;
    };
    url: {
      [key: string]: string;
    };
  };
}

interface FAQAccordionProps {
  items: FAQItem[];
  language: string;
}

export function FAQAccordion({ items, language }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left font-bold hover:text-pink-600 transition-colors pb-2">
            {item.q[language]}
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700 mb-4 leading-relaxed">{item.a[language]}</p>
            {item.link && (
              <Button
                variant="outline"
                className="w-full mt-2"
                onClick={() => window.open(item.link!.url[language], '_blank')}
              >
                {item.link.label[language]}
              </Button>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}