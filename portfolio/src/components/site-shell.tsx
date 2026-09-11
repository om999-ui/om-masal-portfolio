import { Link } from "@tanstack/react-router";
import { Download, Github, Mail, Phone } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

const nav = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/certificates", label: "Certificates" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground">
            OM
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">
            {profile.name}
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground bg-secondary" }}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={profile.resume}
            download="Om-Masal-Resume.pdf"
            className="ml-2 hidden items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" /> Resume
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="ml-1 hidden rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            <Github className="h-4 w-4" />
          </a>

        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.role}
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <a
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            href={`mailto:${profile.email}`}
          >
            <Mail className="h-4 w-4" /> {profile.email}
          </a>
          <a
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            href={`tel:${profile.phoneHref}`}
          >
            <Phone className="h-4 w-4" /> {profile.phone}
          </a>
          <a
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            href={profile.resume}
            download="Om-Masal-Resume.pdf"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </div>

      </div>
    </footer>
  );
}
