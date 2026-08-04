import { Github, ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import { useRef } from "react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Ignore play errors (e.g. if not allowed)
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      // Optional: rewind to start
      // videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={`card-dynamic stagger-child group relative flex flex-col overflow-hidden rounded-2xl ${
        project.featured ? "sm:p-0" : "p-0"
      }`}
      style={{ transitionDelay: `${index * 120 + 150}ms` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Media Section */}
      {(project.video || project.image) && (
        <div className="relative aspect-video w-full overflow-hidden bg-muted border-b border-border">
          {project.video ? (
            <video
              ref={videoRef}
              src={project.video}
              muted
              loop
              playsInline
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : null}
        </div>
      )}

      {/* Content Section */}
      <div className={`flex flex-col gap-6 p-6 sm:p-8 ${project.featured && !(project.video || project.image) ? "sm:p-10" : ""}`}>
        {project.featured && (
          <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 self-start">
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
      </div>

      {/* Hover gradient overlay */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, transparent 70%)" }}
      />
    </div>
  );
}
