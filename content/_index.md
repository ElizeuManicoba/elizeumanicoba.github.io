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

  - block: collection
    id: artigos
    content:
      title: Textos recentes
      text: 'Ensino, atuação profissional e temas gerais em um único feed.'
      count: 5
      filters:
        folders:
          - blog
        exclude_future: true
      order: desc
    design:
      view: date-title-summary
      columns: 1
      show_date: true
      show_read_time: true
      show_read_more: false
---
