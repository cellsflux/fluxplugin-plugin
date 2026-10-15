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

// node_modules/.pnpm/react-photo-editor@3.0.0_re_e04e42f6f3de2bb3083a8b7c3d3ec15a/node_modules/react-photo-editor/dist/react-photo-editor.es.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react2(), 1);
var be = ({
  file: c,
  defaultBrightness: T = 100,
  defaultContrast: f = 100,
  defaultSaturate: G = 100,
  defaultGrayscale: J = 0,
  defaultFlipHorizontal: q = false,
  defaultFlipVertical: A = false,
  defaultZoom: K = 1,
  defaultRotate: D = 0,
  defaultLineColor: y = "#000000",
  defaultLineWidth: Q = 2,
  defaultMode: pe = "pan"
}) => {
  const p = (0, import_react.useRef)(null), w = (0, import_react.useRef)(new Image()), [L, he] = (0, import_react.useState)(""), [o, _] = (0, import_react.useState)(T), [S, ee] = (0, import_react.useState)(f), [V, re] = (0, import_react.useState)(G), [Y, te] = (0, import_react.useState)(J), [I, ae] = (0, import_react.useState)(D), [x, ne] = (0, import_react.useState)(q), [b, oe] = (0, import_react.useState)(A), [u, z] = (0, import_react.useState)(K), [M, v] = (0, import_react.useState)(false), [P, B] = (0, import_react.useState)(null), [k, H] = (0, import_react.useState)(0), [N, X] = (0, import_react.useState)(0), [W, ie] = (0, import_react.useState)(pe), [U, O] = (0, import_react.useState)(null), [E, j] = (0, import_react.useState)(y), [$, se] = (0, import_react.useState)(Q), m = (0, import_react.useRef)([]);
  (0, import_react.useEffect)(() => {
    if (c) {
      const e = URL.createObjectURL(c);
      return he(e), () => {
        URL.revokeObjectURL(e);
      };
    }
  }, [c]), (0, import_react.useEffect)(() => {
    R();
  }, [
    c,
    L,
    I,
    x,
    b,
    u,
    o,
    S,
    V,
    Y,
    k,
    N
  ]);
  const me = (e) => {
    m.current.forEach(({ path: r, color: n, width: l }) => {
      e.beginPath(), e.strokeStyle = n, e.lineWidth = l, e.lineCap = "round", e.lineJoin = "round", r.forEach((d, h) => {
        h === 0 ? e.moveTo(d.x, d.y) : e.lineTo(d.x, d.y);
      }), e.stroke();
    });
  }, R = () => {
    if (!L) return;
    const e = p.current, r = e == null ? void 0 : e.getContext("2d"), n = w.current;
    w.current.src = L, w.current.onload = R, n.onload = () => {
      if (e && r) {
        const l = n.width * u, d = n.height * u, h = (n.width - l) / 2, g = (n.height - d) / 2;
        if (e.width = n.width, e.height = n.height, r.clearRect(0, 0, e.width, e.height), r.filter = C(), r.save(), I) {
          const F = e.width / 2, de = e.height / 2;
          r.translate(F, de), r.rotate(I * Math.PI / 180), r.translate(-F, -de);
        }
        x && (r.translate(e.width, 0), r.scale(-1, 1)), b && (r.translate(0, e.height), r.scale(1, -1)), r.translate(h + k, g + N), r.scale(u, u), r.drawImage(n, 0, 0, e.width, e.height), r.restore(), r.filter = "none", me(r);
      }
    };
  }, ue = () => new Promise((e) => {
    const r = p.current;
    if (!r || !c) {
      e(null);
      return;
    }
    const n = (c.name.split(".").pop() || "").toLowerCase();
    let l;
    switch (n) {
      case "jpg":
      case "jpeg":
        l = "image/jpeg";
        break;
      case "png":
        l = "image/png";
        break;
      default:
        l = "image/png";
    }
    r.toBlob((d) => {
      if (d) {
        const h = new File([d], c.name, { type: d.type });
        e(h);
      } else
        e(null);
    }, l);
  }), a = () => {
    const e = p.current;
    if (e && c) {
      const r = document.createElement("a");
      r.download = c.name, r.href = e.toDataURL(c == null ? void 0 : c.type), r.click();
    }
  }, C = () => `brightness(${o}%) contrast(${S}%) grayscale(${Y}%) saturate(${V}%)`, le = () => {
    z((e) => e + 0.1);
  }, ce = () => {
    z((e) => Math.max(e - 0.1, 0.1));
  };
  return {
    /** Reference to the canvas element. */
    canvasRef: p,
    /** Source URL of the image being edited. */
    imageSrc: L,
    /** Current brightness level. */
    brightness: o,
    /** Current contrast level. */
    contrast: S,
    /** Current saturation level. */
    saturate: V,
    /** Current grayscale level. */
    grayscale: Y,
    /** Current rotation angle in degrees. */
    rotate: I,
    /** Flag indicating if the image is flipped horizontally. */
    flipHorizontal: x,
    /** Flag indicating if the image is flipped vertically. */
    flipVertical: b,
    /** Current zoom level. */
    zoom: u,
    /** Flag indicating if the image is being dragged. */
    isDragging: M,
    /** Starting coordinates for panning. */
    panStart: P,
    /** Current horizontal offset for panning. */
    offsetX: k,
    /** Current vertical offset for panning. */
    offsetY: N,
    /** Current mode ('pan' or 'draw') */
    mode: W,
    /** Current line color. */
    lineColor: E,
    /** Current line width. */
    lineWidth: $,
    /** Function to set the brightness level. */
    setBrightness: _,
    /** Function to set the contrast level. */
    setContrast: ee,
    /** Function to set the saturation level. */
    setSaturate: re,
    /** Function to set the grayscale level. */
    setGrayscale: te,
    /** Function to set the rotation angle. */
    setRotate: ae,
    /** Function to set the horizontal flip state. */
    setFlipHorizontal: ne,
    /** Function to set the vertical flip state. */
    setFlipVertical: oe,
    /** Function to set the zoom level. */
    setZoom: z,
    /** Function to set the dragging state. */
    setIsDragging: v,
    /** Function to set the starting coordinates for panning. */
    setPanStart: B,
    /** Function to set the horizontal offset for panning. */
    setOffsetX: H,
    /** Function to set the vertical offset for panning. */
    setOffsetY: X,
    /** Function to zoom in. */
    handleZoomIn: le,
    /** Function to zoom out. */
    handleZoomOut: ce,
    /** Function to handle pointer down events. */
    handlePointerDown: (e) => {
      if (W === "draw") {
        const r = p.current;
        if (!r) return;
        const n = r.getBoundingClientRect(), l = r.width / n.width, d = r.height / n.height, h = (e.clientX - n.left) * l, g = (e.clientY - n.top) * d;
        O({ x: h, y: g }), m.current.push({ path: [{ x: h, y: g }], color: E, width: $ });
      } else {
        v(true);
        const r = e.clientX - (x ? -k : k), n = e.clientY - (b ? -N : N);
        B({ x: r, y: n });
      }
    },
    /** Function to handle pointer up events. */
    handlePointerUp: () => {
      v(false), O(null);
    },
    /** Function to handle pointer move events. */
    handlePointerMove: (e) => {
      if (W === "draw" && U) {
        const r = p.current, n = r == null ? void 0 : r.getContext("2d"), l = r == null ? void 0 : r.getBoundingClientRect();
        if (!r || !n || !l) return;
        const d = r.width / l.width, h = r.height / l.height, g = (e.clientX - l.left) * d, F = (e.clientY - l.top) * h, de = m.current[m.current.length - 1].path;
        n.strokeStyle = E, n.lineWidth = $, n.lineCap = "round", n.lineJoin = "round", n.beginPath(), n.moveTo(U.x, U.y), n.lineTo(g, F), n.stroke(), O({ x: g, y: F }), de.push({ x: g, y: F });
        return;
      }
      if (M && P) {
        e.preventDefault();
        const r = e.clientX - P.x, n = e.clientY - P.y;
        H(x ? -r : r), X(b ? -n : n);
      }
    },
    /** Function to handle wheel events for zooming. */
    handleWheel: (e) => {
      e.deltaY < 0 ? le() : ce();
    },
    /** Function to download the edited image. */
    downloadImage: a,
    /** Function to generate the edited image file. */
    generateEditedFile: ue,
    /** Function to reset filters and styles to default. */
    resetFilters: () => {
      _(T), ee(f), re(G), te(J), ae(D), ne(q), oe(A), z(K), j(y), se(Q), m.current = [], H(0), X(0), B(null), v(false), ie("pan"), R();
    },
    /** Function to apply filters and transformations. */
    applyFilter: R,
    /** Function to set the mode. */
    setMode: ie,
    /** Function to set the line color. */
    setLineColor: j,
    /** Function to set the line width. */
    setLineWidth: se
  };
};
var xe = "rpe-text-gray-900 rpe-bg-white rpe-border rpe-border-gray-300 rpe-ml-2 focus:rpe-outline-hidden hover:rpe-bg-gray-100 focus:rpe-ring-4 focus:rpe-ring-gray-100 rpe-font-medium rpe-rounded-full rpe-text-sm rpe-px-2 rpe-py-1 dark:rpe-bg-gray-800 dark:rpe-text-white dark:rpe-border-gray-600 dark:hover:rpe-bg-gray-700 dark:hover:rpe-border-gray-600 dark:focus:rpe-ring-gray-700";
var Ie = ({
  file: c,
  onSaveImage: T,
  allowColorEditing: f = true,
  allowFlip: G = true,
  allowRotate: J = true,
  allowZoom: q = true,
  allowDrawing: A = true,
  downloadOnSave: K,
  open: D,
  onClose: y,
  modalHeight: Q,
  modalWidth: pe,
  canvasHeight: p,
  canvasWidth: w,
  maxCanvasHeight: L,
  maxCanvasWidth: he,
  labels: o = {
    close: "Close",
    save: "Save",
    rotate: "Rotate",
    brightness: "Brightness",
    contrast: "Contrast",
    saturate: "Saturate",
    grayscale: "Grayscale",
    reset: "Reset photo",
    flipHorizontal: "Flip photo horizontally",
    flipVertical: "Flip photo vertically",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    draw: "Draw",
    brushColor: "Choose brush color",
    brushWidth: "Choose brush width"
  }
}) => {
  const {
    canvasRef: _,
    brightness: S,
    setBrightness: ee,
    contrast: V,
    setContrast: re,
    saturate: Y,
    setSaturate: te,
    grayscale: I,
    setGrayscale: ae,
    rotate: x,
    setRotate: ne,
    flipHorizontal: b,
    setFlipHorizontal: oe,
    flipVertical: u,
    setFlipVertical: z,
    mode: M,
    setMode: v,
    setLineColor: P,
    lineColor: B,
    setLineWidth: k,
    lineWidth: H,
    isDragging: N,
    handlePointerDown: X,
    handlePointerUp: W,
    handlePointerMove: ie,
    handleWheel: U,
    handleZoomIn: O,
    handleZoomOut: E,
    resetFilters: j,
    downloadImage: $,
    generateEditedFile: se
  } = be({ file: c });
  (0, import_react.useEffect)(() => {
    j();
  }, [D]);
  const m = (a, C, le, ce) => {
    var ge;
    const Z = parseInt((ge = a.target) == null ? void 0 : ge.value);
    !isNaN(Z) && Z >= le && Z <= ce && C(Z);
  }, me = [
    {
      name: o.rotate,
      value: x,
      setValue: ne,
      min: -180,
      max: 180,
      type: "range",
      id: "rotateInput",
      "aria-labelledby": "rotateInputLabel",
      hide: !J
    },
    {
      name: o.brightness,
      value: S,
      setValue: ee,
      min: 0,
      max: 200,
      type: "range",
      id: "brightnessInput",
      "aria-labelledby": "brightnessInputLabel",
      hide: !f
    },
    {
      name: o.contrast,
      value: V,
      setValue: re,
      min: 0,
      max: 200,
      type: "range",
      id: "contrastInput",
      "aria-labelledby": "contrastInputLabel",
      hide: !f
    },
    {
      name: o.saturate,
      value: Y,
      setValue: te,
      min: 0,
      max: 200,
      type: "range",
      id: "saturateInput",
      "aria-labelledby": "saturateInputLabel",
      hide: !f
    },
    {
      name: o.grayscale,
      value: I,
      setValue: ae,
      min: 0,
      max: 100,
      type: "range",
      id: "grayscaleInput",
      "aria-labelledby": "grayscaleInputLabel",
      hide: !f
    }
  ], R = () => {
    j(), y && y();
  }, ue = async () => {
    K && $();
    const a = await se();
    a && T(a), y && y();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: D && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        "data-testid": "photo-editor-main",
        className: "photo-editor-main rpe-justify-center rpe-items-center rpe-flex rpe-overflow-auto rpe-fixed rpe-inset-0 rpe-z-50",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            style: {
              height: Q ?? "38rem",
              width: pe ?? "40rem"
            },
            id: "photo-editor-modal",
            className: "rpe-relative rpe-rounded-lg rpe-shadow-lg rpe-max-sm:w-[22rem] rpe-bg-white dark:rpe-bg-[#1e1e1e]",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rpe-flex rpe-justify-end rpe-p-2 rpe-rounded-t", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: xe, onClick: R, type: "button", children: o.close }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "button",
                  {
                    className: xe,
                    onClick: () => void ue(),
                    type: "button",
                    "data-testid": "save-button",
                    children: o.save
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rpe-p-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rpe-flex rpe-flex-col", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "canvas",
                  {
                    style: {
                      width: w ?? "auto",
                      height: p ?? "auto",
                      maxHeight: L ?? "22rem",
                      maxWidth: he ?? "36rem"
                    },
                    className: `rpe-canvas rpe-touch-none rpe-border dark:rpe-border-gray-700 rpe-object-fill rpe-mx-auto 
											${M === "draw" ? "rpe-cursor-crosshair" : N ? "rpe-cursor-grabbing" : "rpe-cursor-grab"}`,
                    "data-testid": "image-editor-canvas",
                    id: "rpe-canvas",
                    ref: _,
                    onPointerDown: X,
                    onPointerMove: ie,
                    onPointerUp: W,
                    onPointerLeave: W,
                    onWheel: U,
                    width: typeof w == "number" ? w : void 0,
                    height: typeof p == "number" ? p : void 0
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rpe-items-center rpe-flex rpe-m-1 rpe-flex-col", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rpe-flex rpe-flex-col rpe-bottom-12 rpe-gap-1 rpe-mt-4 rpe-max-sm:w-72 rpe-w-11/12 rpe-absolute ", children: me.map(
                  (a) => !a.hide && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "div",
                    {
                      className: "rpe-flex rpe-flex-row rpe-items-center",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          "label",
                          {
                            id: `${a.name}InputLabel`,
                            className: "rpe-text-xs rpe-font-medium rpe-text-gray-900 dark:rpe-text-white rpe-w-10",
                            htmlFor: a.id,
                            children: [
                              a.name[0].toUpperCase() + a.name.slice(1),
                              ":",
                              " "
                            ]
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "input",
                          {
                            id: a.id,
                            type: a.type,
                            value: a.value,
                            step: "1",
                            onChange: (C) => m(C, a.setValue, a.min, a.max),
                            min: a.min,
                            max: a.max,
                            className: "rpe-ml-[1.7rem] rpe-w-full rpe-h-1 rpe-bg-gray-200 rpe-rounded-lg rpe-appearance-none rpe-cursor-pointer rpe-range-sm dark:rpe-bg-gray-700",
                            "aria-labelledby": `${a.name}InputLabel`,
                            "aria-valuemin": a.min,
                            "aria-valuemax": a.max,
                            "aria-valuenow": a.value
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "input",
                          {
                            type: "number",
                            value: a.value,
                            onChange: (C) => m(C, a.setValue, a.min, a.max),
                            min: a.min,
                            max: a.max,
                            className: "rpe-w-14 rpe-ml-2 rpe-rounded-md rpe-text-right rpe-bg-gray-100 rpe-text-black dark:rpe-bg-gray-700 dark:rpe-text-white",
                            "aria-labelledby": `${a.name}InputLabel`,
                            "aria-valuemin": a.min,
                            "aria-valuemax": a.max,
                            "aria-valuenow": a.value
                          }
                        )
                      ]
                    },
                    a.name
                  )
                ) }) }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rpe-flex rpe-justify-center rpe-items-center rpe-content-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rpe-absolute rpe-bottom-0 rpe-mt-2 rpe-flex rpe-items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "button",
                    {
                      title: o.reset,
                      className: "rpe-mx-1 focus:rpe-ring-2 focus:rpe-ring-gray-300 dark:focus:rpe-ring-gray-700 rpe-rounded-md rpe-p-1",
                      onClick: j,
                      "aria-label": o.reset,
                      type: "button",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                        "svg",
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          className: "lucide lucide-rotate-ccw dark:rpe-stroke-slate-200",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 3v5h5" })
                          ]
                        }
                      )
                    }
                  ),
                  G && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rpe-inline-block", "data-testid": "flip-btns", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "button",
                      {
                        className: "rpe-mx-1 focus:rpe-ring-2 focus:rpe-ring-gray-300 dark:focus:rpe-ring-gray-700 rpe-rounded-md rpe-p-1",
                        onClick: () => oe(!b),
                        type: "button",
                        title: o.flipHorizontal,
                        "aria-label": o.flipHorizontal,
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          "svg",
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "lucide lucide-flip-horizontal dark:rpe-stroke-slate-200",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3" }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 20v2" }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 14v2" }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 8v2" }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2v2" })
                            ]
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "button",
                      {
                        className: "rpe-mx-1 focus:rpe-ring-2 focus:rpe-ring-gray-300 dark:focus:rpe-ring-gray-700 rpe-rounded-md rpe-p-1",
                        onClick: () => z(!u),
                        type: "button",
                        title: o.flipVertical,
                        "aria-label": o.flipVertical,
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          "svg",
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "lucide lucide-flip-vertical dark:rpe-stroke-slate-200",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 12H2" }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 12H8" }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 12h-2" }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 12h-2" })
                            ]
                          }
                        )
                      }
                    )
                  ] }),
                  q && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rpe-inline-block", "data-testid": "zoom-btns", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "button",
                      {
                        "data-testid": "zoom-in",
                        type: "button",
                        className: "rpe-mx-1 focus:rpe-ring-2 focus:rpe-ring-gray-300 dark:focus:rpe-ring-gray-700 rpe-rounded-md rpe-p-1",
                        onClick: O,
                        title: o.zoomIn,
                        "aria-label": o.zoomIn,
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          "svg",
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "lucide lucide-zoom-in dark:rpe-stroke-slate-200",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "11", cy: "11", r: "8" }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65" }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "11", x2: "11", y1: "8", y2: "14" }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "8", x2: "14", y1: "11", y2: "11" })
                            ]
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "button",
                      {
                        "data-testid": "zoom-out",
                        type: "button",
                        className: "rpe-mx-1 focus:rpe-ring-2 focus:rpe-ring-gray-300 dark:focus:rpe-ring-gray-700 rpe-rounded-md rpe-p-1",
                        onClick: E,
                        title: o.zoomOut,
                        "aria-label": o.zoomOut,
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          "svg",
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "lucide lucide-zoom-out dark:rpe-stroke-slate-200",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "11", cy: "11", r: "8" }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65" }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "8", x2: "14", y1: "11", y2: "11" })
                            ]
                          }
                        )
                      }
                    )
                  ] }),
                  A && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rpe-flex rpe-items-center", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "button",
                      {
                        "data-testid": "draw-btn",
                        type: "button",
                        className: "rpe-mx-1 focus:rpe-ring-2 focus:rpe-ring-gray-300 dark:focus:rpe-ring-gray-700 rpe-rounded-md rpe-p-1",
                        onClick: () => M == "pan" ? v("draw") : v("pan"),
                        title: o.draw,
                        "aria-label": o.draw,
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          "svg",
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "lucide lucide-brush dark:rpe-stroke-slate-200",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" })
                            ]
                          }
                        )
                      }
                    ),
                    M == "draw" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rpe-flex rpe-items-center dark:rpe-bg-zinc-600 rpe-bg-zinc-200 rpe-p-1 rpe-rounded-md", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "input",
                        {
                          type: "color",
                          onChange: (a) => P(a.target.value),
                          className: "rpe-mx-1 rpe-w-6 rpe-h-6 rpe-rounded-sm focus:rpe-ring-2 focus:rpe-ring-gray-300 dark:focus:rpe-ring-gray-700",
                          id: "rpe-brush-color",
                          value: B,
                          title: o.brushColor,
                          "aria-label": o.brushColor
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "input",
                        {
                          type: "number",
                          title: o.brushWidth,
                          "aria-label": o.brushWidth,
                          onChange: (a) => m(a, k, 2, 100),
                          className: "rpe-w-12 rpe-ml-2 rpe-rounded-md rpe-text-right rpe-bg-gray-100 rpe-text-black dark:rpe-bg-gray-700 dark:rpe-text-white rpe-mx-1 rpe-p-0 rpe-text-sm",
                          id: "rpe-brush-width",
                          value: H,
                          min: 2,
                          max: 100
                        }
                      )
                    ] })
                  ] })
                ] }) })
              ] }) })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rpe-opacity-75 rpe-fixed rpe-inset-0 rpe-z-40 rpe-bg-black" })
  ] }) });
};

// src/components/editor.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function Editor() {
  const [file, setFile] = (0, import_react2.useState)();
  const [showModal, setShowModal] = (0, import_react2.useState)(false);
  const showModalHandler = () => {
    if (file) {
      setShowModal(true);
    }
  };
  const hideModal = () => {
    setShowModal(false);
  };
  const handleSaveImage = (editedFile) => {
    setFile(editedFile);
  };
  const setFileData = (e) => {
    if (e?.target?.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { type: "file", onChange: (e) => setFileData(e), multiple: false }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { onClick: showModalHandler, children: "Edit Photo" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Ie,
      {
        open: showModal,
        onClose: hideModal,
        file,
        onSaveImage: handleSaveImage
      }
    )
  ] });
}

// src/renderer.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
function OsuiWidget() {
  const [n, setN] = (0, import_react3.usePluginState)("com.example.osui", "clicks", 0);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "div",
    {
      className: "rounded-xl border border-border bg-surface p-4",
      "data-testid": "osui-widget",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("strong", { children: "Osui" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { children: [
          "A widget injected into the host's ",
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("code", { children: "dashboard.after" }),
          " slot."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { onClick: () => setN((c) => c + 1), children: [
          "Clicked ",
          n,
          " times"
        ] })
      ]
    }
  );
}
function OsuiPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "rounded-xl border border-border bg-surface p-4", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Editor, {}) });
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
