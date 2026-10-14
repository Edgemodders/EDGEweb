---
title: REDcode
nav_title: Overview
section: REDcode
order: 0
description: "REDcode, EDGE's Cyberpunk 2077 modding IDE built on VS Code, with WolvenKit compatibility and an MCP server for AI agents."
reviewed: 2026-10-14
---

# RED<span class="y">code</span>

REDcode is EDGE's editor: a Cyberpunk 2077 modding IDE built on VS Code. It brings WolvenKit's workflows into VS Code, where your AI agent already works. WolvenKit's own engine does the file work through [REDbridge](../redbridge/).

## Benefits

- **Browse the game.** A Game Assets tree over the game's archives, folder by folder.
- **Game files as readable JSON.** Open any game file as JSON, edit it and save it back into your project.
- **A real file editor.** A tree and property grid for game files, with undo and redo, backups, and search across a whole file.
- **Viewers and language support.** A texture viewer, a 3D mesh viewer and TweakXL language support.
- **WolvenKit compatible.** Opens and packs WolvenKit projects (`.cpmodproj`). A project made in REDcode opens and packs in WolvenKit.
- **Agent-ready.** `redcode-mcp` gives AI agents the same engine: archives, files as JSON, textures, node-by-node editing, packing, export and import.
- **All of VS Code.** Git, themes, AI assistants and the existing redscript tooling, in one place.

## Status

REDcode 0.7.0 is released. Browsing, editing, packing, installing through REDdeck, export and import, and the mesh viewer were each tested by hand; browsing and packing were checked against WolvenKit. Next: an audio player. Install the `.vsix` from the [releases page](https://github.com/Edgemodders/REDcode/releases) with **Extensions: Install from VSIX...** in VS Code. It needs REDbridge 0.7.0 or newer: **REDcode: Install REDbridge** fetches it.

## Reference

- [REDcode docs](https://edgemodders.github.io/REDcode/), including its [MCP server](https://edgemodders.github.io/REDcode/mcp.html)
- [Source and issues](https://github.com/Edgemodders/REDcode)
