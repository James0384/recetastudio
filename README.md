# Receta Studio — public site

Static marketing site for [recetastudio.com](https://recetastudio.com). The product app stays at [app.recetastudio.com](https://app.recetastudio.com).

This folder is self-contained. No build step.

## Preview

```bash
cd landing
python3 -m http.server 8765
```

Open http://127.0.0.1:8765

Live: [https://james0384.github.io/recetastudio/](https://james0384.github.io/recetastudio/)  
Repo: [James0384/recetastudio](https://github.com/James0384/recetastudio)

## Publish on GitHub Pages

This folder’s **contents** (not the `landing` directory itself) are what GitHub Pages serves from `James0384/recetastudio` on `main`. Copy the **contents** of this folder into the Pages repo root:

```
index.html
css/
js/
assets/
.nojekyll
404.html
```

Then:

1. Repo **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / root
4. Custom domain: `recetastudio.com` (apex). Keep `app.recetastudio.com` pointed at the existing app.

Add a `CNAME` file containing `recetastudio.com` only when that domain should resolve here.

## What’s in here

- Real device screens from the app (Discover, Recipes, Wizard, Import, Grocery, Cook, Share)
- Discover catalog food photography
- Kitchen stills generated for this page
- EN / es-419 toggle (follows the browser locale on first load)

Copy rule: no “AI” / “IA” in user-facing text. Feature names match the app (Wizard / Creador, Discover / Descubrir, Cook Mode / Modo cocina).
