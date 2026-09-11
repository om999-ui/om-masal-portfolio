import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Om Masal, Full-Stack Developer" },
      {
        name: "description",
        content:
          "Full-stack projects by Om Masal: FitMeal nutrition tracker, EventX ticket booking with Razorpay, JSTACK job portal, a Dockerised ML weather API and a Java booking backend.",
      },
      { property: "og:title", content: "Projects — Om Masal, Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "MERN, Python ML and Java backend projects with live demos, source code and technical highlights.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <p className="font-mono text-xs tracking-[0.25em] text-primary uppercase">Portfolio</p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Projects</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Five products built end to end — authentication, REST APIs, payments, dashboards, machine
        learning and relational backends.
      </p>
      <div className="rule-line mt-8" />

      <div className="mt-10 grid gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}
