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

// flux-shared:react/jsx-runtime
var require_jsx_runtime = __commonJS({
  "flux-shared:react/jsx-runtime"(exports, module) {
    var m = globalThis.__FLUXPLUGIN_SHARED__ && globalThis.__FLUXPLUGIN_SHARED__["react/jsx-runtime"];
    if (!m) throw new Error("Shared module react/jsx-runtime is not provided by the host application (see installSharedModules).");
    module.exports = m;
  }
});

// plugins/advanced-plugin/src/renderer.tsx
var import_fluxplugin = __toESM(require_fluxplugin(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var Layout = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "sp-layout", children: [
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", { className: "sp-head", "data-testid": "students-layout", children: "Students workspace (plugin layout)" }),
  children
] });
var Students = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "sp-card", "data-testid": "students-page", children: [
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Students Pro" }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Guarded route inside a plugin layout. Open the command palette (Ctrl/Cmd+K) to try \u201CStudents: New\u201D." })
] });
var Badge = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sp-badge", "data-testid": "students-badge", children: "PRO" });
var renderer_default = (0, import_fluxplugin.definePlugin)({
  layouts: { "students-layout": Layout },
  routes: [
    {
      path: "/students",
      component: Students,
      layout: "students-layout",
      guards: [() => true],
      meta: {
        title: "Students",
        breadcrumb: "Students",
        menu: { label: "Students", order: 5 }
      }
    }
  ],
  components: [{ slot: "header.badges", component: Badge }],
  extensions: [
    {
      point: "dashboard",
      contribution: {
        toolbar: [
          { id: "new-student", label: "New student", command: "students.new" }
        ]
      },
      priority: 5
    }
  ],
  commands: [
    {
      id: "students.new",
      title: "New student",
      category: "Students",
      keybinding: "Mod+Shift+N",
      execute: () => location.hash = "#/students"
    }
  ]
});
export {
  renderer_default as default
};
//# sourceMappingURL=renderer.js.map
