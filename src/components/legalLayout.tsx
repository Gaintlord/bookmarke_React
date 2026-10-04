import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { HomeLogoAncher } from "./homeLogoAncher";

export const LegalList = ({ items }: Readonly<{ items: ReactNode[] }>) => {
  return (
    <ul className="list-disc space-y-2 pl-6 marker:text-blue-300">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export const LegalSection = ({
  id,
  title,
  children,
}: Readonly<{ id: string; title: string; children: ReactNode }>) => {
  return (
    <section className="mt-9 scroll-mt-24" id={id}>
      <h2 className="suse-mono text-xl font-bold text-blue-950 sm:text-2xl">
        {title}
      </h2>
      <div className="mt-3 space-y-3 font-mono text-sm leading-7 text-gray-600">
        {children}
      </div>
    </section>
  );
};

export const LegalPage = ({
  title,
  updated,
  children,
}: Readonly<{ title: string; updated: string; children: ReactNode }>) => {
  return (
    <div className="min-h-screen bg-blue-50 text-blue-950">
      <header className="sticky top-0 z-30 border-b-2 border-blue-100 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex min-h-18 max-w-3xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <HomeLogoAncher className="w-30 shrink-0 sm:w-36" />
          <Link
            className="font-mono text-sm font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-800"
            to="/"
          >
            Back to Home
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-10">
          <h1 className="suse-mono text-3xl font-bold text-blue-950 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 font-mono text-sm text-gray-500">
            Last updated: {updated}
          </p>
          <div className="mt-5 font-mono text-sm leading-7 text-gray-600 [&>p]:mt-3 [&>p:first-child]:mt-0">
            {children}
          </div>
        </article>
      </main>
    </div>
  );
};
