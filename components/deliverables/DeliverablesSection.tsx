'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DELIVERABLES } from '@/lib/constants';
import { ArrowRight, Target } from 'lucide-react';

export const DeliverablesSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-zenchef-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zenchef-charcoal mb-4">
            What You Get
          </h2>
          <p className="text-xl text-zenchef-gray max-w-3xl mx-auto">
            Your European AI stack with complete data ownership and independence
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-zenchef-charcoal mb-6 pb-3 border-b-2 border-zenchef-blue">
              Your European AI Stack
            </h3>
            <div className="space-y-6">
              {DELIVERABLES.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="bg-white p-6 rounded-xl border-l-4 border-zenchef-blue"
                >
                  <div className="font-bold text-zenchef-charcoal mb-2">
                    {item.tech}
                  </div>
                  <div className="text-sm text-zenchef-gray">
                    {item.benefit}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Outcomes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-zenchef-charcoal mb-6 pb-3 border-b-2 border-zenchef-blue">
              What This Means For You
            </h3>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-green-500 p-2 rounded-lg">
                    <span className="text-2xl">✅</span>
                  </div>
                  <div>
                    <div className="font-bold text-zenchef-charcoal mb-2">GDPR Compliant Out of the Box</div>
                    <p className="text-sm text-zenchef-gray">
                      No US data transfers, full audit trail, European hosting for all data processing
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <span className="text-2xl">✅</span>
                  </div>
                  <div>
                    <div className="font-bold text-zenchef-charcoal mb-2">You Own Your Data</div>
                    <p className="text-sm text-zenchef-gray">
                      Export anytime, no vendor lock-in, runs on your infrastructure
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-purple-500 p-2 rounded-lg">
                    <span className="text-2xl">✅</span>
                  </div>
                  <div>
                    <div className="font-bold text-zenchef-charcoal mb-2">Always Current Pipeline</div>
                    <p className="text-sm text-zenchef-gray">
                      Auto-exclude closed deals, accurate forecasting, real-time synchronization
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-200"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-orange-500 p-2 rounded-lg">
                    <span className="text-2xl">✅</span>
                  </div>
                  <div>
                    <div className="font-bold text-zenchef-charcoal mb-2">Human-in-the-Loop</div>
                    <p className="text-sm text-zenchef-gray">
                      You approve before send, full control, zero risk of unwanted outreach
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-xl border border-cyan-200"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-cyan-500 p-2 rounded-lg">
                    <span className="text-2xl">✅</span>
                  </div>
                  <div>
                    <div className="font-bold text-zenchef-charcoal mb-2">Self-Service Intelligence</div>
                    <p className="text-sm text-zenchef-gray">
                      No consultant dependency, ask anything, get answers instantly
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
                className="bg-gradient-to-br from-rose-50 to-red-50 p-6 rounded-xl border border-rose-200"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-rose-500 p-2 rounded-lg">
                    <span className="text-2xl">✅</span>
                  </div>
                  <div>
                    <div className="font-bold text-zenchef-charcoal mb-2">Model That Learns</div>
                    <p className="text-sm text-zenchef-gray">
                      Better predictions over time, compound advantage with every deal closed
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Independence Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-zenchef-blue to-zenchef-blue-light p-8 md:p-12 rounded-2xl text-white"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
              <Target className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">
                The Real Deliverable: Independence
              </h3>
              <p className="text-xl text-white/90 mb-6">
                After 6 weeks, you won&apos;t need Shyft AI for day-to-day operations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 flex-shrink-0 mt-1" />
              <span>Query your entire TAM yourself via Claude</span>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 flex-shrink-0 mt-1" />
              <span>Salesforce syncs automatically—no imports/exports</span>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 flex-shrink-0 mt-1" />
              <span>Closed deals auto-exclude from all campaigns</span>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 flex-shrink-0 mt-1" />
              <span>ICP scoring improves with every deal you close</span>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 flex-shrink-0 mt-1" />
              <span>All data in one place, all systems connected</span>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 flex-shrink-0 mt-1" />
              <span>Complete documentation and handoff</span>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-2xl font-bold">
              We build it. We hand it over. You run it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
