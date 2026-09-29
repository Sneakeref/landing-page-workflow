(function () {
  var S = window.SITE, $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); };
  if (S.theme) document.documentElement.setAttribute("data-theme", S.theme);
  var root = document.documentElement.style;
  root.setProperty("--accent", S.brand.accent);
  root.setProperty("--accent2", S.brand.accent2);
  document.title = S.brand.name + " — " + S.hero.title;

  $("logo").textContent = S.brand.logo;
  $("brandName").textContent = S.brand.name;
  $("navLinks").innerHTML = S.nav.map(function (n) { return '<a href="' + esc(n.href) + '">' + esc(n.label) + "</a>"; }).join("");
  var link = function (id, o) { $(id).textContent = o.label; $(id).href = o.href; };
  link("navCta", S.cta); link("heroPrimary", S.hero.primary); link("heroSecondary", S.hero.secondary); link("finalCta", S.cta);
  $("badge").textContent = S.hero.badge;
  $("heroTitle").textContent = S.hero.title;
  $("heroSub").textContent = S.hero.subtitle;
  $("heroNote").textContent = S.hero.note;
  $("logos").innerHTML = S.logos.map(function (l) { return "<span>" + esc(l) + "</span>"; }).join("");
  $("features-grid").innerHTML = S.features.map(function (f) {
    return '<article class="card"><div class="ico">' + esc(f.icon) + "</div><h3>" + esc(f.title) + "</h3><p>" + esc(f.text) + "</p></article>";
  }).join("");
  $("stats").innerHTML = S.stats.map(function (s) {
    return '<div class="stat"><strong>' + esc(s.value) + "</strong><span>" + esc(s.label) + "</span></div>";
  }).join("");
  $("quote").innerHTML = "“" + esc(S.testimonial.quote) + "”<cite>" + esc(S.testimonial.author) + "</cite>";
  $("pricing-grid").innerHTML = S.pricing.map(function (p) {
    return '<article class="card price' + (p.featured ? " featured" : "") + '"><h3>' + esc(p.name) + '</h3><div class="amt">' + esc(p.price) +
      "<small>" + esc(p.unit) + "</small></div><ul>" + p.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") +
      '</ul><a class="btn' + (p.featured ? "" : " btn-ghost") + '" href="#">' + esc(p.cta) + "</a></article>";
  }).join("");
  $("faq-list").innerHTML = S.faq.map(function (f) {
    return "<details><summary>" + esc(f.q) + "</summary><p>" + esc(f.a) + "</p></details>";
  }).join("");
  $("footer").textContent = S.footer.text;
})();
