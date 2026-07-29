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
    title: "EduBridge",
    description:
      "EduBridge is an educational platform that integrates artificial intelligence with structured learning to improve how students study and how teachers manage their classes.",
    tags: ["Educational Platform", "Artificial Intelligence", "Structured Learning"],
    link: "https://edubridgeorg.vercel.app/",
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
      "A streamlined application that allows users to build their resume by filling in the information needed for a complete resume.",
    tags: ["Resume Builder", "Form Workflow", "User Experience"],
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
