'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Sparkles, MessageSquare, Rocket, ChevronRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'COLLECT',
    subtitle: 'We pull data from everywhere',
    icon: Database,
    details: [
      'SerpAPI for Google Business profiles',
      'Firecrawl for website tech detection',
      'Instagram for social signals',
      'Salesforce for customer exclusion'
    ],
    bgColor: 'bg-zenchef-blue/10',
    iconColor: 'text-zenchef-blue',
    borderColor: 'border-zenchef-blue'
  },
  {
    id: 2,
    title: 'DETECT',
    subtitle: 'AI spots the opportunities',
    icon: Sparkles,
    details: [
      'New restaurant opened',
      'Competitor system detected (TheFork, Formitable, etc.)',
      'Growth trajectory (reviews, ratings trending up)',
      'Premium prospect (high rating, no booking system)',
      'Unhappy competitor user (bad reviews mentioning platform)'
    ],
    bgColor: 'bg-zenchef-blue-light/10',
    iconColor: 'text-zenchef-blue-light',
    borderColor: 'border-zenchef-blue-light'
  },
  {
    id: 3,
    title: 'CONVERSE',
    subtitle: 'Ask your data anything',
    icon: MessageSquare,
    details: [
      'Natural language queries',
      'Capacity planning ("I need X demos")',
      'Filtering ("Show me Amsterdam, rating > 4.3")',
      'Nearby customer lookup for social proof'
    ],
    bgColor: 'bg-zenchef-blue/10',
    iconColor: 'text-zenchef-blue',
    borderColor: 'border-zenchef-blue'
  },
  {
    id: 4,
    title: 'LAUNCH',
    subtitle: 'You\'re always in control',
    icon: Rocket,
    details: [
      'Leads staged with personalization',
      'Human reviews before sending',
      'Pre-built Lemlist payloads',
      'One click to launch'
    ],
    bgColor: 'bg-zenchef-blue-light/10',
    iconColor: 'text-zenchef-blue-light',
    borderColor: 'border-zenchef-blue-light'
  }
];

export const FlowDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-zenchef-charcoal mb-4">
            From Raw Data to <span className="text-zenchef-blue">Ready-to-Launch Campaigns</span>
          </h2>
        </motion.div>

        {/* Desktop view - horizontal */}
        <div className="hidden lg:flex items-start justify-between gap-4 mb-12">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-1"
              >
                <motion.div
                  className={`bg-white rounded-2xl p-6 cursor-pointer border-2 transition-all ${
                    activeStep === step.id
                      ? `${step.borderColor} shadow-xl`
                      : 'border-transparent shadow-md hover:shadow-lg'
                  }`}
                  onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-14 h-14 ${step.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                    <step.icon className={`w-7 h-7 ${step.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-zenchef-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zenchef-gray mb-4">
                    {step.subtitle}
                  </p>

                  {/* Expandable details */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: activeStep === step.id ? 'auto' : 0,
                      opacity: activeStep === step.id ? 1 : 0
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-gray-200 space-y-2">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-zenchef-blue">•</span>
                          <span className="text-zenchef-charcoal">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {index < steps.length - 1 && (
                <div className="flex items-center justify-center pt-20">
                  <ChevronRight className="w-8 h-8 text-zenchef-blue" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile view - vertical */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`bg-white rounded-2xl p-6 cursor-pointer border-2 ${
                  activeStep === step.id
                    ? `${step.borderColor} shadow-xl`
                    : 'border-transparent shadow-md'
                }`}
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 ${step.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <step.icon className={`w-7 h-7 ${step.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-zenchef-charcoal mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-zenchef-gray">
                      {step.subtitle}
                    </p>
                  </div>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: activeStep === step.id ? 'auto' : 0,
                    opacity: activeStep === step.id ? 1 : 0
                  }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-zenchef-olive">•</span>
                        <span className="text-zenchef-charcoal">{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
