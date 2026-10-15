import { usePluginState } from "fluxplugin/react";

export default function Widget() {
  const [n, setN] = usePluginState("com.example.dashboard", "clicks", 0);
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900">
      {/* Image */}
      <div className="relative h-48">
        <img
          src="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp"
          alt="Espace de travail moderne"
          className="h-full w-full object-cover"
        />

        <span className="absolute right-3 top-3 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">
          Actif
        </span>
      </div>

      {/* Contenu */}
      <div className="space-y-4 p-5">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Mon espace
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Gérez vos projets et consultez vos statistiques depuis un espace
            simple et moderne.
          </p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
            <p className="text-sm text-gray-500">Utilisateurs</p>
            <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
              248
            </p>
          </div>

          <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
            <p className="text-sm text-gray-500">Progression</p>
            <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
              85%
            </p>
          </div>
        </div>
        <button className="dw-btn" onClick={() => setN((c) => c + 1)}>
          Clicked {n} times
        </button>

        {/* Bouton */}
        <button
          onClick={() => alert("Widget ouvert !")}
          className="w-full rounded-xl bg-red-600 px-4 py-3
            font-semibold text-white transition
            hover:bg-red-700 active:scale-[0.98]"
        >
          Découvrir →
        </button>
      </div>
    </div>
  );
}
