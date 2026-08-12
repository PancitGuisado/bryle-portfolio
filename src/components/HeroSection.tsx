import { ArrowDown, Code2, Sparkles } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function HeroSection() {
  const parallaxRef = useParallax(0.12);
  const parallaxRef2 = useParallax(-0.08);
  const portraitParallaxRef = useParallax(0.05);
  const mouse = useMousePosition();

  const moveX = (mouse.x / window.innerWidth - 0.5) * 20;
  const moveY = (mouse.y / window.innerHeight - 0.5) * 20;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
      <div
        ref={parallaxRef}
        className="blob pointer-events-none absolute -top-32 -right-20 h-[420px] w-[420px] opacity-[0.08] dark:opacity-[0.06]"
        style={{
          background: "var(--gradient-primary)",
          transform: `translate(${moveX * 0.3}px, ${moveY * 0.3}px)`,
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
      <div
        ref={parallaxRef2}
        className="blob-2 pointer-events-none absolute -bottom-20 -left-32 h-[350px] w-[350px] opacity-[0.06] dark:opacity-[0.04]"
        style={{
          background: "var(--gradient-primary)",
          transform: `translate(${moveX * -0.2}px, ${moveY * -0.2}px)`,
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      <div className="pointer-events-none absolute left-[15%] top-[25%] animate-float opacity-20 dark:opacity-10">
        <Code2 className="h-6 w-6 text-primary" />
      </div>
      <div className="pointer-events-none absolute right-[18%] top-[35%] animate-float-delayed opacity-15 dark:opacity-10">
        <Sparkles className="h-5 w-5 text-primary" />
      </div>
      <div className="pointer-events-none absolute left-[22%] bottom-[30%] h-2 w-2 animate-float-delayed rounded-full bg-primary opacity-20" />
      <div className="pointer-events-none absolute right-[25%] bottom-[25%] h-1.5 w-1.5 animate-float rounded-full bg-primary opacity-15" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[600px] w-[600px] animate-spin-slow rounded-full border border-border/30 opacity-30 dark:opacity-15" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="text-center lg:text-left">
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 shadow-sm backdrop-blur-sm opacity-0 animate-fade-up"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              Available for work
            </span>
          </div>

          <h1
            className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-foreground opacity-0 animate-fade-up sm:text-6xl lg:text-7xl text-balance"
            style={{ animationDelay: "0.2s", lineHeight: "1.05" }}
          >
            Bryle James <span className="gradient-text">Agra</span>
          </h1>
          <p
            className="mt-2 text-lg font-medium tracking-wide text-muted-foreground opacity-0 animate-fade-up sm:text-xl lg:max-w-lg"
            style={{ animationDelay: "0.35s" }}
          >
            Full-Stack Developer
          </p>
          <p
            className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground/80 opacity-0 animate-fade-up text-pretty lg:mx-0"
            style={{ animationDelay: "0.45s" }}
          >
            Building clean, performant web applications with modern technologies
            and a passion for seamless user experiences.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-up lg:justify-start"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#projects"
              className="group relative inline-flex h-12 items-center overflow-hidden rounded-xl px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/35 active:scale-[0.97]"
              style={{ background: "var(--gradient-primary)" }}
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-foreground/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center rounded-xl border border-border bg-card px-7 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-primary/30 hover:shadow-md active:scale-[0.97]"
            >
              Get in Touch
            </a>
          </div>

          <div
            className="mt-16 flex items-center justify-center gap-12 opacity-0 animate-fade-up lg:justify-start"
            style={{ animationDelay: "0.75s" }}
          >
            {[
              { value: "3+", label: "Years Exp." },
              { value: "8+", label: "Projects" },
              { value: "10+", label: "Technologies" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl font-bold text-foreground tabular-nums">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={portraitParallaxRef}
          className="relative mx-auto w-full max-w-sm opacity-0 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="absolute inset-x-12 top-10 h-[78%] rounded-full bg-primary/15 blur-3xl" />
          <img
            src="/bryle-portrait.png"
            alt="Bryle James Agra portrait"
            className="relative z-10 h-full w-full object-contain drop-shadow-[0_30px_60px_hsl(var(--primary)/0.2)] dark:hidden"
          />
          <img
            src="/bryle-portrait-dark.png"
            alt="Bryle James Agra portrait for dark mode"
            className="relative z-10 hidden h-full w-full object-contain drop-shadow-[0_34px_72px_hsl(var(--primary)/0.28)] dark:block"
          />
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground transition-all hover:text-primary hover:-translate-y-1"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
