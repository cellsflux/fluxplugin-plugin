import { definePlugin } from "fluxplugin";
import { usePluginState } from "fluxplugin/react";

function HelloWidget() {
  const [n, setN] = usePluginState("com.example.hello", "clicks", 0);
  return (
    <div className="hello-card" data-testid="hello-widget">
      <strong>Hello</strong>
      <p>A widget injected into the host's <code>dashboard.after</code> slot.</p>
      <button onClick={() => setN((c) => c + 1)}>Clicked {n} times</button>
    </div>
  );
}

function HelloPage() {
  return <div className="hello-card"><h1>Hello</h1><p>Registered at runtime by a plugin.</p></div>;
}

export default definePlugin({
  routes: [{ path: "/hello", lazy: async () => ({ default: HelloPage }), meta: { title: "Hello", breadcrumb: "Hello", menu: { label: "Hello" } } }],
  components: [{ slot: "dashboard.after", component: HelloWidget, priority: 10 }],
  commands: [{ id: "hello.hello", title: "Hello: say hello", category: "Hello", execute: () => console.log("Hello from Hello!") }],
  // Application menu: adds a top-level "Hello" menu to the title bar (File/Edit-style). Shortcuts come from the command's keybinding.
  menus: [{ id: "hello.menu", location: "application", label: "Hello", order: 50,
    children: [{ id: "hello.menu.open", label: "Open Hello", path: "/hello" }, { id: "hello.menu.hello", label: "Say hello", command: "hello.hello" }] }],
  // Title-bar search: your results appear next to commands and pages.
  extensions: [
    { point: "dashboard", contribution: { toolbar: [{ id: "hello-hello", label: "Hello: hello", command: "hello.hello" }] } },
    { point: "titlebar", contribution: { searchProviders: [{ id: "hello.search", label: "Hello",
      search: (q: string) => ("hello".includes(q.toLowerCase()) ? [{ id: "hello.r1", title: "Open Hello", subtitle: "page", run: () => { location.hash = "#/hello"; } }] : []) }] } },
  ],
  // A theme: tokens are CSS variables; the user picks it in the title bar.
  // { point: "theme", contribution: { themes: [{ id: "hello.ocean", label: "Ocean", dark: true, tokens: { "--flux-bg": "#06202b", "--flux-surface": "#0a2c3a", "--flux-fg": "#e6f6ff", "--flux-border": "#14465a", "--flux-accent": "#22d3ee" } }] } },
  onActivate(ctx) {
    ctx.notifications.push({ title: "Hello is ready", body: "Open the title-bar bell to see this notification.", level: "success" });
  },
});
