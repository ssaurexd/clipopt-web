import { createServer } from "node:http";
import { readFile } from "node:fs/promises";

const files = new Map([
  ["/clipopt-web/", ["index.html", "text/html; charset=utf-8"]],
  ["/clipopt-web/styles.css", ["styles.css", "text/css"]],
  ["/clipopt-web/app.js", ["app.js", "text/javascript"]],
  ["/clipopt-web/assets/icon.svg", ["assets/icon.svg", "image/svg+xml"]],
]);
createServer(async (request, response) => {
  const file = files.get(new URL(request.url, "http://localhost").pathname);
  if (!file) return response.writeHead(404).end("Not found");
  try {
    const data = await readFile(new URL(`../${file[0]}`, import.meta.url));
    response.writeHead(200, { "Content-Type": file[1] }).end(data);
  } catch (error) {
    console.error(error);
    response.writeHead(500).end("Unable to read website asset");
  }
}).listen(8089, "127.0.0.1");
