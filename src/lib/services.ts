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
};

export const services: Service[] = [
  {
    slug: "website-development",
    name: "Website Development",
    icon: Globe,
    summary: "Marketing sites and web platforms, designed and built in-house.",
    detail:
      "Design, SEO-ready structure, and your choice of stack — from lightweight marketing sites to full custom platforms.",
    capabilities: ["UI/UX design", "Technical SEO", "Next.js, WordPress, or custom stacks", "CMS integration"],
  },
  {
    slug: "web-app-development",
    name: "Web App Development",
    icon: Workflow,
    summary: "Dashboards and internal tools your team will actually use.",
    detail:
      "SaaS products, internal tools, and customer portals built with modern frameworks and clean, maintainable architecture.",
    capabilities: ["SaaS product builds", "Internal tools & dashboards", "API design & integration", "Auth & billing systems"],
  },
  {
    slug: "custom-software",
    name: "Custom Software",
    icon: Briefcase,
    summary: "Software built around how your business actually runs.",
    detail:
      "When off-the-shelf tools don't fit, we design and build custom systems tailored to your exact workflow.",
    capabilities: ["Requirements & systems design", "Legacy system modernization", "Third-party integrations", "Long-term maintenance"],
  },
  {
    slug: "ai-automation-tools",
    name: "AI Automation Tools",
    icon: Workflow,
    summary: "Automate the repetitive work eating your team's week.",
    detail:
      "We identify manual, repetitive processes and automate them with AI-driven workflows connected to your existing tools.",
    capabilities: ["Workflow automation", "Agentic task pipelines", "Tool & API orchestration", "Human-in-the-loop review steps"],
  },
  {
    slug: "ai-data-solutions",
    name: "AI-Powered Software & Data Solutions",
    icon: BrainCircuit,
    summary: "Custom models and AI features, grounded in your own data.",
    detail:
      "From predictive models to RAG-based assistants, we build AI features trained and grounded on your actual data.",
    capabilities: ["Custom model development", "RAG & knowledge assistants", "Data pipelines & warehousing", "MLOps & monitoring"],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    icon: Megaphone,
    summary: "Get found, get traffic, get measurable results.",
    detail:
      "SEO, paid campaigns, and content strategy focused on metrics that tie back to revenue, not vanity numbers.",
    capabilities: ["SEO strategy & execution", "Paid social & search", "Content strategy", "Analytics & reporting"],
  },
  {
    slug: "graphics-branding",
    name: "Graphics & Branding",
    icon: Palette,
    summary: "Visual identity that looks right everywhere it shows up.",
    detail:
      "Logos, brand systems, and marketing assets designed to stay consistent across every touchpoint.",
    capabilities: ["Logo & brand identity", "Marketing collateral", "Social media assets", "Brand guidelines"],
  },
  {
    slug: "shopify-ecommerce",
    name: "Shopify / E-commerce",
    icon: ShoppingCart,
    summary: "Storefronts built to convert, not just to look good.",
    detail:
      "Shopify builds and custom e-commerce platforms, optimized for checkout conversion and built to scale with your catalog.",
    capabilities: ["Shopify theme & app development", "Custom e-commerce builds", "Payment & inventory integration", "Conversion optimization"],
  },
  {
    slug: "staff-augmentation",
    name: "Staff Augmentation",
    icon: Users,
    summary: "Senior engineers embedded in your team, on demand.",
    detail:
      "Scale your team with vetted engineers who plug directly into your existing workflow and tools.",
    capabilities: ["Dedicated engineers", "Flexible engagement length", "Full-stack & specialist coverage", "Direct team integration"],
  },
  {
    slug: "digital-transformation",
    name: "Digital Transformation",
    icon: Cloud,
    summary: "Modernize the systems slowing your business down.",
    detail:
      "We help legacy organizations move core operations onto modern, connected systems without disrupting the business.",
    capabilities: ["Legacy system modernization", "Process digitization", "Cloud migration", "Change management support"],
  },
  {
    slug: "business-consultancy-strategy",
    name: "Business Consultancy & Strategy",
    icon: Briefcase,
    summary: "A clear technology roadmap before you spend a dollar building.",
    detail:
      "Technology and product strategy consulting to help you decide what to build, buy, or skip entirely.",
    capabilities: ["Technology roadmapping", "Product strategy", "Vendor & build-vs-buy evaluation", "Technical due diligence"],
  },
  {
    slug: "accounting-bookkeeping",
    name: "Accounting & Bookkeeping",
    icon: Calculator,
    summary: "Clean books, delivered by people who reply on time.",
    detail:
      "Ongoing bookkeeping and accounting support so your financials stay accurate and audit-ready.",
    capabilities: ["Monthly bookkeeping", "Financial reporting", "Payroll support", "Tax-ready records"],
  },
];
