import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
/* @ts-ignore */
import mdx from "@vinxi/plugin-mdx";

export default defineConfig({
  extensions: ["mdx", "md"],
  vite: {
    plugins: [
      tailwindcss(),
      mdx.default.withImports({})({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
      }),
    ],
  },
});
