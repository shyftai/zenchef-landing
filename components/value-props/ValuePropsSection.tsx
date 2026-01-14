'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { VALUE_PILLARS, TODAY_VS_TOMORROW, COST_COMPARISON } from '@/lib/constants';
import { Check, X } from 'lucide-react';

export const ValuePropsSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zenchef-charcoal mb-4">
            What You Have Now <span className="italic text-zenchef-blue">Works</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-zenchef-charcoal mb-6">
            But It Could Be <span className="italic text-zenchef-blue">Autonomous</span>
          </h3>
          <p className="text-xl text-zenchef-gray max-w-3xl mx-auto">
            Your Clay + Lemlist setup is solid. We built it together. But you&apos;re still the glue holding it together.
          </p>
          <p className="text-xl text-zenchef-gray max-w-3xl mx-auto mt-4 font-semibold">
            What if the system ran itself?
          </p>
        </motion.div>

        {/* FROM FRAGMENTED TO UNIFIED Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16 bg-zenchef-cream p-8 rounded-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* From Fragmented */}
            <div>
              <h3 className="text-2xl font-bold text-zenchef-charcoal mb-6 text-center">
                From Fragmented
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-2 border-zenchef-border-light">
                  <div className="font-semibold text-zenchef-charcoal">Clay</div>
                  <div className="text-sm text-zenchef-gray">Manual enrichments</div>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-zenchef-border-light">
                  <div className="font-semibold text-zenchef-charcoal">Salesforce</div>
                  <div className="text-sm text-zenchef-gray">Manual exports/imports</div>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-zenchef-border-light">
                  <div className="font-semibold text-zenchef-charcoal">Lemlist</div>
                  <div className="text-sm text-zenchef-gray">Disconnected campaigns</div>
                </div>
                <div className="text-center text-zenchef-gray italic">
                  3 systems, 3 logins, 3 dashboards
                </div>
              </div>
            </div>

            {/* To Unified */}
            <div>
              <h3 className="text-2xl font-bold text-zenchef-blue mb-6 text-center">
                To Unified
              </h3>
              <div className="bg-gradient-to-br from-zenchef-blue to-zenchef-blue-light p-6 rounded-xl text-white">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold mb-2">Supabase (EU)</div>
                  <div className="text-sm text-white/80">Your Single Source of Truth</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                    <span>Salesforce</span>
                    <span>↔</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                    <span>Lemlist</span>
                    <span>↔</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                    <span>Claude MCP</span>
                    <span>↔</span>
                  </div>
                </div>
                <div className="text-center mt-4 text-sm text-white/90">
                  Real-time bi-directional sync
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Three Value Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-zenchef-charcoal mb-8 text-center">
            Three Pillars of Independence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUE_PILLARS.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-zenchef-cream p-6 rounded-2xl"
              >
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h4 className="text-xl font-bold text-zenchef-charcoal mb-4">
                  {pillar.title}
                </h4>
                <ul className="space-y-2">
                  {pillar.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-zenchef-blue flex-shrink-0 mt-1" />
                      <span className="text-sm text-zenchef-gray">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Today vs Tomorrow Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-16 bg-zenchef-cream p-8 rounded-2xl"
        >
          <h3 className="text-3xl font-bold text-zenchef-charcoal mb-2 text-center">
            What Changes For You As Head of Sales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Today */}
            <div>
              <h4 className="text-xl font-bold text-zenchef-charcoal mb-4 pb-2 border-b-2 border-zenchef-border-medium">
                Today (with Clay)
              </h4>
              <ul className="space-y-3">
                {TODAY_VS_TOMORROW.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zenchef-gray">{item.today}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tomorrow */}
            <div>
              <h4 className="text-xl font-bold text-zenchef-blue mb-4 pb-2 border-b-2 border-zenchef-blue">
                Tomorrow (with Cockpit)
              </h4>
              <ul className="space-y-3">
                {TODAY_VS_TOMORROW.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-zenchef-blue flex-shrink-0 mt-0.5" />
                    <span className="text-zenchef-charcoal font-medium">{item.tomorrow}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Cost Comparison Callout (V4) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 p-8 rounded-2xl"
        >
          <div className="flex items-start gap-4 mb-6">
            <span className="text-4xl">💰</span>
            <div>
              <h3 className="text-2xl font-bold text-zenchef-charcoal mb-2">
                The Real Cost Comparison
              </h3>
              <p className="text-zenchef-gray">
                Clay vs. Self-Hosted Cockpit Stack
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Current Clay Stack */}
            <div className="bg-white p-6 rounded-xl border border-red-200">
              <div className="text-sm font-semibold text-zenchef-gray mb-3">
                {COST_COMPARISON.currentClay.label}
              </div>
              <div className="text-4xl font-bold text-red-600 mb-4">
                €{COST_COMPARISON.currentClay.annual.toLocaleString('en-US')}/year
              </div>
              <ul className="space-y-2 text-sm text-zenchef-gray">
                {COST_COMPARISON.currentClay.notes.map((note, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Proposed Stack */}
            <div className="bg-white p-6 rounded-xl border-2 border-green-500">
              <div className="text-sm font-semibold text-zenchef-gray mb-3">
                {COST_COMPARISON.proposedStack.label}
              </div>
              <div className="text-4xl font-bold text-green-600 mb-1">
                €{COST_COMPARISON.proposedStack.annual.toLocaleString('en-US')}/year
              </div>
              <div className="text-sm text-zenchef-gray mb-4">
                (€{COST_COMPARISON.proposedStack.monthly}/month)
              </div>
              <ul className="space-y-2 text-sm text-zenchef-gray">
                {COST_COMPARISON.proposedStack.notes.map((note, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Savings Banner */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-xl text-white mb-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-semibold mb-1">Annual Savings</div>
                <div className="text-sm text-white/90">
                  {COST_COMPARISON.savings.percentage}% cost reduction
                </div>
              </div>
              <div className="text-5xl font-bold">
                €{COST_COMPARISON.savings.annual.toLocaleString('en-US')}
              </div>
            </div>
          </div>

          {/* ROI Callout */}
          <div className="bg-white p-6 rounded-xl border-2 border-zenchef-blue">
            <h4 className="text-xl font-bold text-zenchef-charcoal mb-4 text-center">
              How Fast Does This Pay For Itself?
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-6xl font-bold text-zenchef-blue mb-2">
                  {COST_COMPARISON.roi.dealsToPayback}
                </div>
                <div className="text-lg text-zenchef-gray">
                  deals to payback setup cost
                </div>
                <div className="text-sm text-zenchef-gray mt-2">
                  (€{COST_COMPARISON.roi.setupCost.toLocaleString('en-US')} ÷ €{COST_COMPARISON.roi.avgTCV.toLocaleString('en-US')} TCV)
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-green-600 mb-2">
                  €{COST_COMPARISON.roi.extraDealPerMonth.netGain.toLocaleString('en-US')}
                </div>
                <div className="text-lg text-zenchef-gray">
                  net gain per year
                </div>
                <div className="text-sm text-zenchef-gray mt-2">
                  if 1 extra deal/month (12 × €{COST_COMPARISON.roi.avgTCV.toLocaleString('en-US')} - €{COST_COMPARISON.roi.extraDealPerMonth.cost.toLocaleString('en-US')})
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-2xl text-zenchef-gray max-w-3xl mx-auto">
            The foundation we built together is strong.
          </p>
          <p className="text-2xl font-bold text-zenchef-blue mt-2">
            This is the automation layer that makes it unstoppable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
