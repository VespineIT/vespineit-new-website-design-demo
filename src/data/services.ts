export type Service = {
  id: string;
  title: string;
  blurb: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "software",
    title: "Software Development",
    blurb:
      "Custom web platforms and internal tools built to scale — from idea to production.",
    points: ["Web apps & APIs", "SaaS platforms", "System integration", "Legacy modernization"],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    blurb:
      "Native-feel iOS and Android apps from a single, maintainable codebase.",
    points: ["React Native & Flutter", "Offline-first", "App Store delivery", "Push & analytics"],
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    blurb:
      "Cloud architecture that stays fast and cheap as you grow — without lock-in surprises.",
    points: ["AWS architecture", "Containers & CI/CD", "Cost optimization", "Observability"],
  },
  {
    id: "ai",
    title: "AI Solutions",
    blurb:
      "Practical machine learning and LLM features that ship — not science projects.",
    points: ["LLM integration", "Computer vision", "Forecasting", "Automation agents"],
  },
  {
    id: "consulting",
    title: "IT Consulting",
    blurb:
      "Senior engineers in the room to de-risk decisions and unblock your roadmap.",
    points: ["Architecture review", "Tech due diligence", "Team augmentation", "Roadmapping"],
  },
];

// The original four-pillar concept, reframed as a continuous loop.
export type Pillar = {
  num: string;
  title: string;
  desc: string;
};

export const pillars: Pillar[] = [
  {
    num: "01",
    title: "Visioning",
    desc: "Sensing, collecting data, optimizing, analysis — we map the problem before touching code.",
  },
  {
    num: "02",
    title: "Thinking",
    desc: "Predictions, analysis, cognitive processing — turning signals into decisions.",
  },
  {
    num: "03",
    title: "Creating",
    desc: "Generating products, interfaces and systems — bringing the idea into the world.",
  },
  {
    num: "04",
    title: "Automating",
    desc: "Accelerating world processes — so the work keeps running without you.",
  },
];

export const techStack: string[] = [
  "TypeScript", "React", "Next.js", "Node.js", "Python", "TensorFlow",
  "AWS", "Docker", "Laravel", "Java", "C#", "Flutter",
  "MySQL", "MongoDB", "Firebase", "Angular", "Tailwind", "PyTorch",
];
