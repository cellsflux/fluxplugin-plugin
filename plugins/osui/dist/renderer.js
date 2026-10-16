var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// flux-shared:fluxplugin
var require_fluxplugin = __commonJS({
  "flux-shared:fluxplugin"(exports, module) {
    var m = globalThis.__FLUXPLUGIN_SHARED__ && globalThis.__FLUXPLUGIN_SHARED__["fluxplugin"];
    if (!m) throw new Error("Shared module fluxplugin is not provided by the host application (see installSharedModules).");
    module.exports = m;
  }
});

// flux-shared:fluxplugin/react
var require_react = __commonJS({
  "flux-shared:fluxplugin/react"(exports, module) {
    var m = globalThis.__FLUXPLUGIN_SHARED__ && globalThis.__FLUXPLUGIN_SHARED__["fluxplugin/react"];
    if (!m) throw new Error("Shared module fluxplugin/react is not provided by the host application (see installSharedModules).");
    module.exports = m;
  }
});

// flux-shared:react
var require_react2 = __commonJS({
  "flux-shared:react"(exports, module) {
    var m = globalThis.__FLUXPLUGIN_SHARED__ && globalThis.__FLUXPLUGIN_SHARED__["react"];
    if (!m) throw new Error("Shared module react is not provided by the host application (see installSharedModules).");
    module.exports = m;
  }
});

// flux-shared:react/jsx-runtime
var require_jsx_runtime = __commonJS({
  "flux-shared:react/jsx-runtime"(exports, module) {
    var m = globalThis.__FLUXPLUGIN_SHARED__ && globalThis.__FLUXPLUGIN_SHARED__["react/jsx-runtime"];
    if (!m) throw new Error("Shared module react/jsx-runtime is not provided by the host application (see installSharedModules).");
    module.exports = m;
  }
});

// src/renderer.tsx
var import_fluxplugin = __toESM(require_fluxplugin(), 1);
var import_react5 = __toESM(require_react(), 1);

// src/components/editor.tsx
var import_react = __toESM(require_react2(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var INCIDENTS = [
  {
    id: "lagos",
    title: "Inondation \u2014 entrep\xF4t de Lagos",
    place: "Lagos",
    domain: "Op\xE9rations",
    severity: "critical",
    lon: 3.38,
    lat: 6.52,
    start: 1,
    dur: 6,
    ago: "il y a 2 h",
    owner: "\xC9quipe Afrique de l'Ouest",
    desc: "Acc\xE8s routier coup\xE9 autour de l'entrep\xF4t. Stock expos\xE9, \xE9vacuation partielle en cours.",
    eta: "7,5 h",
    assets: 8,
    steps: 4
  },
  {
    id: "kinshasa",
    title: "Rupture de stock \u2014 hub de Kinshasa",
    place: "Kinshasa",
    domain: "Logistique",
    severity: "high",
    lon: 15.27,
    lat: -4.32,
    start: 0.5,
    dur: 5,
    ago: "il y a 4 h",
    owner: "Planification logistique",
    desc: "Trois r\xE9f\xE9rences critiques sous le seuil de s\xE9curit\xE9. R\xE9approvisionnement \xE0 reprogrammer.",
    eta: "5 h",
    assets: 6,
    steps: 3
  },
  {
    id: "singapore",
    title: "Retard de fret maritime \u2014 Singapour",
    place: "Singapour",
    domain: "Logistique",
    severity: "high",
    lon: 103.82,
    lat: 1.35,
    start: 2,
    dur: 6,
    ago: "il y a 1 h",
    owner: "Fret international",
    desc: "Congestion au port : 36 h de retard estim\xE9es sur deux conteneurs prioritaires.",
    eta: "12 h",
    assets: 4,
    steps: 3
  },
  {
    id: "newyork",
    title: "Pic de demande \u2014 New York",
    place: "New York",
    domain: "Surveillance",
    severity: "normal",
    lon: -74,
    lat: 40.71,
    start: 3,
    dur: 4,
    ago: "il y a 35 min",
    owner: "Analyse de la demande",
    desc: "Hausse de 24 % des commandes en 2 h. Capacit\xE9 actuelle suffisante, surveillance renforc\xE9e.",
    eta: "2 h",
    assets: 3,
    steps: 2
  },
  {
    id: "paris",
    title: "Maintenance programm\xE9e \u2014 Paris",
    place: "Paris",
    domain: "Op\xE9rations",
    severity: "normal",
    lon: 2.35,
    lat: 48.85,
    start: 4,
    dur: 3,
    ago: "il y a 6 h",
    owner: "Maintenance Europe",
    desc: "Fen\xEAtre de maintenance du centre de tri. Flux redirig\xE9s vers le site secondaire.",
    eta: "3 h",
    assets: 2,
    steps: 2
  },
  {
    id: "dubai",
    title: "Anomalie capteurs \u2014 Duba\xEF",
    place: "Duba\xEF",
    domain: "Surveillance",
    severity: "high",
    lon: 55.27,
    lat: 25.2,
    start: 2.5,
    dur: 4,
    ago: "il y a 50 min",
    owner: "Supervision technique",
    desc: "Temp\xE9ratures incoh\xE9rentes sur 3 capteurs de la cha\xEEne du froid. V\xE9rification requise.",
    eta: "4 h",
    assets: 5,
    steps: 3
  },
  {
    id: "tokyo",
    title: "Retard douanier \u2014 Tokyo",
    place: "Tokyo",
    domain: "Logistique",
    severity: "normal",
    lon: 139.69,
    lat: 35.68,
    start: 5,
    dur: 5,
    ago: "il y a 3 h",
    owner: "Conformit\xE9 import",
    desc: "Documents compl\xE9mentaires demand\xE9s. Lib\xE9ration attendue sous 24 h.",
    eta: "9 h",
    assets: 2,
    steps: 2
  },
  {
    id: "saopaulo",
    title: "Gr\xE8ve des transports \u2014 S\xE3o Paulo",
    place: "S\xE3o Paulo",
    domain: "Op\xE9rations",
    severity: "critical",
    lon: -46.63,
    lat: -23.55,
    start: 6,
    dur: 5,
    ago: "il y a 20 min",
    owner: "\xC9quipe Am\xE9rique latine",
    desc: "Arr\xEAt de travail annonc\xE9. Itin\xE9raires alternatifs et prestataires de secours \xE0 activer.",
    eta: "6 h",
    assets: 7,
    steps: 4
  }
];
var LINKS = [
  ["lagos", "kinshasa"],
  ["lagos", "paris"],
  ["paris", "newyork"],
  ["paris", "dubai"],
  ["dubai", "singapore"],
  ["singapore", "tokyo"],
  ["newyork", "saopaulo"],
  ["lagos", "saopaulo"],
  ["dubai", "kinshasa"]
];
var SEV = {
  critical: {
    label: "Critique",
    badge: "bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/40",
    bar: "bg-red-500/70",
    color: "#ef4444"
  },
  high: {
    label: "\xC9lev\xE9",
    badge: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/40",
    bar: "bg-amber-500/70",
    color: "#f59e0b"
  },
  normal: {
    label: "Normal",
    badge: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/40",
    bar: "bg-primary/60",
    color: "#10b981"
  }
};
var needsFor = (i) => [
  {
    label: "Camions frigorifiques",
    qty: Math.max(1, Math.round(i.assets / 4)),
    hub: "Hub r\xE9gional"
  },
  {
    label: "\xC9quipes de manutention",
    qty: Math.max(1, Math.round(i.assets / 2)),
    hub: "D\xE9p\xF4t voisin"
  },
  {
    label: "G\xE9n\xE9rateurs",
    qty: Math.max(1, Math.round(i.assets / 8)),
    hub: "Entrep\xF4t central"
  }
];
var PANEL = "bg-white/90 dark:bg-darkbg/90 backdrop-blur-md border border-gray-200 dark:border-primary/30 rounded-xl shadow-lg";
var BOX = "rounded-lg border border-gray-200 dark:border-primary/20 bg-gray-50 dark:bg-white/5";
var SOFT = "text-gray-500 dark:text-gray-400";
var LABEL = "text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400";
var BTN_PRIMARY = "bg-primary text-white hover:bg-primary/90 rounded-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:opacity-50";
var BTN_GHOST = "bg-white/80 dark:bg-white/10 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-primary/30 hover:bg-gray-100 dark:hover:bg-white/20 rounded-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50";
var BTN_DANGER = "bg-transparent text-red-600 dark:text-red-400 border border-red-500/50 hover:bg-red-500/10 rounded-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/40";
function useIsDark() {
  const get = () => typeof document !== "undefined" && document.documentElement.classList.contains("dark");
  const [dark, setDark] = (0, import_react.useState)(get);
  (0, import_react.useEffect)(() => {
    const obs = new MutationObserver(() => setDark(get()));
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
    return () => obs.disconnect();
  }, []);
  return dark;
}
var D = Math.PI / 180;
var clamp = (n, a, b) => Math.min(b, Math.max(a, n));
var wrap = (lon) => ((lon + 180) % 360 + 360) % 360 - 180;
var toVec = (lon, lat) => {
  const l = lon * D;
  const p = lat * D;
  return [Math.cos(p) * Math.sin(l), Math.sin(p), Math.cos(p) * Math.cos(l)];
};
var makeRot = (lon0, lat0) => {
  const cl = Math.cos(lon0 * D);
  const sl = Math.sin(lon0 * D);
  const cp = Math.cos(lat0 * D);
  const sp = Math.sin(lat0 * D);
  return (v) => {
    const x1 = v[0] * cl - v[2] * sl;
    const z1 = v[0] * sl + v[2] * cl;
    return [x1, v[1] * cp - z1 * sp, v[1] * sp + z1 * cp];
  };
};
var LAND_B64 = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//+f///8YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9/n/////gAAASAAZYAAAeAAAAAAAAAAAAAAAAAGj/8f////8AAAPwAAAAAAAAcAAAAAAAAAAAAAADgAAOAP/////AAADAAAAAAABAMAAAAAAAAAAAAAAA9zhjAAH///+AAAAAAAAHgAAP/8AAvAAAAAAAAAAdAAAAAAD///+AAAAAAAAYAAD//gAAAAAAAAAAAAAf8xq3AAA///YAAAAAAABgDA///7/wCAAAAwAEAAAI/wMb/gAf//sAAAAAAAAgHb/////z/+AABAB//wPI/+sEn4Bv//wAAAA/8AADHf////////+C8wH/////gQ3mF4AP/8AAAAB//xjf/v///////////7A////////+B/gf/gAAAAH/94//9f///////////GH////////0P5Af4AH4AAHx+H///////////////AAf//////9NA+AP4ADAAA/3////////////////+AD///////8COMAHwAAAQD/P////////////////4AB/7/////4APwABwAAAAH/P//////////////wfAAA+AH////4APzAAAAAAAH/D////////////+RhgAAAFAB////8AH/gAAAAAIAOj////////////4AHgAAAQAAP////gX/gAAAAAMBmP////////////wAPgAACAAAX////+f/4AAAAAyAwf////////////AAPAAAAAAAD////+f/+AAAAA3D//////////////8AOAAAAAAAB/////f/8AAAABHn//////////////9AIAAAAAAAB//////8QAAAAAMf//////////////9AQAAAAAAAAf/////2HAAAAAB///////////////4AAAAAAAAAAf/////+AgAAAAB///////////////4AAAAAAAAAAf//////AAAAAAB///yfx/////////wAAAAAAAAAAf/////yAAAAAAB/z/gPj/////////jAAAAAAAAAAf/////gAAAAAA/wY/gDx////////8HAAAAAAAAAAf////+AAAAAAA/gGfnn4////////wAAAAAAAAAAAf////+AAAAAAA/AAZ//4///////1gGAAAAAAAAAAP////8AAAAAAA/ACM//4///////hwEAAAAAAAAAAH////4AAAAAAAILgA3/9///////4wcAAAAAAAAAAH////4AAAAAAAN/gDC/////////wz8AAAAAAAAAAB////gAAAAAAAf/gAA/////////wLgAAAAAAAAAAA////AAAAAAAA//8YB/////////4EAAAAAAAAAAAAX///AAAAAAAB///f//////////4AAAAAAAAAAAAAf/5hAAAAAAAB//////z///////4AAAAAAAAAAAAAb/gBAAAAAAAH////8/5///////wAAAAAAAAAAAAAF/gBgAAAAAAP////+/4P//////wAAAAAAAAAAAAAE/gAAAAAAAAP////+f8wH/////gAAAAAAAAAAAAAAfgAAAAAAAAf/////P/4D/////IAAAAAAAAAAAAAAPgAQAAAAAAf/////v/8D//f/4AAAAAAAAAAAAAAAPgwOAAAAAAf/////n/4Af8P+AAAAAAAAAAAAAAAAHxwAwAAAAAf/////n/wAfwH8wAAAAAAAAAAAAAAAB/gAAAAAAAf/////z/gAfgH+AMAAAAAAAAAAAAAAAT8AAAAAAAf/////z+AAfAB/AIAAAAAAAAAAAAAAAB+AAAAAAAf/////94AAOAB/gIAAAAAAAAAAAAAAAAMAAAAAAAf//////AAAOAA/gAAAAAAAAAAAAAAAAAEBQAAAAAf/////+MAAGAAHgHAAAAAAAAAAAAAAAACDfgAAAAH//////8AAHAACAAAAAAAAAAAAAAAAAABP/wAAAAH//////4AAFAAgADAAAAAAAAAAAAAAAAAP/4AAAAD//////4AABgAQABAAAAAAAAAAAAAAAAAP//gAAAA+D////wAAAAGYBwAAAAAAAAAAAAAAAAAH//wAAAAAA////wAAAADYDAAAAAAAAAAAAAAAAAAP//wAAAAAAf///AAAAABoPgQAAAAAAAAAAAAAAAAf//wAAAAAA///+AAAAAAwfuQAAAAAAAAAAAAAAAA///+AAAAAA///8AAAAAAYfASgAAAAAAAAAAAAAAA////AAAAAA///4AAAAAA8fYCYAAAAAAAAAAAAAAA////8AAAAAf//4AAAAAAODEh/AAAAAAAAAAAAAAA/////AAAAAP//4AAAAAAGAAAPgAAAAAAAAAAAAAAf////gAAAAP//wAAAAAADAABHwAAAAAAAAAAAAAAf////gAAAAH//wAAAAAAAOCAPYAAAAAAAAAAAAAAP////AAAAAH//wAAAAAAAACAAMAAAAAAAAAAAAAAP///+AAAAAH//4AAAAAAAAAEAAAAAAAAAAAAAAAAH///+AAAAAH//4AAAAAAAAAHhAAAAAAAAAAAAAAAH///8AAAAAP//4IAAAAAAAAvjAAAAAAAAAAAAAAAD///8AAAAAP//4cAAAAAAAB/jgAAAAAAAAAAAAAAA///8AAAAAP//h4AAAAAAAH/7gAAAAAAAAAAAAAAAf//8AAAAAP//B4AAAAAAAH//wAAAAAAAAAAAAAAAf//4AAAAAH/+AwIAAAAAAf//4AAAAAAAAAAAAAAAf//4AAAAAH//BwAAAAAAB///8AIAAAAAAAAAAAAAf//AAAAAAD//BwAAAAAAD///+AAAAAAAAAAAAAAAf/8AAAAAAD/+BgAAAAAAD////AAAAAAAAAAAAAAAf/8AAAAAAD/8AAAAAAAAH////AAAAAAAAAAAAAAAf/8AAAAAAD/8AAAAAAAAD////AAAAAAAAAAAAAAA//4AAAAAAB/4AAAAAAAAB////AAAAAAAAAAAAAAA//wAAAAAAA/wAAAAAAAAB////AAAAAAAAAAAAAAA//gAAAAAAA/gAAAAAAAAB/h//AAAAAAAAAAAAAAA//AAAAAAAA+AAAAAAAAAB8Av+AAAAAAAAAAAAAAA/8AAAAAAAAAAAAAAAAAAAAAP8AAQAAAAAAAAAAAB/8AAAAAAAAAAAAAAAAAAAAAH8AAIAAAAAAAAAAAB/4AAAAAAAAAAAAAAAAAAAAADQAAOAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAB+AAAAAAAAAAAAAAAAAAAAAAA4AAIAAAAAAAAAAAB/AAAAAAAAAAAAAAAAAAAAAAAYAAwAAAAAAAAAAAB8AAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAD8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAALwAAA//eDv8AAAAAAAAAAAAAAAAGAAAAAAAAAAAD//+B///////wAAAAAAAAAAAAAAA/AAAAAAAAAADv//8H////////+AAAAAAAAAAAAAA3gAAAABQ///////8//////////8AAAAAAAAAEAAAHwAAAAP///////////////////+AAAAAAAIUD////gAAAAP///////////////////wAAAAA////////+AAAAP////////////////////AAAAGB///////4AAAAP/////////////////////gAABD///////8wIAPA//////////////////////gAAAAP///////4AQ/gD////////////////////8AAAAB/////////8AAP//////////////////////AAA8H//////////n////////////////////////8A/wP/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";
var LAND_COLS = 240;
var LAND_ROWS = 120;
var LAND_CELL = 1.5;
var LAND_BITS = (() => {
  const bin = atob(LAND_B64);
  const a = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) a[i] = bin.charCodeAt(i);
  return a;
})();
var isLand = (lon, lat) => {
  const c = clamp(Math.floor((lon + 180) / LAND_CELL), 0, LAND_COLS - 1);
  const r = clamp(Math.floor((90 - lat) / LAND_CELL), 0, LAND_ROWS - 1);
  const i = r * LAND_COLS + c;
  return (LAND_BITS[i >> 3] >> 7 - (i & 7) & 1) === 1;
};
var LAND_DOTS = (() => {
  const out = [];
  const step = 2;
  for (let lat = -84; lat <= 84; lat += step) {
    const n = Math.max(1, Math.round(360 * Math.cos(lat * D) / step));
    for (let i = 0; i < n; i++) {
      const lon = -180 + (i + 0.5) * 360 / n;
      if (isLand(lon, lat)) out.push(toVec(lon, lat));
    }
  }
  return out;
})();
var GRATICULE = (() => {
  const lines = [];
  for (let lon = -180; lon < 180; lon += 15) {
    const l = [];
    for (let lat = -90; lat <= 90; lat += 3) l.push(toVec(lon, lat));
    lines.push(l);
  }
  for (let lat = -75; lat <= 75; lat += 15) {
    const l = [];
    for (let lon = -180; lon <= 180; lon += 3) l.push(toVec(lon, lat));
    lines.push(l);
  }
  return lines;
})();
var ARC_STEPS = 56;
var buildArc = (a, b) => {
  const va = toVec(a.lon, a.lat);
  const vb = toVec(b.lon, b.lat);
  const dot = clamp(va[0] * vb[0] + va[1] * vb[1] + va[2] * vb[2], -1, 1);
  const omega = Math.acos(dot) || 1e-4;
  const so = Math.sin(omega);
  const pts = [];
  for (let i = 0; i <= ARC_STEPS; i++) {
    const t = i / ARC_STEPS;
    const ka = Math.sin((1 - t) * omega) / so;
    const kb = Math.sin(t * omega) / so;
    const lift = 1 + 0.3 * Math.sin(Math.PI * t) * (omega / Math.PI);
    pts.push([
      (ka * va[0] + kb * vb[0]) * lift,
      (ka * va[1] + kb * vb[1]) * lift,
      (ka * va[2] + kb * vb[2]) * lift
    ]);
  }
  return pts;
};
var ARCS = LINKS.map(([from, to]) => {
  const a = INCIDENTS.find((i) => i.id === from);
  const b = INCIDENTS.find((i) => i.id === to);
  return { from, to, pts: buildArc(a, b) };
});
var PAL = {
  dark: {
    sphereA: "#13264a",
    sphereB: "#040812",
    rim: "rgba(56,189,248,0.9)",
    glow: "56,189,248",
    grid: "rgba(56,189,248,0.10)",
    land: "148,190,240",
    arc: "56,189,248",
    pulse: "#e0f2fe",
    text: "#e2e8f0",
    halo: "rgba(4,8,18,0.85)"
  },
  light: {
    sphereA: "#f8fafc",
    sphereB: "#c3d0e4",
    rim: "rgba(37,99,235,0.8)",
    glow: "37,99,235",
    grid: "rgba(37,99,235,0.10)",
    land: "51,65,85",
    arc: "37,99,235",
    pulse: "#1d4ed8",
    text: "#1e293b",
    halo: "rgba(255,255,255,0.9)"
  }
};
var GlobeCanvas = ({
  nodes,
  selectedId,
  onSelect,
  layers,
  auto,
  dark
}) => {
  const wrapRef = (0, import_react.useRef)(null);
  const canvasRef = (0, import_react.useRef)(null);
  const view = (0, import_react.useRef)({ lon: 15, lat: 15, zoom: 1, vLon: 0, vLat: 0 });
  const size = (0, import_react.useRef)({ w: 0, h: 0, dpr: 1, R: 1 });
  const drag = (0, import_react.useRef)({ active: false, x: 0, y: 0, moved: 0 });
  const flyTo = (0, import_react.useRef)(null);
  const hits = (0, import_react.useRef)([]);
  const live = (0, import_react.useRef)({ nodes, selectedId, layers, auto, dark });
  live.current = { nodes, selectedId, layers, auto, dark };
  const [readout, setReadout] = (0, import_react.useState)({ lon: 15, lat: 15, zoom: 1 });
  (0, import_react.useEffect)(() => {
    if (!selectedId) return;
    const n = live.current.nodes.find((x) => x.id === selectedId);
    if (n) {
      flyTo.current = { lon: n.lon, lat: n.lat };
      view.current.vLon = 0;
      view.current.vLat = 0;
    }
  }, [selectedId]);
  (0, import_react.useEffect)(() => {
    const el = wrapRef.current;
    const canvas = canvasRef.current;
    if (!el || !canvas) return;
    const resize = () => {
      const r = el.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      size.current.w = r.width;
      size.current.h = r.height;
      size.current.dpr = dpr;
      canvas.width = Math.round(r.width * dpr);
      canvas.height = Math.round(r.height * dpr);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  (0, import_react.useEffect)(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const onWheel = (e) => {
      e.preventDefault();
      view.current.zoom = clamp(
        view.current.zoom * (e.deltaY < 0 ? 1.08 : 0.92),
        0.6,
        2.4
      );
    };
    canvas.addEventListener("wheel", onWheel, { passive: false });
    return () => canvas.removeEventListener("wheel", onWheel);
  }, []);
  (0, import_react.useEffect)(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let last = performance.now();
    let lastRead = 0;
    const frame = (now) => {
      const dt = Math.min(0.05, (now - last) / 1e3);
      last = now;
      const { nodes: nodes2, selectedId: sel, layers: LY, auto: auto2, dark: dark2 } = live.current;
      const P = dark2 ? PAL.dark : PAL.light;
      const v = view.current;
      const { w, h, dpr } = size.current;
      if (flyTo.current) {
        const dLon = wrap(flyTo.current.lon - v.lon);
        const dLat = flyTo.current.lat - v.lat;
        v.lon += dLon * 0.08;
        v.lat += dLat * 0.08;
        if (Math.abs(dLon) < 0.1 && Math.abs(dLat) < 0.1) flyTo.current = null;
      } else if (!drag.current.active) {
        if (Math.abs(v.vLon) > 0.01 || Math.abs(v.vLat) > 0.01) {
          v.lon += v.vLon;
          v.lat = clamp(v.lat + v.vLat, -85, 85);
          v.vLon *= 0.94;
          v.vLat *= 0.94;
        } else if (auto2 && !sel) {
          v.lon += 5 * dt;
        }
      }
      v.lon = wrap(v.lon);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;
      const R = Math.min(w, h) / 2 * 0.8 * v.zoom;
      size.current.R = R;
      const rot = makeRot(v.lon, v.lat);
      const atm = ctx.createRadialGradient(cx, cy, R * 0.96, cx, cy, R * 1.35);
      atm.addColorStop(0, `rgba(${P.glow},0.35)`);
      atm.addColorStop(1, `rgba(${P.glow},0)`);
      ctx.fillStyle = atm;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.35, 0, Math.PI * 2);
      ctx.fill();
      const sph = ctx.createRadialGradient(
        cx - R * 0.3,
        cy - R * 0.4,
        R * 0.05,
        cx,
        cy,
        R * 1.05
      );
      sph.addColorStop(0, P.sphereA);
      sph.addColorStop(1, P.sphereB);
      ctx.fillStyle = sph;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();
      if (LY.grid) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = P.grid;
        ctx.beginPath();
        for (const line of GRATICULE) {
          let pen = false;
          for (const p of line) {
            const r = rot(p);
            if (r[2] > 0) {
              const sx = cx + r[0] * R;
              const sy = cy - r[1] * R;
              if (pen) ctx.lineTo(sx, sy);
              else ctx.moveTo(sx, sy);
              pen = true;
            } else {
              pen = false;
            }
          }
        }
        ctx.stroke();
      }
      if (LY.land) {
        const buckets = [[], [], []];
        for (const p of LAND_DOTS) {
          const r = rot(p);
          if (r[2] <= 0.02) continue;
          const b = r[2] < 0.35 ? 0 : r[2] < 0.7 ? 1 : 2;
          buckets[b].push(cx + r[0] * R, cy - r[1] * R);
        }
        const alphas = [0.28, 0.55, 0.9];
        const s = Math.max(1.3, R / 230);
        for (let i = 0; i < 3; i++) {
          ctx.fillStyle = `rgba(${P.land},${alphas[i]})`;
          ctx.beginPath();
          const b = buckets[i];
          for (let k = 0; k < b.length; k += 2)
            ctx.rect(b[k] - s / 2, b[k + 1] - s / 2, s, s);
          ctx.fill();
        }
      }
      ctx.save();
      ctx.lineWidth = 2;
      ctx.strokeStyle = P.rim;
      ctx.shadowColor = P.rim;
      ctx.shadowBlur = dark2 ? 18 : 6;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
      ctx.save();
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(${P.glow},0.35)`;
      ctx.setLineDash([2, 7]);
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.07, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
      const ids = new Set(nodes2.map((n) => n.id));
      if (LY.arcs) {
        ARCS.forEach((arc, idx) => {
          if (!ids.has(arc.from) || !ids.has(arc.to)) return;
          const active = !!sel && (arc.from === sel || arc.to === sel);
          const alpha = !sel ? 0.6 : active ? 1 : 0.15;
          ctx.lineWidth = active ? 2.4 : 1.3;
          ctx.strokeStyle = `rgba(${P.arc},${alpha})`;
          if (dark2 && alpha > 0.5) {
            ctx.shadowColor = `rgba(${P.arc},0.9)`;
            ctx.shadowBlur = active ? 12 : 6;
          }
          ctx.beginPath();
          let pen = false;
          const screen = [];
          for (const p of arc.pts) {
            const r = rot(p);
            const visible = r[2] > 0 || r[0] * r[0] + r[1] * r[1] > 1;
            if (visible) {
              const sx = cx + r[0] * R;
              const sy = cy - r[1] * R;
              screen.push([sx, sy]);
              if (pen) ctx.lineTo(sx, sy);
              else ctx.moveTo(sx, sy);
              pen = true;
            } else {
              screen.push(null);
              pen = false;
            }
          }
          ctx.stroke();
          ctx.shadowBlur = 0;
          const tt = (now / 1e3 * 0.2 + idx * 0.137) % 1;
          const pt = screen[Math.floor(tt * ARC_STEPS)];
          if (pt && alpha > 0.3) {
            ctx.fillStyle = P.pulse;
            ctx.beginPath();
            ctx.arc(pt[0], pt[1], active ? 3.4 : 2.4, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      }
      const found = [];
      ctx.font = "600 12px system-ui, -apple-system, Segoe UI, sans-serif";
      ctx.textBaseline = "middle";
      for (const n of nodes2) {
        const r = rot(toVec(n.lon, n.lat));
        if (r[2] <= 0) continue;
        const sx = cx + r[0] * R;
        const sy = cy - r[1] * R;
        found.push({ id: n.id, x: sx, y: sy });
        const color = SEV[n.severity].color;
        const isSel = sel === n.id;
        const ph = (now / 1e3 * 0.55 + n.lon * 0.01) % 1;
        ctx.strokeStyle = color;
        ctx.globalAlpha = (1 - ph) * 0.55;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(
          sx,
          sy,
          (isSel ? 9 : 6) + ph * (isSel ? 20 : 13),
          0,
          Math.PI * 2
        );
        ctx.stroke();
        ctx.globalAlpha = 1;
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.25;
        ctx.beginPath();
        ctx.arc(sx, sy, isSel ? 12 : 9, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        if (dark2) {
          ctx.shadowColor = color;
          ctx.shadowBlur = 10;
        }
        ctx.beginPath();
        ctx.arc(sx, sy, isSel ? 6 : 4.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        if (isSel) {
          ctx.save();
          ctx.strokeStyle = color;
          ctx.lineWidth = 1.2;
          ctx.setLineDash([3, 4]);
          ctx.beginPath();
          ctx.arc(sx, sy, 17, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }
        if (LY.labels && r[2] > 0.35 || isSel) {
          ctx.globalAlpha = isSel ? 1 : clamp((r[2] - 0.35) * 2.2, 0, 0.95);
          ctx.lineWidth = 3;
          ctx.strokeStyle = P.halo;
          ctx.strokeText(n.name, sx + 16, sy);
          ctx.fillStyle = P.text;
          ctx.fillText(n.name, sx + 16, sy);
          ctx.globalAlpha = 1;
        }
      }
      hits.current = found;
      if (now - lastRead > 250) {
        lastRead = now;
        setReadout({ lon: v.lon, lat: v.lat, zoom: v.zoom });
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);
  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { active: true, x: e.clientX, y: e.clientY, moved: 0 };
    flyTo.current = null;
    view.current.vLon = 0;
    view.current.vLat = 0;
    e.currentTarget.style.cursor = "grabbing";
  };
  const onPointerMove = (e) => {
    const canvas = e.currentTarget;
    if (!drag.current.active) {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const over = hits.current.some(
        (n) => Math.hypot(n.x - mx, n.y - my) < 14
      );
      canvas.style.cursor = over ? "pointer" : "grab";
      return;
    }
    const dx = e.clientX - drag.current.x;
    const dy = e.clientY - drag.current.y;
    drag.current.x = e.clientX;
    drag.current.y = e.clientY;
    drag.current.moved += Math.abs(dx) + Math.abs(dy);
    const k = 57.3 / size.current.R * 0.9;
    const v = view.current;
    v.lon = wrap(v.lon - dx * k);
    v.lat = clamp(v.lat + dy * k, -85, 85);
    v.vLon = clamp(-dx * k, -6, 6);
    v.vLat = clamp(dy * k, -6, 6);
  };
  const onPointerUp = (e) => {
    const wasClick = drag.current.moved < 5;
    drag.current.active = false;
    e.currentTarget.style.cursor = "grab";
    if (!wasClick) return;
    view.current.vLon = 0;
    view.current.vLat = 0;
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    let best = null;
    for (const n of hits.current) {
      const d = Math.hypot(n.x - mx, n.y - my);
      if (d < 18 && (!best || d < best.d)) best = { id: n.id, d };
    }
    if (best) onSelect(best.id);
    else if (live.current.selectedId) onSelect(null);
  };
  const zoomBy = (f) => {
    view.current.zoom = clamp(view.current.zoom * f, 0.6, 2.4);
  };
  const resetView = () => {
    view.current = { lon: 15, lat: 15, zoom: 1, vLon: 0, vLat: 0 };
    flyTo.current = null;
    onSelect(null);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { ref: wrapRef, className: "absolute inset-0", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "canvas",
      {
        ref: canvasRef,
        className: "absolute inset-0 w-full h-full block touch-none",
        style: { cursor: "grab" },
        onPointerDown,
        onPointerMove,
        onPointerUp,
        onPointerCancel: onPointerUp
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        className: `absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-2 py-1.5 ${PANEL}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              onClick: () => zoomBy(1 / 1.2),
              "aria-label": "Zoom arri\xE8re",
              className: `${BTN_GHOST} w-8 h-8`,
              children: "\u2212"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "font-mono text-[11px] text-gray-600 dark:text-gray-300 px-1 whitespace-nowrap", children: [
            "LAT ",
            readout.lat.toFixed(1),
            "\xB0 \xB7 LON ",
            readout.lon.toFixed(1),
            "\xB0 \xB7",
            " ",
            readout.zoom.toFixed(1),
            "\xD7"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              onClick: () => zoomBy(1.2),
              "aria-label": "Zoom avant",
              className: `${BTN_GHOST} w-8 h-8`,
              children: "+"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              onClick: resetView,
              "aria-label": "R\xE9initialiser la vue",
              title: "R\xE9initialiser",
              className: `${BTN_GHOST} w-8 h-8`,
              children: "\u27F2"
            }
          )
        ]
      }
    )
  ] });
};
var TABS = ["Tout", "Surveillance", "Op\xE9rations", "Logistique"];
var FEED_TONE = {
  warn: "text-amber-600 dark:text-amber-400",
  ok: "text-emerald-600 dark:text-emerald-400",
  bad: "text-red-600 dark:text-red-400",
  info: "text-gray-700 dark:text-gray-200"
};
var DECISION_STYLE = {
  "En attente": "text-gray-500 dark:text-gray-400",
  Approuv\u00E9: "text-emerald-600 dark:text-emerald-400",
  Rejet\u00E9: "text-red-600 dark:text-red-400"
};
var utc = (d) => d.toISOString().slice(11, 19);
var Switch = ({
  on,
  onChange,
  label
}) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "button",
  {
    role: "switch",
    "aria-checked": on,
    "aria-label": label,
    onClick: () => onChange(!on),
    className: `relative w-10 h-5 rounded-full transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${on ? "bg-primary" : "bg-gray-300 dark:bg-white/20"}`,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "span",
      {
        className: `absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ${on ? "left-[1.35rem]" : "left-0.5"}`
      }
    )
  }
);
var Globe = () => {
  const dark = useIsDark();
  const [tab, setTab] = (0, import_react.useState)("Tout");
  const [leftTab, setLeftTab] = (0, import_react.useState)("situation");
  const [selected, setSelected] = (0, import_react.useState)(null);
  const [auto, setAuto] = (0, import_react.useState)(true);
  const [layers, setLayers] = (0, import_react.useState)({
    arcs: true,
    land: true,
    grid: true,
    labels: true
  });
  const [now, setNow] = (0, import_react.useState)(3.2);
  const [decisions, setDecisions] = (0, import_react.useState)({});
  const [clock, setClock] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
  const [feed, setFeed] = (0, import_react.useState)([
    { t: "18:41:47", msg: "Itin\xE9raire de repli calcul\xE9", tone: "info" },
    { t: "18:39:11", msg: "Revue humaine requise \u2014 S\xE3o Paulo", tone: "warn" },
    { t: "18:38:24", msg: "\xC9valuation automatique termin\xE9e", tone: "info" },
    { t: "18:37:03", msg: "Anomalie capteurs \u2014 Duba\xEF", tone: "warn" },
    { t: "18:36:45", msg: "\xC9quipe d'intervention notifi\xE9e", tone: "info" },
    { t: "18:35:12", msg: "Alerte re\xE7ue \u2014 Lagos", tone: "warn" }
  ]);
  const trackRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    const id = setInterval(() => setClock(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(id);
  }, []);
  const visible = (0, import_react.useMemo)(
    () => INCIDENTS.filter((i) => tab === "Tout" || i.domain === tab),
    [tab]
  );
  (0, import_react.useEffect)(() => {
    if (selected && !visible.some((i) => i.id === selected)) setSelected(null);
  }, [visible, selected]);
  const nodes = (0, import_react.useMemo)(
    () => visible.map((i) => ({
      id: i.id,
      name: i.place,
      lon: i.lon,
      lat: i.lat,
      severity: i.severity
    })),
    [visible]
  );
  const current = INCIDENTS.find((i) => i.id === selected) ?? null;
  const counts = {
    critical: visible.filter((i) => i.severity === "critical").length,
    high: visible.filter((i) => i.severity === "high").length,
    normal: visible.filter((i) => i.severity === "normal").length
  };
  const addFeed = (msg, tone) => setFeed((f) => [{ t: utc(/* @__PURE__ */ new Date()), msg, tone }, ...f].slice(0, 40));
  const decide = (i, d) => {
    setDecisions((s) => ({ ...s, [i.id]: d }));
    addFeed(
      `${d === "Approuv\xE9" ? "Plan approuv\xE9" : "Plan rejet\xE9"} \u2014 ${i.place}`,
      d === "Approuv\xE9" ? "ok" : "bad"
    );
  };
  const activeAt = (i) => now >= i.start && now <= i.start + i.dur;
  const scrub = (e) => {
    const el = trackRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setNow(clamp((e.clientX - r.left) / r.width * 12, 0, 12));
  };
  const renderLeft = (cls) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { className: `${cls} ${PANEL} flex-col overflow-hidden`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex border-b border-gray-200 dark:border-primary/20", children: ["situation", "couches"].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        onClick: () => setLeftTab(k),
        className: `flex-1 px-3 py-2.5 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors ${leftTab === k ? "text-primary border-primary" : "text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-800 dark:hover:text-gray-200"}`,
        children: k === "situation" ? "Situation" : "Couches"
      },
      k
    )) }),
    leftTab === "situation" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex-1 min-h-0 overflow-y-auto p-2.5 space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: LABEL, children: [
        visible.length,
        " \xE9v\xE9nements"
      ] }),
      visible.map((i) => {
        const on = i.id === selected;
        const dec = decisions[i.id] ?? "En attente";
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "button",
          {
            onClick: () => setSelected(on ? null : i.id),
            className: `w-full text-left p-2.5 rounded-lg border transition-colors ${on ? "border-primary bg-primary/10" : "border-gray-200 dark:border-primary/20 hover:bg-gray-100 dark:hover:bg-white/5"}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-start justify-between gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm font-semibold leading-snug", children: i.title }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "span",
                  {
                    className: `shrink-0 px-1.5 py-0.5 text-[10px] font-semibold uppercase rounded border ${SEV[i.severity].badge}`,
                    children: SEV[i.severity].label
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "div",
                {
                  className: `mt-1 flex items-center justify-between text-xs ${SOFT}`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "flex items-center gap-1.5", children: [
                      activeAt(i) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-primary animate-pulse" }),
                      i.place,
                      " \xB7 ",
                      i.domain
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: DECISION_STYLE[dec], children: dec })
                  ]
                }
              )
            ]
          },
          i.id
        );
      })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex-1 min-h-0 overflow-y-auto p-3 space-y-3", children: [
      [
        ["arcs", "Liaisons"],
        ["land", "Continents"],
        ["grid", "Grille"],
        ["labels", "\xC9tiquettes"]
      ].map(([k, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-sm", children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          Switch,
          {
            on: layers[k],
            onChange: (v) => setLayers((l) => ({ ...l, [k]: v })),
            label
          }
        )
      ] }, k)),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-sm", children: "Rotation automatique" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, { on: auto, onChange: setAuto, label: "Rotation automatique" })
      ] })
    ] })
  ] });
  const renderRight = (cls) => {
    const dec = current ? decisions[current.id] ?? "En attente" : "En attente";
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { className: `${cls} ${PANEL} flex-col overflow-hidden`, children: [
      current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "overflow-y-auto max-h-[62%] p-3 space-y-3 border-b border-gray-200 dark:border-primary/20", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "font-bold leading-snug", children: current.title }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: `text-xs mt-0.5 ${SOFT}`, children: [
              "Cr\xE9\xE9 ",
              current.ago,
              " \xB7 ",
              current.owner
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              onClick: () => setSelected(null),
              "aria-label": "Fermer",
              className: "text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 px-1",
              children: "\u2715"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "span",
            {
              className: `px-1.5 py-0.5 text-[10px] font-semibold uppercase rounded border ${SEV[current.severity].badge}`,
              children: SEV[current.severity].label
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `text-xs font-medium ${DECISION_STYLE[dec]}`, children: dec })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: current.desc }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid grid-cols-3 gap-2 text-center", children: [
          ["D\xE9lai", current.eta],
          ["Actifs", `${current.assets}\xD7`],
          ["\xC9tapes", `${current.steps}\xD7`]
        ].map(([k, val]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: `${BOX} py-2`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-lg font-bold leading-tight", children: val }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: LABEL, children: k })
        ] }, k)) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: `${BOX} p-2.5 space-y-1.5`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: LABEL, children: "Besoins" }),
          needsFor(current).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "text-sm flex items-start gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-emerald-500", children: "\u2713" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
              n.qty,
              "\xD7 ",
              n.label,
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: SOFT, children: [
                "\u2014 ",
                n.hub
              ] })
            ] })
          ] }, n.label))
        ] }),
        current.severity !== "normal" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-xs px-3 py-2 rounded-lg border border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300", children: "\u26A0 Ressources limit\xE9es dans la zone \u2014 validation requise." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              onClick: () => decide(current, "Approuv\xE9"),
              className: `${BTN_PRIMARY} py-2 text-sm`,
              children: "Approuver"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              onClick: () => decide(current, "Rejet\xE9"),
              className: `${BTN_DANGER} py-2 text-sm`,
              children: "Rejeter"
            }
          )
        ] })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "p-3 space-y-3 border-b border-gray-200 dark:border-primary/20", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: LABEL, children: "Vue d'ensemble" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid grid-cols-3 gap-2 text-center", children: ["critical", "high", "normal"].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: `${BOX} py-2`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "p",
            {
              className: "text-xl font-bold leading-tight",
              style: { color: SEV[s].color },
              children: counts[s]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: LABEL, children: SEV[s].label })
        ] }, s)) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: `text-xs ${SOFT}`, children: "S\xE9lectionnez un point sur le globe ou un \xE9v\xE9nement pour voir le d\xE9tail." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex-1 min-h-0 flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: `${LABEL} px-3 pt-2.5 pb-1`, children: "Journal d'activit\xE9" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { className: "flex-1 min-h-0 overflow-y-auto px-3 pb-3 space-y-1.5", children: feed.map((f, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { className: "flex gap-2 text-xs", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `font-mono shrink-0 ${SOFT}`, children: f.t }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: FEED_TONE[f.tone], children: f.msg })
        ] }, `${f.t}-${idx}`)) })
      ] })
    ] });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-full text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rounded-2xl overflow-hidden border border-gray-200 dark:border-primary/30 bg-white dark:bg-darkbg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-wrap items-center justify-between gap-3 px-4 py-2 border-b border-gray-200 dark:border-primary/30", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2.5 h-2.5 rounded-full bg-primary" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-bold tracking-tight", children: "Centre de supervision" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { className: "flex items-center gap-1 overflow-x-auto", children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          onClick: () => setTab(t),
          className: `px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors ${tab === t ? "text-primary border-primary" : "text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-800 dark:hover:text-gray-200"}`,
          children: t
        },
        t
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-3 text-xs", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" }),
          "Op\xE9rationnel"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "font-mono", children: [
          utc(clock),
          " UTC"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative h-[56vh] lg:h-[68vh] min-h-[440px] bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#050a16] dark:to-darkbg", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        GlobeCanvas,
        {
          nodes,
          selectedId: selected,
          onSelect: setSelected,
          layers,
          auto,
          dark
        }
      ),
      renderLeft(
        "hidden lg:flex absolute left-3 top-3 bottom-3 w-[290px]"
      ),
      renderRight(
        "hidden lg:flex absolute right-3 top-3 bottom-3 w-[310px]"
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "lg:hidden p-3 space-y-3", children: [
      renderLeft("flex max-h-[60vh]"),
      renderRight("flex max-h-[70vh]")
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "border-t border-gray-200 dark:border-primary/30 p-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: LABEL, children: "Chronologie (heures)" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "font-mono text-[11px] px-2 py-0.5 rounded bg-primary text-white", children: [
          "MAINTENANT \xB7 +",
          now.toFixed(1),
          " h"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex max-h-44 overflow-y-auto", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "w-40 shrink-0 pr-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-5" }),
          visible.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              onClick: () => setSelected(i.id === selected ? null : i.id),
              className: `block w-full h-5 mb-1 text-left text-xs truncate ${i.id === selected ? "text-primary font-semibold" : SOFT}`,
              title: i.title,
              children: i.place
            },
            i.id
          ))
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            ref: trackRef,
            className: "relative flex-1 min-w-0 cursor-col-resize select-none touch-none",
            onPointerDown: (e) => {
              e.currentTarget.setPointerCapture(e.pointerId);
              scrub(e);
            },
            onPointerMove: (e) => {
              if (e.buttons === 1) scrub(e);
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative h-5", children: Array.from({ length: 13 }, (_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "span",
                {
                  className: `absolute top-0 -translate-x-1/2 text-[10px] ${SOFT}`,
                  style: { left: `${k / 12 * 100}%` },
                  children: k
                },
                k
              )) }),
              visible.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "div",
                {
                  className: "relative h-5 mb-1 rounded bg-gray-100 dark:bg-white/5",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "div",
                    {
                      onPointerDown: (e) => e.stopPropagation(),
                      onClick: () => setSelected(i.id === selected ? null : i.id),
                      className: `absolute top-0 h-full rounded cursor-pointer transition-opacity ${SEV[i.severity].bar} ${activeAt(i) ? "opacity-100" : "opacity-50"} ${i.id === selected ? "ring-2 ring-primary" : ""}`,
                      style: {
                        left: `${i.start / 12 * 100}%`,
                        width: `${i.dur / 12 * 100}%`
                      },
                      title: i.title
                    }
                  )
                },
                i.id
              )),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "div",
                {
                  className: "absolute top-0 bottom-0 w-px bg-primary pointer-events-none",
                  style: { left: `${now / 12 * 100}%` }
                }
              )
            ]
          }
        )
      ] })
    ] })
  ] }) });
};
var Editor = Globe;

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/createLucideIcon.mjs
var import_react4 = __toESM(require_react2(), 1);

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs
var toKebabCase = (string) => string?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs
function toLucideIconData(iconName, iconNode, aliases = []) {
  if (iconNode == null) {
    throw new Error("[lucide]: iconNode is required when icon name is used");
  }
  return {
    name: toKebabCase(iconName),
    size: 24,
    node: iconNode,
    ...aliases.length > 0 ? { aliases } : {}
  };
}

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs
var toCamelCase = (string) => {
  let out = "";
  let upperNext = false;
  for (const ch of string) {
    if (ch === "-" || ch === "_" || ch <= " ") {
      upperNext = out.length > 0;
      continue;
    }
    if (out.length === 0) {
      out += ch.toLowerCase();
    } else {
      out += upperNext ? ch.toUpperCase() : ch;
    }
    upperNext = false;
  }
  return out;
};

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs
var toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/Icon.mjs
var import_react3 = __toESM(require_react2(), 1);

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs
function isDefined(value) {
  return value !== null && value !== void 0;
}
function buildLucideIconNode(icon, params = {}) {
  const attributeNames = params.attributeNames ?? {};
  const getAttributeName = (attributeName) => attributeNames[attributeName] ?? attributeName;
  const viewBoxWidth = icon.size ?? icon.width ?? defaultAttributes["width"];
  const viewBoxHeight = icon.size ?? icon.height ?? defaultAttributes["height"];
  const aliasClassNames = icon.aliases?.filter((alias) => typeof alias === "string" && alias.trim() !== "").map((alias) => `lucide-${alias}`) ?? [];
  const iconClassNames = [...icon.name ? [`lucide-${icon.name}`] : [], ...aliasClassNames];
  const classNamesFromClassName = params.className?.split(" ").filter(Boolean) ?? [];
  const className = params.includeDefaultClasses === false ? mergeClasses(...classNamesFromClassName) : mergeClasses("lucide", ...iconClassNames, ...classNamesFromClassName);
  const calculatedStrokeWidth = params.absoluteStrokeWidth ? Number(params.strokeWidth ?? defaultAttributes["stroke-width"]) * Number(icon.size ?? icon.width ?? defaultAttributes["width"]) / Number(params.size ?? params.width ?? defaultAttributes["width"]) : params.strokeWidth ?? defaultAttributes["stroke-width"];
  const attributes = {
    ...Object.entries(defaultAttributes).reduce((attrs, [attrName, value]) => {
      attrs[getAttributeName(attrName)] = value;
      return attrs;
    }, {}),
    ..."color" in params && params.color && {
      [getAttributeName("stroke")]: params.color
    },
    ..."size" in params && isDefined(params.size) && {
      [getAttributeName("width")]: params.size,
      [getAttributeName("height")]: params.size
    },
    ..."width" in params && isDefined(params.width) && {
      [getAttributeName("width")]: params.width
    },
    ..."height" in params && isDefined(params.height) && {
      [getAttributeName("height")]: params.height
    },
    [getAttributeName("stroke-width")]: calculatedStrokeWidth,
    ...className && {
      [getAttributeName("class")]: className
    },
    [getAttributeName("viewBox")]: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
    ...params.hasA11yProp === false ? {
      [getAttributeName("aria-hidden")]: "true"
    } : {},
    ..."attributes" in params && params.attributes
  };
  return [
    "svg",
    attributes,
    icon.node.map((child) => {
      const [name, attrs, children] = child;
      const nextAttrs = params.nonScalingStroke ? { [getAttributeName("vector-effect")]: "non-scaling-stroke", ...attrs } : attrs;
      return children ? [name, nextAttrs, children] : [name, nextAttrs];
    })
  ];
}

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs
function buildLucideIconForReact(icon, params = {}) {
  return buildLucideIconNode(icon, {
    ...params,
    attributeNames: {
      ...params.attributeNames,
      class: "className",
      "stroke-width": "strokeWidth",
      "stroke-linecap": "strokeLinecap",
      "stroke-linejoin": "strokeLinejoin",
      "vector-effect": "vectorEffect"
    }
  });
}

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs
var hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/context.mjs
var import_react2 = __toESM(require_react2(), 1);
var LucideContext = (0, import_react2.createContext)({});
var useLucideContext = () => (0, import_react2.useContext)(LucideContext);

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/Icon.mjs
var Icon = (0, import_react3.forwardRef)(
  ({
    color,
    size,
    width,
    height,
    strokeWidth,
    absoluteStrokeWidth,
    nonScalingStroke,
    className = "",
    children,
    iconNode = [],
    icon = {
      node: iconNode,
      aliases: [],
      size: 24
    },
    ...rest
  }, ref) => {
    const {
      size: contextSize = 24,
      strokeWidth: contextStrokeWidth = 2,
      absoluteStrokeWidth: contextAbsoluteStrokeWidth = false,
      nonScalingStroke: contextNonScalingStroke = false,
      color: contextColor = "currentColor",
      className: contextClass = ""
    } = useLucideContext() ?? {};
    const hasAccessibleProp = Boolean(children) || hasA11yProp(rest);
    const [name, svgAttributes, builtIconNode = []] = buildLucideIconForReact(icon, {
      color: color ?? contextColor,
      width: width ?? size ?? contextSize,
      height: height ?? size ?? contextSize,
      strokeWidth: strokeWidth ?? contextStrokeWidth,
      absoluteStrokeWidth: absoluteStrokeWidth ?? contextAbsoluteStrokeWidth,
      nonScalingStroke: nonScalingStroke ?? contextNonScalingStroke,
      className: mergeClasses(contextClass, className),
      hasA11yProp: hasAccessibleProp,
      attributes: rest
    });
    return (0, import_react3.createElement)(
      name,
      {
        ref,
        ...svgAttributes
      },
      [
        ...builtIconNode.map(([tag, attrs]) => (0, import_react3.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/createLucideIcon.mjs
function createLucideIcon(iconDataOrName, iconNode = [], aliases = []) {
  const iconData = typeof iconDataOrName === "string" ? toLucideIconData(iconDataOrName, iconNode, aliases) : iconDataOrName;
  const Component = (0, import_react4.forwardRef)(
    ({ className, ...props }, ref) => (0, import_react4.createElement)(Icon, {
      ref,
      icon: iconData,
      className,
      ...props
    })
  );
  if (iconData.name) {
    Component.displayName = toPascalCase(iconData.name);
  }
  return Component;
}

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/icons/camera.mjs
var __iconData = {
  name: "camera",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
        key: "18u6gg"
      }
    ],
    ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
  ]
};
__iconData.node;
var Camera = createLucideIcon(__iconData);

// src/renderer.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function OsuiWidget() {
  const [n, setN] = (0, import_react5.usePluginState)("com.example.osui", "clicks", 0);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      className: "rounded-xl border border-border bg-surface p-4",
      "data-testid": "osui-widget",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("strong", { children: "Osui" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", { children: [
          "A widget injected into the host's ",
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("code", { children: "dashboard.after" }),
          " slot."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { onClick: () => setN((c) => c + 1), children: [
          "Clicked ",
          n,
          " times"
        ] })
      ]
    }
  );
}
function OsuiPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "rounded-xl border border-border bg-surface p-4", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Editor, {}) });
}
var renderer_default = (0, import_fluxplugin.definePlugin)({
  routes: [
    {
      path: "/osui",
      lazy: async () => ({ default: OsuiPage }),
      meta: {
        title: "Osui",
        breadcrumb: "Osui",
        menu: { label: "Osui" },
        icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Camera, {})
      }
    }
  ],
  components: [
    { slot: "dashboard.after", component: OsuiWidget, priority: 10 }
  ],
  commands: [
    {
      id: "osui.hello",
      title: "Osui: say hello",
      category: "Osui",
      execute: () => console.log("Hello from Osui!")
    }
  ],
  // Application menu: adds a top-level "Osui" menu to the title bar (File/Edit-style). Shortcuts come from the command's keybinding.
  menus: [
    {
      id: "osui.menu",
      location: "application",
      label: "Osui",
      order: 50,
      children: [
        { id: "osui.menu.open", label: "Open Osui", path: "/osui" },
        { id: "osui.menu.hello", label: "Say hello", command: "osui.hello" }
      ]
    }
  ],
  // Title-bar search: your results appear next to commands and pages.
  extensions: [
    {
      point: "dashboard",
      contribution: {
        toolbar: [
          { id: "osui-hello", label: "Osui: hello", command: "osui.hello" }
        ]
      }
    },
    {
      point: "titlebar",
      contribution: {
        searchProviders: [
          {
            id: "osui.search",
            label: "Osui",
            search: (q) => "osui".includes(q.toLowerCase()) ? [
              {
                id: "osui.r1",
                title: "Open Osui",
                subtitle: "page",
                run: () => {
                  location.hash = "#/osui";
                }
              }
            ] : []
          }
        ]
      }
    }
  ],
  // A theme: tokens are CSS variables; the user picks it in the title bar.
  // { point: "theme", contribution: { themes: [{ id: "osui.ocean", label: "Ocean", dark: true, tokens: { "--flux-bg": "#06202b", "--flux-surface": "#0a2c3a", "--flux-fg": "#e6f6ff", "--flux-border": "#14465a", "--flux-accent": "#22d3ee" } }] } },
  onActivate(ctx) {
    ctx.notifications.push({
      title: "Osui is ready",
      body: "Open the title-bar bell to see this notification.",
      level: "success"
    });
  }
});
export {
  renderer_default as default
};
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs:
lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs:
lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs:
lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs:
lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs:
lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs:
lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs:
lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs:
lucide-react/dist/esm/context.mjs:
lucide-react/dist/esm/Icon.mjs:
lucide-react/dist/esm/createLucideIcon.mjs:
lucide-react/dist/esm/icons/camera.mjs:
lucide-react/dist/esm/lucide-react.mjs:
  (**
   * @license lucide-react v1.57.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
