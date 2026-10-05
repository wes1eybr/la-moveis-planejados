import { assets } from "@/data/assets";
import { Reveal } from "./Primitives";
import { requestQuote } from "@/lib/quote-prefill";

const image = assets["fachada-bancada"];
const detail = assets["cozinha-americana-03"];

export function About() {
  return (
    <section id="sobre" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal className="relative">
          <div className="aspect-[4/5] overflow-hidden bg-secondary">
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
              style={{ objectPosition: image.desktopPosition }}
            />
          </div>
          <div className="absolute -right-4 -bottom-10 hidden w-48 overflow-hidden border-8 border-background shadow-card lg:block">
            <img
              src={detail.src}
              alt={detail.alt}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow text-wood">Sobre a LA</p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] text-foreground">
            Um novo conceito em móveis planejados
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              A LA Móveis Planejados nasceu da vontade de fazer marcenaria com padrão de projeto de
              interiores: desenho autoral, materiais bem escolhidos e execução que resiste ao uso
              diário.
            </p>
            <p>
              Cada ambiente começa por uma conversa e uma medição precisa. A partir daí, projetamos
              soluções que aproveitam cada centímetro — iluminação embutida, organizadores internos,
              frentes ripadas, muxarabis e ferragens de alto desempenho.
            </p>
            <p>
              Acompanhamos o cliente do 3D à instalação, sem terceirizar o que importa. O resultado
              são ambientes bonitos de olhar e, principalmente, fáceis de viver.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-8">
            <div>
              <dt className="eyebrow text-muted-foreground">Atuação</dt>
              <dd className="mt-2 font-display text-2xl text-foreground">
                Residencial e corporativo
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-muted-foreground">Entrega</dt>
              <dd className="mt-2 font-display text-2xl text-foreground">Projeto, produção e instalação</dd>
            </div>
          </dl>

          <button
            onClick={() => requestQuote({ reference: "Sobre — Falar com a equipe" })}
            className="mt-10 inline-flex rounded-full bg-primary px-8 py-4 text-xs font-medium tracking-widest text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
          >
            Falar com a equipe
          </button>
        </Reveal>
      </div>
    </section>
  );
}
