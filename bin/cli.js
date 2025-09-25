#!/usr/bin/env node
import { Plop, run } from "plop";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

Plop.prepare(
  {
    cwd: process.cwd(),
    configPath: path.join(__dirname, "../plopfile.js"),
    preload: [],
    completion: "",
  },
  (env) => {
    const options = {
      ...env,
      dest: process.cwd(),
    };
    return run(options, env);
  }
);
