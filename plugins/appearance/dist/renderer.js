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

// plugins/appearance/src/renderer.tsx
var import_fluxplugin = __toESM(require_fluxplugin(), 1);
var import_react = __toESM(require_react(), 1);
var import_react2 = __toESM(require_react2(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var ACCENTS = [
  "#007aff",
  "#34c759",
  "#ff9f0a",
  "#af52de",
  "#ff375f",
  "#5ac8fa",
  "#8e8e93"
];
function AppearanceSection() {
  const t = (0, import_react.useT)();
  const { mode, setMode, themeId, setThemeId, themes } = (0, import_react.useTheme)();
  const {
    appearance: a,
    setAppearance,
    resetAppearance,
    fonts
  } = (0, import_react.useAppearance)();
  const [custom, setCustom] = (0, import_react2.useState)(a.customFont);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Group, { title: t("appearance.mode", "Mode"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_react.Row,
      {
        title: t("appearance.mode", "Mode"),
        right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_react.Segmented,
          {
            value: themeId ? "" : mode,
            onChange: setMode,
            label: "Mode",
            options: [
              { value: "system", label: t("theme.system", "System") },
              { value: "light", label: t("theme.light", "Light") },
              { value: "dark", label: t("theme.dark", "Dark") }
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Group, { title: t("appearance.theme", "Theme"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: { display: "flex", gap: 12, flexWrap: "wrap", padding: 14 },
        children: [
          {
            id: "",
            label: t("appearance.themeDefault", "Default"),
            tokens: {
              "--flux-bg": "#ffffff",
              "--flux-surface": "#f5f5f7",
              "--flux-accent": "#007aff"
            }
          },
          ...themes
        ].map((th) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "button",
          {
            type: "button",
            className: "flux-theme-card",
            "data-on": (themeId ?? "") === th.id || void 0,
            "data-testid": "theme-" + (th.id || "default"),
            onClick: () => th.id ? setThemeId(th.id) : setMode(mode),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "flux-theme-prev", style: { display: "flex" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { flex: 2, background: th.tokens["--flux-bg"] } }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "i",
                  {
                    style: { flex: 1, background: th.tokens["--flux-surface"] }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "i",
                  {
                    style: { flex: 1, background: th.tokens["--flux-accent"] }
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "cap", children: th.label })
            ]
          },
          th.id || "default"
        ))
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Group, { title: t("appearance.accent", "Accent color"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flux-swatches", style: { padding: 14 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          type: "button",
          className: "flux-swatch",
          title: t("appearance.accentDefault", "Theme default"),
          style: {
            background: "conic-gradient(#ff3b30,#ff9f0a,#34c759,#0a84ff,#af52de,#ff3b30)"
          },
          "data-on": !a.accent || void 0,
          onClick: () => setAppearance({ accent: void 0 })
        }
      ),
      ACCENTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          type: "button",
          "aria-label": c,
          className: "flux-swatch",
          style: { background: c },
          "data-on": a.accent === c || void 0,
          "data-testid": "accent-" + c.slice(1),
          onClick: () => setAppearance({ accent: c })
        },
        c
      ))
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Group, { title: t("appearance.text", "Text"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.Row,
        {
          title: t("appearance.font", "Font"),
          right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "select",
            {
              className: "flux-select",
              value: a.fontId,
              "data-testid": "font-select",
              onChange: (e) => setAppearance({ fontId: e.target.value }),
              children: fonts.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: f.id, children: f.label }, f.id))
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.Row,
        {
          title: t("appearance.customFont", "Your own font"),
          subtitle: t(
            "appearance.customFontHint",
            "Any font installed on your computer"
          ),
          right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "input",
            {
              className: "flux-input",
              style: { width: 170 },
              placeholder: "e.g. Avenir Next",
              value: custom,
              "data-testid": "custom-font",
              onChange: (e) => setCustom(e.target.value),
              onBlur: () => setAppearance({ customFont: custom }),
              onKeyDown: (e) => e.key === "Enter" && setAppearance({ customFont: custom })
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.Row,
        {
          title: t("appearance.fontSize", "Text size"),
          right: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "input",
              {
                className: "flux-range",
                type: "range",
                min: 12,
                max: 20,
                step: 1,
                value: a.fontSize,
                "data-testid": "font-size",
                onChange: (e) => setAppearance({ fontSize: Number(e.target.value) })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: { width: 34, textAlign: "right" }, children: [
              a.fontSize,
              "px"
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.Row,
        {
          title: t("appearance.lineHeight", "Line spacing"),
          right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "input",
            {
              className: "flux-range",
              type: "range",
              min: 1.2,
              max: 2,
              step: 0.05,
              value: a.lineHeight,
              onChange: (e) => setAppearance({ lineHeight: Number(e.target.value) })
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { padding: "4px 14px 14px" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: { margin: 0 }, children: t(
        "appearance.preview",
        "The quick brown fox jumps over the lazy dog."
      ) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Group, { title: t("appearance.layout", "Layout"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.Row,
        {
          title: t("appearance.density", "Spacing"),
          right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_react.Segmented,
            {
              value: a.density,
              onChange: (density) => setAppearance({ density }),
              label: "Spacing",
              options: [
                {
                  value: "comfortable",
                  label: t("appearance.comfortable", "Comfortable")
                },
                { value: "compact", label: t("appearance.compact", "Compact") }
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.Row,
        {
          title: t("appearance.radius", "Corners"),
          right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_react.Segmented,
            {
              value: a.radius,
              onChange: (radius) => setAppearance({ radius }),
              label: "Corners",
              options: [
                { value: "sharp", label: t("appearance.sharp", "Sharp") },
                { value: "default", label: t("appearance.default", "Default") },
                { value: "round", label: t("appearance.round", "Round") }
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.Row,
        {
          title: t("appearance.translucency", "Translucency"),
          right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_react.Switch,
            {
              checked: a.translucency,
              onChange: (translucency) => setAppearance({ translucency }),
              label: "Translucency"
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.Row,
        {
          title: t("appearance.motion", "Reduce motion"),
          right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_react.Switch,
            {
              checked: a.reduceMotion,
              onChange: (reduceMotion) => setAppearance({ reduceMotion }),
              label: "Reduce motion"
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_react.Button,
      {
        variant: "destructive",
        onClick: () => (resetAppearance(), setCustom("")),
        children: t("appearance.reset", "Reset appearance")
      }
    )
  ] });
}
var renderer_default = (0, import_fluxplugin.definePlugin)({
  extensions: [
    {
      point: "settings",
      contribution: {
        sections: [
          {
            id: "appearance",
            title: "Appearance",
            icon: "palette",
            order: 10,
            component: AppearanceSection
          }
        ]
      }
    },
    {
      point: "theme",
      contribution: {
        themes: [
          {
            id: "midnight",
            label: "Midnight",
            dark: true,
            tokens: {
              "--flux-bg": "#0b1020",
              "--flux-surface": "#111936",
              "--flux-surface-2": "#1a2447",
              "--flux-fg": "#e6ebff",
              "--flux-muted": "#8f9bc7",
              "--flux-border": "rgba(150,170,255,.18)",
              "--flux-accent": "#7c9cff",
              "--flux-material": "rgba(17,25,54,.72)"
            }
          },
          {
            id: "sunset",
            label: "Sunset",
            tokens: {
              "--flux-bg": "#fff8f1",
              "--flux-surface": "#ffefe0",
              "--flux-surface-2": "#ffe0c7",
              "--flux-fg": "#3b1f12",
              "--flux-muted": "#9a6b53",
              "--flux-border": "rgba(120,60,20,.16)",
              "--flux-accent": "#ff6a3d",
              "--flux-material": "rgba(255,239,224,.8)"
            }
          },
          {
            id: "forest",
            label: "Forest",
            dark: true,
            tokens: {
              "--flux-bg": "#0f1a14",
              "--flux-surface": "#162720",
              "--flux-surface-2": "#1f3a2e",
              "--flux-fg": "#e4f3ea",
              "--flux-muted": "#8fb3a0",
              "--flux-border": "rgba(150,230,190,.16)",
              "--flux-accent": "#34d399",
              "--flux-material": "rgba(22,39,32,.74)"
            }
          },
          {
            id: "graphite",
            label: "Graphite (high contrast)",
            tokens: {
              "--flux-bg": "#ffffff",
              "--flux-surface": "#f0f0f0",
              "--flux-surface-2": "#dcdcdc",
              "--flux-fg": "#000000",
              "--flux-muted": "#3a3a3a",
              "--flux-border": "#000000",
              "--flux-accent": "#0040dd",
              "--flux-material": "rgba(240,240,240,.95)"
            }
          }
        ]
      }
    },
    {
      point: "font",
      contribution: {
        fonts: [
          {
            id: "editorial",
            label: "Editorial",
            stack: '"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif'
          },
          {
            id: "geometric",
            label: "Geometric",
            stack: '"Avenir Next", Avenir, "Century Gothic", Futura, "Trebuchet MS", sans-serif'
          },
          {
            id: "readable",
            label: "Easy reading",
            stack: '"Atkinson Hyperlegible", Verdana, Tahoma, sans-serif'
          }
        ]
      }
    }
  ]
});
export {
  renderer_default as default
};
//# sourceMappingURL=renderer.js.map
