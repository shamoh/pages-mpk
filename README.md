# martin.kramolis.cz

Tvoje vlastní stránka. Je postavená v [Astru](https://astro.build) a GitHub ji sám zveřejní po každé změně
ve větvi `main`. Nemusíš nic instalovat: všechno jde upravit přímo tady na GitHubu, v prohlížeči i na mobilu.

## Přidat úspěch (2 minuty)

1. Otevři složku [`src/content/uspechy`](src/content/uspechy).
2. Otevři soubor `_vzor.md`, zkopíruj jeho obsah.
3. Vrať se do složky a klikni na **Add file → Create new file**.
4. Pojmenuj soubor třeba `2027-03-turnaj-praha.md` (malá písmena, bez mezer a diakritiky, na konci `.md`).
5. Vlož obsah vzoru a přepiš hodnoty: název, datum, `kategorie: veda` nebo `sport`, výsledek…
6. Dole klikni na **Commit changes**. Za minutu je úspěch na webu.

Ukázkové úspěchy (`ukazka-*.md`, na webu mají štítek „ukázka“) smaž, až budeš mít první vlastní:
otevři soubor, vpravo nahoře **⋯ → Delete file**.

## Změnit texty

Jméno, nadpis, úvodní text, témata v běžícím pásu, koníčky v sekci „Co mě baví“ a odkazy (GitHub, Instagram, PDGA…) jsou v [`src/site.ts`](src/site.ts).
Odkaz se na webu ukáže, jakmile u něj vyplníš `url`.

## Když se něco pokazí

Když web nepůjde postavit (třeba překlep v datu), na webu zůstane poslední funkční verze a v záložce
**Actions** uvidíš červený křížek s popisem chyby. Oprav soubor a ulož znovu.

## Pro pokročilé: lokálně na počítači

Potřebuješ Node.js 24 nebo novější.

```shell
npm install
npm run dev       # web na http://localhost:4321, změny vidíš hned
npm run build     # hotový web do dist/
```

Struktura:

```
src/site.ts               texty a odkazy
src/content/uspechy/      úspěchy, jeden soubor = jeden úspěch (_vzor.md je vzor)
src/content.config.ts     co může úspěch obsahovat
src/pages/index.astro     úvodní stránka
src/components/Orbits.astro  animované pozadí
src/styles/global.css     barvy a písma
public/                   soubory beze změny (CNAME = doména, favicon)
```
