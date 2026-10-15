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

// plugins/hello/src/renderer.tsx
var import_fluxplugin = __toESM(require_fluxplugin(), 1);
var import_react = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function HelloWidget() {
  const [n, setN] = (0, import_react.usePluginState)("com.example.hello", "clicks", 0);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "hello-card", "data-testid": "hello-widget", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Hello" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
      "A widget injected into the host's ",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "dashboard.after" }),
      " slot."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { onClick: () => setN((c) => c + 1), children: [
      "Clicked ",
      n,
      " times"
    ] })
  ] });
}
function HelloPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "hello-card", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Hello" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Registered at runtime by a plugin." })
  ] });
}
var renderer_default = (0, import_fluxplugin.definePlugin)({
  routes: [{ path: "/hello", lazy: async () => ({ default: HelloPage }), meta: { title: "Hello", breadcrumb: "Hello", menu: { label: "Hello" } } }],
  components: [{ slot: "dashboard.after", component: HelloWidget, priority: 10 }],
  commands: [{ id: "hello.hello", title: "Hello: say hello", category: "Hello", execute: () => console.log("Hello from Hello!") }],
  // Application menu: adds a top-level "Hello" menu to the title bar (File/Edit-style). Shortcuts come from the command's keybinding.
  menus: [{
    id: "hello.menu",
    location: "application",
    label: "Hello",
    order: 50,
    children: [{ id: "hello.menu.open", label: "Open Hello", path: "/hello" }, { id: "hello.menu.hello", label: "Say hello", command: "hello.hello" }]
  }],
  // Title-bar search: your results appear next to commands and pages.
  extensions: [
    { point: "dashboard", contribution: { toolbar: [{ id: "hello-hello", label: "Hello: hello", command: "hello.hello" }] } },
    { point: "titlebar", contribution: { searchProviders: [{
      id: "hello.search",
      label: "Hello",
      search: (q) => "hello".includes(q.toLowerCase()) ? [{ id: "hello.r1", title: "Open Hello", subtitle: "page", run: () => {
        location.hash = "#/hello";
      } }] : []
    }] } }
  ],
  // A theme: tokens are CSS variables; the user picks it in the title bar.
  // { point: "theme", contribution: { themes: [{ id: "hello.ocean", label: "Ocean", dark: true, tokens: { "--flux-bg": "#06202b", "--flux-surface": "#0a2c3a", "--flux-fg": "#e6f6ff", "--flux-border": "#14465a", "--flux-accent": "#22d3ee" } }] } },
  onActivate(ctx) {
    ctx.notifications.push({ title: "Hello is ready", body: "Open the title-bar bell to see this notification.", level: "success" });
  }
});
export {
  renderer_default as default
};
//# sourceMappingURL=renderer.js.map
