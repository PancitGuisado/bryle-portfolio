import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Projects() {
  const revealRef = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 px-6">
        <div ref={revealRef} className="section-reveal stagger-parent mx-auto max-w-6xl">
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Portfolio</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              All Projects
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              A complete collection of things I've built, ranging from web applications to interactive games.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
