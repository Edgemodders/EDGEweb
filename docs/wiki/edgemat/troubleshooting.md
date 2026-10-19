---
title: Troubleshooting EDGEmat
nav_title: Troubleshooting
section: EDGEmat
order: 9
description: "Fixes for common EDGEmat problems: game or REDbridge not found, a library that won't build, a scrambled color map, View in 3D not opening, and Find finding nothing."
reviewed: 2026-10-19
---

# Troubleshooting <span class="y">EDGEmat</span>

## Start with the log

**Show Log** in the Library's **`...`** menu, or **View**, **Output**, then **EDGEmat** in the dropdown. It says which game and which REDbridge EDGEmat uses ("Using REDcode's REDbridge for ...", or "Starting REDbridge from ..."), how the library build went, and every file it couldn't read. When you ask for help, include those lines.

## Problems and fixes

### "EDGEmat needs your Cyberpunk 2077 folder"

EDGEmat couldn't find the game through REDcode or in the usual Steam, GOG and Epic folders. Press **Set Game Folder** and pick the folder that contains `bin`, `archive` and `r6`. EDGEmat only accepts a folder with `bin\x64\Cyberpunk2077.exe` in it.

### "EDGEmat reads the game through REDbridge, which was not found"

EDGEmat needs REDbridge 0.8.0 or later. The easy way: install [REDcode](../redcode/) and run its **Install REDbridge**, then press **Rebuild Library** in EDGEmat. Or set `edgemat.bridgePath` to `REDbridge.exe` ([Settings](settings.html)).

If the log says REDbridge "could not start", .NET 10 may be missing or installed for your user only: REDcode's **Install REDbridge** fetches it, or see `edgemat.dotnetRoot`.

### "The library could not be built"

Press **Show Log** for the reason, then **Try Again**. Common causes: REDbridge stopped (it restarts when needed; try again), or REDcode's REDbridge is older than 0.8.0 (update it in REDcode). A few files the game itself lacks are listed apart as "missing in the game"; that's normal and not an error.

### The Library shows old data after a game update

EDGEmat checks the game's archives on every start and rebuilds when they changed. If it didn't, press **Rebuild Library**.

### The setup editor's color map looks scrambled

The setup is probably drawn with the wrong mask set: a setup doesn't name its masks, so when you open one directly EDGEmat guesses by name. Press **Change** on the "Mask set" line under the map and pick another, or open the setup through [Find](find.html), which uses the mask set the garment's mesh names.

### A layer says "shows white"

The layer names a color its surface doesn't offer, and the game draws such a color white. That's in the file itself, often from hand editing. Editing comes in the next phase; until then, fix it in WolvenKit with a color from the surface's [page](surfaces.html).

### Find finds nothing

- Names come from your game in English: try part of the name ("ammo"), or the record id ("CasualShoes").
- Items added by mods aren't followed yet. Find their meshes by path instead.
- The first search reads the game's clothing list and takes a few seconds; if REDbridge isn't running, Find says so.

### Find is missing from the sidebar

It's there, below the Library, often collapsed at the bottom: click its **FIND** header. Collapse the Library (click its header) if Find is squeezed. The magnifier at the top of the Library is Search Library, not Find.

### View in 3D does nothing, or says REDcode isn't installed

- View in 3D needs [REDcode](../redcode/). Without it, the eye offers to show REDcode's extension page.
- "REDcode's REDbridge is not running": press **Restart REDbridge** in the message, wait for it, then click the eye again.

### The 3D view shows flat colors

- Pick the look you came from in the viewer's appearance list: REDcode starts on the mesh's first look, and the status bar names the right one.
- Some materials have no colors to give (glass, hair, lights without a texture) and keep REDcode's flat color.
- If every material is flat, check the log for `3D view:` lines. With none, REDcode didn't ask: restart VS Code with both extensions installed.

### Colors look darker than in the game

Known: EDGEmat shows the surfaces' color values as screen colors, and the game may treat some of them differently. Being checked against in-game screenshots for the full preview (M5).

## Still stuck

Ask on the community [Discord](https://discord.gg/63qP3Erw43), or [open an issue](https://github.com/Edgemodders/EDGEmat/issues) with the log lines and what you did.
