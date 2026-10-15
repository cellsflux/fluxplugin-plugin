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

// plugins/backend-plugin/src/renderer.tsx
var import_fluxplugin = __toESM(require_fluxplugin(), 1);
var import_react = __toESM(require_react(), 1);
var import_react2 = __toESM(require_react2(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function StatsPage() {
  const get = (0, import_react.usePluginIPC)("stats.get", { caller: "com.example.stats" });
  const add = (0, import_react.usePluginIPC)("stats.addStudent", { caller: "com.example.stats" });
  const live = (0, import_react.usePluginEvent)("stats.updated");
  (0, import_react2.useEffect)(() => void get.call().catch(() => void 0), []);
  const s = add.data ?? get.data;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "st-card", "data-testid": "stats-page", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Stats (from the main process)" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
      "Students: ",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { "data-testid": "students", children: s?.students ?? "\u2026" }),
      " \xB7 uptime ",
      s?.uptimeSec ?? 0,
      "s"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
      "Live push: ",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { "data-testid": "live", children: live?.students ?? "waiting\u2026" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "st-btn", onClick: () => void add.call({ count: 5 }), children: "Add 5 students" }),
    add.error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { role: "alert", children: add.error.message })
  ] });
}
var renderer_default = (0, import_fluxplugin.definePlugin)({
  routes: [{ path: "/stats", component: StatsPage, meta: { title: "Stats", breadcrumb: "Stats", menu: { label: "Stats", order: 10 } } }]
});
export {
  renderer_default as default
};
//# sourceMappingURL=renderer.js.map
