import { APPS } from "./apps.js";

// Begrüssung nach Tageszeit
const h = new Date().getHours();
document.getElementById("greet").textContent =
  h < 11 ? "Guten Morgen" : h < 18 ? "Guten Tag" : "Guten Abend";

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Kacheln (Handy & PC)
document.getElementById("tiles").innerHTML = APPS.filter((a) => a.bereich === "kachel")
  .map((a) => {
    const inner = `
      ${a.url ? "" : '<span class="soon tile-soon">Bald</span>'}
      <div class="m-tint m-tint-${a.farbe}"><i data-icon="${a.icon}"></i></div>
      <div class="tile-name">${esc(a.name)}</div>
      <div class="tile-desc">${esc(a.desc)}</div>`;
    return a.url
      ? `<a class="tile" href="${a.url}">${inner}</a>`
      : `<div class="tile is-soon" aria-disabled="true">${inner}</div>`;
  })
  .join("");

// Nur am PC
document.getElementById("pc-list").innerHTML = APPS.filter((a) => a.bereich === "pc")
  .map((a) => {
    const inner = `
      <div class="m-tint m-tint-${a.farbe} small"><i data-icon="${a.icon}" data-size="18"></i></div>
      <span class="pc-name">${esc(a.name)}</span>
      ${a.url ? '<i data-icon="chevron-right" data-size="18" class="m-faint"></i>' : '<span class="soon">Bald</span>'}`;
    return a.url
      ? `<a class="pc-item" href="${a.url}">${inner}</a>`
      : `<div class="pc-item is-soon" aria-disabled="true">${inner}</div>`;
  })
  .join("");

// Service Worker (installierbar als App, Grundgerüst offline)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch((err) => {
      console.warn("Service Worker konnte nicht registriert werden:", err);
    });
  });
}
