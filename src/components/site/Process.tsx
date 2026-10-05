import { Reveal } from "./Primitives";

const steps = [
  {
    n: "01",
    title: "Conversa inicial",
    text: "Entendemos o ambiente, a rotina da casa, o estilo desejado e a faixa de investimento.",
  },
  {
    n: "02",
    title: "Medição no local",
    text: "Levantamento técnico com conferência de pontos elétricos, hidráulicos e desníveis.",
  },
  {
    n: "03",
    title: "Projeto 3D",
    text: "Você visualiza o ambiente antes de produzir e ajusta cada detalhe com a nossa equipe.",
  },
  {
    n: "04",
    title: "Aprovação e produção",
    text: "Com o projeto fechado, as peças entram em produção com controle de acabamento.",
  },
  {
    n: "05",
    title: "Instalação",
    text: "Montagem feita por equipe especializada, com regulagem final e limpeza do ambiente.",
  },
  {
    n: "06",
    title: "Pós-entrega",
    text: "Acompanhamento após a instalação para ajustes e orientações de uso e conservação.",
  },
];

export function Process() {
  return (
    <section id="processo" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-wood">Como trabalhamos</p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] text-foreground">
            Do primeiro contato à última regulagem
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.n} delay={(i % 3) * 100}>
              <div className="border-t border-border pt-6">
                <span className="font-display text-4xl text-gold">{step.n}</span>
                <h3 className="mt-3 text-xl text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
