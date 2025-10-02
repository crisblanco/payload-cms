// open-next.config.mjs
import { defineCloudflareConfig } from '@opennextjs/cloudflare/config'

export default defineCloudflareConfig({
  cloudflare: {
    // Split the big worker into smaller ones per route
    functionPerRoute: true,
  },
})
