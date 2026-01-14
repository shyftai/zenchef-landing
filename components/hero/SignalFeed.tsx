'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DEMO_SIGNALS } from '@/lib/constants';

export const SignalFeed: React.FC = () => {
  const [visibleSignals, setVisibleSignals] = useState<typeof DEMO_SIGNALS>([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < DEMO_SIGNALS.length) {
        setVisibleSignals(prev => [...prev, DEMO_SIGNALS[index]]);
        index++;
      } else {
        // Reset and restart
        index = 0;
        setVisibleSignals([]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getColorClass = (color?: string) => {
    switch (color) {
      case 'orange':
        return 'bg-zenchef-blue-light/10 border-zenchef-blue-light/30';
      case 'green':
        return 'bg-green-50 border-green-200';
      case 'blue':
        return 'bg-zenchef-blue/10 border-zenchef-blue/30';
      case 'gold':
        return 'bg-yellow-50 border-yellow-200';
      case 'red':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-zenchef-blue-light/10 border-zenchef-blue-light/30';
    }
  };

  return (
    <div className="relative h-full flex flex-col gap-3 overflow-hidden">
      <AnimatePresence mode="popLayout">
        {visibleSignals.filter(signal => signal != null).map((signal, index) => (
          <motion.div
            key={signal.id}
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.8 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
              delay: 0
            }}
            className={`${getColorClass(signal?.color)} border-2 rounded-xl p-4 backdrop-blur-sm`}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{signal?.icon || '📍'}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-zenchef-charcoal">
                      {signal?.title || 'Signal'}
                    </p>
                    <p className="text-sm text-zenchef-gray mt-1">
                      {signal?.restaurant || 'Restaurant'}, {signal?.city || 'City'}
                    </p>
                    {signal?.detail && (
                      <p className="text-xs text-zenchef-blue font-medium mt-1">
                        {signal.detail}
                      </p>
                    )}
                  </div>
                  <span className="text-xs text-zenchef-gray whitespace-nowrap">
                    {signal?.time || 'now'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
