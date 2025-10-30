# CARICOM Member States

A small static site that lists CARICOM member states with links to their official government websites and displays flags fetched from the Rest Countries API.

How to run locally:

1. Clone the repository (or create one and add these files).
2. Open `index.html` in your browser, or serve with a static server:
   - npx serve: `npx serve` (in the project directory)
   - python3: `python -m http.server 8000` then open http://localhost:8000

Notes:
- Flags are fetched from https://restcountries.com.
- If a flag doesn't load, a placeholder is shown instead.
- Consider enabling GitHub Pages on the repository (Settings → Pages → select branch `main` and root) to host the site.
