---
title: EDGEmat's Game Materials
nav_title: Game Materials
section: EDGEmat
order: 2
description: "EDGEmat's Game Materials view: every surface (leather, denim, chrome...) and every microblend (detail texture) in your Cyberpunk 2077, with thumbnails, filtered by plain words."
reviewed: 2026-11-13
---

# Game <span class="y">Materials</span>

Game Materials is the view below the [Desk](desk.html) in EDGEmat's sidebar. It lists the building blocks every multilayered material is made from, read from your own game:

| Group | What it holds |
|---|---|
| **Surfaces**, by category | The game's surfaces (its `.mltemplate` files), about 390 of them: leather, denim, chrome, rubber, paint, dirt and more, grouped as the game groups them (fabric, metal, plastic and so on). A surface is a material's texture and its list of colors and finishes. Each layer of a garment uses one |
| **Microblends** | About 130 small detail textures that break up a layer's edges with wear, dirt, scratches or prints. The second top-level group, below all the surface categories |

The line at the top of the view counts them and says when the list was built, for example "386 surfaces · 131 microblends · built 2026-10-19".

Up to version 0.3.1 this view was called **Library**. It was renamed in 0.3.2, because the [EDGE Library](../library.html) now means the folder of your own work that the EDGE tools share. It holds the same list as before.

{% include shot.html caption="Game Materials" shows="The Game Materials view with the fabric category open, showing leather and denim surfaces with their thumbnails, and the hover card of one surface with its larger thumbnail, color count and game path." %}

## Looking around

- **Thumbnails** show each surface's texture. Most surface textures are grey detail (the color comes from the layer), so the thumbnails are grey too; a few show a relief picture when the surface's texture is flat.
- **Hover** a surface for a larger thumbnail, how many colors it offers and its game path. Hover a microblend for its picture, name and game path. Long paths wrap onto a second line.
- **Click** a surface or a microblend to open its [surface page](surfaces.html).
- **Copy Game Path** (the copy icon that appears when you hover a row, or the right-click menu) puts the file's game path on the clipboard, for WolvenKit, REDcode or a mod's notes.
- **Collapse All** in the view's title bar folds everything back, which shows the two groups side by side.

## Filter

Press the **funnel** in the view's title bar (**Filter Game Materials**) and type plain words, such as `leather`, `worn chrome` or `denim`. Every word must be in a surface's or microblend's name or path. The list narrows to the matches, opened down to each one, and the count at the top changes. **Clear Filter** (the icon beside it) brings the full list back, folded the way you left it.

The funnel only narrows this list. To find a garment by its name, use [Find](find.html), the view below, which searches the game's clothing.

## The title bar

Hover the **GAME MATERIALS** header to see its buttons, left to right:

| Button | Does |
|---|---|
| **New Material...** (sparkle) | Opens the [New Material](new-material.html) page, not aimed at a garment yet |
| **Open Setup...** (a page with an arrow pointing into it) | Opens a garment's setup from the game, a file on disk, or a mod's archive. See [The setup editor](setup-editor.html#opening-a-setup) |
| **Filter Game Materials** (funnel) | Narrows the list by plain words |
| **Clear Filter** | Shown while a filter is set |
| **Rebuild Game Materials** (refresh) | Builds the list again from the game. Rarely needed: EDGEmat rebuilds on its own after a game update. With the thumbnails already made, a rebuild takes a few seconds |
| **`...`** › **Set Game Folder** | Picks the Cyberpunk 2077 install EDGEmat reads |
| **`...`** › **Show Log** | EDGEmat's log, in VS Code's Output panel. Start here when something looks wrong ([Troubleshooting](troubleshooting.html)) |
| **`...`** › **Connect an Assistant (MCP)...** | Connects Claude Code to EDGEmat ([Assistants](assistants.html)) |

## Where the list lives

In `%LOCALAPPDATA%\EDGEmat`, on your PC only. It is built from your game and never shipped, so EDGEmat stays current with game patches and carries no game data. The MCP server for assistants uses the same list (its tool is still called `mat_library`). Deleting the folder is safe for this list, which EDGEmat builds again on its next start, but the [Desk](desk.html) lives there too, with your edits on it.
