"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { useReveal } from "@/hooks/use-reveal";

export function EndorsementStrip() {
  const ref = useReveal<HTMLDivElement>({ y: 26, stagger: 0.08 });

  return (
    <section
      id="endorsement"
      className="relative overflow-hidden bg-background px-6 py-24 md:px-12 md:py-32 lg:px-20"
    >
      {/* Soft lime wash anchored to the quote — mirrors the body's vignette
          treatment so the section reads as "lit from above" without a card. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 12% 20%, rgba(200, 226, 92, 0.07), transparent 65%), radial-gradient(ellipse 60% 50% at 95% 90%, rgba(255, 255, 255, 0.04), transparent 70%)",
        }}
      />

      <div ref={ref} className="container-shell relative">
        {/* Header row — eyebrow + provenance hairline */}
        <div data-reveal className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
          <p className="eyebrow">Endorsement · Letter from the PM</p>
          <p className="eyebrow text-foreground/50">
            Office of the Prime Minister · Ottawa
          </p>
        </div>

        <div className="mt-14 hairline" />

        {/* Pull-quote — asymmetric grid: an oversized lime serif quotemark
            anchors the left column, the headline-weight quote spans the rest. */}
        <div className="mt-12 grid items-start gap-x-10 gap-y-8 md:grid-cols-[auto_1fr] md:gap-x-14 lg:gap-x-20">
          <div data-reveal className="relative -mt-6 md:-mt-10 lg:-mt-14">
            <span
              aria-hidden
              className="block select-none font-serif italic leading-none text-accent quote-breath"
              style={{
                fontSize: "clamp(8rem, 18vw, 16rem)",
                lineHeight: 0.7,
              }}
            >
              &ldquo;
            </span>
          </div>

          <blockquote data-reveal className="max-w-5xl">
            <p className="display-hero text-4xl leading-[0.96] md:text-6xl lg:text-[5.25rem]">
              A <span className="display-italic text-muted-foreground">powerful</span> commitment to community engagement and public{" "}
              <span className="display-italic text-muted-foreground">well-being.</span>
            </p>

            <p className="mt-10 max-w-3xl font-serif text-xl leading-[1.45] text-muted-foreground md:text-2xl">
              &ldquo;Powerful movements such as yours are not only a demonstration of commitment and leadership, but also
              a reflection of the meaningful legacy your work will have on mental health awareness and support within our
              community.&rdquo;
            </p>
          </blockquote>
        </div>

        {/* Signature + CTA — keep the attribution visually weighted left,
            CTA right, divided by a thin hairline so it reads as a letterhead
            footer rather than a card. */}
        <div className="mt-16 hairline" />

        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div data-reveal>
            <SignatureMark className="h-10 w-auto text-foreground/80 md:h-12" />
            <p className="mt-5 font-display text-2xl tracking-tight md:text-3xl">
              The Rt. Hon. Mark Carney
            </p>
            <p className="mt-2 font-serif text-base italic text-muted-foreground md:text-lg">
              Prime Minister of Canada · Member of Parliament for Nepean
            </p>
          </div>

          <div data-reveal className="flex flex-wrap gap-3">
            <Link
              href="/carney.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="pill-cta bg-accent text-accent-foreground hover:shadow-[0_18px_60px_rgba(200,226,92,0.3)]"
            >
              Read the full letter
              <ArrowUpRight size={16} />
            </Link>
            <Link href="#donate" className="pill-ghost">
              Back the ride
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Stylized signature scrawl — abstract handwritten mark, not a forgery of the
 * actual signature. Keeps the letterhead feel without claiming to reproduce
 * the PM's signing.
 */
function SignatureMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 56"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M6 38 C 18 14, 30 12, 36 30 C 40 44, 28 48, 24 38 C 22 30, 38 22, 56 22 C 74 22, 70 40, 60 42" />
      <path d="M72 30 C 86 14, 100 18, 96 32 C 94 42, 84 38, 90 28 C 100 14, 124 18, 116 36 C 112 46, 130 30, 144 22" />
      <path d="M148 26 C 158 18, 174 22, 170 34 C 168 42, 158 40, 162 30 C 168 18, 196 22, 210 14" />
      <path d="M30 46 L 200 48" strokeOpacity="0.35" />
    </svg>
  );
}
