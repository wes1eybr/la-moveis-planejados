import { useMemo, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

import { assets } from "@/data/assets";
import { portfolio, portfolioCategories, type PortfolioCategory } from "@/data/portfolio";
import { requestQuote } from "@/lib/quote-prefill";
import { cn } from "@/lib/utils";
import { Reveal } from "./Primitives";

type Filter = "Todos" | PortfolioCategory;

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>("Todos");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "Todos" ? portfolio : portfolio.filter((i) => i.category === filter)),
    [filter],
  );

  const current = lightbox !== null ? items[lightbox] : undefined;

  return (
    <section id="projetos" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-wood">Projetos realizados</p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] text-foreground">
            Ambientes que já foram entregues
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Fotografias reais de projetos LA. Toque em uma imagem para ampliar e use os filtros para
            encontrar o ambiente que você quer planejar.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
          {(["Todos", ...portfolioCategories] as Filter[]).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setLightbox(null);
              }}
              className={cn(
                "rounded-full border px-5 py-2 text-xs tracking-widest uppercase transition-colors",
                filter === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const asset = assets[item.id];
            const tall = i % 5 === 0;
            return (
              <Reveal key={`${item.id}-${i}`} delay={(i % 3) * 80}>
                <button
                  onClick={() => setLightbox(i)}
                  className={cn(
                    "group relative block w-full overflow-hidden bg-secondary",
                    tall ? "aspect-[3/4]" : "aspect-[4/5]",
                  )}
                  aria-label={`Ampliar: ${item.caption}`}
                >
                  <img
                    src={asset.src}
                    alt={asset.alt}
                    width={asset.width}
                    height={asset.height}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    style={{ objectPosition: asset.desktopPosition }}
                  />
                  <div className="absolute inset-0 bg-graphite/0 transition-colors duration-500 group-hover:bg-graphite/35" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-left opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="text-sm text-onDark">{item.caption}</span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-gold" />
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-graphite/95 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
            className="absolute top-5 right-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-onDark/30 text-onDark"
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-h-[88vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={assets[current.id].src}
              alt={assets[current.id].alt}
              className="max-h-[74vh] w-full object-contain"
            />
            <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <span className="text-sm text-onDark/80">{current.caption}</span>
              <button
                onClick={() => {
                  setLightbox(null);
                  requestQuote({
                    environment: current.category,
                    reference: `Projeto — ${current.caption}`,
                  });
                }}
                className="rounded-full bg-gold px-6 py-3 text-xs font-medium tracking-widest text-graphite uppercase"
              >
                Quero algo assim
              </button>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
