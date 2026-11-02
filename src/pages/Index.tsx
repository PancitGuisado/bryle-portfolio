import { useState, useMemo, useRef } from "react";
import {
  Bot,
  Cpu,
  Globe,
  Sparkles,
  ExternalLink,
  Github,
  Download,
  Mail,
  Linkedin,
  Search,
  Filter,
  CheckCircle2,
  Code2,
  Layers,
  ArrowUpRight,
  Play,
  Terminal,
  Wrench,
} from "lucide-react";
import { projects, Project } from "@/data/projects";
import ThemeToggle from "@/components/ThemeToggle";
import ThreeDBackground from "@/components/ThreeDBackground";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

type CategoryFilter = "all" | "agentic" | "automation" | "webapp";

interface SkillPillar {
  id: "agentic" | "automation" | "webapp";
  title: string;
  focus: string;
  icon: any;
  accent: string;
  badgeBg: string;
  skills: string[];
  tools: string[];
}

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const pillars: SkillPillar[] = [
    {
      id: "agentic",
      title: "Agentic Coding",
      focus: "Autonomous AI & Intelligent Systems",
      icon: Bot,
      accent: "text-blue-500 border-blue-500/30",
      badgeBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      skills: ["Agent Workflows", "LLM Pipelines", "Prompt Chaining", "Canvas Rendering", "Synthetic Data"],
      tools: ["Gemini API", "OpenAI / Claude", "Antigravity", "Codex", "LangChain"],
    },
    {
      id: "automation",
      title: "Automations",
      focus: "System Workflows & Background Logic",
      icon: Cpu,
      accent: "text-emerald-500 border-emerald-500/30",
      badgeBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      skills: ["Task Scheduling", "Order Queues", "Payroll Engines", "IoT / Simulation", "Batch ETL"],
      tools: ["Python", "Node.js", "Express", "Tinkercad", "Arduino / C++"],
    },
    {
      id: "webapp",
      title: "Web App Development",
      focus: "Full-Stack Products & Interactive Experiences",
      icon: Globe,
      accent: "text-violet-500 border-violet-500/30",
      badgeBg: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
      skills: ["Frontend UI/UX", "REST APIs", "State Architectures", "2D Game Engines", "Responsive Web"],
      tools: ["React", "TypeScript", "Tailwind CSS", "PHP / MySQL", "Supabase"],
    },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        selectedCategory === "all"
          ? true
          : selectedCategory === "webapp"
          ? p.category === "webapp" || p.category === "game"
          : p.category === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === "" ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const copyEmail = () => {
    navigator.clipboard.writeText("brylejamesfagra@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col justify-between overflow-x-hidden p-3 sm:p-5 lg:h-screen lg:overflow-hidden select-none">
      {/* Dynamic 3D interactive particle background */}
      <ThreeDBackground />

      {/* Subtle controlled glow accents */}
      <div className="pointer-events-none fixed -top-40 -left-20 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />
      <div className="pointer-events-none fixed -bottom-40 -right-20 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col gap-3 lg:gap-3.5">
        {/* ================= HEADER / BRAND BAR ================= */}
        <header className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/70 bg-card/85 px-4 py-2.5 backdrop-blur-2xl shadow-sm">
          <div className="flex items-center gap-3">
            {/* Cropped head avatar beside name */}
            <div className="relative group cursor-pointer shrink-0">
              <div className="h-11 w-11 sm:h-12 sm:w-12 overflow-hidden rounded-full border-2 border-primary/50 bg-secondary/80 shadow-md ring-2 ring-primary/20 transition-all duration-300 group-hover:scale-105 group-hover:ring-primary/40">
                <img
                  src="/bryle-portrait.png"
                  alt="Bryle James Agra"
                  className="h-full w-full object-cover object-top scale-[1.75] translate-y-1.5 dark:hidden"
                />
                <img
                  src="/bryle-portrait-dark.png"
                  alt="Bryle James Agra"
                  className="hidden h-full w-full object-cover object-top scale-[1.75] translate-y-1.5 dark:block"
                />
              </div>
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-card bg-emerald-500 shadow-xs" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-display text-base sm:text-lg font-bold tracking-tight text-foreground leading-tight">
                  Bryle James Agra
                </h1>
                <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available for work
                </span>
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5 font-medium mt-0.5">
                <span>Agentic Coding</span>
                <span className="text-border">•</span>
                <span>Automations</span>
                <span className="text-border">•</span>
                <span>Web App Development</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Bryle-James-Agra-CV.pdf"
              download="Bryle-James-Agra-CV.pdf"
              className="inline-flex items-center gap-1.5 rounded-xl border border-border/80 bg-background/80 px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-secondary/70 hover:shadow-xs active:scale-95"
            >
              <Download className="h-3.5 w-3.5 text-primary" />
              <span>CV</span>
            </a>

            <a
              href="https://github.com/PancitGuisado"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-border/70 bg-background/80 text-muted-foreground transition-all hover:text-foreground hover:border-primary/40 active:scale-95"
              title="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/bryle-james-agra-b233212b0/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-border/70 bg-background/80 text-muted-foreground transition-all hover:text-foreground hover:border-primary/40 active:scale-95"
              title="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 rounded-xl border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground active:scale-95 shadow-xs"
              title="brylejamesfagra@gmail.com"
            >
              {copiedEmail ? (
                <>
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="h-3.5 w-3.5" />
                  <span>Contact</span>
                </>
              )}
            </button>

            <div className="h-5 w-px bg-border/80 mx-0.5" />
            <ThemeToggle />
          </div>
        </header>

        {/* ================= SKILLS, TOOLS & CAPABILITIES (DISPLAY CARDS - NOT BUTTONS) ================= */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-3.5 sm:p-4 backdrop-blur-xl shadow-xs transition-colors hover:border-border hover:bg-card/95"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-2.5">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${pillar.accent} ${pillar.badgeBg} shadow-xs`}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-foreground truncate">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] font-medium text-muted-foreground truncate">
                      {pillar.focus}
                    </p>
                  </div>
                </div>

                {/* Skills Line */}
                <div className="space-y-2 pt-1 border-t border-border/50">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1 mb-1">
                      <Code2 className="h-3 w-3 text-primary" />
                      Core Competencies
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {pillar.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-border/60 bg-secondary/50 px-1.5 py-0.5 text-[10px] font-medium text-foreground/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tools Line */}
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1 mb-1">
                      <Wrench className="h-3 w-3 text-primary" />
                      Tools & Stack
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {pillar.tools.map((tool) => (
                        <span
                          key={tool}
                          className={`rounded-md border px-1.5 py-0.5 text-[10px] font-semibold ${pillar.badgeBg}`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* ================= PROJECTS WORKSPACE (1 PAGE - CLEAN VIEWPORT) ================= */}
        <main className="flex flex-1 flex-col rounded-2xl border border-border/70 bg-card/75 p-3.5 sm:p-4 backdrop-blur-2xl shadow-sm overflow-hidden min-h-0">
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-border/60 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Layers className="h-4 w-4" />
              </div>
              <div>
                <h2 className="text-xs sm:text-sm font-bold tracking-tight text-foreground uppercase">
                  Projects Showcase
                </h2>
              </div>
              <span className="rounded-md bg-secondary px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
                {filteredProjects.length}
              </span>
            </div>

            <div className="flex items-center gap-2 flex-1 sm:flex-initial justify-end">
              {/* Filter Pills */}
              <div className="hidden md:flex items-center gap-1 rounded-xl border border-border/80 bg-background/60 p-1">
                {(
                  [
                    { id: "all", label: "All" },
                    { id: "agentic", label: "Agentic" },
                    { id: "automation", label: "Automations" },
                    { id: "webapp", label: "Web Apps" },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold transition-all ${
                      selectedCategory === tab.id
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full sm:w-48 lg:w-60">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search projects, tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-border/80 bg-background/80 py-1.5 pl-8 pr-3 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-xs"
                />
              </div>

              {selectedCategory !== "all" && (
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="md:hidden inline-flex items-center gap-1 rounded-lg border border-primary/40 bg-primary/10 px-2 py-1 text-[11px] font-medium text-primary"
                >
                  <Filter className="h-3 w-3" />
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Clean Scrollable Project Grid */}
          <div className="flex-1 overflow-y-auto pr-1 pt-3 custom-scrollbar">
            {filteredProjects.length === 0 ? (
              <div className="flex h-48 flex-col items-center justify-center text-center text-muted-foreground">
                <Terminal className="h-8 w-8 stroke-1 text-muted-foreground/60 mb-2" />
                <p className="text-sm font-medium">No projects match the criteria</p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="mt-2 text-xs text-primary underline underline-offset-4"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredProjects.map((project) => (
                  <ProjectCardItem
                    key={project.title}
                    project={project}
                    onOpen={() => setActiveProject(project)}
                  />
                ))}
              </div>
            )}
          </div>
        </main>

        {/* ================= FOOTER COMPACT BAR ================= */}
        <footer className="flex flex-wrap items-center justify-between gap-2 px-2 text-[11px] text-muted-foreground shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground/80">Bryle James Agra</span>
            <span className="text-border">•</span>
            <span>Agentic Coding, Automations & Web App Development</span>
          </div>

          <div className="flex items-center gap-3 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to Opportunities
            </span>
            <span className="text-border">•</span>
            <a
              href="mailto:brylejamesfagra@gmail.com"
              className="text-foreground/80 hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              brylejamesfagra@gmail.com
            </a>
          </div>
        </footer>
      </div>

      {/* ================= PROJECT DETAIL DIALOG ================= */}
      <Dialog open={!!activeProject} onOpenChange={(open) => !open && setActiveProject(null)}>
        <DialogContent className="max-w-xl border-border bg-card/95 backdrop-blur-2xl">
          {activeProject && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between pr-6">
                  <DialogTitle className="font-display text-xl font-bold text-foreground">
                    {activeProject.title}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-xs text-muted-foreground mt-1">
                  {activeProject.tags.join(" • ")}
                </DialogDescription>
              </DialogHeader>

              {/* Preview media */}
              <div className="my-2 overflow-hidden rounded-xl border border-border/80 bg-muted/40 relative">
                {activeProject.video ? (
                  <video
                    src={activeProject.video}
                    controls
                    autoPlay
                    muted
                    loop
                    className="aspect-video w-full object-cover"
                  />
                ) : activeProject.image ? (
                  <div className="aspect-video w-full flex items-center justify-center p-6 bg-secondary/30">
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="max-h-full max-w-full object-contain drop-shadow-md rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-video w-full items-center justify-center bg-secondary/30 text-muted-foreground text-xs">
                    <Code2 className="h-8 w-8 text-primary/40 mr-2" />
                    Interactive Live Application
                  </div>
                )}
              </div>

              <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                {activeProject.description}
              </p>

              {/* Actions */}
              <div className="mt-4 flex flex-wrap items-center justify-end gap-2 pt-2 border-t border-border">
                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-secondary/50 px-3.5 py-1.5 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Source Code
                  </a>
                )}
                {activeProject.download && (
                  <a
                    href={activeProject.download}
                    download
                    className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-secondary/50 px-3.5 py-1.5 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download Build
                  </a>
                )}
                {activeProject.link && (
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-xs"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Launch Live App
                  </a>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function ProjectCardItem({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const isNew = project.link === "https://animaition.vercel.app/";
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      onClick={onOpen}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative flex flex-col justify-between rounded-xl border p-3.5 transition-all duration-200 cursor-pointer ${
        isNew
          ? "border-primary/50 bg-primary/[0.03] hover:border-primary hover:shadow-lg hover:shadow-primary/10"
          : "border-border/60 bg-background/60 hover:bg-background/95 hover:border-primary/40 hover:shadow-md"
      }`}
    >
      <div>
        {/* Top Header */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 min-w-0">
            {/* Visual Icon or Mini Thumb */}
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-card overflow-hidden shadow-xs">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover p-0.5"
                />
              ) : project.video ? (
                <div className="relative h-full w-full bg-secondary/50 flex items-center justify-center">
                  <Play className="h-3.5 w-3.5 text-primary fill-primary/30" />
                </div>
              ) : (
                <Code2 className="h-4 w-4 text-muted-foreground" />
              )}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h3 className="font-display text-xs sm:text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate">
                  {project.title}
                </h3>
                {isNew && (
                  <span className="inline-flex items-center gap-0.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-1.5 py-0.2 text-[9px] font-bold text-white shadow-xs">
                    <Sparkles className="h-2 w-2" />
                    NEW
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Direct Action Links */}
          <div
            className="flex items-center gap-0.5 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                title="GitHub Repo"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
            )}
            {project.download && (
              <a
                href={project.download}
                download
                className="rounded-lg p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                title="Download"
              >
                <Download className="h-3.5 w-3.5" />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg p-1.5 text-primary hover:bg-primary/10 transition-colors"
                title="Open Live Site"
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
          {project.description}
        </p>
      </div>

      {/* Tags footer */}
      <div className="mt-3 flex items-center justify-between gap-1 border-t border-border/40 pt-2.5">
        <div className="flex flex-wrap items-center gap-1">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-secondary/70 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-[10px] text-muted-foreground/70">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <span className="text-[10px] text-muted-foreground group-hover:text-primary flex items-center gap-0.5 font-medium transition-colors">
          View details
          <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </div>
  );
}
