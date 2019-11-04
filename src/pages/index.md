---
title: Home
sections:
  - component: HeroBlock
    content: Front end engineer. Dog and cat dad. Nerd.
    section_id: hero
    title: 'Hi, I''m Tony Nguyen.'
    type: heroblock
  - actions:
      - label: View Blog
        url: blog/index.html
    component: PostsBlock
    num_posts_displayed: 2
    section_id: latest-posts
    title: Latest from the Blog
    type: postsblock
  - component: PortfolioBlock
    layout_style: mosaic
    num_projects_displayed: 6
    section_id: latest-projects
    title: Recent Work
    type: portfolioblock
    view_all_text: View All
    view_all_url: portfolio/index.html
  - component: ContactBlock
    title: Contact Form
    type: contactblock
menus:
  main:
    title: Home
    weight: 1
template: home
---

