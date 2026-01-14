// Demo data for the landing page

export const DEMO_SIGNALS = [
  {
    id: 1,
    type: 'competitor',
    icon: '🔄',
    title: 'TheFork detected',
    restaurant: 'Restaurant Vermeer',
    city: 'Amsterdam',
    time: '2 min ago',
    color: 'orange'
  },
  {
    id: 2,
    type: 'new',
    icon: '🆕',
    title: 'New restaurant',
    restaurant: 'Bistro Julien',
    city: 'Rotterdam',
    time: '5 min ago',
    color: 'green'
  },
  {
    id: 3,
    type: 'growth',
    icon: '📈',
    title: 'Growth signal',
    restaurant: 'De Plantage',
    city: 'Utrecht',
    detail: '+34% reviews',
    time: '12 min ago',
    color: 'blue'
  },
  {
    id: 4,
    type: 'premium',
    icon: '⭐',
    title: 'Premium prospect',
    restaurant: 'Gastrobar Eendracht',
    city: 'Amsterdam',
    detail: '4.9 rating, 180 reviews',
    time: '18 min ago',
    color: 'gold'
  },
  {
    id: 5,
    type: 'unhappy',
    icon: '😤',
    title: 'Unhappy competitor user',
    restaurant: 'Brasserie Central',
    city: 'Den Haag',
    detail: '2.1★ TheFork reviews',
    time: '25 min ago',
    color: 'red'
  }
];

export const DEMO_CONVERSATIONS = {
  weekly: {
    prompt: "What signals came in this week?",
    response: `Here's your signal summary for this week:

📊 **47 new signals detected**

By type:
• 🔄 12 Competitor switches (TheFork: 8, Formitable: 3, Resengo: 1)
• 🆕 8 New restaurants opened
• 📈 15 Growth signals (avg +28% review increase)
• ⭐ 7 Premium prospects (4.5+ rating, no system)
• 😤 5 Unhappy competitor users

**Top opportunity:** Restaurant De Lindenhof, Amsterdam
→ 4.8 rating, 220 reviews, currently on TheFork
→ 3 negative reviews mention "booking fees"
→ Nearby customer: Café Modern (0.6km) uses Zenchef

Want me to show details on any category?`
  },
  capacity: {
    prompt: "I need 25 demos for next month",
    response: `To hit 25 demos with your typical 15% conversion rate, I recommend reaching out to ~165 leads.

**🎯 Tier 1: High Priority (45 leads)**
• 18 competitor switchers (TheFork with bad reviews)
• 15 premium prospects (4.5+ rating, 100+ reviews)
• 12 growth signals (fastest growing this month)

Expected demos: 12-15

**📍 Tier 2: Strong Potential (60 leads)**
• 25 new restaurants (opened last 60 days)
• 35 established prospects (4.0+ rating)

Expected demos: 8-10

**🌱 Tier 3: Nurture (60 leads)**
• Long-term prospects for pipeline building

Expected demos: 3-5

Ready to stage these leads with personalized hooks?`
  },
  filtered: {
    prompt: "Show me TheFork restaurants in Amsterdam rating > 4.3",
    response: `Found **23 restaurants** matching your criteria:

**1. Restaurant Vermeer** ⭐ 4.7 (312 reviews)
📍 Prins Hendrikkade, Amsterdam Centrum
🔄 TheFork detected, booking widget on homepage
📈 +18% reviews last 3 months
💡 Hook: Nearby customer "Café de Klos" (0.4km)

**2. De Kas** ⭐ 4.6 (445 reviews)
📍 Kamerlingh Onneslaan, Amsterdam Oost
🔄 TheFork Pro integration detected
😤 2 reviews mention "commission fees"
💡 Hook: They follow @zaborrestaurant (Zenchef customer)

**3. Rijsel** ⭐ 4.5 (289 reviews)
📍 Marcusstraat, Amsterdam Oost
🔄 TheFork detected
📈 +22% reviews last 3 months

[... showing 3 of 23]

Stage all 23 for competitor-switch campaign?`
  }
};

export const STATS = {
  restaurants: '22,000+',
  municipalities: '342',
  competitors: '200+',
  prospects: '4,500+'
};

export const PRICING = {
  standard: 24700,
  partner: 7500,
  hourlyRate: 95,
  hours: 260,
  discount: 70
};

export const MONTHLY_COSTS = [
  { name: 'Self-hosted Mistral (GPU VPS)', cost: 115, note: 'Unlimited prompts, full data sovereignty' },
  { name: 'SerpAPI', cost: 105, note: 'Google Maps data' },
  { name: 'Firecrawl', cost: 85, note: 'Website scraping' },
  { name: 'Supabase (EU)', cost: 40, note: 'Database, real-time sync' },
  { name: 'N8N', cost: 0, note: 'Already owned' },
  { name: 'Lemlist', cost: 0, note: 'Already owned' },
  { name: 'Modjo', cost: 0, note: 'Already owned' }
];

// TAM Coverage Data (V3)
export const TAM_DATA = {
  totalRestaurants: 22000,
  municipalities: 342,
  coverage: 100,
  highValue: {
    restaurants: 4500,
    label: 'High-Value Segment',
    description: 'Score 80+ Pre-qualified prospects',
    initialCost: 150,
    monthlyCost: 75,
    bestFor: 'Focused outreach, quick wins, SDR capacity',
    features: [
      'Pre-qualified prospects',
      'Higher conversion rates',
      'Major cities focus',
      'Active online presence'
    ]
  },
  fullMarket: {
    restaurants: 22000,
    label: 'Full Market',
    description: 'Complete TAM coverage',
    initialCost: 650,
    monthlyCost: 200,
    bestFor: 'Market domination, competitive intel, long-term',
    features: [
      'Complete TAM coverage',
      'Every municipality',
      'Full competitor mapping',
      'Historical trend data',
      'Score ANY segment later'
    ]
  },
  recommendation: 'Start with Full Market. The marginal cost is low, and you get complete competitive intelligence + can segment later. Your 4,500 high-scorers are already tagged and ready to filter.'
};

export const SCRAPING_COSTS = {
  initial: {
    highValue: [
      { name: 'Google Business Data (SerpAPI)', cost: 65 },
      { name: 'Website Tech Detection (Firecrawl)', cost: 25 },
      { name: 'Instagram Enrichment', cost: 40 },
      { name: 'Processing & Storage', cost: 20 }
    ],
    highValueTotal: 150,
    fullMarket: [
      { name: 'Google Business Data (SerpAPI)', cost: 320 },
      { name: 'Website Tech Detection (Firecrawl)', cost: 110 },
      { name: 'Instagram Enrichment', cost: 160 },
      { name: 'Processing & Storage', cost: 60 }
    ],
    fullMarketTotal: 650
  },
  monthly: {
    highValue: [
      { name: 'Delta updates only (changed listings)', cost: 45 },
      { name: 'New restaurant detection', cost: 15 },
      { name: 'Competitor re-scan', cost: 15 }
    ],
    highValueTotal: 75,
    fullMarket: [
      { name: 'Delta updates only (changed listings)', cost: 130 },
      { name: 'New restaurant detection', cost: 40 },
      { name: 'Competitor re-scan', cost: 30 }
    ],
    fullMarketTotal: 200
  }
};

export const NETHERLANDS_CITIES = [
  { name: 'Amsterdam', lat: 52.3676, lng: 4.9041, restaurants: 3200 },
  { name: 'Rotterdam', lat: 51.9225, lng: 4.47917, restaurants: 1800 },
  { name: 'Den Haag', lat: 52.0705, lng: 4.3007, restaurants: 1500 },
  { name: 'Utrecht', lat: 52.0907, lng: 5.1214, restaurants: 1200 },
  { name: 'Eindhoven', lat: 51.4416, lng: 5.4697, restaurants: 900 }
];

export const FAQS = [
  {
    question: "How is this different from Clay?",
    answer: "Clay is a general-purpose data tool. This is purpose-built for Zenchef's Netherlands expansion—with your Salesforce fields, your Lemlist campaigns, and a conversational interface designed for your sales team."
  },
  {
    question: "What happens after the 6 weeks?",
    answer: "You own everything. The system runs on your accounts (Supabase, N8N, etc.). We include 30 days of post-launch support and full documentation. Optional: ongoing support packages available."
  },
  {
    question: "Can we expand to Belgium/Germany later?",
    answer: "Yes. The architecture is built to scale. Adding new markets means configuring new data sources and municipality lists—not rebuilding."
  },
  {
    question: "What if our Salesforce structure changes?",
    answer: "The Salesforce sync is configurable. Field mappings can be updated without rebuilding the system."
  },
  {
    question: "Who controls when campaigns launch?",
    answer: "You do. Always. Leads are staged with personalization, but nothing goes to Lemlist without human approval."
  }
];

// V3: Clay Credits Saved
export const CLAY_CREDITS_SAVED = {
  wonAccounts: { cuisineType: 2300, total: 2300 },
  lostAccounts: { restaurantType: 1200, cuisineType: 2300, priceLevel: 1200, total: 4700 },
  tam: { activeCheck: 23000, restaurantType: 23000, cuisineType: 23000, priceLevel: 23000, contactEnrichment: 46000, total: 138000 },
  grandTotal: 145000
};

// V4: Cost Comparison
export const COST_COMPARISON = {
  currentClay: {
    label: 'Current Clay Stack',
    annual: 10000,
    breakdown: [
      { item: 'Clay subscription (977K credits/year)', cost: 10000 }
    ],
    notes: [
      'Per-enrichment billing',
      'Credits burned every query',
      'Unpredictable scaling costs'
    ]
  },
  proposedStack: {
    label: 'Proposed Cockpit Stack',
    monthly: 345,
    annual: 4140,
    breakdown: [
      { item: 'Self-hosted Mistral (GPU VPS)', cost: 115, note: 'Unlimited prompts' },
      { item: 'SerpAPI', cost: 105, note: 'Google Maps data' },
      { item: 'Firecrawl', cost: 85, note: 'Website scraping' },
      { item: 'Supabase (EU)', cost: 40, note: 'Database + sync' }
    ],
    notes: [
      'Flat monthly cost',
      'Unlimited AI queries',
      'Predictable scaling'
    ]
  },
  savings: {
    annual: 5860,
    percentage: 59
  },
  roi: {
    setupCost: 7500,
    avgTCV: 1500,
    dealsToPayback: 5,
    extraDealPerMonth: {
      revenue: 18000,
      cost: 4140,
      netGain: 13860
    }
  }
};

// V4: Existing Infrastructure
export const EXISTING_INFRASTRUCTURE = [
  {
    tool: 'N8N',
    status: 'Already implemented',
    savings: 2400,
    note: 'Custom workflows, no Zapier fees'
  },
  {
    tool: 'Modjo',
    status: 'Already in place',
    annualCost: 17820,
    note: 'Call intelligence, deal insights'
  },
  {
    tool: 'Lemlist',
    status: 'Already configured',
    note: 'Multi-channel campaigns ready'
  }
];

// V4: Value Pillars
export const VALUE_PILLARS = [
  {
    icon: '🇪🇺',
    title: 'European Data Sovereignty',
    items: ['Self-hosted Mistral LLM', 'Supabase (EU hosting)', 'Full GDPR compliance', 'No US data transfers']
  },
  {
    icon: '🧠',
    title: 'Self-Learning ICP',
    items: ['Pull wins/losses from Salesforce', 'Auto-update scoring prompt', 'Better predictions over time', 'Dynamic, not static']
  },
  {
    icon: '💰',
    title: '5 Deals to ROI',
    items: ['€7,500 setup ÷ €1,500 TCV = 5 deals', '1 extra deal/month = €13,860 net gain/year', 'Flat monthly cost: €345', 'Scale without bleeding']
  }
];

// V4: Deliverables
export const DELIVERABLES = [
  { tech: '🇫🇷 Self-hosted Mistral LLM (GPU VPS)', benefit: 'Unlimited queries, zero data leaves your infra, full GDPR compliance' },
  { tech: '🗄️ Supabase Database (EU)', benefit: 'You own your data, export anytime, no vendor lock-in' },
  { tech: '🔄 Bi-directional Salesforce Sync', benefit: 'Auto-exclude closed deals, always current pipeline, accurate forecasting' },
  { tech: '📧 Lemlist Integration', benefit: 'Human-in-the-loop, you approve before send, full control' },
  { tech: '💬 Claude MCP Interface', benefit: 'Self-service intelligence, no consultant dependency, ask anything' },
  { tech: '🧠 Dynamic ICP Scoring', benefit: 'Model that learns from every deal, better predictions, compound advantage' }
];

// V3: Today vs Tomorrow Comparison
export const TODAY_VS_TOMORROW = [
  { today: 'Need Daan to update enrichments', tomorrow: 'Self-service: ask Claude anything' },
  { today: 'Manual Salesforce exports/imports', tomorrow: 'Real-time bi-directional sync' },
  { today: 'Closed deals still get contacted', tomorrow: 'Auto-exclude the moment deal closes' },
  { today: 'Static scoring from months ago', tomorrow: 'ICP learns from every win/loss' },
  { today: 'Credits pile up unpredictably', tomorrow: 'Flat monthly cost, unlimited queries' },
  { today: '3 systems, 3 logins, 3 dashboards', tomorrow: 'One conversational interface' },
  { today: 'Forecasting = guesswork', tomorrow: 'Real pipeline intelligence' }
];
