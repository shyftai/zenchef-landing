'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, MapPin, TrendingUp, DollarSign } from 'lucide-react';
import { TAM_DATA, SCRAPING_COSTS, NETHERLANDS_CITIES } from '@/lib/constants';

export const TAMSection: React.FC = () => {
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
            Total Addressable Market
          </h2>
          <p className="text-xl text-zenchef-gray max-w-3xl mx-auto">
            Complete coverage of the Netherlands restaurant market with {TAM_DATA.municipalities} municipalities
          </p>
        </motion.div>

        {/* Market Overview Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-zenchef-cream p-6 rounded-xl text-center">
            <div className="text-4xl font-bold text-zenchef-blue mb-2">
              {TAM_DATA.totalRestaurants.toLocaleString('en-US')}
            </div>
            <div className="text-zenchef-gray">Total Restaurants</div>
          </div>
          <div className="bg-zenchef-cream p-6 rounded-xl text-center">
            <div className="text-4xl font-bold text-zenchef-blue mb-2">
              {TAM_DATA.municipalities}
            </div>
            <div className="text-zenchef-gray">Municipalities Covered</div>
          </div>
          <div className="bg-zenchef-cream p-6 rounded-xl text-center">
            <div className="text-4xl font-bold text-zenchef-blue mb-2">
              {TAM_DATA.coverage}%
            </div>
            <div className="text-zenchef-gray">Market Coverage</div>
          </div>
        </motion.div>

        {/* Map and Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Netherlands Map Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-zenchef-cream p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-zenchef-charcoal mb-6">
              Geographic Distribution
            </h3>

            {/* Simplified Netherlands Map with City Markers */}
            <div className="relative aspect-[3/4] bg-white rounded-xl p-8 mb-6">
              {/* Map outline (simplified Netherlands shape) */}
              <svg viewBox="0 0 300 400" className="w-full h-full">
                {/* Simplified Netherlands border */}
                <path
                  d="M150,50 L180,60 L200,80 L210,120 L200,180 L190,240 L180,300 L160,360 L140,380 L120,360 L100,300 L90,240 L80,180 L90,120 L100,80 L120,60 Z"
                  fill="#F5F0EB"
                  stroke="#4A5AD8"
                  strokeWidth="2"
                />

                {/* City markers with animation */}
                {NETHERLANDS_CITIES.map((city, index) => {
                  // Map lat/lng to SVG coordinates (simplified projection)
                  const x = ((city.lng - 3.5) / 3.5) * 150 + 75;
                  const y = ((53.5 - city.lat) / 3.5) * 300 + 50;

                  return (
                    <g key={city.name}>
                      {/* Pulsing circle animation */}
                      <motion.circle
                        cx={x}
                        cy={y}
                        r="8"
                        fill="#4A5AD8"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      />
                      <motion.circle
                        cx={x}
                        cy={y}
                        r="12"
                        fill="none"
                        stroke="#4A5AD8"
                        strokeWidth="2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      />
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* City List */}
            <div className="space-y-3">
              {NETHERLANDS_CITIES.map((city, index) => (
                <motion.div
                  key={city.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="flex items-center justify-between p-3 bg-white rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-zenchef-blue" />
                    <span className="font-semibold text-zenchef-charcoal">
                      {city.name}
                    </span>
                  </div>
                  <span className="text-zenchef-gray">
                    {city.restaurants.toLocaleString('en-US')} restaurants
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coverage Options */}
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-zenchef-charcoal mb-2">
                Choose Your Coverage
              </h3>
            </div>

            {/* High-Value Segment */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl border-2 border-zenchef-border-light"
            >
              <div className="mb-6">
                <div className="text-sm font-semibold text-zenchef-blue uppercase tracking-wide mb-2">
                  🎯 High-Value Segment
                </div>
                <h3 className="text-3xl font-bold text-zenchef-charcoal mb-2">
                  {TAM_DATA.highValue.restaurants.toLocaleString('en-US')} Restaurants
                </h3>
                <p className="text-zenchef-gray">
                  {TAM_DATA.highValue.description}
                </p>
              </div>

              <div className="mb-6 pb-6 border-b border-zenchef-border-light">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl font-bold text-zenchef-charcoal">€{TAM_DATA.highValue.initialCost}</span>
                  <span className="text-zenchef-gray text-sm">initial scrape</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-zenchef-charcoal">€{TAM_DATA.highValue.monthlyCost}</span>
                  <span className="text-zenchef-gray text-sm">monthly refresh</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {TAM_DATA.highValue.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-zenchef-blue flex-shrink-0 mt-0.5" />
                    <span className="text-zenchef-charcoal">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-zenchef-cream p-4 rounded-lg">
                <div className="text-sm font-semibold text-zenchef-charcoal mb-1">
                  Best for:
                </div>
                <div className="text-sm text-zenchef-gray">
                  {TAM_DATA.highValue.bestFor}
                </div>
              </div>
            </motion.div>

            {/* Full Market */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-zenchef-blue to-zenchef-blue-light p-8 rounded-2xl text-white relative overflow-hidden"
            >
              {/* RECOMMENDED Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-sm font-bold uppercase tracking-wide">
                    Recommended
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-sm font-semibold text-white/80 uppercase tracking-wide mb-2">
                  🌍 Full Market
                </div>
                <h3 className="text-3xl font-bold mb-2">
                  {TAM_DATA.fullMarket.restaurants.toLocaleString('en-US')}+ All Restaurants
                </h3>
                <p className="text-white/90">
                  {TAM_DATA.fullMarket.description}
                </p>
              </div>

              <div className="mb-6 pb-6 border-b border-white/20">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl font-bold">€{TAM_DATA.fullMarket.initialCost}</span>
                  <span className="text-white/90 text-sm">initial scrape</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">€{TAM_DATA.fullMarket.monthlyCost}</span>
                  <span className="text-white/90 text-sm">monthly refresh</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {TAM_DATA.fullMarket.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-sm font-semibold mb-1">
                  Best for:
                </div>
                <div className="text-sm text-white/90">
                  {TAM_DATA.fullMarket.bestFor}
                </div>
              </div>
            </motion.div>

            {/* Recommendation Callout */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-blue-50 border-2 border-zenchef-blue/20 p-6 rounded-xl"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <div className="font-semibold text-zenchef-charcoal mb-2">
                    Recommendation
                  </div>
                  <p className="text-zenchef-gray text-sm leading-relaxed">
                    {TAM_DATA.recommendation}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Cost Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-zenchef-cream p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-zenchef-charcoal mb-6 flex items-center gap-3">
            <DollarSign className="w-6 h-6 text-zenchef-blue" />
            Data Collection Cost Breakdown
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Initial Scrape - High Value */}
            <div>
              <h4 className="font-semibold text-zenchef-charcoal mb-2 flex items-center gap-2">
                🎯 High-Value Segment
              </h4>
              <p className="text-sm text-zenchef-gray mb-4">Initial Data Collection</p>
              <div className="space-y-2">
                {SCRAPING_COSTS.initial.highValue.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <div className="text-sm text-zenchef-charcoal">
                      {item.name}
                    </div>
                    <div className="text-zenchef-blue font-semibold">
                      €{item.cost}
                    </div>
                  </div>
                ))}
                <div className="flex justify-between items-center p-3 bg-zenchef-blue text-white rounded-lg font-bold">
                  <span>Total</span>
                  <span>€{SCRAPING_COSTS.initial.highValueTotal}</span>
                </div>
              </div>

              <p className="text-sm text-zenchef-gray mt-4 mb-2">Monthly Refresh</p>
              <div className="space-y-2">
                {SCRAPING_COSTS.monthly.highValue.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <div className="text-sm text-zenchef-charcoal">
                      {item.name}
                    </div>
                    <div className="text-zenchef-blue font-semibold">
                      €{item.cost}
                    </div>
                  </div>
                ))}
                <div className="flex justify-between items-center p-3 bg-zenchef-blue text-white rounded-lg font-bold">
                  <span>Total</span>
                  <span>€{SCRAPING_COSTS.monthly.highValueTotal}</span>
                </div>
              </div>
            </div>

            {/* Full Market */}
            <div>
              <h4 className="font-semibold text-zenchef-charcoal mb-2 flex items-center gap-2">
                🌍 Full Market
              </h4>
              <p className="text-sm text-zenchef-gray mb-4">Initial Data Collection</p>
              <div className="space-y-2">
                {SCRAPING_COSTS.initial.fullMarket.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <div className="text-sm text-zenchef-charcoal">
                      {item.name}
                    </div>
                    <div className="text-zenchef-blue font-semibold">
                      €{item.cost}
                    </div>
                  </div>
                ))}
                <div className="flex justify-between items-center p-3 bg-zenchef-blue text-white rounded-lg font-bold">
                  <span>Total</span>
                  <span>€{SCRAPING_COSTS.initial.fullMarketTotal}</span>
                </div>
              </div>

              <p className="text-sm text-zenchef-gray mt-4 mb-2">Monthly Refresh</p>
              <div className="space-y-2">
                {SCRAPING_COSTS.monthly.fullMarket.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <div className="text-sm text-zenchef-charcoal">
                      {item.name}
                    </div>
                    <div className="text-zenchef-blue font-semibold">
                      €{item.cost}
                    </div>
                  </div>
                ))}
                <div className="flex justify-between items-center p-3 bg-zenchef-blue text-white rounded-lg font-bold">
                  <span>Total</span>
                  <span>€{SCRAPING_COSTS.monthly.fullMarketTotal}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Comparison Note */}
          <div className="mt-6 p-4 bg-white rounded-lg border border-zenchef-border-light">
            <p className="text-sm text-zenchef-gray">
              💡 <strong>The €500 difference pays for itself with ONE converted restaurant.</strong> Full Market gives you complete competitive intelligence and the ability to segment any way you want, anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
