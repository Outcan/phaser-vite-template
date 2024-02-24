import { viteStaticCopy } from "vite-plugin-static-copy";

export default {
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "./",
    assetsInlineLimit: 0,
    emptyOutDir: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true
      },
      format: {
        comments: false
      }
    }
  },
  plugins: [
    viteStaticCopy({
      targets: [{ src: "assets/*", dest: "assets" }]
    })
  ],
  server: {
    port: 8082
  }
};
