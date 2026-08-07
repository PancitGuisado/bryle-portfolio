import ThemeToggle from "./ThemeToggle";
import SpotifyWidget from "./SpotifyWidget";
import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", hash: "about" },
  { label: "Skills", hash: "skills" },
  { label: "Projects", hash: "projects" },
  { label: "Contact", hash: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
      e.preventDefault();
      if (isHome) {
        const el = document.getElementById(hash);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 88;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      } else {
        navigate("/#" + hash);
      }
    },
    [isHome, navigate],
  );

  const handleLogoClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (isHome) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
    },
    [isHome, navigate],
  );

  /* On homepage mount, scroll to hash if present (e.g. navigated from /projects) */
  useEffect(() => {
    if (isHome && location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 88;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  }, [isHome, location.hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="/" onClick={handleLogoClick} className="group font-display text-xl font-bold tracking-tight text-foreground transition-colors">
          birashii.dev
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.hash}
              href={`/#${l.hash}`}
              onClick={(e) => handleNavClick(e, l.hash)}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:bottom-1 after:left-4 after:right-4 after:h-px after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
          <div className="ml-4 flex items-center gap-2">
            <SpotifyWidget />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <SpotifyWidget />
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted active:scale-95"
            aria-label="Menu"
          >
            <div className="relative h-4 w-4">
              <Menu className={`absolute inset-0 h-4 w-4 transition-all duration-300 ${open ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`} />
              <X className={`absolute inset-0 h-4 w-4 transition-all duration-300 ${open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`} />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? "max-h-64 opacity-100" : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="px-6 py-3">
          {links.map((l, i) => (
            <a
              key={l.hash}
              href={`/#${l.hash}`}
              onClick={(e) => {
                handleNavClick(e, l.hash);
                setOpen(false);
              }}
              className="block py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
