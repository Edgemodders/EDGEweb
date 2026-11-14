---
title: The EDGE Library
nav_title: The Library
section: Start here
order: 6
description: "The EDGE Library: one folder of your own where the EDGE tools keep scenes, bakes, quickhacks and game files for good, outside any project, which tools use it today, and the rules every tool follows there."
reviewed: 2026-11-13
---

# The EDGE <span class="y">Library</span>

The **EDGE Library** is one folder of your own where the EDGE tools keep your work for good, outside any single mod. Today it holds EDGEbuilder's scenes and bakes, EDGEhack's quickhacks, and game files you set aside from REDcode. Sounds from EDGEwave and props from EDGEfab (an asset maker that is not released yet) are planned.

When you make a mod, you copy what it needs out of the Library into the mod's project. Several mods can use the same item.

It's **optional**. If you keep everything in one project, you never have to open the Library, and every tool still works. A newcomer can skip this page.

> **Where it stands:** three tools use the Library in their current releases: EDGEbuilder, EDGEhack and REDcode. The rest is planned. See [Which tools use it](#which-tools-use-it).

## Why have one

A big piece of work, such as a district you extend over months and release in parts, doesn't belong to one mod. The Library is the warehouse for it, and projects are what you ship. A project is one mod's working folder.

| | What it is | How long it lasts |
|---|---|---|
| **The EDGE Library** | Your long-term store: scenes, bakes, quickhacks and assets, in folders you organise | For good. One folder, so a backup is one copy |
| **A tool's Desk** | One tool's scratch area for the work in hand. EDGEmat and EDGEhack have one; EDGEwave's is planned | Across restarts, but not organised or kept for good |
| **A project** | One mod: what gets packed, installed and released. REDcode makes it | As long as the mod |
| **EDGEdeck's mod library** | The mods you have installed, outside the game folder | As long as they're installed |

Another thing shares the word: EDGEdeck's **mod library** (your installed mods, see [EDGEdeck](edgedeck/library.html)). It isn't the EDGE Library. EDGEmat's list of the game's surfaces and microblends was called Library too, up to EDGEmat 0.3.1; since 0.3.2 it is [Game Materials](edgemat/game-materials.html).

## Where it lives

The first tool that needs the Library asks where to put it and offers **`Documents\EDGE Library`**. You can pick any folder that isn't inside the game's folder or a tool's install folder. Every tool, in the game or in VS Code, finds it through one small file, `%APPDATA%\EDGE\library.json`, so changing it in one tool changes it for all.

**Relocate**, which moves the whole Library to another drive in one go, is planned.

## Which tools use it

| Tool | Its part | Status |
|---|---|---|
| [EDGEbuilder](edgebuilder/scenes.html) | Scenes in Library folders, the in-game **Library** tab, scenes shown beside the one you edit | Released. Passed in the game |
| [EDGEbuilder](edgebuilder/baking.html#bakes-in-the-library) | Bakes in the Library, and **Include in project** | Released. Passed in the game |
| [EDGEhack](edgehack/desk-library.html) | Quickhacks kept in the Library: **Add to Library**, **Add to Project**, a Library view and **Refresh from Library** | Released. Tested in VS Code |
| [REDcode](redcode/other-tools.html#the-edge-library) | **Add to Library** on a game file or a project file, with the files it needs | Released. Tested by hand |
| [EDGEwave](edgewave/) | Sounds as Library items | Planned, after its Desk |
| [EDGEmat](edgemat/) | Materials and looks on Library assets | Planned, later |
| EDGEfab | Props as Library items. EDGEfab is not released | Planned |

## What goes in it

| Thing | Made by | Looks like | Today |
|---|---|---|---|
| **Scene** | [EDGEbuilder](edgebuilder/scenes.html) | `market_square.scene.json`: the objects you placed, where they are and their groups | Yes |
| **Bake** | [EDGEbuilder](edgebuilder/baking.html#bakes-in-the-library) | `market_square.bake`: a folder with the game files that put one or more scenes in the world, and a note of what they were baked from | Yes |
| **Quickhack** | [EDGEhack](edgehack/desk-library.html) | `overclock_plus.quickhack.asset`: a quickhack you made or changed, with its icons. It has no game files of its own: they are written into a project when you add it to one | Yes |
| **Asset** | [REDcode](redcode/other-tools.html#the-edge-library) today. EDGEfab, EDGEmat and EDGEwave are planned | `comfy_rocker.mesh.asset`, and later `rusty_oil_drum.prop.asset` or `door_knock.sound.asset`: a folder laid out like a small project, with its game files and what they were made from. It keeps a stable id, so a project finds it even after you rename or move it | Game files from REDcode |
| **Plain file** | You | `model.glb`, `knock.wav`: kept as they are, to use later | Yes |

## Moving things between the Library and projects

| Step | Where | What happens |
|---|---|---|
| **Save** a scene | EDGEbuilder | Into a Library folder you pick, or into the project, or on this PC |
| **Add to Library** | REDcode, EDGEhack | Copies a game file or a quickhack into a Library folder you pick |
| **Add to Project**, **Include in project** | EDGEhack, EDGEbuilder | Copies a Library item's files into the open project and notes where they came from |
| **Refresh from Library** | EDGEhack, on a quickhack in a project | Shows that the Library has a newer version, and copies it when you ask |

For a first try, EDGEbuilder's [Named scenes and the Library](edgebuilder/scenes.html#named-scenes-and-the-library) and EDGEhack's [The Desk and the Library](edgehack/desk-library.html) each walk through it.

## The rules every tool follows

| Rule | What it means for you |
|---|---|
| **The folders are yours** | Make any folders you like, such as `Production\Meshes` and `Development\Meshes`, or `Alleys\Kabuki`. No tool makes `scenes` or `meshes` folders on its own. A tool offers the folder you used last |
| **Use the game path, if you want it** | A game path is where a file sits inside the game's own files, such as `base\environment\decoration`. When you add something from the game's files, the tool offers to put it in Library folders that match that path, so the Library looks like the game's files in Explorer. It's your choice, and the tool remembers it. It isn't offered for things with no game path: scenes, bakes, quickhacks, and models and sounds of your own |
| **The file name says what a thing is** | A scene ends in `.scene.json`, a bake in `.bake`, an asset in `.<kind>.asset`, so it doesn't matter which folder they're in. A search for `mesh` finds every mesh asset |
| **Plain files are welcome** | A GLB, FBX, `.blend`, images or a WAV you keep to use later can sit in any folder as they are |
| **A project remembers what it took** | When a tool copies something from the Library into a project, it notes it in the project (`source\library.json`), so the project can later show what changed in the Library and take the new version |
| **A Desk is one tool's own** | Work in progress waits on that tool's Desk, then goes to a project or into the Library. Only the Library is shared |
| **Never in the game folder** | Installing mods and REDnode's hot reload never touch the Library |

## If you build tools

The exact shapes (the asset item's `asset.json`, the project's `source\library.json`, a bake's `bake.json`) are on [EDGEbuilder's Library page](https://edgemodders.github.io/EDGEbuilder/library.html#shared-rules), with EDGEfab's [Library assets page](https://edgemodders.github.io/EDGEfab/library.html) for assets. A tool that wants another kind of item, or a change to the rules, asks there with an issue labelled `request`.
