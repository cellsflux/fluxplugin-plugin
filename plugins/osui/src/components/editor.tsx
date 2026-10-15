import React, { useRef } from "react";
import ImageEditor from "@unlayer/react-image-editor";

export const Editor = () => {
  const editorRef = useRef(null);

  return (
    <ImageEditor
      ref={editorRef}
      // ⚠️ Obligatoire : remplace par une vraie URL d'image accessible
      // (ou une data URL base64). "example.com" renvoie toujours une 404.
      image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200"
      // Hauteur minimale du conteneur de l'éditeur (défaut : 500)
      minHeight="700px"
      options={{
        // Identifiant de projet Unlayer (requis pour l'Assistant IA)
        // À récupérer dans la console Unlayer
        projectId: 1234,

        // Thème de l'interface : "light" ou "dark"
        theme: "light",

        // Langue de l'interface
        // Langues incluses : en, es, fr, de, it, pt, nl, ja, ko, zh
        locale: "fr",

        // Infos utilisateur transmises à l'éditeur
        user: { id: "user_123" },

        // Fonctionnalités activées / désactivées
        features: {
          imageEditor: {
            // Position de la barre d'outils : "left" ou "right"

            // Outils de l'éditeur.
            // Tous sont activés par défaut.
            // Voici comment en désactiver certains :
            tools: {
              // resize: false,
              // draw: false,
              // stickers: false,
              // frame: { enabled: false },
              // Personnaliser une icône :
              // crop: { icon: "fa-crop-simple" },
              // text: { icon: "https://exemple.com/icons/text.svg" },
            },
          },

          // Assistant IA (nécessite un projectId avec l'option activée)
          // ai: { enabled: true, assistant: true },
        },
      }}
      // Appelé quand l'éditeur est monté et prêt
      onLoad={(editor) => {
        console.log("Éditeur monté", editor);
      }}
      // Appelé quand l'utilisateur enregistre l'image éditée
      onSave={({ dataUrl, blob }) => {
        // dataUrl : pour prévisualiser
        // blob    : pour envoyer au serveur
        console.info("Image enregistrée :", dataUrl.length, "octets");
        console.log("Blob :", blob);
      }}
      // Appelé quand l'utilisateur annule l'édition
      onCancel={() => console.info("Édition annulée")}
      // Appelé si l'image ne peut pas être chargée dans le canvas
      // (CORS, URL morte, erreur de décodage)
      onLoadError={() => {
        console.error(
          "Échec du chargement de l'image — vérifie l'URL et le CORS",
        );
      }}
      // Appelé en cas d'échec du wrapper :
      // chargement du script, création de l'éditeur, réinitialisation de l'image
      onError={(error) => {
        console.error("Erreur de l'éditeur :", error);
      }}
    />
  );
};
