'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PRICING, MONTHLY_COSTS } from '@/lib/constants';

export const PricingSection: React.FC = () => {
  const totalMonthlyCost = MONTHLY_COSTS.reduce((sum, item) => sum + item.cost, 0);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-zenchef-cream">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-zenchef-charcoal mb-4">
            Partnership Pricing
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-zenchef-blue/10"
        >
          {/* Main pricing */}
          <div className="p-12 text-center">
            <div className="inline-block bg-zenchef-blue/10 px-6 py-3 rounded-full mb-8">
              <span className="text-zenchef-blue font-bold text-lg">🤝 Launch Partner Offer</span>
            </div>

            <div className="mb-8">
              <div className="text-6xl font-bold text-zenchef-blue mb-2">
                €{PRICING.partner.toLocaleString()}
              </div>
              <div className="h-1 w-32 bg-zenchef-blue/20 mx-auto mb-4"></div>
              <div className="text-lg text-zenchef-gray">
                Fixed price • 6-week delivery
              </div>
            </div>

            {/* Savings box */}
            <div className="bg-zenchef-blue/10 rounded-2xl p-6 mb-8 max-w-md mx-auto">
              <div className="flex items-start justify-between mb-2">
                <span className="text-zenchef-charcoal">Standard rate:</span>
                <span className="font-semibold text-zenchef-charcoal">
                  €{PRICING.standard.toLocaleString()}
                </span>
              </div>
              <div className="text-sm text-zenchef-gray mb-3">
                ({PRICING.hours} hours × €{PRICING.hourlyRate}/hr)
              </div>
              <div className="flex items-start justify-between text-zenchef-blue font-bold text-lg">
                <span>You save:</span>
                <span>€{(PRICING.standard - PRICING.partner).toLocaleString()} ({PRICING.discount}%)</span>
              </div>
            </div>

            {/* What's included */}
            <div className="text-left max-w-md mx-auto mb-8">
              <h3 className="font-bold text-zenchef-charcoal mb-4 text-center">
                In exchange for:
              </h3>
              <div className="space-y-3">
                {[
                  'Permission to publish as a case study',
                  'Video testimonial or written quote',
                  'One reference call with future prospect'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-zenchef-blue flex-shrink-0 mt-0.5" />
                    <span className="text-zenchef-charcoal">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary">
                Schedule a Call
              </Button>
              <Button variant="outline">
                View Full Proposal
              </Button>
            </div>
          </div>

          {/* Monthly costs */}
          <div className="bg-zenchef-cream/50 p-8 border-t-2 border-zenchef-blue/10">
            <h3 className="font-bold text-zenchef-charcoal mb-4 text-center">
              Monthly Running Costs
            </h3>
            <div className="max-w-md mx-auto space-y-3 mb-4">
              {MONTHLY_COSTS.map((item, index) => (
                <div key={index} className="flex justify-between items-start text-sm">
                  <div className="flex-1">
                    <div className="text-zenchef-charcoal font-medium">{item.name}</div>
                    {item.note && (
                      <div className="text-xs text-zenchef-gray mt-0.5">{item.note}</div>
                    )}
                  </div>
                  <span className="font-semibold text-zenchef-charcoal ml-4">
                    {item.cost === 0 ? '—' : `€${item.cost}`}
                  </span>
                </div>
              ))}
              <div className="border-t-2 border-zenchef-blue/20 pt-3 flex justify-between font-bold text-zenchef-blue">
                <span>Total per month</span>
                <span>€{totalMonthlyCost}</span>
              </div>
            </div>
            <p className="text-sm text-zenchef-gray text-center">
              After launch, the system runs on your accounts
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
