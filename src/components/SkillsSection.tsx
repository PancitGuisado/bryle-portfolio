import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Rocket, Code2, Brain } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const techStack = [
  { name: "JavaScript", type: "image", src: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "Python", type: "image", src: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "React", type: "image", src: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "TypeScript", type: "image", src: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "MySQL", type: "image", src: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "Supabase", type: "image", src: "https://cdn.simpleicons.org/supabase/3ECF8E" },
  { name: "Tailwind CSS", type: "image", src: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "HTML5", type: "image", src: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "Express.js", type: "image", src: "https://cdn.simpleicons.org/express", darkSrc: "https://cdn.simpleicons.org/express/white" },
  { name: "Node.js", type: "image", src: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Figma", type: "image", src: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "Visual Studio Code", type: "image", src: "https://cdn.simpleicons.org/visualstudiocode/007ACC" },
  { name: "GitHub", type: "image", src: "https://cdn.simpleicons.org/github", darkSrc: "https://cdn.simpleicons.org/github/white" },
  { name: "Vercel", type: "image", src: "https://cdn.simpleicons.org/vercel", darkSrc: "https://cdn.simpleicons.org/vercel/white" },
  { name: "Capacitor", type: "image", src: "https://cdn.simpleicons.org/capacitor/119EFF" },
  { name: "Antigravity", type: "icon", icon: Rocket, color: "text-purple-500" },
  { name: "Codex", type: "icon", icon: Brain, color: "text-blue-500" },
];

export default function SkillsSection() {
  const revealRef = useScrollReveal();
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = mounted && currentTheme === "dark";

  return (
    <section
      id="skills"
      className="py-32 px-6"
      style={{ background: "var(--gradient-subtle)" }}
    >
      <div ref={revealRef} className="section-reveal mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="text-primary h-6 w-6" />
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            Tech Stack
          </h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
          {techStack.map((tech) => (
            <div 
              key={tech.name} 
              className="card-dynamic aspect-square rounded-2xl flex items-center justify-center p-4 bg-background/50 hover:bg-secondary/50 transition-colors border border-border/50 group"
              title={tech.name}
            >
              {tech.type === "image" ? (
                <img 
                  src={isDark && tech.darkSrc ? tech.darkSrc : tech.src} 
                  alt={tech.name} 
                  className="w-12 h-12 object-contain transition-transform group-hover:scale-110"
                />
              ) : tech.icon ? (
                <tech.icon className={`w-12 h-12 ${tech.color} transition-transform group-hover:scale-110`} />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
