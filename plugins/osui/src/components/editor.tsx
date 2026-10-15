import { useRef, useState } from "react";
import { ReactPhotoEditor } from "react-photo-editor";

export function Editor() {
  const [file, setFile] = useState<File | undefined>();
  const [showModal, setShowModal] = useState(false);
  const [preview, setPreview] = useState<string | undefined>();
  const inputRef = useRef<HTMLInputElement>(null);

  const setFileData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }

    e.target.value = "";
  };

  // Sauvegarde l'image éditée et la télécharge sur le disque
  const handleSaveImage = (editedFile: File) => {
    setFile(editedFile);
    setPreview(URL.createObjectURL(editedFile));
    setShowModal(false);

    // Téléchargement automatique sur le disque
    const url = URL.createObjectURL(editedFile);
    const link = document.createElement("a");
    link.href = url;
    link.download = `photo-editee-${Date.now()}.${editedFile.type.split("/")[1] || "png"}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-violet-50 px-4 py-10 text-slate-800 transition-colors duration-500 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 dark:text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-10 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-2xl text-white shadow-lg shadow-violet-300/50 dark:shadow-violet-900/50">
            ✦
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Photo Studio
            </h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Importez, retouchez et sublimez vos photos. ✨
            </p>
          </div>
        </header>

        {/* Main card */}
        <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 shadow-2xl shadow-violet-200/40 backdrop-blur-xl transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/40">
          <div className="grid md:grid-cols-2">
            {/* Upload area */}
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <span className="mb-3 inline-block w-fit rounded-full bg-violet-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-violet-700 dark:bg-violet-500/20 dark:text-violet-300">
                Votre espace créatif
              </span>

              <h2 className="text-2xl font-bold sm:text-3xl">
                Donnez vie à vos images. 🎨
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
                Choisissez une photo depuis votre appareil et utilisez notre
                éditeur pour lui apporter votre touche personnelle.
              </p>

              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="group mt-8 flex min-h-40 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-violet-200 bg-violet-50/60 px-5 py-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400 hover:bg-violet-100/70 hover:shadow-lg hover:shadow-violet-200/50 focus:outline-none focus:ring-4 focus:ring-violet-100 dark:border-violet-500/30 dark:bg-violet-500/10 dark:hover:border-violet-400 dark:hover:bg-violet-500/20 dark:focus:ring-violet-500/20"
              >
                <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 dark:bg-slate-800">
                  ＋
                </span>

                <span className="font-semibold text-slate-800 dark:text-slate-100">
                  Cliquez pour importer une photo
                </span>

                <span className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  PNG, JPG, JPEG ou WEBP
                </span>
              </button>

              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={setFileData}
                className="hidden"
              />

              {file && (
                <div className="mt-5 flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/70 p-3 shadow-sm backdrop-blur transition-colors duration-500 dark:border-slate-700 dark:bg-slate-800/60">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300">
                    ✓
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">
                      {file.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {(file.size / 1024 / 1024).toFixed(2)} Mo
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => inputRef.current?.click()}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-violet-700 transition hover:bg-violet-50 dark:text-violet-300 dark:hover:bg-violet-500/20"
                  >
                    Changer
                  </button>
                </div>
              )}

              <button
                type="button"
                disabled={!file}
                onClick={() => setShowModal(true)}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-violet-300/50 transition-all duration-300 hover:-translate-y-0.5 hover:from-violet-700 hover:to-fuchsia-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-violet-200 disabled:cursor-not-allowed disabled:from-slate-300 disabled:to-slate-300 disabled:shadow-none disabled:hover:translate-y-0 dark:shadow-violet-900/40 dark:focus:ring-violet-500/30 dark:disabled:from-slate-700 dark:disabled:to-slate-700"
              >
                <span>✧</span>
                Modifier la photo
                <span aria-hidden="true">→</span>
              </button>

              <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-500">
                Votre créativité, sans limites. 💫
              </p>
            </div>

            {/* Preview area */}
            <div className="relative flex min-h-80 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 p-6 transition-colors duration-500 dark:from-slate-800 dark:to-slate-900 sm:p-10">
              <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:18px_18px] dark:[background-image:radial-gradient(#475569_1px,transparent_1px)]" />

              {preview ? (
                <div className="relative w-full">
                  <div className="absolute -inset-2 rounded-2xl bg-white/70 shadow-xl dark:bg-slate-800/70" />
                  <img
                    src={preview}
                    alt="Aperçu de la photo sélectionnée"
                    className="relative mx-auto max-h-[420px] w-full rounded-xl object-contain shadow-sm"
                  />

                  <div className="relative mt-4 flex items-center justify-between">
                    <span className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm dark:bg-slate-800 dark:text-slate-300">
                      Aperçu de votre image
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {file?.type.split("/")[1]?.toUpperCase()}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="relative flex max-w-xs flex-col items-center text-center">
                  <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-3xl border border-white bg-white/80 text-5xl shadow-lg shadow-slate-200/70 dark:border-slate-700 dark:bg-slate-800/80 dark:shadow-black/30">
                    🖼️
                  </div>

                  <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200">
                    Votre photo apparaîtra ici
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Importez une image pour commencer votre expérience
                    d'édition.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer information */}
        <div className="mt-6 flex flex-col justify-between gap-3 text-xs text-slate-400 dark:text-slate-500 sm:flex-row sm:items-center">
          <p>Photo Studio · Éditeur d'images</p>
          <p>Interface simple, élégante et responsive.</p>
        </div>
      </div>

      {/* Photo editor modal */}
      {file && (
        <ReactPhotoEditor
          open={showModal}
          onClose={() => setShowModal(false)}
          file={file}
          onSaveImage={handleSaveImage}
        />
      )}
    </div>
  );
}
