'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

interface PasswordProtectionProps {
  children: React.ReactNode;
  password?: string;
}

export const PasswordProtection: React.FC<PasswordProtectionProps> = ({
  children,
  password = 'Zenchef2026' // Default password, change this!
}) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if already unlocked in session storage
    const unlocked = sessionStorage.getItem('zenchef-unlocked');
    if (unlocked === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputPassword === password) {
      setIsUnlocked(true);
      sessionStorage.setItem('zenchef-unlocked', 'true');
      setError('');
    } else {
      setError('Incorrect password');
      setInputPassword('');
    }
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zenchef-blue to-zenchef-blue-light flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-zenchef-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-zenchef-blue" />
          </div>
          <h1 className="text-3xl font-bold text-zenchef-charcoal mb-2">
            Protected Content
          </h1>
          <p className="text-zenchef-gray">
            Enter the password to view this page
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-xl border-2 border-zenchef-blue/20 focus:border-zenchef-blue focus:outline-none transition-colors text-zenchef-charcoal"
              autoFocus
            />
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-2"
              >
                {error}
              </motion.p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-zenchef-blue hover:bg-zenchef-blue-light text-white font-semibold py-3 rounded-xl transition-all hover:scale-105"
          >
            Unlock
          </button>
        </form>

        <p className="text-xs text-zenchef-gray text-center mt-6">
          Password is valid for this session only
        </p>
      </motion.div>
    </div>
  );
};
