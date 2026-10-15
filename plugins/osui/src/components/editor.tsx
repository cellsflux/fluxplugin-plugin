import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ImageEditor } from "@ascentsparksoftware/react-image-editor";

/* ---------- Soft UI : classes Tailwind (light + dark:) ---------- */
// Surface principale
const SURFACE = "bg-[#e0e5ec] dark:bg-[#2b2f3a]";
// Relief (élément en saillie)
const RAISED =
  "shadow-[9px_9px_18px_#a3b1c6,-9px_-9px_18px_#ffffff] dark:shadow-[9px_9px_18px_#1b1e26,-9px_-9px_18px_#3b4050]";
const RAISED_SM =
  "shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#1b1e26,-5px_-5px_10px_#3b4050]";
// Creux (élément enfoncé)
const INSET =
  "shadow-[inset_7px_7px_14px_#a3b1c6,inset_-7px_-7px_14px_#ffffff] dark:shadow-[inset_7px_7px_14px_#1b1e26,inset_-7px_-7px_14px_#3b4050]";
const INSET_SM =
  "shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#1b1e26,inset_-4px_-4px_8px_#3b4050]";
// Texte
const TEXT_MAIN = "text-slate-700 dark:text-slate-100";
const TEXT_SOFT = "text-slate-500 dark:text-slate-400";
// Bouton soft : relief → creux au clic
const BTN = `${SURFACE} ${RAISED_SM} ${TEXT_MAIN} font-semibold rounded-2xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff] dark:active:shadow-[inset_4px_4px_8px_#1b1e26,inset_-4px_-4px_8px_#3b4050] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500`;

const THEME_KEY = "editor-theme";

/* ---------- Hook thème : bascule la classe `dark` sur <html> ---------- */
function useTheme() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
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

// Télécharge le résultat de l'éditeur (Blob ou data URL selon la version de la lib)
const downloadResult = (result: unknown) => {
  let url: string;
  let revoke = false;

  if (result instanceof Blob) {
    url = URL.createObjectURL(result);
    revoke = true;
  } else if (typeof result === "string") {
    url = result;
  } else {
    console.warn("Format de résultat inattendu depuis onSaved :", result);
    return;
  }

  const a = document.createElement("a");
  a.href = url;
  a.download = `edited-${Date.now()}.png`;
  a.click();
  if (revoke) setTimeout(() => URL.revokeObjectURL(url), 1000);
};

export const Editor = () => {
  const { dark, toggle } = useTheme();
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;
    setError("");
    setFileName(file.name);
    setImageSrc(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    onDropRejected: (rejections) => {
      const code = rejections[0]?.errors[0]?.code;
      setError(
        code === "file-too-large"
          ? "Image trop lourde (max 10 Mo)."
          : "Fichier non supporté : choisissez une image.",
      );
    },
    accept: { "image/*": [] },
    maxSize: 10 * 1024 * 1024,
    multiple: false,
    noClick: true, // le clic est géré par le bouton + la zone (voir onClick)
    noKeyboard: true,
  });

  const handleChangeImage = () => {
    if (imageSrc) URL.revokeObjectURL(imageSrc);
    setImageSrc(null);
    setFileName("");
    setError("");
  };

  // Nettoyage mémoire au démontage
  useEffect(() => {
    return () => {
      if (imageSrc) URL.revokeObjectURL(imageSrc);
    };
  }, [imageSrc]);

  return (
    <div
      className={`min-h-screen ${SURFACE} ${TEXT_MAIN} flex flex-col p-4 sm:p-6 transition-colors duration-300`}
    >
      {/* ---------- Barre supérieure ---------- */}
      <header className="w-full max-w-5xl mx-auto flex items-center justify-between mb-6">
        <h1 className="text-lg sm:text-xl font-bold tracking-tight">
          Éditeur d'image
        </h1>

        <button
          onClick={toggle}
          aria-label={dark ? "Passer en mode clair" : "Passer en mode sombre"}
          title={dark ? "Mode clair" : "Mode sombre"}
          className={`${BTN} w-12 h-12 flex items-center justify-center`}
        >
          {dark ? <SunIcon /> : <MoonIcon />}
        </button>
      </header>

      <main className="flex-1 flex items-center justify-center">
        {/* ---------- Zone de dépôt ---------- */}
        {!imageSrc && (
          <div className="w-full max-w-xl">
            <div
              {...getRootProps()}
              onClick={open}
              className={`
                p-8 sm:p-12 rounded-4xl text-center cursor-pointer
                transition-all duration-300 ${SURFACE}
                ${isDragActive ? `${INSET} scale-[0.98]` : `${RAISED} hover:-translate-y-1`}
              `}
            >
              <input {...getInputProps()} />

              <div className="flex flex-col items-center gap-6">
                {/* Icône dans un creux */}
                <div
                  className={`w-24 h-24 rounded-full flex items-center justify-center ${SURFACE} ${INSET}`}
                >
                  <svg
                    className={`w-11 h-11 transition-colors ${
                      isDragActive
                        ? "text-indigo-500"
                        : "text-slate-400 dark:text-slate-500"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16V4m0 0L8 8m4-4l4 4"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                    />
                  </svg>
                </div>

                <div className="space-y-1">
                  <p className="text-xl font-bold">
                    {isDragActive
                      ? "Déposez l'image ici"
                      : "Glissez une image ici"}
                  </p>
                  <p className={`text-sm ${TEXT_SOFT}`}>
                    ou utilisez le bouton ci-dessous
                  </p>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    open();
                  }}
                  className={`${BTN} px-8 py-3 text-indigo-600 dark:text-indigo-400`}
                >
                  Parcourir les fichiers
                </button>

                {/* Info dans un petit creux */}
                <span
                  className={`px-4 py-1.5 rounded-full text-xs font-medium ${SURFACE} ${INSET_SM} ${TEXT_SOFT}`}
                >
                  PNG, JPG, WEBP · Max 10 Mo
                </span>

                {error && (
                  <p
                    role="alert"
                    className="text-sm font-medium text-rose-600 dark:text-rose-400"
                  >
                    {error}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ---------- Éditeur ---------- */}
        {imageSrc && (
          <div className="w-full max-w-5xl">
            <div className="flex items-center justify-between gap-4 mb-5">
              <span
                className={`px-4 py-2 rounded-2xl text-sm font-medium truncate max-w-[60%] ${SURFACE} ${INSET_SM} ${TEXT_SOFT}`}
                title={fileName}
              >
                {fileName}
              </span>
              <button
                onClick={handleChangeImage}
                className={`${BTN} px-5 py-2.5 text-sm`}
              >
                Changer d'image
              </button>
            </div>

            <div className={`p-3 sm:p-4 rounded-4xl ${SURFACE} ${RAISED}`}>
              <div className={`rounded-3xl overflow-hidden ${INSET_SM}`}>
                <ImageEditor
                  key={dark ? "dark" : "light"} // force le re-rendu au changement de thème
                  src={imageSrc}
                  mode="advanced"
                  baseColor={dark ? "#2b2f3a" : "#e0e5ec"}
                  accentColor="#6366f1"
                  themeMode={dark ? "dark" : "light"}
                  onSaved={downloadResult}
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
