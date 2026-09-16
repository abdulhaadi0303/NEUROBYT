export type Project = {
    slug: string;
    title: string;
    client: string;
    category: string;
    year: string;
    summary: string;
    problem: string;
    solution: string;
    result: string;
    serviceSlugs: string[];
  };
  
  // Placeholder case studies — replace with real client names, details,
  // and results once you have them ready to publish.
  export const projects: Project[] = [
    {
      slug: "booking-first-website-rebuild",
      title: "A booking-first website rebuild",
      client: "[Client name]",
      category: "Website Development",
      year: "2025",
      summary:
        "Replaced a slow, outdated site with a fast, SEO-structured rebuild that made booking an appointment the primary action on every page.",
      problem:
        "[Placeholder] The client's existing website took over 6 seconds to load on mobile and buried the booking form three clicks deep. Most visitors were leaving before finding a way to contact the business.",
      solution:
        "[Placeholder] We rebuilt the site with a performance-first approach — a lightweight stack, compressed assets, and a booking CTA visible on every page without scrolling.",
      result:
        "[Placeholder — replace with a real, specific metric] Page load time dropped from 6.2s to under 1.5s, and the client reported a noticeable increase in booking form submissions within the first month.",
      serviceSlugs: ["website-development", "digital-marketing"],
    },
    {
      slug: "ops-dashboard-replacing-spreadsheets",
      title: "An internal dashboard replacing six spreadsheets",
      client: "[Client name]",
      category: "Web App Development",
      year: "2025",
      summary:
        "Built a single operations dashboard to replace a patchwork of spreadsheets the finance team was manually reconciling every week.",
      problem:
        "[Placeholder] The client's operations team spent roughly a day each week manually copying numbers between six different spreadsheets to produce a single weekly report.",
      solution:
        "[Placeholder] We built a web dashboard that pulled data directly from their existing tools via API, with role-based access so different teams saw only what was relevant to them.",
      result:
        "[Placeholder — replace with a real, specific metric] The weekly reporting process went from a full day of manual work to a report that's ready automatically every Monday morning.",
      serviceSlugs: ["web-app-development", "ai-data-solutions"],
    },
    {
      slug: "order-entry-automation",
      title: "Automating manual order-entry work",
      client: "[Client name]",
      category: "AI Automation",
      year: "2024",
      summary:
        "Automated a manual order-entry and document-processing workflow that was consuming several hours of staff time daily.",
      problem:
        "[Placeholder] Staff were manually reading incoming order documents and typing the data into the client's internal system — a slow, error-prone process repeated dozens of times a day.",
      solution:
        "[Placeholder] We built an automated pipeline that extracts data from incoming documents, validates it, and enters it directly into their system, with a human review step for anything flagged as uncertain.",
      result:
        "[Placeholder — replace with a real, specific metric] Manual data entry time dropped by the majority of what it was, with staff now only reviewing flagged exceptions instead of every order.",
      serviceSlugs: ["ai-automation-tools", "custom-software"],
    },
  ];