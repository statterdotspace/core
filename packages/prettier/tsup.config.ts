import { defineConfig } from "tsup"

export default defineConfig([
  {
    entry: ["src/index.ts"],
    format: "esm",
    outDir: "dist/esm",
    dts: true,
    clean: true,
    target: "esnext"
  },
  {
    entry: ["src/index.ts"],
    format: "cjs",
    outDir: "dist/cjs",
    dts: true,
    clean: true,
    target: "esnext"
  }
])
