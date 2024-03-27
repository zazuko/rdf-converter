/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import rollupNodePolyFill from "rollup-plugin-node-polyfills";
import rawPlugin from "vite-raw-plugin";

export default defineConfig({
  root: "src",

  define: {
    global: "window",
  },
  server: {
    hmr: false,
  },
  plugins: [
    rawPlugin({
      fileRegex: /\.nq$/,
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
      ],
    },
  },
  build: {
    rollupOptions: {
      plugins: [rollupNodePolyFill()],
    },
  },
});
