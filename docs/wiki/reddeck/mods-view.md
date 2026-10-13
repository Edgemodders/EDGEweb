---
title: The Mods view and the REDdeck page
nav_title: The Mods view
section: REDdeck
order: 3
description: "Find your way around REDdeck: the Mods view in the sidebar, the wide REDdeck page, the detail panel and the status bar."
reviewed: 2026-10-13
---

# The Mods view and the <span class="y">REDdeck page</span>

REDdeck shows your mods in two places. The **Mods view** in VS Code's sidebar is the compact everyday list. The **REDdeck page** is a wide table in the editor area for bigger jobs: searching, filtering, sorting by size. Both show the same library, and a change in one appears in the other.

## The Mods view

{% include shot.html caption="The Mods view" shows="The sidebar list with the Frameworks group (and its game version line) above the Mods group, checkboxes, the status text after each name, and one mod expanded to show its folders and files." %}

The list has up to three groups:

| Group | Holds |
|---|---|
| **Set up** | Steps still to do. Disappears when there are none. See [Install and set up](install.html) |
| **Frameworks** | RED4ext, Cyber Engine Tweaks, redscript, ArchiveXL, TweakXL, Codeware, Audioware, input_loader and mod_settings. Pinned at the top because most mods need them. The header shows the game version, for example `3, 3 on · game 2.31`. See [Frameworks and game patches](frameworks.html) |
| **Mods** | Everything else, in order. A mod higher in the list wins conflicts |

### A mod's row

- **The checkbox** turns the mod on or off. Nothing changes in the game until you [deploy](deploying.html).
- **After the name:** the version, how many other versions of the mod the library holds, its size, and its status.
- **Hover the row** for the move-up and move-down buttons. Higher in the list wins a [conflict](conflicts.html).
- **Hover anything** for a card with its size, dates, where it deploys and where it came from.
- **Expand a mod** to see the folders it deploys into (such as `archive/pc/mod` or a CET mod folder) and the files in each. Click a file to open it in the editor.
- **Click the name** to open the mod's detail panel.
- **Right-click** for everything else: Details, Open on Nexus Mods, Switch version, Reveal in File Explorer, Remove, and Add to Project when a REDcode project is open.

### What the status means

| Status | Meaning | What to do |
|---|---|---|
| `deployed` | On, and its files are in the game | Nothing |
| `not deployed yet` | On, but you haven't deployed since turning it on | Deploy |
| `off` | Off, and not in the game | Nothing |
| `off, still deployed` | You turned it off, but its files are still in the game | Deploy to take them out |
| `changed in game folder` | Something outside REDdeck changed one of its deployed files | Deploy; REDdeck asks what to keep. See [Deploying](deploying.html#changes-made-outside-reddeck) |
| `changed, deploy again` | Its files in the game no longer match the library | Deploy |
| `update 1.2 available` | Nexus has a newer version | Click it to update. See [Nexus Mods](nexus.html) |
| `loses 3 archive files` | Another mod overrides 3 resources inside its archives | Check [Conflicts](conflicts.html) if that's not what you want |
| `overrides 2 archive files` | It overrides 2 resources inside another mod's archives | Usually intended |

### The view's buttons

The title bar has **Open REDdeck**, **Add mod**, **Deploy**, **Nexus: check for updates** and **Refresh**. The **`...`** menu holds the rest: Show conflicts, Show pending changes, Import from Vortex, Undo deploy, Nexus sign in, Nexus: add from a link, Add from REDcode project, Get REDbridge, Pick the game folder, Open library folder, Show log, Save loadout and Load loadout.

## The detail panel

Click a mod's name for its detail panel, which opens in the editor area.

{% include shot.html caption="A mod's detail panel" shows="The detail panel for one mod: its version and source, the files it deploys with their sizes per folder, its conflicts by file path and inside archives, and the action buttons." %}

It shows the files the mod deploys and their sizes, folder by folder, and its conflicts, both by file path and inside archives. Its buttons turn the mod on, move it, open its folder, open it on Nexus, update it and remove it.

## The REDdeck page

**Open REDdeck**, the first button in the view's title bar, opens the wide table.

{% include shot.html caption="The REDdeck page" shows="The full-width REDdeck table with search, the facet chips (On, Off, Needs deploy, Conflicts, Update available) and their counts, the toolbar, and the footer with disk use and the running REDbridge." %}

| Part | What it does |
|---|---|
| **Columns** | On/off, name, version, kinds, size, status, and a `...` menu per row |
| **Search** | Matches name, version, kind and status |
| **Facet chips** | Narrow the list to On, Off, Deployed, Not deployed, Needs deploy, Changed in game folder, Conflicts or Update available. Each shows its count |
| **Largest first** | Sorts every mod by size, across both groups |
| **The version cell** | A dropdown when the library holds several versions of a mod, or Nexus has a newer one. Pick a version to switch to it, or **Get x.y from Nexus** |
| **Status links** | When a deploy is waiting for a mod, its status opens the list of files the next deploy will add, replace, put back or remove for it, and why |
| **Toolbar** | Add mod, Check updates (or Nexus sign in), Conflicts with a count, Undo deploy, the number of changes waiting, and Deploy |
| **Footer** | The library folder and whether deploy uses hardlinks or copies, the last deploy, disk use, and which REDbridge is running |

The page remembers your search and filters.

## Kinds

Each mod shows **kind** chips that say what's inside it. A mod can be several kinds at once: a vehicle mod might be `archive`, `reds`, `cet` and `tweak` together. Reading the chips is a quick way to learn how Cyberpunk mods are built.

| Kind | What's inside |
|---|---|
| `archive` | `.archive` files: models, textures, sounds and other game resources |
| `xl` | ArchiveXL files that add new things rather than replace them |
| `reds` | redscript scripts |
| `tweak` | TweakXL files that change the game's database of items and stats |
| `cet` | A Cyber Engine Tweaks Lua mod |
| `red4ext` | A native RED4ext plugin |
| `redmod` | A package in CD PROJEKT RED's own REDmod format |
| `audioware`, `input`, `config`, `asi` | Sound packs, key bindings, settings overrides, ASI plugins |
| `framework` | One of the frameworks other mods build on |

## The status bar

The status bar at the bottom of VS Code shows REDdeck in one line: how many mods are on, whether a deploy is waiting, or that the game wasn't found. Click it to deploy, or to pick the game folder.
