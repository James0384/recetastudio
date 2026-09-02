(() => {
  "use strict";

  const APP = "https://app.recetastudio.com";

  const COPY = {
    en: {
      "nav.open": "Open the app",
      "hero.title": "Tonight is already cooking.",
      "hero.lede": "Save the page from the cookbook, the link from a friend, and the dish you want tonight. English and Spanish, the way you actually cook.",
      "hero.cta": "Open Receta Studio",
      "hero.note": "On the web today. iPhone and Android, coming soon.",
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
      "import.share": "Share from any app — coming with iPhone and Android.",
      "discover.kicker": "Discover",
      "discover.title": "What’s in season. What’s on the holiday. What’s for this\u00A0week.",
      "discover.body": "Summer salads, Independence Day plates, Tuesday\u00A0dinner — the kitchen follows the\u00A0calendar.",
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
      "price.kicker": "Receta Studio Pro",
      "price.title": "Seven days in the\u00A0kitchen. Then you\u00A0decide.",
      "price.body": "The whole kitchen is yours for a week. After that, keep what you saved — or keep going for $5.99 a month. Cancel anytime.",
      "price.trial.title": "After the 7-day trial",
      "price.trial.body": "You keep the kitchen you already made.",
      "price.trial.f1": "The recipes you saved",
      "price.trial.f2": "A grocery list you write yourself",
      "price.trial.f3": "A pantry you keep yourself",
      "price.pro.title": "When you subscribe",
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
      "price.note": "On the web now. Phone apps on the way.",
      "price.cta": "Open Receta Studio",
      "cta.title": "The kitchen’s\u00A0open.",
      "cta.body": "On the web now. Phone apps on the\u00A0way.",
      "cta.button": "Open Receta Studio",
      "foot.privacy": "Privacy",
      "foot.terms": "Terms",
    },
    es: {
      "nav.open": "Abrir la app",
      "hero.title": "Esta noche ya se está cocinando.",
      "hero.lede": "Guarda la página del libro, el enlace de alguien y el plato que quieres hoy. En inglés y en español, como realmente cocinas.",
      "hero.cta": "Abrir Receta Studio",
      "hero.note": "En la web hoy. iPhone y Android, muy pronto.",
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
      "import.share": "Comparte desde cualquier app — llega con iPhone y Android.",
      "discover.kicker": "Descubrir",
      "discover.title": "Lo de la temporada. Lo del feriado. Lo de esta\u00A0semana.",
      "discover.body": "Ensaladas de verano, platos de Independencia, la cena del\u00A0martes — la cocina sigue el\u00A0calendario.",
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
      "price.kicker": "Receta Studio Pro",
      "price.title": "Siete días en la\u00A0cocina. Luego tú\u00A0decides.",
      "price.body": "Toda la cocina es tuya por una semana. Después te quedas con lo que guardaste — o sigues por $5.99 al mes. Cancela cuando quieras.",
      "price.trial.title": "Después de los 7 días",
      "price.trial.body": "Te quedas con la cocina que ya armaste.",
      "price.trial.f1": "Las recetas que guardaste",
      "price.trial.f2": "Una lista de compras que escribes tú",
      "price.trial.f3": "Una despensa que tú armas",
      "price.pro.title": "Cuando te suscribes",
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
      "price.note": "En la web ahora. Las apps del celular, en camino.",
      "price.cta": "Abrir Receta Studio",
      "cta.title": "La cocina está\u00A0abierta.",
      "cta.body": "En la web ahora. Las apps del celular, en\u00A0camino.",
      "cta.button": "Abrir Receta Studio",
      "foot.privacy": "Privacidad",
      "foot.terms": "Términos",
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
  let lang = params.get("lang") === "es" || params.get("lang") === "en"
    ? params.get("lang")
    : (isSpanishLocale(navigator.language || navigator.userLanguage) ? "es" : "en");

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
    const title = lang === "es"
      ? "Receta Studio — Recipe, conoce Receta"
      : "Receta Studio — Recipe, meet Receta";
    document.title = title;
    const dish = document.querySelector(".mood.is-on")?.dataset.dish || "tacos";
    paintDish(dish);
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

  document.querySelectorAll('a[href="' + APP + '"]').forEach((a) => {
    a.rel = "noopener noreferrer";
  });

  applyCopy();
  bindLang();
  bindMoods();
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
