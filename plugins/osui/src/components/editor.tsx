import React, { useMemo, useState } from "react";
import ReactGlobe from "react-globe";

/* ---------- Soft UI : classes Tailwind (light + dark:) ---------- */
const SURFACE = "bg-[#e0e5ec] dark:bg-[#2b2f3a]";
const RAISED =
  "shadow-[9px_9px_18px_#a3b1c6,-9px_-9px_18px_#ffffff] dark:shadow-[9px_9px_18px_#1b1e26,-9px_-9px_18px_#3b4050]";
const RAISED_SM =
  "shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#1b1e26,-5px_-5px_10px_#3b4050]";
const INSET_SM =
  "shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#1b1e26,inset_-4px_-4px_8px_#3b4050]";
const TEXT_MAIN = "text-slate-700 dark:text-slate-100";
const TEXT_SOFT = "text-slate-500 dark:text-slate-400";
const BTN = `${SURFACE} ${RAISED_SM} ${TEXT_MAIN} font-semibold rounded-2xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff] dark:active:shadow-[inset_4px_4px_8px_#1b1e26,inset_-4px_-4px_8px_#3b4050] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500`;

/* ---------- Thème : bascule la classe `dark` sur <html> ---------- */
const THEME_KEY = "globe-theme";

function useTheme() {
  const [dark, setDark] = React.useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
  }, [dark]);

  return { dark, toggle: () => setDark((d) => !d) };
}

const SunIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <circle cx="12" cy="12" r="4" />
    <path
      strokeLinecap="round"
      d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4l1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
    />
  </svg>
);

const MoonIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"
    />
  </svg>
);

/* ---------- Données (coordonnées : [latitude, longitude]) ---------- */
type Place = {
  id: string;
  city: string;
  coordinates: [number, number];
  value: number; // contrôle la taille du marqueur
};

const PLACES: Place[] = [
  { id: "paris", city: "Paris", coordinates: [48.85, 2.35], value: 90 },
  { id: "london", city: "Londres", coordinates: [51.5, -0.12], value: 85 },
  { id: "newyork", city: "New York", coordinates: [40.71, -74.0], value: 100 },
  {
    id: "saopaulo",
    city: "São Paulo",
    coordinates: [-23.55, -46.63],
    value: 70,
  },
  { id: "lagos", city: "Lagos", coordinates: [6.52, 3.38], value: 60 },
  { id: "kinshasa", city: "Kinshasa", coordinates: [-4.32, 15.27], value: 60 },
  { id: "nairobi", city: "Nairobi", coordinates: [-1.29, 36.82], value: 55 },
  {
    id: "johannesburg",
    city: "Johannesburg",
    coordinates: [-26.2, 28.05],
    value: 65,
  },
  { id: "dubai", city: "Dubaï", coordinates: [25.2, 55.27], value: 80 },
  {
    id: "singapore",
    city: "Singapour",
    coordinates: [1.35, 103.82],
    value: 85,
  },
  { id: "tokyo", city: "Tokyo", coordinates: [35.68, 139.69], value: 95 },
  { id: "sydney", city: "Sydney", coordinates: [-33.87, 151.21], value: 70 },
];

export const Globe = () => {
  const { dark, toggle } = useTheme();
  const [selected, setSelected] = useState<string | null>(null);
  const [auto, setAuto] = useState(true);
  const [ready, setReady] = useState(false);

  const current = PLACES.find((p) => p.id === selected) ?? null;

  // Marqueurs au format react-globe : { id, city, color, coordinates, value }
  const markers = useMemo(
    () =>
      PLACES.map((p) => ({
        ...p,
        color: p.id === selected ? "#f59e0b" : "#818cf8",
      })),
    [selected],
  );

  // Options mémoïsées (évite de recréer l'objet à chaque rendu)
  const options = useMemo(
    () => ({
      enableCameraAutoRotate: auto && !selected,
      cameraAutoRotateSpeed: 0.6,
      enableGlobeGlow: true,
      globeGlowColor: dark ? "#818cf8" : "#6366f1",
      enableMarkerGlow: true,
      enableMarkerTooltip: false, // on utilise notre propre panneau
      markerType: "dot",
      markerRadiusScaleRange: [0.008, 0.02],
      focusAnimationDuration: 1200,
      enableDefocus: true,
    }),
    [auto, selected, dark],
  );

  return (
    <div
      className={`min-h-screen ${SURFACE} ${TEXT_MAIN} flex flex-col p-4 sm:p-6 transition-colors duration-300`}
    >
      {/* ---------- Barre supérieure ---------- */}
      <header className="w-full max-w-6xl mx-auto flex items-center justify-between mb-5">
        <h1 className="text-lg sm:text-xl font-bold tracking-tight">Globe</h1>
        <button
          onClick={toggle}
          aria-label={dark ? "Passer en mode clair" : "Passer en mode sombre"}
          title={dark ? "Mode clair" : "Mode sombre"}
          className={`${BTN} w-12 h-12 flex items-center justify-center`}
        >
          {dark ? <SunIcon /> : <MoonIcon />}
        </button>
      </header>

      <main className="w-full max-w-6xl mx-auto grid gap-5 lg:grid-cols-[1fr_320px]">
        {/* ---------- Globe ---------- */}
        <div className={`p-3 sm:p-4 rounded-[2rem] ${SURFACE} ${RAISED}`}>
          {/* "Écran" sombre : le fond étoilé de react-globe reste lisible dans les deux thèmes */}
          <div
            className={`relative h-[62vh] min-h-[340px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#05070d] to-[#141a2b] ${INSET_SM}`}
          >
            <ReactGlobe
              height="100%"
              width="100%"
              markers={markers}
              options={options as any}
              focus={current ? current.coordinates : undefined}
              onClickMarker={(marker: { id: string }) => setSelected(marker.id)}
              onDefocus={() => setSelected(null)}
              onGlobeTextureLoaded={() => setReady(true)}
            />

            {!ready && (
              <div className="absolute inset-0 flex items-center justify-center text-sm text-slate-300 bg-[#05070d]/80">
                Chargement du globe…
              </div>
            )}

            {/* Contrôles */}
            <div className="absolute top-3 left-3 flex gap-2">
              <button
                onClick={() => setAuto((a) => !a)}
                aria-pressed={auto}
                className={`${BTN} px-4 py-2 text-xs`}
              >
                {auto ? "Pause rotation" : "Rotation auto"}
              </button>
              <button
                onClick={() => setSelected(null)}
                className={`${BTN} px-4 py-2 text-xs`}
              >
                Désélectionner
              </button>
            </div>
          </div>
        </div>

        {/* ---------- Panneau latéral ---------- */}
        <aside
          className={`p-5 rounded-[2rem] ${SURFACE} ${RAISED} flex flex-col gap-4`}
        >
          <div className={`p-4 rounded-2xl ${SURFACE} ${INSET_SM}`}>
            {current ? (
              <div className="space-y-1">
                <p className="font-bold text-lg">{current.city}</p>
                <p className={`text-xs ${TEXT_SOFT}`}>
                  {current.coordinates[0].toFixed(2)}°,{" "}
                  {current.coordinates[1].toFixed(2)}°
                </p>
              </div>
            ) : (
              <p className={`text-sm ${TEXT_SOFT}`}>
                Faites glisser pour tourner, molette pour zoomer, cliquez sur un
                point pour le sélectionner.
              </p>
            )}
          </div>

          <h2 className="font-bold">Points ({PLACES.length})</h2>
          <ul className="space-y-2 max-h-[40vh] overflow-y-auto pr-1">
            {PLACES.map((p) => {
              const on = p.id === selected;
              return (
                <li key={p.id}>
                  <button
                    onClick={() => setSelected(on ? null : p.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-2xl text-sm font-medium transition-all duration-200 ${SURFACE} ${
                      on
                        ? `${INSET_SM} text-indigo-600 dark:text-indigo-400`
                        : `${RAISED_SM} ${TEXT_MAIN} hover:-translate-y-0.5`
                    }`}
                  >
                    {p.city}
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>
      </main>
    </div>
  );
};

// Alias pour garder vos imports existants (editor.tsx)
export const Editor = Globe;
export const MapView = Globe;
export default Globe;
