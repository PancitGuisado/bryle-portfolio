import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Github, ArrowUpRight } from "lucide-react";

const projects = [
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
];

export default function ProjectsSection() {
  const revealRef = useScrollReveal();

  return (
    <section id="projects" className="py-32 px-6">
      <div ref={revealRef} className="section-reveal stagger-parent mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Projects</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Selected work
          </h2>
        </div>

        <div className="mt-14 space-y-5">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`card-dynamic stagger-child group relative overflow-hidden rounded-2xl p-6 sm:p-8 ${
                project.featured ? "sm:p-10" : ""
              }`}
              style={{ transitionDelay: `${i * 120 + 150}ms` }}
            >
              {project.featured && (
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-xs font-semibold text-primary">Featured</span>
                </div>
              )}

              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground text-pretty">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:border-primary/30 hover:bg-secondary hover:text-foreground hover:shadow-sm active:scale-95"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  ) : null}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:border-primary/30 hover:bg-secondary hover:text-foreground hover:shadow-sm active:scale-95"
                      aria-label={`${project.title} live demo`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : null}
                  {!project.github && !project.link ? (
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground/80">
                      Link coming soon
                    </span>
                  ) : null}
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, transparent 70%)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
