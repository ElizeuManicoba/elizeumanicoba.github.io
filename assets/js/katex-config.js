// Renderização de fórmulas (KaTeX).
// Substitui o arquivo do tema HugoBlox para NÃO tratar um único "$" como delimitador de
// fórmula: em textos em português, "R$ 1,00 ... R$ 1,40" seria lido como matemática.
// Fórmulas devem ser escritas com $$...$$ (bloco) ou \( ... \) (em linha).
document.addEventListener("DOMContentLoaded", () => {
  window.renderMathInElement(document.body, {
    delimiters: [
      {left: "$$", right: "$$", display: true},
      {left: "\\(", right: "\\)", display: false},
      {left: "\\[", right: "\\]", display: true},
    ],
    throwOnError: false,
  });
});
