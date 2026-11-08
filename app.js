/* Portrait behaviour. Content lives in data.js. */
(function () {
  "use strict";
  const D = window.PORTFOLIO;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- icons ---------------- */
  const I = {
    bell: '<svg viewBox="0 0 24 24"><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15L6 16Z"/><path d="M10 20.5a2 2 0 0 0 4 0"/></svg>',
    cal: '<svg viewBox="0 0 24 24"><rect x="4" y="5.5" width="16" height="14.5" rx="2"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/></svg>',
    trophy: '<svg viewBox="0 0 24 24"><path d="M8 4h8v5a4 4 0 0 1-8 0V4ZM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 20h7M10 17h4"/></svg>',
    play2: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="m10.5 9 4.5 3-4.5 3Z"/></svg>',
    doc: '<svg viewBox="0 0 24 24"><path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10.5A.5.5 0 0 1 6.5 20V4a.5.5 0 0 1 .5-.5Z"/><path d="M9.5 12h5M9.5 15.5h5"/></svg>',
    pen: '<svg viewBox="0 0 24 24"><path d="m15 5 4 4L9 19H5v-4L15 5Z"/></svg>',
    code: '<svg viewBox="0 0 24 24"><path d="m8.5 7-5 5 5 5m7-10 5 5-5 5"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
    plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
    home: '<svg viewBox="0 0 24 24"><path d="M4 10.5 12 4l8 6.5V20h-5.5v-5.5h-5V20H4z"/></svg>',
    list: '<svg viewBox="0 0 24 24"><path d="M9 6.5h11M9 12h11M9 17.5h11M4.5 6.5h.01M4.5 12h.01M4.5 17.5h.01"/></svg>',
    user: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.75"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/></svg>',
    search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></svg>',
    bag: '<svg viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>',
    chart: '<svg viewBox="0 0 24 24"><path d="M5 20V10M12 20V4M19 20v-7"/></svg>',
    run: '<svg viewBox="0 0 24 24"><circle cx="14" cy="4.5" r="1.8"/><path d="m6 20 4-6 3 2 1-5 3 3h3M9 10l3-2.5 2.5 1"/></svg>',
    bike: '<svg viewBox="0 0 24 24"><circle cx="5.5" cy="16" r="3.5"/><circle cx="18.5" cy="16" r="3.5"/><path d="m5.5 16 4-7h6l3 7M9.5 9 12 16h3"/></svg>',
    chat: '<svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4V5Z"/></svg>',
    send: '<svg viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6"/></svg>',
    map: '<svg viewBox="0 0 24 24"><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z"/><circle cx="12" cy="10" r="2.3"/></svg>',
    bed: '<svg viewBox="0 0 24 24"><path d="M3 18V7m0 7h18v4M21 14v-2.5A2.5 2.5 0 0 0 18.5 9H11v5"/><circle cx="7" cy="11" r="1.8"/></svg>',
    plane: '<svg viewBox="0 0 24 24"><path d="m3 13 7-1.5L14 4h2l-2 7.5 5-.5 2-2.5h1l-1 4.5 1 4.5h-1l-2-2.5-5-.5 2 7.5h-2l-4-7.5L3 13Z"/></svg>',
    play: '<svg class="ico ico--fill" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.6 2.8c-.3.3-.4.7-.4 1.2v16c0 .5.1.9.4 1.2l9-9.2-9-9.2Zm10.4 7.8-2.5-2.5L5.9 2.3l10.8 6.2-1.7 2.1Zm0 2.8 1.7 2.1-10.8 6.2 6.6-5.8 2.5-2.5Zm3.7-3.8 2.4 1.4c.7.4.7 1.5 0 1.9l-2.4 1.4-2-2.4 2-2.3Z"/></svg>',
    apple: '<svg class="ico ico--fill" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.4 12.6c0-2.5 2-3.7 2.1-3.8a4.6 4.6 0 0 0-3.6-2c-1.5-.2-3 .9-3.7.9-.8 0-2-.9-3.2-.8a4.8 4.8 0 0 0-4 2.4c-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.2-1.2 3-2.4a10 10 0 0 0 1.3-2.8 4.3 4.3 0 0 1-2.4-3.7ZM14 5.2A4.3 4.3 0 0 0 15 2a4.4 4.4 0 0 0-2.9 1.5 4.1 4.1 0 0 0-1 3.1A3.6 3.6 0 0 0 14 5.2Z"/></svg>',
    github: '<svg class="ico ico--fill" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/></svg>',
    ext: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
    tick: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>'
  };
  const statusBar = () =>
    `<div class="a-status"><span class="a-clock">${clock()}</span><span class="a-status__r">` +
    '<svg viewBox="0 0 24 24"><path d="M2 20h3v-4H2v4Zm5 0h3v-8H7v8Zm5 0h3V8h-3v12Zm5 0h3V4h-3v16Z"/></svg>' +
    '<svg viewBox="0 0 24 24"><path d="M12 19.5 1.5 9a15 15 0 0 1 21 0L12 19.5Z"/></svg>' +
    '<svg viewBox="0 0 24 24"><path d="M7 4h10v18H7zM10 2h4v2h-4z"/></svg></span></div>';
  const appNav = (labels, iconKeys, on = 0) =>
    '<div class="a-nav">' + labels.map((l, i) => `<span class="${i === on ? "on" : ""}"><i>${I[iconKeys[i]]}</i>${l}</span>`).join("") + "</div>";
  function clock() {
    const d = new Date();
    return d.getHours().toString().padStart(2, "0") + ":" + d.getMinutes().toString().padStart(2, "0");
  }

  /* ---------------- bindings ---------------- */
  const P = D.person, C = D.contact;
  const bindMap = { ...P, email: C.email, phone: C.phone, responseNote: C.responseNote };
  $$("[data-bind]").forEach((el) => { const v = bindMap[el.dataset.bind]; if (v != null) el.textContent = v; });
  $$('[data-bind-href="cv"]').forEach((a) => { a.href = P.cv; });
  $("#wa-link").href = C.whatsapp;
  $("#mail-link").href = "mailto:" + C.email;
  const tel = $("#tel-link");
  if (C.phone) { tel.href = "tel:" + C.phone.replace(/[^\d+]/g, ""); tel.setAttribute("title", "Call " + C.phone); }
  else tel.hidden = true;
  $("#li-link").href = C.linkedin;
  $("#gh-link").href = C.github;
  $("#year").textContent = new Date().getFullYear();
  document.title = `${P.fullName} — ${P.role}`;
  if (!P.availableForWork) $("#ribbon").hidden = true;

  // Portrait: only add the <img> once the file really loads; keeps the monogram otherwise.
  if (P.photo) {
    const img = new Image();
    img.alt = P.fullName;
    img.decoding = "async";
    img.onload = () => $("#portrait-frame").appendChild(img);
    img.src = P.photo;
  }

  $("#about-body").innerHTML = P.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#principles").innerHTML = D.principles.map((p) => `<div><dt>${esc(p.title)}</dt><dd>${esc(p.text)}</dd></div>`).join("");

  /* ---------------- hero: Today app + hot reload ---------------- */
  const tasks = [
    { t: "Ship v2.1 to Play Store", m: "9:00", done: true },
    { t: "Fix RenderFlex overflow", m: "10:30", done: true },
    { t: "Write widget tests", m: "12:00", done: false },
    { t: "Profile scroll jank", m: "14:00", done: false },
    { t: "Review PR #42", m: "16:30", done: false }
  ];
  const today = $("#today-app");
  function renderToday() {
    const done = tasks.filter((t) => t.done).length;
    const date = new Date().toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
    today.innerHTML =
      statusBar() +
      `<div class="a-head"><div><div class="a-date">${esc(date)}</div><div class="a-title">Today</div></div><div class="a-avatar">${esc(P.initials)}</div></div>` +
      `<div class="a-progress"><div class="a-progress__label"><span>${done} of ${tasks.length} done</span><span>${Math.round((done / tasks.length) * 100)}%</span></div><div class="a-progress__track"><div class="a-progress__bar" style="width:${(done / tasks.length) * 100}%"></div></div></div>` +
      '<ul class="a-list">' +
      tasks.map((t, i) => `<li><button type="button" class="a-item${t.done ? " is-done" : ""}" data-i="${i}" aria-pressed="${t.done}"><span class="a-check">${I.check}</span><span class="a-item__t">${esc(t.t)}</span><span class="a-item__meta">${t.m}</span></button></li>`).join("") +
      "</ul>" +
      '<div class="a-focus"><svg class="a-focus__ring" viewBox="0 0 36 36" aria-hidden="true"><circle cx="18" cy="18" r="15" stroke="currentColor" opacity=".25"/><circle cx="18" cy="18" r="15" stroke="currentColor" stroke-dasharray="94.2" stroke-dashoffset="35" stroke-linecap="round" transform="rotate(-90 18 18)"/></svg><div><div class="a-focus__t">Focus · Write widget tests</div><div class="a-focus__v">16:24 left</div></div></div>' +
      `<div class="a-fab" aria-hidden="true">${I.plus}</div>` +
      appNav(["Today", "Projects", "Profile"], ["list", "chart", "user"]);
  }
  today.addEventListener("click", (e) => {
    const b = e.target.closest(".a-item");
    if (!b) return;
    tasks[+b.dataset.i].done = !tasks[+b.dataset.i].done;
    renderToday();
    today.querySelector(`.a-item[data-i="${b.dataset.i}"]`).focus();
  });
  renderToday();

  const SEEDS = ["#3D5AFE", "#00897B", "#C2185B", "#E65100", "#6750A4"];
  const state = { seed: 0, brightness: "dark", density: "comfortable" };
  const heroPhone = $("#hero-phone");
  const consoleMsg = $("#console-msg");
  const hex = (c) => "Color(0xFF" + c.slice(1).toUpperCase() + ")";

  function syncTokens() {
    const s = SEEDS[state.seed];
    const seedTok = $('[data-tok="seed"]');
    seedTok.style.setProperty("--seed", s);
    seedTok.querySelector(".tok__val").textContent = hex(s);
    $('[data-tok="brightness"] .tok__val').textContent = "Brightness." + state.brightness;
    $('[data-tok="density"] .tok__val').textContent = "Density." + state.density;
    today.style.setProperty("--seed", s);
    today.dataset.brightness = state.brightness;
    today.dataset.density = state.density;
  }

  function sweep(el) {
    if (reduceMotion) return;
    el.classList.remove("is-reloading");
    void el.offsetWidth; // restart animation
    el.classList.add("is-reloading");
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove("is-reloading"), 600);
  }

  const LIBS = 812;
  function hotReload(which) {
    if (which === "seed") state.seed = (state.seed + 1) % SEEDS.length;
    if (which === "brightness") state.brightness = state.brightness === "dark" ? "light" : "dark";
    if (which === "density") state.density = state.density === "comfortable" ? "compact" : "comfortable";
    syncTokens();
    const tok = $(`[data-tok="${which}"]`);
    tok.classList.remove("is-changed"); void tok.offsetWidth; tok.classList.add("is-changed");
    sweep(heroPhone);
    const ms = 140 + Math.round(Math.random() * 160);
    consoleMsg.innerHTML = `Reloaded 1 of ${LIBS} libraries in <span class="ok">${ms}ms</span>.`;
  }
  $$(".tok").forEach((t) => t.addEventListener("click", () => hotReload(t.dataset.tok)));
  syncTokens();

  // Press r to hot reload (cycles the seed colour), like `flutter run`.
  document.addEventListener("keydown", (e) => {
    if (e.key !== "r" || e.metaKey || e.ctrlKey || e.altKey) return;
    const tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea" || e.target.isContentEditable) return;
    hotReload("seed");
    if (heroPhone.getBoundingClientRect().bottom < 0) consoleMsg.textContent = "Hot reloaded. Scroll up to see it.";
  });

  /* ---------------- mock app screens for projects ---------------- */
  function mockScreen(p) {
    const k = p.mock, md = p.mockData || {};
    const shell = (inner, nav, dark = false) =>
      `<div class="app" data-brightness="${dark ? "dark" : "light"}" style="--seed:${p.seed}">${statusBar()}${inner}${nav}</div>`;
    const head = (sub, title, right) =>
      `<div class="a-head"><div><div class="a-date">${sub}</div><div class="a-title">${title}</div></div><div class="a-avatar">${right}</div></div>`;
    const row = (ic, t, s, end = "") =>
      `<div class="a-row"><div class="a-row__ic">${I[ic]}</div><div><div class="a-row__t">${t}</div><div class="a-row__s">${s}</div></div>${end ? `<div class="a-row__end">${end}</div>` : ""}</div>`;

    if (k === "booking") {
      return shell(
        head("Good evening", esc(md.title || p.name), I.bell) +
        '<div class="a-chips"><span class="a-chip on">Dining</span><span class="a-chip">Events</span><span class="a-chip">Spa</span><span class="a-chip">Travel</span></div>' +
        `<div class="a-scene"><svg viewBox="0 0 160 110" preserveAspectRatio="xMidYMid slice"><rect width="160" height="110" fill="${p.seed}"/><circle cx="122" cy="30" r="12" fill="#FFF2D6" opacity=".9"/><path d="M0 80 30 58l24 14 34-26 32 22 40-16v58H0Z" fill="#000" opacity=".22"/><path d="M0 92 44 72l28 12 38-16 50 20v22H0Z" fill="#000" opacity=".32"/></svg>` +
        `<div class="a-scene__t">${esc(md.hero || "Tonight")}<small>${esc(md.heroSub || "")}</small></div></div>` +
        '<div class="a-sec">Your requests <span>See all</span></div>' +
        row("cal", "Table for two", "Thu · 9:00 PM", "Confirmed") +
        row("map", "Golf session", "Sat · 7:30 AM", "Pending"),
        appNav(["Home", "Requests", "Profile"], ["home", "list", "user"])
      );
    }
    if (k === "edu") {
      const subj = [["Arabic", 72], ["Math", 54], ["Science", 81], ["English", 38]];
      return shell(
        head("Grade 5 · Term 1", "Subjects", esc(P.initials)) +
        '<div class="a-grid">' + subj.map(([n, v]) =>
          `<div class="a-tile"><div class="a-tile__n">${n}</div><div class="a-tile__p">${v}% done</div><div class="a-progress__track" style="margin-top:2.4cqw"><div class="a-progress__bar" style="width:${v}%"></div></div></div>`).join("") + "</div>" +
        `<div class="a-focus" style="margin-top:4cqw">${I.trophy}<div><div class="a-focus__t">Weekly challenge</div><div class="a-focus__v">12 questions</div></div></div>` +
        '<div class="a-sec" style="margin-top:3cqw">Continue <span>All lessons</span></div>' +
        row("play2", "Fractions, part 2", "Math · 9 min", "60%") +
        row("doc", "Reading: The Nile", "Arabic · 6 pages"),
        appNav(["Learn", "Challenges", "Profile"], ["home", "trophy", "user"])
      );
    }
    if (k === "video") {
      return shell(
        head("Continue watching", "Cardiology", I.play2) +
        `<div class="a-scene" style="aspect-ratio:16/9"><svg viewBox="0 0 160 90" preserveAspectRatio="xMidYMid slice"><rect width="160" height="90" fill="#0E1726"/><path d="M10 52h34l8-18 10 34 8-26 6 10h74" fill="none" stroke="${p.seed}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="80" cy="45" r="13" fill="#fff" opacity=".92"/><path d="m76 38 11 7-11 7Z" fill="#0E1726"/><rect x="10" y="80" width="140" height="3" rx="1.5" fill="#fff" opacity=".25"/><rect x="10" y="80" width="62" height="3" rx="1.5" fill="${p.seed}"/></svg></div>` +
        '<div class="a-sec">Lessons <span>12 videos</span></div>' +
        row("play2", "ECG basics", "Lesson 4 · 18 min", "44%") +
        row("play2", "Heart failure", "Lesson 5 · 24 min") +
        row("doc", "Quiz: arrhythmias", "10 questions"),
        appNav(["Courses", "Library", "Profile"], ["home", "doc", "user"]), true
      );
    }
    if (k === "market") {
      const cats = [["Design", "pen"], ["Translation", "doc"], ["Programming", "code"], ["Marketing", "chart"]];
      return shell(
        head("Find a freelancer", esc(p.name), esc(P.initials)) +
        `<div class="a-search">${I.search} Search services</div>` +
        '<div class="a-grid">' + cats.map(([n, ic]) =>
          `<div class="a-tile a-tile--cat"><div class="a-row__ic">${I[ic]}</div><div class="a-tile__n">${n}</div></div>`).join("") + "</div>" +
        '<div class="a-sec" style="margin-top:3cqw">Top rated <span>See all</span></div>' +
        row("user", "Logo design", "From 3 days", "★ 4.9") +
        row("user", "Arabic ↔ English", "From 1 day", "★ 4.8") +
        row("user", "Flutter app fixes", "From 2 days", "★ 5.0"),
        appNav(["Explore", "Orders", "Profile"], ["home", "list", "user"])
      );
    }
    if (k === "notes") {
      const notes = [["Morning pages", "Three things I want to finish this week…", "Today"], ["Blog draft: Cairo cafés", "The quiet ones near Zamalek are best for…", "Yesterday"], ["Ideas", "Short story about a lighthouse keeper", "Mon"], ["Reading list", "Five books to finish before summer", "Sun"], ["Travel notes", "Siwa: salt lakes at sunset, bring a jacket", "Fri"]];
      return shell(
        head("5 drafts · synced", esc(p.name.split(" — ")[0]), I.pen) +
        '<div class="a-list">' + notes.map(([t, s, d]) =>
          `<div class="a-item a-item--note"><div><div class="a-item__t" style="font-weight:600">${t}</div><div class="a-row__s" style="margin-top:.8cqw">${s}</div></div><span class="a-item__meta">${d}</span></div>`).join("") + "</div>" +
        `<div class="a-fab" aria-hidden="true">${I.pen}</div>`,
        appNav(["Drafts", "Published", "Profile"], ["doc", "list", "user"])
      );
    }
    // quiz
    return shell(
      head("Question 3 of 10", "Quick quiz", esc(P.initials)) +
      '<div class="a-dots">' + Array.from({ length: 10 }, (_, i) => `<i class="${i < 2 ? "ok" : i === 2 ? "now" : ""}"></i>`).join("") + "</div>" +
      '<div class="a-q">7 + 5 = ?</div>' +
      '<div class="a-answers"><span>11</span><span class="on">12</span><span>13</span><span>15</span></div>' +
      '<div class="a-focus" style="margin-top:5cqw"><div><div class="a-focus__t">Score so far</div><div class="a-focus__v">2 / 2 correct</div></div></div>' +
      '<div class="a-next">Next question</div>',
      ""
    );
  }
  function screenFor(p) {
    if (p.screens && p.screens.length) return `<img class="real-screen" src="${esc(p.screens[0])}" alt="" loading="lazy">`;
    return mockScreen(p);
  }

  /* ---------------- apps list ---------------- */
  const LINKS = [
    ["play", "Google Play", I.play],
    ["appStore", "App Store", I.apple],
    ["github", "Source code", I.github],
    ["demo", "Live demo", I.ext]
  ];
  $("#apps-list").innerHTML = D.projects.map((p, i) => `
    <article class="app-case" data-i="${i}" aria-labelledby="app-${i}">
      <div class="app-case__phone"><div class="phone phone--inline" role="img" aria-label="${p.screens && p.screens.length ? "Screenshot" : "Illustrative screen"} of ${esc(p.name)}"><div class="phone__screen">${screenFor(p)}</div><span class="phone__cam"></span></div></div>
      <div class="app-case__title">${p.icon ? `<img class="app-case__icon" src="${esc(p.icon)}" alt="" width="64" height="64" loading="lazy">` : ""}<h3 class="app-case__name" id="app-${i}">${esc(p.name)}</h3></div>
      <p class="app-case__tagline">${esc(p.tagline)}</p>
      <p class="app-case__meta">${[p.year, p.role, p.platforms.join(" · ")].filter(Boolean).map((m) => `<span>${esc(m)}</span>`).join("")}</p>
      <p class="app-case__summary">${esc(p.summary)}</p>
      <ul class="app-case__hl">${p.highlights.map((h) => `<li>${I.tick}<span>${esc(h)}</span></li>`).join("")}</ul>
      ${p.variants && p.variants.length ? `<div class="variants"><p class="variants__label">Released as ${p.variants.length} apps</p><ul class="variants__list">${p.variants.map((v) => `<li class="variant"><div class="variant__main"><img src="${esc(v.icon)}" alt="" width="40" height="40" loading="lazy"><span>${esc(v.name)}</span></div><div class="variant__stores">${v.play ? `<a class="variant__store" href="${esc(v.play)}" target="_blank" rel="noopener" aria-label="${esc(v.name)} on Google Play" title="Google Play">${I.play}</a>` : ""}${v.appStore ? `<a class="variant__store" href="${esc(v.appStore)}" target="_blank" rel="noopener" aria-label="${esc(v.name)} on the App Store" title="App Store">${I.apple}</a>` : ""}</div></li>`).join("")}</ul></div>` : ""}
      ${p.gallery && p.gallery.length ? `<div class="gallery" role="list" aria-label="${esc(p.name)} store screenshots" tabindex="0">${p.gallery.map((g, n) => `<a role="listitem" class="gallery__item" href="${esc(g)}" target="_blank" rel="noopener"><img src="${esc(g)}" alt="${esc(p.name)} screenshot ${n + 1}" loading="lazy"></a>`).join("")}</div>` : ""}
      <div class="stack" aria-label="Tech stack">${p.stack.map((s) => `<span>${esc(s)}</span>`).join("")}</div>
      <div class="app-case__links">
        ${LINKS.filter(([k]) => p.links && p.links[k]).map(([k, label, ic]) => `<a class="btn btn--outline-sm" href="${esc(p.links[k])}" target="_blank" rel="noopener">${ic}${label}</a>`).join("")}
        ${p.sample ? '<span class="sample-tag">Sample content</span>' : ""}
      </div>
    </article>`).join("");

  // Sticky phone swaps app with a hot-reload sweep as each case reaches the middle.
  const stickyPhone = $("#sticky-phone");
  const slot = $(".sticky-slot", stickyPhone);
  const caption = $("#sticky-caption");
  let current = -1;
  function showApp(i) {
    if (i === current) return;
    current = i;
    const p = D.projects[i];
    slot.innerHTML = screenFor(p);
    caption.textContent = (p.screens && p.screens.length ? "" : "Illustrative screen · ") + p.name;
    $$(".app-case").forEach((a) => a.classList.toggle("is-active", +a.dataset.i === i));
    if (i >= 0) sweep(stickyPhone);
  }
  showApp(0);

  // Gallery preview: hovering, focusing or clicking a store screenshot shows it big in the sticky phone (desktop).
  const desktopQ = window.matchMedia("(min-width: 760px)");
  let previewSrc = null, revertT;
  function preview(i, src, n, total) {
    clearTimeout(revertT);
    if (src === previewSrc) return;
    previewSrc = src;
    current = i;
    slot.innerHTML = `<img class="real-screen is-preview" src="${esc(src)}" alt="">`;
    caption.textContent = `${D.projects[i].name} · store screenshot ${n} of ${total}`;
    $$(".app-case").forEach((a) => a.classList.toggle("is-active", +a.dataset.i === i));
    sweep(stickyPhone);
  }
  function endPreview() {
    clearTimeout(revertT);
    revertT = setTimeout(() => {
      if (previewSrc === null) return;
      const i = current;
      previewSrc = null;
      current = -1;
      showApp(i);
      $$(".gallery__item.is-on").forEach((g) => g.classList.remove("is-on"));
    }, 220);
  }
  $$(".app-case").forEach((card) => {
    const i = +card.dataset.i;
    const items = $$(".gallery__item", card);
    items.forEach((a, n) => {
      const show = () => {
        if (!desktopQ.matches) return;
        items.forEach((x) => x.classList.toggle("is-on", x === a));
        preview(i, a.getAttribute("href"), n + 1, items.length);
      };
      a.addEventListener("mouseenter", show);
      a.addEventListener("focus", show);
      a.addEventListener("click", (e) => { if (desktopQ.matches) { e.preventDefault(); show(); } });
    });
    const g = $(".gallery", card);
    if (g) {
      g.addEventListener("mouseleave", endPreview);
      g.addEventListener("focusout", (e) => { if (!g.contains(e.relatedTarget)) endPreview(); });
    }
  });
  const caseObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) showApp(+en.target.dataset.i); });
  }, { rootMargin: "-45% 0px -45% 0px" });
  $$(".app-case").forEach((a) => caseObs.observe(a));

  /* ---------------- pubspec.yaml ---------------- */
  const y = [];
  y.push(`<span class="y-key">name</span><span class="y-pun">:</span> <span class="y-str">${esc(P.name.toLowerCase().replace(/\s+/g, "_"))}_portfolio</span>`);
  y.push(`<span class="y-key">description</span><span class="y-pun">:</span> <span class="y-str">${esc(P.role)}</span>`);
  y.push("");
  y.push('<span class="y-key">skills</span><span class="y-pun">:</span>');
  Object.entries(D.skills).forEach(([k, list]) => {
    y.push(`  <span class="y-key">${esc(k)}</span><span class="y-pun">:</span> <span class="y-pun">[</span>` +
      list.map((s) => `<span class="y-str">${esc(s)}</span>`).join('<span class="y-pun">,</span> ') + '<span class="y-pun">]</span>');
  });
  y.push("");
  y.push('<span class="y-com"># always learning</span>');
  $("#yaml").innerHTML = y.map((l) => `<span class="yl">${l}</span>`).join("");

  /* ---------------- timeline ---------------- */
  const row = (r) => `<li><span class="timeline__period">${esc(r.period)}</span><div><div class="timeline__title">${esc(r.title)}</div><div class="timeline__org">${esc(r.org)}</div>${r.text ? `<p class="timeline__text">${esc(r.text)}</p>` : ""}${r.sample ? '<span class="sample-tag">Sample content</span>' : ""}</div></li>`;
  $("#experience").innerHTML = D.experience.map(row).join("");
  $("#education").innerHTML = D.education.map(row).join("");

  /* ---------------- top bar + scroll spy ---------------- */
  const topbar = $("#topbar");
  const onScroll = () => topbar.classList.toggle("is-scrolled", window.scrollY > 12);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const spyTargets = ["home", "apps", "about", "toolkit", "journey", "contact"].map((id) => document.getElementById(id));
  const spyObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      let id = en.target.id;
      $$(".topnav a").forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + id));
      if (id === "journey") id = "toolkit"; // bottom nav has 5 slots
      $$(".bottomnav a").forEach((a) => {
        const on = a.dataset.nav === id;
        a.classList.toggle("is-active", on);
        if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  spyTargets.forEach((s) => s && spyObs.observe(s));

  // keep the phone clocks honest
  setInterval(() => $$(".a-clock").forEach((c) => (c.textContent = clock())), 30000);
})();
