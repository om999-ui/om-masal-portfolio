import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Download, Eye, Github, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Om Masal — Hire a Full-Stack Developer" },
      {
        name: "description",
        content:
          "Get in touch with Om Masal for full-stack developer roles, freelance MERN projects or collaboration. Email and GitHub links included.",
      },
      { property: "og:title", content: "Contact Om Masal — Hire a Full-Stack Developer" },
      {
        property: "og:description",
        content: "Reach out about full-stack roles, MERN projects or collaboration.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <p className="font-mono text-xs tracking-[0.25em] text-primary uppercase">Contact</p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Let's talk</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Open to full-stack developer roles, internships and freelance MERN work. The fastest way to
        reach me is email.
      </p>
      <div className="rule-line mt-10" />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <a
          href={`mailto:${profile.email}`}
          className="panel group flex items-start justify-between gap-4 p-7 transition-transform hover:-translate-y-1"
        >
          <div>
            <Mail className="h-5 w-5 text-primary" />
            <h2 className="mt-4 text-lg font-semibold">Email</h2>
            <p className="mt-1 text-sm break-all text-muted-foreground">{profile.email}</p>
          </div>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
        </a>

        <a
          href={`tel:${profile.phoneHref}`}
          className="panel group flex items-start justify-between gap-4 p-7 transition-transform hover:-translate-y-1"
        >
          <div>
            <Phone className="h-5 w-5 text-primary" />
            <h2 className="mt-4 text-lg font-semibold">Phone</h2>
            <p className="mt-1 text-sm text-muted-foreground">{profile.phone}</p>
          </div>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
        </a>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="panel group flex items-start justify-between gap-4 p-7 transition-transform hover:-translate-y-1"
        >
          <div>
            <Github className="h-5 w-5 text-primary" />
            <h2 className="mt-4 text-lg font-semibold">GitHub</h2>
            <p className="mt-1 text-sm text-muted-foreground">github.com/om999-ui</p>
          </div>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
        </a>

        <div className="panel p-7">
          <Eye className="h-5 w-5 text-primary" />
          <h2 className="mt-4 text-lg font-semibold">Resume</h2>
          <p className="mt-1 text-sm text-muted-foreground">One-page PDF, updated 2026.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Eye className="h-3.5 w-3.5" /> View resume
            </a>
            <a
              href={profile.resume}
              download="Om-Masal-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-4 py-2 text-xs font-semibold transition-colors hover:bg-secondary"
            >
              <Download className="h-3.5 w-3.5" /> Download
            </a>
          </div>
        </div>
      </div>

      <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4" /> Based in {profile.location} · available remotely
      </p>

    </div>
  );
}
