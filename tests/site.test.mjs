import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import vm from "node:vm";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const js = await readFile(new URL("../app.js", import.meta.url), "utf8");

test("every translated surface has English copy", () => {
  const dictionarySource = js.slice(0, js.indexOf("const clips ="));
  const { english, labels } = vm.runInNewContext(`${dictionarySource}\n({ english, labels })`);
  for (const match of html.matchAll(/data-i18n(?:-aria|-placeholder)?="([^"]+)"/g)) {
    assert.equal(typeof english[match[1]], "string", match[1]);
    assert.ok(english[match[1]].length);
  }
  for (const key of Object.keys(labels.es)) assert.ok(labels.en[key], key);
  assert.equal(Object.keys(labels.es).length, Object.keys(labels.en).length);
});

test("local asset and fragment links resolve under a project subpath", async () => {
  const base = new URL("https://ssaurexd.github.io/clipopt-web/");
  for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const target = match[1];
    if (target.startsWith("#")) {
      assert.ok(html.includes(`id="${target.slice(1)}"`), target);
    } else if (!target.startsWith("https:")) {
      assert.ok(new URL(target, base).pathname.startsWith("/clipopt-web/"));
      await access(new URL(`../${target}`, import.meta.url));
    }
  }
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(ids.length, new Set(ids).size);
});

test("distribution is honestly pending and demo cannot access the clipboard", () => {
  assert.match(html, /Descarga pendiente/);
  assert.doesNotMatch(html, /href="[^"]+\.(zip|dmg)"/i);
  assert.doesNotMatch(html, /\sdownload[=\s>]/);
  assert.doesNotMatch(js, /navigator\.clipboard|execCommand|localStorage|sessionStorage|fetch\(/);
  assert.match(html, /datos ficticios/);
  assert.match(html, /El código de la app es privado/);
  assert.match(html, /macOS 14/);
});

test("scripts, styles and assets are self-hosted", async () => {
  assert.doesNotMatch(html, /<(?:script|link)[^>]+(?:src|href)="https?:/);
  const css = await readFile(new URL("../styles.css", import.meta.url), "utf8");
  assert.doesNotMatch(css, /@import|https?:/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(html, /aria-live="polite"/);
});
