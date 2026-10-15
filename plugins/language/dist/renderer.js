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

// flux-shared:react/jsx-runtime
var require_jsx_runtime = __commonJS({
  "flux-shared:react/jsx-runtime"(exports, module) {
    var m = globalThis.__FLUXPLUGIN_SHARED__ && globalThis.__FLUXPLUGIN_SHARED__["react/jsx-runtime"];
    if (!m) throw new Error("Shared module react/jsx-runtime is not provided by the host application (see installSharedModules).");
    module.exports = m;
  }
});

// plugins/language/src/renderer.tsx
var import_fluxplugin = __toESM(require_fluxplugin(), 1);
var import_react = __toESM(require_react(), 1);

// plugins/language/src/messages.ts
var messages = {
  fr: {
    "menu.dashboard": "Tableau de bord",
    "menu.plugins": "Extensions",
    "menu.settings": "R\xE9glages",
    "theme.toggle": "Changer d'apparence",
    "theme.system": "Syst\xE8me",
    "theme.light": "Clair",
    "theme.dark": "Sombre",
    "search.placeholder": "Rechercher commandes, pages\u2026",
    "search.label": "Rechercher",
    "search.commands": "Commandes",
    "search.pages": "Pages",
    "search.noResults": "Aucun r\xE9sultat",
    "notifications.title": "Notifications",
    "notifications.clear": "Tout effacer",
    "notifications.empty": "Tout est \xE0 jour",
    "palette.placeholder": "Saisir une commande\u2026",
    "palette.empty": "Aucune commande correspondante",
    "sidebar.expand": "D\xE9velopper la barre lat\xE9rale",
    "sidebar.collapse": "R\xE9duire la barre lat\xE9rale",
    "settings.title": "R\xE9glages",
    "settings.empty": "Aucun r\xE9glage",
    "settings.general": "G\xE9n\xE9ral",
    "settings.shortcuts": "Raccourcis",
    "settings.appearance": "Apparence",
    "settings.language": "Langue",
    "settings.about": "\xC0 propos",
    "settings.app": "Application",
    "settings.plugins": "Extensions",
    "settings.engine": "Moteur",
    "settings.sidebar": "Barre lat\xE9rale",
    "settings.sidebarHint": "R\xE9duit la barre lat\xE9rale en ic\xF4nes. Raccourci : Ctrl/Cmd+B.",
    "settings.compactSidebar": "Barre lat\xE9rale compacte",
    "plugins.title": "Extensions",
    "plugins.installed": "Install\xE9es",
    "plugins.discover": "D\xE9couvrir",
    "plugins.updates": "Mises \xE0 jour",
    "plugins.search": "Rechercher des extensions",
    "plugins.none": "Aucune extension install\xE9e",
    "plugins.searching": "Recherche dans les catalogues\u2026",
    "plugins.upToDate": "Tout est \xE0 jour.",
    "plugins.storeEmpty": "Aucune extension trouv\xE9e dans vos catalogues.",
    "plugins.installedTag": "Install\xE9e",
    "plugins.get": "Obtenir",
    "plugins.update": "Mettre \xE0 jour",
    "plugins.open": "Ouvrir",
    "plugins.back": "Extensions",
    "plugins.notFound": "Cette extension n'est pas install\xE9e.",
    "plugins.enable": "Activer",
    "plugins.enabled": "Activ\xE9e",
    "plugins.disabled": "D\xE9sactiv\xE9e",
    "plugins.reload": "Recharger",
    "plugins.uninstall": "D\xE9sinstaller",
    "plugins.video": "Vid\xE9o",
    "plugins.about": "\xC0 propos",
    "plugins.permissions": "Autorisations",
    "plugins.permissionsFooter": "Une extension n'obtient que ce qu'elle d\xE9clare. Les acc\xE8s sensibles sont signal\xE9s.",
    "plugins.noPermissions": "Aucun acc\xE8s particulier",
    "plugins.sensitive": "Sensible",
    "plugins.information": "Informations",
    "plugins.developer": "D\xE9veloppeur",
    "plugins.version": "Version",
    "plugins.license": "Licence",
    "plugins.dependencies": "N\xE9cessite",
    "plugins.keywords": "Mots-cl\xE9s",
    "plugins.settings": "R\xE9glages",
    "plugins.saved": "Enregistr\xE9",
    "plugins.reset": "R\xE9tablir les valeurs par d\xE9faut",
    "plugins.logs": "Journal",
    "plugins.noLogs": "Aucun journal",
    "plugins.installedVersion": "Install\xE9e : {v}",
    "state.ready": "Active",
    "state.error": "Erreur",
    "state.disabled": "D\xE9sactiv\xE9e",
    "appearance.mode": "Mode",
    "appearance.theme": "Th\xE8me",
    "appearance.themeDefault": "Par d\xE9faut",
    "appearance.accent": "Couleur d'accentuation",
    "appearance.accentDefault": "Selon le th\xE8me",
    "appearance.text": "Texte",
    "appearance.font": "Police",
    "appearance.customFont": "Votre propre police",
    "appearance.customFontHint": "Toute police install\xE9e sur votre ordinateur",
    "appearance.fontSize": "Taille du texte",
    "appearance.lineHeight": "Interligne",
    "appearance.preview": "Portez ce vieux whisky au juge blond qui fume.",
    "appearance.layout": "Disposition",
    "appearance.density": "Espacement",
    "appearance.comfortable": "Confortable",
    "appearance.compact": "Compact",
    "appearance.radius": "Coins",
    "appearance.sharp": "Droits",
    "appearance.default": "Par d\xE9faut",
    "appearance.round": "Arrondis",
    "appearance.translucency": "Transparence",
    "appearance.motion": "R\xE9duire les animations",
    "appearance.reset": "R\xE9initialiser l'apparence",
    "language.follow": "Suivre la langue du syst\xE8me"
  },
  es: {
    "menu.dashboard": "Panel",
    "menu.plugins": "Extensiones",
    "menu.settings": "Ajustes",
    "theme.toggle": "Cambiar apariencia",
    "theme.system": "Sistema",
    "theme.light": "Claro",
    "theme.dark": "Oscuro",
    "search.placeholder": "Buscar comandos, p\xE1ginas\u2026",
    "search.label": "Buscar",
    "search.commands": "Comandos",
    "search.pages": "P\xE1ginas",
    "search.noResults": "Sin resultados",
    "notifications.title": "Notificaciones",
    "notifications.clear": "Borrar todo",
    "notifications.empty": "Todo al d\xEDa",
    "palette.placeholder": "Escribe un comando\u2026",
    "palette.empty": "Ning\xFAn comando coincide",
    "sidebar.expand": "Expandir barra lateral",
    "sidebar.collapse": "Contraer barra lateral",
    "settings.title": "Ajustes",
    "settings.empty": "Sin ajustes",
    "settings.general": "General",
    "settings.shortcuts": "Atajos",
    "settings.appearance": "Apariencia",
    "settings.language": "Idioma",
    "settings.about": "Acerca de",
    "settings.app": "Aplicaci\xF3n",
    "settings.plugins": "Extensiones",
    "settings.engine": "Motor",
    "settings.sidebar": "Barra lateral",
    "settings.sidebarHint": "Reduce la barra lateral a iconos. Atajo: Ctrl/Cmd+B.",
    "settings.compactSidebar": "Barra lateral compacta",
    "plugins.title": "Extensiones",
    "plugins.installed": "Instaladas",
    "plugins.discover": "Descubrir",
    "plugins.updates": "Actualizaciones",
    "plugins.search": "Buscar extensiones",
    "plugins.none": "No hay extensiones instaladas",
    "plugins.searching": "Buscando en los cat\xE1logos\u2026",
    "plugins.upToDate": "Todo est\xE1 actualizado.",
    "plugins.storeEmpty": "No se encontraron extensiones en tus cat\xE1logos.",
    "plugins.installedTag": "Instalada",
    "plugins.get": "Obtener",
    "plugins.update": "Actualizar",
    "plugins.open": "Abrir",
    "plugins.back": "Extensiones",
    "plugins.notFound": "Esta extensi\xF3n no est\xE1 instalada.",
    "plugins.enable": "Activar",
    "plugins.enabled": "Activada",
    "plugins.disabled": "Desactivada",
    "plugins.reload": "Recargar",
    "plugins.uninstall": "Desinstalar",
    "plugins.video": "V\xEDdeo",
    "plugins.about": "Descripci\xF3n",
    "plugins.permissions": "Permisos",
    "plugins.permissionsFooter": "Las extensiones solo obtienen lo que declaran. Los accesos sensibles se destacan.",
    "plugins.noPermissions": "Sin accesos especiales",
    "plugins.sensitive": "Sensible",
    "plugins.information": "Informaci\xF3n",
    "plugins.developer": "Desarrollador",
    "plugins.version": "Versi\xF3n",
    "plugins.license": "Licencia",
    "plugins.dependencies": "Requiere",
    "plugins.keywords": "Palabras clave",
    "plugins.settings": "Ajustes",
    "plugins.saved": "Guardado",
    "plugins.reset": "Restablecer valores",
    "plugins.logs": "Registro",
    "plugins.noLogs": "Sin registros",
    "plugins.installedVersion": "Instalada: {v}",
    "state.ready": "Activa",
    "state.error": "Error",
    "state.disabled": "Desactivada",
    "appearance.mode": "Modo",
    "appearance.theme": "Tema",
    "appearance.themeDefault": "Predeterminado",
    "appearance.accent": "Color de \xE9nfasis",
    "appearance.accentDefault": "Seg\xFAn el tema",
    "appearance.text": "Texto",
    "appearance.font": "Fuente",
    "appearance.customFont": "Tu propia fuente",
    "appearance.customFontHint": "Cualquier fuente instalada en tu equipo",
    "appearance.fontSize": "Tama\xF1o del texto",
    "appearance.lineHeight": "Interlineado",
    "appearance.preview": "El veloz murci\xE9lago hind\xFA com\xEDa feliz cardillo y kiwi.",
    "appearance.layout": "Disposici\xF3n",
    "appearance.density": "Espaciado",
    "appearance.comfortable": "C\xF3modo",
    "appearance.compact": "Compacto",
    "appearance.radius": "Esquinas",
    "appearance.sharp": "Rectas",
    "appearance.default": "Predeterminadas",
    "appearance.round": "Redondeadas",
    "appearance.translucency": "Transparencia",
    "appearance.motion": "Reducir movimiento",
    "appearance.reset": "Restablecer apariencia",
    "language.follow": "Seguir el idioma del sistema"
  },
  de: {
    "menu.dashboard": "\xDCbersicht",
    "menu.plugins": "Erweiterungen",
    "menu.settings": "Einstellungen",
    "theme.toggle": "Darstellung wechseln",
    "theme.system": "System",
    "theme.light": "Hell",
    "theme.dark": "Dunkel",
    "search.placeholder": "Befehle, Seiten suchen\u2026",
    "search.label": "Suchen",
    "search.commands": "Befehle",
    "search.pages": "Seiten",
    "search.noResults": "Keine Ergebnisse",
    "notifications.title": "Mitteilungen",
    "notifications.clear": "Alle l\xF6schen",
    "notifications.empty": "Alles erledigt",
    "palette.placeholder": "Befehl eingeben\u2026",
    "palette.empty": "Kein passender Befehl",
    "sidebar.expand": "Seitenleiste erweitern",
    "sidebar.collapse": "Seitenleiste einklappen",
    "settings.title": "Einstellungen",
    "settings.empty": "Keine Einstellungen",
    "settings.general": "Allgemein",
    "settings.shortcuts": "Tastenk\xFCrzel",
    "settings.appearance": "Darstellung",
    "settings.language": "Sprache",
    "settings.about": "Info",
    "settings.app": "Anwendung",
    "settings.plugins": "Erweiterungen",
    "settings.engine": "Engine",
    "settings.sidebar": "Seitenleiste",
    "settings.sidebarHint": "Reduziert die Seitenleiste auf Symbole. K\xFCrzel: Strg/Cmd+B.",
    "settings.compactSidebar": "Kompakte Seitenleiste",
    "plugins.title": "Erweiterungen",
    "plugins.installed": "Installiert",
    "plugins.discover": "Entdecken",
    "plugins.updates": "Updates",
    "plugins.search": "Erweiterungen suchen",
    "plugins.none": "Keine Erweiterungen installiert",
    "plugins.searching": "Kataloge werden durchsucht\u2026",
    "plugins.upToDate": "Alles ist aktuell.",
    "plugins.storeEmpty": "Keine Erweiterungen in Ihren Katalogen gefunden.",
    "plugins.installedTag": "Installiert",
    "plugins.get": "Laden",
    "plugins.update": "Aktualisieren",
    "plugins.open": "\xD6ffnen",
    "plugins.back": "Erweiterungen",
    "plugins.notFound": "Diese Erweiterung ist nicht installiert.",
    "plugins.enable": "Aktivieren",
    "plugins.enabled": "Aktiviert",
    "plugins.disabled": "Deaktiviert",
    "plugins.reload": "Neu laden",
    "plugins.uninstall": "Deinstallieren",
    "plugins.video": "Video",
    "plugins.about": "Beschreibung",
    "plugins.permissions": "Berechtigungen",
    "plugins.permissionsFooter": "Erweiterungen erhalten nur, was sie angeben. Sensible Zugriffe sind markiert.",
    "plugins.noPermissions": "Keine besonderen Zugriffe",
    "plugins.sensitive": "Sensibel",
    "plugins.information": "Informationen",
    "plugins.developer": "Entwickler",
    "plugins.version": "Version",
    "plugins.license": "Lizenz",
    "plugins.dependencies": "Ben\xF6tigt",
    "plugins.keywords": "Stichw\xF6rter",
    "plugins.settings": "Einstellungen",
    "plugins.saved": "Gespeichert",
    "plugins.reset": "Auf Standard zur\xFCcksetzen",
    "plugins.logs": "Protokoll",
    "plugins.noLogs": "Kein Protokoll",
    "plugins.installedVersion": "Installiert: {v}",
    "state.ready": "Aktiv",
    "state.error": "Fehler",
    "state.disabled": "Deaktiviert",
    "appearance.mode": "Modus",
    "appearance.theme": "Thema",
    "appearance.themeDefault": "Standard",
    "appearance.accent": "Akzentfarbe",
    "appearance.accentDefault": "Vom Thema",
    "appearance.text": "Text",
    "appearance.font": "Schrift",
    "appearance.customFont": "Eigene Schrift",
    "appearance.customFontHint": "Jede auf Ihrem Computer installierte Schrift",
    "appearance.fontSize": "Textgr\xF6\xDFe",
    "appearance.lineHeight": "Zeilenabstand",
    "appearance.preview": "Zw\xF6lf Boxk\xE4mpfer jagen Viktor quer \xFCber den gro\xDFen Sylter Deich.",
    "appearance.layout": "Layout",
    "appearance.density": "Abst\xE4nde",
    "appearance.comfortable": "Komfortabel",
    "appearance.compact": "Kompakt",
    "appearance.radius": "Ecken",
    "appearance.sharp": "Eckig",
    "appearance.default": "Standard",
    "appearance.round": "Rund",
    "appearance.translucency": "Transparenz",
    "appearance.motion": "Bewegung reduzieren",
    "appearance.reset": "Darstellung zur\xFCcksetzen",
    "language.follow": "Systemsprache verwenden"
  }
};

// plugins/language/src/renderer.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var languages = [
  { code: "fr", label: "French", nativeLabel: "Fran\xE7ais" },
  { code: "es", label: "Spanish", nativeLabel: "Espa\xF1ol" },
  { code: "de", label: "German", nativeLabel: "Deutsch" }
];
function LanguageSection() {
  const { locale, setLocale, languages: all, t } = (0, import_react.useI18n)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Group, { title: t("settings.language", "Language"), children: all.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_react.Row,
      {
        "data-testid": "lang-" + l.code,
        title: l.nativeLabel ?? l.label,
        subtitle: l.label,
        onClick: () => setLocale(l.code),
        right: locale === l.code ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Icon, { name: "check", size: 18 }) : void 0
      },
      l.code
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Group, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_react.Row,
      {
        title: t("language.follow", "Follow the system language"),
        onClick: () => setLocale(navigator.language)
      }
    ) })
  ] });
}
var renderer_default = (0, import_fluxplugin.definePlugin)({
  extensions: [
    {
      point: "settings",
      contribution: {
        sections: [
          {
            id: "language",
            title: "Language",
            icon: "language",
            order: 20,
            component: LanguageSection
          }
        ]
      }
    },
    { point: "i18n", contribution: { languages } },
    ...Object.entries(messages).map(([locale, m]) => ({
      point: "i18n",
      contribution: { messages: [{ locale, messages: m }] }
    }))
  ]
});
export {
  renderer_default as default
};
//# sourceMappingURL=renderer.js.map
