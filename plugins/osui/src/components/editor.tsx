import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ImageEditor } from "@ascentsparksoftware/react-image-editor";

export const Editor = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");

  // Traitement du fichier sélectionné
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    // Vérification du type (react-dropzone gère déjà l'accept)
    setFileName(file.name);
    // URL.createObjectURL est plus performant que base64 pour les grosses images
    setImageSrc(URL.createObjectURL(file));
  }, []);

  // Configuration de react-dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxSize: 10 * 1024 * 1024, // 10 Mo
    multiple: false,
  });

  // Réinitialiser pour changer d'image
  const handleChangeImage = () => {
    if (imageSrc) URL.revokeObjectURL(imageSrc); // Nettoyage mémoire
    setImageSrc(null);
    setFileName("");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      {/* Zone de sélection si aucune image n'est chargée */}
      {!imageSrc && (
        <div
          {...getRootProps()}
          className={`
            w-full max-w-lg p-12 rounded-2xl border-2 border-dashed text-center cursor-pointer
            transition-all duration-200 ease-in-out
            ${
              isDragActive
                ? "border-indigo-500 bg-indigo-500/10 scale-[1.02]"
                : "border-slate-700 bg-slate-900 hover:border-indigo-500/50 hover:bg-slate-800/50"
            }
          `}
        >
          <input {...getInputProps()} />

          <div className="flex flex-col items-center gap-4">
            {/* Icône d'upload */}
            <svg
              className={`w-14 h-14 transition-colors ${isDragActive ? "text-indigo-400" : "text-slate-600"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
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

            <div className="space-y-2">
              <p className="text-xl font-semibold text-slate-200">
                {isDragActive ? "Déposez l'image ici" : "Glissez une image ici"}
              </p>
              <p className="text-sm text-slate-500">
                ou cliquez pour parcourir
              </p>
            </div>

            <span className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors">
              Parcourir les fichiers
            </span>

            <span className="text-xs text-slate-600">
              PNG, JPG, WEBP · Max 10 Mo
            </span>
          </div>
        </div>
      )}

      {/* Éditeur affiché après sélection */}
      {imageSrc && (
        <div className="w-full max-w-5xl">
          {/* Barre d'outils supérieure */}
          <div className="flex items-center justify-between mb-4 px-2">
            <span className="text-sm text-slate-400 truncate max-w-xs">
              {fileName}
            </span>
            <button
              onClick={handleChangeImage}
              className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white transition-colors"
            >
              Changer d'image
            </button>
          </div>

          {/* L'éditeur lui-même */}
          <div className="rounded-xl overflow-hidden border border-slate-800">
            <ImageEditor
              src={imageSrc}
              mode="advanced"
              baseColor="#1e293b"
              accentColor="#6366f1"
              themeMode="dark"
              onSave={(blob) => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `edited-${Date.now()}.png`;
                a.click();
                URL.revokeObjectURL(url);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
