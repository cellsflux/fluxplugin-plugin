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

// plugins/advanced-plugin/src/main.ts
var import_fluxplugin = __toESM(require_fluxplugin(), 1);
var main_default = (0, import_fluxplugin.definePlugin)({
  hooks: [
    // Normalizes names before the host creates a student, and can veto invalid ones.
    { name: "before.item.create", handler: (ctx) => {
      ctx.input = { ...ctx.input, name: String(ctx.input.name ?? "").trim() };
      if (!ctx.input.name) ctx.cancel("name is required");
    } },
    { name: "transform.item.create", handler: (ctx) => ({ ...ctx.result, normalizedBy: "com.example.students" }) }
  ],
  events: [{ name: "item.created", handler: (p, ctx) => void ctx.logger.info(`item created: ${p.name}`) }],
  onActivate(ctx) {
    const stats = ctx.services.get("stats.service");
    ctx.logger.info(`started; ${stats?.count()} students according to the stats plugin`);
  }
});
export {
  main_default as default
};
//# sourceMappingURL=main.mjs.map
