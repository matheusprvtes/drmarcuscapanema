/* =========================================================
   Dr. Marcus Capanema — scripts
   ========================================================= */

/* ---------------------------------------------------------
   CONTATO — EDITE AQUI (único lugar)
   Use o número completo com DDI + DDD, só dígitos.
   Ex.: 553199998888  (55 = Brasil, 31 = BH)
--------------------------------------------------------- */
const CONTACT = {
  bh: {
    whats: "5531987203497",   // WhatsApp (BH e SP usam o mesmo número)
    msg: "Olá! Vim pelo site e gostaria de agendar uma consulta com o Dr. Marcus Capanema em Belo Horizonte."
  },
  sp: {
    whats: "5531987203497",   // WhatsApp (mesmo número de BH)
    msg: "Olá! Vim pelo site e gostaria de agendar uma consulta com o Dr. Marcus Capanema em São Paulo."
  }
};

(function () {
  "use strict";

  // ---- Aplica links de WhatsApp ----
  document.querySelectorAll("[data-wa]").forEach(function (el) {
    var c = CONTACT[el.getAttribute("data-wa")];
    if (!c) return;
    el.setAttribute("href", "https://wa.me/" + c.whats + "?text=" + encodeURIComponent(c.msg));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  // ---- Ano do rodapé ----
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // ---- Navbar: estado ao rolar ----
  var nav = document.getElementById("nav");
  function onScroll() {
    nav.setAttribute("data-state", window.scrollY > 12 ? "scrolled" : "top");
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // ---- Menu mobile ----
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");
  function closeMenu() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
  }
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  });
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  // ---- Reveal on scroll ----
  var reveals = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  // ---- Scrollspy (link ativo) ----
  var sections = ["sobre", "rinoplastia", "procedimentos", "atendimento", "faq"]
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  var linkMap = {};
  menu.querySelectorAll('a[href^="#"]').forEach(function (a) {
    linkMap[a.getAttribute("href").slice(1)] = a;
  });
  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = linkMap[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          Object.keys(linkMap).forEach(function (k) { linkMap[k].classList.remove("is-active"); });
          link.classList.add("is-active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
  }
})();
