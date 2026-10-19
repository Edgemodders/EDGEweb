---
title: EDGEmat
nav_title: Overview
section: EDGEmat
order: 0
description: "EDGEmat, the EDGE platform's material editor for Cyberpunk 2077: see what a garment is made of, in plain words and in 3D, and soon recolor it or ask an AI assistant to."
reviewed: 2026-10-19
---

# EDGE<span class="y">mat</span>

EDGEmat is the EDGE platform's material editor for Cyberpunk 2077. It runs inside VS Code. Type a garment's in-game name, such as "punk jeans", and EDGEmat shows what it is made of: each layer in plain words ("leather, black, 6% of the jacket"), a map of where each layer sits, and the garment in 3D with its colors. An AI assistant such as Claude can ask EDGEmat the same questions.

**It is a preview.** Version 0.2 reads materials and shows them; it does not change them yet. Recoloring is the next phase.

{% include shot.html caption="EDGEmat in VS Code" shows="VS Code with EDGEmat's icon selected in the activity bar: the Library and Find views in the sidebar, and the setup editor open on the Sunny Ammo sneakers, showing the color map and the layer list." %}

## What it's for

In Cyberpunk 2077, most clothing and many objects get their look from **multilayered materials**. A jacket isn't one picture: it is a stack of up to 20 layers, such as leather, metal studs and stitching. Each layer has a **surface** (leather, denim, chrome), a color from that surface's list, and a **mask** that paints it onto part of the garment. A small file, the `.mlsetup`, holds the stack.

Recoloring a garment means editing that file, and today that takes specialist tools and some knowledge of how the layers fit together. EDGEmat's aim is to make it a few clicks, or one sentence to an assistant. Version 0.2 does the first half, the seeing:

- **find a garment's materials** from its in-game name, down to the exact files behind it, for each body type;
- **show the layers in plain words**: surface, color, shine, metal, bumps and how much of the garment each covers, with the raw values one click away;
- **show where each layer goes**, on a color map you can click;
- **show the garment in 3D** with its colors, in REDcode's viewer;
- **browse every surface and detail texture** in your game, with every color as a named swatch;
- **open a material file from anywhere**: the game, your project, a file on disk, or another mod's archive;
- **answer an assistant**: every one of these is also an MCP tool.

One thing to know: a layer's color isn't a free choice. Each surface offers a fixed list of colors, so "red" means the closest red that surface has, or a different surface with a better one. EDGEmat's surface pages and its "closest to" search are built around that. Truly free colors are a later phase.

## Why you might want it

| If you... | EDGEmat gives you |
|---|---|
| Want to recolor a jacket but don't know where to start | Type the jacket's name; EDGEmat finds its files and lays out its layers in plain words |
| Use MlsetupBuilder or WolvenKit today | The same layers, read through WolvenKit's own engine, with names in plain words and the item-to-files chain done for you |
| Wonder which file a mod changed, or why a layer shows white | Open the mod's archive; EDGEmat reads its setups and flags what looks wrong |
| Want Claude to do it for you | MCP tools to find, describe and pick colors now; to edit, in the next phase |
| Make new clothes or objects | Next: materials for new meshes, including one generated from your words, for [EDGEfab](https://github.com/Edgemodders/EDGEfab) |

## How it fits into EDGE

| Part | Role for EDGEmat |
|---|---|
| [REDbridge](../redbridge/) | Reads every game file, using WolvenKit's engine. EDGEmat needs it |
| [REDcode](../redcode/) | Optional but recommended. With it, EDGEmat takes the game folder and REDbridge from REDcode, so there is nothing to set up. REDcode's 3D viewer shows EDGEmat's colors |
| Claude and other agents | EDGEmat's MCP server lets an AI assistant find, describe and pick colors. Every feature comes to the buttons and the assistant together. With no assistant connected, EDGEmat makes no network calls |
| [EDGEkit](../edgekit/) | Will include EDGEmat once it is released |

EDGEmat builds its material library from your own game the first time it runs, so it ships no game data and stays current after game patches.

## Status

As of 2026-10-19: version 0.2, the first preview, passed every test on the developer's PC and is being prepared for release as a download on [GitHub](https://github.com/Edgemodders/EDGEmat/releases). It is not on the VS Code Marketplace yet; that comes with the full release. Windows only.

| Phase | State |
|---|---|
| M0 Spec | Done 2026-10-16. What a material editor must understand, checked against the game's files and tested in the game |
| M1 Library | Done 2026-10-16 |
| M2 Read | Built and tested 2026-10-19: surface pages, the setup editor, Find, View in 3D, and the assistant's tools. Version 0.2 |
| M3 Edit | Next |

## Roadmap

In plain words. Each phase ends with a test on the developer's PC, and in the game where it matters.

| Phase | What it adds |
|---|---|
| M3 Edit | Change a layer's surface, color, tiling and detail, with undo, and save the result into your mod project, or ask an assistant to. The goal: a recolored jacket that shows correctly in the game |
| M4 Make | Materials for new meshes: from a model's own textures, from a photo, or **generated from your words** ("brown leather") by an AI image service you choose, with your own key. Materials picked from the game for new clothes and objects. A mesh's looks (appearances). This is what [EDGEfab](https://github.com/Edgemodders/EDGEfab) builds on |
| M5 Preview | The full preview: shine, bumps, metal and detail on the model, not just colors, compared with the game |
| M6 Beyond layers | Colors no surface offers, other kinds of material, several layers on a new mesh |
| M7 Ship | The VS Code Marketplace and Open VSX, a Nexus Mods page, a place in EDGEkit. The goal: a non-coder recolors an item from the docs alone |

A longer-term idea in the design: change materials in the running game by asking REDagent, for example looking at a crate and saying "make it blue".

## In this section

| Page | |
|---|---|
| [Install and set up](install.html) | Requirements, installing the preview, the first library build |
| [The Library](library.html) | Every surface and detail texture in your game |
| [Surface pages](surfaces.html) | A surface's colors as named swatches, the closest color to one you name, and its finish in plain words |
| [The setup editor](setup-editor.html) | A garment's layers in plain words, the color map, and what looks wrong |
| [Find](find.html) | From a garment's name to its materials, for each body type |
| [View in 3D](view-in-3d.html) | The garment on its mesh, with its colors, in REDcode's viewer |
| [Assistants](assistants.html) | Let Claude find and describe materials for you |
| [Settings and commands](settings.html) | Every setting and command |
| [Troubleshooting](troubleshooting.html) | Symptoms and fixes |

## Credits

EDGEmat learns from [MlsetupBuilder](https://github.com/Neurolinked/MlsetupBuilder) by Neurolinked, the multilayered material editor many modders already know, and from [WolvenKit](https://github.com/WolvenKit/WolvenKit) and the [Cyberpunk 2077 modding wiki](https://wiki.redmodding.org/). EDGEmat is a new editor written from scratch: it studied how MlsetupBuilder behaves, and uses none of its code or data. Neurolinked has been contacted about it. EDGEmat is an EDGEmodders project; it is not made with or endorsed by MlsetupBuilder's author.

## Reference

- [EDGEmat docs](https://edgemodders.github.io/EDGEmat/): the [design](https://edgemodders.github.io/EDGEmat/design.html), the [behavior spec](https://edgemodders.github.io/EDGEmat/design/behavior.html), the [changelog](https://edgemodders.github.io/EDGEmat/changelog.html) and the [progress log](https://edgemodders.github.io/EDGEmat/progress.html)
- [Source and issues](https://github.com/Edgemodders/EDGEmat)
