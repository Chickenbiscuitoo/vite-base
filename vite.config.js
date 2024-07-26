import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"; // https://www.npmjs.com/package/vite-plugin-image-optimizer
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        outDir: "build",
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "src/main.js"),
                style: path.resolve(__dirname, "src/style.scss"),
            },
            output: {
                entryFileNames: "index.js",
                assetFileNames: "style.css",
            },
        },
    },
    plugins: [ViteImageOptimizer()],
});
