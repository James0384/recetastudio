(() => {
  "use strict";

  const APP = "https://app.recetastudio.com";
  const APP_STORE = "https://apps.apple.com/app/receta-studio/id6775508328";
  const PLAY_STORE = "https://play.google.com/store/apps/details?id=com.spinlightproductions.recetastudio";
  const STORE_ART = {
    en: {
      apple: { src: "./assets/brand/badge-app-store-en.svg", alt: "Download on the App Store" },
      play: { src: "./assets/brand/badge-google-play-en.svg", alt: "Get it on Google Play" },
    },
    es: {
      apple: { src: "./assets/brand/badge-app-store-es.svg", alt: "Descargar en el App Store" },
      play: { src: "./assets/brand/badge-google-play-es.svg", alt: "Descargar en Google Play" },
    },
  };

  function applyStores() {
    const art = STORE_ART[lang] || STORE_ART.en;
    document.querySelectorAll(".store-badge").forEach((a) => {
      a.draggable = false;
    });
    document.querySelectorAll("[data-store]").forEach((img) => {
      const spec = art[img.getAttribute("data-store")];
      if (!spec) return;
      if (img.getAttribute("src") !== spec.src) img.src = spec.src;
      img.alt = spec.alt;
      img.draggable = false;
    });
  }

  const SCREEN_ART = {
    en: {
      wizard: { src: "./assets/screens/wizard.jpg", alt: "Recipe Wizard: What are you making? Meal, course, and format chips." },
      import: { src: "./assets/screens/import.jpg", alt: "Import Recipe: Photos, From URL, Files, or Paste Text." },
      discover: { src: "./assets/screens/discover.jpg?v=20260906g", alt: "Discover: Chimichurri, In Season, and Labor Day." },
      cook: { src: "./assets/screens/cook.jpg", alt: "Cook Mode for Peach Caprese: bigger type, servings, units, ingredients, and steps." },
      grocery: { src: "./assets/screens/grocery.jpg", alt: "Grocery list with pantry items and shopping list." },
    },
    es: {
      wizard: { src: "./assets/screens/wizard-es.jpg", alt: "Asistente de recetas: ¿Qué vas a preparar? Comida, plato y formato." },
      import: { src: "./assets/screens/import-es.jpg", alt: "Importar receta: Fotos, Desde URL, Archivos o Pegar texto." },
      discover: { src: "./assets/screens/discover-es.jpg", alt: "Descubrir: Chimichurri, De temporada y Día del Trabajo." },
      cook: { src: "./assets/screens/cook-es.jpg", alt: "Modo cocina para Chimichurri: letra grande, porciones, unidades, ingredientes y pasos." },
      grocery: { src: "./assets/screens/grocery-es.jpg", alt: "Lista de compras con despensa y artículos pendientes." },
    },
  };

  function applyScreens() {
    const art = SCREEN_ART[lang] || SCREEN_ART.en;
    document.querySelectorAll("[data-screen]").forEach((img) => {
      const spec = art[img.getAttribute("data-screen")];
      if (!spec) return;
      if (img.getAttribute("src") !== spec.src) img.src = spec.src;
      img.alt = spec.alt;
    });
  }

  const COPY = {
    en: {
      "nav.open": "Open the app",
      "hero.title": "Tonight is already cooking.",
      "hero.lede": "Save the page from the cookbook, the link from a friend, and the dish you want tonight. English and Spanish, the way you actually cook.",
      "hero.cta": "Open Receta Studio",
      "hero.note": "On iPhone, Android, and the web.",
      "seo.title": "Receta Studio — Recipe, meet Receta",
      "seo.description": "Save the page from the cookbook, the link from a friend, and the dish you want tonight. Receta Studio is a bilingual kitchen for English and Spanish home cooks — now on the App Store, Google Play, and the web.",
      "seo.og": "Two languages. One kitchen. Now on the App Store, Google Play, and the web.",
      "seo.ogAlt": "A plate of chimichurri, plantains, and grilled sausage.",
      "hero.scroll": "Scroll to cook",
      "hook.kicker": "Recipe Wizard",
      "hook.title": "What are you making?",
      "hook.hint": "Long day, empty idea, and people are already hungry. Start with the kind of night it is. You’ll have a dish in a\u00A0minute.",
      "hook.cardKicker": "How it works",
      "hook.cardTitle": "A few questions. Then you pick.",
      "hook.step1": "What you’re making — meal, course, format.",
      "hook.step2": "Time, servings, and what’s in the pantry.",
      "hook.step3": "Choose from recipes that fit.",
      "hook.exampleKicker": "For example",
      "dish.tacos.label": "Weeknight tacos",
      "dish.tacos.meta": "Dinner · Main · Tacos",
      "dish.tacos.result": "Chicken fajitas",
      "dish.cool.label": "Something cool",
      "dish.cool.meta": "Lunch · Side · Salad",
      "dish.cool.result": "Watermelon feta",
      "dish.soup.label": "A pot of soup",
      "dish.soup.meta": "Dinner · Main · Soup",
      "dish.soup.result": "Locro de papa",
      "dish.feast.label": "A feast",
      "dish.feast.meta": "Dinner · Main",
      "dish.feast.result": "Fritada with mote",
      "import.kicker": "Import",
      "import.title": "From a cookbook page to a recipe you can actually\u00A0cook.",
      "import.body": "Snap the page. Paste a link. Paste the text. Ingredients, steps, and a grocery\u00A0list land in your\u00A0collection.",
      "import.share": "Share from any app on iPhone and Android.",
      "discover.kicker": "Discover",
      "discover.title": "What’s in season. What’s on the holiday. What’s for this\u00A0week.",
      "discover.body": "Summer salads, Labor Day plates, Tuesday\u00A0dinner — the kitchen follows the\u00A0calendar.",
      "discover.lens.season": "In season",
      "discover.lens.holiday": "On the holiday",
      "discover.lens.featured": "Featured",
      "discover.live.season": "Summer · refreshes with the season",
      "discover.live.holiday": "Labor Day · the table already knows",
      "discover.live.featured": "Chimichurri · on the counter tonight",
      "cook.kicker": "Cook Mode",
      "cook.title": "Hands on the pan. Big type on the\u00A0counter.",
      "cook.body": "Ingredients, steps, servings, units — large enough to read while you cook. A timer on any step that needs one. The screen stays\u00A0on.",
      "grocery.kicker": "Grocery",
      "grocery.title": "The list writes\u00A0itself.",
      "grocery.body": "What’s in the pantry, what’s on the week, grouped by aisle. One list for the\u00A0store.",
      "g.salmon": "Salmon",
      "g.onion": "Onions",
      "g.pepper": "Bell pepper",
      "g.garlic": "Garlic",
      "g.basil": "Basil",
      "g.peach": "Peach",
      "g.mozz": "Mozzarella",
      "g.oil": "Olive oil",
      "plan.kicker": "Planner",
      "plan.title": "This week, on the\u00A0table.",
      "plan.body": "A dinner on each\u00A0day — and what’s in\u00A0it.",
      "day.mon": "Mon",
      "day.tue": "Tue",
      "day.wed": "Wed",
      "day.thu": "Thu",
      "day.fri": "Fri",
      "day.sat": "Sat",
      "day.sun": "Sun",
      "lang.kicker": "English · Español",
      "lang.title": "Same\u00A0recipe. Both\u00A0languages.",
      "lang.body": "Keep it how it arrived, or read it in your native\u00A0language, English\u00A0or\u00A0Spanish.",
      "price.kicker": "Free Trial",
      "price.title": "Seven days in the\u00A0kitchen. Then you\u00A0decide.",
      "price.body": "The whole kitchen is yours for a week. After that, keep what you saved — or keep going for $5.99 a month. Cancel anytime.",
      "price.badge": "7-Day Free Trial",
      "price.pro.title": "Receta Studio Pro",
      "price.pro.body": "The whole kitchen, every month.",
      "price.per": "/ month",
      "price.feat.wizard.name": "Recipe Wizard",
      "price.feat.wizard.body": "A dish for the night you’re having.",
      "price.feat.import.name": "Import",
      "price.feat.import.body": "From a cookbook page, a link, or a note.",
      "price.feat.cook.name": "Cook Mode",
      "price.feat.cook.body": "Big type on the counter. A timer when you need one.",
      "price.feat.grocery.name": "Grocery",
      "price.feat.grocery.body": "What’s in the pantry and on the week, by aisle.",
      "price.feat.plan.name": "Planner",
      "price.feat.plan.body": "Dinner on each day — and what’s in it.",
      "price.feat.discover.name": "Discover",
      "price.feat.discover.body": "In season, on the holiday, for this week.",
      "price.feat.lang.name": "English and Spanish",
      "price.feat.lang.body": "The same recipe, in the language you want tonight.",
      "price.feat.nutrition.name": "Nutrition",
      "price.feat.nutrition.body": "On every recipe you cook.",
      "price.note": "On iPhone, Android, and the web.",
      "price.cta": "Open Receta Studio",
      "cta.title": "The kitchen’s\u00A0open.",
      "cta.body": "On iPhone, Android, and the\u00A0web.",
      "cta.button": "Open Receta Studio",
      "foot.apple": "App Store",
      "foot.play": "Google Play",
      "foot.privacy": "Privacy",
      "foot.terms": "Terms",
      "foot.legal": "Apple, the Apple logo, App Store, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. Google Play and the Google Play logo are trademarks of Google LLC.",
    },
    es: {
      "nav.open": "Abrir la app",
      "hero.title": "Esta noche ya se está cocinando.",
      "hero.lede": "Guarda la página del libro, el enlace de alguien y el plato que quieres hoy. En inglés y en español, como realmente cocinas.",
      "hero.cta": "Abrir Receta Studio",
      "hero.note": "En iPhone, Android y la web.",
      "seo.title": "Receta Studio — Recipe, conoce Receta",
      "seo.description": "Guarda la página del libro, el enlace de alguien y el plato que quieres hoy. Receta Studio es una cocina bilingüe para cocinar en inglés y en español — ahora en el App Store, Google Play y la web.",
      "seo.og": "Dos idiomas. Una cocina. Ahora en el App Store, Google Play y la web.",
      "seo.ogAlt": "Un plato de chimichurri, plátanos y chorizo a la parrilla.",
      "hero.scroll": "Baja para cocinar",
      "hook.kicker": "Asistente de recetas",
      "hook.title": "¿Qué vas a preparar?",
      "hook.hint": "Día largo, cero ideas, y ya hay hambre. Empieza por el tipo de noche. En un minuto tienes un\u00A0plato.",
      "hook.cardKicker": "Cómo funciona",
      "hook.cardTitle": "Unas preguntas. Luego eliges.",
      "hook.step1": "Qué vas a preparar — comida, plato, formato.",
      "hook.step2": "Tiempo, porciones y lo que hay en la despensa.",
      "hook.step3": "Elige entre recetas que encajen.",
      "hook.exampleKicker": "Por ejemplo",
      "dish.tacos.label": "Tacos entre semana",
      "dish.tacos.meta": "Cena · Plato principal · Tacos",
      "dish.tacos.result": "Fajitas de pollo",
      "dish.cool.label": "Algo fresco",
      "dish.cool.meta": "Almuerzo · Acompañamiento · Ensalada",
      "dish.cool.result": "Sandía con feta",
      "dish.soup.label": "Una olla de sopa",
      "dish.soup.meta": "Cena · Plato principal · Sopa",
      "dish.soup.result": "Locro de papa",
      "dish.feast.label": "Una fiesta",
      "dish.feast.meta": "Cena · Plato principal",
      "dish.feast.result": "Fritada con mote",
      "import.kicker": "Importar",
      "import.title": "De la página del libro a una receta que de\u00A0verdad puedes\u00A0cocinar.",
      "import.body": "Foto a la página. Pega un enlace. Pega el texto. Ingredientes, pasos y una lista de\u00A0compras llegan a tu\u00A0colección.",
      "import.share": "Comparte desde cualquier app en iPhone y Android.",
      "discover.kicker": "Descubrir",
      "discover.title": "Lo de la temporada. Lo del feriado. Lo de esta\u00A0semana.",
      "discover.body": "Ensaladas de verano, platos del Día del Trabajo, la cena del\u00A0martes — la cocina sigue el\u00A0calendario.",
      "discover.lens.season": "De temporada",
      "discover.lens.holiday": "En el feriado",
      "discover.lens.featured": "Destacado",
      "discover.live.season": "Verano · vuelve con la temporada",
      "discover.live.holiday": "Día del Trabajo · la mesa ya lo sabe",
      "discover.live.featured": "Chimichurri · en el mesón esta noche",
      "cook.kicker": "Modo cocina",
      "cook.title": "Las manos en la olla. Letra grande en el\u00A0mesón.",
      "cook.body": "Ingredientes, pasos, porciones, unidades — lo bastante grandes para leer mientras cocinas. Un temporizador en cualquier paso que lo necesite. La pantalla se queda\u00A0encendida.",
      "grocery.kicker": "Compras",
      "grocery.title": "La lista se escribe\u00A0sola.",
      "grocery.body": "Lo de la despensa, lo de la semana, agrupado por pasillo. Una sola lista para el\u00A0súper.",
      "g.salmon": "Salmón",
      "g.onion": "Cebolla",
      "g.pepper": "Pimiento",
      "g.garlic": "Ajo",
      "g.basil": "Albahaca",
      "g.peach": "Durazno",
      "g.mozz": "Mozzarella",
      "g.oil": "Aceite de oliva",
      "plan.kicker": "Planificador",
      "plan.title": "Esta semana, en la\u00A0mesa.",
      "plan.body": "Una cena por cada\u00A0día — y lo que\u00A0lleva.",
      "day.mon": "Lun",
      "day.tue": "Mar",
      "day.wed": "Mié",
      "day.thu": "Jue",
      "day.fri": "Vie",
      "day.sat": "Sáb",
      "day.sun": "Dom",
      "lang.kicker": "English · Español",
      "lang.title": "La\u00A0misma\u00A0receta. Los\u00A0dos\u00A0idiomas.",
      "lang.body": "Déjala como llegó, o léela en tu idioma, inglés\u00A0o\u00A0español.",
      "price.kicker": "Prueba gratis",
      "price.title": "Siete días en la\u00A0cocina. Luego tú\u00A0decides.",
      "price.body": "Toda la cocina es tuya por una semana. Después te quedas con lo que guardaste — o sigues por $5.99 al mes. Cancela cuando quieras.",
      "price.badge": "Prueba gratis de 7 días",
      "price.pro.title": "Receta Studio Pro",
      "price.pro.body": "Toda la cocina, cada mes.",
      "price.per": "/ mes",
      "price.feat.wizard.name": "Asistente de recetas",
      "price.feat.wizard.body": "Un plato para la noche que tienes.",
      "price.feat.import.name": "Importar",
      "price.feat.import.body": "De la página del libro, un enlace o una nota.",
      "price.feat.cook.name": "Modo cocina",
      "price.feat.cook.body": "Letra grande en el mesón. Un temporizador cuando hace falta.",
      "price.feat.grocery.name": "Compras",
      "price.feat.grocery.body": "Lo de la despensa y lo de la semana, por pasillo.",
      "price.feat.plan.name": "Planificador",
      "price.feat.plan.body": "Una cena por cada día — y lo que lleva.",
      "price.feat.discover.name": "Descubrir",
      "price.feat.discover.body": "De temporada, del feriado, de esta semana.",
      "price.feat.lang.name": "Inglés y español",
      "price.feat.lang.body": "La misma receta, en el idioma que quieres esta noche.",
      "price.feat.nutrition.name": "Nutrición",
      "price.feat.nutrition.body": "En cada receta que cocinas.",
      "price.note": "En iPhone, Android y la web.",
      "price.cta": "Abrir Receta Studio",
      "cta.title": "La cocina está\u00A0abierta.",
      "cta.body": "En iPhone, Android y la\u00A0web.",
      "cta.button": "Abrir Receta Studio",
      "foot.apple": "App Store",
      "foot.play": "Google Play",
      "foot.privacy": "Privacidad",
      "foot.terms": "Términos",
      "foot.legal": "Apple, el logotipo de Apple, App Store e iPhone son marcas comerciales de Apple Inc., registradas en EE. UU. y otros países. Google Play y el logotipo de Google Play son marcas comerciales de Google LLC.",
    },
  };

  const DISHES = {
    tacos: { img: "./assets/food/fajitas.jpg", label: "dish.tacos.label", meta: "dish.tacos.meta", result: "dish.tacos.result" },
    cool: { img: "./assets/food/watermelon.jpg", label: "dish.cool.label", meta: "dish.cool.meta", result: "dish.cool.result" },
    soup: { img: "./assets/food/locro.jpg", label: "dish.soup.label", meta: "dish.soup.meta", result: "dish.soup.result" },
    feast: { img: "./assets/food/fritada.jpg", label: "dish.feast.label", meta: "dish.feast.meta", result: "dish.feast.result" },
  };

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function isSpanishLocale(tag) {
    const t = String(tag || "").toLowerCase();
    return t === "es" || t.startsWith("es-") || t.startsWith("es_");
  }

  const params = new URLSearchParams(window.location.search);
  const ORIGIN = "https://recetastudio.com";

  function isEsPath() {
    const p = (location.pathname || "/").replace(/\/+$/, "") || "/";
    return p === "/es";
  }

  function readLang() {
    if (window.__LANG === "es" || window.__LANG === "en") return window.__LANG;
    if (isEsPath()) return "es";
    const q = params.get("lang");
    if (q === "es" || q === "en") return q;
    return isSpanishLocale(navigator.language || navigator.userLanguage) ? "es" : "en";
  }

  let lang = readLang();

  function langPath() {
    return lang === "es" ? "/es/" : "/";
  }

  function syncLangUrl() {
    const nextParams = new URLSearchParams(location.search);
    nextParams.delete("lang");
    const q = nextParams.toString();
    const next = langPath() + (q ? "?" + q : "") + location.hash;
    const now = location.pathname + location.search + location.hash;
    if (now !== next) history.replaceState(null, "", next);
  }

  function setAttr(selector, attr, value) {
    const el = document.querySelector(selector);
    if (el) el.setAttribute(attr, value);
  }

  function applyMeta() {
    const bag = COPY[lang];
    if (!bag) return;
    const url = ORIGIN + langPath();
    const title = bag["seo.title"];
    const desc = bag["seo.description"];
    const og = bag["seo.og"];
    const alt = bag["seo.ogAlt"];
    document.documentElement.lang = lang === "es" ? "es-419" : "en-US";
    if (title) document.title = title;
    setAttr('meta[name="description"]', "content", desc);
    setAttr('link[rel="canonical"]', "href", url);
    setAttr('meta[property="og:title"]', "content", title);
    setAttr('meta[property="og:description"]', "content", og);
    setAttr('meta[property="og:url"]', "content", url);
    setAttr('meta[property="og:locale"]', "content", lang === "es" ? "es_419" : "en_US");
    setAttr('meta[property="og:locale:alternate"]', "content", lang === "es" ? "en_US" : "es_419");
    setAttr('meta[property="og:image:alt"]', "content", alt);
    setAttr('meta[name="twitter:title"]', "content", title);
    setAttr('meta[name="twitter:description"]', "content", og);
    setAttr('meta[name="twitter:image:alt"]', "content", alt);
    const schema = document.getElementById("schema");
    if (schema) {
      try {
        const data = JSON.parse(schema.textContent);
        const nodes = data["@graph"] || [];
        nodes.forEach((node) => {
          if (node["@type"] === "SoftwareApplication") {
            node.url = url;
            if (desc) node.description = desc;
          }
        });
        schema.textContent = JSON.stringify(data);
      } catch (err) { /* leave the static JSON-LD */ }
    }
  }

  function applyCopy() {
    const bag = COPY[lang];
    document.documentElement.lang = lang === "es" ? "es-419" : "en-US";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (bag[key] != null) el.textContent = bag[key];
    });
    document.querySelectorAll(".lang-btn").forEach((el) => {
      el.classList.toggle("is-on", el.dataset.lang === lang);
    });
    const toggle = document.querySelector(".lang");
    if (toggle) {
      toggle.setAttribute(
        "aria-label",
        lang === "es" ? "Español. Cambiar a inglés." : "English. Switch to Spanish."
      );
    }
    document.querySelectorAll("[data-nav-sizer]").forEach((el) => {
      const which = el.getAttribute("data-nav-sizer");
      if (COPY[which] && COPY[which]["nav.open"] != null) {
        el.textContent = COPY[which]["nav.open"];
      }
    });
    applyMeta();
    const dish = document.querySelector(".mood.is-on")?.dataset.dish || "tacos";
    paintDish(dish);
    applyStores();
    applyScreens();
    const band = document.querySelector(".discover-stage")?.dataset.band;
    paintDiscover(band);
  }

  function paintDish(id) {
    const d = DISHES[id];
    if (!d) return;
    const bag = COPY[lang];
    const img = document.getElementById("hookImg");
    if (img && img.getAttribute("src") !== d.img) {
      img.style.opacity = "0";
      window.setTimeout(() => {
        img.src = d.img;
        img.style.opacity = "1";
      }, 160);
    }
    const label = document.getElementById("hookExampleLabel");
    const meta = document.getElementById("hookExampleMeta");
    const result = document.getElementById("hookExampleResult");
    if (label) label.textContent = bag[d.label];
    if (meta) meta.textContent = bag[d.meta];
    if (result) result.textContent = bag[d.result];
  }

  function bindLang() {
    const toggle = document.querySelector(".lang");
    if (!toggle) return;
    toggle.addEventListener("click", () => {
      lang = lang === "es" ? "en" : "es";
      window.__LANG = lang;
      syncLangUrl();
      applyCopy();
    });
    window.addEventListener("popstate", () => {
      lang = isEsPath() ? "es" : "en";
      window.__LANG = lang;
      applyCopy();
    });
  }

  function bindMoods() {
    document.querySelectorAll(".mood").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".mood").forEach((b) => {
          b.classList.toggle("is-on", b === btn);
          b.setAttribute("aria-pressed", b === btn ? "true" : "false");
        });
        paintDish(btn.dataset.dish);
      });
    });
  }

  function paintDiscover(band) {
    const stage = document.querySelector(".discover-stage");
    if (!stage) return;
    const next = band || stage.dataset.band || "season";
    stage.dataset.band = next;
    document.querySelectorAll(".lens").forEach((b) => {
      const on = b.dataset.band === next;
      b.classList.toggle("is-on", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    const live = document.getElementById("discoverLive");
    const key = "discover.live." + next;
    if (live && COPY[lang] && COPY[lang][key] != null) live.textContent = COPY[lang][key];
    const rail = stage.querySelector(".rail");
    if (rail) rail.scrollLeft = 0;
  }

  function bindDiscoverLenses() {
    document.querySelectorAll(".lens").forEach((btn) => {
      btn.addEventListener("click", () => paintDiscover(btn.dataset.band));
    });
  }



  function steam() {
    const canvas = document.getElementById("steam");
    if (!canvas || reduce) return;
    const ctx = canvas.getContext("2d");
    let w = 0;
    let h = 0;
    const particles = [];

    function resize() {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(devicePixelRatio, devicePixelRatio);
    }

    function spawn() {
      particles.push({
        x: (canvas.offsetWidth || 1) * (0.35 + Math.random() * 0.5),
        y: (canvas.offsetHeight || 1) * (0.55 + Math.random() * 0.35),
        r: 30 + Math.random() * 70,
        a: 0.018 + Math.random() * 0.03,
        vy: 0.2 + Math.random() * 0.4,
        vx: (Math.random() - 0.5) * 0.18,
      });
    }

    function tick() {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      ctx.filter = "blur(16px)";
      if (particles.length < 16) spawn();
      for (let i = particles.length - 1; i >= 0; i -= 1) {
        const p = particles[i];
        p.y -= p.vy;
        p.x += p.vx;
        p.a *= 0.996;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,253,249,${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        if (p.y + p.r < 0 || p.a < 0.01) particles.splice(i, 1);
      }
      requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize);
    tick();
  }

  function grocery() {
    const list = document.getElementById("glist");
    if (!list) return;
    const items = [...list.querySelectorAll("li")];
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        list.classList.add("is-on");
        items.forEach((li, i) => {
          window.setTimeout(() => li.classList.add("is-checked"), 700 + i * 220);
        });
        io.disconnect();
      });
    }, { threshold: 0.35 });
    io.observe(list);
  }

  function hideLoader() {
    window.setTimeout(() => document.body.classList.remove("is-loading"), 700);
  }

  function heroLoop() {
    const video = document.querySelector(".hero-loop");
    if (!video) return;
    if (reduce) {
      video.removeAttribute("autoplay");
      return;
    }
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const play = () => {
      video.muted = true;
      const p = video.play();
      if (p) p.catch(() => {});
    };

    const start = () => {
      play();
      video.addEventListener("canplay", play, { once: true });
    };

    if (document.body.classList.contains("is-loading")) {
      const obs = new MutationObserver(() => {
        if (!document.body.classList.contains("is-loading")) {
          obs.disconnect();
          start();
        }
      });
      obs.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    } else {
      start();
    }

    document.addEventListener("touchstart", play, { passive: true });
    document.addEventListener("click", play);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") play();
    });
  }

  document.querySelectorAll(
    'a[href="' + APP + '"], a[href="' + APP_STORE + '"], a[href="' + PLAY_STORE + '"]'
  ).forEach((a) => {
    a.rel = "noopener noreferrer";
  });

  syncLangUrl();
  applyCopy();
  bindLang();
  bindMoods();
  bindDiscoverLenses();
  if (DISHES[params.get("dish")]) {
    const btn = document.querySelector(`.mood[data-dish="${params.get("dish")}"]`);
    if (btn) btn.click();
  }
  const shot = params.get("shot");
  if (shot) {
    document.body.classList.remove("is-loading");
    const el = document.getElementById(shot);
    if (el) el.scrollIntoView();
  }
  steam();
  grocery();
  heroLoop();
  window.addEventListener("load", hideLoader);
  window.setTimeout(hideLoader, 1600);
})();
