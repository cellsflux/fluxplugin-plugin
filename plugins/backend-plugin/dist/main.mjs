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

// plugins/backend-plugin/src/main.ts
var import_fluxplugin = __toESM(require_fluxplugin(), 1);
var Stats = import_fluxplugin.s.object({ students: import_fluxplugin.s.number(), uptimeSec: import_fluxplugin.s.number(), at: import_fluxplugin.s.number() });
var started = Date.now();
var students = 12;
var main_default = (0, import_fluxplugin.definePlugin)({
  config: { version: 1, schema: import_fluxplugin.s.object({ intervalMs: import_fluxplugin.s.number({ min: 500, max: 6e4 }).default(3e3), verbose: import_fluxplugin.s.boolean().default(false) }) },
  ipc: [
    (0, import_fluxplugin.defineIPC)({ name: "stats.get", output: Stats, handler: () => ({ students, uptimeSec: Math.round((Date.now() - started) / 1e3), at: Date.now() }) }),
    (0, import_fluxplugin.defineIPC)({
      name: "stats.addStudent",
      input: import_fluxplugin.s.object({ count: import_fluxplugin.s.number({ int: true, min: 1, max: 100 }) }),
      output: Stats,
      handler: ({ count }) => (students += count, { students, uptimeSec: Math.round((Date.now() - started) / 1e3), at: Date.now() })
    })
  ],
  preload: { stats: { get: "stats.get", add: "stats.addStudent", onUpdated: { kind: "event", channel: "stats.updated" } } },
  services: { "stats.service": { count: () => students } },
  async onActivate(ctx) {
    const { intervalMs } = await ctx.config.get();
    const t = setInterval(() => ctx.ipc.send("stats.updated", { students, at: Date.now() }), intervalMs);
    ctx.lifecycle.onDeactivate(() => clearInterval(t));
  }
});
export {
  main_default as default
};
//# sourceMappingURL=main.mjs.map
