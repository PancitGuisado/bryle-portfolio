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
}

export const projects: Project[] = [
  {
    title: "The Signal",
    description: "A 2D pixel-art top-down sideview tower defense survival game. Built as an Android app using Capacitor, you must build defenses, manage resources, and survive the waves.",
    tags: ["Game", "Tower Defense", "Survival", "2D", "Android", "Capacitor"],
    github: "https://github.com/PancitGuisado/TheSignal",
    download: "/projects/TheSignal.apk",
    featured: true,
    image: "/projects/thesignal.png",
  },
  {
    title: "AIPixelCraft",
    description: "An AI-powered pixel art and sprite editor that lets users create, edit, and generate sprite sheets or pixel art assets using artificial intelligence.",
    tags: ["AI", "Pixel Art", "Sprite Editor", "Game Dev"],
    link: "https://aipixelcraft.vercel.app/",
    featured: true,
    video: "/projects/aipixelcraft.mp4",
  },
  {
    title: "Kanibalismo",
    description: "A 2D single-player survival sandbox game featuring a day and night cycle, crafting, and building mechanics.",
    tags: ["Game", "Survival", "Sandbox", "2D"],
    link: "https://kanibalismo.vercel.app/",
    featured: true,
    video: "/projects/kanibalismo.mp4",
  },
  {
    title: "EduBridge",
    description:
      "EduBridge is an educational platform that integrates artificial intelligence with structured learning to improve how students study and how teachers manage their classes.",
    tags: ["Educational Platform", "Artificial Intelligence", "Structured Learning"],
    link: "https://edubridgeorg.vercel.app/",
    featured: true,
    video: "/projects/edubridge.mp4",
  },
  {
    title: "Resumaker",
    description:
      "An AI-powered resume builder that helps users create professional, polished resumes effortlessly with smart formatting and content suggestions.",
    tags: ["AI", "Resume Builder", "Productivity", "Web App"],
    link: "https://airesumaker.vercel.app/",
    featured: true,
    video: "/projects/resumaker.mp4",
  },
  {
    title: "Mocha Moments",
    description: "A coffeeshop ordering system.",
    tags: ["Ordering System", "Coffee Shop", "Customer Flow"],
    github: "https://github.com/PancitGuisado/MochaMomints",
    featured: false,
    video: "/projects/mocha-moments.mp4",
  },
  {
    title: "EZ MART",
    description:
      "A streamlined e-commerce application that provides users with a seamless online shopping experience, featuring intuitive product navigation and secure checkout.",
    tags: ["E-commerce", "Online Shopping", "User Experience"],
    github: "https://github.com/eilrahcdev/EZ-Mart",
    featured: false,
    image: "/projects/ezmart.jpg",
  },
  {
    title: "The BigBang Theory Taptap",
    description: "An interactive tap game based on The Big Bang Theory.",
    tags: ["Game", "Interactive", "Entertainment"],
    link: "https://tbbttaptap.vercel.app/",
    featured: false,
    video: "/projects/taptap.mp4",
  },
  {
    title: "Buhay Pedro",
    description: "A comic-style survival game about Pedro, a lower-class Filipino trying to survive daily with his family. Manage debts, pay bills, and navigate challenges including a friend's gambling addiction.",
    tags: ["Game", "Survival", "Comic Style", "Resource Management"],
    link: "https://buhaypedro.vercel.app/",
    featured: true,
    video: "/projects/buhaypedro.mp4",
  },
  {
    title: "PerfumeReco",
    description: "A personalized fragrance recommendation platform helping users discover their ideal scent profiles.",
    tags: ["Recommendation", "Lifestyle", "Web App"],
    link: "https://perfumereco.vercel.app/",
    featured: true,
    video: "/projects/perfumereco.mp4",
  },
  {
    title: "Payroll System",
    description: "A payroll management system.",
    tags: ["Payroll", "System", "Management"],
    github: "https://github.com/PancitGuisado/Payroll.git",
    featured: false,
  },
];
