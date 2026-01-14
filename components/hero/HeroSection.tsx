'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { SignalFeed } from './SignalFeed';
import { STATS } from '@/lib/constants';
import { ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-zenchef-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-zenchef-blue-light/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="block text-zenchef-charcoal uppercase tracking-tight">
                YOUR SALES INTELLIGENCE
              </span>
              <span className="block text-zenchef-blue italic lowercase mt-2">
                cockpit
              </span>
              <span className="block text-zenchef-charcoal uppercase tracking-tight mt-2">
                FOR THE NETHERLANDS
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-zenchef-gray leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Stop manually hunting for leads. Start having conversations with your data.
              AI-powered market intelligence that tells you exactly who to call and why.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button onClick={scrollToDemo} className="group">
                See How It Works
                <ArrowDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Animated signal feed */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-zenchef-blue/10">
              <div className="mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="ml-4 text-sm font-medium text-zenchef-charcoal">
                  Live Signal Feed
                </span>
              </div>
              <SignalFeed />
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
            <div className="text-4xl font-bold text-zenchef-blue">
              {STATS.restaurants}
            </div>
            <div className="text-sm text-zenchef-gray mt-2">
              Restaurants Tracked
            </div>
          </div>
          <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
            <div className="text-4xl font-bold text-zenchef-blue">
              {STATS.municipalities}
            </div>
            <div className="text-sm text-zenchef-gray mt-2">
              Municipalities Covered
            </div>
          </div>
          <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
            <div className="text-4xl font-bold text-zenchef-blue">
              {STATS.competitors}
            </div>
            <div className="text-sm text-zenchef-gray mt-2">
              Competitor Systems Detected
            </div>
          </div>
          <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
            <div className="text-4xl font-bold text-zenchef-blue">
              {STATS.prospects}
            </div>
            <div className="text-sm text-zenchef-gray mt-2">
              High-Value Prospects
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
