import { defineConfig } from "vite";
import { resolve } from "path";
const root = resolve(__dirname, "src");
const rootPages = resolve(root, "pages");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input:{
        index: resolve(root, "index.html"),
        frontPrimerPaso:resolve(rootPages, "frontPrimerPaso/index.html"),
        actividad001: resolve(rootPages, "actividad001/act.html"),
  
      }
    },
  },
    assetsDir: "img",
    assetsInclude: [
      "./interpreter/acorn.js",
      "./interpreter/interpreter.js",
      "**/*.css?type=text/css",
    ],
    base: "/dhs_3wsp/",
    publicDir: "../public"
});
// export default defineConfig({
//   root,
//   build: {
//     outDir,
//     emptyOutDir: true,
//     rollupOptions: {
//       input:{
//         main: resolve(root, "main.js"),
//         frontPrimerPaso:(root, "pages", "frontPrimerPaso", "index.html"),
//         actividad001: resolve(root, "pages", "actividad001", "act.html"),
  
//       }
//     },
//   },
//     assetsDir: "img",
//     assetsInclude: [
//       "./interpreter/acorn.js",
//       "./interpreter/interpreter.js",
//       "**/*.css?type=text/css",
//     ],
//     base: "/dhs_3wsp/",
// });