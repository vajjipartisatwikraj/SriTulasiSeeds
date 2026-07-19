// Build-time prerendering: renders each route to static HTML so search
// engines (and users) receive fully-populated markup instead of an empty
// <div id="root">. Runs after `vite build` (client) and the SSR build.
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import fs from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, "dist");

// Routes to prerender. Keep in sync with src/App.tsx and public/sitemap.xml.
const routes = ["/", "/catalog", "/gallery", "/contact"];

const template = fs.readFileSync(resolve(distDir, "index.html"), "utf-8");
const { render } = await import("./dist/server/entry-server.js");

for (const url of routes) {
  const { html, head } = render(url);

  const page = template
    .replace("<!--app-head-->", head)
    .replace("<!--app-html-->", html);

  // "/" -> dist/index.html ; "/catalog" -> dist/catalog/index.html
  const outFile =
    url === "/"
      ? resolve(distDir, "index.html")
      : resolve(distDir, `.${url}/index.html`);

  fs.mkdirSync(dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, page);
  console.log(`prerendered ${url} -> ${outFile.replace(distDir, "dist")}`);
}

// The SSR bundle is only needed during prerendering; drop it from the deploy.
fs.rmSync(resolve(distDir, "server"), { recursive: true, force: true });
console.log("prerender complete");
