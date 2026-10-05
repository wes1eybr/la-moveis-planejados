import { assets, type AssetKey } from "./assets";

export type PortfolioCategory = "Cozinhas" | "Banheiros" | "Salas e SPA";

export type PortfolioItem = {
  id: AssetKey;
  category: PortfolioCategory;
  caption: string;
};

export const portfolioCategories: PortfolioCategory[] = ["Cozinhas", "Banheiros", "Salas e SPA"];

/**
 * Galeria principal.
 * Cada fotografia aparece uma única vez nesta lista.
 * As demais fotos do acervo ficam reservadas para Hero, Sobre e Serviços.
 */
export const portfolio: PortfolioItem[] = [
  { id: "cozinha americana 01", category: "Cozinhas", caption: "Cozinha americana planejada" },
  { id: "cozinha americana 02", category: "Cozinhas", caption: "Marcenaria integrada à cozinha" },
  { id: "cozinha gourmet 02", category: "Cozinhas", caption: "Cozinha gourmet sob medida" },

  { id: "banheiro gourmet", category: "Banheiros", caption: "Banheiro com marcenaria personalizada" },

  { id: "spa 02", category: "Salas e SPA", caption: "Sala integrada ao SPA" },
  { id: "spa 03", category: "Salas e SPA", caption: "Detalhes do ambiente integrado" },
  { id: "spa 04", category: "Salas e SPA", caption: "Marcenaria para área de convivência" },
  { id: "spa 05", category: "Salas e SPA", caption: "Projeto de sala e SPA" },
  { id: "spa 06", category: "Salas e SPA", caption: "Ambiente planejado completo" },
];

export function portfolioAsset(item: PortfolioItem) {
  return assets[item.id];
}
