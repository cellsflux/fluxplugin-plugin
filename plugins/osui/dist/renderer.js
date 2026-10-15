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
var import_react6 = __toESM(require_react(), 1);

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
  const [imageSrc, setImageSrc] = (0, import_react2.useState)(null);
  const handleFileChange = (eve) => {
    const file = eve.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Veuillez s\xE9lectionner un fichier image.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      alert("L'image est trop volumineuse (max 10 Mo).");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageSrc(e.target.result);
    };
    reader.readAsDataURL(file);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: handleFileChange,
        style: { marginBottom: 16 }
      }
    ),
    imageSrc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ImageEditor,
      {
        ref: editorRef,
        image: imageSrc,
        minHeight: "700px",
        options: {
          theme: "light",
          locale: "fr",
          projectId: 1234
        },
        onSave: ({ dataUrl, blob }) => {
          console.info("Image enregistr\xE9e :", dataUrl.length, "octets");
        },
        onCancel: () => {
          setImageSrc(null);
        },
        onLoadError: () => {
          console.error("\xC9chec du chargement de l'image");
        },
        onError: (error) => {
          console.error("Erreur de l'\xE9diteur :", error);
        }
      }
    )
  ] });
};

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/createLucideIcon.mjs
var import_react5 = __toESM(require_react2(), 1);

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs
var toKebabCase = (string) => string?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs
function toLucideIconData(iconName, iconNode, aliases = []) {
  if (iconNode == null) {
    throw new Error("[lucide]: iconNode is required when icon name is used");
  }
  return {
    name: toKebabCase(iconName),
    size: 24,
    node: iconNode,
    ...aliases.length > 0 ? { aliases } : {}
  };
}

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs
var toCamelCase = (string) => {
  let out = "";
  let upperNext = false;
  for (const ch of string) {
    if (ch === "-" || ch === "_" || ch <= " ") {
      upperNext = out.length > 0;
      continue;
    }
    if (out.length === 0) {
      out += ch.toLowerCase();
    } else {
      out += upperNext ? ch.toUpperCase() : ch;
    }
    upperNext = false;
  }
  return out;
};

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs
var toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/Icon.mjs
var import_react4 = __toESM(require_react2(), 1);

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs
function isDefined(value) {
  return value !== null && value !== void 0;
}
function buildLucideIconNode(icon, params = {}) {
  const attributeNames = params.attributeNames ?? {};
  const getAttributeName = (attributeName) => attributeNames[attributeName] ?? attributeName;
  const viewBoxWidth = icon.size ?? icon.width ?? defaultAttributes["width"];
  const viewBoxHeight = icon.size ?? icon.height ?? defaultAttributes["height"];
  const aliasClassNames = icon.aliases?.filter((alias) => typeof alias === "string" && alias.trim() !== "").map((alias) => `lucide-${alias}`) ?? [];
  const iconClassNames = [...icon.name ? [`lucide-${icon.name}`] : [], ...aliasClassNames];
  const classNamesFromClassName = params.className?.split(" ").filter(Boolean) ?? [];
  const className = params.includeDefaultClasses === false ? mergeClasses(...classNamesFromClassName) : mergeClasses("lucide", ...iconClassNames, ...classNamesFromClassName);
  const calculatedStrokeWidth = params.absoluteStrokeWidth ? Number(params.strokeWidth ?? defaultAttributes["stroke-width"]) * Number(icon.size ?? icon.width ?? defaultAttributes["width"]) / Number(params.size ?? params.width ?? defaultAttributes["width"]) : params.strokeWidth ?? defaultAttributes["stroke-width"];
  const attributes = {
    ...Object.entries(defaultAttributes).reduce((attrs, [attrName, value]) => {
      attrs[getAttributeName(attrName)] = value;
      return attrs;
    }, {}),
    ..."color" in params && params.color && {
      [getAttributeName("stroke")]: params.color
    },
    ..."size" in params && isDefined(params.size) && {
      [getAttributeName("width")]: params.size,
      [getAttributeName("height")]: params.size
    },
    ..."width" in params && isDefined(params.width) && {
      [getAttributeName("width")]: params.width
    },
    ..."height" in params && isDefined(params.height) && {
      [getAttributeName("height")]: params.height
    },
    [getAttributeName("stroke-width")]: calculatedStrokeWidth,
    ...className && {
      [getAttributeName("class")]: className
    },
    [getAttributeName("viewBox")]: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
    ...params.hasA11yProp === false ? {
      [getAttributeName("aria-hidden")]: "true"
    } : {},
    ..."attributes" in params && params.attributes
  };
  return [
    "svg",
    attributes,
    icon.node.map((child) => {
      const [name, attrs, children] = child;
      const nextAttrs = params.nonScalingStroke ? { [getAttributeName("vector-effect")]: "non-scaling-stroke", ...attrs } : attrs;
      return children ? [name, nextAttrs, children] : [name, nextAttrs];
    })
  ];
}

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs
function buildLucideIconForReact(icon, params = {}) {
  return buildLucideIconNode(icon, {
    ...params,
    attributeNames: {
      ...params.attributeNames,
      class: "className",
      "stroke-width": "strokeWidth",
      "stroke-linecap": "strokeLinecap",
      "stroke-linejoin": "strokeLinejoin",
      "vector-effect": "vectorEffect"
    }
  });
}

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs
var hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/context.mjs
var import_react3 = __toESM(require_react2(), 1);
var LucideContext = (0, import_react3.createContext)({});
var useLucideContext = () => (0, import_react3.useContext)(LucideContext);

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/Icon.mjs
var Icon = (0, import_react4.forwardRef)(
  ({
    color,
    size,
    width,
    height,
    strokeWidth,
    absoluteStrokeWidth,
    nonScalingStroke,
    className = "",
    children,
    iconNode = [],
    icon = {
      node: iconNode,
      aliases: [],
      size: 24
    },
    ...rest
  }, ref) => {
    const {
      size: contextSize = 24,
      strokeWidth: contextStrokeWidth = 2,
      absoluteStrokeWidth: contextAbsoluteStrokeWidth = false,
      nonScalingStroke: contextNonScalingStroke = false,
      color: contextColor = "currentColor",
      className: contextClass = ""
    } = useLucideContext() ?? {};
    const hasAccessibleProp = Boolean(children) || hasA11yProp(rest);
    const [name, svgAttributes, builtIconNode = []] = buildLucideIconForReact(icon, {
      color: color ?? contextColor,
      width: width ?? size ?? contextSize,
      height: height ?? size ?? contextSize,
      strokeWidth: strokeWidth ?? contextStrokeWidth,
      absoluteStrokeWidth: absoluteStrokeWidth ?? contextAbsoluteStrokeWidth,
      nonScalingStroke: nonScalingStroke ?? contextNonScalingStroke,
      className: mergeClasses(contextClass, className),
      hasA11yProp: hasAccessibleProp,
      attributes: rest
    });
    return (0, import_react4.createElement)(
      name,
      {
        ref,
        ...svgAttributes
      },
      [
        ...builtIconNode.map(([tag, attrs]) => (0, import_react4.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/createLucideIcon.mjs
function createLucideIcon(iconDataOrName, iconNode = [], aliases = []) {
  const iconData = typeof iconDataOrName === "string" ? toLucideIconData(iconDataOrName, iconNode, aliases) : iconDataOrName;
  const Component = (0, import_react5.forwardRef)(
    ({ className, ...props }, ref) => (0, import_react5.createElement)(Icon, {
      ref,
      icon: iconData,
      className,
      ...props
    })
  );
  if (iconData.name) {
    Component.displayName = toPascalCase(iconData.name);
  }
  return Component;
}

// node_modules/.pnpm/lucide-react@1.57.0_@types+react@19.3.0_react@19.3.1/node_modules/lucide-react/dist/esm/icons/camera.mjs
var __iconData = {
  name: "camera",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
        key: "18u6gg"
      }
    ],
    ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
  ]
};
__iconData.node;
var Camera = createLucideIcon(__iconData);

// src/renderer.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function OsuiWidget() {
  const [n, setN] = (0, import_react6.usePluginState)("com.example.osui", "clicks", 0);
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
      meta: {
        title: "Osui",
        breadcrumb: "Osui",
        menu: { label: "Osui" },
        icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Camera, {})
      }
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
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs:
lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs:
lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs:
lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs:
lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs:
lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs:
lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs:
lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs:
lucide-react/dist/esm/context.mjs:
lucide-react/dist/esm/Icon.mjs:
lucide-react/dist/esm/createLucideIcon.mjs:
lucide-react/dist/esm/icons/camera.mjs:
lucide-react/dist/esm/lucide-react.mjs:
  (**
   * @license lucide-react v1.57.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
