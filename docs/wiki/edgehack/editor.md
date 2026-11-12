---
title: The EDGEhack editor
nav_title: The editor
section: EDGEhack
order: 3
description: "Every section of a quickhack's page in EDGEhack: texts, feature lines, numbers, cooldown, icons of your own, added and built effects, and Get it."
reviewed: 2026-11-11
---

# The EDGEhack <span class="y">editor</span>

A quickhack you change or make is a document, `<name>.quickhack.json`, kept in your project (or on the [Desk](desk-library.html)). It holds only what you changed, in your words: the numbers you want, not differences. Its page is the editor. Each save writes the mod's files into the project.

There are two kinds of document:

| Kind | Made with | What it changes |
|---|---|---|
| **A change** to a game quickhack | **Edit** on a quickhack in the Quickhacks view | The game's own quickhack, for everyone who installs the mod |
| **A new quickhack** | **Clone and Modify...** | Nothing of the game's: it has records of its own, beside the one it started from |

## Texts

**Name**, **Description** and **Wheel text**. An empty field keeps the game's text, shown in grey. A change to a game quickhack puts its texts on every tier. The wheel text shows only for a hack whose Hacking tab has no effects list.

**Feature lines** are bullets of your own in the item's tooltip, after the game's: say what a script or an added effect does. **Add a line**, type it (up to 160 characters), and pick the tier it shows from; a tier shows its own lines and those of the tiers below it, as the game's do.

{% include shot.html src="/assets/shots/edgehack/editor-texts.webp" caption="Texts and feature lines" shows="The Texts section of a quickhack's page: Name, Description and Wheel text with the game's texts in grey, and two feature lines below with their From tier pickers and Add a line." %}

## Numbers

A table with a column per tier and a row per number. Click a tier's header to select it: Try Live gives that tier, and the icons show it.

| Row | What it is |
|---|---|
| **RAM** | What it costs to upload |
| **Upload** | Seconds to upload |
| **Damage a hit** | A tick, for damage over time (the game's tooltip gives it a second) |
| **Duration** | Seconds its main effect lasts |
| **Against bosses: RAM**, **Against bosses: upload** | A change to a game quickhack only: its versions for bosses. Left empty, a boss gets the same change as the tier |

Each row's **All tiers** gives every other tier the same difference from its own value. A number set back to the game's is taken out of the document. Some numbers differ in the Hacking tab from the inventory's: the game works them out with V's perks and the target's resistances, and the page names what scales each one.

**Cooldown for every tier** is the family's: the game's tiers share one. A new quickhack gets a cooldown of its own.

{% include shot.html src="/assets/shots/edgehack/editor-numbers.webp" caption="The Numbers table" shows="The Numbers table with six tier columns, Rare selected, the RAM row changed on every tier and the other rows showing the game's values in grey, and the cooldown field below." %}

## Icons

A quickhack has three icons: the **Item** (its card in the inventory), the **Wheel** (on the quickhack wheel) and the **Status** (over a target it is on). For each one:

| Button | What it does |
|---|---|
| **Change...** | Picks another of the game's icons (the Item and the Wheel) |
| **Upload...** | Takes a PNG or JPG and fits it to the game's size: 99 x 128 for the Item, 64 x 64 for the Wheel and the Status. **Black is see-through** turns black into transparency, as the game's wheel and status icons are |
| **Generate...** | OpenAI's GPT Image draws it from your words, in that icon's look. **Keep** puts it in; **Try Again** draws another; **Show the Prompt** shows what was sent |
| **Original** | Goes back to the game's icon |

**Generate All...** draws the Item first, then the Wheel and the Status from it, so all three show the same glyph. The Item is drawn as a glyph only, and EDGEhack puts it on the game's own card for that quickhack, read from your game. Each picture is one paid image on your OpenAI account: the first Generate asks for your key and keeps it encrypted in VS Code's secret storage, for EDGEhack only. **EDGEhack: Set the OpenAI Key...** changes it. Settings choose the model (`edgehack.generate.model`) and quality (`edgehack.generate.quality`, medium by default). While it draws, a notification shows its progress, with **Cancel**.

On save, your pictures go into one texture with the game's UI setup and an atlas in your project. Own icons need REDcode 0.10.8 or later.

{% include shot.html src="/assets/shots/edgehack/editor-icons.webp" caption="Icons of your own" shows="The Icons section: the Item card with a generated glyph on the game's card, the Wheel and Status icons beside it, each with Change, Upload, Generate and Original, and a generated picture waiting with Keep and Try Again." %}

## Added effects

**Add Effect...** opens a dialog with three tabs:

| Tab | What it adds |
|---|---|
| **Copy Existing** | Another quickhack's effect, such as Contagion's poison. It follows that quickhack's tiers |
| **Status Effects** | Any of the game's status effects, on the target or on V. Those a quickhack or grenade of the game already puts on a target come first: the safest picks |
| **Make New** | One EDGEhack builds: a **damage over time** of a type (electric, thermal, chemical, physical), a **stat change** while hacked (accuracy, armor, resistances, detection and more), or a **chance to apply** a status effect |

Each added effect has its numbers per tier (duration, stacks, damage, seconds between hits, the stat's value, the chance) and can be left off a tier. It uses the game's own record until you change a number on a tier: that tier then gets a copy of its own, which changes nothing else in the game.

Under the section, **warnings** flag what is irregular or unverified, and **notes** explain the game working as designed. One example: EDGEhack keeps poison and bleed off machines (drones, androids, mechs), since the game would let them hit through your quickhack.

{% include shot.html src="/assets/shots/edgehack/editor-effects.webp" caption="Added effects" shows="The Added effects section with two cards: Contagion's poison and a built thermal damage over time, each with its numbers per tier, and a note under them in grey." %}

## Get it

New quickhacks only. Each tier is sold and crafted the way the game's tier it started from is: the same vendors, the same gate (a street cred or a quest), and a schematic of its own where the game sells one. Per tier, **Sell it there** can be switched off, and **Components to craft it** changed. A Console line per tier gives you that tier in the game through REDnode's Console, for testing; it shows once the quickhack is in a project, since its records take the project's name.

## Try it

1. Open a quickhack you made and type a RAM in the Rare column, a little lower than the grey value.
2. Press **All tiers**, then save.
3. Open the TweakXL file the status line names. Each tier's RAM change is there, as a difference from the game's value.
