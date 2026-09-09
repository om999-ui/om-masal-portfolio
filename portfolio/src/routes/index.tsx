import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Eye, Github, Mail, MapPin, Phone } from "lucide-react";
import { CertificateCard } from "@/components/certificate-card";
import { ProjectCard } from "@/components/project-card";
import { certificates, profile, projects, skills } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Om Masal — Full-Stack MERN Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Om Masal, full-stack developer building MERN apps: FitMeal nutrition tracker, EventX ticketing platform, JSTACK job portal and a Dockerised ML weather API.",
      },
      { property: "og:title", content: "Om Masal — Full-Stack MERN Developer Portfolio" },
      {
        property: "og:description",
        content:
          "React, Node.js, Express and MongoDB projects shipped end to end — dashboards, payments, REST APIs and machine learning.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="hero-glow relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Open to full-stack developer roles & internships
          </div>

          <h1 className="animate-rise mt-7 max-w-4xl text-4xl leading-[1.05] font-bold sm:text-6xl lg:text-7xl">
            <span className="text-gradient">{profile.headline}</span>
          </h1>

          <p className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.summary}
          </p>

          <div className="animate-rise mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="glow-ring inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View my work <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-surface px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            >
              <Eye className="h-4 w-4" /> View resume
            </a>
            <a
              href={profile.resume}
              download="Om-Masal-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              <Download className="h-4 w-4" /> Download resume
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              <Mail className="h-4 w-4" /> Get in touch
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" /> {profile.email}
            </a>
            <a
              href={`tel:${profile.phoneHref}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4" /> {profile.phone}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
          </div>


          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
            {[
              { k: "5", v: "Projects shipped" },
              { k: "MERN", v: "Core stack" },
              { k: "REST", v: "API design" },
              { k: "Docker", v: "Deployment" },
            ].map((s) => (
              <div key={s.v} className="bg-surface px-5 py-6">
                <dt className="font-display text-2xl font-bold text-primary">{s.k}</dt>
                <dd className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading label="Toolkit" title="Technologies I work with" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div key={group.group} className="panel p-5">
              <h3 className="font-mono text-xs tracking-widest text-primary uppercase">
                {group.group}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading label="Credentials" title="Certificates" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.slice(0, 3).map((c) => (
            <CertificateCard key={c.slug} certificate={c} />
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/certificates"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            See all certificates <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading label="Selected work" title="Featured projects" />
        <div className="mt-10 grid gap-6">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            See all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="panel hero-glow flex flex-col items-start gap-5 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Let's build something together</h2>
            <p className="mt-2 max-w-lg text-sm text-muted-foreground">
              I'm currently looking for full-stack roles where I can own features end to end.
            </p>
          </div>
          <Link
            to="/contact"
            className="glow-ring inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Contact me <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-xs tracking-[0.25em] text-primary uppercase">{label}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      <div className="rule-line mt-6 w-full" />
    </div>
  );
}
