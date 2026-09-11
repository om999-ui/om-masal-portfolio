import { Award, Download, ExternalLink } from "lucide-react";
import type { Certificate } from "@/lib/portfolio-data";

const accentText: Record<Certificate["accent"], string> = {
  one: "text-accent-one",
  two: "text-accent-two",
  three: "text-accent-three",
  four: "text-accent-four",
};

const accentBg: Record<Certificate["accent"], string> = {
  one: "bg-accent-one",
  two: "bg-accent-two",
  three: "bg-accent-three",
  four: "bg-accent-four",
};

export function CertificateCard({ certificate }: { certificate: Certificate }) {
  const viewUrl = certificate.verifyUrl ?? certificate.file;

  return (
    <article className="panel group relative flex flex-col overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
      <span
        className={`absolute inset-x-0 top-0 h-px opacity-60 ${accentBg[certificate.accent]}`}
        aria-hidden
      />

      <div className="flex items-start justify-between gap-4">
        <div className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface-2">
          <Award className={`h-5 w-5 ${accentText[certificate.accent]}`} />
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {certificate.issuer}
        </p>
      </div>

      <h3 className="mt-5 text-lg font-semibold leading-snug">{certificate.title}</h3>

      {certificate.description && (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {certificate.description}
        </p>
      )}

      <div className="mt-4 space-y-1 text-xs text-muted-foreground">
        <p>
          <span className="font-medium text-foreground">Earned:</span> {certificate.date}
        </p>
        {certificate.credentialId && (
          <p className="break-all">
            <span className="font-medium text-foreground">Credential ID:</span>{" "}
            {certificate.credentialId}
          </p>
        )}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
        {viewUrl && (
          <a
            href={viewUrl}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-opacity hover:opacity-90 ${
              certificate.file
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-surface-2 text-foreground hover:bg-secondary"
            }`}
          >
            <ExternalLink className="h-3.5 w-3.5" />
            {certificate.verifyUrl ? "Verify" : "View certificate"}
          </a>
        )}
        {certificate.file && (
          <a
            href={certificate.file}
            download={`${certificate.slug}.pdf`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-2 px-3 py-2 text-xs font-semibold transition-colors hover:bg-secondary"
          >
            <Download className="h-3.5 w-3.5" /> Download
          </a>
        )}
      </div>
    </article>
  );
}
