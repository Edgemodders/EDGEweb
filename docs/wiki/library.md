---
title: The EDGE Library
nav_title: The Library
section: Start here
order: 5
description: "The EDGE Library: one folder of your own where the EDGE tools keep scenes, bakes and assets for good, outside any project, and the rules every tool follows there."
reviewed: 2026-11-11
---

# The EDGE <span class="y">Library</span>

The **EDGE Library** is one folder of your own where the EDGE tools keep your work for good, outside any single mod: EDGEbuilder's scenes and bakes, EDGEfab's props, game assets you set aside from REDcode, EDGEwave's sounds, EDGEhack's quickhacks. A mod (a REDcode project) takes from it what it needs, and several mods can take the same thing.

It's **optional**. If you keep everything in one REDcode project, you never have to open the Library, and every tool still works.

> **Where it stands (2026-11-04):** the rules on this page are agreed between the tools. No tool that uses the Library has passed its in-game or hands-on test yet. See [Which tools use it](#which-tools-use-it).

## Why have one

A big piece of work, such as a district you extend over months and release in parts, doesn't belong to one mod. The Library is the warehouse for it, and projects are what you ship.

| | What it is | How long it lasts |
|---|---|---|
| **The EDGE Library** | Your long-term store: scenes, bakes, assets, in folders you organise | For good. One folder, so a backup is one copy |
| **A tool's Desk** | One tool's scratch space for the work in hand (EDGEmat, EDGEfab, and EDGEwave soon) | Across restarts, but not organised or kept for good |
| **A REDcode project** | One mod: what gets packed, installed and released | As long as the mod |
| **EDGEdeck's mod library** | The mods you have installed, outside the game folder | As long as they're installed |

Two other things share the word: EDGEdeck's **mod library** (your installed mods, see [EDGEdeck](edgedeck/library.html)) and EDGEmat's **Library** view (the game's surfaces and microblends, see [EDGEmat](edgemat/library.html)). Neither is the EDGE Library.

## Where it lives

The first tool that needs the Library asks where to put it and offers **`Documents\EDGE Library`**. You can pick any folder that isn't inside the game's folder or a tool's install folder. Every tool, in the game or in VS Code, finds it through one small file, `%APPDATA%\EDGE\library.json`, so changing it in one tool changes it for all.

**Relocate**, which moves the whole Library to another drive in one go, is planned.

## The rules every tool follows

| Rule | What it means for you |
|---|---|
| **The folders are yours** | Make any folders you like, such as `Production\Meshes` and `Development\Meshes`, or `Alleys\Kabuki`. No tool makes `scenes` or `meshes` folders on its own. A tool offers the folder you used last |
| **Use the game path, if you want it** | When you add something from the game's files, the tool offers to put it in folders that match its game path, so the Library looks like the game's files in Explorer. It's your choice, and the tool remembers it for next time. It isn't offered for things with no game path (scenes, bakes, models and sounds of your own, quickhacks) |
| **Things say what they are by their name** | A scene ends in `.scene.json`, a bake in `.bake`, an asset in `.<kind>.asset`, so it doesn't matter which folder they're in. A search for `mesh` finds every mesh asset |
| **Plain files are welcome** | A GLB, FBX, `.blend`, images or a WAV you keep to use later can sit in any folder as they are |
| **A project remembers what it took** | When a tool copies something from the Library into a project, it notes it in the project (`source\library.json`), so the project can later show what changed in the Library and take the new version |
| **A Desk is one tool's own** | Work in progress waits on that tool's Desk, then goes to a project or into the Library. Only the Library is shared |
| **Never in the game folder** | Installing mods and REDnode's hot reload never touch the Library |

## What goes in it

| Thing | Made by | Looks like |
|---|---|---|
| **Scene** | [EDGEbuilder](edgebuilder/) | `market_square.scene.json`: the objects you placed, where they are and their groups |
| **Bake** | [EDGEbuilder](edgebuilder/scenes.html#bakes-in-the-library) | `market_square.bake`: a folder with the game files that put one or more scenes in the world, and a note of what they were baked from |
| **Asset** | EDGEfab, REDcode, later EDGEmat and EDGEwave | `rusty_oil_drum.prop.asset`, `comfy_rocker.mesh.asset`, `door_knock.sound.asset`: a folder laid out like a small project, with its game files and what they were made from. It keeps a stable id, so a project finds it even after you rename or move it |
| **Quickhack** | EDGEhack | `overclock_plus.quickhack.asset`: a quickhack you made or changed, kept as EDGEhack's own document with its icons. It has no game files of its own: they're written into a project when you add it to one |
| **Plain file** | You | `model.glb`, `knock.wav`: kept as they are, to turn into assets later |

## Moving things between the Library and projects

| Step | Where | What happens |
|---|---|---|
| **Save** a scene | EDGEbuilder | Into a Library folder you pick, or into the project, or on this PC |
| **Add to Library** | REDcode, EDGEfab, EDGEwave, EDGEhack | Copies a game file, a prop, a sound or a quickhack into a Library folder you pick |
| **Add to Project**, **Include in project** | EDGEfab, EDGEwave, EDGEhack, EDGEbuilder | Copies a Library item's files into the open project and notes where they came from |
| **Refresh from Library** | A project | Shows what changed in the Library since it was added, and copies the new version when you ask |

## Which tools use it

| Tool | Its part | Status |
|---|---|---|
| [EDGEbuilder](edgebuilder/) | Scenes in Library folders, the in-game **Library** tab, scenes shown beside the one you edit | Passed in game, released as 0.6.7 on 2026-11-05 |
| EDGEbuilder | Bakes in the Library, Include in project | Passed in game, released as 0.9.0 on 2026-11-08 |
| EDGEfab | Props as asset items, its Desk, Add to Library and a Library view | In progress (its first build, F1). Its Desk is built; the Library side is next |
| [REDcode](redcode/) | **Add to Library** on a game file or a project file | Planned |
| [EDGEwave](edgewave/) | Sounds as asset items | Planned, after its Desk |
| [EDGEmat](edgemat/) | Materials and looks on Library assets | Later |
| [EDGEhack](edgehack/) | Quickhacks as asset items, Add to Library and Add to Project, a Library view, Refresh from Library | Built and tested; ships with EDGEhack's first release |

## For tool makers

The exact shapes (the asset item's `asset.json`, the project's `source\library.json`, a bake's `bake.json`) are on [EDGEbuilder's Library page](https://edgemodders.github.io/EDGEbuilder/library.html#shared-rules), with EDGEfab's [Library assets page](https://edgemodders.github.io/EDGEfab/library.html) for assets. A tool that wants another kind of item, or a change to the rules, asks there with an issue labelled `request`.
