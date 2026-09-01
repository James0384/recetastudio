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
      "hook.hint": "Name a dish if you have one, or tap meal, course, and format. Skip anything you don’t care about.",
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
      "import.title": "From a cookbook page to a recipe you can cook.",
      "import.body": "Photograph the page. Paste a link. Paste the text. It lands in your collection — ingredients, steps, and a grocery list.",
      "import.share": "Share from any app — coming with iPhone and Android.",
      "discover.kicker": "Discover",
      "discover.title": "What’s in season, what’s on the holiday, what’s worth cooking this week.",
      "discover.body": "Rails that move with the calendar — summer salads, Independence Day plates, dinners for this week.",
      "cook.kicker": "Cook Mode",
      "cook.title": "Hands on the pan. Type that stays out of the way.",
      "cook.body": "The whole recipe in bigger type — ingredients, steps, servings, and units. If a step has a time, start a timer on it. Switch language at the stove. The screen stays on.",
      "grocery.kicker": "Grocery",
      "grocery.title": "The list writes itself.",
      "grocery.body": "Pantry photos, aisle groups, and every recipe on the week’s plan — one list for the store.",
      "g.salmon": "Salmon",
      "g.onion": "Onions",
      "g.pepper": "Bell pepper",
      "g.garlic": "Garlic",
      "g.basil": "Basil",
      "g.peach": "Peach",
      "g.mozz": "Mozzarella",
      "g.oil": "Olive oil",
      "plan.kicker": "Planner",
      "plan.title": "The week, already decided.",
      "plan.body": "Drop dinners onto days. Nutrition for the week, not a lecture for the day.",
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
      "cta.title": "Come into the kitchen.",
      "cta.body": "Receta Studio on the web today. iPhone and Android, coming soon.",
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
      "hook.hint": "Ponle nombre al plato si ya lo tienes, o toca comida, plato y formato. Sáltate lo que no te importe.",
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
      "import.title": "De la página del libro a una receta para cocinar.",
      "import.body": "Fotografía la página. Pega un enlace. Pega el texto. Llega a tu colección: ingredientes, pasos y lista de compras.",
      "import.share": "Comparte desde cualquier app — llega con iPhone y Android.",
      "discover.kicker": "Descubrir",
      "discover.title": "Lo de la temporada, lo del feriado, lo que vale cocinar esta semana.",
      "discover.body": "Carriles que cambian con el calendario — ensaladas de verano, platos de Independencia, cenas para esta semana.",
      "cook.kicker": "Modo cocina",
      "cook.title": "Las manos en la olla. Letras que no estorban.",
      "cook.body": "Toda la receta en letra más grande — ingredientes, pasos, porciones y unidades. Si un paso tiene tiempo, inicia un temporizador. Cambia de idioma junto al fuego. La pantalla se queda encendida.",
      "grocery.kicker": "Compras",
      "grocery.title": "La lista se escribe sola.",
      "grocery.body": "Fotos de la despensa, pasillos y cada receta del plan de la semana — una sola lista para el súper.",
      "g.salmon": "Salmón",
      "g.onion": "Cebolla",
      "g.pepper": "Pimiento",
      "g.garlic": "Ajo",
      "g.basil": "Albahaca",
      "g.peach": "Durazno",
      "g.mozz": "Mozzarella",
      "g.oil": "Aceite de oliva",
      "plan.kicker": "Planificador",
      "plan.title": "La semana, ya decidida.",
      "plan.body": "Suelta las cenas en los días. Nutrición de la semana, no un sermón del día.",
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
      "cta.title": "Entra a la cocina.",
      "cta.body": "Receta Studio en la web hoy. iPhone y Android, muy pronto.",
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

  function navSolid() {
    const nav = document.getElementById("nav");
    const hero = document.querySelector(".hero");
    if (!nav) return;

    const apply = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      if (y < 48) {
        nav.classList.remove("is-solid");
        return;
      }
      if (!hero) {
        nav.classList.add("is-solid");
        return;
      }
      const navBottom = nav.getBoundingClientRect().bottom;
      nav.classList.toggle("is-solid", hero.getBoundingClientRect().bottom <= navBottom + 12);
    };

    apply();
    window.addEventListener("scroll", apply, { passive: true });
    window.addEventListener("resize", apply, { passive: true });
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

  function tilt() {
    if (reduce || window.matchMedia("(hover: none)").matches) return;
    const stage = document.querySelector("[data-tilt]");
    if (!stage) return;
    stage.addEventListener("mousemove", (e) => {
      const r = stage.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      stage.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 8}deg)`;
    });
    stage.addEventListener("mouseleave", () => {
      stage.style.transform = "";
    });
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
  navSolid();
  steam();
  tilt();
  grocery();
  window.addEventListener("load", hideLoader);
  window.setTimeout(hideLoader, 1600);
})();
