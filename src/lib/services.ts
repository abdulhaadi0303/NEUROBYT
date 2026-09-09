import {
  BrainCircuit,
  Cloud,
  Globe,
  Palette,
  Megaphone,
  ShoppingCart,
  Users,
  Workflow,
  Briefcase,
  Calculator,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  icon: LucideIcon;
  summary: string;
  detail: string;
  capabilities: string[];
  idealFor: string[];
  highlights?: { title: string; description: string }[];
};

export const services: Service[] = [
  {
    slug: "website-development",
    name: "Website Development",
    icon: Globe,
    summary: "Marketing sites and web platforms, designed and built in-house.",
    detail:
      "Your website is usually the first real interaction someone has with your business — before a call, before a demo, before they've spoken to a single person on your team. We design and build sites that hold up to that first impression: fast to load, easy to navigate, and structured so search engines and real visitors both understand what you do within seconds. Every project starts with a short discovery phase to understand your audience and goals, then moves into design, development, and a QA pass before launch — no generic templates, no cookie-cutter layouts pretending to be custom work.",
    capabilities: [
      "Custom UI/UX design",
      "Technical & on-page SEO",
      "Next.js, WordPress, or custom stacks",
      "CMS integration & content editing",
      "Performance & Core Web Vitals optimization",
      "Post-launch support & iteration",
    ],
    idealFor: [
      "Businesses replacing an outdated or slow website",
      "Startups that need a credible site before their first sales call",
      "Teams who want to edit content themselves without calling a developer",
    ],
    highlights: [
      {
        title: "Design",
        description:
          "Custom UI design built around your brand — not a templated theme with your logo swapped in. We design in the browser as much as possible so what you approve is close to what actually ships.",
      },
      {
        title: "SEO",
        description:
          "Sites structured for search from the ground up: semantic markup, fast load times, proper metadata, and internal linking baked into the build instead of bolted on afterward.",
      },
      {
        title: "Different Tech Stacks",
        description:
          "We match the stack to the project — Next.js and React for custom, high-performance builds; WordPress or Webflow for content-heavy marketing sites; Shopify for storefronts that need to sell from day one.",
      },
    ],
  },
  {
    slug: "web-app-development",
    name: "Web App Development",
    icon: Workflow,
    summary: "Dashboards and internal tools your team will actually use.",
    detail:
      "Most internal tools fail not because the logic is wrong, but because nobody wants to open them. We build web applications — customer portals, internal dashboards, admin panels, SaaS products — with the same attention to usability that a good consumer app gets, backed by architecture that won't fall over as your data and user count grow. That means thinking through data models, permissions, and edge cases up front, not after the third bug report.",
    capabilities: [
      "SaaS product builds from scratch",
      "Internal tools & operational dashboards",
      "REST & GraphQL API design",
      "Authentication, roles & permissions",
      "Billing & subscription integration",
      "Real-time features (websockets, live updates)",
    ],
    idealFor: [
      "Founders building a SaaS MVP",
      "Operations teams drowning in spreadsheets",
      "Companies that need a customer-facing portal",
    ],
  },
  {
    slug: "custom-software",
    name: "Custom Software",
    icon: Briefcase,
    summary: "Software built around how your business actually runs.",
    detail:
      "Off-the-shelf software is built for the average company — and most businesses aren't average once you look closely at how they actually operate. When a process is genuinely unique to your business, or when three different tools almost do what you need but never quite fit together, custom software closes that gap. We start by mapping your actual workflow, not the idealized version of it, then design and build a system around what really happens day to day.",
    capabilities: [
      "Requirements gathering & systems design",
      "Legacy system modernization",
      "Third-party & internal tool integrations",
      "Database design & data migration",
      "Long-term maintenance & support contracts",
      "Documentation for internal teams",
    ],
    idealFor: [
      "Businesses with a workflow no off-the-shelf tool supports",
      "Companies replacing a fragile, aging internal system",
      "Teams tired of stitching five SaaS tools together with spreadsheets",
    ],
  },
  {
    slug: "ai-automation-tools",
    name: "AI Automation Tools",
    icon: Workflow,
    summary: "Automate the repetitive work eating your team's week.",
    detail:
      "Every business has a handful of tasks that eat hours every week without needing much judgment — data entry, report generation, status updates, follow-up emails, document processing. We find those tasks and automate them with AI-driven workflows that plug into the tools you already use, so your team spends less time on repetitive work and more time on the decisions only a person can make. We're careful to keep humans in the loop wherever a mistake would actually matter.",
    capabilities: [
      "Workflow & process automation",
      "Agentic task pipelines",
      "Tool & API orchestration",
      "Document processing & data extraction",
      "Human-in-the-loop review steps",
      "Automation monitoring & alerting",
    ],
    idealFor: [
      "Teams doing the same manual task dozens of times a week",
      "Businesses drowning in data entry or document review",
      "Companies wanting AI in their workflow without giving up oversight",
    ],
  },
  {
    slug: "ai-data-solutions",
    name: "AI-Powered Software & Data Solutions",
    icon: BrainCircuit,
    summary: "Custom models and AI features, grounded in your own data.",
    detail:
      "Generic AI features that ignore your actual data rarely hold up in production. We build AI systems — predictive models, recommendation engines, retrieval-augmented chat assistants — trained and grounded on your own data, so the outputs are relevant to your business instead of plausible-sounding guesses. That includes the unglamorous but essential parts: data pipelines, evaluation, and monitoring, so the system stays accurate as your data changes.",
    capabilities: [
      "Custom model development & fine-tuning",
      "RAG systems & knowledge assistants",
      "Predictive & recommendation models",
      "Data pipelines & warehousing",
      "Model evaluation frameworks",
      "MLOps & ongoing monitoring",
    ],
    idealFor: [
      "Companies wanting AI features grounded in their own data, not generic outputs",
      "Teams looking to add search or a knowledge assistant over internal documents",
      "Businesses with a prediction or forecasting problem worth solving properly",
    ],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    icon: Megaphone,
    summary: "Get found, get traffic, get measurable results.",
    detail:
      "A well-built website doesn't matter much if nobody finds it. We run SEO, paid campaigns, and content strategy tied to numbers that actually move your business forward — qualified traffic, leads, and conversions — rather than vanity metrics that look good in a slide deck and mean little else. Every campaign starts with a clear target and a way to measure whether we hit it.",
    capabilities: [
      "SEO strategy & technical audits",
      "Paid social & search campaigns",
      "Content strategy & calendar planning",
      "Landing page design & CRO",
      "Analytics setup & reporting",
      "Email marketing & automation",
    ],
    idealFor: [
      "Businesses with a website that isn't generating leads",
      "Companies entering a new market or launching a new product",
      "Teams that want marketing spend tied to measurable outcomes",
    ],
  },
  {
    slug: "graphics-branding",
    name: "Graphics & Branding",
    icon: Palette,
    summary: "Visual identity that looks right everywhere it shows up.",
    detail:
      "A brand is more than a logo — it's the visual language that makes your business recognizable on a website, a business card, a pitch deck, or a social post, whether someone's seen it before or not. We build brand identities and the guidelines to keep them consistent, plus the ongoing design assets — decks, social graphics, ad creative — that a growing business needs on a regular basis.",
    capabilities: [
      "Logo & visual identity design",
      "Brand guidelines & style systems",
      "Marketing & sales collateral",
      "Social media asset design",
      "Pitch deck & presentation design",
      "Packaging & print design",
    ],
    idealFor: [
      "Startups launching without an established visual identity",
      "Businesses rebranding after outgrowing their original look",
      "Teams needing ongoing design support without hiring in-house",
    ],
  },
  {
    slug: "shopify-ecommerce",
    name: "Shopify / E-commerce",
    icon: ShoppingCart,
    summary: "Storefronts built to convert, not just to look good.",
    detail:
      "An online store has one job: turn visitors into customers without friction. We build and customize Shopify stores — and custom e-commerce platforms when Shopify doesn't fit — with checkout flow, page speed, and mobile experience treated as core requirements, not afterthoughts. That includes the operational side too: inventory sync, payment integration, and the apps that keep a growing store running smoothly.",
    capabilities: [
      "Shopify theme & custom app development",
      "Custom e-commerce platform builds",
      "Payment gateway & inventory integration",
      "Checkout & conversion optimization",
      "Product catalog & migration support",
      "Ongoing store maintenance",
    ],
    idealFor: [
      "Brands launching their first online store",
      "Businesses migrating from an outdated e-commerce platform",
      "Stores with high traffic but a checkout that isn't converting",
    ],
  },
  {
    slug: "staff-augmentation",
    name: "Staff Augmentation",
    icon: Users,
    summary: "Senior engineers embedded in your team, on demand.",
    detail:
      "Sometimes the fastest way to hit a deadline isn't a new hire — it's an experienced engineer who can plug directly into your existing team, tools, and codebase without a long ramp-up period. We provide vetted engineers on a flexible basis, whether you need one extra pair of hands for a quarter or a small embedded team for an ongoing initiative, with the same communication style and accountability as your in-house staff.",
    capabilities: [
      "Dedicated senior engineers",
      "Flexible, month-to-month engagements",
      "Full-stack, frontend & backend specialists",
      "Direct integration into your existing tools",
      "Overlap with your team's working hours",
      "No long-term lock-in contracts",
    ],
    idealFor: [
      "Teams with a deadline and not enough hands to hit it",
      "Companies wanting to scale engineering capacity without a full hiring cycle",
      "Projects needing a specific skill set for a defined period",
    ],
  },
  {
    slug: "digital-transformation",
    name: "Digital Transformation",
    icon: Cloud,
    summary: "Modernize the systems slowing your business down.",
    detail:
      "A lot of businesses are still running critical operations on systems that were built for a much smaller, simpler version of the company. We help modernize those core systems — moving processes onto connected, cloud-based platforms — in a way that doesn't disrupt the business while it's happening. That usually means a phased approach: understand what's actually load-bearing, migrate carefully, and bring the team along with proper change management rather than a surprise cutover.",
    capabilities: [
      "Legacy system modernization",
      "Business process digitization",
      "Cloud migration & infrastructure setup",
      "Systems integration & data unification",
      "Change management & team training",
      "Post-migration support",
    ],
    idealFor: [
      "Organizations still running on-premise or outdated systems",
      "Businesses whose growth is being held back by manual processes",
      "Companies planning a broader operational modernization initiative",
    ],
  },
  {
    slug: "business-consultancy-strategy",
    name: "Business Consultancy & Strategy",
    icon: Briefcase,
    summary: "A clear technology roadmap before you spend a dollar building.",
    detail:
      "The most expensive software mistakes usually happen before a single line of code is written — building the wrong thing, buying a tool that doesn't fit, or skipping a technical decision that becomes very costly to reverse later. We offer strategy and consulting engagements to help you make those calls with a clear head: what to build, what to buy, what to skip entirely, and how to sequence it so you're not burning budget on the wrong priority.",
    capabilities: [
      "Technology & product roadmapping",
      "Build-vs-buy & vendor evaluation",
      "Technical due diligence",
      "Systems & architecture audits",
      "Digital maturity assessments",
      "Fractional CTO-style advisory",
    ],
    idealFor: [
      "Founders deciding what to build before committing budget",
      "Companies evaluating a major software purchase or vendor",
      "Businesses needing outside technical judgment on a big decision",
    ],
  },
  {
    slug: "accounting-bookkeeping",
    name: "Accounting & Bookkeeping",
    icon: Calculator,
    summary: "Clean books, delivered by people who reply on time.",
    detail:
      "Financial records that are accurate, current, and easy to hand to an accountant or investor shouldn't be a rare thing. We provide ongoing bookkeeping and accounting support so your books stay clean month over month, reconciled and audit-ready, with someone who actually responds when you have a question instead of disappearing until tax season.",
    capabilities: [
      "Monthly bookkeeping & reconciliation",
      "Financial statement preparation",
      "Payroll processing support",
      "Accounts payable & receivable management",
      "Tax-ready recordkeeping",
      "Financial reporting & cash flow visibility",
    ],
    idealFor: [
      "Small businesses without a dedicated finance team",
      "Startups preparing for their first fundraising round",
      "Companies whose books haven't been reconciled in months",
    ],
  },
];

export const engagementProcess = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start with a short call to understand the problem, your constraints, and what success actually looks like.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "You get a clear scope, timeline, and cost before any work begins — no open-ended billing.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We work in short cycles with regular check-ins, so you see progress and can steer early, not at the end.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "Launch isn't the finish line. We stay on for fixes, iteration, and support after the project ships.",
  },
];
