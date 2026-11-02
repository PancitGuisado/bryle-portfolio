import { useState, useMemo } from "react";
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
  Terminal,
} from "lucide-react";
import { projects, Project } from "@/data/projects";
import ThemeToggle from "@/components/ThemeToggle";
import MusicWidget from "@/components/MusicWidget";
import ThreeDBackground from "@/components/ThreeDBackground";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

type CategoryFilter = "all" | "agentic" | "automation" | "webapp" | "game";

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const pillars = [
    {
      id: "agentic" as const,
      title: "Agentic Coding",
      icon: Bot,
      count: projects.filter((p) => p.category === "agentic").length,
      desc: "Autonomous AI agents, reasoning loops & LLM pipelines",
      gradient: "from-blue-500/15 via-cyan-500/10 to-transparent",
      badgeColor: "text-blue-500 border-blue-500/30 bg-blue-500/10",
    },
    {
      id: "automation" as const,
      title: "Automations",
      icon: Cpu,
      count: projects.filter((p) => p.category === "automation").length,
      desc: "System workflows, background tasks & batch processors",
      gradient: "from-emerald-500/15 via-teal-500/10 to-transparent",
      badgeColor: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
    },
    {
      id: "webapp" as const,
      title: "Web App Development",
      icon: Globe,
      count: projects.filter((p) => p.category === "webapp" || p.category === "game").length,
      desc: "High-performance full-stack web apps, UI/UX & games",
      gradient: "from-purple-500/15 via-pink-500/10 to-transparent",
      badgeColor: "text-purple-500 border-purple-500/30 bg-purple-500/10",
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

      {/* Glow ambient background accents */}
      <div className="pointer-events-none fixed -top-32 -left-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none fixed -bottom-32 -right-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col gap-3 lg:gap-4">
        {/* ================= HEADER / BRAND BAR ================= */}
        <header className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/60 bg-card/75 px-4 py-2.5 backdrop-blur-xl shadow-xs">
          <div className="flex items-center gap-3">
            {/* Cropped head avatar beside name */}
            <div className="relative group cursor-pointer">
              <div className="h-10 w-10 sm:h-11 sm:w-11 overflow-hidden rounded-full border-2 border-primary/40 bg-secondary/80 shadow-md ring-2 ring-primary/20 transition-transform group-hover:scale-105">
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
                <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available for hire
                </span>
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5 font-medium">
                <span>Agentic AI</span>
                <span className="text-border">•</span>
                <span>Automations</span>
                <span className="text-border">•</span>
                <span>Web Apps</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Bryle-James-Agra-CV.pdf"
              download="Bryle-James-Agra-CV.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/80 px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-secondary/60 hover:shadow-xs active:scale-95"
            >
              <Download className="h-3.5 w-3.5 text-primary" />
              CV
            </a>

            <a
              href="https://github.com/PancitGuisado"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border/70 bg-background/80 text-muted-foreground transition-all hover:text-foreground hover:border-primary/40 active:scale-95"
              title="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/bryle-james-agra-b233212b0/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border/70 bg-background/80 text-muted-foreground transition-all hover:text-foreground hover:border-primary/40 active:scale-95"
              title="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground active:scale-95"
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

            <div className="h-5 w-px bg-border/70 mx-0.5" />
            <MusicWidget />
            <ThemeToggle />
          </div>
        </header>

        {/* ================= CORE PILLARS (REPLACED TECH STACK) ================= */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = selectedCategory === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedCategory(isSelected ? "all" : pillar.id)}
                className={`group relative flex items-center justify-between rounded-xl border p-3 text-left transition-all backdrop-blur-md active:scale-[0.99] ${
                  isSelected
                    ? "border-primary bg-primary/10 ring-1 ring-primary/40 shadow-sm"
                    : "border-border/60 bg-card/60 hover:border-border hover:bg-card/90"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${pillar.badgeColor} transition-transform group-hover:scale-105`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs sm:text-sm font-bold text-foreground truncate">
                        {pillar.title}
                      </h3>
                      <span className="rounded-full bg-secondary px-1.5 py-0.2 text-[10px] font-mono text-muted-foreground">
                        {pillar.count}
                      </span>
                    </div>
                    <p className="text-[11px] text-muted-foreground truncate leading-snug">
                      {pillar.desc}
                    </p>
                  </div>
                </div>

                <div
                  className={`ml-2 h-1.5 w-1.5 shrink-0 rounded-full transition-all ${
                    isSelected ? "bg-primary scale-125" : "bg-border group-hover:bg-primary/50"
                  }`}
                />
              </button>
            );
          })}
        </section>

        {/* ================= PROJECTS WORKSPACE (SINGLE PAGE - NO SCROLL) ================= */}
        <main className="flex flex-1 flex-col rounded-2xl border border-border/60 bg-card/65 p-3.5 sm:p-4 backdrop-blur-xl shadow-xs overflow-hidden min-h-0">
          {/* Controls Bar: Title, Search, Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 border-b border-border/50 shrink-0">
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-primary" />
              <h2 className="text-xs sm:text-sm font-bold tracking-tight text-foreground uppercase">
                Projects Showcase
              </h2>
              <span className="rounded-md bg-secondary/80 px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
                {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
              </span>
            </div>

            <div className="flex items-center gap-2 flex-1 sm:flex-initial justify-end">
              {/* Search */}
              <div className="relative w-full sm:w-44 lg:w-56">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Filter projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-border/80 bg-background/70 py-1 pl-8 pr-3 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Reset filter pill if active */}
              {selectedCategory !== "all" && (
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="inline-flex items-center gap-1 rounded-lg border border-primary/40 bg-primary/10 px-2 py-1 text-[11px] font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Filter className="h-3 w-3" />
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Clean scrollable list of projects within the viewport */}
          <div className="flex-1 overflow-y-auto pr-1 pt-3 space-y-2 custom-scrollbar">
            {filteredProjects.length === 0 ? (
              <div className="flex h-40 flex-col items-center justify-center text-center text-muted-foreground">
                <Terminal className="h-8 w-8 stroke-1 text-muted-foreground/60 mb-2" />
                <p className="text-sm font-medium">No projects found matching filter</p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="mt-2 text-xs text-primary underline underline-offset-4"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {filteredProjects.map((project) => {
                  const isNewProject = project.link === "https://animaition.vercel.app/";
                  return (
                    <div
                      key={project.title}
                      onClick={() => setActiveProject(project)}
                      className="group relative flex flex-col justify-between rounded-xl border border-border/50 bg-background/50 hover:bg-background/90 p-3.5 transition-all duration-200 hover:border-primary/40 hover:shadow-md cursor-pointer"
                    >
                      <div>
                        {/* Top header line of card */}
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <h3 className="font-display text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate">
                              {project.title}
                            </h3>
                            {isNewProject && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-1.5 py-0.2 text-[9px] font-bold text-white shadow-xs">
                                <Sparkles className="h-2.5 w-2.5" />
                                NEW
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-1 shrink-0" onClick={(e) => e.stopPropagation()}>
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-md p-1 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                                title="View Repository"
                              >
                                <Github className="h-3.5 w-3.5" />
                              </a>
                            )}
                            {project.download && (
                              <a
                                href={project.download}
                                download
                                className="rounded-md p-1 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                                title="Download APK"
                              >
                                <Download className="h-3.5 w-3.5" />
                              </a>
                            )}
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-md p-1 text-primary hover:bg-primary/10 transition-colors"
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
                      <div className="mt-3 flex flex-wrap items-center gap-1">
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
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </main>

        {/* ================= FOOTER COMPACT BAR ================= */}
        <footer className="flex flex-wrap items-center justify-between gap-2 px-2 text-[11px] text-muted-foreground shrink-0">
          <div className="flex items-center gap-2">
            <span>© 2026 Bryle James Agra</span>
            <span className="text-border">•</span>
            <span className="hidden sm:inline">Crafted with Clean Agentic Architecture</span>
          </div>

          <div className="flex items-center gap-3 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open to Opportunities
            </span>
            <a
              href="mailto:brylejamesfagra@gmail.com"
              className="hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              brylejamesfagra@gmail.com
            </a>
          </div>
        </footer>
      </div>

      {/* ================= PROJECT DETAIL MODAL ================= */}
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
              <div className="my-2 overflow-hidden rounded-xl border border-border/80 bg-black/40">
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
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="aspect-video w-full object-cover"
                  />
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
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Source Code
                  </a>
                )}
                {activeProject.download && (
                  <a
                    href={activeProject.download}
                    download
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
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
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-xs"
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
