// open-next.config.mjs
/** @type {import('@opennextjs/cloudflare').Config} */
export default {
  cloudflare: {
    // Break the single giant Worker into many small per-route Workers.
    functionPerRoute: true,
  },
}
