const english = {
  skip: "Skip to content", nav: "Main navigation", navFeatures: "Features", navPrivacy: "Privacy", navInstall: "Installation",
  eyebrow: "A small utility for macOS", heroTitle: "Your clipboard.",
  heroDescription: "Go back to what you copied. A history of text, images and links, right in your Mac's menu bar.",
  heroCta: "Get Clipopt for free", heroMeta: "macOS 14 or later · No accounts · No subscriptions", shortcutNote: "To open your history.",
  demoLabel: "Try the history", demoTitle: "Clipboard history", searchLabel: "Search the demonstration", searchPlaceholder: "Search your history…",
  filterLabel: "Filter demonstration", demoNavigate: "navigate", demoSelect: "view example", local: "● Local",
  demoCaption: "Interactive demo with fictional data. It does not read or change your clipboard.",
  benefits: "Benefits", strip1: "100% free", strip2: "Text + images", strip3: "History on your Mac", strip4: "Built for your keyboard",
  featuresEyebrow: "What it saves. What you can do.", featuresTitle: "There's more to your day<br>than the last ⌘ C.",
  featuresIntro: "What you copy throughout the day, kept in one place.",
  captureTitle: "Text, images and a little order.", captureBody: "Save text and images. Visually recognize links, code and colors to find what you need at a glance.",
  searchTitle: "Search or filter.", searchBody: "Search your history and filter by All, Text, Images, Links or Favorites.",
  favoriteTitle: "Keep what you use often.", favoriteBody: "Mark persistent favorites. They don't count toward your history limit and are protected from automatic trimming. The default is 1,000 regular clips; choose any positive whole-number limit.",
  appearanceTitle: "Make the panel your own.", appearanceBody: "Adjust transparency, materials, color and size. Enable compact mode and choose English or Spanish. A native app that lives in your menu bar.",
  flowEyebrow: "Three gestures, on your keyboard", flowTitle: "Copy. Find.<br>Pick up where you left off.",
  step1Title: "Open", step1Body: "Option + V brings up the floating panel right when you need it.",
  step2Title: "Find", step2Body: "Navigate with the arrow keys or search for the clip you want to bring back.",
  step3Title: "Keep going", step3Body: "Enter pastes into the previous app with Accessibility permission. Without it, the clip is copied for you to paste with Cmd + V.",
  privacyArt: "On your Mac.<br>Not in an account.", privacyNote: "No accounts · No sync", privacyEyebrow: "About your data", privacyTitle: "Your history<br>stays with you.",
  privacyBody: "Your history is stored on your Mac. No account needed, no payments and no added telemetry. No cross-device sync.",
  privacyControl: "You decide when to delete. The app asks for confirmation and lets you include or keep your favorites.",
  privacyTip: "Your history may contain sensitive information. Review what you save and delete it when you no longer need it.",
  installEyebrow: "Installation", installTitle: "From here to your menu bar.", installIntro: "Clipopt 1.0.0 is available now. All you need is your Mac with macOS 14 or later.",
  install1Title: "Download and open the ZIP", install1Body: "Download the universal ZIP for Apple Silicon and Intel. The app is signed with Developer ID and notarized by Apple.",
  install2Title: "Move Clipopt to Applications", install2Body: "Open the app and find its icon in your menu bar. Requires macOS 14 or later.",
  install3Title: "Choose how to paste", install3Body: "To paste automatically, allow Clipopt in System Settings → Privacy & Security → Accessibility. This is optional: without permission, recover your clip and paste with Cmd + V.",
  faqEyebrow: "A few more details", faqTitle: "Frequently asked questions.",
  faq1Q: "Is it really free?", faq1A: "Yes. Text, images, favorites and customization are free. No paid plans or subscriptions.",
  faq2Q: "What Mac do I need?", faq2A: "Clipopt 1.0.0 requires macOS 14 or later. The universal ZIP supports Apple Silicon (arm64) and Intel (x86_64).",
  faq3Q: "Why does it ask for Accessibility?", faq3A: "To send a paste command to the app you were working in. You don't need to grant it to recover a clip: without that permission, Clipopt copies the clip and you paste it with Cmd + V.",
  faq4Q: "Is my history uploaded to a server?", faq4A: "No. The app's history is stored locally on your Mac, without accounts or sync. This website includes no analytics or trackers; GitHub Pages serves its files and may log requests under GitHub's policy.",
  faq5Q: "Is it open source? Does it update itself?", faq5A: "The app's source code is private. The public repository distributes the website and the app ZIP. Automatic updates are not promised.",
  downloadEyebrow: "Clipopt for macOS / v1.0.0", downloadTitle: "A small utility.<br>No subscription.",
  downloadBody: "Clipopt 1.0.0 is available now, 100% free. Signed with Developer ID and notarized by Apple.",
  downloadCta: "Download Clipopt 1.0.0", downloadMeta: "macOS 14 or later · Universal: Apple Silicon (arm64) and Intel (x86_64) · ZIP",
  checksum: "Download SHA-256 checksum ↗", releases: "Read the 1.0.0 release notes on GitHub ↗", footer: "A free utility for your Mac.", websiteRepo: "Website repository ↗",
};

const labels = {
  es: { all: "Todo", text: "Texto", image: "Imágenes", link: "Enlaces", favorites: "Favoritos", empty: "No hay clips que coincidan.", add: "Marcar favorito", remove: "Quitar favorito", example: "Ejemplo seleccionado (no se ha copiado): ", favorite: "Favorito actualizado en esta demo.", title: "Clipopt — Dale memoria a tu portapapeles", description: "Clipopt: tu historial del portapapeles, siempre a mano. Una app nativa para macOS, gratuita y con historial local." },
  en: { all: "All", text: "Text", image: "Images", link: "Links", favorites: "Favorites", empty: "No matching clips.", add: "Add favorite", remove: "Remove favorite", example: "Example selected (not copied): ", favorite: "Favorite updated in this demo.", title: "Clipopt — Give your clipboard a little memory", description: "Clipopt: your clipboard history, always at hand. A free, native macOS app with local history." },
};
const clips = [
  { id: "idea", type: "text", icon: "Aa", es: "Reunión de diseño: jueves, 10:30.", en: "Design meeting: Thursday, 10:30.", meta: { es: "Texto · hace un momento", en: "Text · just now" }, favorite: true },
  { id: "link", type: "link", icon: "↗", es: "example.com/ideas", en: "example.com/ideas", meta: { es: "Enlace · hace 2 minutos", en: "Link · 2 minutes ago" }, favorite: false },
  { id: "image", type: "image", icon: "▧", es: "Atardecer en tonos lavanda", en: "A lavender sunset", meta: { es: "Imagen de ejemplo · 1200 × 800", en: "Example image · 1200 × 800" }, favorite: false },
  { id: "code", type: "text", visual: "code", icon: "{ }", es: 'let accent = "#8B7CF8"', en: 'let accent = "#8B7CF8"', meta: { es: "Código · hace 5 minutos", en: "Code · 5 minutes ago" }, favorite: false },
  { id: "color", type: "text", visual: "color", icon: "●", es: "#8B7CF8", en: "#8B7CF8", meta: { es: "Color · violeta suave", en: "Color · soft violet" }, favorite: false },
];
let language = "es";
let filter = "all";
let selectedId = clips[0].id;
const search = document.querySelector("#demo-search");
const list = document.querySelector("#demo-clips");
const filters = document.querySelector(".filters");
const announcement = document.querySelector("#demo-announcement");
const spanish = new Map();
for (const node of document.querySelectorAll("[data-i18n]")) spanish.set(node, node.innerHTML);
for (const node of document.querySelectorAll("[data-i18n-aria]")) spanish.set(node, node.getAttribute("aria-label"));
for (const node of document.querySelectorAll("[data-i18n-placeholder]")) spanish.set(node, node.getAttribute("placeholder"));

function visibleClips() {
  const query = search.value.trim().toLocaleLowerCase(language);
  return clips.filter(clip => {
    const typeMatches = filter === "all" || (filter === "favorites" ? clip.favorite : clip.type === filter);
    return typeMatches && `${clip[language]} ${clip.meta[language]}`.toLocaleLowerCase(language).includes(query);
  });
}

function selectClip(clip) {
  selectedId = clip.id;
  announcement.textContent = labels[language].example + clip[language];
  for (const row of list.children) row.classList.toggle("selected", row.dataset.id === clip.id);
}

function renderClips(focusId) {
  const visible = visibleClips();
  if (!visible.some(clip => clip.id === selectedId)) selectedId = visible[0]?.id;
  list.replaceChildren();
  if (!visible.length) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = labels[language].empty;
    list.append(empty);
  }
  for (const clip of visible) {
    const row = document.createElement("div");
    row.className = `clip${selectedId === clip.id ? " selected" : ""}`;
    row.dataset.id = clip.id;
    const body = document.createElement("button");
    body.type = "button";
    body.className = "clip-body";
    const icon = document.createElement("span");
    icon.className = `clip-icon ${clip.visual || clip.type}`;
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = clip.icon;
    const copy = document.createElement("span");
    copy.className = "clip-copy";
    const title = document.createElement("strong");
    title.textContent = clip[language];
    const meta = document.createElement("small");
    meta.textContent = clip.meta[language];
    copy.append(title, meta);
    body.append(icon, copy);
    body.addEventListener("click", () => selectClip(clip));
    body.addEventListener("focus", () => {
      selectedId = clip.id;
      for (const item of list.children) item.classList.toggle("selected", item === row);
    });
    const star = document.createElement("button");
    star.type = "button";
    star.className = "star";
    star.textContent = clip.favorite ? "★" : "☆";
    star.setAttribute("aria-pressed", String(clip.favorite));
    star.setAttribute("aria-label", `${labels[language][clip.favorite ? "remove" : "add"]}: ${clip[language]}`);
    star.addEventListener("click", () => {
      clip.favorite = !clip.favorite;
      renderClips({ id: clip.id, star: true });
      announcement.textContent = labels[language].favorite;
    });
    row.append(body, star);
    list.append(row);
  }
  if (focusId) {
    const row = [...list.children].find(item => item.dataset.id === focusId.id) || list.querySelector(".clip");
    (row?.querySelector(focusId.star ? ".star" : ".clip-body") || filters.querySelector("[aria-pressed=true]"))?.focus();
  }
}

function renderFilters() {
  filters.replaceChildren();
  for (const value of ["all", "text", "image", "link", "favorites"]) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = labels[language][value];
    button.setAttribute("aria-pressed", String(filter === value));
    button.addEventListener("click", () => {
      filter = value;
      for (const item of filters.children) item.setAttribute("aria-pressed", String(item === button));
      renderClips();
      announcement.textContent = `${labels[language][value]}: ${visibleClips().length}`;
    });
    filters.append(button);
  }
}

function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  document.title = labels[next].title;
  document.querySelector('meta[name="description"]').content = labels[next].description;
  for (const node of document.querySelectorAll("[data-i18n]")) node.innerHTML = next === "es" ? spanish.get(node) : english[node.dataset.i18n];
  for (const node of document.querySelectorAll("[data-i18n-aria]")) node.setAttribute("aria-label", next === "es" ? spanish.get(node) : english[node.dataset.i18nAria]);
  for (const node of document.querySelectorAll("[data-i18n-placeholder]")) node.setAttribute("placeholder", next === "es" ? spanish.get(node) : english[node.dataset.i18nPlaceholder]);
  for (const button of document.querySelectorAll("[data-lang]")) button.setAttribute("aria-pressed", String(button.dataset.lang === next));
  announcement.textContent = "";
  renderFilters();
  renderClips();
}

for (const button of document.querySelectorAll("[data-lang]")) button.addEventListener("click", () => setLanguage(button.dataset.lang));
search.addEventListener("input", () => {
  renderClips();
  announcement.textContent = `${visibleClips().length} ${language === "es" ? "resultados" : "results"}`;
});
document.querySelector(".demo-window").addEventListener("keydown", event => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
  if (!["ArrowDown", "ArrowUp", "Enter"].includes(event.key)) return;
  if (event.target.closest(".star, .filters")) return;
  const visible = visibleClips();
  if (!visible.length) return;
  if (event.key === "Enter") {
    if (event.target !== search) return;
    event.preventDefault();
    selectClip(visible.find(clip => clip.id === selectedId) || visible[0]);
    return;
  }
  event.preventDefault();
  const index = visible.findIndex(clip => clip.id === selectedId);
  const next = (index + (event.key === "ArrowDown" ? 1 : -1) + visible.length) % visible.length;
  selectedId = visible[next].id;
  renderClips({ id: selectedId, star: false });
});
setLanguage("es");
