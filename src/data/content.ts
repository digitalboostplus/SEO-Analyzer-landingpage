export type Grade = 'A+' | 'A' | 'A-' | 'B+' | 'B' | 'B-' | 'C+' | 'C' | 'C-' | 'D' | 'F';

export interface CategoryMetric {
  name: string;
  score: number;
  grade: Grade;
  description: string;
  highlights: string[];
}

export const defaultCategoryMetrics: CategoryMetric[] = [
  {
    name: 'On-Page SEO',
    score: 82,
    grade: 'B+',
    description:
      'Evaluates page titles, meta descriptions, structured data, and keyword usage to ensure search engines understand your content.',
    highlights: [
      'Optimize long titles and add missing meta descriptions.',
      'Introduce structured data for products and FAQs.',
      'Audit duplicate content and internal link depth.',
    ],
  },
  {
    name: 'Performance',
    score: 74,
    grade: 'B',
    description:
      'Measures Core Web Vitals, asset optimization, and server responsiveness for a fast user experience.',
    highlights: [
      'Compress hero imagery and leverage next-gen formats.',
      'Bundle and minify render-blocking CSS and JavaScript.',
      'Monitor LCP and server TTFB during peak hours.',
    ],
  },
  {
    name: 'Links',
    score: 68,
    grade: 'C+',
    description:
      'Analyzes backlink profile quality, internal link health, and anchor text distribution.',
    highlights: [
      'Prioritize outreach for authoritative backlinks.',
      'Fix broken outbound links and monitor redirects.',
      'Diversify anchor text across cornerstone pages.',
    ],
  },
  {
    name: 'Usability',
    score: 88,
    grade: 'A-',
    description:
      'Reviews mobile responsiveness, accessibility basics, and navigational clarity.',
    highlights: [
      'Improve color contrast on secondary buttons.',
      'Audit focus states for interactive components.',
      'Streamline navigation labels for mobile menus.',
    ],
  },
  {
    name: 'Social',
    score: 63,
    grade: 'C',
    description:
      'Checks social metadata, profile linkage, and shareability indicators.',
    highlights: [
      'Add Open Graph and Twitter card variations for key pages.',
      'Link verified social profiles from the footer and header.',
      'Embed testimonial highlights to encourage sharing.',
    ],
  },
];

export interface RequirementItem {
  title: string;
  items: string[];
}

export const categoryRequirements: Record<string, RequirementItem[]> = {
  'On-Page SEO': [
    {
      title: 'Content Fundamentals',
      items: [
        'Title tag presence, length, and uniqueness.',
        'Meta description coverage and optimization.',
        'Header hierarchy validation (H1/H2).',
        'Keyword placement when provided.',
      ],
    },
    {
      title: 'Technical Hygiene',
      items: [
        'Canonical tag usage and robots.txt crawl directives.',
        'Sitemap.xml discovery and freshness.',
        'Structured data coverage for Schema.org types.',
        'Duplicate content and internal broken links.',
      ],
    },
  ],
  Performance: [
    {
      title: 'Speed & Stability',
      items: [
        'Page load speed across desktop and mobile.',
        'Core Web Vitals (LCP, FID, CLS) baseline.',
        'Server response time and caching strategy.',
        'Total page weight and request consolidation.',
      ],
    },
    {
      title: 'Optimization',
      items: [
        'Minification status for CSS and JavaScript.',
        'Lazy-loading and compression of imagery.',
        'Detection of render-blocking assets.',
        'Third-party script impact analysis.',
      ],
    },
  ],
  Links: [
    {
      title: 'Backlink Intelligence',
      items: [
        'Referring domain count and authority trends.',
        'Nofollow vs dofollow distribution.',
        'Anchor text diversity and topical relevance.',
        'Toxic or spam backlink detection.',
      ],
    },
    {
      title: 'Internal Signals',
      items: [
        'Internal link density by content depth.',
        'Broken external links and redirect loops.',
        'Priority page crawl depth.',
        'Silo structure recommendations.',
      ],
    },
  ],
  Usability: [
    {
      title: 'Experience',
      items: [
        'Responsive layout and viewport configuration.',
        'Navigation clarity and hierarchy.',
        'Accessibility basics: alt text, contrast, focus states.',
        'Custom 404 page and error handling.',
      ],
    },
    {
      title: 'Compatibility',
      items: [
        'Modern browser support and legacy fallbacks.',
        'Mobile gestures and touch target sizing.',
        'Use of outdated technologies (Flash/iframes).',
        'Localization readiness for copy and layouts.',
      ],
    },
  ],
  Social: [
    {
      title: 'Metadata & Presence',
      items: [
        'Open Graph, Twitter Card, and schema markup.',
        'Linked social profiles with verification cues.',
        'Share count discovery when accessible.',
        'Author and organization schema usage.',
      ],
    },
    {
      title: 'Engagement',
      items: [
        'Shareable content widgets and CTAs.',
        'Embedded social feeds or testimonials.',
        'UTM tracking on outbound social links.',
        'Monitoring of social signal trends.',
      ],
    },
  ],
};

export interface RoadmapPhase {
  phase: string;
  focus: string;
  items: string[];
}

export const roadmap: RoadmapPhase[] = [
  {
    phase: 'Phase 1 – MVP',
    focus: 'Launch core auditing workflows and grading.',
    items: [
      'URL intake form with optional keyword targeting.',
      'Run baseline checks for each SEO category.',
      'Generate web report and downloadable PDF.',
      'Admin control over grade thresholds.',
    ],
  },
  {
    phase: 'Phase 2 – Growth',
    focus: 'Expand coverage, integrations, and branding.',
    items: [
      'Full library of category checks with weight configuration.',
      'White-label customization for agencies.',
      'Embed widget for lead capture and CRM push.',
      'API endpoint and scheduled audit automation.',
    ],
  },
  {
    phase: 'Phase 3 – Scale',
    focus: 'Serve large teams, localization, and advanced insights.',
    items: [
      'Bulk audit queue with progress tracking.',
      'Advanced backlink intelligence via partner APIs.',
      'Multi-tenant management and localization.',
      'Additional categories such as Security and Content Quality.',
    ],
  },
];

export interface UseCase {
  title: string;
  persona: string;
  goal: string;
  outcome: string;
}

export const useCases: UseCase[] = [
  {
    title: 'Website Owner Quick Audit',
    persona: 'Small-business owner',
    goal: 'Needs a fast health check with clear next steps.',
    outcome:
      'Delivers an instant snapshot with grades and prioritized recommendations that non-technical owners can execute or delegate.',
  },
  {
    title: 'Agency White-Label Report',
    persona: 'Digital agency',
    goal: 'Wants to impress prospects with branded reports.',
    outcome:
      'Embeddable widget captures lead info and produces agency-branded PDFs that drive sales conversations.',
  },
  {
    title: 'Automation & CRM Integration',
    persona: 'Automation agency owner',
    goal: 'Integrate audits into lead workflows automatically.',
    outcome:
      'API triggers audits on lead capture, returning structured data for CRM follow-up and nurturing.',
  },
  {
    title: 'Audit Trend Monitoring',
    persona: 'Marketing manager',
    goal: 'Track progress across recurring audits.',
    outcome:
      'Scheduled reports visualize improvement trends, showcasing ROI to stakeholders.',
  },
];

export const gradeLegend = [
  { label: 'A (90-100)', description: 'Outstanding SEO health with minor refinements remaining.' },
  { label: 'B (80-89)', description: 'Strong foundation with a few optimizations required.' },
  { label: 'C (70-79)', description: 'Notable gaps that should be addressed soon.' },
  { label: 'D (60-69)', description: 'Significant issues harming visibility and conversions.' },
  { label: 'F (<60)', description: 'Critical problems preventing search performance.' },
];

export const metrics = [
  { label: 'Adoption', value: 'Audits per month & active tenants.' },
  { label: 'Lead Generation', value: 'Widget conversions and CRM follow-ups.' },
  { label: 'Performance', value: 'Percentage of audits delivered under 60 seconds.' },
  { label: 'Reliability', value: 'Uptime, error rate, and failed crawl logging.' },
  { label: 'Customer Value', value: 'Grade improvements and NPS feedback.' },
];
