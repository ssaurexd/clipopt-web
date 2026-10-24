import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("demo search, all filters, favorites, keyboard and language switching", async ({ page }) => {
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("./");
  await expect(page.locator(".clip")).toHaveCount(5);
  for (const [name, count] of [["Texto", 3], ["Imágenes", 1], ["Enlaces", 1], ["Favoritos", 1], ["Todo", 5]]) {
    await page.getByRole("button", { name, exact: true }).click();
    await expect(page.locator(".clip")).toHaveCount(count);
  }
  await page.locator(".clip[data-id=link] .star").click();
  await page.getByRole("button", { name: "Favoritos", exact: true }).click();
  await expect(page.locator(".clip")).toHaveCount(2);
  await page.locator(".clip[data-id=link] .star").click();
  await expect(page.locator(".clip")).toHaveCount(1);
  await expect(page.locator(".clip .star")).toBeFocused();
  await page.getByRole("button", { name: "Todo", exact: true }).click();
  const search = page.getByRole("searchbox");
  await search.fill("lavanda");
  await expect(page.locator(".clip")).toHaveCount(1);
  await search.press("Enter");
  await expect(page.locator("#demo-announcement")).toContainText("no se ha copiado");
  await search.fill("no such clip");
  await expect(page.locator(".empty")).toHaveText("No hay clips que coincidan.");
  await search.fill("");
  await search.press("ArrowDown");
  await expect(page.locator(".clip[data-id=link] .clip-body")).toBeFocused();
  await page.keyboard.press("ArrowUp");
  await expect(page.locator(".clip[data-id=idea] .clip-body")).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#demo-announcement")).toContainText("Las buenas ideas");
  await page.getByRole("button", { name: "EN", exact: true }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator(".pending")).toHaveText("Download pending");
  await expect(search).toHaveAttribute("placeholder", "Search your history…");
  await expect(page.getByRole("navigation")).toHaveAttribute("aria-label", "Main navigation");
  await expect(page).toHaveTitle(/Give your clipboard/);
  await page.getByRole("button", { name: "ES", exact: true }).click();
  await expect(page.locator(".pending")).toHaveText("Descarga pendiente");
  await expect(page.locator("h1")).toContainText("Tu portapapeles.");
  await page.locator("summary").first().click();
  await expect(page.locator("details").first()).toHaveAttribute("open", "");
  await page.locator(".primary").click();
  await expect(page).toHaveURL(/#download$/);
  expect(errors).toEqual([]);
});

for (const width of [320, 375, 768, 1440]) {
  for (const language of ["es", "en"]) {
    test(`${language} at ${width}px: no overflow, accessible controls and WCAG AA`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      const failed = [];
      page.on("response", response => { if (response.status() >= 400) failed.push(response.url()); });
      await page.goto("./");
      await page.getByRole("button", { name: language.toUpperCase(), exact: true }).click();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      for (const button of await page.locator(".filters button, .language button, .star").all()) {
        const box = await button.boundingBox();
        expect(box.width).toBeGreaterThanOrEqual(24);
        expect(box.height).toBeGreaterThanOrEqual(24);
      }
      const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
      expect(results.violations).toEqual([]);
      expect(failed).toEqual([]);
      await page.screenshot({ path: `test-results/${language}-${width}.png`, fullPage: true });
    });
  }
}

test("Spanish information and honest download status work without JavaScript", async ({ browser, baseURL }) => {
  const page = await browser.newPage({ javaScriptEnabled: false });
  await page.goto(baseURL);
  await expect(page.locator("h1")).toContainText("Tu portapapeles.");
  await expect(page.locator(".pending")).toHaveText("Descarga pendiente");
  await expect(page.locator("a[download]")).toHaveCount(0);
  await page.locator("summary").first().click();
  await expect(page.locator("details").first()).toHaveAttribute("open", "");
  await page.close();
});
