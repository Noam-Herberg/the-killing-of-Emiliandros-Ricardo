const params = new URLSearchParams(window.location.search);
const characterId = params.get("id") || "hogan-reams";
const character = characters.find((item) => item.id === characterId) || characters[0];
const baseSheet = characterSheets[character.id] || characterSheets["hogan-reams"];
const storageKey = `ricardoDashboard:${character.id}`;

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadSheet() {
  const saved = localStorage.getItem(storageKey);
  return saved ? JSON.parse(saved) : clone(baseSheet);
}

let activeSheet = loadSheet();

function field(name, value, type = "text") {
  return `
    <label class="field-control">
      <span>${name}</span>
      <input data-field="${name}" type="${type}" value="${value}">
    </label>
  `;
}

function renderStats() {
  const statEditor = document.querySelector("#statEditor");
  statEditor.innerHTML = Object.entries(activeSheet.stats)
    .map(([name, value]) => field(name, value, "number"))
    .join("");
}

function renderResources() {
  const resourceEditor = document.querySelector("#resourceEditor");
  resourceEditor.innerHTML = Object.entries(activeSheet.resources)
    .map(([name, value]) => field(name, value, "number"))
    .join("");
}

function renderWeapons() {
  const rows = activeSheet.weapons
    .map(
      (weapon, index) => `
        <tr>
          ${["name", "class", "range", "rof", "damage", "pen", "clip", "reload", "special"]
            .map((key) => `<td><input data-weapon="${index}" data-weapon-field="${key}" value="${weapon[key] || ""}"></td>`)
            .join("")}
        </tr>
      `
    )
    .join("");

  document.querySelector("#weaponEditor").innerHTML = `
    <thead>
      <tr>
        <th>Weapon</th>
        <th>Class</th>
        <th>Range</th>
        <th>RoF</th>
        <th>Damage</th>
        <th>Pen</th>
        <th>Clip</th>
        <th>Reload</th>
        <th>Special</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  `;
}

function renderTagEditor(id, values) {
  document.querySelector(id).innerHTML = values
    .map(
      (value, index) => `
        <label class="tag-field">
          <input data-list="${id.slice(1)}" data-index="${index}" value="${value}">
        </label>
      `
    )
    .join("");
}

function renderDashboard() {
  document.querySelector("#dashboardName").textContent = character.name;
  document.querySelector("#dashboardTitle").textContent = character.name;
  document.querySelector("#dashboardRole").textContent = character.role;
  document.querySelector("#dashboardMeta").textContent = `${activeSheet.meta.homeWorld} | ${activeSheet.meta.background} | ${activeSheet.meta.role} | ${activeSheet.meta.armour}`;
  document.querySelector("#dashboardBack").href = `character.html?id=${encodeURIComponent(character.id)}`;
  document.querySelector("#dashboardPortrait").innerHTML = `<img src="${character.image}" alt="${character.name}">`;
  document.querySelector("#dashboardNotes").value = activeSheet.notes || "";

  renderStats();
  renderResources();
  renderWeapons();
  renderTagEditor("#skillEditor", activeSheet.skills);
  renderTagEditor("#talentEditor", activeSheet.talents);
  renderTagEditor("#gearEditor", activeSheet.gear);
}

function collectDashboard() {
  document.querySelectorAll("#statEditor [data-field]").forEach((input) => {
    activeSheet.stats[input.dataset.field] = Number(input.value);
  });

  document.querySelectorAll("#resourceEditor [data-field]").forEach((input) => {
    activeSheet.resources[input.dataset.field] = Number(input.value);
  });

  document.querySelectorAll("[data-weapon]").forEach((input) => {
    activeSheet.weapons[Number(input.dataset.weapon)][input.dataset.weaponField] = input.value;
  });

  const lists = {
    skillEditor: "skills",
    talentEditor: "talents",
    gearEditor: "gear"
  };

  Object.entries(lists).forEach(([editorId, sheetKey]) => {
    activeSheet[sheetKey] = Array.from(document.querySelectorAll(`[data-list="${editorId}"]`))
      .map((input) => input.value.trim())
      .filter(Boolean);
  });

  activeSheet.notes = document.querySelector("#dashboardNotes").value;
}

function saveDashboard() {
  collectDashboard();
  localStorage.setItem(storageKey, JSON.stringify(activeSheet));
  document.querySelector("#saveNote").textContent = "Saved in this browser.";
}

function resetDashboard() {
  activeSheet = clone(baseSheet);
  localStorage.removeItem(storageKey);
  renderDashboard();
  document.querySelector("#saveNote").textContent = "Reset to starting sheet.";
}

document.querySelector("#saveDashboard").addEventListener("click", saveDashboard);
document.querySelector("#resetDashboard").addEventListener("click", resetDashboard);

renderDashboard();
