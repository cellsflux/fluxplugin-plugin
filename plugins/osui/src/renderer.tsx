import { definePlugin } from "fluxplugin";
import { usePluginState } from "fluxplugin/react";
import moment from "moment";
import { Editor } from "./components/editor";

function OsuiWidget() {
  const [n, setN] = usePluginState("com.example.osui", "clicks", 0);

  return (
    <div
      className="rounded-xl border border-border bg-surface p-4"
      data-testid="osui-widget"
    >
      <strong>Osui</strong>
      <p>
        A widget injected into the host's <code>dashboard.after</code> slot.
      </p>
      <button onClick={() => setN((c) => c + 1)}>Clicked {n} times</button>
    </div>
  );
}

function OsuiPage() {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <Editor />
    </div>
  );
}

export default definePlugin({
  routes: [
    {
      path: "/osui",
      lazy: async () => ({ default: OsuiPage }),
      meta: { title: "Osui", breadcrumb: "Osui", menu: { label: "Osui" } },
    },
  ],
  components: [
    { slot: "dashboard.after", component: OsuiWidget, priority: 10 },
  ],
  commands: [
    {
      id: "osui.hello",
      title: "Osui: say hello",
      category: "Osui",
      execute: () => console.log("Hello from Osui!"),
    },
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
        { id: "osui.menu.hello", label: "Say hello", command: "osui.hello" },
      ],
    },
  ],
  // Title-bar search: your results appear next to commands and pages.
  extensions: [
    {
      point: "dashboard",
      contribution: {
        toolbar: [
          { id: "osui-hello", label: "Osui: hello", command: "osui.hello" },
        ],
      },
    },
    {
      point: "titlebar",
      contribution: {
        searchProviders: [
          {
            id: "osui.search",
            label: "Osui",
            search: (q: string) =>
              "osui".includes(q.toLowerCase())
                ? [
                    {
                      id: "osui.r1",
                      title: "Open Osui",
                      subtitle: "page",
                      run: () => {
                        location.hash = "#/osui";
                      },
                    },
                  ]
                : [],
          },
        ],
      },
    },
  ],
  // A theme: tokens are CSS variables; the user picks it in the title bar.
  // { point: "theme", contribution: { themes: [{ id: "osui.ocean", label: "Ocean", dark: true, tokens: { "--flux-bg": "#06202b", "--flux-surface": "#0a2c3a", "--flux-fg": "#e6f6ff", "--flux-border": "#14465a", "--flux-accent": "#22d3ee" } }] } },
  onActivate(ctx) {
    ctx.notifications.push({
      title: "Osui is ready",
      body: "Open the title-bar bell to see this notification.",
      level: "success",
    });
  },
});
