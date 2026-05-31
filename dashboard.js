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
  if (!saved) {
    return clone(baseSheet);
  }

  const parsed = JSON.parse(saved);
  return {
    ...clone(baseSheet),
    ...parsed,
    meta: { ...clone(baseSheet.meta), ...(parsed.meta || {}) },
    stats: { ...clone(baseSheet.stats), ...(parsed.stats || {}) },
    resources: { ...clone(baseSheet.resources), ...(parsed.resources || {}) },
    weapons: parsed.weapons || clone(baseSheet.weapons),
    skills: parsed.skills || clone(baseSheet.skills),
    talents: parsed.talents || clone(baseSheet.talents),
    gear: parsed.gear || clone(baseSheet.gear),
    psychicPowers: parsed.psychicPowers || clone(baseSheet.psychicPowers || [])
  };
}

let activeSheet = loadSheet();

const dashboardTalentEffects = {
  "Air of Authority": "When making Command tests, may affect extra targets equal to Fellowship bonus. Good for directing groups under pressure.",
  "Ambidextrous": "Reduces penalties for using the off hand. Useful for two-weapon fighting or handling gear while armed.",
  "Berserk Charge": "Gains +10 Weapon Skill when charging.",
  "Binary Chatter": "Gains +10 to interact with servitors, servo-skulls, and similar machine servants.",
  "Catfall": "Reduces falling damage and improves control when dropping or landing.",
  "Combat Formation": "May use Intelligence bonus for Initiative rolls, and allies may benefit if coordinated before combat.",
  "Deadeye Shot": "Reduces called-shot penalties by 10.",
  "Heightened Senses (Hearing)": "Gains +10 to tests relying on hearing.",
  "Iron Jaw": "May test Toughness to ignore being Stunned.",
  "Mechanicus Implants": "Has the standard Tech-Priest implants and counts as a servant of the Machine God for relevant rules and gear.",
  "Nerves of Steel": "May reroll failed Willpower tests to avoid or recover from Pinning.",
  "Psy Rating 2": "Psyker power level 2. Used when manifesting psychic powers and determining psychic strength.",
  "Quick Draw": "Can ready a pistol, basic weapon, or one-handed melee weapon as a Free Action.",
  "Rapid Reload": "Halves reload times, rounding down.",
  "Resistance (Fear)": "Gains +10 to resist Fear tests.",
  "Sanctioned Psyker": "Legally sanctioned Imperial psyker. Can use psychic powers, but still risks Perils of the Warp.",
  "Strong Minded": "May reroll failed Willpower tests to resist psychic powers that affect the mind.",
  "Technical Knock": "Once per round, may unjam a weapon as a Half Action.",
  "Warp Sense": "May use Psyniscience as a Free Action and perceive warp disturbances more readily.",
  "Weapon Training": "Can use the listed weapon groups without the untrained weapon penalty."
};

const dashboardSkillDetails = {
  Acrobatics: "Used for balance, tumbling, escaping bonds, and reducing hazards from movement.",
  Athletics: "Used for climbing, swimming, jumping, lifting, and feats of physical force.",
  Awareness: "Used to notice danger, hidden details, ambushes, suspicious behavior, and environmental clues.",
  Charm: "Used to persuade, befriend, flatter, and improve an NPC's attitude.",
  Command: "Used to issue orders, coordinate allies, intimidate troops into discipline, and control groups.",
  "Common Lore": "Knowledge of common Imperial institutions, cultures, places, or professions. Specific field matters.",
  Deceive: "Used to lie, disguise intent, misdirect, and maintain false identities.",
  Dodge: "Reaction skill used to avoid attacks, blasts, falling hazards, and other immediate danger.",
  "Forbidden Lore": "Dangerous or restricted knowledge. Specific field determines what secrets the character understands.",
  Inquiry: "Used to gather information through conversation, rumor, questioning, and local investigation.",
  Interrogation: "Used to extract information through pressure, threats, pain, or formal questioning.",
  Intimidate: "Used to coerce, threaten, frighten, or force compliance.",
  Linguistics: "Used to understand, read, or communicate in specific languages or coded forms.",
  Logic: "Used for deduction, puzzles, pattern analysis, ciphers, and structured reasoning.",
  Medicae: "Used for first aid, treating injuries, diagnosing illness, and stabilizing the dying.",
  Navigate: "Used to find routes, avoid becoming lost, and interpret maps or terrain.",
  Operate: "Used to drive or pilot vehicles of the listed type.",
  Psyniscience: "Used to sense psychic phenomena, warp disturbances, daemonic traces, and active powers.",
  Scrutiny: "Used to read people, detect lies, notice suspicious motives, and assess emotional states.",
  Security: "Used to pick locks, bypass alarms, defeat restraints, and handle physical security systems.",
  "Scholastic Lore": "Formal academic knowledge. Specific field determines the useful facts.",
  "Sleight of Hand": "Used to palm objects, pick pockets, conceal small items, and perform subtle manual tricks.",
  Stealth: "Used to hide, move quietly, shadow targets, and avoid detection.",
  Survival: "Used to track, forage, endure hostile environments, and read wilderness or underhive signs.",
  "Tech-Use": "Used to repair, understand, activate, sabotage, or interface with machines and cogitators.",
  Trade: "Professional craft or technical practice. Specific field determines what work can be done."
};

const dashboardGearDetails = {
  "Armoured bodyglove": "Concealable protective undersuit, useful when heavier armour would draw attention.",
  "Armoured undersuit": "Protective layer worn beneath robes or clothing.",
  "Badge, officially off-case": "Cali's enforcer authority, politically dangerous because she has no official backing here.",
  "Blindfold": "Psykana restraint or focus tool; useful for unsettling people and ritual discipline.",
  "Breaching tools": "Tools for forcing doors, locks, panels, vents, and barricades.",
  "Cargo chains": "Heavy chains usable for hauling, binding, climbing, or improvised intimidation.",
  "Case notes on Koenig": "Cali's copied notes on Bran Koenig's death and suspicious securitor transfers.",
  "Chrono": "Timepiece useful for checking patrol timings, alibis, and synchronized operations.",
  "Combi-tool": "Mechanicus multi-tool. Grants +10 to appropriate Tech-Use tests.",
  "Data-scrolls": "Records, notes, or formal writs that can carry evidence or occult references.",
  Dataslate: "Portable data device used for notes, records, maps, and copied files.",
  Dataspikes: "Intrusion tools for bypassing cogitator security and extracting data.",
  "Emperor's Tarot": "Divinatory tool and religious focus, especially useful for psykers and occult investigation.",
  "Enforcer flak coat": "Protective law-enforcement armour, usually covering body and limbs.",
  "Evidence satchel": "Official-looking case for securing physical evidence, or making evidence disappear.",
  "False ident papers": "Forgery kit or false identity documents useful for passing checkpoints.",
  "Food ration tin": "Basic food supply; also a small personal comfort for Hammer.",
  "Forbidden research notes": "Mariana's dangerous xenotech notes. Incriminating if discovered by the Mechanicus.",
  "Glow-globes": "Portable light sources for dark habs, tunnels, and underhive spaces.",
  "Grapnel launcher": "Tool for climbing, crossing gaps, entering windows, or making quick escapes.",
  "Guard flak coat": "Military-grade flak protection, practical and visibly veteran-associated.",
  "Heavy flak harness": "Heavy protective harness for brutal close-range fighting.",
  "Hexagrammic charms": "Wards and devotional charms against warp influence, fear, and corruption.",
  "Infra-goggles": "Allow vision in darkness by detecting heat signatures.",
  "Lho-sticks": "Common smoking vice; useful as comfort, bribe, or social prop.",
  "Lock picks": "Tools for opening simple locks and bypassing mundane security.",
  "Lucky charm": "Personal keepsake with no guaranteed mechanical effect, but it matters to the owner.",
  Magnoculars: "Optical magnification for scouting, surveillance, and battlefield observation.",
  Manacles: "Restraints for captives, suspects, or anyone Hammer can hold still long enough.",
  "Mesh-lined coat": "Protective coat with concealed mesh armour.",
  "Micro-bead": "Short-range comms bead for squad communication.",
  "Obscura withdrawal shakes": "Not helpful gear: Scratch is suffering withdrawal symptoms and needs a fix badly.",
  "Oversized rebreather": "Breathing mask fitted for Hammer, useful against smoke, gas, and toxic air.",
  "Photo-visor": "Vision gear that helps with darkness, glare, or forensic scene work.",
  "Pict recorder": "Records stills or video evidence. Useful for preserving proof before it disappears.",
  "Portable cogitator": "Small computing device for analysis, records, encryption work, and technical notes.",
  "Psy-focus Staff": "Focus object for psychic discipline and a usable staff in melee.",
  "Psy-suppressant incense": "Ritual incense used to calm or contain psychic disturbance.",
  "Rebreather": "Breathing mask useful against smoke, gas, toxins, and bad hive air.",
  "Reclaimed respirator": "Patchwork breathing gear useful in smoke, dust, and sump air.",
  "Reinforced Mechanicus robes": "Tech-adept robes with protective plating and concealed utility fittings.",
  "Reinforced psykana robes": "Protective robes marked with sanctioning, wards, and Imperial restraint symbols.",
  Restraints: "Manacles or binding straps for prisoners.",
  "Sacred unguents": "Ritual oils used to appease machine spirits during repairs or rites.",
  Sedatives: "Medical or psykana drugs used to calm, restrain, or treat unstable subjects.",
  "Shell bandolier": "Ready ammunition for shotguns or similar shell-fed weapons.",
  "Stimm injector": "Combat drug injector; can keep someone moving briefly at a cost.",
  "Underhive maps": "Local maps, marked routes, safe passages, and dangerous shortcuts.",
  "Vox-scrambler": "Device for masking or disrupting vox transmissions."
};

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

function parseArmour(armourText) {
  const values = { Head: "", "Right Arm": "", "Left Arm": "", Body: "", "Right Leg": "", "Left Leg": "" };
  const aliases = {
    head: ["Head"],
    h: ["Head"],
    arms: ["Right Arm", "Left Arm"],
    arm: ["Right Arm", "Left Arm"],
    ar: ["Right Arm"],
    "right arm": ["Right Arm"],
    al: ["Left Arm"],
    "left arm": ["Left Arm"],
    body: ["Body"],
    b: ["Body"],
    legs: ["Right Leg", "Left Leg"],
    leg: ["Right Leg", "Left Leg"],
    lr: ["Right Leg"],
    "right leg": ["Right Leg"],
    ll: ["Left Leg"],
    "left leg": ["Left Leg"]
  };

  String(armourText || "")
    .split(",")
    .map((part) => part.trim())
    .forEach((part) => {
      const match = part.match(/^([A-Za-z ]+)\s+(.+)$/);
      if (!match) {
        return;
      }
      const locations = aliases[match[1].trim().toLowerCase()];
      if (!locations) {
        return;
      }
      locations.forEach((location) => {
        values[location] = match[2].trim();
      });
    });
  return values;
}

function formatArmour(values) {
  return ["Head", "Right Arm", "Left Arm", "Body", "Right Leg", "Left Leg"]
    .map((location) => `${location} ${values[location] || 0}`)
    .join(", ");
}

function renderVitals() {
  const armour = parseArmour(activeSheet.meta.armour);
  const locations = [
    { key: "Head", code: "H", range: "01-10", className: "head" },
    { key: "Right Arm", code: "AR", range: "11-20", className: "right-arm" },
    { key: "Left Arm", code: "AL", range: "21-30", className: "left-arm" },
    { key: "Body", code: "B", range: "31-70", className: "body" },
    { key: "Right Leg", code: "LR", range: "71-85", className: "right-leg" },
    { key: "Left Leg", code: "LL", range: "86-00", className: "left-leg" }
  ];
  document.querySelector("#dashboardVitals").innerHTML = `
    <label class="movement-panel">
      <span>Movement</span>
      <input data-meta-field="movement" value="${activeSheet.meta.movement || ""}" aria-label="Movement values">
    </label>
    <div class="armour-panel" aria-label="Armour by body location">
      <span class="armour-title">Armour</span>
      <div class="armour-silhouette" aria-hidden="true"></div>
      ${locations
        .map(
          (location) => `
            <label class="armour-node ${location.className}">
              <span class="armour-code">${location.code}</span>
              <span class="armour-range">${location.range}</span>
              <input data-armour-location="${location.key}" type="number" min="0" value="${armour[location.key]}">
            </label>
          `
        )
        .join("")}
    </div>
  `;
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

function renderPowers() {
  const powersCard = document.querySelector("#powersCard");
  const powerEditor = document.querySelector("#powerEditor");
  const powers = activeSheet.psychicPowers || [];

  if (!powersCard || !powerEditor) {
    return;
  }

  powersCard.hidden = powers.length === 0;
  powerEditor.innerHTML = powers
    .map(
      (power, index) => `
        <article class="power-card">
          <label class="field-control">
            <span>Power</span>
            <input data-power="${index}" data-power-field="name" value="${power.name || ""}">
          </label>
          <div class="power-meta-grid">
            <label class="field-control">
              <span>Action</span>
              <input data-power="${index}" data-power-field="action" value="${power.action || ""}">
            </label>
            <label class="field-control">
              <span>Focus</span>
              <input data-power="${index}" data-power-field="focus" value="${power.focus || ""}">
            </label>
            <label class="field-control">
              <span>Range</span>
              <input data-power="${index}" data-power-field="range" value="${power.range || ""}">
            </label>
          </div>
          <label class="field-control">
            <span>Effect</span>
            <textarea data-power="${index}" data-power-field="effect" rows="3">${power.effect || ""}</textarea>
          </label>
        </article>
      `
    )
    .join("");
}

function renderTagEditor(id, values) {
  const listType = id.slice(1).replace("Editor", "");
  document.querySelector(id).innerHTML = values
    .map(
      (value, index) => `
        <label class="tag-field dashboard-tip" data-effect="${escapeHtml(lookupDashboardDetail(listType, value))}">
          <input data-list="${id.slice(1)}" data-index="${index}" value="${value}">
        </label>
      `
    )
    .join("");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function baseRuleName(value) {
  return String(value || "")
    .replace(/\s\+\d+$/, "")
    .replace(/\s\(.+\)$/, "")
    .trim();
}

function lookupDashboardDetail(type, value) {
  const cleanValue = String(value || "").trim();
  const baseName = baseRuleName(cleanValue);

  if (type === "skill") {
    return dashboardSkillDetails[baseName] || dashboardSkillDetails[baseName.replace(/\s\(.+\)$/, "")] || "No quick-reference skill note has been entered yet.";
  }

  if (type === "talent") {
    if (cleanValue.startsWith("Weapon Training")) {
      return dashboardTalentEffects["Weapon Training"];
    }
    return dashboardTalentEffects[cleanValue] || dashboardTalentEffects[baseName] || "No quick-reference talent or trait note has been entered yet.";
  }

  if (type === "gear") {
    return dashboardGearDetails[cleanValue] || dashboardGearDetails[baseName] || "No quick-reference gear note has been entered yet.";
  }

  return "";
}

function renderDashboard() {
  document.querySelector("#dashboardName").textContent = character.name;
  document.querySelector("#dashboardTitle").textContent = character.name;
  document.querySelector("#dashboardRole").textContent = character.role;
  document.querySelector("#dashboardMeta").textContent = `${activeSheet.meta.homeWorld} | ${activeSheet.meta.background} | ${activeSheet.meta.role}`;
  document.querySelector("#dashboardBack").href = `character.html?id=${encodeURIComponent(character.id)}`;
  document.querySelector("#dashboardPortrait").innerHTML = `<img src="${character.image}" alt="${character.name}">`;
  document.querySelector("#dashboardNotes").value = activeSheet.notes || "";

  renderVitals();
  renderStats();
  renderResources();
  renderWeapons();
  renderPowers();
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

  document.querySelectorAll("[data-meta-field]").forEach((input) => {
    activeSheet.meta[input.dataset.metaField] = input.value.trim();
  });

  const armourValues = parseArmour(activeSheet.meta.armour);
  document.querySelectorAll("[data-armour-location]").forEach((input) => {
    armourValues[input.dataset.armourLocation] = input.value.trim() || "0";
  });
  activeSheet.meta.armour = formatArmour(armourValues);

  document.querySelectorAll("[data-weapon]").forEach((input) => {
    activeSheet.weapons[Number(input.dataset.weapon)][input.dataset.weaponField] = input.value;
  });

  document.querySelectorAll("[data-power]").forEach((input) => {
    const powerIndex = Number(input.dataset.power);
    if (!activeSheet.psychicPowers || !activeSheet.psychicPowers[powerIndex]) {
      return;
    }
    activeSheet.psychicPowers[powerIndex][input.dataset.powerField] = input.value.trim();
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

function exportDashboard() {
  collectDashboard();
  const payload = {
    format: "ricardo-character-dashboard",
    version: 1,
    characterId: character.id,
    characterName: character.name,
    exportedAt: new Date().toISOString(),
    sheet: activeSheet
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${character.id}-dashboard-save.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  document.querySelector("#saveNote").textContent = "Save file downloaded.";
}

function importDashboard(event) {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const payload = JSON.parse(reader.result);
      const importedSheet = payload.sheet || payload;

      if (!importedSheet.stats || !importedSheet.resources || !importedSheet.weapons) {
        throw new Error("Invalid dashboard save.");
      }

      activeSheet = importedSheet;
      localStorage.setItem(storageKey, JSON.stringify(activeSheet));
      renderDashboard();
      document.querySelector("#saveNote").textContent = "Save file imported.";
    } catch (error) {
      document.querySelector("#saveNote").textContent = "Import failed: invalid save file.";
    } finally {
      event.target.value = "";
    }
  });
  reader.readAsText(file);
}

function resetDashboard() {
  activeSheet = clone(baseSheet);
  localStorage.removeItem(storageKey);
  renderDashboard();
  document.querySelector("#saveNote").textContent = "Reset to starting sheet.";
}

document.querySelector("#saveDashboard").addEventListener("click", saveDashboard);
document.querySelector("#resetDashboard").addEventListener("click", resetDashboard);
document.querySelector("#exportDashboard").addEventListener("click", exportDashboard);
document.querySelector("#importDashboard").addEventListener("change", importDashboard);

renderDashboard();
