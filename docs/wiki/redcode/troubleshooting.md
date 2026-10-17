---
title: Troubleshooting REDcode
nav_title: Troubleshooting
section: REDcode
order: 12
description: "Fixes for common REDcode problems: REDbridge not found or too old, missing .NET, an empty Game Assets view, the old extension, slow TweakDB, and mods that don't show in the game."
reviewed: 2026-10-16
---

# Troubleshooting <span class="y">REDcode</span>

## Start with the log

Click REDcode's item in the status bar, or run **REDcode: Show REDbridge log**. It's also under **View**, **Output**, then **REDcode** in the dropdown. It says which REDbridge started, where the game is, and what each command did. When you ask for help, include it.

## Problems and fixes

### Searching the Marketplace for "REDcode" finds the wrong extension

Another extension called Redcode is for Core War, an old programming game. Search for **REDcode for Cyberpunk 2077**, publisher Edgemodders, or install by id: `edgemodders.redcode-cyberpunk`.

### "the old ... extension is still installed or loaded"

You still have REDcode Core or the older REDcode (`edgemodders.redcode`) from before the Marketplace release. The two can't run together.

1. Press **Show It** and uninstall the old one.
2. Press **Reload Window**.
3. If REDcode had downloaded REDbridge for you, run **REDcode: Install REDbridge** once more.

See [Coming from an older REDcode](install.html#coming-from-an-older-redcode).

### "bridge not found" in the status bar

REDcode can't find REDbridge.

- Run **REDcode: Install REDbridge**. It downloads REDbridge and sets everything up.
- If you set `redcode.bridgePath` yourself, check that it points to `REDbridge.exe` or the folder that holds it.

### "the bridge needs the .NET 10 runtime, which is not installed"

REDbridge runs on Microsoft's .NET 10.

1. Press **Install with winget**. It runs the install in a terminal. Or press **Download page** and install it from Microsoft.
2. When it's done, run **REDcode: Restart REDbridge**.

If .NET 10 *is* installed, but for your user only, set `redcode.dotnetRoot` to its folder. Don't set `DOTNET_ROOT` for your whole Windows account: it breaks other programs.

### "REDbridge ... is older than this extension needs"

A REDcode update needs a newer REDbridge. Press **Update REDbridge**, or run **REDcode: Update REDbridge**. REDcode 0.9.0 needs REDbridge 0.8.0 or later.

### Game Assets is empty

The view shows **Set Game Folder**, **Show REDbridge log** and **Restart REDbridge** when REDbridge isn't running or has no game.

1. Check the status bar. If it reports a problem with the bridge, see the fixes above.
2. Run **REDcode: Set Game Folder** and pick the folder with `bin`, `archive` and `r6`. REDcode lists the installs it found.
3. Run **REDcode: Restart REDbridge**.

### "the bridge stopped (exit code ...)"

REDbridge closed unexpectedly. Press **Restart REDbridge**. If it keeps happening, press **Show log** and include the last lines when you ask for help.

### "REDbridge is being updated in another window"

Another VS Code window is updating REDbridge. Wait: this window restarts its bridge when the update finishes.

### TweakDB takes a while the first time

Normal. Loading TweakDB takes about 12 seconds, once per session; the view says so while it loads. Hovering in tweak files only works after that, and never starts the load itself.

If you don't have Phantom Liberty, please tell us whether TweakDB loads: it hasn't been checked without it.

### The game sound list shows hashes, not names

Event names need REDbridge 0.7.2 or later. Run **REDcode: Update REDbridge**. Even then, about a third of the events have no known name: WolvenKit's list doesn't cover them.

### A mesh shows in flat colours

Normal for now. The 3D view colours each part by its material name; textures on meshes come later.

### My edit vanished after saving

Most likely it was inside `compiledData` in an `.ent` or `.app` file, which is rebuilt from `components` on every save. Make the same change under `components`. Small number changes can also read back slightly different, because the game stores 32-bit numbers. See [What the file keeps](editing.html#what-the-file-keeps).

### Import from Raw isn't offered on my sound

Sounds can be exported, but not imported yet: WolvenKit's library can't import them. See [Export and import](export-import.html#what-converts).

### Install doesn't use EDGEdeck

Install uses EDGEdeck when EDGEdeck 0.21.0 or later is installed in the same VS Code. Update EDGEdeck, and reload the window.

### The Hot Folder button is missing

It shows only when the game has Red Hot Tools, in `red4ext/plugins`. Install Red Hot Tools first. This feature is untested; please report how it goes.

### My mod doesn't show in the game

1. Look in the Project view under **Packed**. If it's empty, **Pack** again and read any warning.
2. Make sure you pressed **Install**, or **Pack and Install**. With EDGEdeck, check the mod is on and deployed in EDGEdeck.
3. A tweak needs TweakXL in the game, and an `.xl` file needs ArchiveXL. Install the frameworks your mod uses (see [EDGEdeck's frameworks page](../edgedeck/frameworks.html)).
4. A REDmod needs the game started with `-modded`. **Run Game** adds it when `redcode.pack.redmod` is on.
5. Check REDcode's log for paths with capital letters or spaces, which Pack reports.

### Open in EDGEwave offers an install that finds nothing

EDGEwave has no release yet. See [EDGEwave](other-tools.html#edgewave).

### Something else

Ask on [Discord]({{ site.discord }}) with your log, or [open an issue](https://github.com/Edgemodders/REDcode/issues) on REDcode's repo.
