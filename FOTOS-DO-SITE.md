# Fotos do site — LA Móveis Planejados

O código já está pronto para usar as fotos locais do GitHub. Você **não precisa editar o código** depois de adicionar as imagens.

## Regra importante

Converta arquivos `.HEIC` e `.HEIF` para `.jpg` antes de subir ao GitHub. Navegadores não oferecem suporte confiável a HEIC/HEIF.

## Estrutura exata

Coloque os arquivos dentro de `public/images/projetos/` com estes nomes:

```text
public/images/projetos/
├── banheiro/
│   ├── banheiro-gourmet.jpg
│   └── banheiro-muxarabi.jpg
├── bar/
│   └── bar.jpg
├── cozinha/
│   ├── cozinha-americana-01.jpg
│   ├── cozinha-americana-02.jpg
│   ├── cozinha-americana-03.jpg
│   ├── cozinha-gourmet-01.jpg
│   └── cozinha-gourmet-02.jpg
├── escritorio/
│   └── mesa-de-escritorio.jpg
├── fachada/
│   ├── bancada.jpg
│   └── fachada.jpg
└── sala/
    ├── spa-01.jpg
    ├── spa-02.jpg
    ├── spa-03.jpg
    ├── spa-04.jpg
    ├── spa-05.jpg
    └── spa-06.jpg
```

## De → Para

| Arquivo recebido | Arquivo usado pelo site |
| --- | --- |
| `banheiro/banheiro gourmet.jpeg` | `banheiro/banheiro-gourmet.jpg` |
| `banheiro/banheiro muxarabi.heif` | `banheiro/banheiro-muxarabi.jpg` |
| `bar/bar.jpeg` | `bar/bar.jpg` |
| `cozinha/cozinha americana 01.heif` | `cozinha/cozinha-americana-01.jpg` |
| `cozinha/cozinha americana 02.heif` | `cozinha/cozinha-americana-02.jpg` |
| `cozinha/cozinha americana 03.heif` | `cozinha/cozinha-americana-03.jpg` |
| `cozinha/cozinha gourmet 01.HEIC` | `cozinha/cozinha-gourmet-01.jpg` |
| `cozinha/cozinha gourmet 02.HEIC` | `cozinha/cozinha-gourmet-02.jpg` |
| `escritório/mesa de escritorio.jpeg` | `escritorio/mesa-de-escritorio.jpg` |
| `fachada/bancada.jpeg` | `fachada/bancada.jpg` |
| `fachada/fachada.jpeg` | `fachada/fachada.jpg` |
| `sala/spa 01.jpeg` | `sala/spa-01.jpg` |
| `sala/spa 02.jpeg` | `sala/spa-02.jpg` |
| `sala/spa 03.jpeg` | `sala/spa-03.jpg` |
| `sala/spa 04.jpeg` | `sala/spa-04.jpg` |
| `sala/spa 05.jpeg` | `sala/spa-05.jpg` |
| `sala/spa 06.jpeg` | `sala/spa-06.jpg` |

## Distribuição no site

As 17 fotografias foram distribuídas sem repetição entre as áreas principais:

- Hero: `fachada.jpg`
- Sobre: `bancada.jpg` + `cozinha-americana-03.jpg`
- Serviços: `cozinha-gourmet-01`, `banheiro-muxarabi`, `bar`, `mesa-de-escritorio` e `spa-01`
- Portfólio: as 9 fotografias restantes

Se quiser trocar a distribuição futuramente, altere apenas `src/data/assets.ts`, `src/data/services.ts` e `src/data/portfolio.ts`.
