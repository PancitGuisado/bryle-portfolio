import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="contact"
      className="py-32 px-6"
      style={{ background: "var(--gradient-subtle)" }}
    >
      <div ref={revealRef} className="section-reveal mx-auto max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Contact
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
          Let's work together
        </h2>
        <p className="mt-4 text-base text-muted-foreground text-pretty">
          I'm always open to new opportunities and collaborations. Drop me a line. I'd
          love to hear from you.
        </p>

        <a
          href="mailto:brylejamesagra@gmail.com"
          className="group relative mt-8 inline-flex h-12 items-center gap-2.5 overflow-hidden rounded-xl px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/35 active:scale-[0.97]"
          style={{ background: "var(--gradient-primary)" }}
        >
          <Mail className="h-4 w-4" />
          <span className="relative z-10">Say Hello</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          <div className="absolute inset-0 bg-foreground/10 opacity-0 transition-opacity group-hover:opacity-100" />
        </a>

        <div className="mt-10 flex items-center justify-center gap-3">
          {[
            { icon: Github, label: "GitHub", href: "https://github.com/PancitGuisado" },
            {
              icon: Linkedin,
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/bryle-james-agra-b233212b0/",
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground hover:shadow-[0_0_20px_-6px_hsl(var(--primary)/0.2)] active:scale-95"
              aria-label={social.label}
            >
              <social.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
