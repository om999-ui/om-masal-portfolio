import { createFileRoute } from "@tanstack/react-router";
import { CertificateCard } from "@/components/certificate-card";
import { certificates } from "@/lib/portfolio-data";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates — Om Masal, Full-Stack Developer" },
      {
        name: "description",
        content:
          "Certifications by Om Masal: Oracle Cloud Infrastructure AI Foundations Associate, Udemy Full-Stack Web Development Bootcamp, HackerRank SQL and Java, and GSSoC 2025 contributor.",
      },
      { property: "og:title", content: "Certificates — Om Masal, Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Verified certifications and open-source contributions across cloud AI, full-stack web development, SQL, Java and more.",
      },
    ],
  }),
  component: CertificatesPage,
});

function CertificatesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <p className="font-mono text-xs tracking-[0.25em] text-primary uppercase">Credentials</p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Certificates</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        A collection of verified certifications and open-source contributions that back up the
        skills behind my projects.
      </p>
      <div className="rule-line mt-8" />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c) => (
          <CertificateCard key={c.slug} certificate={c} />
        ))}
      </div>
    </div>
  );
}
