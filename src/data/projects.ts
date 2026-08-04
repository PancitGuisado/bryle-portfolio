export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Kanibalismo",
    description: "A 2D single-player survival sandbox game featuring a day and night cycle, crafting, and building mechanics.",
    tags: ["Game", "Survival", "Sandbox", "2D"],
    link: "https://kanibalismo.vercel.app/",
    featured: true,
  },
  {
    title: "EduBridge",
    description:
      "EduBridge is an educational platform that integrates artificial intelligence with structured learning to improve how students study and how teachers manage their classes.",
    tags: ["Educational Platform", "Artificial Intelligence", "Structured Learning"],
    link: "https://edubridgeorg.vercel.app/",
    featured: true,
  },
  {
    title: "Resumaker",
    description:
      "An AI-powered resume builder that helps users create professional, polished resumes effortlessly with smart formatting and content suggestions.",
    tags: ["AI", "Resume Builder", "Productivity", "Web App"],
    link: "https://airesumaker.vercel.app/",
    featured: true,
  },
  {
    title: "Mocha Moments",
    description: "A coffeeshop ordering system.",
    tags: ["Ordering System", "Coffee Shop", "Customer Flow"],
    github: "https://github.com/PancitGuisado/MochaMomints",
    featured: false,
  },
  {
    title: "EZ MART",
    description:
      "A streamlined e-commerce application that provides users with a seamless online shopping experience, featuring intuitive product navigation and secure checkout.",
    tags: ["E-commerce", "Online Shopping", "User Experience"],
    github: "https://github.com/eilrahcdev/EZ-Mart",
    featured: false,
  },
  {
    title: "The BigBang Theory Taptap",
    description: "An interactive tap game based on The Big Bang Theory.",
    tags: ["Game", "Interactive", "Entertainment"],
    link: "https://tbbttaptap.vercel.app/",
    featured: false,
  },
];
