'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Lock, Infinity } from 'lucide-react';
import { MONTHLY_COSTS } from '@/lib/constants';

export const PricingSection: React.FC = () => {
  const totalMonthlyCost = MONTHLY_COSTS.reduce((sum, item) => sum + item.cost, 0);

  // Netherlands specific calculation
  const restaurantsInNL = 22000;
  const variableCosts = 305; // SerpAPI (105) + Firecrawl (85) + Mistral (115)
  const fixedCosts = 40; // Supabase only

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-zenchef-cream">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <DollarSign className="w-12 h-12 text-zenchef-blue mx-auto mb-4" />
          <h2 className="text-4xl lg:text-5xl font-bold text-zenchef-charcoal mb-4">
            Data Collection Cost Breakdown
          </h2>
          <p className="text-xl text-zenchef-gray">
            Netherlands (22,000 restaurants) • Monthly refresh costs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Netherlands Calculation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8 border-2 border-zenchef-blue/10"
          >
            <div className="mb-6">
              <h3 className="font-bold text-zenchef-charcoal text-xl mb-2">
                Netherlands Monthly Costs
              </h3>
              <p className="text-sm text-zenchef-gray">22,000 restaurants</p>
            </div>

            {/* Variable Costs */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-semibold text-orange-500 uppercase tracking-wide">
                  Variable (scales with # of restaurants)
                </span>
              </div>
              <div className="space-y-3 pl-6">
                <div className="flex justify-between items-start text-sm">
                  <div className="flex-1">
                    <div className="text-zenchef-charcoal font-medium">SerpAPI</div>
                    <div className="text-xs text-zenchef-gray mt-0.5">Google Maps data refresh</div>
                  </div>
                  <span className="font-semibold text-zenchef-charcoal ml-4">€105</span>
                </div>
                <div className="flex justify-between items-start text-sm">
                  <div className="flex-1">
                    <div className="text-zenchef-charcoal font-medium">Firecrawl</div>
                    <div className="text-xs text-zenchef-gray mt-0.5">Website tech detection</div>
                  </div>
                  <span className="font-semibold text-zenchef-charcoal ml-4">€85</span>
                </div>
                <div className="flex justify-between items-start text-sm">
                  <div className="flex-1">
                    <div className="text-zenchef-charcoal font-medium">Self-hosted Mistral (GPU VPS)</div>
                    <div className="text-xs text-zenchef-gray mt-0.5">AI processing (unlimited prompts)</div>
                  </div>
                  <span className="font-semibold text-zenchef-charcoal ml-4">€115</span>
                </div>
                <div className="border-t border-zenchef-blue/10 pt-2 flex justify-between text-sm font-semibold text-orange-500">
                  <span>Variable subtotal</span>
                  <span>€{variableCosts}</span>
                </div>
              </div>
            </div>

            {/* Fixed Costs */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Lock className="w-4 h-4 text-green-600" />
                <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">
                  Fixed (same cost regardless of size)
                </span>
              </div>
              <div className="space-y-3 pl-6">
                <div className="flex justify-between items-start text-sm">
                  <div className="flex-1">
                    <div className="text-zenchef-charcoal font-medium">Supabase (EU)</div>
                    <div className="text-xs text-zenchef-gray mt-0.5">Database & real-time sync</div>
                  </div>
                  <span className="font-semibold text-zenchef-charcoal ml-4">€40</span>
                </div>
                <div className="border-t border-zenchef-blue/10 pt-2 flex justify-between text-sm font-semibold text-green-600">
                  <span>Fixed subtotal</span>
                  <span>€{fixedCosts}</span>
                </div>
              </div>
            </div>

            {/* Already Owned */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Infinity className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                  Already Owned (no additional cost)
                </span>
              </div>
              <div className="space-y-2 pl-6">
                <div className="text-sm text-zenchef-gray">• N8N (automation)</div>
                <div className="text-sm text-zenchef-gray">• Lemlist (outreach)</div>
                <div className="text-sm text-zenchef-gray">• Modjo (call intelligence)</div>
              </div>
            </div>

            {/* Total */}
            <div className="border-t-2 border-zenchef-blue/20 pt-4 flex justify-between items-center">
              <span className="font-bold text-zenchef-charcoal text-lg">Total per month</span>
              <span className="text-4xl font-bold text-zenchef-blue">€{totalMonthlyCost}</span>
            </div>
            <p className="text-xs text-zenchef-gray text-center mt-3">
              Delta updates only • New restaurant detection • Competitor monitoring
            </p>
          </motion.div>

          {/* Scalability Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-zenchef-blue to-zenchef-blue-light rounded-3xl shadow-xl p-8 text-white"
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6" />
              <h3 className="font-bold text-xl">
                Scale to Any Market
              </h3>
            </div>

            <div className="bg-white/10 rounded-xl p-5 mb-6 backdrop-blur-sm">
              <div className="text-sm opacity-90 mb-1">Variable cost per restaurant</div>
              <div className="text-3xl font-bold mb-1">€{(variableCosts / restaurantsInNL).toFixed(4)}</div>
              <div className="text-xs opacity-80">Fixed cost: €{fixedCosts}/mo (any size)</div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="text-sm font-semibold mb-3">Expansion Examples:</div>

              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">🇧🇪 Belgium</span>
                  <span className="text-2xl font-bold">€248/mo</span>
                </div>
                <div className="text-xs opacity-80 space-y-1">
                  <div>~15,000 restaurants</div>
                  <div>Variable: €208 + Fixed: €40</div>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">🇫🇷 France</span>
                  <span className="text-2xl font-bold">€2,123/mo</span>
                </div>
                <div className="text-xs opacity-80 space-y-1">
                  <div>~150,000 restaurants</div>
                  <div>Variable: €2,083 + Fixed: €40</div>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">🇩🇪 Germany</span>
                  <span className="text-2xl font-bold">€2,813/mo</span>
                </div>
                <div className="text-xs opacity-80 space-y-1">
                  <div>~200,000 restaurants</div>
                  <div>Variable: €2,773 + Fixed: €40</div>
                </div>
              </div>
            </div>

            <p className="text-xs opacity-80">
              Formula: (Restaurants × €0.0139) + €40 fixed cost
            </p>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-zenchef-gray">
            <strong>Initial scrape already completed.</strong> These are ongoing refresh costs to keep data current.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
