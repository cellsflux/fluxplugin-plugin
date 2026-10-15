import { definePlugin } from "fluxplugin";

export default definePlugin({
  onActivate(ctx) {
    ctx.logger.info("Hello (main) activated");
  },
});
