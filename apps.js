// ==========================================================================
// Marmotte Dashboard – Liste aller Apps
// Hier wird festgelegt, welche Apps im Dashboard erscheinen und wohin sie führen.
//
//   key      fester App-Schlüssel (wird später auch für Rollen/SSO verwendet)
//   name     Anzeigename
//   desc     Kurzbeschreibung (nur bei Kacheln)
//   icon     Name aus marmotte-design/icons.js
//   farbe    App-Farbe (sky, emerald, amber, rose, indigo, fuchsia, violet, teal, slate, orange)
//   bereich  "kachel" = Handy & PC, "pc" = nur am PC
//   url      Adresse der App – null, solange die App noch nicht gebaut ist
// ==========================================================================

const BASIS = "https://bakerymarmotte-cmyk.github.io";

export const APPS = [
  // --- Kacheln ---
  { key: "zeit",        name: "Zeiterfassung", desc: "Arbeitszeiten erfassen", icon: "clock",         farbe: "sky",     bereich: "kachel", url: `${BASIS}/marmotte-zeiterfassung/` },
  { key: "kassensturz", name: "Kassensturz",   desc: "Bargeld zählen",         icon: "wallet",        farbe: "emerald", bereich: "kachel", url: `${BASIS}/marmotte-kassensturz/` },
  { key: "trinkgeld",   name: "Trinkgeld",     desc: "Trinkgeld verteilen",    icon: "coins",         farbe: "amber",   bereich: "kachel", url: `${BASIS}/marmotte-trinkgeld/` },
  { key: "bestellung",  name: "Bestellungen",  desc: "Bestellungen verwalten", icon: "shopping-cart", farbe: "rose",    bereich: "kachel", url: null },
  { key: "artikel",     name: "Artikel",       desc: "Sortiment & Preise",     icon: "package",       farbe: "indigo",  bereich: "kachel", url: `${BASIS}/marmotte-artikel/` },
  { key: "etikette",    name: "Etikette",      desc: "Etiketten drucken",      icon: "tag",           farbe: "fuchsia", bereich: "kachel", url: null },

  // --- Nur am PC ---
  { key: "rechnung",    name: "Rechnungen",    icon: "file-text",  farbe: "violet", bereich: "pc", url: null },
  { key: "lohn",        name: "Lohn",          icon: "banknote",   farbe: "teal",   bereich: "pc", url: null },
  { key: "buchhaltung", name: "Buchhaltung",   icon: "calculator", farbe: "slate",  bereich: "pc", url: `${BASIS}/marmotte-buchhaltung/` },
  { key: "rezept",      name: "Rezepte",       icon: "chef-hat",   farbe: "orange", bereich: "pc", url: null },
];
