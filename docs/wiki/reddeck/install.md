---
title: Install and set up REDdeck
nav_title: Install and set up
section: REDdeck
order: 1
description: "Install REDdeck in VS Code, walk through its Set up steps, and keep it updated."
reviewed: 2026-10-13
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

REDdeck isn't on the VS Code Marketplace yet. It installs from a `.vsix` file, which is VS Code's extension package format.

1. Download the newest `reddeck-<version>.vsix` from the [REDdeck releases page](https://github.com/Edgemodders/REDdeck/releases).
2. In VS Code, open the **Extensions** view (`Ctrl+Shift+X`).
3. Press the **`...`** menu at the top right of the view and choose **Install from VSIX...**. Pick the file you downloaded.
4. Run **Developer: Reload Window** from the command palette (`Ctrl+Shift+P`).

If you prefer a terminal:

```powershell
code --install-extension reddeck-0.19.0.vsix
```

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
| **Import from Vortex** | Copies your Vortex mods into REDdeck's library. Shown only when Vortex has Cyberpunk mods | Optional |

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

Install the newer `.vsix` the same way you installed the first one. Your library, settings and Nexus sign-in stay.

## Uninstalling

1. Press **Undo deploy** in REDdeck. This takes every file REDdeck placed out of the game folder, and puts back anything it moved aside.
2. Uninstall the extension from VS Code's Extensions view.
3. If you don't want your mods any more, delete the library folder (`%USERPROFILE%\REDdeck` unless you moved it). Otherwise keep it: reinstalling REDdeck picks it up again.
