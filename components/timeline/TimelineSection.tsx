'use client';

import React from 'react';
import { motion } from 'framer-motion';

const weeks = [
  {
    week: 'Week 1',
    title: 'Foundation',
    tasks: ['Schema', 'Infra', 'Competitors'],
    milestone: 'Kickoff Call'
  },
  {
    week: 'Week 2',
    title: 'Data Collection',
    tasks: ['SerpAPI', 'Firecrawl', 'Instagram'],
    milestone: 'Progress Demo'
  },
  {
    week: 'Week 3',
    title: 'Salesforce Sync',
    tasks: ['Bi-directional integration', 'Field mapping', 'Customer exclusion']
  },
  {
    week: 'Week 4',
    title: 'Signal Engine',
    tasks: ['6 signal types', 'Personalization hooks', 'LLM integration']
  },
  {
    week: 'Week 5',
    title: 'Claude MCP',
    tasks: ['Chat UI', 'Query tools', 'Campaign staging']
  },
  {
    week: 'Week 6',
    title: 'Launch',
    tasks: ['Full NL run', 'Team training', 'Documentation'],
    milestone: 'Go Live 🚀'
  }
];

export const TimelineSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-zenchef-charcoal mb-4">
            6 Weeks to <span className="text-zenchef-blue">Launch</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-zenchef-blue/20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {weeks.map((week, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < weeks.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-1 bg-zenchef-blue/20 -z-10" />
                )}

                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-zenchef-blue/10 hover:border-zenchef-blue/30 transition-all">
                  <div className="text-sm font-bold text-zenchef-blue mb-2">
                    {week.week}
                  </div>
                  <h3 className="text-lg font-bold text-zenchef-charcoal mb-2">
                    {week.title}
                  </h3>
                  <ul className="text-sm text-zenchef-gray space-y-1 mb-2">
                    {week.tasks.map((task, i) => (
                      <li key={i}>• {task}</li>
                    ))}
                  </ul>
                  {week.milestone && (
                    <div className="text-xs font-semibold text-zenchef-blue mt-2">
                      📅 {week.milestone}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
