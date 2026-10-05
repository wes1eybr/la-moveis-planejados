# LA Móveis Planejados — guia completo para abrir e editar o site

Este repositório contém o site institucional da **LA Móveis Planejados**. O projeto foi criado com React, TypeScript, TanStack Start, Vite e Tailwind CSS.

O site é uma página única com apresentação da empresa, serviços, portfólio, processo de atendimento, formulário de orçamento e abertura direta do WhatsApp.

Este guia foi escrito para quem nunca instalou ou editou um projeto de site.

---

## 1. O que existe dentro deste ZIP

A pasta principal do projeto é:

```text
la-moveis-prime-main/
```

Os arquivos e pastas mais importantes são:

```text
la-moveis-prime-main/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── images/
│       └── la-projetos/
│           ├── 1.jpg
│           ├── 2.jpg
│           ├── ...
│           └── 29.jpg
│
├── src/
│   ├── components/
│   │   └── site/
│   │       ├── Header.tsx
│   │       ├── Hero.tsx
│   │       ├── TrustStrip.tsx
│   │       ├── ServicesImmersive.tsx
│   │       ├── Portfolio.tsx
│   │       ├── Process.tsx
│   │       ├── About.tsx
│   │       ├── QuoteSection.tsx
│   │       ├── Footer.tsx
│   │       └── WhatsappFloat.tsx
│   │
│   ├── config/
│   │   ├── contact.ts
│   │   └── site.ts
│   │
│   ├── data/
│   │   ├── assets.ts
│   │   ├── services.ts
│   │   └── portfolio.ts
│   │
│   ├── lib/
│   │   └── quote-prefill.ts
│   │
│   ├── routes/
│   │   ├── __root.tsx
│   │   └── index.tsx
│   │
│   ├── utils/
│   │   └── whatsapp.ts
│   │
│   └── styles.css
│
├── package.json
├── bun.lock
├── vite.config.ts
├── tsconfig.json
└── README.md
```

### O que cada tecnologia faz

Você não precisa instalar React, TypeScript, HTML ou CSS separadamente. As dependências são instaladas automaticamente por um comando.

- **Node.js**: executa as ferramentas do projeto no computador.
- **npm**: vem junto com o Node.js e instala as bibliotecas do projeto.
- **React**: constrói a interface do site.
- **TypeScript**: adiciona verificação de tipos ao JavaScript.
- **TanStack Start**: organiza a aplicação e as rotas.
- **Vite**: inicia o servidor local e gera a versão final do site.
- **Tailwind CSS**: controla grande parte do visual por classes CSS.
- **VS Code**: editor recomendado para abrir e editar os arquivos.
- **Git**: opcional; serve para baixar e versionar o repositório.

---

## 2. Programas necessários

### 2.1 Instalar o Node.js

Instale o **Node.js 22 ou superior**. Use uma versão LTS ou mais recente.

Site oficial:

```text
https://nodejs.org/
```

Durante a instalação no Windows, mantenha as opções padrão e deixe marcada a inclusão no PATH.

Depois de instalar, feche e abra novamente o terminal.

Para verificar a instalação, execute:

```bash
node --version
npm --version
```

Você deverá ver dois números de versão.

### 2.2 Instalar o Visual Studio Code

Site oficial:

```text
https://code.visualstudio.com/
```

Extensões recomendadas no VS Code:

- ESLint
- Prettier - Code formatter
- Tailwind CSS IntelliSense

As extensões não são obrigatórias, mas ajudam a identificar erros e formatar o código.

### 2.3 Instalar o Git — opcional

O Git só é necessário para clonar o repositório, enviar alterações ao GitHub ou manter histórico das mudanças.

Site oficial:

```text
https://git-scm.com/
```

Se você recebeu somente este ZIP, pode trabalhar sem instalar Git.

---

## 3. Como extrair e abrir o projeto

### Windows

1. Clique com o botão direito no arquivo ZIP.
2. Clique em **Extrair tudo**.
3. Escolha uma pasta fácil de localizar, como `Documentos`.
4. Abra a pasta extraída.
5. Entre na pasta `la-moveis-prime-main`.

### macOS

1. Clique duas vezes no arquivo ZIP.
2. O sistema criará uma pasta extraída.
3. Abra a pasta `la-moveis-prime-main`.

### Abrir no VS Code

1. Abra o Visual Studio Code.
2. Clique em **Arquivo > Abrir Pasta**.
3. Selecione a pasta `la-moveis-prime-main`.
4. Confirme em **Selecionar pasta** ou **Abrir**.

Importante: abra a pasta que contém o arquivo `package.json`. Não abra somente a pasta `src`.

---

## 4. Como instalar o projeto no computador

No VS Code:

1. Clique em **Terminal > Novo Terminal**.
2. Confirme que o terminal está dentro da pasta do projeto.
3. Execute:

```bash
npm install
```

Esse comando baixa todas as bibliotecas necessárias e cria a pasta `node_modules`.

A primeira instalação pode demorar alguns minutos.

### Sobre o arquivo `bun.lock`

O projeto foi gerado pelo Lovable e possui um arquivo `bun.lock`. Ele registra versões usadas pelo gerenciador Bun. Para uma instalação simples, você pode usar `npm install` normalmente.

Usuários que já utilizam Bun podem executar:

```bash
bun install
```

Não é necessário instalar Bun para visualizar ou editar o site.

---

## 5. Como abrir o site localmente

Depois de executar `npm install`, use:

```bash
npm run dev
```

O terminal mostrará um endereço semelhante a:

```text
http://localhost:5173
```

Segure `Ctrl` e clique no endereço, ou copie e cole no navegador.

Enquanto o comando estiver em execução:

- o site continuará aberto localmente;
- alterações salvas no código aparecem quase automaticamente;
- o terminal deve permanecer aberto.

Para encerrar o servidor, clique no terminal e pressione:

```text
Ctrl + C
```

No macOS, o mesmo atalho geralmente funciona no terminal integrado.

---

## 6. Comandos principais

Execute os comandos abaixo dentro da pasta do projeto.

### Iniciar o site localmente

```bash
npm run dev
```

### Gerar a versão final de produção

```bash
npm run build
```

A versão compilada é criada nas pastas de saída do TanStack/Vite, geralmente `.output` e arquivos auxiliares de build.

### Visualizar o build localmente

Depois do build:

```bash
npm run preview
```

### Verificar problemas de código

```bash
npm run lint
```

### Formatar os arquivos

```bash
npm run format
```

---

## 7. Como alterar o WhatsApp, Instagram, endereço e contato

Abra:

```text
src/config/contact.ts
```

O arquivo contém:

```ts
export const contactConfig = {
  whatsappNumber: "5511973711144",
  whatsappDisplay: "(11) 97371-1144",
  instagramUrl: "https://www.instagram.com/la_moveisoficial/",
  instagramUsername: "@la_moveisoficial",
  email: "",
  city: "Tatuí — SP",
  address: "Rua do Cruzeiro, 317B — Centro, Tatuí/SP",
  mapsUrl: "...",
  serviceArea: "Tatuí e região",
};
```

### Alterar o WhatsApp

- `whatsappNumber`: use somente números, incluindo país e DDD.
- `whatsappDisplay`: texto formatado que aparece no site.

Exemplo:

```ts
whatsappNumber: "5511999999999",
whatsappDisplay: "(11) 99999-9999",
```

Não coloque `+`, espaços, parênteses ou traços em `whatsappNumber`.

### Alterar o Instagram

```ts
instagramUrl: "https://www.instagram.com/novo_usuario/",
instagramUsername: "@novo_usuario",
```

### Alterar o e-mail

```ts
email: "contato@empresa.com.br",
```

### Alterar cidade, endereço e região atendida

```ts
city: "Nome da cidade — UF",
address: "Rua, número — bairro, cidade/UF",
serviceArea: "Cidade e região",
```

Ao trocar o endereço, atualize também o texto dentro de `encodeURIComponent` no campo `mapsUrl`.

Exemplo:

```ts
mapsUrl:
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Rua Exemplo, 100 - Centro, Cidade - SP"),
```

Todos os botões de WhatsApp usam esse arquivo. Não é necessário alterar cada botão separadamente.

---

## 8. Como alterar o nome da empresa, SEO e descrição do site

Abra:

```text
src/config/site.ts
```

Campos principais:

- `companyName`: nome da empresa.
- `title`: título exibido na aba do navegador e usado em SEO.
- `description`: descrição usada por buscadores.
- `tagline`: frase curta exibida no hero.
- `siteUrl`: endereço final do site após a publicação.
- `copyright`: texto do rodapé.

Exemplo:

```ts
export const siteConfig = {
  companyName: "LA Móveis Planejados",
  title: "LA Móveis Planejados — Móveis sob medida",
  description: "Descrição da empresa e dos serviços.",
  tagline: "Projeto sob medida • Marcenaria personalizada • Instalação especializada",
  siteUrl: "https://seudominio.com.br",
  copyright: "LA Móveis Planejados. Todos os direitos reservados.",
};
```

### Metadados adicionais e imagem de compartilhamento

Abra:

```text
src/routes/__root.tsx
```

Nesse arquivo ficam:

- idioma da página;
- fontes do Google;
- cor do navegador;
- título e descrição gerais;
- imagem usada ao compartilhar o link em redes sociais.

Procure por `og:image` e `twitter:image` para trocar a imagem social.

Recomendação: coloque uma imagem em `public/images/` e use um endereço público depois que o site estiver publicado.

A página principal também configura SEO em:

```text
src/routes/index.tsx
```

---

## 9. Onde ficam as imagens

Todas as fotografias dos projetos estão em:

```text
public/images/la-projetos/
```

O ZIP contém 29 fotografias:

```text
1.jpg até 29.jpg
```

O navegador acessa esses arquivos pelos caminhos:

```text
/images/la-projetos/1.jpg
/images/la-projetos/2.jpg
...
/images/la-projetos/29.jpg
```

O catálogo central das imagens fica em:

```text
src/data/assets.ts
```

Cada imagem tem:

- nome original;
- caminho do arquivo;
- descrição alternativa;
- largura e altura;
- ponto focal para desktop;
- ponto focal para celular.

---

## 10. Como substituir uma imagem sem alterar o código

Esta é a forma mais simples.

Exemplo: substituir `17.jpg`.

1. Prepare a nova fotografia em JPG.
2. Renomeie a nova fotografia para `17.jpg`.
3. Abra:

```text
public/images/la-projetos/
```

4. Apague ou mova a imagem antiga `17.jpg`.
5. Coloque a nova imagem com o mesmo nome.
6. Salve e atualize o navegador.

Se a imagem antiga ainda aparecer, faça uma atualização forçada:

- Windows: `Ctrl + F5`
- macOS: `Command + Shift + R`

A troca funciona sem editar código porque o caminho permanece igual.

### Cuidados ao substituir imagens

- Mantenha a extensão `.jpg` em letras minúsculas.
- Não use nomes como `17 (1).jpg`.
- Evite espaços e acentos no nome.
- Use imagens nítidas e com boa resolução.
- Não substitua por arquivo PNG mantendo o nome `.jpg`.
- Faça uma cópia de segurança da imagem antiga.

---

## 11. Como adicionar uma nova imagem ao site

Exemplo: adicionar `30.jpg`.

### Passo 1 — colocar a fotografia na pasta

Copie o arquivo para:

```text
public/images/la-projetos/30.jpg
```

### Passo 2 — cadastrar em `assets.ts`

Abra:

```text
src/data/assets.ts
```

Dentro do objeto `assets`, adicione uma entrada seguindo o padrão existente:

```ts
"30": a(
  "30.jpg",
  "/images/la-projetos/30.jpg",
  "Descrição clara do ambiente mostrado na fotografia.",
  "center center",
  "center center",
),
```

Significado:

- primeiro valor: nome original;
- segundo valor: caminho público;
- terceiro valor: texto alternativo;
- quarto valor: enquadramento no computador;
- quinto valor: enquadramento no celular.

### Passo 3 — adicionar ao portfólio

Abra:

```text
src/data/portfolio.ts
```

Adicione um item:

```ts
{
  id: "30",
  category: "Cozinhas",
  caption: "Cozinha planejada com ilha central",
},
```

A categoria precisa ser uma das categorias já declaradas no arquivo:

- `Cozinhas`
- `Dormitórios`
- `Banheiros`
- `Áreas gourmet`
- `Infantis`
- `Salas e painéis`
- `Detalhes`

Depois de salvar, a imagem aparecerá na galeria e no filtro correspondente.

---

## 12. Como excluir uma imagem corretamente

Não apague primeiro o arquivo JPG. Remova as referências antes.

Exemplo: excluir `14.jpg`.

### Passo 1 — procurar onde a imagem é usada

No VS Code:

1. Pressione `Ctrl + Shift + F` no Windows ou `Command + Shift + F` no macOS.
2. Pesquise por:

```text
"14"
```

Verifique principalmente:

```text
src/data/portfolio.ts
src/data/services.ts
src/components/site/Hero.tsx
src/components/site/About.tsx
```

### Passo 2 — remover do portfólio

Em `src/data/portfolio.ts`, remova o objeto que possui:

```ts
id: "14"
```

### Passo 3 — remover ou trocar usos adicionais

Se a imagem estiver em `services.ts`, no hero ou em Sobre, troque por outra imagem antes de excluir.

### Passo 4 — remover do catálogo

Em `src/data/assets.ts`, remova a entrada correspondente à imagem.

### Passo 5 — apagar o arquivo físico

Apague:

```text
public/images/la-projetos/14.jpg
```

### Passo 6 — testar

Execute:

```bash
npm run dev
```

Abra o portfólio e confirme que não existe imagem quebrada.

---

## 13. Como trocar as imagens usadas nas seções principais

### Imagem principal do hero

Arquivo:

```text
src/components/site/Hero.tsx
```

Procure:

```ts
const hero = assets["17"];
```

Para usar a imagem 24:

```ts
const hero = assets["24"];
```

### Imagem da seção Sobre

Arquivo:

```text
src/components/site/About.tsx
```

Procure:

```ts
const image = assets["26"];
const detail = assets["16"];
```

- `image`: fotografia principal.
- `detail`: pequena fotografia sobreposta.

### Imagens dos serviços imersivos

Arquivo:

```text
src/data/services.ts
```

Cada serviço possui uma propriedade `image`:

```ts
{
  id: "cozinhas",
  title: "Cozinhas planejadas",
  image: "24",
  tone: "wood",
}
```

Para trocar a imagem, altere somente o número:

```ts
image: "17",
```

A imagem precisa estar cadastrada em `src/data/assets.ts`.

### Imagens da galeria

Arquivo:

```text
src/data/portfolio.ts
```

Cada item usa o `id` da imagem:

```ts
{ id: "17", category: "Cozinhas", caption: "Cozinha com ilha e mesa integrada" }
```

---

## 14. Como ajustar o enquadramento de uma foto

Quando uma fotografia aparece cortada, não é obrigatório editar a imagem. Ajuste o ponto focal em:

```text
src/data/assets.ts
```

Exemplo:

```ts
"17": a(
  "17.jpg",
  "/images/la-projetos/17.jpg",
  "Descrição da fotografia.",
  "60% center",
  "70% center",
),
```

O quarto parâmetro controla o desktop. O quinto controla o celular.

Valores úteis:

```text
center center
left center
right center
50% 30%
65% center
center top
center bottom
```

Exemplos:

- Mostrar mais o lado direito: `70% center`
- Mostrar mais o lado esquerdo: `30% center`
- Mostrar mais a parte superior: `center 25%`
- Centralizar: `center center`

Salve e confira em desktop e celular.

---

## 15. Como editar os serviços

Abra:

```text
src/data/services.ts
```

Cada serviço contém:

```ts
{
  id: "cozinhas",
  title: "Cozinhas planejadas",
  description: "Texto do serviço.",
  bullets: ["Item 1", "Item 2", "Item 3"],
  image: "24",
  tone: "wood",
}
```

Você pode alterar:

- `title`: nome exibido.
- `description`: explicação.
- `bullets`: três destaques.
- `image`: número da fotografia.
- `tone`: tonalidade da cena.

Tons disponíveis no projeto:

```text
graphite
wood
sand
copper
```

### Adicionar um serviço

Copie um objeto completo, cole dentro da lista `services` e altere todos os dados. O `id` precisa ser único, em letras minúsculas e sem acento.

Exemplo:

```ts
{
  id: "closets",
  title: "Closets planejados",
  description: "Closets sob medida para organização e aproveitamento do espaço.",
  bullets: ["Divisões internas", "Iluminação", "Acabamentos personalizados"],
  image: "5",
  tone: "sand",
},
```

### Excluir um serviço

Remova o objeto inteiro da lista `services`.

Atenção: os serviços também alimentam as opções do formulário. Ao excluir um serviço, ele deixará de aparecer nessa seleção.

---

## 16. Como editar o portfólio

Abra:

```text
src/data/portfolio.ts
```

Exemplo de item:

```ts
{
  id: "20",
  category: "Áreas gourmet",
  caption: "Adega iluminada integrada à sala",
}
```

- `id`: fotografia cadastrada em `assets.ts`.
- `category`: filtro em que o item aparecerá.
- `caption`: legenda mostrada na galeria.

### Alterar a ordem

A ordem dos objetos no arquivo é a ordem de exibição. Mova um objeto para cima ou para baixo.

### Criar uma nova categoria

No mesmo arquivo, adicione o novo nome no tipo `PortfolioCategory` e na lista `portfolioCategories`.

Exemplo:

```ts
export type PortfolioCategory =
  | "Cozinhas"
  | "Closets";
```

Depois:

```ts
export const portfolioCategories = [
  "Cozinhas",
  "Closets",
];
```

Por fim, use a categoria nos itens desejados.

---

## 17. Como editar os textos de cada seção

| Seção | Arquivo |
| --- | --- |
| Cabeçalho e menu | `src/components/site/Header.tsx` |
| Hero | `src/components/site/Hero.tsx` |
| Faixa de diferenciais | `src/components/site/TrustStrip.tsx` |
| Serviços | `src/data/services.ts` e `src/components/site/ServicesImmersive.tsx` |
| Portfólio | `src/data/portfolio.ts` e `src/components/site/Portfolio.tsx` |
| Processo | `src/components/site/Process.tsx` |
| Sobre | `src/components/site/About.tsx` |
| Formulário | `src/components/site/QuoteSection.tsx` |
| Rodapé | `src/components/site/Footer.tsx` |
| Botão flutuante | `src/components/site/WhatsappFloat.tsx` |

Para alterar somente textos, procure a frase no VS Code usando:

- Windows: `Ctrl + Shift + F`
- macOS: `Command + Shift + F`

Digite parte da frase, abra o resultado, edite o texto entre aspas e salve.

Não remova acidentalmente aspas, vírgulas, chaves ou sinais de fechamento.

---

## 18. Como editar as etapas do processo

Abra:

```text
src/components/site/Process.tsx
```

As etapas ficam na lista `steps`:

```ts
{
  n: "01",
  title: "Conversa inicial",
  text: "Descrição da etapa.",
}
```

Para alterar uma etapa, edite `title` e `text`.

Para excluir uma etapa, remova o objeto inteiro.

Para adicionar, copie um objeto, cole na lista e altere o número.

---

## 19. Como editar os diferenciais

Abra:

```text
src/components/site/TrustStrip.tsx
```

Os diferenciais ficam na lista `pillars`.

Cada item possui:

- `icon`: ícone da biblioteca Lucide.
- `title`: título.
- `text`: descrição.

Para alterar somente o conteúdo, edite `title` e `text`.

---

## 20. Como editar a seção Sobre

Abra:

```text
src/components/site/About.tsx
```

Nesse arquivo você pode alterar:

- título da seção;
- parágrafos institucionais;
- atuação;
- tipo de entrega;
- texto do botão;
- fotografia principal e fotografia de detalhe.

Edite apenas informações confirmadas pela empresa.

---

## 21. Como editar o formulário

Abra:

```text
src/components/site/QuoteSection.tsx
```

O formulário atual solicita:

- nome;
- WhatsApp do cliente;
- cidade ou bairro;
- ambientes de interesse;
- etapa do projeto;
- prazo desejado;
- detalhes opcionais;
- referência preenchida pelos botões do site.

### Alterar as opções de etapa

Procure:

```ts
const stages = [
  "Ainda pesquisando",
  "Obra em andamento",
  "Pronto para instalar",
] as const;
```

### Alterar as opções de prazo

Procure:

```ts
const timelines = [
  "O quanto antes",
  "Em 1 a 3 meses",
  "Em 3 a 6 meses",
  "Sem data definida",
] as const;
```

### Alterar mensagens de validação

Procure o objeto `schema` no início do arquivo.

Exemplo:

```ts
name: z.string().min(2, "Informe seu nome"),
```

O texto depois da vírgula é a mensagem exibida ao cliente.

### Ambientes exibidos no formulário

As opções de ambientes vêm automaticamente de:

```text
src/data/services.ts
```

Se você alterar o título de um serviço, a opção também muda no formulário.

### Adicionar um campo novo

Adicionar um campo exige mudanças em mais de um lugar:

1. tipo e validação em `QuoteSection.tsx`;
2. valores iniciais do formulário;
3. campo visual em JSX;
4. tipo `QuoteMessage` em `src/utils/whatsapp.ts`;
5. montagem da mensagem em `buildWhatsappMessage`.

Para quem não programa, faça uma cópia de segurança antes dessa alteração.

---

## 22. Como editar a mensagem enviada ao WhatsApp

Abra:

```text
src/utils/whatsapp.ts
```

A função responsável é:

```ts
buildWhatsappMessage
```

A primeira linha atual é:

```ts
const lines: string[] = ["Olá! Gostaria de um orçamento de móveis planejados."];
```

Edite o texto entre aspas para alterar a saudação.

As linhas seguintes adicionam nome, telefone, cidade, ambientes, etapa, prazo, referência e detalhes.

A função `whatsappUrl` cria o endereço `wa.me` usando o número definido em `src/config/contact.ts`.

A função `openWhatsapp` abre uma nova aba.

Não coloque o número comercial diretamente neste arquivo. Mantenha o número em `contact.ts`.

---

## 23. Como trocar a logomarca e o favicon

### Favicon

O ícone da aba do navegador está em:

```text
public/favicon.ico
```

Para substituir:

1. crie um novo arquivo `.ico`;
2. mantenha o nome `favicon.ico`;
3. substitua o arquivo antigo.

### Logomarca

O projeto possui a configuração da marca em:

```text
src/data/assets.ts
```

No final do arquivo existe:

```ts
export const brand = {
  logo: "",
  alt: "LA Móveis Planejados",
};
```

Para usar uma logomarca:

1. coloque o arquivo, por exemplo, em:

```text
public/images/logo-la.png
```

2. altere a configuração:

```ts
export const brand = {
  logo: "/images/logo-la.png",
  alt: "LA Móveis Planejados",
};
```

O `alt` é a descrição da imagem para acessibilidade.

Se `logo` estiver vazio, o site usa a apresentação textual prevista pelos componentes.

---

## 24. Como alterar cores e fontes

### Cores

Abra:

```text
src/styles.css
```

As principais variáveis ficam dentro de `:root`:

```css
--graphite: oklch(...);
--sand: oklch(...);
--offwhite: oklch(...);
--wood: oklch(...);
--gold: oklch(...);
--copper: oklch(...);
```

Referência original:

| Nome | Hexadecimal |
| --- | --- |
| Grafite | `#161616` |
| Areia | `#F2EFE9` |
| Off-white | `#F7F5F1` |
| Madeira | `#9A6842` |
| Dourado | `#C6A46A` |

Altere as variáveis centrais, não cada componente.

### Fontes

As fontes são carregadas em:

```text
src/routes/__root.tsx
```

Procure o endereço do Google Fonts contendo:

```text
Cormorant Garamond
Inter
```

As famílias são associadas às variáveis em `src/styles.css`:

```css
--font-display: "Cormorant Garamond", ...;
--font-sans: "Inter", ...;
```

---

## 25. Como funciona a página principal

A rota principal está em:

```text
src/routes/index.tsx
```

Esse arquivo monta as seções nesta ordem:

1. Header
2. Hero
3. TrustStrip
4. ServicesImmersive
5. Portfolio
6. Process
7. About
8. QuoteSection
9. Footer
10. WhatsappFloat

Para retirar uma seção, remova a linha do componente somente depois de fazer uma cópia de segurança.

Exemplo: remover temporariamente `TrustStrip`:

```tsx
<TrustStrip />
```

Também será necessário remover o `import` correspondente no topo do arquivo para evitar aviso de código não utilizado.

---

## 26. Como criar uma cópia de segurança antes de editar

Método simples:

1. feche o servidor local;
2. copie a pasta `la-moveis-prime-main`;
3. renomeie a cópia para algo como:

```text
la-moveis-prime-backup-2026-07-31
```

Faça isso antes de:

- excluir imagens;
- alterar o formulário;
- remover componentes;
- mudar configurações de build;
- atualizar muitas dependências.

---

## 27. Como usar Git — opcional

Se o projeto estiver em um repositório GitHub, você pode cloná-lo:

```bash
git clone URL_DO_REPOSITORIO
cd NOME_DA_PASTA
npm install
npm run dev
```

Para salvar alterações localmente:

```bash
git add .
git commit -m "Atualiza imagens e informações do site"
```

Para enviar ao GitHub:

```bash
git push
```

Esses comandos exigem Git instalado e acesso ao repositório.

---

## 28. Como preparar o site para publicação

Antes de publicar:

1. confira o WhatsApp em `src/config/contact.ts`;
2. confira Instagram, e-mail, endereço e mapa;
3. preencha `siteUrl` em `src/config/site.ts`;
4. confira o título e a descrição de SEO;
5. revise a imagem social em `src/routes/__root.tsx`;
6. confira todas as fotografias;
7. teste os filtros do portfólio;
8. teste o formulário;
9. teste o WhatsApp;
10. teste no celular;
11. execute:

```bash
npm run lint
npm run build
```

O site não possui banco de dados. O formulário monta uma mensagem e abre o WhatsApp do cliente.

---

## 29. Solução de problemas comuns

### `npm` não é reconhecido

O Node.js não foi instalado corretamente ou o terminal estava aberto durante a instalação.

Solução:

1. instale ou reinstale o Node.js;
2. feche o VS Code;
3. abra o VS Code novamente;
4. execute `node --version` e `npm --version`.

### O terminal diz que não encontrou `package.json`

Você está na pasta errada.

Abra no VS Code a pasta `la-moveis-prime-main`, que contém `package.json`.

### A porta já está sendo usada

O Vite pode escolher outra porta automaticamente. Use o endereço mostrado no terminal.

Também pode encerrar outro servidor com `Ctrl + C`.

### A imagem não aparece

Verifique:

- se o arquivo existe em `public/images/la-projetos/`;
- se o nome e a extensão estão corretos;
- se o caminho em `assets.ts` começa com `/images/`;
- se a imagem está cadastrada em `assets.ts`;
- se o `id` usado no portfólio ou serviço existe.

Nomes em maiúsculas e minúsculas podem funcionar no Windows e falhar no servidor. Use sempre `.jpg` em minúsculas.

### A imagem aparece cortada

Ajuste `desktopPosition` e `mobilePosition` em `src/data/assets.ts`.

### O WhatsApp não abre

Confira:

```text
src/config/contact.ts
```

`whatsappNumber` precisa conter somente números, com país e DDD.

Exemplo:

```text
5511973711144
```

### O site mostra uma versão antiga da imagem

Faça uma atualização forçada:

- Windows: `Ctrl + F5`
- macOS: `Command + Shift + R`

Se estiver publicado, gere e publique um novo build.

### Apareceram erros depois de editar o código

1. desfaça a última alteração com `Ctrl + Z`;
2. confira aspas, vírgulas, parênteses, colchetes e chaves;
3. execute:

```bash
npm run lint
npm run build
```

### A instalação ficou corrompida

Apague `node_modules` e instale novamente.

Windows PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

macOS ou Linux:

```bash
rm -rf node_modules
npm install
```

---

## 30. Arquivos que normalmente não devem ser editados por iniciantes

Evite alterar sem necessidade:

```text
src/routeTree.gen.ts
src/router.tsx
src/server.ts
src/start.ts
vite.config.ts
tsconfig.json
eslint.config.js
bun.lock
components.json
src/lib/lovable-error-reporting.ts
src/lib/error-capture.ts
```

Esses arquivos controlam o funcionamento técnico do projeto.

A pasta `src/components/ui/` contém componentes internos de interface. Normalmente não é preciso alterá-la para atualizar conteúdo, fotos ou contatos.

A pasta `.lovable/` contém dados e planejamentos do Lovable. Não é usada para editar o conteúdo cotidiano do site.

---

## 31. Mapa rápido: onde alterar cada coisa

| Quero alterar | Arquivo ou pasta |
| --- | --- |
| WhatsApp comercial | `src/config/contact.ts` |
| Instagram | `src/config/contact.ts` |
| E-mail | `src/config/contact.ts` |
| Endereço e mapa | `src/config/contact.ts` |
| Nome, descrição e SEO | `src/config/site.ts` |
| Imagem do hero | `src/components/site/Hero.tsx` |
| Fotos disponíveis | `public/images/la-projetos/` |
| Cadastro, alt e enquadramento das fotos | `src/data/assets.ts` |
| Serviços e imagens dos serviços | `src/data/services.ts` |
| Galeria e categorias | `src/data/portfolio.ts` |
| Textos do hero | `src/components/site/Hero.tsx` |
| Diferenciais | `src/components/site/TrustStrip.tsx` |
| Etapas de atendimento | `src/components/site/Process.tsx` |
| Texto e imagens Sobre | `src/components/site/About.tsx` |
| Campos e opções do formulário | `src/components/site/QuoteSection.tsx` |
| Mensagem enviada ao WhatsApp | `src/utils/whatsapp.ts` |
| Rodapé | `src/components/site/Footer.tsx` |
| Cores e tipografia | `src/styles.css` |
| Fontes e imagem social | `src/routes/__root.tsx` |
| Ordem das seções | `src/routes/index.tsx` |
| Favicon | `public/favicon.ico` |

---

## 32. Checklist para uma pessoa leiga

Antes de começar:

- [ ] Instalei o Node.js.
- [ ] Instalei o VS Code.
- [ ] Extraí o ZIP.
- [ ] Abri a pasta que contém `package.json`.
- [ ] Executei `npm install`.
- [ ] Executei `npm run dev`.
- [ ] Abri o endereço local no navegador.

Antes de publicar:

- [ ] Testei todas as seções.
- [ ] Conferi o WhatsApp.
- [ ] Conferi Instagram, endereço e mapa.
- [ ] Conferi as 29 fotografias.
- [ ] Testei os filtros da galeria.
- [ ] Testei o formulário.
- [ ] Testei em celular e computador.
- [ ] Executei `npm run lint`.
- [ ] Executei `npm run build`.
- [ ] Fiz uma cópia de segurança.

---

## 33. Resumo para abrir o site pela primeira vez

Depois de instalar Node.js e VS Code:

```bash
cd caminho/para/la-moveis-prime-main
npm install
npm run dev
```

Abra no navegador o endereço mostrado no terminal.

Para encerrar:

```text
Ctrl + C
```

---

## Observações finais

- O site é totalmente front-end.
- Não existe painel administrativo.
- Não existe banco de dados.
- O formulário não guarda informações: ele abre o WhatsApp com uma mensagem preenchida.
- As fotos ficam dentro do próprio projeto.
- Faça backup antes de excluir arquivos.
- Depois de qualquer alteração importante, execute `npm run build` para verificar se o projeto continua válido.
