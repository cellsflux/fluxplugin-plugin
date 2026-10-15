import { definePlugin } from "fluxplugin";

export default definePlugin({
  onActivate(ctx) {
    ctx.logger.info("Osui (main) activated");
  },
});
