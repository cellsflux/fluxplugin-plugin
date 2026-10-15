# Developing Osui

This is a normal React + TypeScript project. It has its own `package.json` and its own libraries.

```bash
npm install                       # your libraries + fluxplugin tooling
npm install chart.js              # add anything you need: it is bundled into dist/, the app never needs it
npm run dev                       # rebuilds on save
npm run dev:host                  # same, and copies the result into a host app (edit the path) which hot-reloads it
npm run build                     # dist/ — this is all that ships (no src/, no .ts, no sourcemaps)
npm run package                   # com.example.osui-1.0.0.tgz
npm run release                   # publish to the plugin store (GitHub)
```

**Shared with the host** (never bundled twice): `react`, `react-dom`, `fluxplugin`, `fluxplugin/react`. Everything else you import is yours.
CSS imported in the renderer (including from libraries) is emitted as `dist/renderer.css` and loaded automatically; images and fonts are inlined.
