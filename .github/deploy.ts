#!/usr/bin/env -S deno run -A --no-check --no-config --unstable

const SERVER_URL = import.meta.resolve("../serve.ts");

Deno.spawnSync(Deno.execPath(), {
  args: [
    "run",
    "-A",
    "--no-check",
    "--no-config",
    "https://deno.land/x/deploy@1.3.0/deployctl.ts",
    "deploy",
    "--prod",
    "--no-static",
    "--project=curtis-wiki",
    SERVER_URL,
  ],
  cwd: new URL("../", import.meta.url),
  stdout: "inherit",
  stderr: "inherit",
});
