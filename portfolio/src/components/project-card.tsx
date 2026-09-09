import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/portfolio-data";

const accentText: Record<Project["accent"], string> = {
  one: "text-accent-one",
  two: "text-accent-two",
  three: "text-accent-three",
  four: "text-accent-four",
};

const accentBg: Record<Project["accent"], string> = {
  one: "bg-accent-one",
  two: "bg-accent-two",
  three: "bg-accent-three",
  four: "bg-accent-four",
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="panel group relative overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8">
      <span
        className={`absolute inset-x-0 top-0 h-px opacity-60 ${accentBg[project.accent]}`}
        aria-hidden
      />
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className={`font-mono text-xs uppercase tracking-widest ${accentText[project.accent]}`}>
            {String(index + 1).padStart(2, "0")} · {project.category}
          </p>
          <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
          <p className="mt-1 max-w-xl text-sm text-muted-foreground">{project.tagline}</p>
        </div>
        <div className="flex gap-2">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Live demo <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-2 px-3 py-2 text-xs font-semibold transition-colors hover:bg-secondary"
            >
              <Github className="h-3.5 w-3.5" /> Code
            </a>
          )}
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2.5 text-sm text-muted-foreground">
            <span
              className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accentBg[project.accent]}`}
              aria-hidden
            />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
