---
title: Your first quickhack
nav_title: Your first quickhack
section: EDGEhack
order: 2
description: "A walk-through: a new quickhack made from Overheat, with more RAM and Contagion's poison, tried live in the game, then packed and played."
reviewed: 2026-11-11
---

# Your first <span class="y">quickhack</span>

This walk-through makes **Static Bloom**: a new quickhack beside the game's Overheat, which costs 2 more RAM and poisons as well as burns. It takes about fifteen minutes. You need EDGEhack [installed](install.html), a WolvenKit project open in REDcode, and the frameworks TweakXL, ArchiveXL and redscript in the game. Step 5 also needs [REDnode](../rednode/) 0.62.0 or later.

## 1. Clone and Modify

1. In EDGEhack's **Quickhacks** view, open **People**, then **Damage Hack**.
2. Right-click **Overheat** and pick **Clone and Modify...**.
3. Type `Static Bloom` and press Enter.

Its name fixes the names of its records in the game, so pick it with care: you can change the name players see later, but the records keep the first one. EDGEhack writes the new quickhack's document into your project and its mod files with it, and opens its page. A message lists the files it added, with **Open**.

{% include shot.html src="/assets/shots/edgehack/first-name.webp" caption="Naming the new quickhack" shows="VS Code with the input box at the top titled Clone and Modify Overheat, Static Bloom typed in it, and the Quickhacks view below with Overheat selected." %}

## 2. Raise its RAM

The **Numbers** table has a column per tier, Common to Legendary++, and a row per number. Empty fields keep the game's value, shown in grey.

1. In the **RAM** row, click the **Rare** field and type a number 2 more than the grey one.
2. Press the row's **All tiers** button. Every other tier gets the same difference from its own value.
3. Save (Ctrl+S).

The page's status says which file the save wrote: a TweakXL file under `source\resources\r6\tweaks` in your project.

{% include shot.html src="/assets/shots/edgehack/first-numbers.webp" caption="RAM on every tier" shows="The Numbers table of Static Bloom: the RAM row filled on every tier, 2 more than the grey game values, and the status line under the title saying the save wrote the TweakXL file." %}

## 3. Add Contagion's poison

1. In **Added effects**, press **Add Effect...**.
2. On the **Copy Existing** tab, pick **Contagion**, then its poison.
3. Save.

The poison follows Contagion's tiers: Static Bloom's Rare tier gets the poison of Contagion's Rare tier. A note under the section says what EDGEhack keeps off machines (poison and bleed don't hit drones and androids through it) and how the game's burn and poison work together.

{% include shot.html src="/assets/shots/edgehack/first-effect.webp" caption="Adding an effect" shows="The Add Effect dialog over the page, on its Copy Existing tab, with Contagion picked and its poison listed with a one-line summary: on the target, chemical damage a second, how long it lasts." %}

## 4. Look at Get it

A new quickhack is sold and crafted the way its source tier is: the same vendors, and a schematic of its own where the game sells one. **Get it** lists each tier's vendors and crafting cost. It also shows a **Console** line per tier for testing, such as:

```
await game.player.addItem("Items.EDGEhack_edgehack_test1_static_bloom_OverheatLvl2Program")
```

Paste it into REDnode's **Console** (F10, then Console in the launcher) to get that tier without buying it.

## 5. Try it live

With the game running, REDnode 0.62.0 or later in it, and a save loaded:

1. Click a tier's column header (Rare) to pick it.
2. Press **Try Live**.
3. In the game, REDnode shows an **Editor request** window for EDGEhack. Press **Allow**. It asks once per game session.

Static Bloom (Rare) is now in V's backpack. Put it in the cyberdeck and upload it on an enemy: it burns and poisons. Its name shows as a text key (`LocKey#...`) for now, because the game reads new names only when it starts. Each save on the page sends the changes again; **Stop** puts the game back. See [Try Live and Pack and Play](try-live.html).

{% include shot.html src="/assets/shots/edgehack/first-allow.webp" caption="Allowing EDGEhack in the game" shows="The game with REDnode's Editor request window: EDGEhack asks to change the game, with Allow and Deny." %}

## 6. Pack and Play

1. Quit the game.
2. On the page, press **Pack and Play**.
3. Start the game and load a save.

REDcode packs the project and installs the mod, through EDGEdeck when you have it. Static Bloom now has its name, and vendors sell it the way they sell Overheat's tiers.

{% include shot.html src="/assets/shots/edgehack/first-in-game.webp" caption="Static Bloom in the game" shows="The game's inventory or cyberdeck screen with Static Bloom selected: its item card with Overheat's icon, its name, its higher RAM cost, and the poison among its effects." %}

## What next

- Change its name, icons and description: [The editor](editor.html).
- Give it a scan check or something when it lands: [Scripts](scripts.html).
- Keep it for other mods: [The Desk and the Library](desk-library.html).
