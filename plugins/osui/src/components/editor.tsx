import React, { useEffect, useMemo, useRef, useState } from "react";

/* =====================================================================
 *  Centre de supervision : globe 3D (canvas, sans dépendance) + HUD
 *  Thème : classes Tailwind `dark:` (votre thème existant), couleurs `primary` / `darkbg`.
 *  Les données ci-dessous sont des exemples à remplacer par vos vraies données.
 * ===================================================================== */

/* ---------- Données ---------- */
type Severity = "critical" | "high" | "normal";
type Domain = "Surveillance" | "Opérations" | "Logistique";
type Decision = "En attente" | "Approuvé" | "Rejeté";

type Incident = {
  id: string;
  title: string;
  place: string;
  domain: Domain;
  severity: Severity;
  lon: number;
  lat: number;
  start: number; // heure de début sur la chronologie (0–12)
  dur: number; // durée en heures
  ago: string;
  owner: string;
  desc: string;
  eta: string;
  assets: number;
  steps: number;
};

const INCIDENTS: Incident[] = [
  {
    id: "lagos",
    title: "Inondation — entrepôt de Lagos",
    place: "Lagos",
    domain: "Opérations",
    severity: "critical",
    lon: 3.38,
    lat: 6.52,
    start: 1,
    dur: 6,
    ago: "il y a 2 h",
    owner: "Équipe Afrique de l'Ouest",
    desc: "Accès routier coupé autour de l'entrepôt. Stock exposé, évacuation partielle en cours.",
    eta: "7,5 h",
    assets: 8,
    steps: 4,
  },
  {
    id: "kinshasa",
    title: "Rupture de stock — hub de Kinshasa",
    place: "Kinshasa",
    domain: "Logistique",
    severity: "high",
    lon: 15.27,
    lat: -4.32,
    start: 0.5,
    dur: 5,
    ago: "il y a 4 h",
    owner: "Planification logistique",
    desc: "Trois références critiques sous le seuil de sécurité. Réapprovisionnement à reprogrammer.",
    eta: "5 h",
    assets: 6,
    steps: 3,
  },
  {
    id: "singapore",
    title: "Retard de fret maritime — Singapour",
    place: "Singapour",
    domain: "Logistique",
    severity: "high",
    lon: 103.82,
    lat: 1.35,
    start: 2,
    dur: 6,
    ago: "il y a 1 h",
    owner: "Fret international",
    desc: "Congestion au port : 36 h de retard estimées sur deux conteneurs prioritaires.",
    eta: "12 h",
    assets: 4,
    steps: 3,
  },
  {
    id: "newyork",
    title: "Pic de demande — New York",
    place: "New York",
    domain: "Surveillance",
    severity: "normal",
    lon: -74.0,
    lat: 40.71,
    start: 3,
    dur: 4,
    ago: "il y a 35 min",
    owner: "Analyse de la demande",
    desc: "Hausse de 24 % des commandes en 2 h. Capacité actuelle suffisante, surveillance renforcée.",
    eta: "2 h",
    assets: 3,
    steps: 2,
  },
  {
    id: "paris",
    title: "Maintenance programmée — Paris",
    place: "Paris",
    domain: "Opérations",
    severity: "normal",
    lon: 2.35,
    lat: 48.85,
    start: 4,
    dur: 3,
    ago: "il y a 6 h",
    owner: "Maintenance Europe",
    desc: "Fenêtre de maintenance du centre de tri. Flux redirigés vers le site secondaire.",
    eta: "3 h",
    assets: 2,
    steps: 2,
  },
  {
    id: "dubai",
    title: "Anomalie capteurs — Dubaï",
    place: "Dubaï",
    domain: "Surveillance",
    severity: "high",
    lon: 55.27,
    lat: 25.2,
    start: 2.5,
    dur: 4,
    ago: "il y a 50 min",
    owner: "Supervision technique",
    desc: "Températures incohérentes sur 3 capteurs de la chaîne du froid. Vérification requise.",
    eta: "4 h",
    assets: 5,
    steps: 3,
  },
  {
    id: "tokyo",
    title: "Retard douanier — Tokyo",
    place: "Tokyo",
    domain: "Logistique",
    severity: "normal",
    lon: 139.69,
    lat: 35.68,
    start: 5,
    dur: 5,
    ago: "il y a 3 h",
    owner: "Conformité import",
    desc: "Documents complémentaires demandés. Libération attendue sous 24 h.",
    eta: "9 h",
    assets: 2,
    steps: 2,
  },
  {
    id: "saopaulo",
    title: "Grève des transports — São Paulo",
    place: "São Paulo",
    domain: "Opérations",
    severity: "critical",
    lon: -46.63,
    lat: -23.55,
    start: 6,
    dur: 5,
    ago: "il y a 20 min",
    owner: "Équipe Amérique latine",
    desc: "Arrêt de travail annoncé. Itinéraires alternatifs et prestataires de secours à activer.",
    eta: "6 h",
    assets: 7,
    steps: 4,
  },
];

const LINKS: [string, string][] = [
  ["lagos", "kinshasa"],
  ["lagos", "paris"],
  ["paris", "newyork"],
  ["paris", "dubai"],
  ["dubai", "singapore"],
  ["singapore", "tokyo"],
  ["newyork", "saopaulo"],
  ["lagos", "saopaulo"],
  ["dubai", "kinshasa"],
];

const SEV: Record<
  Severity,
  { label: string; badge: string; bar: string; color: string }
> = {
  critical: {
    label: "Critique",
    badge: "bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/40",
    bar: "bg-red-500/70",
    color: "#ef4444",
  },
  high: {
    label: "Élevé",
    badge:
      "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/40",
    bar: "bg-amber-500/70",
    color: "#f59e0b",
  },
  normal: {
    label: "Normal",
    badge:
      "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/40",
    bar: "bg-primary/60",
    color: "#10b981",
  },
};

const needsFor = (i: Incident) => [
  {
    label: "Camions frigorifiques",
    qty: Math.max(1, Math.round(i.assets / 4)),
    hub: "Hub régional",
  },
  {
    label: "Équipes de manutention",
    qty: Math.max(1, Math.round(i.assets / 2)),
    hub: "Dépôt voisin",
  },
  {
    label: "Générateurs",
    qty: Math.max(1, Math.round(i.assets / 8)),
    hub: "Entrepôt central",
  },
];

/* ---------- Classes Tailwind ---------- */
const PANEL =
  "bg-white/90 dark:bg-darkbg/90 backdrop-blur-md border border-gray-200 dark:border-primary/30 rounded-xl shadow-lg";
const BOX =
  "rounded-lg border border-gray-200 dark:border-primary/20 bg-gray-50 dark:bg-white/5";
const SOFT = "text-gray-500 dark:text-gray-400";
const LABEL =
  "text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400";
const BTN_PRIMARY =
  "bg-primary text-white hover:bg-primary/90 rounded-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:opacity-50";
const BTN_GHOST =
  "bg-white/80 dark:bg-white/10 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-primary/30 hover:bg-gray-100 dark:hover:bg-white/20 rounded-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50";
const BTN_DANGER =
  "bg-transparent text-red-600 dark:text-red-400 border border-red-500/50 hover:bg-red-500/10 rounded-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/40";

/* ---------- Détection du thème (classe `dark` sur <html>) ---------- */
function useIsDark() {
  const get = () =>
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");
  const [dark, setDark] = useState<boolean>(get);
  useEffect(() => {
    const obs = new MutationObserver(() => setDark(get()));
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => obs.disconnect();
  }, []);
  return dark;
}

/* =====================================================================
 *  Maths 3D + données géographiques
 * ===================================================================== */
type V3 = [number, number, number];
const D = Math.PI / 180;
const clamp = (n: number, a: number, b: number) => Math.min(b, Math.max(a, n));
const wrap = (lon: number) => ((((lon + 180) % 360) + 360) % 360) - 180;

const toVec = (lon: number, lat: number): V3 => {
  const l = lon * D;
  const p = lat * D;
  return [Math.cos(p) * Math.sin(l), Math.sin(p), Math.cos(p) * Math.cos(l)];
};

// Amène (lon0, lat0) face à la caméra
const makeRot = (lon0: number, lat0: number) => {
  const cl = Math.cos(lon0 * D);
  const sl = Math.sin(lon0 * D);
  const cp = Math.cos(lat0 * D);
  const sp = Math.sin(lat0 * D);
  return (v: V3): V3 => {
    const x1 = v[0] * cl - v[2] * sl;
    const z1 = v[0] * sl + v[2] * cl;
    return [x1, v[1] * cp - z1 * sp, v[1] * sp + z1 * cp];
  };
};

// Masque terrestre 1,5° (240 × 120 bits, base64), généré depuis Natural Earth
const LAND_B64 =
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//+f///8YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9/n/////gAAASAAZYAAAeAAAAAAAAAAAAAAAAAGj/8f////8AAAPwAAAAAAAAcAAAAAAAAAAAAAADgAAOAP/////AAADAAAAAAABAMAAAAAAAAAAAAAAA9zhjAAH///+AAAAAAAAHgAAP/8AAvAAAAAAAAAAdAAAAAAD///+AAAAAAAAYAAD//gAAAAAAAAAAAAAf8xq3AAA///YAAAAAAABgDA///7/wCAAAAwAEAAAI/wMb/gAf//sAAAAAAAAgHb/////z/+AABAB//wPI/+sEn4Bv//wAAAA/8AADHf////////+C8wH/////gQ3mF4AP/8AAAAB//xjf/v///////////7A////////+B/gf/gAAAAH/94//9f///////////GH////////0P5Af4AH4AAHx+H///////////////AAf//////9NA+AP4ADAAA/3////////////////+AD///////8COMAHwAAAQD/P////////////////4AB/7/////4APwABwAAAAH/P//////////////wfAAA+AH////4APzAAAAAAAH/D////////////+RhgAAAFAB////8AH/gAAAAAIAOj////////////4AHgAAAQAAP////gX/gAAAAAMBmP////////////wAPgAACAAAX////+f/4AAAAAyAwf////////////AAPAAAAAAAD////+f/+AAAAA3D//////////////8AOAAAAAAAB/////f/8AAAABHn//////////////9AIAAAAAAAB//////8QAAAAAMf//////////////9AQAAAAAAAAf/////2HAAAAAB///////////////4AAAAAAAAAAf/////+AgAAAAB///////////////4AAAAAAAAAAf//////AAAAAAB///yfx/////////wAAAAAAAAAAf/////yAAAAAAB/z/gPj/////////jAAAAAAAAAAf/////gAAAAAA/wY/gDx////////8HAAAAAAAAAAf////+AAAAAAA/gGfnn4////////wAAAAAAAAAAAf////+AAAAAAA/AAZ//4///////1gGAAAAAAAAAAP////8AAAAAAA/ACM//4///////hwEAAAAAAAAAAH////4AAAAAAAILgA3/9///////4wcAAAAAAAAAAH////4AAAAAAAN/gDC/////////wz8AAAAAAAAAAB////gAAAAAAAf/gAA/////////wLgAAAAAAAAAAA////AAAAAAAA//8YB/////////4EAAAAAAAAAAAAX///AAAAAAAB///f//////////4AAAAAAAAAAAAAf/5hAAAAAAAB//////z///////4AAAAAAAAAAAAAb/gBAAAAAAAH////8/5///////wAAAAAAAAAAAAAF/gBgAAAAAAP////+/4P//////wAAAAAAAAAAAAAE/gAAAAAAAAP////+f8wH/////gAAAAAAAAAAAAAAfgAAAAAAAAf/////P/4D/////IAAAAAAAAAAAAAAPgAQAAAAAAf/////v/8D//f/4AAAAAAAAAAAAAAAPgwOAAAAAAf/////n/4Af8P+AAAAAAAAAAAAAAAAHxwAwAAAAAf/////n/wAfwH8wAAAAAAAAAAAAAAAB/gAAAAAAAf/////z/gAfgH+AMAAAAAAAAAAAAAAAT8AAAAAAAf/////z+AAfAB/AIAAAAAAAAAAAAAAAB+AAAAAAAf/////94AAOAB/gIAAAAAAAAAAAAAAAAMAAAAAAAf//////AAAOAA/gAAAAAAAAAAAAAAAAAEBQAAAAAf/////+MAAGAAHgHAAAAAAAAAAAAAAAACDfgAAAAH//////8AAHAACAAAAAAAAAAAAAAAAAABP/wAAAAH//////4AAFAAgADAAAAAAAAAAAAAAAAAP/4AAAAD//////4AABgAQABAAAAAAAAAAAAAAAAAP//gAAAA+D////wAAAAGYBwAAAAAAAAAAAAAAAAAH//wAAAAAA////wAAAADYDAAAAAAAAAAAAAAAAAAP//wAAAAAAf///AAAAABoPgQAAAAAAAAAAAAAAAAf//wAAAAAA///+AAAAAAwfuQAAAAAAAAAAAAAAAA///+AAAAAA///8AAAAAAYfASgAAAAAAAAAAAAAAA////AAAAAA///4AAAAAA8fYCYAAAAAAAAAAAAAAA////8AAAAAf//4AAAAAAODEh/AAAAAAAAAAAAAAA/////AAAAAP//4AAAAAAGAAAPgAAAAAAAAAAAAAAf////gAAAAP//wAAAAAADAABHwAAAAAAAAAAAAAAf////gAAAAH//wAAAAAAAOCAPYAAAAAAAAAAAAAAP////AAAAAH//wAAAAAAAACAAMAAAAAAAAAAAAAAP///+AAAAAH//4AAAAAAAAAEAAAAAAAAAAAAAAAAH///+AAAAAH//4AAAAAAAAAHhAAAAAAAAAAAAAAAH///8AAAAAP//4IAAAAAAAAvjAAAAAAAAAAAAAAAD///8AAAAAP//4cAAAAAAAB/jgAAAAAAAAAAAAAAA///8AAAAAP//h4AAAAAAAH/7gAAAAAAAAAAAAAAAf//8AAAAAP//B4AAAAAAAH//wAAAAAAAAAAAAAAAf//4AAAAAH/+AwIAAAAAAf//4AAAAAAAAAAAAAAAf//4AAAAAH//BwAAAAAAB///8AIAAAAAAAAAAAAAf//AAAAAAD//BwAAAAAAD///+AAAAAAAAAAAAAAAf/8AAAAAAD/+BgAAAAAAD////AAAAAAAAAAAAAAAf/8AAAAAAD/8AAAAAAAAH////AAAAAAAAAAAAAAAf/8AAAAAAD/8AAAAAAAAD////AAAAAAAAAAAAAAA//4AAAAAAB/4AAAAAAAAB////AAAAAAAAAAAAAAA//wAAAAAAA/wAAAAAAAAB////AAAAAAAAAAAAAAA//gAAAAAAA/gAAAAAAAAB/h//AAAAAAAAAAAAAAA//AAAAAAAA+AAAAAAAAAB8Av+AAAAAAAAAAAAAAA/8AAAAAAAAAAAAAAAAAAAAAP8AAQAAAAAAAAAAAB/8AAAAAAAAAAAAAAAAAAAAAH8AAIAAAAAAAAAAAB/4AAAAAAAAAAAAAAAAAAAAADQAAOAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAB+AAAAAAAAAAAAAAAAAAAAAAA4AAIAAAAAAAAAAAB/AAAAAAAAAAAAAAAAAAAAAAAYAAwAAAAAAAAAAAB8AAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAD8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAALwAAA//eDv8AAAAAAAAAAAAAAAAGAAAAAAAAAAAD//+B///////wAAAAAAAAAAAAAAA/AAAAAAAAAADv//8H////////+AAAAAAAAAAAAAA3gAAAABQ///////8//////////8AAAAAAAAAEAAAHwAAAAP///////////////////+AAAAAAAIUD////gAAAAP///////////////////wAAAAA////////+AAAAP////////////////////AAAAGB///////4AAAAP/////////////////////gAABD///////8wIAPA//////////////////////gAAAAP///////4AQ/gD////////////////////8AAAAB/////////8AAP//////////////////////AAA8H//////////n////////////////////////8A/wP/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";
const LAND_COLS = 240;
const LAND_ROWS = 120;
const LAND_CELL = 1.5;
const LAND_BITS = (() => {
  const bin = atob(LAND_B64);
  const a = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) a[i] = bin.charCodeAt(i);
  return a;
})();
const isLand = (lon: number, lat: number) => {
  const c = clamp(Math.floor((lon + 180) / LAND_CELL), 0, LAND_COLS - 1);
  const r = clamp(Math.floor((90 - lat) / LAND_CELL), 0, LAND_ROWS - 1);
  const i = r * LAND_COLS + c;
  return ((LAND_BITS[i >> 3] >> (7 - (i & 7))) & 1) === 1;
};

// Points des continents (réseau à densité à peu près constante)
const LAND_DOTS: V3[] = (() => {
  const out: V3[] = [];
  const step = 2;
  for (let lat = -84; lat <= 84; lat += step) {
    const n = Math.max(1, Math.round((360 * Math.cos(lat * D)) / step));
    for (let i = 0; i < n; i++) {
      const lon = -180 + ((i + 0.5) * 360) / n;
      if (isLand(lon, lat)) out.push(toVec(lon, lat));
    }
  }
  return out;
})();

const GRATICULE: V3[][] = (() => {
  const lines: V3[][] = [];
  for (let lon = -180; lon < 180; lon += 15) {
    const l: V3[] = [];
    for (let lat = -90; lat <= 90; lat += 3) l.push(toVec(lon, lat));
    lines.push(l);
  }
  for (let lat = -75; lat <= 75; lat += 15) {
    const l: V3[] = [];
    for (let lon = -180; lon <= 180; lon += 3) l.push(toVec(lon, lat));
    lines.push(l);
  }
  return lines;
})();

// Arcs (grands cercles surélevés)
const ARC_STEPS = 56;
const buildArc = (a: Incident, b: Incident): V3[] => {
  const va = toVec(a.lon, a.lat);
  const vb = toVec(b.lon, b.lat);
  const dot = clamp(va[0] * vb[0] + va[1] * vb[1] + va[2] * vb[2], -1, 1);
  const omega = Math.acos(dot) || 0.0001;
  const so = Math.sin(omega);
  const pts: V3[] = [];
  for (let i = 0; i <= ARC_STEPS; i++) {
    const t = i / ARC_STEPS;
    const ka = Math.sin((1 - t) * omega) / so;
    const kb = Math.sin(t * omega) / so;
    const lift = 1 + 0.3 * Math.sin(Math.PI * t) * (omega / Math.PI);
    pts.push([
      (ka * va[0] + kb * vb[0]) * lift,
      (ka * va[1] + kb * vb[1]) * lift,
      (ka * va[2] + kb * vb[2]) * lift,
    ]);
  }
  return pts;
};

const ARCS = LINKS.map(([from, to]) => {
  const a = INCIDENTS.find((i) => i.id === from)!;
  const b = INCIDENTS.find((i) => i.id === to)!;
  return { from, to, pts: buildArc(a, b) };
});

const PAL = {
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
    halo: "rgba(4,8,18,0.85)",
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
    halo: "rgba(255,255,255,0.9)",
  },
};

/* =====================================================================
 *  Canvas du globe
 * ===================================================================== */
type CNode = {
  id: string;
  name: string;
  lon: number;
  lat: number;
  severity: Severity;
};
type Layers = { arcs: boolean; land: boolean; grid: boolean; labels: boolean };

type GlobeCanvasProps = {
  nodes: CNode[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  layers: Layers;
  auto: boolean;
  dark: boolean;
};

const GlobeCanvas = ({
  nodes,
  selectedId,
  onSelect,
  layers,
  auto,
  dark,
}: GlobeCanvasProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const view = useRef({ lon: 15, lat: 15, zoom: 1, vLon: 0, vLat: 0 });
  const size = useRef({ w: 0, h: 0, dpr: 1, R: 1 });
  const drag = useRef({ active: false, x: 0, y: 0, moved: 0 });
  const flyTo = useRef<{ lon: number; lat: number } | null>(null);
  const hits = useRef<{ id: string; x: number; y: number }[]>([]);

  // Props lues par la boucle d'animation sans la relancer
  const live = useRef({ nodes, selectedId, layers, auto, dark });
  live.current = { nodes, selectedId, layers, auto, dark };

  const [readout, setReadout] = useState({ lon: 15, lat: 15, zoom: 1 });

  // Centrer la caméra sur l'élément sélectionné
  useEffect(() => {
    if (!selectedId) return;
    const n = live.current.nodes.find((x) => x.id === selectedId);
    if (n) {
      flyTo.current = { lon: n.lon, lat: n.lat };
      view.current.vLon = 0;
      view.current.vLat = 0;
    }
  }, [selectedId]);

  // Taille du canvas
  useEffect(() => {
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

  // Zoom à la molette
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      view.current.zoom = clamp(
        view.current.zoom * (e.deltaY < 0 ? 1.08 : 0.92),
        0.6,
        2.4,
      );
    };
    canvas.addEventListener("wheel", onWheel, { passive: false });
    return () => canvas.removeEventListener("wheel", onWheel);
  }, []);

  // Boucle de rendu
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let last = performance.now();
    let lastRead = 0;

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const { nodes, selectedId: sel, layers: LY, auto, dark } = live.current;
      const P = dark ? PAL.dark : PAL.light;
      const v = view.current;
      const { w, h, dpr } = size.current;

      /* --- Mouvement --- */
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
        } else if (auto && !sel) {
          v.lon += 5 * dt;
        }
      }
      v.lon = wrap(v.lon);

      /* --- Dessin --- */
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const R = (Math.min(w, h) / 2) * 0.8 * v.zoom;
      size.current.R = R;
      const rot = makeRot(v.lon, v.lat);

      // Atmosphère
      const atm = ctx.createRadialGradient(cx, cy, R * 0.96, cx, cy, R * 1.35);
      atm.addColorStop(0, `rgba(${P.glow},0.35)`);
      atm.addColorStop(1, `rgba(${P.glow},0)`);
      ctx.fillStyle = atm;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // Sphère
      const sph = ctx.createRadialGradient(
        cx - R * 0.3,
        cy - R * 0.4,
        R * 0.05,
        cx,
        cy,
        R * 1.05,
      );
      sph.addColorStop(0, P.sphereA);
      sph.addColorStop(1, P.sphereB);
      ctx.fillStyle = sph;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();

      // Grille
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

      // Continents (points)
      if (LY.land) {
        const buckets: number[][] = [[], [], []];
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

      // Anneau lumineux + anneau externe en pointillés
      ctx.save();
      ctx.lineWidth = 2;
      ctx.strokeStyle = P.rim;
      ctx.shadowColor = P.rim;
      ctx.shadowBlur = dark ? 18 : 6;
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

      // Arcs
      const ids = new Set(nodes.map((n) => n.id));
      if (LY.arcs) {
        ARCS.forEach((arc, idx) => {
          if (!ids.has(arc.from) || !ids.has(arc.to)) return;
          const active = !!sel && (arc.from === sel || arc.to === sel);
          const alpha = !sel ? 0.6 : active ? 1 : 0.15;
          ctx.lineWidth = active ? 2.4 : 1.3;
          ctx.strokeStyle = `rgba(${P.arc},${alpha})`;
          if (dark && alpha > 0.5) {
            ctx.shadowColor = `rgba(${P.arc},0.9)`;
            ctx.shadowBlur = active ? 12 : 6;
          }
          ctx.beginPath();
          let pen = false;
          const screen: ([number, number] | null)[] = [];
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

          const tt = ((now / 1000) * 0.2 + idx * 0.137) % 1;
          const pt = screen[Math.floor(tt * ARC_STEPS)];
          if (pt && alpha > 0.3) {
            ctx.fillStyle = P.pulse;
            ctx.beginPath();
            ctx.arc(pt[0], pt[1], active ? 3.4 : 2.4, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      }

      // Points d'intérêt
      const found: { id: string; x: number; y: number }[] = [];
      ctx.font = "600 12px system-ui, -apple-system, Segoe UI, sans-serif";
      ctx.textBaseline = "middle";
      for (const n of nodes) {
        const r = rot(toVec(n.lon, n.lat));
        if (r[2] <= 0) continue;
        const sx = cx + r[0] * R;
        const sy = cy - r[1] * R;
        found.push({ id: n.id, x: sx, y: sy });
        const color = SEV[n.severity].color;
        const isSel = sel === n.id;

        // Onde pulsante
        const ph = ((now / 1000) * 0.55 + n.lon * 0.01) % 1;
        ctx.strokeStyle = color;
        ctx.globalAlpha = (1 - ph) * 0.55;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(
          sx,
          sy,
          (isSel ? 9 : 6) + ph * (isSel ? 20 : 13),
          0,
          Math.PI * 2,
        );
        ctx.stroke();
        ctx.globalAlpha = 1;

        // Halo + coeur
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.25;
        ctx.beginPath();
        ctx.arc(sx, sy, isSel ? 12 : 9, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        if (dark) {
          ctx.shadowColor = color;
          ctx.shadowBlur = 10;
        }
        ctx.beginPath();
        ctx.arc(sx, sy, isSel ? 6 : 4.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Réticule de sélection
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

        // Etiquette
        if ((LY.labels && r[2] > 0.35) || isSel) {
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

  /* ---------- Interactions ---------- */
  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { active: true, x: e.clientX, y: e.clientY, moved: 0 };
    flyTo.current = null;
    view.current.vLon = 0;
    view.current.vLat = 0;
    e.currentTarget.style.cursor = "grabbing";
  };

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = e.currentTarget;
    if (!drag.current.active) {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const over = hits.current.some(
        (n) => Math.hypot(n.x - mx, n.y - my) < 14,
      );
      canvas.style.cursor = over ? "pointer" : "grab";
      return;
    }
    const dx = e.clientX - drag.current.x;
    const dy = e.clientY - drag.current.y;
    drag.current.x = e.clientX;
    drag.current.y = e.clientY;
    drag.current.moved += Math.abs(dx) + Math.abs(dy);

    const k = (57.3 / size.current.R) * 0.9;
    const v = view.current;
    v.lon = wrap(v.lon - dx * k);
    v.lat = clamp(v.lat + dy * k, -85, 85);
    v.vLon = clamp(-dx * k, -6, 6);
    v.vLat = clamp(dy * k, -6, 6);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const wasClick = drag.current.moved < 5;
    drag.current.active = false;
    e.currentTarget.style.cursor = "grab";
    if (!wasClick) return;

    view.current.vLon = 0;
    view.current.vLat = 0;
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    let best: { id: string; d: number } | null = null;
    for (const n of hits.current) {
      const d = Math.hypot(n.x - mx, n.y - my);
      if (d < 18 && (!best || d < best.d)) best = { id: n.id, d };
    }
    if (best) onSelect(best.id);
    else if (live.current.selectedId) onSelect(null);
  };

  const zoomBy = (f: number) => {
    view.current.zoom = clamp(view.current.zoom * f, 0.6, 2.4);
  };
  const resetView = () => {
    view.current = { lon: 15, lat: 15, zoom: 1, vLon: 0, vLat: 0 };
    flyTo.current = null;
    onSelect(null);
  };

  return (
    <div ref={wrapRef} className="absolute inset-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block touch-none"
        style={{ cursor: "grab" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      />

      {/* Barre de contrôle (centre bas) */}
      <div
        className={`absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-2 py-1.5 ${PANEL}`}
      >
        <button
          onClick={() => zoomBy(1 / 1.2)}
          aria-label="Zoom arrière"
          className={`${BTN_GHOST} w-8 h-8`}
        >
          −
        </button>
        <span className="font-mono text-[11px] text-gray-600 dark:text-gray-300 px-1 whitespace-nowrap">
          LAT {readout.lat.toFixed(1)}° · LON {readout.lon.toFixed(1)}° ·{" "}
          {readout.zoom.toFixed(1)}×
        </span>
        <button
          onClick={() => zoomBy(1.2)}
          aria-label="Zoom avant"
          className={`${BTN_GHOST} w-8 h-8`}
        >
          +
        </button>
        <button
          onClick={resetView}
          aria-label="Réinitialiser la vue"
          title="Réinitialiser"
          className={`${BTN_GHOST} w-8 h-8`}
        >
          ⟲
        </button>
      </div>
    </div>
  );
};

/* =====================================================================
 *  Interface de supervision
 * ===================================================================== */
const TABS = ["Tout", "Surveillance", "Opérations", "Logistique"] as const;
type Tab = (typeof TABS)[number];
type FeedTone = "warn" | "ok" | "bad" | "info";
type FeedItem = { t: string; msg: string; tone: FeedTone };

const FEED_TONE: Record<FeedTone, string> = {
  warn: "text-amber-600 dark:text-amber-400",
  ok: "text-emerald-600 dark:text-emerald-400",
  bad: "text-red-600 dark:text-red-400",
  info: "text-gray-700 dark:text-gray-200",
};

const DECISION_STYLE: Record<Decision, string> = {
  "En attente": "text-gray-500 dark:text-gray-400",
  Approuvé: "text-emerald-600 dark:text-emerald-400",
  Rejeté: "text-red-600 dark:text-red-400",
};

const utc = (d: Date) => d.toISOString().slice(11, 19);

const Switch = ({
  on,
  onChange,
  label,
}: {
  on: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) => (
  <button
    role="switch"
    aria-checked={on}
    aria-label={label}
    onClick={() => onChange(!on)}
    className={`relative w-10 h-5 rounded-full transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
      on ? "bg-primary" : "bg-gray-300 dark:bg-white/20"
    }`}
  >
    <span
      className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ${on ? "left-[1.35rem]" : "left-0.5"}`}
    />
  </button>
);

export const Globe = () => {
  const dark = useIsDark();

  const [tab, setTab] = useState<Tab>("Tout");
  const [leftTab, setLeftTab] = useState<"situation" | "couches">("situation");
  const [selected, setSelected] = useState<string | null>(null);
  const [auto, setAuto] = useState(true);
  const [layers, setLayers] = useState<Layers>({
    arcs: true,
    land: true,
    grid: true,
    labels: true,
  });
  const [now, setNow] = useState(3.2); // curseur de la chronologie (0–12 h)
  const [decisions, setDecisions] = useState<Record<string, Decision>>({});
  const [clock, setClock] = useState(() => new Date());
  const [feed, setFeed] = useState<FeedItem[]>([
    { t: "18:41:47", msg: "Itinéraire de repli calculé", tone: "info" },
    { t: "18:39:11", msg: "Revue humaine requise — São Paulo", tone: "warn" },
    { t: "18:38:24", msg: "Évaluation automatique terminée", tone: "info" },
    { t: "18:37:03", msg: "Anomalie capteurs — Dubaï", tone: "warn" },
    { t: "18:36:45", msg: "Équipe d'intervention notifiée", tone: "info" },
    { t: "18:35:12", msg: "Alerte reçue — Lagos", tone: "warn" },
  ]);

  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => setClock(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const visible = useMemo(
    () => INCIDENTS.filter((i) => tab === "Tout" || i.domain === tab),
    [tab],
  );

  // Désélectionne si l'élément n'est plus visible après un changement d'onglet
  useEffect(() => {
    if (selected && !visible.some((i) => i.id === selected)) setSelected(null);
  }, [visible, selected]);

  const nodes = useMemo<CNode[]>(
    () =>
      visible.map((i) => ({
        id: i.id,
        name: i.place,
        lon: i.lon,
        lat: i.lat,
        severity: i.severity,
      })),
    [visible],
  );

  const current = INCIDENTS.find((i) => i.id === selected) ?? null;
  const counts = {
    critical: visible.filter((i) => i.severity === "critical").length,
    high: visible.filter((i) => i.severity === "high").length,
    normal: visible.filter((i) => i.severity === "normal").length,
  };

  const addFeed = (msg: string, tone: FeedTone) =>
    setFeed((f) => [{ t: utc(new Date()), msg, tone }, ...f].slice(0, 40));

  const decide = (i: Incident, d: Decision) => {
    setDecisions((s) => ({ ...s, [i.id]: d }));
    addFeed(
      `${d === "Approuvé" ? "Plan approuvé" : "Plan rejeté"} — ${i.place}`,
      d === "Approuvé" ? "ok" : "bad",
    );
  };

  const activeAt = (i: Incident) => now >= i.start && now <= i.start + i.dur;

  const scrub = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setNow(clamp(((e.clientX - r.left) / r.width) * 12, 0, 12));
  };

  /* ---------- Panneau gauche ---------- */
  const renderLeft = (cls: string) => (
    <aside className={`${cls} ${PANEL} flex-col overflow-hidden`}>
      <div className="flex border-b border-gray-200 dark:border-primary/20">
        {(["situation", "couches"] as const).map((k) => (
          <button
            key={k}
            onClick={() => setLeftTab(k)}
            className={`flex-1 px-3 py-2.5 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors ${
              leftTab === k
                ? "text-primary border-primary"
                : "text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-800 dark:hover:text-gray-200"
            }`}
          >
            {k === "situation" ? "Situation" : "Couches"}
          </button>
        ))}
      </div>

      {leftTab === "situation" ? (
        <div className="flex-1 min-h-0 overflow-y-auto p-2.5 space-y-2">
          <p className={LABEL}>{visible.length} événements</p>
          {visible.map((i) => {
            const on = i.id === selected;
            const dec = decisions[i.id] ?? "En attente";
            return (
              <button
                key={i.id}
                onClick={() => setSelected(on ? null : i.id)}
                className={`w-full text-left p-2.5 rounded-lg border transition-colors ${
                  on
                    ? "border-primary bg-primary/10"
                    : "border-gray-200 dark:border-primary/20 hover:bg-gray-100 dark:hover:bg-white/5"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold leading-snug">
                    {i.title}
                  </p>
                  <span
                    className={`shrink-0 px-1.5 py-0.5 text-[10px] font-semibold uppercase rounded border ${SEV[i.severity].badge}`}
                  >
                    {SEV[i.severity].label}
                  </span>
                </div>
                <div
                  className={`mt-1 flex items-center justify-between text-xs ${SOFT}`}
                >
                  <span className="flex items-center gap-1.5">
                    {activeAt(i) && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    )}
                    {i.place} · {i.domain}
                  </span>
                  <span className={DECISION_STYLE[dec]}>{dec}</span>
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="flex-1 min-h-0 overflow-y-auto p-3 space-y-3">
          {(
            [
              ["arcs", "Liaisons"],
              ["land", "Continents"],
              ["grid", "Grille"],
              ["labels", "Étiquettes"],
            ] as const
          ).map(([k, label]) => (
            <div key={k} className="flex items-center justify-between">
              <span className="text-sm">{label}</span>
              <Switch
                on={layers[k]}
                onChange={(v) => setLayers((l) => ({ ...l, [k]: v }))}
                label={label}
              />
            </div>
          ))}
          <div className="flex items-center justify-between">
            <span className="text-sm">Rotation automatique</span>
            <Switch on={auto} onChange={setAuto} label="Rotation automatique" />
          </div>
        </div>
      )}
    </aside>
  );

  /* ---------- Panneau droit ---------- */
  const renderRight = (cls: string) => {
    const dec = current
      ? (decisions[current.id] ?? "En attente")
      : "En attente";
    return (
      <aside className={`${cls} ${PANEL} flex-col overflow-hidden`}>
        {current ? (
          <div className="overflow-y-auto max-h-[62%] p-3 space-y-3 border-b border-gray-200 dark:border-primary/20">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-bold leading-snug">{current.title}</p>
                <p className={`text-xs mt-0.5 ${SOFT}`}>
                  Créé {current.ago} · {current.owner}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                aria-label="Fermer"
                className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 px-1"
              >
                ✕
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span
                className={`px-1.5 py-0.5 text-[10px] font-semibold uppercase rounded border ${SEV[current.severity].badge}`}
              >
                {SEV[current.severity].label}
              </span>
              <span className={`text-xs font-medium ${DECISION_STYLE[dec]}`}>
                {dec}
              </span>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300">
              {current.desc}
            </p>

            <div className="grid grid-cols-3 gap-2 text-center">
              {[
                ["Délai", current.eta],
                ["Actifs", `${current.assets}×`],
                ["Étapes", `${current.steps}×`],
              ].map(([k, val]) => (
                <div key={k} className={`${BOX} py-2`}>
                  <p className="text-lg font-bold leading-tight">{val}</p>
                  <p className={LABEL}>{k}</p>
                </div>
              ))}
            </div>

            <div className={`${BOX} p-2.5 space-y-1.5`}>
              <p className={LABEL}>Besoins</p>
              {needsFor(current).map((n) => (
                <p key={n.label} className="text-sm flex items-start gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>
                    {n.qty}× {n.label} <span className={SOFT}>— {n.hub}</span>
                  </span>
                </p>
              ))}
            </div>

            {current.severity !== "normal" && (
              <div className="text-xs px-3 py-2 rounded-lg border border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300">
                ⚠ Ressources limitées dans la zone — validation requise.
              </div>
            )}

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => decide(current, "Approuvé")}
                className={`${BTN_PRIMARY} py-2 text-sm`}
              >
                Approuver
              </button>
              <button
                onClick={() => decide(current, "Rejeté")}
                className={`${BTN_DANGER} py-2 text-sm`}
              >
                Rejeter
              </button>
            </div>
          </div>
        ) : (
          <div className="p-3 space-y-3 border-b border-gray-200 dark:border-primary/20">
            <p className={LABEL}>Vue d'ensemble</p>
            <div className="grid grid-cols-3 gap-2 text-center">
              {(["critical", "high", "normal"] as const).map((s) => (
                <div key={s} className={`${BOX} py-2`}>
                  <p
                    className="text-xl font-bold leading-tight"
                    style={{ color: SEV[s].color }}
                  >
                    {counts[s]}
                  </p>
                  <p className={LABEL}>{SEV[s].label}</p>
                </div>
              ))}
            </div>
            <p className={`text-xs ${SOFT}`}>
              Sélectionnez un point sur le globe ou un événement pour voir le
              détail.
            </p>
          </div>
        )}

        <div className="flex-1 min-h-0 flex flex-col">
          <p className={`${LABEL} px-3 pt-2.5 pb-1`}>Journal d'activité</p>
          <ul className="flex-1 min-h-0 overflow-y-auto px-3 pb-3 space-y-1.5">
            {feed.map((f, idx) => (
              <li key={`${f.t}-${idx}`} className="flex gap-2 text-xs">
                <span className={`font-mono shrink-0 ${SOFT}`}>{f.t}</span>
                <span className={FEED_TONE[f.tone]}>{f.msg}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    );
  };

  return (
    <div className="w-full text-gray-900 dark:text-gray-100">
      <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-primary/30 bg-white dark:bg-darkbg">
        {/* ---------- Barre supérieure ---------- */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2 border-b border-gray-200 dark:border-primary/30">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            <span className="font-bold tracking-tight">
              Centre de supervision
            </span>
          </div>

          <nav className="flex items-center gap-1 overflow-x-auto">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors ${
                  tab === t
                    ? "text-primary border-primary"
                    : "text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-800 dark:hover:text-gray-200"
                }`}
              >
                {t}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Opérationnel
            </span>
            <span className="font-mono">{utc(clock)} UTC</span>
          </div>
        </div>

        {/* ---------- Scène : globe plein cadre + panneaux flottants ---------- */}
        <div className="relative h-[56vh] lg:h-[68vh] min-h-[440px] bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#050a16] dark:to-darkbg">
          <GlobeCanvas
            nodes={nodes}
            selectedId={selected}
            onSelect={setSelected}
            layers={layers}
            auto={auto}
            dark={dark}
          />
          {renderLeft(
            "hidden lg:flex absolute left-3 top-3 bottom-3 w-[290px]",
          )}
          {renderRight(
            "hidden lg:flex absolute right-3 top-3 bottom-3 w-[310px]",
          )}
        </div>

        {/* Panneaux empilés sur petit écran */}
        <div className="lg:hidden p-3 space-y-3">
          {renderLeft("flex max-h-[60vh]")}
          {renderRight("flex max-h-[70vh]")}
        </div>

        {/* ---------- Chronologie ---------- */}
        <div className="border-t border-gray-200 dark:border-primary/30 p-3">
          <div className="flex items-center justify-between mb-2">
            <p className={LABEL}>Chronologie (heures)</p>
            <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-primary text-white">
              MAINTENANT · +{now.toFixed(1)} h
            </span>
          </div>

          <div className="flex max-h-44 overflow-y-auto">
            {/* Libellés */}
            <div className="w-40 shrink-0 pr-2">
              <div className="h-5" />
              {visible.map((i) => (
                <button
                  key={i.id}
                  onClick={() => setSelected(i.id === selected ? null : i.id)}
                  className={`block w-full h-5 mb-1 text-left text-xs truncate ${
                    i.id === selected ? "text-primary font-semibold" : SOFT
                  }`}
                  title={i.title}
                >
                  {i.place}
                </button>
              ))}
            </div>

            {/* Piste */}
            <div
              ref={trackRef}
              className="relative flex-1 min-w-0 cursor-col-resize select-none touch-none"
              onPointerDown={(e) => {
                e.currentTarget.setPointerCapture(e.pointerId);
                scrub(e);
              }}
              onPointerMove={(e) => {
                if (e.buttons === 1) scrub(e);
              }}
            >
              <div className="relative h-5">
                {Array.from({ length: 13 }, (_, k) => (
                  <span
                    key={k}
                    className={`absolute top-0 -translate-x-1/2 text-[10px] ${SOFT}`}
                    style={{ left: `${(k / 12) * 100}%` }}
                  >
                    {k}
                  </span>
                ))}
              </div>

              {visible.map((i) => (
                <div
                  key={i.id}
                  className="relative h-5 mb-1 rounded bg-gray-100 dark:bg-white/5"
                >
                  <div
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={() => setSelected(i.id === selected ? null : i.id)}
                    className={`absolute top-0 h-full rounded cursor-pointer transition-opacity ${SEV[i.severity].bar} ${
                      activeAt(i) ? "opacity-100" : "opacity-50"
                    } ${i.id === selected ? "ring-2 ring-primary" : ""}`}
                    style={{
                      left: `${(i.start / 12) * 100}%`,
                      width: `${(i.dur / 12) * 100}%`,
                    }}
                    title={i.title}
                  />
                </div>
              ))}

              {/* Curseur « maintenant » */}
              <div
                className="absolute top-0 bottom-0 w-px bg-primary pointer-events-none"
                style={{ left: `${(now / 12) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Alias pour garder vos imports existants (editor.tsx)
export const Editor = Globe;
export const MapView = Globe;
export default Globe;
