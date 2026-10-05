# LA Móveis Planejados — Homepage one-page premium

Site institucional de página única, em português do Brasil, com estética de escritório de arquitetura: fotografia grande, muito espaço negativo, detalhes em dourado champagne e conversão direta pelo WhatsApp.

Sem IA para o visitante, sem login, sem banco de dados, sem painel, sem upload. O formulário monta a mensagem e abre o WhatsApp.

## Fotografias

Uso exclusivo das fotos reais enviadas (`1.jpg` a `29.jpg`). Nada gerado por IA nem banco de imagens.

- Hero: `17.jpg` (cozinha ampla).
- Serviços imersivos: uma foto real por serviço — Cozinhas `24.jpg`, Dormitórios `5.jpg`, Banheiros `3.jpg`, Salas e painéis `6.jpg`, Áreas gourmet e adegas `20.jpg`, Quartos infantis `10.jpg`, Home office `11.jpg`, Móveis multifuncionais `12.jpg`, Muxarabis e divisórias `1.jpg`, Marcenaria personalizada `13.jpg`.
- Portfólio: todas as demais distribuídas nos filtros, com descrições baseadas apenas no que é visível.
- Sobre: `26.jpg`.

## Identidade visual

- Grafite #161616, bege mineral #F2EFE9, branco suave #F7F5F1, madeira #9A6842, dourado champagne #C6A46A, texto secundário #A8A49E — todos como tokens oklch em `src/styles.css`.
- Títulos em Cormorant Garamond, interface em Inter (carregadas por `<link>` no `__root.tsx`).
- Cantos retos ou levemente arredondados, bordas finas, animações suaves, sem gradientes coloridos nem excesso de cartões.

## Seções da homepage

1. **Header** — transparente sobre o hero; ao rolar ganha fundo grafite semitransparente, blur discreto e altura menor. Logo + Início, Serviços, Projetos, Como funciona, Sobre, Orçamento + botão "Solicitar orçamento". No celular, drawer acessível.
2. **Hero** — tela cheia com `17.jpg`, escurecimento só o necessário, título "Móveis planejados para transformar cada espaço.", subtítulo, botões "Solicitar orçamento" (rola até o formulário) e "Conhecer projetos", assinatura "Projeto sob medida • Marcenaria personalizada • Instalação especializada".
3. **Serviços imersivos** — sequência cinematográfica de 10 serviços controlada pela rolagem: container alto, camada sticky de 100svh, troca progressiva. Entrada com scale 0.86, translateY, blur e opacidade reduzidos; ativo em scale 1, nítido, dourado destacado; saída com blur e deslocamento. A mesma foto aparece duas vezes — fundo em cover com blur 24–40px, escurecido, com camada de cor por serviço (terracota/madeira nas cozinhas, bege/champagne nos dormitórios, grafite/verde nos banheiros, sálvia nos infantis, cobre/âmbar no gourmet, madeira/dourado nos muxarabis) e primeiro plano nítido ocupando 52–65% da largura, com `object-position` configurável e alternância esquerda/direita. Painel de texto em vidro escuro com número, categoria, nome, descrição e botão "Solicitar projeto de …" que preenche o ambiente no formulário e rola até ele. Hover no desktop amplia levemente a imagem, reduz o blur do fundo e destaca a linha dourada. Indicador "01 / 10" acompanha o serviço ativo.
4. **Portfólio** — galeria com filtros Todos, Cozinhas, Salas e áreas gourmet, Dormitórios, Banheiros, Quartos infantis, Detalhes e soluções. Cada item traz foto, ambiente, categoria, descrição curta e "Quero um projeto semelhante" (preenche projeto de referência + ambiente e rola até o formulário). Clique na foto abre lightbox com fechar, anterior/próxima, teclado, Escape, foco controlado e descrição.
5. **Como funciona** — timeline com 01 Conte sua ideia, 02 Atendimento personalizado, 03 Desenvolvimento do projeto, 04 Produção e instalação, números grandes e linhas finas.
6. **Sobre a LA** — "Um novo conceito em móveis planejados." com o texto fornecido e foto ampla. Nada inventado sobre tempo de mercado, equipe, prêmios, endereço ou números.
7. **Formulário de orçamento** — todos os campos obrigatórios pedidos, projeto de referência opcional, listas de ambiente/estilo/investimento/prazo conforme o briefing, consentimento obrigatório. Validação com erros junto aos campos; ao enviar, monta a mensagem no modelo indicado, aplica `encodeURIComponent` e abre `wa.me`. Sem confirmação falsa de recebimento. Aviso abaixo do botão sobre enviar fotos e planta pelo WhatsApp. Sem upload.
8. **CTA final** — "Seu ambiente pode ser planejado nos mínimos detalhes." + botão de WhatsApp.
9. **Rodapé** — logo, navegação, WhatsApp, Instagram, e-mail, política de privacidade e direitos autorais, com placeholders identificados enquanto os dados reais não vierem.
10. **Barra fixa no celular** — WhatsApp e Orçamento, sem cobrir campos, botões, teclado ou rodapé.

## Acessibilidade e performance

- Contraste AA, labels reais, navegação por teclado, foco visível, erros acessíveis, alt descritivo, drawer e lightbox acessíveis, `prefers-reduced-motion` reduzindo tudo a transições de opacidade.
- Imagens em WebP/AVIF com `srcset`/`sizes`, `width`/`height` declarados, preload só do hero, lazy nas demais; o fundo desfocado reutiliza o mesmo arquivo da imagem principal via CSS; blur e filtros reduzidos no mobile.

## Configuração editável (sem dados fictícios)

- `src/config/contact.ts` — `whatsappNumber`, `whatsappDisplay`, `instagramUrl`, `instagramUsername`, `email`, `city`, `serviceArea`, todos **vazios** até você informar. Com o WhatsApp vazio, o botão continua visível, não monta URL inválida, só bloqueia o redirecionamento e emite `console.warn` em desenvolvimento. Assim que o número for preenchido (só dígitos, ex. `5511999999999`), todos os botões passam a funcionar sem editar componentes.
- `src/config/site.ts` — nome da empresa, título, descrição de SEO, assinatura, URL e direitos autorais; campos ainda desconhecidos ficam vazios e são omitidos do JSON-LD (sem LocalBusiness com telefone/endereço inventados).
- `src/data/assets.ts` — mapa único de todas as fotos: nome original (`17.jpg`…), URL de CDN, finalidade, categoria, alt e ponto focal. Nenhuma URL de imagem dentro de componentes.
- `src/data/services.ts` e `src/data/portfolio.ts` — catálogos tipados (`Service`, `PortfolioItem`) com número, categoria, título, descrição, imagem, alt, `desktopPosition`/`mobilePosition`, tema tonal e `formValue`.
- `src/data/formOptions.ts` (ambientes, estilos, investimento, prazo), `src/lib/quoteSchema.ts` (validação zod) e `src/utils/whatsapp.ts` (monta a mensagem, aplica `encodeURIComponent`, lê o número do contact.ts e abre o `wa.me`). O modelo da mensagem fica fora do componente visual.
- Logo: `public/brand/logo-la.png`, `logo-la-light.png`, `logo-la-symbol.png` e `public/favicon.ico`, a partir do arquivo enviado — sem redesenhar a marca.
- Cores e fontes como tokens em `src/styles.css`; Cormorant Garamond e Inter carregadas por `<link>` em `__root.tsx`.

## Estrutura de arquivos

`src/components/` com Header, Hero, ServicesImmersive, Portfolio, Process, About, QuoteForm, FinalCta, Footer, MobileBar; `src/config/`, `src/data/`, `src/lib/`, `src/utils/`; rotas apenas `__root.tsx` e `index.tsx` (one-page com âncoras).

## README em português

Seção "Como editar as informações do site" documentando, item a item: contatos, textos e SEO, serviços, portfólio, imagens, logotipo, cores, fontes e formulário — com caminho do arquivo, propriedade, exemplo, efeito e cuidados. Mais instalação, execução, build e checklist de configuração antes de publicar, com os comandos reais do `package.json`.

**Pendências suas:** WhatsApp, Instagram, e-mail, cidade e região. Até lá, os campos ficam vazios e os botões não redirecionam.

