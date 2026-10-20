# CLAUDE.md

Osobní stránka (česky), https://martin.kramolis.cz. Zatím ochutnávka s fiktivním jménem „Ross“ a ukázkovým obsahem:
žádné skutečné jméno ani osobní údaje (věk, škola,
fotky, kontakty), dokud je tam majitel sám nedá. Má být „wow“, moderní a mladá; hlavně na mobilu.

- Astro (statický výstup), vlastní CSS, tmavý vesmírný styl, písma Space Grotesk + JetBrains Mono (`@fontsource`).
- Úspěchy = content collection z Markdownu `src/content/uspechy/*.md` (schéma v `src/content.config.ts`,
  `kategorie: veda | sport`); soubory s `_` na začátku jsou vzory a nenačítají se. Přidávání musí jít jen přes
  web GitHubu (README): nové pole vždy nepovinné, vzor `_vzor.md` s komentáři držet aktuální.
- Texty, koníčky (sekce „Co mě baví“) a odkazy v `src/site.ts`. Animace pozadí `Orbits.astro` (canvas, respektuje `prefers-reduced-motion`).
- Google Analytics 4: `site.analytics` (ID měření), tag v `Base.astro` jen v produkčním buildu.
- Node.js ≥ 24 (`engines`), ve workflow `node-version: 24`.
- Deploy: GitHub Actions → GitHub Pages z `main` (`.github/workflows/deploy.yml`), doména v `public/CNAME`.
