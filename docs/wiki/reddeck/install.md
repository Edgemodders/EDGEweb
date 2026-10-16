---
title: Install and set up REDdeck
nav_title: Install and set up
section: REDdeck
order: 1
description: "Install REDdeck in VS Code from the Marketplace, walk through its Set up steps, and keep it updated."
reviewed: 2026-10-16
---

# Install and set up <span class="y">REDdeck</span>

## What you need

| You need | Notes |
|---|---|
| Cyberpunk 2077 on Windows | Steam, GOG or Epic. REDdeck finds all three on its own |
| [VS Code](https://code.visualstudio.com/) 1.80 or later | REDdeck is a VS Code extension. Version 1.101 or later also lets VS Code's built-in agents use REDdeck |
| Disk space for your mods | The library holds one copy of each mod. On the same drive as the game, deploying costs no extra space |
| Optional: a Nexus Mods account | For update checks and one-click downloads. Not needed to add mods from files |
| Optional: about 70 MB for REDbridge | For conflicts inside archives. REDdeck downloads it for you |

## Install REDdeck

REDdeck is on the VS Code Marketplace, published by **Edgemodders** and marked **Preview** (young, and Windows only).

1. In VS Code, open the **Extensions** view (`Ctrl+Shift+X`).
2. Search for `REDdeck`.
3. Pick **REDdeck** by Edgemodders and press **Install**.

The same listing is on the web: [REDdeck on the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=edgemodders.reddeck). If you prefer a terminal:

```powershell
code --install-extension edgemodders.reddeck
```

### Other ways to install

| Way | When | How |
|---|---|---|
| **Open VSX** | Editors built on VS Code that use Open VSX instead of Microsoft's Marketplace, such as VSCodium | Search for `REDdeck` in the editor's Extensions view, or see [REDdeck on Open VSX](https://open-vsx.org/extension/edgemodders/reddeck) |
| **A `.vsix` file** | No store access, or you want one exact version | Download `reddeck-<version>.vsix` from the [releases page](https://github.com/Edgemodders/REDdeck/releases). In the Extensions view, press the **`...`** menu at the top right, choose **Install from VSIX...** and pick the file. Then run **Developer: Reload Window** from the command palette (`Ctrl+Shift+P`) |

A REDdeck icon appears in the activity bar on the left of VS Code. Click it to open the **Mods** view.

{% include shot.html caption="The REDdeck icon and an empty Mods view" shows="VS Code's activity bar with the REDdeck icon highlighted, and the Mods view on first start with the Set up group and its buttons." %}

## The Set up steps

The first time you open REDdeck, the Mods view shows a **Set up** group with one row for each thing REDdeck needs or can use. Each row is a button. Rows disappear as you finish them, and the **x** on a row hides one you don't want.

| Step | What it does | Needed? |
|---|---|---|
| **Find the game folder** | Appears only if REDdeck can't find Cyberpunk 2077 on its own. Pick the folder that contains `bin`, `archive` and `r6` | Yes, if shown |
| **Get REDbridge** | Downloads REDbridge, and the .NET 10 runtime for your user account if you don't have it, so REDdeck can see conflicts inside mod archives | Recommended |
| **Sign in to Nexus Mods** | For update checks and downloads from Nexus | Optional |
| **Handle Nexus download links** | Makes the **Mod manager download** button on Nexus send files to REDdeck | Optional |
| **Import from Vortex** | Copies your Vortex mods into REDdeck's library. Shown only when Vortex has Cyberpunk mods and the library has none from it yet | Optional |

**REDdeck: Set up...** in the command palette lists every step, done or not, and brings hidden rows back.

{% include shot.html caption="The Set up group" shows="The Set up group at the top of the Mods view, with the Get REDbridge, Sign in to Nexus Mods and Import from Vortex rows." %}

### Finding the game

On every start REDdeck looks for the game in every Steam library Steam knows about, then in GOG and Epic. You only see **Find the game folder** if all of that fails. If you pick `bin` or `bin\x64` by mistake, REDdeck works out the right folder.

The status bar at the bottom of VS Code always shows REDdeck's state in one line: how many mods are on, whether a deploy is waiting, or that the game wasn't found. Clicking it deploys, or opens the folder picker if the game is missing.

### Getting REDbridge

**Get REDbridge** asks once, saying what it will download, then fetches the latest REDbridge release (about 70 MB) into REDdeck's own folder. If your PC has no .NET 10 runtime, it installs one for your user account only. Nothing else needs configuring.

After that, REDdeck checks once a day for a newer REDbridge and offers it. **Update REDbridge** in the command palette checks straight away and removes the old version after updating. The REDdeck page's footer shows which REDbridge is running, with a green dot.

### Nexus sign-in

See [Nexus Mods](nexus.html) for the details. In short: **Sign in to Nexus Mods** either opens Nexus in your browser, or, until Nexus has registered REDdeck, opens your API Access page so you can create a personal key and paste it in. Both work the same way afterwards.

### Coming from Vortex

Follow [Switch from Vortex](switch-from-vortex.html). The one rule: only one manager can have mods deployed at a time, so you purge in Vortex before you deploy in REDdeck.

## Where REDdeck keeps things

Your mods go in a **library** folder, `%USERPROFILE%\REDdeck` by default. For deploys to cost no extra disk space, the library should be on the same drive as the game. If your game is on another drive, set `reddeck.libraryPath` to a folder on that drive before you add mods. See [Library, disk space and loadouts](library.html).

## Updating REDdeck

Installed from the Marketplace or Open VSX, REDdeck updates like any other extension: VS Code fetches new versions by itself unless you turned automatic updates off. Each version's changes are in REDdeck's [changelog](https://github.com/Edgemodders/REDdeck/blob/main/CHANGELOG.md) and on its [releases page](https://github.com/Edgemodders/REDdeck/releases). If you installed from a `.vsix` file, install the newer file the same way. Your library, settings and Nexus sign-in stay either way.

## Uninstalling

1. Press **Undo deploy** in REDdeck. This takes every file REDdeck placed out of the game folder, and puts back anything it moved aside.
2. Uninstall the extension from VS Code's Extensions view.
3. If you don't want your mods any more, delete the library folder (`%USERPROFILE%\REDdeck` unless you moved it). Otherwise keep it: reinstalling REDdeck picks it up again.
