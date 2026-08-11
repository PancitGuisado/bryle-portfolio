import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useParallax } from "@/hooks/useParallax";
import { User, Briefcase, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: User,
    title: "Who I Am",
    text: "A developer who enjoys turning ideas into functional, well-crafted digital products with clean code and intuitive interfaces.",
  },
  {
    icon: Briefcase,
    title: "What I Do",
    text: "Full-stack development with React, TypeScript, Node.js, Express, PHP, PostgreSQL, and MySQL focused on performance, accessibility, and maintainable architecture.",
  },
  {
    icon: GraduationCap,
    title: "Always Learning",
    text: "Constantly exploring new tools and frameworks, contributing to open-source, and staying current with modern best practices.",
  },
];

export default function AboutSection() {
  const revealRef = useScrollReveal();
  const parallaxRef = useParallax(-0.06);

  return (
    <section id="about" className="relative overflow-hidden py-32 px-6">
      <div
        ref={parallaxRef}
        className="blob-2 pointer-events-none absolute -right-40 top-10 h-80 w-80 opacity-[0.04] dark:opacity-[0.03]"
        style={{ background: "var(--gradient-primary)" }}
      />

      <div ref={revealRef} className="section-reveal stagger-parent mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            About
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            A bit about me
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground text-pretty">
            Hi! I'm Bryle James Agra, passionate about creating seamless digital experiences
            that make a real difference.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className="card-dynamic stagger-child rounded-2xl p-6"
              style={{ transitionDelay: `${i * 100 + 150}ms` }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
