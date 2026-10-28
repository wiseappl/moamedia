# MOAMEDIA website

GitHub Pages site for the MOAMEDIA company introduction and ClearClip app.

## Page map

| Language | Company | ClearClip | Privacy policy |
| --- | --- | --- | --- |
| 한국어 | `/` | `/clearclip/` | `/clearclip/privacy/` |
| English | `/en/` | `/clearclip/en/` | `/clearclip/privacy/en/` |
| 日本語 | `/ja/` | `/clearclip/ja/` | `/clearclip/privacy/ja/` |
| Español | `/es/` | `/clearclip/es/` | `/clearclip/privacy/es/` |

The root company, app, and privacy pages use the browser's preferred language when it is Korean, English, Japanese, or Spanish. Visitors can switch languages from the page menu; their manual choice is remembered in the browser.

## Updating pages

- Edit the matching `index.html` for each language and page type above.
- Keep the four privacy policies aligned with the released app, ad SDK behavior, and Play Console Data safety declaration.
- The first published privacy policy is dated 2026-10-27. Update the effective date when issuing a new policy version.
- Shared images and styling live in `assets/`. `assets/language.js` handles browser-language routing and remembers a visitor's manual language choice.
- The public support and privacy contact is `wiseappl@gmail.com`.
- The canonical ClearClip privacy policy starts at `/clearclip/privacy/`; former `/privacy/` links redirect to the matching language page.

## GitHub Pages

Publish from the `main` branch and `/(root)` folder. The default GitHub Pages address is `https://wiseappl.github.io/moamedia/`. A custom domain, if configured in Settings → Pages, points to the same multilingual site; it does not need a separate domain per language.
