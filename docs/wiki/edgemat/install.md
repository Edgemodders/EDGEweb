---
title: Install and set up EDGEmat
nav_title: Install and set up
section: EDGEmat
order: 1
description: "What EDGEmat needs, installing the preview from its GitHub release, and the first build of the material library from your game."
reviewed: 2026-10-20
---

# Install and set up <span class="y">EDGEmat</span>

## What you need

| You need | Notes |
|---|---|
| Cyberpunk 2077 on Windows | Steam, GOG or Epic. EDGEmat reads the game's own files; it ships none |
| [VS Code](https://code.visualstudio.com/) 1.70 or later | EDGEmat is a VS Code extension. VSCodium and EDGEkit work too |
| REDbridge 0.8.0 or later | The engine that reads the game's files. The easy way is [REDcode](../redcode/): its **Install REDbridge** fetches REDbridge and the .NET 10 runtime it needs, and EDGEmat then uses REDcode's copy |
| Recommended: [REDcode](../redcode/) | With REDcode set up, EDGEmat needs no configuration at all: it takes REDcode's game folder and its running REDbridge. [View in 3D](view-in-3d.html) needs REDcode |
| To save your changes: a WolvenKit project | REDcode's **New Project** makes one. EDGEmat saves into REDcode's open project, and REDcode packs it for the game ([Your mod in the game](in-the-game.html)) |
| Optional: an image service key | Only to generate materials from words: your own Google Gemini or OpenAI key ([New Material](new-material.html)). Everything else works without one |
| Some disk space | About 15 MB for the material library EDGEmat builds from your game, in `%LOCALAPPDATA%\EDGEmat`, growing a little as you open pages and setups (their images are kept there too). Safe to delete; EDGEmat builds it again |

## Install EDGEmat

The preview is a download from EDGEmat's [releases page](https://github.com/Edgemodders/EDGEmat/releases) on GitHub. It is not on the VS Code Marketplace yet; that comes with the full release.

1. On the releases page, under the newest release, download `edgemat-<version>.vsix`.
2. In VS Code, open the **Extensions** view (`Ctrl+Shift+X`).
3. Press the **`...`** menu at the top right of the Extensions view, choose **Install from VSIX...** and pick the file.

If you prefer a terminal, in the folder you saved it to:

```powershell
code --install-extension edgemat-0.3.0.vsix
```

To update later, install the next release's `.vsix` the same way; it replaces the old one. To remove EDGEmat, uninstall it in the Extensions view, or run `code --uninstall-extension edgemodders.edgemat`.

{% include shot.html caption="Install from VSIX" shows="VS Code's Extensions view with its ... menu open and Install from VSIX... highlighted." %}

## First start

An EDGEmat icon appears in the activity bar on the left of VS Code: two corner brackets around a stack of layers. Click it. EDGEmat's sidebar has two views:

| View | What it is |
|---|---|
| **Library** | Every surface and detail texture in your game. See [The Library](library.html) |
| **Find** | Below the Library, often collapsed at the bottom of the sidebar: click its **FIND** header to open it. See [Find](find.html) |

{% include shot.html caption="EDGEmat's sidebar on first start" shows="The activity bar with the EDGEmat icon highlighted, the Library view building its library with a progress bar, and the collapsed FIND header below it." %}

### The library builds itself

The first time, EDGEmat builds its material library from your game: every surface (about 390) with all its colors, every detail texture (about 130), and a thumbnail for each. It shows progress in the Library view and takes under half a minute. After that the library opens instantly, and EDGEmat rebuilds it on its own when a game update changes the archives.

### Finding the game and REDbridge

EDGEmat looks for the game in this order: its own setting, REDcode's game folder, then the usual Steam, GOG and Epic folders. It takes a folder only when it holds `bin\x64\Cyberpunk2077.exe`.

| You see | Do this |
|---|---|
| "EDGEmat needs your Cyberpunk 2077 folder" with a **Set Game Folder** button | Press it and pick the folder that contains `bin`, `archive` and `r6` |
| "EDGEmat reads the game through REDbridge, which was not found" | Install [REDcode](../redcode/) and run its **Install REDbridge**, or point the `edgemat.bridgePath` setting at `REDbridge.exe`. Then press **Rebuild Library** |
| The Library fills with categories | You're set |

When REDcode is running with the same game, EDGEmat uses REDcode's REDbridge rather than starting a second one. **Show Log** (in the Library's **`...`** menu) says which: "Using REDcode's REDbridge", or "Starting REDbridge from ...".

## Next

- Browse the [Library](library.html), or go straight to [Find](find.html) and type a garment's name.
- Connect Claude: [Assistants](assistants.html).
