import { Ruler, Hammer, ShieldCheck, Sparkles } from "lucide-react";

import { Reveal } from "./Primitives";

const pillars = [
  {
    icon: Ruler,
    title: "Projeto sob medida",
    text: "Levantamento no local e desenho técnico ajustado ao milímetro do seu ambiente.",
  },
  {
    icon: Hammer,
    title: "Marcenaria própria",
    text: "Produção acompanhada peça a peça, com controle de acabamento e ferragens.",
  },
  {
    icon: ShieldCheck,
    title: "Instalação especializada",
    text: "Equipe própria na montagem, alinhamento e regulagem final de cada módulo.",
  },
  {
    icon: Sparkles,
    title: "Detalhes que importam",
    text: "Iluminação embutida, organizadores internos e soluções que não existem em catálogo.",
  },
];

export function TrustStrip() {
  return (
    <section className="border-b border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 90}>
              <pillar.icon className="h-6 w-6 text-wood" strokeWidth={1.25} />
              <h3 className="mt-5 text-xl text-foreground">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
