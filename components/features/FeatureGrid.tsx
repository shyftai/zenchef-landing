'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, RefreshCw, Target, MessageSquare, Zap, BarChart } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const features = [
  {
    icon: Search,
    title: 'Smart Prospecting',
    description: '22,000+ restaurants across 342 Dutch municipalities. Updated monthly.',
    bgColor: 'bg-zenchef-blue/10',
    iconColor: 'text-zenchef-blue'
  },
  {
    icon: RefreshCw,
    title: 'Competitor Intel',
    description: 'Detect 200+ booking systems. Know who\'s using TheFork, Formitable, Resengo.',
    bgColor: 'bg-zenchef-blue-light/10',
    iconColor: 'text-zenchef-blue-light'
  },
  {
    icon: Target,
    title: 'AI Personalization',
    description: 'Every outreach gets context: nearby customers, recent achievements, growth signals.',
    bgColor: 'bg-zenchef-blue/10',
    iconColor: 'text-zenchef-blue'
  },
  {
    icon: MessageSquare,
    title: 'Conversational UI',
    description: 'Ask questions in plain language. No dashboards to learn.',
    bgColor: 'bg-zenchef-blue-light/10',
    iconColor: 'text-zenchef-blue-light'
  },
  {
    icon: Zap,
    title: 'Salesforce Sync',
    description: 'Bi-directional. Customers auto-excluded. Pipeline always current.',
    bgColor: 'bg-zenchef-blue/10',
    iconColor: 'text-zenchef-blue'
  },
  {
    icon: BarChart,
    title: 'Capacity Planning',
    description: '"I need 30 demos" → Instant recommendations with conversion math.',
    bgColor: 'bg-zenchef-blue-light/10',
    iconColor: 'text-zenchef-blue-light'
  }
];

export const FeatureGrid: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-zenchef-charcoal mb-4">
            Everything You Need to <span className="text-zenchef-blue">Own the Netherlands Market</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-transparent hover:border-zenchef-blue/20">
                <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-zenchef-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-zenchef-gray leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
