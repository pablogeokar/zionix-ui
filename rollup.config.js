import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import pkg from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({ moduleDirectories: ["node_modules"] }),
      peerDepsExternal(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
    external: ['styled-components']
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [
      {
        file: "dist/index.d.ts",
        format: "esm",
      },
    ],
    plugins: [dts()],
  },
];
