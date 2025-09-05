'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "Do you charge for property consultations and tours?",
    answer: "Never. Our personalized consultations and property tours are completely free. We only succeed when you find your perfect home, so there's no upfront cost to you."
  },
  {
    question: "How long does the typical property purchase take?",
    answer: "Most of our clients close within 30-45 days, but we work at your pace. No rushing, no pressure – just steady progress toward your goal. We'll keep you informed every step of the way."
  },
  {
    question: "What areas of Thane do you specialize in?",
    answer: "We cover all major areas of Thane with deep local expertise – from Thane West (Ghodbunder Road, Hiranandani, Vartak Nagar) to Thane East (Dombivli, Kalyan). From budget-friendly options to premium properties, we know every neighborhood's unique advantages."
  }
];

export default function FAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600">
              We believe in transparency. Here are answers to the most common questions we hear from families like yours.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg text-gray-900">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-gray-700 leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Additional help */}
          <div className="mt-12 text-center">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Have More Questions?
              </h3>
              <p className="text-gray-600 mb-4">
                We're here to help. No question is too small, and we believe in open, honest communication from day one.
              </p>
              <p className="text-blue-600 font-medium">
                Call us directly or schedule a free consultation – we're always happy to chat about your property needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}