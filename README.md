# Receta Studio — public site

Static marketing site for [recetastudio.com](https://recetastudio.com). The product app stays at [app.recetastudio.com](https://app.recetastudio.com).

This folder is self-contained. No build step.

## Preview

```bash
cd landing
python3 -m http.server 8765
```

Open http://127.0.0.1:8765

Live: [https://recetastudio.com](https://recetastudio.com)  
Repo: [James0384/recetastudio](https://github.com/James0384/recetastudio)  
Cloudflare Pages project: `recetastudio-www` (`recetastudio-www.pages.dev`)

The app stays on a separate Pages project (`recipe-studio` → `app.recetastudio.com`). Do not point the apex at that project.

## Publish

This folder’s **contents** (not the `landing` directory itself) live in `James0384/recetastudio` on `main`. A push to `main` deploys Cloudflare Pages. Keep `app.recetastudio.com` on `recipe-studio.pages.dev`.

## What’s in here

- Real device screens from the app (Discover, Recipes, Wizard, Import, Grocery, Cook, Share)
- Discover catalog food photography
- Kitchen stills generated for this page
- EN / es-419 toggle (follows the browser locale on first load)

Copy rule: no “AI” / “IA” in user-facing text. Feature names match the app (Wizard / Creador, Discover / Descubrir, Cook Mode / Modo cocina).
