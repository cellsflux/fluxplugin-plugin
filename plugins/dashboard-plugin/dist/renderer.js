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

// plugins/dashboard-plugin/src/renderer.tsx
var import_fluxplugin = __toESM(require_fluxplugin(), 1);

// plugins/dashboard-plugin/src/widget/01.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function Widget() {
  const [n, setN] = (0, import_react.usePluginState)("com.example.dashboard", "clicks", 0);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative h-48", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "img",
        {
          src: "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
          alt: "Espace de travail moderne",
          className: "h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-3 top-3 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white", children: "Actif" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-4 p-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "text-xl font-bold text-gray-900 dark:text-white", children: "Mon espace" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-2 text-sm text-gray-500 dark:text-gray-400", children: "G\xE9rez vos projets et consultez vos statistiques depuis un espace simple et moderne." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rounded-xl bg-gray-100 p-4 dark:bg-gray-800", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm text-gray-500", children: "Utilisateurs" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-1 text-2xl font-bold text-gray-900 dark:text-white", children: "248" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rounded-xl bg-gray-100 p-4 dark:bg-gray-800", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm text-gray-500", children: "Progression" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-1 text-2xl font-bold text-gray-900 dark:text-white", children: "85%" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: "dw-btn", onClick: () => setN((c) => c + 1), children: [
        "Clicked ",
        n,
        " times"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          onClick: () => alert("Widget ouvert !"),
          className: "w-full rounded-xl bg-red-600 px-4 py-3\r\n            font-semibold text-white transition\r\n            hover:bg-red-700 active:scale-[0.98]",
          children: "D\xE9couvrir \u2192"
        }
      )
    ] })
  ] });
}

// plugins/dashboard-plugin/src/renderer.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var Analytics = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "dw-card", children: [
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { children: "Analytics" }),
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: "This page is code-split and registered at runtime by a plugin." })
] });
var renderer_default = (0, import_fluxplugin.definePlugin)({
  routes: [
    {
      path: "/analytics",
      lazy: async () => ({ default: Analytics }),
      meta: {
        title: "Analytics",
        breadcrumb: "Analytics",
        menu: { label: "Analytics", order: 20 }
      }
    }
  ],
  components: [{ slot: "dashboard.after", component: Widget, priority: 10 }],
  extensions: [
    {
      point: "dashboard",
      contribution: {
        toolbar: [
          {
            id: "refresh",
            label: "Refresh data",
            command: "dashboard.refresh"
          }
        ]
      }
    }
  ],
  commands: [
    {
      id: "dashboard.refresh",
      title: "Refresh dashboard data",
      category: "Dashboard",
      keybinding: "Mod+Shift+R",
      execute: () => console.log("refreshed")
    }
  ]
});
export {
  renderer_default as default
};
//# sourceMappingURL=renderer.js.map
