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

        <form
          action="https://formsubmit.co/brylejamesfagra@gmail.com"
          method="POST"
          className="mx-auto mt-10 max-w-md space-y-4 text-left"
        >
          {/* FormSubmit Configuration */}
          <input type="hidden" name="_subject" value="New Contact Form Submission from Portfolio" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Your Name"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Your Email"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              placeholder="Your Message"
              className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            className="group relative mt-2 inline-flex w-full h-12 items-center justify-center gap-2.5 overflow-hidden rounded-xl px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/35 active:scale-[0.98]"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Mail className="h-4 w-4" />
            <span className="relative z-10">Send Message</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            <div className="absolute inset-0 bg-foreground/10 opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        </form>

        <div className="mt-10 flex items-center justify-center gap-3">
          {[
            { icon: Github, label: "GitHub", href: "https://github.com/PancitGuisado" },
            {
              icon: Linkedin,
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/bryle-james-agra-b233212b0/",
            },
            {
              icon: () => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 transition-transform group-hover:scale-110"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              ),
              label: "Facebook",
              href: "https://www.facebook.com/bryle.agra.2025",
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
              {social.label === "Facebook" ? (
                <social.icon />
              ) : (
                <social.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
