(() => {
  const supported = new Set(["ko", "en", "ja", "es"]);

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
