import { type Options, defineConfig } from "tsup";

import { solidPlugin } from "esbuild-plugin-solid";

const generateConfig = (jsx: boolean): Options => {
    return {
        target: "esnext",
        platform: "browser",
        format: "esm",
        clean: true,
        dts: true,
        entry: ["lib/index.tsx", "lib/**/*/index.tsx"],
        injectStyle: true,
        outDir: "dist/",
        treeshake: { preset: "smallest" },
        replaceNodeEnv: true,
        minify: true,
        esbuildOptions(options) {
            if (jsx) {
                options.jsx = "preserve";
            }
            options.chunkNames = "[name]/[hash]";
            options.drop = ["console", "debugger"];
        },
        outExtension() {
            return jsx ? { js: ".jsx" } : {};
        },
        esbuildPlugins: !jsx ? [solidPlugin({ solid: { generate: "dom" } })] : [],
    };
};

export default defineConfig([generateConfig(true)]);
