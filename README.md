# LA Móveis Planejados — site institucional

Site one-page em português, focado em conversão via WhatsApp. Não há banco de dados,
login ou backend: tudo é front-end estático.

## Como editar as informações de contato

Abra `src/config/contact.ts` e preencha os campos:

```ts
export const contactConfig = {
  whatsappNumber: "5511999999999", // SOMENTE dígitos: país + DDD + número
  whatsappDisplay: "(11) 99999-9999",
  instagramUrl: "https://instagram.com/seuperfil",
  instagramUsername: "@seuperfil",
  email: "contato@seudominio.com.br",
  city: "Sua cidade - UF",
  serviceArea: "Cidade e região",
};
```

Regras importantes:

- Enquanto `whatsappNumber` estiver vazio, os botões continuam visíveis, mas nada é
  aberto — aparece apenas um aviso no console e uma mensagem para o cliente.
- Campos vazios (Instagram, e-mail, cidade) simplesmente não aparecem no site.
  Nada fictício é publicado.

## Como editar textos institucionais e SEO

`src/config/site.ts` concentra nome da empresa, título, descrição (meta description),
tagline e o texto de copyright. Depois de publicar, preencha `siteUrl` com o endereço
final do site.

## Como trocar ou adicionar fotos

Todas as imagens estão mapeadas em `src/data/assets.ts`. Cada item tem:

| Campo             | Para que serve                                            |
| ----------------- | --------------------------------------------------------- |
| `originalName`    | Nome do arquivo enviado pelo cliente (referência)          |
| `src`             | Endereço da imagem                                         |
| `alt`             | Texto alternativo (acessibilidade e SEO)                   |
| `desktopPosition` | Ponto focal no desktop (`object-position`)                 |
| `mobilePosition`  | Ponto focal no mobile                                      |

Para trocar uma foto, substitua o `src` e atualize o `alt`. Nenhum componente contém
endereço de imagem escrito direto no código.

## Como editar serviços e portfólio

- `src/data/services.ts` — lista dos 10 serviços exibidos na seção imersiva e nos
  filtros do formulário. Cada serviço aponta para uma imagem pela chave (`image: "24"`).
- `src/data/portfolio.ts` — galeria filtrável. Cada item tem imagem, categoria e legenda.
  Para incluir uma nova foto na galeria, adicione o asset em `assets.ts` e depois um item
  aqui.

## Estrutura de pastas

```text
src/
  config/     contact.ts (contatos) e site.ts (SEO e textos)
  data/       assets.ts (fotos), services.ts, portfolio.ts
  components/site/   Header, Hero, TrustStrip, ServicesImmersive,
                     Portfolio, Process, About, QuoteSection, Footer, WhatsappFloat
  hooks/      use-reveal.ts (animação de entrada)
  lib/        quote-prefill.ts (rolagem e pré-preenchimento do formulário)
  utils/      whatsapp.ts (montagem da mensagem e abertura do WhatsApp)
  routes/     index.tsx (a página) e __root.tsx (fontes, metadados, favicon)
  styles.css  cores, tipografia e tokens do design system
```

## Como funciona o formulário

O formulário não envia e-mail nem grava dados. Ao enviar, ele monta uma mensagem com
nome, telefone, cidade, ambientes escolhidos, etapa e prazo, e abre o WhatsApp com esse
texto pronto. Botões espalhados pelo site ("Quero este ambiente", "Quero algo assim")
rolam até o formulário e já marcam o ambiente correspondente.

## Cores e tipografia

Definidas em `src/styles.css`:

- Grafite `#161616`, Areia `#F2EFE9`, Off-white `#F7F5F1`, Madeira `#9A6842`,
  Dourado `#C6A46A`, Cinza de texto.
- Títulos em Cormorant Garamond, textos em Inter.

Para mudar uma cor da marca, altere apenas a variável correspondente em `:root`
(`--gold`, `--wood`, `--graphite`, ...). Todo o site acompanha automaticamente.

## Publicação

Use o botão **Publish** do Lovable. Depois de publicar, volte em `src/config/site.ts`
e preencha `siteUrl` com o endereço definitivo.

## Como trocar as imagens do site

Todas as fotografias ficam em:

```text
public/images/la-projetos/
```

Os arquivos são nomeados `1.jpg`, `2.jpg`, `3.jpg` ... até `29.jpg`.

Para substituir uma fotografia sem mexer no código:

1. localize a imagem dentro de `public/images/la-projetos/`;
2. substitua pelo novo arquivo;
3. mantenha exatamente o mesmo nome e extensão (`.jpg`);
4. rode o projeto novamente ou publique uma nova versão.

O mapeamento (endereço, texto alternativo e ponto focal de cada foto) fica em
`src/data/assets.ts`. Nenhum componente tem endereço de imagem escrito direto.

| Uso | Arquivo de configuração |
| --- | --- |
| Hero (foto 17) | `src/data/assets.ts` + `src/components/site/Hero.tsx` |
| Serviços imersivos | `src/data/services.ts` (campo `image`) |
| Portfólio e lightbox | `src/data/portfolio.ts` |
| Sobre (fotos 26 e 16) | `src/components/site/About.tsx` |
| Pontos focais e textos alternativos | `src/data/assets.ts` |
| Contatos | `src/config/contact.ts` |
| Textos gerais e SEO | `src/config/site.ts` |
| Formulário e WhatsApp | `src/utils/whatsapp.ts` |

Observação: a logomarca original não veio no pacote de fotos. Enquanto
`brand.logo` estiver vazio em `src/data/assets.ts`, o site exibe apenas o nome
escrito. Para voltar com a logo, coloque o arquivo em `public/images/` e
preencha `brand.logo` com o caminho (ex.: `/images/logo-la.png`).
