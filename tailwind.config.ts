import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New Zenchef Brand Colors (V2)
        'zenchef-blue': '#4A5AD8',
        'zenchef-blue-dark': '#3D4BC4',
        'zenchef-blue-light': '#6B79E5',
        'zenchef-cream': '#F5F0EB',
        'zenchef-cream-light': '#FAF7F4',
        'zenchef-white': '#FFFFFF',
        'zenchef-charcoal': '#1A1A1A',
        'zenchef-gray': '#6B6B6B',
        'zenchef-gray-light': '#9CA3AF',
        'zenchef-success': '#22C55E',
        'zenchef-warning': '#F59E0B',
        'zenchef-error': '#EF4444',
        'zenchef-border-light': '#E5E7EB',
        'zenchef-border-medium': '#D1D5DB',

        // Legacy colors (keep for compatibility during migration)
        'zenchef-olive': '#4A5D23',
        'zenchef-matcha': '#7B9E42',
        'zenchef-blue-cheese': '#2D4A6F',
        'zenchef-warm-gray': '#6B6B6B',
        'zenchef-terracotta': '#C4703D',
        'zenchef-sage': '#9CAF88',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
