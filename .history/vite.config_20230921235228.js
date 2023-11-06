import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    host: "127.0.0.1",
    port: 20909,
    cors: true,
    proxy: {
      "/socket.io": {
        target: "ws://127.0.0.1:11018",
        changeOrigin: true,
        ws: true,
        rewrite:path => 
      },
    },
  },
});
