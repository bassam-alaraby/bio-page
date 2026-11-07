# BASSAM.SYS — Bio Page

Personal link-in-bio page built with Eleventy from an HTML template, CSS, and JavaScript.

## Development

```sh
npm install     # first time only
npm run dev     # http://localhost:8080, with live reload
npm test        # build and run tests; run before committing, not while editing
npm run build   # optional one-time build to _site/
```

While `npm run dev` is running, edits to `style.css`, `index.html`, `script.js`, or `_data/site.json`
trigger a rebuild and browser reload automatically. `_site/` is generated output—do not edit it by hand.
`npm test` runs the build followed by `test/site.test.mjs`; CI also runs `npm test` before deployment.

Page content is edited through Pages CMS (`.pages.yml`), which writes `_data/site.json` and
uploads media to `assets/images/` and `assets/meta/`.

## How the site is built and deployed

Nothing is published from the repository root. Every deploy regenerates `_site/` from source, and
GitHub Pages serves that folder only.

```
index.html, _data/site.json, style.css, script.js, assets/
        │  npm run build (eleventy)
        ▼
      _site/          ← generated, gitignored, disposable
        │  npm test (asserts on the generated HTML)
        ▼
  GitHub Pages → links.bassamalaraby.me
```

**1. Trigger.** A push to `main` starts the deploy workflow in `.github/workflows/`.

**2. Build.** On Ubuntu with Node 22, CI runs `npm ci` then `npm test`. Eleventy reads `.eleventy.js`
and copies `assets/`, `style.css`, `script.js`, and `CNAME` to `_site/` verbatim, then renders
`index.html` with `_data/site.json` as `site`.

**3. Verify.** `test/site.test.mjs` reads `_site/` and checks the generated page: metadata, required
content fields, and that every local `href`/`src` resolves to a real file. Any miss fails the job,
so a typo in an asset path blocks the deploy.

**4. Publish.** The `_site/` folder is uploaded as a Pages artifact and deployed. `CNAME` maps the
site to `links.bassamalaraby.me`.

## Project Structure

```
Bio Page
├── _data/
│   └── site.json          # page content (Pages CMS writes this)
│
├── assets/
│   ├── images/
│   │   └── avatar.jpg
│   │
│   └── meta/
│       ├── og-image.jpg
│       └── favicons/
│
├── test/
│   └── site.test.mjs
│
├── index.html             # page template
├── style.css
├── script.js
├── .eleventy.js
├── .pages.yml
├── CNAME
├── package.json
└── README.md
```

## Live

[links.bassamalaraby.me](https://links.bassamalaraby.me)
