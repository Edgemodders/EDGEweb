---
title: EDGEhack
nav_title: Overview
section: EDGEhack
order: 0
description: "EDGEhack, a quickhack editor for Cyberpunk 2077 in VS Code: what it is, what it's for, and where it stands."
reviewed: 2026-11-11
---

# EDGE<span class="y">hack</span>

EDGEhack is a quickhack editor for Cyberpunk 2077, in VS Code. Open any of the game's quickhacks and see its tiers, costs and effects in plain words. Change its name, icon, RAM, upload time, damage and duration. Make new quickhacks beside the game's, with effects borrowed from other quickhacks or built from scratch, icons of your own, and logic of your own in JavaScript. Try your changes in the running game without packing, and keep your best work in the EDGE Library.

{% include shot.html src="/assets/shots/edgehack/overview.webp" caption="EDGEhack's editor" shows="VS Code with EDGEhack's editor open on a new quickhack made from Overheat: its item card and name at the top with Add to Project or Pack and Play and Try Live, the Texts section, and the Numbers table with a tier per column. EDGEhack's side bar on the left with the Desk, Library and Quickhacks views." %}

## What it's for

A quickhack in Cyberpunk 2077 is not one file. It is a chain of records in TweakDB, the game's tuning database: an item per tier, an action, effects, status effects, costs, icons in an atlas. Changing one by hand means finding the right records, working out how the game adds up their numbers, and writing a TweakXL file that changes the right ones.

EDGEhack reads that chain from your own game and shows it as one page, in a modder's words. You change what you want; EDGEhack writes the TweakXL and ArchiveXL files into your REDcode project.

| Behaviour | What you do | Status |
|---|---|---|
| **Read** | Open any quickhack and see every tier's texts, icons, costs and effects in plain words | Passed its test |
| **Change** | Edit a game quickhack's texts, icons and numbers, for one tier or every tier | Passed in game |
| **Make new** | **Clone and Modify** a game quickhack into a new one of your own, beside it | Passed in game |
| **Add effects** | Add another quickhack's effect or any status effect, or build a damage over time, a stat change or a chance to apply | Passed in game |
| **Get it** | A new quickhack is sold and crafted the way the game's tier it started from is | Passed in game |
| **Own icons** | Upload pictures, or have OpenAI draw them from your words | Passed in game |
| **Scripts** | A scan check and an on-land function in JavaScript, which REDnode runs in the game | Passed in game |
| **Feature lines** | Bullets of your own in the item's tooltip | Passed in game |
| **Try Live** | See a change in the running game through REDnode, with no packing | Passed in game |
| **Desk and Library** | Work outside a project on the Desk, and keep quickhacks for good in the EDGE Library | Passed their tests |
| **Assistants** | Claude Code, or REDagent in the game, make and change quickhacks with you | Passed in game |

EDGEhack's first release, 0.1.0, is being prepared. Until then it runs from its source, as its tests do.

## Benefits

- **The game's numbers, in plain words.** RAM, upload time, cooldown, duration and damage per hit for every tier, with what scales them in the game.
- **Numbers that survive patches.** A document keeps the number you want, not a difference: after a game patch EDGEhack works out the change again from the game's new values.
- **New quickhacks that act like the game's.** Each gets its own records, its own cooldown, its own action name, and is sold and crafted the way its source tier is.
- **Effects from anywhere.** Borrow Contagion's poison for Overheat, put a status effect on the target or on V, or build one from the game's own effector classes.
- **Your own logic.** A scan check that decides per person whether the hack is usable, and a function when it lands, in plain JavaScript with types for completion.
- **See it before you pack.** Try Live puts your change in the running game and takes it out again.
- **A mod you can read.** Plain TweakXL YAML and ArchiveXL files in your REDcode project, which you can open and change.

## Pages

| Page | What it covers |
|---|---|
| [Install and set up](install.html) | What EDGEhack needs, and where it shows in VS Code |
| [Your first quickhack](first-quickhack.html) | A walk-through: a new quickhack from Overheat, changed, tried live and played |
| [The editor](editor.html) | Every section of a quickhack's page: texts, numbers, icons, effects, Get it, feature lines |
| [Scripts](scripts.html) | A quickhack's own logic, run by REDnode |
| [Try Live and Pack and Play](try-live.html) | Seeing a change in the game, with and without packing |
| [The Desk and the Library](desk-library.html) | Work in progress, and quickhacks you keep for good |
| [Assistants](assistants.html) | Claude Code and REDagent making quickhacks with you |
| [Troubleshooting](troubleshooting.html) | Fixes for common problems |

EDGEhack's [docs site](https://edgemodders.github.io/EDGEhack/) has its design, with how the game builds a quickhack, and its tests.
