const characterSheets = {
  "hogan-reams": {
    meta: { homeWorld: "Hive World", background: "Astra Militarum", role: "Warrior", wounds: 14, fate: 3, armour: "Head 2, Arms 4, Body 4, Legs 3", movement: "Half 3, Full 6, Charge 9, Run 18" },
    stats: { WS: 36, BS: 42, S: 34, T: 38, Ag: 35, Int: 36, Per: 39, WP: 39, Fel: 34, Inf: 31 },
    resources: { currentWounds: 14, maxWounds: 14, fatigue: 0, fate: 3, insanity: 0, corruption: 0 },
    weapons: [
      { name: "Lasgun", class: "Basic", range: "100m", rof: "S/3/-", damage: "1d10+3 E", pen: "0", clip: "60", reload: "Full", special: "Reliable" },
      { name: "Stub Revolver", class: "Pistol", range: "30m", rof: "S/-/-", damage: "1d10+3 I", pen: "0", clip: "6", reload: "2 Full", special: "Reliable" },
      { name: "Knife", class: "Melee", range: "-", rof: "-", damage: "1d5+3 R", pen: "0", clip: "-", reload: "-", special: "" }
    ],
    skills: ["Awareness", "Command", "Common Lore (Astra Militarum)", "Common Lore (Imperium)", "Common Lore (War)", "Inquiry", "Intimidate", "Navigate (Surface)", "Operate (Surface)", "Survival"],
    talents: ["Air of Authority", "Combat Formation", "Nerves of Steel", "Rapid Reload", "Weapon Training (Las, Low-Tech, SP)"],
    gear: ["Guard flak coat", "Micro-bead", "Dataslate", "Magnoculars", "Lho-sticks", "Rebreather", "Manacles", "Evidence satchel", "2 frag grenades"],
    notes: "Former Purinan 442nd officer. Secretly hunting Ricardo's pict-recording."
  },
  hammer: {
    meta: { homeWorld: "Penal Colony", background: "Outcast", role: "Crusader", wounds: 16, fate: 2, armour: "Head 2, Arms 4, Body 4, Legs 3", movement: "Half 2, Full 4, Charge 6, Run 12" },
    stats: { WS: 43, BS: 28, S: 44, T: 43, Ag: 29, Int: 24, Per: 34, WP: 37, Fel: 25, Inf: 18 },
    resources: { currentWounds: 16, maxWounds: 16, fatigue: 0, fate: 2, insanity: 0, corruption: 0 },
    weapons: [
      { name: "Combat Shotgun", class: "Basic", range: "30m", rof: "S/3/-", damage: "1d10+4 I", pen: "0", clip: "18", reload: "Full", special: "Scatter" },
      { name: "Chain Cleaver", class: "Melee", range: "-", rof: "-", damage: "1d10+5 R", pen: "2", clip: "-", reload: "-", special: "Tearing, Unbalanced" },
      { name: "Fighting Knife", class: "Melee", range: "-", rof: "-", damage: "1d5+4 R", pen: "0", clip: "-", reload: "-", special: "" }
    ],
    skills: ["Athletics", "Awareness", "Common Lore (Underworld)", "Intimidate", "Survival"],
    talents: ["Berserk Charge", "Iron Jaw", "Resistance (Fear)", "Weapon Training (Chain, Low-Tech, SP)"],
    gear: ["Heavy flak harness", "Scrap shoulder plates", "Stimm injector", "Cargo chains", "Breaching tools", "Oversized rebreather", "Lucky charm", "Food ration tin"],
    notes: "Ricardo's loyal bodyguard. Wants revenge and a new person to protect."
  },
  "mariana-0490": {
    meta: { homeWorld: "Forge World", background: "Adeptus Mechanicus", role: "Sage", wounds: 12, fate: 3, armour: "Head 2, Arms 4, Body 4, Legs 3", movement: "Half 3, Full 6, Charge 9, Run 18" },
    stats: { WS: 28, BS: 34, S: 30, T: 36, Ag: 32, Int: 44, Per: 39, WP: 40, Fel: 24, Inf: 31 },
    resources: { currentWounds: 12, maxWounds: 12, fatigue: 0, fate: 3, insanity: 0, corruption: 0 },
    weapons: [
      { name: "Laspistol", class: "Pistol", range: "30m", rof: "S/2/-", damage: "1d10+2 E", pen: "0", clip: "30", reload: "Half", special: "Reliable" },
      { name: "Mono Knife", class: "Melee", range: "-", rof: "-", damage: "1d5+3 R", pen: "2", clip: "-", reload: "-", special: "Mono" },
      { name: "Combi-tool", class: "Tool", range: "-", rof: "-", damage: "-", pen: "-", clip: "-", reload: "-", special: "+10 Tech-Use where applicable" }
    ],
    skills: ["Awareness", "Common Lore (Adeptus Mechanicus)", "Common Lore (Tech)", "Forbidden Lore (Archeotech)", "Linguistics (Techna-Lingua)", "Logic", "Medicae", "Operate (Surface)", "Security", "Tech-Use", "Trade (Technomat)"],
    talents: ["Binary Chatter", "Mechanicus Implants", "Technical Knock", "Weapon Training (Las, Low-Tech)"],
    gear: ["Reinforced Mechanicus robes", "Armoured undersuit", "Dataspikes", "Portable cogitator", "Auspex", "Sacred unguents", "Vox-scrambler", "Forbidden research notes", "Combi-tool"],
    notes: "Radical tech-adept. Needs xenotech records erased or secured."
  },
  scratch: {
    meta: { homeWorld: "Underhive", background: "Outcast", role: "Desperado", wounds: 10, fate: 2, armour: "Head 2, Arms 4, Body 4, Legs 3", movement: "Half 4, Full 8, Charge 12, Run 24" },
    stats: { WS: 30, BS: 43, S: 27, T: 31, Ag: 45, Int: 33, Per: 42, WP: 31, Fel: 29, Inf: 20 },
    resources: { currentWounds: 10, maxWounds: 10, fatigue: 0, fate: 2, insanity: 0, corruption: 0 },
    weapons: [
      { name: "Hunting Rifle", class: "Basic", range: "150m", rof: "S/-/-", damage: "1d10+3 I", pen: "0", clip: "5", reload: "Full", special: "Accurate" },
      { name: "Stub Automatic", class: "Pistol", range: "30m", rof: "S/3/-", damage: "1d10+3 I", pen: "0", clip: "9", reload: "Full", special: "" },
      { name: "Mono Shiv", class: "Melee", range: "-", rof: "-", damage: "1d5+2 R", pen: "2", clip: "-", reload: "-", special: "Mono" }
    ],
    skills: ["Acrobatics", "Awareness", "Common Lore (Underworld)", "Dodge", "Security", "Sleight of Hand", "Stealth", "Survival"],
    talents: ["Ambidextrous", "Catfall", "Heightened Senses (Hearing)", "Quick Draw", "Weapon Training (Las, Low-Tech, SP)"],
    gear: ["Mesh-lined coat", "Reclaimed respirator", "Grapnel launcher", "Lock picks", "Glow-globes", "Infra-goggles", "Underhive maps", "False ident papers", "Obscura withdrawal shakes"],
    notes: "Ratling thief and crack shot. Needs Ricardo's stash and maybe revenge."
  },
  "ehira-quihaj": {
    meta: { homeWorld: "Voidborn", background: "Adeptus Astra Telepathica", role: "Mystic", wounds: 11, fate: 3, armour: "Head 2, Arms 4, Body 4, Legs 3", movement: "Half 3, Full 6, Charge 9, Run 18" },
    stats: { WS: 28, BS: 32, S: 25, T: 31, Ag: 35, Int: 38, Per: 41, WP: 45, Fel: 30, Inf: 27 },
    resources: { currentWounds: 11, maxWounds: 11, fatigue: 0, fate: 3, insanity: 0, corruption: 0 },
    weapons: [
      { name: "Compact Laspistol", class: "Pistol", range: "30m", rof: "S/2/-", damage: "1d10+2 E", pen: "0", clip: "30", reload: "Half", special: "Reliable" },
      { name: "Psy-focus Staff", class: "Melee", range: "-", rof: "-", damage: "1d10 I", pen: "0", clip: "-", reload: "-", special: "Psy-focus" }
    ],
    skills: ["Awareness", "Forbidden Lore (Psykers)", "Inquiry", "Linguistics (High Gothic)", "Medicae", "Psyniscience", "Scholastic Lore (Occult)", "Scrutiny"],
    talents: ["Psy Rating 2", "Sanctioned Psyker", "Strong Minded", "Warp Sense", "Weapon Training (Las, Low-Tech)"],
    gear: ["Reinforced psykana robes", "Armoured bodyglove", "Hexagrammic charms", "Emperor's Tarot", "Sedatives", "Data-scrolls", "Blindfold", "Psy-suppressant incense"],
    psychicPowers: [
      { name: "Psychic Shriek", action: "Half Action", focus: "Opposed Willpower", range: "10m x Psy Rating", effect: "Telepathic attack that tears at the target's mind. Use as Ehira's direct offensive power when subtlety is gone." },
      { name: "Sense Presence", action: "Half Action", focus: "Psyniscience", range: "Psy Rating km", effect: "Detects nearby minds and their rough number, direction, and type. Useful for ambushes, hidden rooms, and watchers." },
      { name: "Forewarning", action: "Half Action", focus: "Psyniscience", range: "Self / aura", effect: "Brief divinatory protection. Use before violence starts to help Ehira and nearby allies avoid harm." }
    ],
    notes: "Sanctioned psyker. Secretly engineered sale of the Mortis Abomina as bait."
  },
  "cali-hargrove": {
    meta: { homeWorld: "Hive World", background: "Adeptus Arbites", role: "Seeker", wounds: 13, fate: 3, armour: "Head 2, Arms 4, Body 4, Legs 3", movement: "Half 3, Full 6, Charge 9, Run 18" },
    stats: { WS: 36, BS: 40, S: 32, T: 36, Ag: 38, Int: 36, Per: 42, WP: 38, Fel: 32, Inf: 29 },
    resources: { currentWounds: 13, maxWounds: 13, fatigue: 0, fate: 3, insanity: 0, corruption: 0 },
    weapons: [
      { name: "Shotgun", class: "Basic", range: "30m", rof: "S/-/-", damage: "1d10+4 I", pen: "0", clip: "8", reload: "2 Full", special: "Scatter" },
      { name: "Autopistol", class: "Pistol", range: "30m", rof: "S/3/6", damage: "1d10+2 I", pen: "0", clip: "18", reload: "Full", special: "" },
      { name: "Shock Maul", class: "Melee", range: "-", rof: "-", damage: "1d10+3 I", pen: "0", clip: "-", reload: "-", special: "Shocking" }
    ],
    skills: ["Awareness", "Common Lore (Adeptus Arbites)", "Common Lore (Underworld)", "Dodge", "Inquiry", "Interrogation", "Scrutiny", "Security", "Stealth"],
    talents: ["Deadeye Shot", "Quick Draw", "Rapid Reload", "Weapon Training (Las, Low-Tech, Shock, SP)"],
    gear: ["Enforcer flak coat", "Badge, officially off-case", "Chrono", "Restraints", "Pict recorder", "Photo-visor", "Shell bandolier", "Case notes on Koenig", "Micro-bead"],
    notes: "Off the case. Partner Koenig died investigating corrupt securitor smuggling."
  }
};
