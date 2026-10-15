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

// flux-shared:react
var require_react2 = __commonJS({
  "flux-shared:react"(exports, module) {
    var m = globalThis.__FLUXPLUGIN_SHARED__ && globalThis.__FLUXPLUGIN_SHARED__["react"];
    if (!m) throw new Error("Shared module react is not provided by the host application (see installSharedModules).");
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

// src/renderer.tsx
var import_fluxplugin = __toESM(require_fluxplugin(), 1);
var import_react3 = __toESM(require_react(), 1);

// src/components/editor.tsx
var import_react2 = __toESM(require_react2(), 1);

// node_modules/.pnpm/@unlayer+react-image-editor@1.0.2_react@19.3.1/node_modules/@unlayer/react-image-editor/dist/index.mjs
var import_react = __toESM(require_react2(), 1);
var defaultScriptUrl = "https://cdn.unlayer.com/image-editor/embed.js";
var REUSED_TAG_TIMEOUT_MS = 3e4;
var loads = /* @__PURE__ */ new Map();
var resolveUrl = (scriptUrl) => new URL(scriptUrl, document.baseURI).href;
var findScriptTag = (scriptUrl) => {
  var _a;
  const resolved = resolveUrl(scriptUrl);
  const scripts = Array.from(document.querySelectorAll("script"));
  return (_a = scripts.find((script) => script.src === resolved)) != null ? _a : null;
};
var loadScript = (scriptUrl = defaultScriptUrl) => {
  if (window.ImageEditor) {
    return Promise.resolve();
  }
  const cached = loads.get(scriptUrl);
  if (cached) {
    return cached.promise;
  }
  let abort;
  const promise = new Promise((resolve, reject) => {
    const existing = findScriptTag(scriptUrl);
    const tag = existing != null ? existing : document.createElement("script");
    let timeout;
    const failWith = (error) => {
      if (timeout !== void 0) clearTimeout(timeout);
      loads.delete(scriptUrl);
      tag.remove();
      reject(error);
    };
    abort = failWith;
    tag.addEventListener(
      "load",
      () => {
        var _a;
        if (timeout !== void 0) clearTimeout(timeout);
        (_a = window.ImageEditor) == null ? void 0 : _a.load().catch(() => {
        });
        resolve();
      },
      { once: true }
    );
    tag.addEventListener(
      "error",
      () => {
        failWith(
          new Error(
            `Failed to load the image editor embed script: ${scriptUrl}`
          )
        );
      },
      { once: true }
    );
    if (existing) {
      timeout = setTimeout(() => {
        failWith(
          new Error(
            `Timed out waiting for an existing embed script tag: ${scriptUrl}`
          )
        );
      }, REUSED_TAG_TIMEOUT_MS);
    } else {
      tag.src = scriptUrl;
      document.head.appendChild(tag);
    }
  });
  loads.set(scriptUrl, { promise, abort });
  return promise;
};
var resetLoader = (scriptUrl = defaultScriptUrl) => {
  var _a;
  const tracked = loads.get(scriptUrl);
  loads.delete(scriptUrl);
  tracked == null ? void 0 : tracked.abort(new Error(`The image editor loader was reset: ${scriptUrl}`));
  (_a = findScriptTag(scriptUrl)) == null ? void 0 : _a.remove();
  delete window.ImageEditor;
};
function ImageEditorInner(props, ref) {
  const { image, options = {}, scriptUrl, minHeight = 500, style = {} } = props;
  const [editor, setEditor] = (0, import_react.useState)(null);
  const containerRef = (0, import_react.useRef)(null);
  const generatedId = (0, import_react.useId)();
  const editorId = props.editorId || `image-editor-${generatedId}`;
  (0, import_react.useImperativeHandle)(ref, () => ({ editor }), [editor]);
  const latestPropsRef = (0, import_react.useRef)(props);
  (0, import_react.useEffect)(() => {
    latestPropsRef.current = props;
  });
  const chainRef = (0, import_react.useRef)(Promise.resolve());
  const editorRef = (0, import_react.useRef)(null);
  const appliedImageRef = (0, import_react.useRef)(null);
  const appliedUpdatableRef = (0, import_react.useRef)(null);
  const fail = (error) => {
    const err = error instanceof Error ? error : new Error(String(error));
    const { onError } = latestPropsRef.current;
    if (onError) {
      try {
        onError(err);
      } catch (callbackError) {
        console.error(
          "[react-image-editor] onError callback threw",
          callbackError
        );
      }
    } else {
      console.error("[react-image-editor]", err);
    }
  };
  const { theme, locale, translations, ...remountOptions } = options;
  const remountKey = JSON.stringify(remountOptions);
  const updatableKey = JSON.stringify([theme, locale, translations]);
  (0, import_react.useEffect)(() => {
    let cancelled = false;
    let instance = null;
    chainRef.current = chainRef.current.then(async () => {
      var _a, _b;
      if (cancelled) return;
      await loadScript(scriptUrl);
      if (cancelled) return;
      const embed = window.ImageEditor;
      const container = containerRef.current;
      if (!embed) {
        throw new Error(
          "The embed script loaded but window.ImageEditor is unavailable."
        );
      }
      if (!container) return;
      const current = latestPropsRef.current;
      const mountImage = current.image;
      const mountOptions = current.options || {};
      const created = await embed.createEditor({
        ...mountOptions,
        container,
        image: mountImage,
        onSave: (result) => {
          var _a2, _b2;
          return (_b2 = (_a2 = latestPropsRef.current).onSave) == null ? void 0 : _b2.call(_a2, result);
        },
        onCancel: () => {
          var _a2, _b2;
          return (_b2 = (_a2 = latestPropsRef.current).onCancel) == null ? void 0 : _b2.call(_a2);
        },
        onLoadError: () => {
          var _a2, _b2;
          return (_b2 = (_a2 = latestPropsRef.current).onLoadError) == null ? void 0 : _b2.call(_a2);
        }
      });
      if (cancelled) {
        created.destroy();
        return;
      }
      instance = created;
      editorRef.current = created;
      appliedImageRef.current = mountImage;
      appliedUpdatableRef.current = JSON.stringify([
        mountOptions.theme,
        mountOptions.locale,
        mountOptions.translations
      ]);
      setEditor(created);
      try {
        (_b = (_a = latestPropsRef.current).onLoad) == null ? void 0 : _b.call(_a, created);
      } catch (callbackError) {
        console.error(
          "[react-image-editor] onLoad callback threw",
          callbackError
        );
      }
    }).catch((error) => {
      if (!window.__ImageEditorImpl__) {
        resetLoader(scriptUrl);
      }
      fail(error);
    });
    return () => {
      cancelled = true;
      editorRef.current = null;
      setEditor(null);
      chainRef.current = chainRef.current.then(() => {
        instance == null ? void 0 : instance.destroy();
        instance = null;
      }).catch(fail);
    };
  }, [scriptUrl, remountKey]);
  (0, import_react.useEffect)(() => {
    if (!editor) return;
    if (appliedImageRef.current === image) return;
    const instance = editor;
    chainRef.current = chainRef.current.then(async () => {
      if (editorRef.current !== instance) return;
      const target = latestPropsRef.current.image;
      if (target === appliedImageRef.current) return;
      await instance.reset(target);
      appliedImageRef.current = target;
    }).catch(fail);
  }, [editor, image]);
  (0, import_react.useEffect)(() => {
    if (!editor) return;
    if (editorRef.current !== editor) return;
    if (appliedUpdatableRef.current === updatableKey) return;
    appliedUpdatableRef.current = updatableKey;
    try {
      editor.updateOptions({ theme, locale, translations });
    } catch (error) {
      fail(error);
    }
  }, [editor, updatableKey]);
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      style: {
        flex: 1,
        display: "flex",
        minHeight
      }
    },
    /* @__PURE__ */ import_react.default.createElement("div", { id: editorId, ref: containerRef, style: { ...style, flex: 1 } })
  );
}
var ImageEditor = import_react.default.forwardRef(ImageEditorInner);

// src/components/editor.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var Editor = () => {
  const editorRef = (0, import_react2.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    ImageEditor,
    {
      ref: editorRef,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
      minHeight: "700px",
      options: {
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
            }
          }
          // Assistant IA (nécessite un projectId avec l'option activée)
          // ai: { enabled: true, assistant: true },
        }
      },
      onLoad: (editor) => {
        console.log("\xC9diteur mont\xE9", editor);
      },
      onSave: ({ dataUrl, blob }) => {
        console.info("Image enregistr\xE9e :", dataUrl.length, "octets");
        console.log("Blob :", blob);
      },
      onCancel: () => console.info("\xC9dition annul\xE9e"),
      onLoadError: () => {
        console.error(
          "\xC9chec du chargement de l'image \u2014 v\xE9rifie l'URL et le CORS"
        );
      },
      onError: (error) => {
        console.error("Erreur de l'\xE9diteur :", error);
      }
    }
  );
};

// src/renderer.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function OsuiWidget() {
  const [n, setN] = (0, import_react3.usePluginState)("com.example.osui", "clicks", 0);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      className: "rounded-xl border border-border bg-surface p-4",
      "data-testid": "osui-widget",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("strong", { children: "Osui" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", { children: [
          "A widget injected into the host's ",
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("code", { children: "dashboard.after" }),
          " slot."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { onClick: () => setN((c) => c + 1), children: [
          "Clicked ",
          n,
          " times"
        ] })
      ]
    }
  );
}
function OsuiPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "rounded-xl border border-border bg-surface p-4", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Editor, {}) });
}
var renderer_default = (0, import_fluxplugin.definePlugin)({
  routes: [
    {
      path: "/osui",
      lazy: async () => ({ default: OsuiPage }),
      meta: { title: "Osui", breadcrumb: "Osui", menu: { label: "Osui" } }
    }
  ],
  components: [
    { slot: "dashboard.after", component: OsuiWidget, priority: 10 }
  ],
  commands: [
    {
      id: "osui.hello",
      title: "Osui: say hello",
      category: "Osui",
      execute: () => console.log("Hello from Osui!")
    }
  ],
  // Application menu: adds a top-level "Osui" menu to the title bar (File/Edit-style). Shortcuts come from the command's keybinding.
  menus: [
    {
      id: "osui.menu",
      location: "application",
      label: "Osui",
      order: 50,
      children: [
        { id: "osui.menu.open", label: "Open Osui", path: "/osui" },
        { id: "osui.menu.hello", label: "Say hello", command: "osui.hello" }
      ]
    }
  ],
  // Title-bar search: your results appear next to commands and pages.
  extensions: [
    {
      point: "dashboard",
      contribution: {
        toolbar: [
          { id: "osui-hello", label: "Osui: hello", command: "osui.hello" }
        ]
      }
    },
    {
      point: "titlebar",
      contribution: {
        searchProviders: [
          {
            id: "osui.search",
            label: "Osui",
            search: (q) => "osui".includes(q.toLowerCase()) ? [
              {
                id: "osui.r1",
                title: "Open Osui",
                subtitle: "page",
                run: () => {
                  location.hash = "#/osui";
                }
              }
            ] : []
          }
        ]
      }
    }
  ],
  // A theme: tokens are CSS variables; the user picks it in the title bar.
  // { point: "theme", contribution: { themes: [{ id: "osui.ocean", label: "Ocean", dark: true, tokens: { "--flux-bg": "#06202b", "--flux-surface": "#0a2c3a", "--flux-fg": "#e6f6ff", "--flux-border": "#14465a", "--flux-accent": "#22d3ee" } }] } },
  onActivate(ctx) {
    ctx.notifications.push({
      title: "Osui is ready",
      body: "Open the title-bar bell to see this notification.",
      level: "success"
    });
  }
});
export {
  renderer_default as default
};
