import { assets, type AssetKey } from "./assets";

export type Service = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  image: AssetKey;
  /** Cor de fundo da cena imersiva (token CSS). */
  tone: "graphite" | "wood" | "sand" | "copper";
};

/**
 * Serviços com fotografias exclusivas.
 * Nenhuma destas imagens é usada no Hero, Sobre ou Portfólio.
 */
export const services: Service[] = [
  {
    id: "cozinhas",
    title: "Cozinhas planejadas",
    description:
      "Cozinhas desenhadas a partir da rotina de quem usa o ambiente, aproveitando circulação, armazenamento e integração.",
    bullets: ["Bancadas e ilhas", "Torres e armários sob medida", "Soluções de organização"],
    image: "cozinha-gourmet-01",
    tone: "wood",
  },
  {
    id: "banheiros",
    title: "Banheiros e lavabos",
    description:
      "Marcenaria para áreas úmidas com desenho limpo, aproveitamento inteligente e detalhes que valorizam o ambiente.",
    bullets: ["Bancadas sob medida", "Armários planejados", "Muxarabis e acabamentos especiais"],
    image: "banheiro-muxarabi",
    tone: "graphite",
  },
  {
    id: "gourmet",
    title: "Bares e áreas gourmet",
    description:
      "Espaços para receber com marcenaria funcional, armazenamento bem resolvido e acabamento alinhado ao restante do projeto.",
    bullets: ["Bares planejados", "Nichos e cristaleiras", "Bancadas de apoio"],
    image: "bar",
    tone: "copper",
  },
  {
    id: "home-office",
    title: "Home office",
    description:
      "Mesas, bancadas e armários que transformam o espaço de trabalho em um ambiente organizado e confortável.",
    bullets: ["Mesas sob medida", "Organização de cabos", "Armários e apoios"],
    image: "escritorio",
    tone: "sand",
  },
  {
    id: "salas-spa",
    title: "Salas e ambientes de convivência",
    description:
      "Marcenaria pensada para integrar lazer, descanso e convivência, mantendo unidade visual em todo o ambiente.",
    bullets: ["Painéis e apoios", "Integração de ambientes", "Soluções personalizadas"],
    image: "spa-01",
    tone: "graphite",
  },
];

export const serviceOptions = services.map((s) => s.title);

export function serviceImage(id: string) {
  const service = services.find((item) => item.id === id);
  return service ? assets[service.image] : assets["cozinha-gourmet-01"];
}
