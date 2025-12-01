# Astro Ink Starter (Content Collections)

Ten repozytorium zawiera minimalną konfigurację projektu Astro z motywem Astro Ink oraz Content Collections.

## Wymagania
- Node.js 18+
- npm lub pnpm/yarn

## Instalacja
```bash
npm install
```

## Development
```bash
npm run dev
```
Aplikacja będzie dostępna pod adresem http://localhost:4321 (domyślnie 4321 lub 3000 w zależności od środowiska).

## Build
```bash
npm run build && npm run preview
```

## Content Collections
- Schemat zdefiniowany w `src/content/config.ts` (Zod).
- Przykładowy post: `src/content/posts/hello-world.md`.
- Brak wymaganych pól (np. `date`) spowoduje błąd walidacji podczas budowania.

## Layout
- Projekt używa własnego layoutu `BaseLayout` (`src/layouts/BaseLayout.astro`).
- Layout zawiera nawigację, nagłówek i stopkę oraz stosuje style Tailwind CSS.
- Wszystkie strony używają tego samego layoutu dla spójnego wyglądu.

## Obrazy
- Zasoby statyczne dla okładek znajdują się w `src/assets/`.

## Uwaga
- Repozytorium jest gotowe do uruchomienia lokalnie. Po zainstalowaniu zależności (`npm install`) wszystkie kryteria akceptacji powinny zostać spełnione.
