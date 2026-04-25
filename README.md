# Saykan Combat Ireland

Marketing site for **Saykan Combat** — Filipino Martial Arts (Arnis · Mano Mano · Likasan), with clubs in Bray (Co. Wicklow) and Bohermeen (Co. Meath).

The visual style is inspired by the [Martivo](../martivo) ThemeForest template (dark martial-arts aesthetic, bold display type, red accent), but the site is built fresh as a lightweight Vite + React app with custom CSS — no Bootstrap, jQuery, Owl Carousel, or other template legacy dependencies.

## Stack

- Vite 5
- React 18
- Plain CSS (no framework)
- Static images borrowed from the Martivo template under `public/assets/img/` — replace with real Saykan photography when available.

## Run

```bash
npm install
npm run dev      # http://localhost:5174
npm run build
npm run preview
```

## Editing content

All copy lives in [src/data/content.js](src/data/content.js) — phone, email, hero text, disciplines, classes, lineage, seminars, FAQs. Edit there; components consume it directly.

## Sources used for content

- Old academy site (Bray, Master Paul Gahan): https://fmacombat.wordpress.com
- Bohermeen Facebook page: https://www.facebook.com/profile.php?id=61579674460665
