import React, { useRef, useState } from "react";
import ImageEditor from "@unlayer/react-image-editor";

export const Editor = () => {
  const editorRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  // Convertir un fichier local en base64 data URL
  const handleFileChange = (eve: any) => {
    const file = eve.target.files?.[0];
    if (!file) return;

    // Vérification du type et de la taille (optionnel)
    if (!file.type.startsWith("image/")) {
      alert("Veuillez sélectionner un fichier image.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      alert("L'image est trop volumineuse (max 10 Mo).");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e: any) => {
      // e.target.result est une data URL (base64)
      setImageSrc(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      {/* Sélecteur de fichier local */}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ marginBottom: 16 }}
      />

      {imageSrc && (
        <ImageEditor
          ref={editorRef}
          image={imageSrc}
          minHeight="700px"
          options={{
            theme: "light",
            locale: "fr",
            projectId: 1234,
          }}
          onSave={({ dataUrl, blob }) => {
            console.info("Image enregistrée :", dataUrl.length, "octets");
          }}
          onCancel={() => {
            setImageSrc(null); // Effacer l'image quand l'utilisateur annule
          }}
          onLoadError={() => {
            console.error("Échec du chargement de l'image");
          }}
          onError={(error) => {
            console.error("Erreur de l'éditeur :", error);
          }}
        />
      )}
    </div>
  );
};
