---
# Required frontmatter according to src/content/config.ts
# Intentionally correct to pass validation

title: "Hello World"
description: "Pierwszy post testowy w Astro z kolekcją treści."
date: 2025-12-01
# Demonstrate multiple tags
tags: ["intro", "astro", "ink"]
draft: false
# Optional cover image example; adjust path if adding a real file
image:
  src: "/src/assets/cover-placeholder.svg"
  alt: "Cover placeholder"
---

Witaj świecie! To jest przykładowy wpis w formacie Markdown. Został dodany, aby potwierdzić, że kolekcja `posts` działa poprawnie i że frontmatter jest walidowany przez Zod.

- Zdefiniowano schemat kolekcji w `src/content/config.ts`.
- Ten plik znajduje się w `src/content/posts/hello-world.md`.
- Uruchom `npm run dev`, a następnie sprawdź konsolę przeglądarki/terminalu — lista postów zostanie zalogowana na stronie głównej.
