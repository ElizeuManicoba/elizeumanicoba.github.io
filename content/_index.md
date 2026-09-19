---
title: ''
summary: 'Economia, ensino e planejamento financeiro com rigor e clareza.'
date: 2026-09-19
type: landing

sections:
  - block: resume-biography-3
    id: home
    content:
      username: me
      text: ''
      headings:
        about: Perfil
        education: Formação
        interests: Interesses
    design:
      show_status: false
      name:
        size: sm
      avatar:
        size: medium
        shape: circle

  - block: markdown
    id: ensino
    content:
      title: Ensino e pesquisa
      text: |-
        Disciplinas, materiais de aula e linhas de pesquisa em **economia do desenvolvimento** e **demografia econômica**.

        [Conheça as disciplinas e as linhas de pesquisa →](/ensino/)
    design:
      columns: '1'

  - block: markdown
    id: atuacao
    content:
      title: Atuação financeira
      text: |-
        Planejamento e assessoria orientados por evidências, com transparência, abordagem **fee-based** e uso de **Investment Policy Statement (IPS)**.

        [Veja como funciona e fale comigo →](/atuacao/)
    design:
      columns: '1'

  - block: collection
    id: artigos
    content:
      title: Blog e artigos
      text: 'Um único feed para textos de Ensino, Atuação e temas gerais. A etiqueta identifica o contexto de cada publicação.'
      count: 4
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
