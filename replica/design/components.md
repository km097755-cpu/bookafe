# Componentes do Bookafé (extraídos de index.html)

Eyebrow
  uso       linha acima do h1; 13px, caixa alta, tracking .18em
  tokens    text-muted, font body
  used on   hero

Heading (h1/h2/h3)
  variants  h1 hero (accent, 900), h2 seção (900), h3 nome do item (700, tracking .02em)
  tokens    font display, caixa alta, line .95, text-wrap balance
  a11y      um h1 só; h2 por seção

CTA (botão-pílula, <a>)
  variants  primário (hero, fechamento, fixo no celular)
  sizes     min-height 60px, padding 0 32px, 19px/700
  states    default, hover (sobe 2px), focus-visible (outline 3px accent, offset 3px), reduced-motion (sem animação)
  faltando  active, disabled (não usados; link)
  tokens    bg accent, text on-accent, radius pill, sombra cta
  a11y      <a> real; abre WhatsApp em target=_blank rel=noopener

Sticky CTA
  uso       só ≤720px; fixo no rodapé, gradiente bg→transparente, respeita safe-area
  tokens    bg

Burger (ilustração CSS)
  uso       decorativo, role=img + aria-label; cores próprias (pão, queijo, salada, carne) fora dos papéis de tema
  nota      cores literais, não entram nos tokens

Menu item
  estrutura linha (h3 + pontilhado + preço) + descrição (muted, 16px, max 46ch)
  tokens    border-top 1px border; pontilhado 2px dotted border; preço display 22px/700 accent tabular-nums
  grid      2 colunas (gap 48px), 1 coluna ≤720px

Tag
  uso       selo ao lado do nome; borda 1px accent, texto accent, pill, 11px/700, tracking .1em

Seção "sides"
  tokens    bg surface; 2 colunas (gap 48px), 1 coluna ≤720px

Footer
  tokens    text-muted 14px, centralizado; padding-bottom 104px (espaço do CTA fixo)
