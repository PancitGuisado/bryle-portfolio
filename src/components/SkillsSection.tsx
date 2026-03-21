import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Code2, FolderGit2, Server } from "lucide-react";

const skillGroups = [
  {
    category: "Frontend",
    icon: Code2,
    description:
      "Frontend technologies I use to build clean interfaces, responsive layouts, and modern user experiences.",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React and Vite",
      "TypeScript",
    ],
  },
  {
    category: "Backend",
    icon: Server,
    description:
      "Backend tools and databases I use for APIs, data handling, and full-stack application development.",
    skills: [
      "JavaScript",
      "SQL",
      "PostgreSQL",
      "Supabase",
      "MongoDB",
    ],
  },
  {
    category: "Tools and Development Workflow",
    icon: FolderGit2,
    description:
      "Tools I use for workflow, development, collaboration, and project delivery.",
    skills: ["Visual Studio Code", "Figma", "GitHub", "Vite", "Codex"],
  },
];

export default function SkillsSection() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="skills"
      className="py-32 px-6"
      style={{ background: "var(--gradient-subtle)" }}
    >
      <div ref={revealRef} className="section-reveal mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Skills
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Technologies I work with
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.category} className="card-dynamic rounded-2xl p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                  <group.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                  {group.category}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {group.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
