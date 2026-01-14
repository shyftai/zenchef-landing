'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { FileDown, Calendar } from 'lucide-react';

export const CTAFooter: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-zenchef-blue to-zenchef-blue-light">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to stop hunting and start closing?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            15-minute call. No commitment. Let&apos;s see if this fits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="primary" className="bg-white text-zenchef-blue hover:bg-zenchef-cream">
              <Calendar className="inline-block w-5 h-5 mr-2" />
              Schedule a Call
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-zenchef-blue">
              <FileDown className="inline-block w-5 h-5 mr-2" />
              Download Proposal PDF
            </Button>
          </div>

          {/* Footer branding */}
          <div className="border-t border-white/20 pt-8">
            <div className="text-white/80 text-sm mb-2">
              Built by
            </div>
            <div className="text-2xl font-bold text-white mb-2">
              Shyft AI
            </div>
            <div className="text-white/60 text-sm">
              GTM Engineering for Revenue Teams
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
