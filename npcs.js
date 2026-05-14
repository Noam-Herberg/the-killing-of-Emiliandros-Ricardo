const npcs = [
  {
    name: "Molly",
    type: "Bar manager, coerced killer",
    faction: "Vipers leverage",
    image: "assets/NPCs/Molly.png",
    threat: "Low",
    wounds: 10,
    armour: "Head 0, Arms 1, Body 2, Legs 1",
    movement: "Half 3, Full 6, Charge 9, Run 18",
    stats: { WS: 26, BS: 31, S: 28, T: 30, Ag: 34, Int: 36, Per: 38, WP: 33, Fel: 39 },
    skills: ["Awareness +10", "Deceive", "Inquiry", "Scrutiny", "Stealth", "Trade (Cook)"],
    talents: ["Jaded", "Peer (Underhive Workers)", "Weapon Training (SP)"],
    traits: ["Frightened but desperate", "Knows one stash location"],
    gear: ["Stub automatic", "Work knife", "Bar keys", "Hidden note from the Vipers"],
    weapons: [
      { name: "Stub Automatic", class: "Pistol", range: "30m", rof: "S/3/-", damage: "1d10+3 I", pen: "0", clip: "9", reload: "Full", special: "" },
      { name: "Work Knife", class: "Melee", range: "-", rof: "-", damage: "1d5+2 R", pen: "0", clip: "-", reload: "-", special: "" }
    ],
    appearance: "Tired, sharp-eyed, and visibly underfed. Keeps her hands busy so nobody notices them shaking.",
    disposition: "Evasive, defensive, and terrified that any wrong answer will get her sister killed.",
    clues: "Can reveal the location of one stash if the players rescue or convincingly protect her sister.",
    notes: "Molly killed Ricardo and Renzo under Viper pressure. She is more useful as a compromised witness than as a combatant."
  },
  {
    name: "Dieter Voss",
    type: "Corrupt securitor",
    faction: "The Hand",
    image: "assets/NPCs/Dieter.png",
    threat: "Moderate",
    wounds: 13,
    armour: "Head 2, Arms 4, Body 4, Legs 3",
    movement: "Half 3, Full 6, Charge 9, Run 18",
    stats: { WS: 34, BS: 39, S: 33, T: 36, Ag: 32, Int: 35, Per: 37, WP: 34, Fel: 31 },
    skills: ["Awareness", "Command", "Interrogation", "Intimidate +10", "Security", "Scrutiny"],
    talents: ["Quick Draw", "Rapid Reload", "Weapon Training (Las, Shock, SP)"],
    traits: ["Securitor authority", "Compromised chain of command"],
    gear: ["Enforcer flak armour", "Restraints", "Micro-bead", "Evidence satchel", "Sealed reassignment order"],
    weapons: [
      { name: "Combat Shotgun", class: "Basic", range: "30m", rof: "S/3/-", damage: "1d10+4 I", pen: "0", clip: "18", reload: "Full", special: "Scatter" },
      { name: "Shock Maul", class: "Melee", range: "-", rof: "-", damage: "1d10+3 I", pen: "0", clip: "-", reload: "-", special: "Shocking" }
    ],
    appearance: "Hard-faced precinct veteran with a polished badge, old bruises, and armour that has seen real street fighting.",
    disposition: "Calmly threatening. Prefers official pressure before open violence.",
    clues: "Knows Renzo's body was removed before the cult arrived, but will not admit it unless cornered.",
    notes: "Use Dieter as the visible face of The Hand when the players start asking official questions."
  },
  {
    name: "Rex Varn",
    type: "Head of the Vipers gang",
    faction: "The Vipers",
    image: "assets/NPCs/Rex.png",
    threat: "Moderate",
    wounds: 14,
    armour: "Head 1, Arms 2, Body 3, Legs 2",
    movement: "Half 3, Full 6, Charge 9, Run 18",
    stats: { WS: 39, BS: 35, S: 38, T: 39, Ag: 33, Int: 27, Per: 32, WP: 31, Fel: 29 },
    skills: ["Athletics", "Awareness", "Dodge", "Intimidate +10", "Survival"],
    talents: ["Berserk Charge", "Street Fighting", "Weapon Training (Chain, Low-Tech, SP)"],
    traits: ["Gang boss", "Commands Viper crews", "Loyal while paid"],
    gear: ["Armoured leathers", "Obscura vials", "Viper token", "Threat list"],
    weapons: [
      { name: "Chain Axe", class: "Melee", range: "-", rof: "-", damage: "1d10+5 R", pen: "2", clip: "-", reload: "-", special: "Tearing, Unbalanced" },
      { name: "Stub Revolver", class: "Pistol", range: "30m", rof: "S/-/-", damage: "1d10+3 I", pen: "0", clip: "6", reload: "2 Full", special: "Reliable" }
    ],
    appearance: "Broad, scarred, and overdressed in gang colours. Smiles when someone else is scared.",
    disposition: "Cruel, impatient, and used to being obeyed. Easy to bait into proving he is the hardest person in the room.",
    clues: "Can lead players toward Viper drug dens, Molly's sister, or the obscura stash.",
    notes: "Use Rex as the Vipers' ranking street boss. Back him with 3-5 generic Viper gangers if needed."
  },
  {
    name: "Sana Vey",
    type: "Open Eye occult agent",
    faction: "Observatory of the Open Eye",
    image: "assets/NPCs/Sana.png",
    threat: "Moderate",
    wounds: 11,
    armour: "Head 0, Arms 2, Body 2, Legs 2",
    movement: "Half 4, Full 8, Charge 12, Run 24",
    stats: { WS: 28, BS: 34, S: 27, T: 31, Ag: 41, Int: 40, Per: 42, WP: 43, Fel: 36 },
    skills: ["Awareness +10", "Deceive", "Forbidden Lore (Daemonology)", "Scrutiny", "Stealth", "Tech-Use"],
    talents: ["Catfall", "Jaded", "Resistance (Fear)", "Weapon Training (Las, Low-Tech)"],
    traits: ["Occult conditioning", "Will not willingly name patrons"],
    gear: ["Cult signet", "Ciphered dataslate fragment", "Silk mask", "Poison capsule"],
    weapons: [
      { name: "Needle Pistol", class: "Pistol", range: "30m", rof: "S/-/-", damage: "1d10 R", pen: "0", clip: "6", reload: "Full", special: "Toxic" },
      { name: "Dagger", class: "Melee", range: "-", rof: "-", damage: "1d5+2 R", pen: "0", clip: "-", reload: "-", special: "" }
    ],
    appearance: "Elegant, still, and watchful. Wears enough perfume to hide incense and chemical smells.",
    disposition: "Soft-spoken, evasive, and fanatically committed once the mask drops.",
    clues: "Carries part of the damaged dataslate and references The Door Beneath Starlight.",
    notes: "Use Sana for infiltration, surveillance, or a polite conversation that becomes deeply wrong."
  },
  {
    name: "Inandara Vey",
    type: "Cult noble patron",
    faction: "Observatory of the Open Eye",
    image: "assets/NPCs/Inandara.png",
    threat: "High social, low physical",
    wounds: 10,
    armour: "Head 0, Arms 1, Body 2, Legs 1",
    movement: "Half 3, Full 6, Charge 9, Run 18",
    stats: { WS: 24, BS: 29, S: 25, T: 29, Ag: 33, Int: 43, Per: 39, WP: 44, Fel: 48 },
    skills: ["Charm +10", "Command", "Deceive +10", "Forbidden Lore (Cults)", "Inquiry", "Scrutiny"],
    talents: ["Air of Authority", "Peer (Nobility)", "Resistance (Fear)", "Weapon Training (Las)"],
    traits: ["Noble protection", "Cult patronage", "Disposable servants"],
    gear: ["Laspistol", "Refractor-field brooch", "Court invitation seals", "Cult correspondence"],
    weapons: [
      { name: "Laspistol", class: "Pistol", range: "30m", rof: "S/2/-", damage: "1d10+2 E", pen: "0", clip: "30", reload: "Half", special: "Reliable" }
    ],
    appearance: "Immaculate court fashion, composed expression, and jewellery carrying subtle Open Eye motifs.",
    disposition: "Warm, poisonous, and confident that rank will protect her.",
    clues: "Can connect the cult to high society gatherings and the attempt to reconstruct Ricardo's dataslate.",
    notes: "Inandara should rarely fight directly. Her threat is access, influence, and deniable violence."
  },
  {
    name: "Magos Halicor",
    type: "Radical tech-priest",
    faction: "Halicor's cell",
    image: "assets/NPCs/Halicor.png",
    threat: "Elite",
    wounds: 18,
    armour: "Head 4, Arms 5, Body 5, Legs 4",
    movement: "Half 3, Full 6, Charge 9, Run 18",
    stats: { WS: 34, BS: 41, S: 40, T: 45, Ag: 30, Int: 55, Per: 43, WP: 47, Fel: 25 },
    skills: ["Forbidden Lore (Archeotech) +10", "Logic +20", "Medicae", "Security +10", "Tech-Use +20"],
    talents: ["Binary Chatter", "Mechadendrite Use", "Technical Knock", "The Flesh is Weak (2)", "Weapon Training (Las, Shock)"],
    traits: ["Mechanicus implants", "Paranoid protocols", "Servo-skull network"],
    gear: ["Augmetic robes", "Dataspike", "Servo-skull relay", "Vault calculations", "Rad-scarred tools"],
    weapons: [
      { name: "Luminen Blast", class: "Pistol", range: "10m", rof: "S/-/-", damage: "1d10+5 E", pen: "4", clip: "-", reload: "-", special: "Shocking" },
      { name: "Hellpistol", class: "Pistol", range: "35m", rof: "S/2/-", damage: "1d10+4 E", pen: "7", clip: "40", reload: "2 Full", special: "" },
      { name: "Shock Staff", class: "Melee", range: "-", rof: "-", damage: "1d10+4 I", pen: "0", clip: "-", reload: "-", special: "Shocking" }
    ],
    appearance: "Half-robed, half-armoured, with too many augmetic eyes and fingers that twitch through invisible calculations.",
    disposition: "Brilliant, terrified, and increasingly willing to erase everyone connected to the vault.",
    clues: "Responsible for the hab explosion. His records can expose the xenotech network and The Hand.",
    notes: "Use as a late-game antagonist or looming threat. He should send servitors first."
  },
  {
    name: "Viper Ganger",
    type: "Generic Vipers street soldier",
    faction: "The Vipers",
    image: "assets/NPCs/Viper.png",
    threat: "Troop",
    wounds: 10,
    armour: "Head 0, Arms 2, Body 2, Legs 2",
    movement: "Half 3, Full 6, Charge 9, Run 18",
    stats: { WS: 32, BS: 31, S: 32, T: 33, Ag: 34, Int: 26, Per: 30, WP: 29, Fel: 27 },
    skills: ["Athletics", "Awareness", "Dodge", "Intimidate", "Survival"],
    talents: ["Street Fighting", "Weapon Training (Low-Tech, SP)"],
    traits: ["Gang colours", "Cowardly without numbers"],
    gear: ["Armoured leathers", "Viper token", "Obscura vials", "Cheap respirator"],
    weapons: [
      { name: "Stub Automatic", class: "Pistol", range: "30m", rof: "S/3/-", damage: "1d10+3 I", pen: "0", clip: "9", reload: "Full", special: "" },
      { name: "Knife", class: "Melee", range: "-", rof: "-", damage: "1d5+3 R", pen: "0", clip: "-", reload: "-", special: "" }
    ],
    appearance: "Scabbed gang colours, cheap armour, and the nervous bravado of someone safer in a pack.",
    disposition: "Aggressive in groups, evasive when isolated, terrified of Rex's displeasure.",
    clues: "Can point toward Viper dens, obscura routes, Molly's sister, or who ordered pressure on Ricardo.",
    notes: "Use in groups of 3-6. A single ganger should fold quickly under serious pressure."
  },
  {
    name: "Hand Securitor",
    type: "Generic corrupt enforcer",
    faction: "The Hand",
    image: "assets/NPCs/Enforcer.png",
    threat: "Troop",
    wounds: 12,
    armour: "Head 2, Arms 3, Body 4, Legs 3",
    movement: "Half 3, Full 6, Charge 9, Run 18",
    stats: { WS: 33, BS: 36, S: 33, T: 35, Ag: 31, Int: 32, Per: 34, WP: 33, Fel: 29 },
    skills: ["Awareness", "Interrogation", "Intimidate", "Security", "Scrutiny"],
    talents: ["Quick Draw", "Weapon Training (Shock, SP)"],
    traits: ["Official authority", "Evidence suppression"],
    gear: ["Enforcer flak armour", "Restraints", "Micro-bead", "Sealed reassignment order"],
    weapons: [
      { name: "Autopistol", class: "Pistol", range: "30m", rof: "S/3/6", damage: "1d10+2 I", pen: "0", clip: "18", reload: "Full", special: "" },
      { name: "Shock Maul", class: "Melee", range: "-", rof: "-", damage: "1d10+3 I", pen: "0", clip: "-", reload: "-", special: "Shocking" }
    ],
    appearance: "Regulation armour with identifiers scratched, covered, or deliberately misfiled.",
    disposition: "Procedural, threatening, and careful to make violence look official.",
    clues: "May carry paperwork showing evidence transfers, body removals, or redirected patrol orders.",
    notes: "Use when The Hand needs to intimidate witnesses, seize evidence, or obstruct Cali."
  },
  {
    name: "Open Eye Cultist",
    type: "Generic occult agent",
    faction: "Observatory of the Open Eye",
    image: "assets/NPCs/Cultist.png",
    threat: "Troop",
    wounds: 9,
    armour: "Head 0, Arms 1, Body 2, Legs 1",
    movement: "Half 3, Full 6, Charge 9, Run 18",
    stats: { WS: 27, BS: 30, S: 27, T: 29, Ag: 34, Int: 35, Per: 37, WP: 39, Fel: 32 },
    skills: ["Awareness", "Deceive", "Forbidden Lore (Cults)", "Scrutiny", "Stealth"],
    talents: ["Jaded", "Resistance (Fear)", "Weapon Training (Las, Low-Tech)"],
    traits: ["Cult conditioning", "Knows ritual phrases"],
    gear: ["Cult signet", "Silk mask", "Ritual chalk", "Poison capsule"],
    weapons: [
      { name: "Laspistol", class: "Pistol", range: "30m", rof: "S/2/-", damage: "1d10+2 E", pen: "0", clip: "30", reload: "Half", special: "Reliable" },
      { name: "Dagger", class: "Melee", range: "-", rof: "-", damage: "1d5+2 R", pen: "0", clip: "-", reload: "-", special: "" }
    ],
    appearance: "Respectable clothing over hidden ritual marks, with an eye-symbol token close to the skin.",
    disposition: "Polite until exposed, then eerily calm and self-sacrificial.",
    clues: "Can reveal cult meeting places, masquerade invitations, or references to The Door Beneath Starlight.",
    notes: "Use as spies, kidnappers, ritual assistants, or disposable guards for Sana and Inandara."
  },
  {
    name: "Halicor Servitor",
    type: "Generic combat servitor",
    faction: "Halicor's cell",
    image: "assets/NPCs/Servitor.png",
    threat: "Heavy troop",
    wounds: 16,
    armour: "Head 3, Arms 4, Body 5, Legs 4",
    movement: "Half 2, Full 4, Charge 6, Run 12",
    stats: { WS: 35, BS: 32, S: 45, T: 45, Ag: 22, Int: 15, Per: 30, WP: 35, Fel: 5 },
    skills: ["Awareness", "Intimidate"],
    talents: ["Weapon Training (Las, Low-Tech)"],
    traits: ["Machine (4)", "Mindlock", "Unnatural Strength (1)", "Unnatural Toughness (1)"],
    gear: ["Integrated armour plating", "Cranial control unit", "Rad-scarred tools"],
    weapons: [
      { name: "Industrial Claw", class: "Melee", range: "-", rof: "-", damage: "1d10+7 R", pen: "2", clip: "-", reload: "-", special: "Unwieldy" },
      { name: "Las-lock", class: "Basic", range: "70m", rof: "S/-/-", damage: "1d10+3 E", pen: "0", clip: "20", reload: "Full", special: "Reliable" }
    ],
    appearance: "A corpse-shaped machine with industrial limbs, hazard markings, and devotional code scratched into metal plates.",
    disposition: "Obedient, silent, and terrifyingly literal.",
    clues: "Serial marks or command codes can point back to Halicor's workshop.",
    notes: "Use as Halicor's disposable muscle. It should be slow but hard to put down."
  }
];

const talentEffects = {
  "Air of Authority": "May affect more targets with Command tests; useful for commanding groups.",
  "Berserk Charge": "Gains +10 Weapon Skill when charging.",
  "Binary Chatter": "Gains +10 to interact with servitors, servo-skulls, and similar machine servants.",
  "Catfall": "Reduces falling damage and improves control when dropping or landing.",
  "Deadeye Shot": "Reduces called-shot penalties by 10.",
  "Jaded": "Ignores mundane horror and ordinary gruesome sights for Fear purposes.",
  "Mechadendrite Use": "Can use installed mechadendrites without penalty.",
  "Peer (Nobility)": "Gains +10 Fellowship tests with nobility.",
  "Peer (Underhive Workers)": "Gains +10 Fellowship tests with underhive labourers and workers.",
  "Quick Draw": "Can ready a pistol, basic weapon, or one-handed melee weapon as a Free Action.",
  "Rapid Reload": "Halves reload times, rounding down.",
  "Resistance (Fear)": "Gains +10 to resist Fear tests.",
  "Street Fighting": "Adds extra damage with knives, fists, and improvised close-combat attacks.",
  "Technical Knock": "Once per round, may unjam a weapon as a Half Action.",
  "The Flesh is Weak (2)": "Counts as having Machine trait 2; gains armour and machine resilience.",
  "Warp Sense": "May use Psyniscience as a Free Action and perceive warp disturbances more readily.",
  "Weapon Training": "Can use the listed weapon groups without the untrained weapon penalty."
};

const gearDetails = {
  "Armoured leathers": "Light gang armour, usually AP 2 on covered locations.",
  "Augmetic robes": "Heavy Mechanicus robes reinforced around implants and sacred machinery.",
  "Bar keys": "Keys to Ricardo-linked service doors, storerooms, and private back rooms.",
  "Case notes on Koenig": "Cali's copied notes on Bran Koenig's death and suspicious securitor transfers.",
  "Chrono": "Timepiece useful for checking patrol timings, alibis, and synchronized operations.",
  "Cheap respirator": "Low-quality breathing mask, enough for smoke, dust, and bad sump air.",
  "Ciphered dataslate fragment": "Damaged encrypted data. May point to a stash or cult operation if reconstructed.",
  "Cranial control unit": "Servitor command hardware; contains traces of its last orders if recovered intact.",
  "Court invitation seals": "Noble credentials that can get the holder into restricted social events.",
  "Cult correspondence": "Letters and coded messages connecting cult members to meetings and rituals.",
  "Cult signet": "Symbol of Open Eye affiliation; dangerous evidence if shown to the wrong person.",
  "Dataspike": "Intrusion tool for bypassing cogitator security and extracting data.",
  "Enforcer flak armour": "Standard-issue protective armour for precinct raids and street violence.",
  "Evidence satchel": "Official-looking case for securing physical evidence, or making evidence disappear.",
  "Hellpistol charge pack": "High-output ammunition pack; expensive and difficult to replace.",
  "Hidden note from the Vipers": "Coercive message implying Molly's sister is still under Viper control.",
  "Laspistol": "Common sidearm; reliable, concealable, and easy to source ammunition for.",
  "Micro-bead": "Short-range comms bead for squad communication.",
  "Obscura vials": "Narcotic product, bribe material, or leverage against addicts and dealers.",
  "Poison capsule": "Emergency suicide capsule or assassination tool, depending on circumstance.",
  "Refractor-field brooch": "Noble defensive field generator; may deflect attacks unpredictably.",
  "Restraints": "Manacles or binding straps for prisoners.",
  "Ritual chalk": "Occult marking material used for warding circles, summoning diagrams, and coded symbols.",
  "Sealed reassignment order": "Paper trail proving someone with authority interfered with the investigation.",
  "Servo-skull relay": "Mobile sensor and communications relay controlled by Halicor.",
  "Shock Maul": "Enforcer melee weapon with the Shocking quality.",
  "Silk mask": "Cult disguise used at masquerades and occult gatherings.",
  "Stub automatic": "Common low-grade pistol, easy to hide and easy to discard.",
  "Threat list": "Names of people the Vipers are watching, intimidating, or planning to remove.",
  "Vault calculations": "Halicor's notes on the Tesseract Vault; dangerous and highly incriminating.",
  "Viper token": "Gang marker used to claim territory, identify trusted runners, or threaten debtors.",
  "Work knife": "Molly's practical kitchen and utility knife; dangerous mostly because it is always close to hand.",
  "Rad-scarred tools": "Contaminated Mechanicus instruments used for unsafe xenotech work.",
  "Integrated armour plating": "Built-in servitor armour; difficult to remove without tools and time."
};

function listHtml(items = []) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function talentEffect(talent) {
  if (talent.startsWith("Weapon Training")) {
    return talentEffects["Weapon Training"];
  }

  if (talent.startsWith("The Flesh is Weak")) {
    return talentEffects["The Flesh is Weak (2)"];
  }

  return talentEffects[talent] || "No quick-reference effect has been entered yet.";
}

function talentListHtml(items = []) {
  return items
    .map((item) => `<li><span class="talent-tip" tabindex="0" data-effect="${talentEffect(item)}">${item}</span></li>`)
    .join("");
}

function gearDetail(item) {
  return gearDetails[item] || "No quick-reference gear detail has been entered yet.";
}

function gearListHtml(items = []) {
  return items
    .map((item) => `<li><span class="talent-tip" tabindex="0" data-effect="${gearDetail(item)}">${item}</span></li>`)
    .join("");
}

function statsHtml(stats) {
  return Object.entries(stats)
    .map(([label, value]) => `<div class="npc-stat"><span>${label}</span><strong>${value}</strong></div>`)
    .join("");
}

function weaponsHtml(weapons = []) {
  return weapons
    .map(
      (weapon) => `
        <tr>
          <td>${weapon.name}</td>
          <td>${weapon.class}</td>
          <td>${weapon.range}</td>
          <td>${weapon.rof}</td>
          <td>${weapon.damage}</td>
          <td>${weapon.pen}</td>
          <td>${weapon.clip}</td>
          <td>${weapon.reload}</td>
          <td>${weapon.special}</td>
        </tr>
      `
    )
    .join("");
}

function npcCardHtml(npc) {
  return `
    <article class="npc-card">
      <div class="npc-portrait">
        <img src="${npc.image}" alt="${npc.name}">
      </div>
      <div class="npc-body">
        <p class="eyebrow">${npc.faction}</p>
        <h2>${npc.name}</h2>
        <p class="npc-type">${npc.type}</p>

        <div class="npc-summary">
          <span><strong>Threat:</strong> ${npc.threat}</span>
          <span><strong>Wounds:</strong> ${npc.wounds}</span>
          <span><strong>Armour:</strong> ${npc.armour}</span>
          <span><strong>Movement:</strong> ${npc.movement}</span>
        </div>

        <div class="npc-stats">${statsHtml(npc.stats)}</div>

        <div class="npc-columns">
          <section>
            <h3>Skills</h3>
            <ul>${listHtml(npc.skills)}</ul>
          </section>
          <section>
            <h3>Talents</h3>
            <ul>${talentListHtml(npc.talents)}</ul>
          </section>
          <section>
            <h3>Traits</h3>
            <ul>${listHtml(npc.traits)}</ul>
          </section>
          <section>
            <h3>Gear</h3>
            <ul>${gearListHtml(npc.gear)}</ul>
          </section>
        </div>

        <div class="npc-table-wrap">
          <table class="npc-weapons">
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
            <tbody>${weaponsHtml(npc.weapons)}</tbody>
          </table>
        </div>

        <div class="npc-notes">
          <section>
            <h3>Appearance</h3>
            <p>${npc.appearance}</p>
          </section>
          <section>
            <h3>Disposition</h3>
            <p>${npc.disposition}</p>
          </section>
          <section>
            <h3>Clues & Leads</h3>
            <p>${npc.clues}</p>
          </section>
          <section>
            <h3>GM Notes</h3>
            <p>${npc.notes}</p>
          </section>
        </div>
      </div>
    </article>
  `;
}

function unlockNpcStats() {
  document.querySelector("#npcGate").hidden = true;
  document.querySelector("#npcStats").hidden = false;
  sessionStorage.setItem("ricardoGmUnlocked", "true");
}

const npcGate = document.querySelector("#npcGate");
const npcStats = document.querySelector("#npcStats");
const npcForm = document.querySelector("#npcPasswordForm");
const npcInput = document.querySelector("#npcPassword");
const npcError = document.querySelector("#npcError");
const npcGrid = document.querySelector("#npcGrid");

npcGrid.innerHTML = npcs.map(npcCardHtml).join("");

if (sessionStorage.getItem("ricardoGmUnlocked") === "true") {
  unlockNpcStats();
}

npcForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (npcInput.value === "Ricardo") {
    unlockNpcStats();
    return;
  }

  npcError.hidden = false;
  npcInput.select();
});
