import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { assets } from "@/data/assets";
import { services } from "@/data/services";
import { requestQuote } from "@/lib/quote-prefill";
import { cn } from "@/lib/utils";

const toneOverlay: Record<string, string> = {
  graphite: "oklch(0.19 0 0 / 0.86)",
  wood: "oklch(0.28 0.05 55 / 0.85)",
  sand: "oklch(0.24 0.02 85 / 0.85)",
  copper: "oklch(0.28 0.08 45 / 0.85)",
};

/**
 * Experiência imersiva de serviços: o fundo é a própria fotografia do serviço
 * ativo, duplicada e desfocada por CSS (sem canvas / sem JS pesado).
 */
export function ServicesImmersive() {
  const [active, setActive] = useState(0);
  const sceneRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset['index']);
            if (!Number.isNaN(index)) setActive(index);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    sceneRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeService = services[active] ?? services[0]!;
  const activeAsset = assets[activeService.image];

  return (
    <section id="servicos" className="relative bg-graphite">
      {/* Camada de fundo fixa */}
      <div className="sticky top-0 hidden h-screen w-full overflow-hidden lg:block">
        {services.map((service, i) => {
          const asset = assets[service.image];
          return (
            <img
              key={service.id}
              src={asset.src}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className={cn(
                "absolute inset-0 h-full w-full scale-110 object-cover blur-[6px] transition-opacity duration-[1200ms] ease-out",
                i === active ? "opacity-100" : "opacity-0",
              )}
              style={{ objectPosition: asset.desktopPosition }}
            />
          );
        })}
        <div
          className="absolute inset-0 transition-colors duration-[1200ms]"
          style={{ backgroundColor: toneOverlay[activeService.tone] }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.15 0 0 / 0.85) 0%, oklch(0.15 0 0 / 0.55) 45%, oklch(0.15 0 0 / 0.25) 100%)",
          }}
        />

        {/* Conteúdo em duas colunas sobre o fundo */}
        <div className="absolute inset-0 mx-auto flex max-w-7xl items-center px-10">
          <div className="grid w-full grid-cols-12 items-center gap-12">
            <div className="col-span-5">
              <p className="eyebrow text-onDark/60">
                {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
              </p>
              <h2 className="mt-6 font-display text-6xl leading-[1] text-onDark">
                {activeService.title}
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-onDark/80">
                {activeService.description}
              </p>
              <ul className="mt-8 space-y-2">
                {activeService.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm text-onDark/70">
                    <span className="h-px w-6 bg-gold" />
                    {b}
                  </li>
                ))}
              </ul>
              <button
                onClick={() =>
                  requestQuote({
                    environment: activeService.title,
                    reference: `Serviços — ${activeService.title}`,
                  })
                }
                className="mt-10 inline-flex items-center gap-2 rounded-full border border-onDark/35 px-7 py-3.5 text-xs font-medium tracking-widest text-onDark uppercase transition-colors hover:border-gold hover:text-gold"
              >
                Quero este ambiente
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>

            <div className="col-span-7 flex justify-end">
              <div className="relative h-[68vh] w-[75%] overflow-hidden shadow-soft">
                {services.map((service, i) => {
                  const asset = assets[service.image];
                  return (
                    <img
                      key={service.id}
                      src={asset.src}
                      alt={asset.alt}
                      loading="lazy"
                      decoding="async"
                      className={cn(
                        "absolute inset-0 h-full w-full object-cover transition-all duration-[1100ms] ease-out",
                        i === active ? "scale-100 opacity-100" : "scale-105 opacity-0",
                      )}
                      style={{ objectPosition: asset.desktopPosition }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trilho de rolagem (desktop): cada cena controla o índice ativo */}
      <div className="hidden lg:block" style={{ marginTop: "-100vh" }} aria-hidden="true">
        {services.map((service, i) => (
          <div
            key={service.id}
            data-index={i}
            ref={(el) => {
              sceneRefs.current[i] = el;
            }}
            className="h-screen"
          />
        ))}
      </div>

      {/* Versão mobile: cards empilhados */}
      <div className="lg:hidden">
        <div className="mx-auto max-w-2xl px-5 py-20">
          <p className="eyebrow text-onDark/60">O que fazemos</p>
          <h2 className="mt-4 font-display text-4xl text-onDark">
            Ambientes planejados de ponta a ponta
          </h2>
        </div>
        <div className="space-y-6 px-5 pb-20">
          {services.map((service) => {
            const asset = assets[service.image];
            return (
              <article key={service.id} className="overflow-hidden bg-card">
                <img
                  src={asset.src}
                  alt={asset.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-64 w-full object-cover"
                  style={{ objectPosition: asset.mobilePosition }}
                />
                <div className="p-6">
                  <h3 className="font-display text-2xl text-card-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <button
                    onClick={() =>
                      requestQuote({
                        environment: service.title,
                        reference: `Serviços — ${service.title}`,
                      })
                    }
                    className="mt-5 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-wood uppercase"
                  >
                    Quero este ambiente
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Miniatura escondida para pré-carregar a imagem ativa em telas grandes */}
      <link rel="preload" as="image" href={activeAsset.src} />
    </section>
  );
}
