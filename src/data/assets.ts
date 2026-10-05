/**
 * Fotografias oficiais da LA Móveis Planejados.
 *
 * IMPORTANTE:
 * - O site usa somente arquivos locais do repositório.
 * - Adicione as imagens em public/images/projetos/ seguindo os nomes abaixo.
 * - Não é necessário alterar nenhum componente para trocar uma fotografia.
 * - HEIC/HEIF devem ser convertidos para JPG antes do upload.
 *
 * desktopPosition / mobilePosition = ponto focal usado pelo object-position.
 */
export type Asset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  desktopPosition: string;
  mobilePosition: string;
};

const DEFAULT_WIDTH = 1600;
const DEFAULT_HEIGHT = 1200;

function asset(
  src: string,
  alt: string,
  desktopPosition = "center center",
  mobilePosition = desktopPosition,
): Asset {
  return {
    src,
    alt,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    desktopPosition,
    mobilePosition,
  };
}

export const assets = {
  // Fachada / apresentação
  fachada: asset(
    "/images/projetos/fachada/fachada.jpg",
    "Fachada de projeto executado pela LA Móveis Planejados.",
    "center center",
    "center center",
  ),
  "fachada-bancada": asset(
    "/images/projetos/fachada/bancada.jpg",
    "Bancada sob medida em projeto executado pela LA Móveis Planejados.",
  ),

  // Banheiros
  "banheiro-gourmet": asset(
    "/images/projetos/banheiro/banheiro-gourmet.jpg",
    "Banheiro planejado com marcenaria sob medida e acabamento contemporâneo.",
  ),
  "banheiro-muxarabi": asset(
    "/images/projetos/banheiro/banheiro-muxarabi.jpg",
    "Banheiro planejado com detalhe em muxarabi de madeira.",
  ),

  // Bar / área gourmet
  bar: asset(
    "/images/projetos/bar/bar.jpg",
    "Bar planejado com marcenaria personalizada.",
  ),

  // Cozinhas
  "cozinha-americana-01": asset(
    "/images/projetos/cozinha/cozinha-americana-01.jpg",
    "Cozinha americana planejada, vista principal do ambiente.",
  ),
  "cozinha-americana-02": asset(
    "/images/projetos/cozinha/cozinha-americana-02.jpg",
    "Cozinha americana planejada com marcenaria sob medida.",
  ),
  "cozinha-americana-03": asset(
    "/images/projetos/cozinha/cozinha-americana-03.jpg",
    "Detalhe de cozinha americana planejada pela LA Móveis Planejados.",
  ),
  "cozinha-gourmet-01": asset(
    "/images/projetos/cozinha/cozinha-gourmet-01.jpg",
    "Cozinha gourmet planejada com soluções sob medida.",
  ),
  "cozinha-gourmet-02": asset(
    "/images/projetos/cozinha/cozinha-gourmet-02.jpg",
    "Cozinha gourmet com marcenaria personalizada e acabamento premium.",
  ),

  // Escritório
  escritorio: asset(
    "/images/projetos/escritorio/mesa-de-escritorio.jpg",
    "Mesa de escritório planejada e produzida sob medida.",
  ),

  // Sala / SPA
  "spa-01": asset(
    "/images/projetos/sala/spa-01.jpg",
    "Ambiente de sala e SPA com soluções planejadas sob medida.",
  ),
  "spa-02": asset(
    "/images/projetos/sala/spa-02.jpg",
    "Sala integrada ao SPA com marcenaria personalizada.",
  ),
  "spa-03": asset(
    "/images/projetos/sala/spa-03.jpg",
    "Detalhe de ambiente integrado com SPA.",
  ),
  "spa-04": asset(
    "/images/projetos/sala/spa-04.jpg",
    "Projeto de sala e SPA executado pela LA Móveis Planejados.",
  ),
  "spa-05": asset(
    "/images/projetos/sala/spa-05.jpg",
    "Marcenaria de ambiente de convivência integrado ao SPA.",
  ),
  "spa-06": asset(
    "/images/projetos/sala/spa-06.jpg",
    "Vista de ambiente planejado de sala e SPA.",
  ),
} satisfies Record<string, Asset>;

export type AssetKey = keyof typeof assets;

/** Logomarca oficial enviada pelo cliente. */
export const brand = {
  /** Deixe vazio para exibir apenas o nome escrito. */
  logo: "",
  alt: "LA Móveis Planejados",
};
