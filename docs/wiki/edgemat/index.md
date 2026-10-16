---
title: EDGEmat
nav_title: Overview
section: EDGEmat
order: 0
description: "EDGEmat, the EDGE platform's planned material editor: recolor Cyberpunk 2077's clothing and objects in VS Code, or ask an AI assistant to. Design done, no code yet."
reviewed: 2026-10-16
---

# EDGE<span class="y">mat</span>

EDGEmat will be the EDGE platform's material editor for Cyberpunk 2077. Pick a jacket, click one of its layers, choose a color and see the result on the model. Or skip the buttons and tell REDagent or Claude: "make this jacket red".

**It is planned.** The design and the specification are done; there is no code to try yet. The first build phase, the material library, is next.

## What it's for

In Cyberpunk 2077, most clothing and many objects get their look from **multilayered materials**. A jacket isn't one picture: it is a stack of up to 20 layers, such as leather, metal studs and stitching, each painted onto part of the model by a mask. A small file, the `.mlsetup`, says which surface and which color each layer uses.

Recoloring an item means editing that file. Today that takes specialist tools and some knowledge of how the layers fit together. EDGEmat aims to make it a few clicks:

- **find an item's materials** from its name, without knowing the file paths behind it;
- **show the layers in plain words**: "leather, dark red, 41% of the jacket", with the raw values one click away;
- **pick colors from swatches**, and find the nearest match when you ask for "red";
- **swap surfaces**, such as leather for worn chrome, from a library built from your own game;
- **preview the result** on the model before you pack the mod;
- **open a material file from anywhere**, such as another mod, look inside, and save a copy into your own project.

One thing to know: a layer's color isn't a free choice. Each surface offers a fixed list of colors, so "red" means the closest red that surface has, or a different surface with a better one. This was checked against the game while writing the specification. Truly free colors are a later phase.

## How it fits into EDGE

| Part | Role for EDGEmat |
|---|---|
| [REDbridge](../redbridge/) | Reads and writes every game file, using WolvenKit's engine |
| [REDcode](../redcode/) | Optional. When it's installed, EDGEmat takes the game folder, REDbridge and the open project from it, so there's nothing to set up twice. REDcode's 3D viewer will show EDGEmat's materials on the mesh |
| REDagent and Claude | EDGEmat's MCP server lets an AI assistant find, describe and recolor materials, and look at a preview of its own work. Every feature comes to the buttons and the assistant together. With no assistant connected, EDGEmat makes no network calls |
| [EDGEkit](../edgekit/) | Will include EDGEmat once it is released |

EDGEmat builds its material library from your own game the first time it runs, so it ships no game data and stays current after game patches.

## Status

As of 2026-10-16:

| Phase | State |
|---|---|
| M0 Spec | **Done 2026-10-16.** The specification is written and checked against the game's files, with tests in the game |
| M1 Library and later | Not started. M1 is next |
| Release | None. There is no code yet |

## Roadmap

In plain words. Each phase ends with a test on the developer's PC.

| Phase | What it adds |
|---|---|
| M0 Spec | What a material editor must understand, written down and checked against the game. Done |
| M1 Library | The extension's first build, and the library of surfaces and detail textures from your game, with thumbnails |
| M2 Read | Open a material and see its layers in plain words, with swatches and masks. Find an item's materials. An assistant can describe them |
| M3 Edit | Change surfaces, colors, tiling and detail, with undo, and save into your mod project. Ask an assistant to do it. The goal: a recolored jacket that shows correctly in the game |
| M4 Preview | A live preview of the material on the model, in EDGEmat and in REDcode's viewer, compared with the game |
| M5 Beyond layers | Other kinds of material, mesh appearances, and colors no surface offers |
| M6 Ship | Release on the VS Code Marketplace and Open VSX, docs, a Nexus Mods page, and a place in EDGEkit. The goal: a non-coder recolors an item from the docs alone |

A longer-term idea in the design: change materials in the running game by asking REDagent, for example looking at a crate and saying "make it blue". It has no phase yet.

## Credits

EDGEmat learns from [MlsetupBuilder](https://github.com/Neurolinked/MlsetupBuilder) by Neurolinked, the multilayered material editor many modders already know, and from [WolvenKit](https://github.com/WolvenKit/WolvenKit) and the [Cyberpunk 2077 modding wiki](https://wiki.redmodding.org/). EDGEmat is a new editor written from scratch: it studied how MlsetupBuilder behaves, and uses none of its code or data. Neurolinked has been contacted about it. EDGEmat is an EDGEmodders project; it is not made with or endorsed by MlsetupBuilder's author.

## Reference

- [EDGEmat docs](https://edgemodders.github.io/EDGEmat/), with the [design](https://edgemodders.github.io/EDGEmat/design.html) and the [behavior spec](https://edgemodders.github.io/EDGEmat/design/behavior.html)
- [Source and issues](https://github.com/Edgemodders/EDGEmat)
