import { createFileRoute } from "@tanstack/react-router";
import { profile, skills } from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Om Masal — MERN Stack Developer" },
      {
        name: "description",
        content:
          "About Om Masal: a full-stack developer specialising in React, Node.js, Express and MongoDB, with experience in REST API design, ML deployment and Docker.",
      },
      { property: "og:title", content: "About Om Masal — MERN Stack Developer" },
      {
        property: "og:description",
        content:
          "How I work, what I build and the technologies I use across frontend, backend, data and deployment.",
      },
    ],
  }),
  component: AboutPage,
});

const focus = [
  {
    title: "Full-stack ownership",
    body: "From MongoDB schema design and Express controllers to React screens and deployment on Vercel and Render — I ship the whole slice.",
  },
  {
    title: "Secure by default",
    body: "JWT authentication, bcrypt password hashing, protected routes and role-based authorization patterns across users, organizers and admins.",
  },
  {
    title: "API craftsmanship",
    body: "RESTful endpoints with validation, consistent error handling and performance-minded queries.",
  },
  {
    title: "Beyond the web stack",
    body: "Scikit-Learn models served through Flask, containerised with Docker, plus Java/JDBC systems on MySQL.",
  },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <p className="font-mono text-xs tracking-[0.25em] text-primary uppercase">About</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">
        {profile.name}, {profile.role}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {profile.summary}
      </p>
      <div className="rule-line mt-10" />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {focus.map((f) => (
          <div key={f.title} className="panel p-6">
            <h2 className="text-lg font-semibold">{f.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-16 text-2xl font-bold">Skills</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <div key={group.group} className="panel p-5">
            <h3 className="font-mono text-xs tracking-widest text-primary uppercase">
              {group.group}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
