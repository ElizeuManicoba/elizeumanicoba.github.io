---
title: Blog e artigos
summary: 'Textos de Ensino, Atuação e assuntos gerais em um único feed.'
type: landing

sections:
  - block: markdown
    content:
      title: Blog e artigos
      text: |-
        Este é o feed agregador do site. Textos de **Ensino**, **Atuação** e temas **Gerais** aparecem juntos; a etiqueta de cada cartão mostra o universo ao qual o conteúdo pertence.
    design:
      columns: '1'

  - block: collection
    id: feed
    content:
      title: Todos os textos
      count: 20
      filters:
        folders:
          - blog
        exclude_future: true
      order: desc
    design:
      view: article-grid
      columns: 2
      show_date: true
      show_read_time: true
      show_read_more: true
---
