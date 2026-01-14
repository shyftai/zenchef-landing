'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const oldWay = [
    'Manual data imports that go stale',
    'No real Salesforce sync',
    'Generic templates, no personalization',
    'Spreadsheet chaos',
    '"Who should I call?" → Hours of research'
  ];

  const newWay = [
    'Automated monthly data refresh',
    'Bi-directional Salesforce sync',
    'AI-generated personalization hooks',
    'Conversational interface',
    '"I need 25 demos" → Instant recommendations'
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-zenchef-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-zenchef-charcoal mb-4">
            Clay Didn&apos;t Work. <span className="text-zenchef-blue">Here&apos;s Why This Will.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-red-50 rounded-2xl p-8 border-2 border-red-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center">
                <X className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-zenchef-charcoal">
                The Old Way (Clay)
              </h3>
            </div>

            <div className="space-y-4">
              {oldWay.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-zenchef-charcoal">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* New Way */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-green-50 rounded-2xl p-8 border-2 border-green-200 relative overflow-hidden"
          >
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-zenchef-charcoal">
                  The New Way (Sales Cockpit)
                </h3>
              </div>

              <div className="space-y-4">
                {newWay.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-zenchef-charcoal font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
