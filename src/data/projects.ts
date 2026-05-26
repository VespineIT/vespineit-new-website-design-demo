export type Project = {
  slug: string;
  client: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  problem: string;
  build: string;
  result: string;
  tags: string[];
  metrics: { value: string; label: string }[];
};

// PLACEHOLDER CASE STUDIES — swap with real client work.
// Each follows a problem -> what we built -> result structure (what clients actually judge).
export const projects: Project[] = [
  {
    slug: "apiary-logistics",
    client: "Apiary Logistics",
    title: "Real-time fleet tracking that cut idle time by a third",
    category: "Web Platform · Cloud",
    year: "2025",
    summary:
      "A live dispatch dashboard unifying 400+ vehicles across three countries.",
    problem:
      "Dispatchers juggled four disconnected tools and spreadsheets, losing hours daily to manual reconciliation.",
    build:
      "A single real-time dashboard on Next.js + a Go telemetry pipeline, streaming GPS and sensor data over WebSockets into a unified ops view.",
    result:
      "Idle time fell 34%, dispatch decisions dropped from minutes to seconds, and the ops team retired three legacy tools.",
    tags: ["Next.js", "WebSockets", "AWS", "PostgreSQL"],
    metrics: [
      { value: "-34%", label: "Vehicle idle time" },
      { value: "3x", label: "Faster dispatch" },
      { value: "400+", label: "Vehicles tracked" },
    ],
  },
  {
    slug: "nectar-health",
    client: "Nectar Health",
    title: "An AI triage assistant trusted by 50k patients",
    category: "AI · Mobile",
    year: "2025",
    summary:
      "A symptom-triage companion that routes patients to the right care faster.",
    problem:
      "A clinic network was overwhelmed by low-acuity calls, with long waits burying urgent cases.",
    build:
      "A Flutter app with an on-device first pass and an LLM triage layer, guard-railed and reviewed by clinicians, integrated into their booking system.",
    result:
      "Call volume dropped 41%, urgent cases were surfaced within minutes, and patient satisfaction climbed to 4.7/5.",
    tags: ["Flutter", "LLM", "Python", "Firebase"],
    metrics: [
      { value: "-41%", label: "Low-acuity calls" },
      { value: "50k", label: "Patients served" },
      { value: "4.7/5", label: "Satisfaction" },
    ],
  },
  {
    slug: "comb-commerce",
    client: "Comb Commerce",
    title: "Headless storefront handling 10x Black Friday traffic",
    category: "E-commerce · Cloud",
    year: "2024",
    summary:
      "A re-platform that turned a fragile store into a peak-proof machine.",
    problem:
      "Their monolith buckled under seasonal spikes — every sale risked a costly outage.",
    build:
      "A headless Next.js storefront on a container-based, autoscaling AWS setup with edge caching and a streamlined checkout.",
    result:
      "Survived a 10x traffic peak with zero downtime, page loads dropped 60%, and conversion rose 22%.",
    tags: ["Next.js", "AWS", "Docker", "Stripe"],
    metrics: [
      { value: "10x", label: "Peak traffic" },
      { value: "+22%", label: "Conversion" },
      { value: "0", label: "Downtime" },
    ],
  },
  {
    slug: "swarm-analytics",
    client: "Swarm Analytics",
    title: "A forecasting engine that pays for itself monthly",
    category: "AI · Data",
    year: "2024",
    summary:
      "Demand forecasting that replaced gut-feel inventory ordering.",
    problem:
      "Manual forecasting left a retailer over-stocked on slow movers and out of bestsellers.",
    build:
      "A Python forecasting service blending historical sales, seasonality and external signals, surfaced through a clean planning dashboard.",
    result:
      "Stockouts fell 28%, holding costs dropped 19%, and planners trusted the numbers enough to automate reorders.",
    tags: ["Python", "TensorFlow", "AWS", "React"],
    metrics: [
      { value: "-28%", label: "Stockouts" },
      { value: "-19%", label: "Holding cost" },
      { value: "94%", label: "Forecast accuracy" },
    ],
  },
];
