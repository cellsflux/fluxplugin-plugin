import React, { useMemo, useState } from "react";
import ReactGlobe from "react-globe";

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

/* ---------- Classes Tailwind (thème géré par votre `dark:` existant) ---------- */
const CARD =
  "bg-white dark:bg-darkbg border border-gray-200 dark:border-gray-700 rounded-2xl";
const BTN_PRIMARY =
  "bg-primary text-white hover:bg-primary/90 rounded-xl font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50";
const BTN_SECONDARY =
  "bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-white/20 rounded-xl font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50";

export const Globe = () => {
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

  const options = useMemo(
    () => ({
      enableCameraAutoRotate: auto && !selected,
      cameraAutoRotateSpeed: 0.6,
      enableGlobeGlow: true,
      globeGlowColor: "#6366f1",
      enableMarkerGlow: true,
      enableMarkerTooltip: false, // on utilise notre propre panneau
      markerType: "dot",
      markerRadiusScaleRange: [0.008, 0.02],
      focusAnimationDuration: 1200,
      enableDefocus: true,
    }),
    [auto, selected],
  );

  return (
    <div className="w-full text-gray-900 dark:text-gray-100">
      <h1 className="text-xl font-bold mb-4">Globe</h1>

      <div className="grid gap-4 lg:grid-cols-[1fr_300px]">
        {/* ---------- Globe ---------- */}
        <div className={`${CARD} p-2`}>
          <div className="relative h-[62vh] min-h-[340px] rounded-xl overflow-hidden bg-black">
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
              <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-300 bg-black/80">
                Chargement du globe…
              </div>
            )}

            <div className="absolute top-3 left-3 flex gap-2">
              <button
                onClick={() => setAuto((a) => !a)}
                aria-pressed={auto}
                className={`${BTN_PRIMARY} px-3 py-1.5 text-xs`}
              >
                {auto ? "Pause rotation" : "Rotation auto"}
              </button>
              <button
                onClick={() => setSelected(null)}
                className={`${BTN_SECONDARY} px-3 py-1.5 text-xs`}
              >
                Désélectionner
              </button>
            </div>
          </div>
        </div>

        {/* ---------- Panneau latéral ---------- */}
        <aside className={`${CARD} p-4 flex flex-col gap-3`}>
          <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700">
            {current ? (
              <div className="space-y-0.5">
                <p className="font-bold text-lg">{current.city}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {current.coordinates[0].toFixed(2)}°,{" "}
                  {current.coordinates[1].toFixed(2)}°
                </p>
              </div>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Faites glisser pour tourner, molette pour zoomer, cliquez sur un
                point pour le sélectionner.
              </p>
            )}
          </div>

          <h2 className="font-semibold">Points ({PLACES.length})</h2>
          <ul className="space-y-1.5 max-h-[40vh] overflow-y-auto pr-1">
            {PLACES.map((p) => {
              const on = p.id === selected;
              return (
                <li key={p.id}>
                  <button
                    onClick={() => setSelected(on ? null : p.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium border transition-colors ${
                      on
                        ? "bg-primary/10 text-primary border-primary"
                        : "bg-transparent text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-white/10"
                    }`}
                  >
                    {p.city}
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </div>
  );
};

// Alias pour garder vos imports existants (editor.tsx)
export const Editor = Globe;
export const MapView = Globe;
export default Globe;
