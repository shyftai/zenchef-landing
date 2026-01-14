'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp } from 'lucide-react';
import { MONTHLY_COSTS } from '@/lib/constants';

export const PricingSection: React.FC = () => {
  const totalMonthlyCost = MONTHLY_COSTS.reduce((sum, item) => sum + item.cost, 0);

  // Calculate per-restaurant cost (based on 22,000 restaurants in Netherlands)
  const restaurantsInNL = 22000;
  const costPerRestaurant = (totalMonthlyCost / restaurantsInNL).toFixed(3);

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
            Monthly running costs • Already scraped and ready
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Monthly Running Costs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8 border-2 border-zenchef-blue/10"
          >
            <h3 className="font-bold text-zenchef-charcoal mb-6 text-xl">
              Monthly Refresh Costs
            </h3>
            <div className="space-y-4 mb-6">
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
            </div>
            <div className="border-t-2 border-zenchef-blue/20 pt-4 flex justify-between items-center">
              <span className="font-bold text-zenchef-charcoal">Total per month</span>
              <span className="text-3xl font-bold text-zenchef-blue">€{totalMonthlyCost}</span>
            </div>
            <p className="text-xs text-zenchef-gray text-center mt-4">
              Delta updates only (changed listings), new restaurant detection, competitor re-scans
            </p>
          </motion.div>

          {/* Per-Restaurant Cost */}
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
                Scalable Economics
              </h3>
            </div>

            <div className="mb-6">
              <div className="text-sm opacity-90 mb-2">Cost per restaurant (Netherlands)</div>
              <div className="text-5xl font-bold mb-1">€{costPerRestaurant}</div>
              <div className="text-sm opacity-80">{restaurantsInNL.toLocaleString()} restaurants</div>
            </div>

            <div className="bg-white/10 rounded-xl p-4 mb-6 backdrop-blur-sm">
              <div className="text-sm font-semibold mb-3">Easy to scale to:</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>🇧🇪 Belgium (~15,000 restaurants)</span>
                  <span className="font-semibold">~€235/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>🇫🇷 France (~150,000 restaurants)</span>
                  <span className="font-semibold">~€2,340/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>🇩🇪 Germany (~200,000 restaurants)</span>
                  <span className="font-semibold">~€3,120/mo</span>
                </div>
              </div>
            </div>

            <p className="text-xs opacity-80">
              * Estimates based on Netherlands per-restaurant costs. Actual costs may vary by market.
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
            Initial scrape already completed. These are ongoing refresh costs to keep data current.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
