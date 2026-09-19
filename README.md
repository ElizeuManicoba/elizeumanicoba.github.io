# Site pessoal de Elizeu Maniçoba

Site acadêmico-profissional construído com o template **Academic CV** do [HugoBlox Kit](https://github.com/HugoBlox/kit), Hugo Extended e Tailwind CSS.

## Desenvolvimento local

Requisitos: Hugo Extended `0.162.0`, Node.js `22` e pnpm `10.14.0`.

```bash
pnpm install
pnpm run dev
```

O site local ficará disponível no endereço exibido pelo Hugo, normalmente `http://localhost:1313/`.

## Onde editar

- Bio e formação: `data/authors/me.yaml`
- Home: `content/_index.md`
- Ensino e pesquisa: `content/ensino/`
- Atuação profissional: `content/atuacao/_index.md`
- Blog: `content/blog/`
- PDFs de aula: `static/materiais/`
- Menu: `config/_default/menus.yaml`
- Identidade visual e rodapé: `config/_default/params.yaml`
- Ajustes visuais adicionais: `assets/css/hbx/blocks/elizeu/style.css`

## Publicação

A branch `main` contém o código-fonte. A GitHub Action em `.github/workflows/deploy.yml` compila o Hugo a cada push e publica o conteúdo de `public/` na branch `master`, já usada pelo GitHub Pages deste repositório.

Não há domínio customizado configurado.
