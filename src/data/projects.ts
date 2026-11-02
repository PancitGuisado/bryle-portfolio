export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  download?: string;
  featured: boolean;
  video?: string;
  image?: string;
  category?: "agentic" | "automation" | "webapp" | "game";
}

export const projects: Project[] = [
  {
    title: "animAItion",
    description:
      "AI video automation studio that turns raw prompts into animated social videos in seconds with neural timeline sequencing and browser-rendered canvas animations.",
    tags: ["Agentic AI", "AI Video", "Automation", "Canvas Engine"],
    link: "https://animaition.vercel.app/",
    featured: true,
    category: "agentic",
  },
  {
    title: "EduBridge",
    description:
      "AI-driven educational platform integrating autonomous tutoring assistance with structured learning workflows for students and teachers.",
    tags: ["Agentic AI", "Education", "Automation"],
    link: "https://edubridgeorg.vercel.app/",
    featured: true,
    video: "/projects/edubridge.mp4",
    category: "agentic",
  },
  {
    title: "Resumaker",
    description:
      "AI-powered resume engine and formatting automation that crafts structured, ATS-optimized resumes with real-time intelligence.",
    tags: ["Agentic AI", "Resume Builder", "Web App"],
    link: "https://airesumaker.vercel.app/",
    featured: true,
    video: "/projects/resumaker.mp4",
    category: "webapp",
  },
  {
    title: "AIPixelCraft",
    description:
      "Generative AI pixel art and sprite generator enabling seamless sprite sheet synthesis for game developers.",
    tags: ["Agentic AI", "Sprite Generator", "Web App"],
    link: "https://aipixelcraft.vercel.app/",
    featured: true,
    video: "/projects/aipixelcraft.mp4",
    category: "agentic",
  },
  {
    title: "The Signal",
    description:
      "2D pixel-art tower defense survival game with resource automation, wave defense systems, and cross-platform mobile build.",
    tags: ["Game Dev", "Survival", "Tower Defense"],
    github: "https://github.com/PancitGuisado/TheSignal",
    link: "https://thesignalgame.vercel.app/",
    download: "/projects/TheSignal.apk",
    featured: true,
    video: "/projects/thesignal.mp4",
    category: "game",
  },
  {
    title: "Snapmimi",
    description:
      "Lightweight online photo booth application with instantaneous photo strip layout generation and live filters.",
    tags: ["Web App", "Camera Tool", "Creative"],
    link: "https://snapmimi.vercel.app/",
    featured: false,
    image: "/projects/snapmimi.png",
    category: "webapp",
  },
  {
    title: "Huling Klase",
    description:
      "Filipino psychological horror interactive investigation narrative game with dynamic branching story state.",
    tags: ["Interactive Game", "Detective", "Story Engine"],
    link: "https://hulingklase.vercel.app/",
    featured: false,
    image: "/projects/hulingklase.png",
    category: "game",
  },
  {
    title: "Virtual Arduino Simulation",
    description:
      "Dual-function virtual Arduino simulation featuring an interactive calculator and an automated smoke alarm system with buzzer alert.",
    tags: ["Automation", "Embedded Systems", "IoT"],
    link: "https://www.tinkercad.com/things/4PtQzAUAURA-surprising-elzing",
    featured: false,
    image: "/projects/virtual-arduino.png",
    category: "automation",
  },
  {
    title: "Kanibalismo",
    description:
      "2D survival sandbox game featuring procedural cycle systems, crafting, and building mechanics.",
    tags: ["Game Dev", "Sandbox", "Survival"],
    link: "https://kanibalismo.vercel.app/",
    featured: false,
    video: "/projects/kanibalismo.mp4",
    category: "game",
  },
  {
    title: "Mocha Moments",
    description:
      "Automated coffee shop ordering system with real-time checkout queues and order fulfillment flow.",
    tags: ["Web App", "Order Automation", "Commerce"],
    github: "https://github.com/PancitGuisado/MochaMomints",
    featured: false,
    video: "/projects/mocha-moments.mp4",
    category: "automation",
  },
  {
    title: "EZ MART",
    description:
      "Streamlined e-commerce web platform with optimized item catalog, shopping bag state, and checkout funnel.",
    tags: ["Web App", "E-Commerce", "UX"],
    github: "https://github.com/eilrahcdev/EZ-Mart",
    featured: false,
    image: "/projects/ezmart.jpg",
    category: "webapp",
  },
  {
    title: "PerfumeReco",
    description:
      "Algorithmic fragrance recommendation engine matching user taste notes to distinct scent profiles.",
    tags: ["Web App", "Recommendation Engine", "AI"],
    link: "https://perfumereco.vercel.app/",
    featured: false,
    video: "/projects/perfumereco.mp4",
    category: "webapp",
  },
  {
    title: "The BigBang Theory Taptap",
    description:
      "Interactive tap game based on The Big Bang Theory with animated mechanics.",
    tags: ["Game", "Interactive", "Entertainment"],
    link: "https://tbbttaptap.vercel.app/",
    featured: false,
    video: "/projects/taptap.mp4",
    category: "game",
  },
  {
    title: "Buhay Pedro",
    description:
      "Comic-style socio-economic survival game with resource allocation, budget balancing, and event logic.",
    tags: ["Game Dev", "Resource Management"],
    link: "https://buhaypedro.vercel.app/",
    featured: false,
    video: "/projects/buhaypedro.mp4",
    category: "game",
  },
  {
    title: "Payroll System",
    description:
      "Automated payroll calculation, deduction management, and salary reporting engine.",
    tags: ["Automation", "Enterprise System", "Payroll"],
    github: "https://github.com/PancitGuisado/Payroll.git",
    featured: false,
    category: "automation",
  },
  {
    title: "Chesster",
    description:
      "Chess analysis and game state tracking tool for calculating move trajectories.",
    tags: ["Web App", "Chess Engine", "Analysis"],
    github: "https://github.com/PancitGuisado/chesster",
    featured: false,
    category: "webapp",
  },
];
