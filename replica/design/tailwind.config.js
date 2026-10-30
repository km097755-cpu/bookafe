// Mapeia os tokens (tokens.css) para o tema do Tailwind: bg-surface, text-muted, font-display...
module.exports = {
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)", surface: "var(--surface)", border: "var(--border)",
        text: "var(--text)", muted: "var(--text-muted)",
        accent: "var(--accent)", "on-accent": "var(--on-accent)",
      },
      fontFamily: { display: "var(--font-display)", body: "var(--font-body)" },
      borderRadius: { pill: "var(--radius-pill)" },
      maxWidth: { wrap: "var(--max-width)" },
    },
  },
};
