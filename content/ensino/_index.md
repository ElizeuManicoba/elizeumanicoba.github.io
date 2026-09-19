---
title: Ensino
summary: 'Disciplinas, materiais didáticos e linhas de pesquisa.'
type: landing

sections:
  - block: markdown
    content:
      title: Ensino
      text: |-
        Esta área reúne disciplinas, ementas e materiais de apoio. Os arquivos atuais são **placeholders editáveis**: a estrutura já está pronta para receber planos de ensino, listas, apresentações, notebooks e avaliações.

        A proposta pedagógica é simples: definição clara, raciocínio passo a passo, verificação do resultado e aplicação em problemas reais.
    design:
      columns: '1'

  - block: collection
    id: disciplinas
    content:
      title: Disciplinas
      filters:
        folders:
          - ensino
      order: asc
    design:
      view: article-grid
      columns: 3
      show_date: false
      show_read_time: false
      show_read_more: true

  - block: markdown
    id: pesquisa
    content:
      title: Pesquisa
      text: |-
        A pesquisa está integrada ao eixo de Ensino porque nasce do mesmo compromisso com explicações verificáveis e formação de longo prazo.

        **Linhas de interesse**

        - Economia do desenvolvimento;
        - Demografia econômica;
        - Vulnerabilidade financeira e poupança de longo prazo;
        - Educação financeira e comportamento econômico;
        - Métodos quantitativos aplicados às decisões financeiras.

        **Publicações**

        Espaço reservado para artigos, working papers, apresentações e materiais de pesquisa futuros, já organizado para acompanhar uma trajetória de doutorado.
    design:
      columns: '1'
---
