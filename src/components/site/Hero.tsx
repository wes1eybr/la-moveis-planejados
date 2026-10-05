import { ArrowDown, MessageCircle } from "lucide-react";

import { assets } from "@/data/assets";
import { siteConfig } from "@/config/site";
import { requestQuote, scrollToSection } from "@/lib/quote-prefill";

const hero = assets.fachada;

export function Hero() {
  return (
    <section id="topo" className="relative min-h-[100svh] w-full overflow-hidden bg-graphite">
      <img
        src={hero.src}
        alt={hero.alt}
        width={hero.width}
        height={hero.height}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full scale-105 object-cover"
        style={{ objectPosition: hero.desktopPosition }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.19 0 0 / 0.72) 0%, oklch(0.19 0 0 / 0.42) 38%, oklch(0.19 0 0 / 0.86) 100%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pt-32 pb-16 lg:px-10 lg:pb-24">
        <div className="max-w-3xl">
          <p className="eyebrow text-onDark/70">{siteConfig.tagline}</p>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,8vw,6rem)] leading-[0.95] text-onDark">
            Móveis planejados
            <span className="block italic text-gold">para a sua rotina</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-onDark/80 sm:text-lg">
            Projetamos, produzimos e instalamos marcenaria sob medida — do desenho técnico ao último
            detalhe de acabamento, com foco em uso real, organização e durabilidade.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={() => requestQuote({ reference: "Hero — Solicitar orçamento" })}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-xs font-medium tracking-widest text-graphite uppercase transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Solicitar orçamento
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-onDark/35 px-8 py-4 text-xs font-medium tracking-widest text-onDark uppercase transition-colors hover:border-onDark/70"
            >
              Ver projetos
            </button>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("servicos")}
          aria-label="Rolar para os serviços"
          className="mt-16 hidden w-fit items-center gap-3 text-onDark/60 transition-colors hover:text-onDark lg:flex"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
          <span className="eyebrow text-[10px]">Explore o estúdio</span>
        </button>
      </div>
    </section>
  );
}
