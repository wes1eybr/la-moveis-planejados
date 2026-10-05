# Dados de contato reais + conferência das fotos

## O que muda

**1. Contato (`src/config/contact.ts`)**

- WhatsApp: `5511973711144` (exibido como `(11) 97371-1144`)
- Instagram: `https://www.instagram.com/la_moveisoficial/` (usuário `@la_moveisoficial`)
- Cidade: `Tatuí — SP`
- Endereço: `Rua do Cruzeiro, 317B — Centro, Tatuí/SP`
- Área de atendimento: `Tatuí e região`
- E-mail: fica vazio por enquanto (os botões de e-mail simplesmente não aparecem)

Com isso o formulário de orçamento passa a abrir o WhatsApp de verdade com o resumo preenchido, e o botão flutuante e o rodapé ficam funcionais.

**2. Endereço visível no site**

Hoje não há campo de endereço. Adiciono `address` na configuração e mostro a linha no rodapé e no bloco de contato da seção de orçamento, com link para o mapa.

**3. Fotos do zip**

O zip tem 29 arquivos, mas os arquivos 27 e 29 são cópias idênticas (mesmo tamanho em bytes) das fotos 24 e 26 que já estão no site. As 27 fotos únicas já estão publicadas no projeto. Conclusão: nada novo a subir — o portfólio permanece com as 27 imagens atuais.

## Detalhes técnicos

- `src/config/contact.ts`: preencher os campos e acrescentar `address` + `mapsUrl`.
- `src/components/site/Footer.tsx`: linha de endereço com link para o Google Maps.
- `src/components/site/QuoteSection.tsx`: incluir o endereço na lista de dados de contato.
- Nenhuma alteração em `src/data/assets.ts` ou `portfolio.ts`.
- Rodar o build para validar.
