(() => {
  const names = {
    ko: "한국어",
    en: "English",
    ja: "日本語",
    es: "Español",
  };
  const supported = new Set(Object.keys(names));

  document.querySelectorAll(".language-links, .language").forEach((container) => {
    const links = Array.from(container.querySelectorAll("a[data-locale]"));
    if (!links.length) return;

    const pageLocale = (document.documentElement.lang || "ko").toLowerCase().split("-")[0];
    const selected = links.find((link) => link.dataset.locale === pageLocale) ||
      links.find((link) => link.getAttribute("aria-current") === "page") || links[0];

    const picker = document.createElement("div");
    picker.className = "language-picker";
    const button = document.createElement("button");
    button.className = "language-current";
    button.type = "button";
    button.setAttribute("aria-haspopup", "true");
    button.setAttribute("aria-expanded", "false");
    button.textContent = `${names[selected.dataset.locale] || selected.textContent.trim()} ▾`;

    const menu = document.createElement("div");
    menu.className = "language-options";
    menu.hidden = true;
    for (const link of links) {
      if (link.dataset.locale === selected.dataset.locale) continue;
      link.textContent = names[link.dataset.locale] || link.textContent.trim();
      link.removeAttribute("aria-current");
      menu.append(link);
    }

    button.addEventListener("click", (event) => {
      event.stopPropagation();
      menu.hidden = !menu.hidden;
      button.setAttribute("aria-expanded", String(!menu.hidden));
    });
    document.addEventListener("click", (event) => {
      if (!picker.contains(event.target)) {
        menu.hidden = true;
        button.setAttribute("aria-expanded", "false");
      }
    });
    button.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        menu.hidden = true;
        button.setAttribute("aria-expanded", "false");
      }
    });

    picker.append(button, menu);
    container.replaceWith(picker);
  });

  document.querySelectorAll("a[data-locale]").forEach((link) => {
    link.addEventListener("click", () => {
      try {
        localStorage.setItem("moamedia-locale", link.dataset.locale);
      } catch (_) {
        // The selected language still works when storage is unavailable.
      }
    });
  });

  if (!document.body.hasAttribute("data-language-home")) return;

  let locale = "";
  try {
    locale = localStorage.getItem("moamedia-locale") || "";
  } catch (_) {
    // Fall back to the browser's preferred language.
  }
  if (!supported.has(locale)) {
    locale = (navigator.language || "ko").toLowerCase().split("-")[0];
  }
  if (!supported.has(locale) || locale === "ko") return;

  const base = document.body.dataset.siteBase || "./";
  const destination = new URL(`${locale}/`, new URL(base, location.href));
  if (destination.pathname !== location.pathname) location.replace(destination.href);
})();
