"use client";

import { useState } from "react";

import {
  Accordion as ShadcnAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const content = [
  {
    title: "Q1: How does it work?",
    content:
      "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
    value: "item-1",
  },
  {
    title: "Q2: Why inhale melatonin?",
    content:
      "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
    value: "item-2",
  },
  {
    title: "Q3: How much melatonin is there per inhale?",
    content:
      "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
    value: "item-3",
  },
  {
    title: "Q4: Is it an e-cigarette or tobacco product?",
    content:
      "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
    value: "item-4",
  },
  {
    title: "Q5: What's in it?",
    content:
      "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
    value: "item-5",
  },
  {
    title: "Q6: What's not in it?",
    content:
      "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
    value: "item-6",
  },
  {
    title: "Q7: How long does it last?",
    content:
      "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
    value: "item-7",
  },
  {
    title: "Q8: How do I know it has run out/died?",
    content:
      "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
    value: "item-8",
  },
];

export function Accordion() {
  const [activeValue, setActiveValue] = useState<string | null>(null);

  return (
    <ShadcnAccordion
      type="single"
      collapsible
      className="w-full"
      onValueChange={(value) => setActiveValue(value)}
    >
      {content.map((item) => (
        <AccordionItem value={item.value} key={item.value}>
          <AccordionTrigger
            className={`text-[#12305b] ${
              activeValue === item.value ? "font-extrabold" : ""
            }`}
          >
            {item.title}
          </AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </ShadcnAccordion>
  );
}
