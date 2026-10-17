---
title: Install and set up REDnode
nav_title: Install and set up
section: REDnode
order: 1
description: "Build REDnode from source, deploy it into Cyberpunk 2077, check it works, and update or remove it."
reviewed: 2026-10-16
---

# Install and set up <span class="y">REDnode</span>

> **REDnode has no packaged release yet.** Until it has one, you build it from its source code and copy it into the game with a script. That takes developer tools, a few GB of downloads the first time, and a terminal. A one-file install for players is planned: REDnode is built to ship as a normal mod, like Cyber Engine Tweaks.

If you only want to try REDagent or a REDnode mod and the steps below look like too much, ask on [Discord]({{ site.discord }}): someone can walk you through it.

## What you need

### In the game

| You need | Notes |
|---|---|
| Cyberpunk 2077 on Windows | Tested with version 2.31 on Steam. The deploy script expects the default Steam folder unless you tell it another one |
| [RED4ext](https://github.com/WopsS/RED4ext/releases) | Required. It loads REDnode into the game. Tested with 1.30 |
| [redscript](https://github.com/jac3km4/redscript/releases) | Required. REDnode adds a few small scripts to the game |
| [Codeware](https://github.com/psiberx/cp2077-codeware) 1.14 or later | Optional. Only packages that place objects in the world need it |
| [TweakXL](https://github.com/psiberx/cp2077-tweak-xl) 1.10 or later | Optional. Only packages that change TweakDB need it |
| [REDbridge](../redbridge/) | Optional. Only packages that read the game's archives need it. REDnode uses the copy [EDGEdeck](../edgedeck/install.html#getting-redbridge) or REDcode downloaded |

You can install RED4ext, redscript, Codeware and TweakXL with [EDGEdeck](../edgedeck/) or another mod manager. Match their versions to your game version.

### On your PC

| You need | Notes |
|---|---|
| About 16 GB of RAM | The game alone takes 12 to 16 GB. REDnode adds roughly 60 to 100 MB for each open window and about 100 MB for each Node mod process. On a 16 GB PC, close other programs before you play |
| Git | To download REDnode's source |
| Node.js 24 | To build REDnode. The developer uses nvm for Windows to install it |
| Visual Studio 2022 Build Tools, with the C++ workload | To build the part that runs inside the game. A download of several GB |
| Disk space | Several GB for the tools. In the game folder, REDnode itself takes about 320 MB, most of it the overlay host |

## Build and deploy

These are the steps in outline. REDnode's [developer setup](https://edgemodders.github.io/REDnode/dev-setup.html) has the exact commands and versions for every tool; follow it if a step here isn't enough.

1. **Install the tools** above. The developer setup has a `winget` command for each one. The Build Tools install shows an admin prompt and takes 10 to 20 minutes; close Steam and your browser first if your PC is short on memory.
2. **Get the source.** Clone `https://github.com/Edgemodders/REDnode` with Git, open a terminal in that folder and run `npm install`.
3. **Build the plugin,** the part that runs inside the game:

    ```powershell
    .\tools\build-native.ps1
    ```

4. **Build the overlay host,** the program beside the game that draws the windows and runs the mods:

    ```powershell
    npm run overlay:package
    ```

5. **Close the game,** then copy everything into it:

    ```powershell
    .\tools\deploy-native.ps1
    ```

    If your game isn't in the default Steam folder, add `-GameDir` with your game folder, for example `.\tools\deploy-native.ps1 -GameDir 'D:\Games\Cyberpunk 2077'`.

The deploy script refuses to run while the game is open, and stops if it can't find RED4ext in the game folder.

### What goes into the game

Everything lands in one folder, `red4ext\plugins\REDnode` inside the game folder:

| Item | What it is |
|---|---|
| `REDnode.dll` | The plugin. RED4ext loads it when the game starts |
| `Scripts\` | REDnode's small redscript parts |
| `host\` | The overlay host, `REDnode-overlay.exe`. The plugin starts it with the game and it closes with the game. You never start it yourself |
| `apps\` | The **apps folder**: every REDnode package lives here, each in a folder of its own. The deploy puts REDnode's sample apps and mods here |

REDagent installs into the same apps folder, with its own deploy script, after REDnode. See [REDagent](../redagent/).

## First start

1. Start the game the normal way. Don't start anything else.
2. At the main menu, a small **REDNODE** tab appears at the lower left, with a count such as `· 9/20`: open packages out of all packages.
3. Some sample windows open by themselves: the **UI kit** window, the red **Open stash** button, **Perf**, **Game state**, and, once you load a save, the **Coords HUD** and **Vitals** widgets at the top and the **Hello mod** window. They show REDnode working.
4. Press **F10** to make the windows take the mouse. See [Using the overlay](overlay.html).

{% include shot.html caption="The first start" shows="The main menu with the REDNODE tab at the lower left and the sample windows (UI kit, Open stash button, Perf, Game state) open." %}

The samples are there to try things and to learn from. Switch off the ones you don't want in the [Mod Manager](mod-manager.html); they stay off.

### Check it worked

| Look at | You should see |
|---|---|
| The REDNODE tab | At the lower left of the main menu. Click it after pressing F10: the launcher says **GAME LINKED** and shows the REDnode version at the bottom |
| `red4ext\logs\red4ext-*.log` | A line saying REDnode `has been loaded` |
| `red4ext\logs\rednode-overlay.log` | The host's log, starting with `REDnode overlay host 0.23.1` |

If the tab doesn't appear, see [Troubleshooting](troubleshooting.html).

## Where REDnode keeps things

| What | Where |
|---|---|
| Packages (apps and mods) | `red4ext\plugins\REDnode\apps` in the game folder |
| Your choices: which packages are on, pins, spaces, theme, window positions, permissions | The host's settings, in `%APPDATA%\@rednode\overlay` |
| Each package's own data, and secrets such as an API key | In the same folder. Secrets are encrypted with your Windows account |
| Logs | `red4ext\logs` in the game folder: `rednode-overlay.log` (the host), `rednode-mods.log` (what Node mods print) |

Your settings and packages' data are kept outside the game folder, so they survive updates.

## Updating REDnode

1. In the REDnode folder, get the newest source: `git pull`, then `npm install`.
2. Build and deploy again, as above: `.\tools\build-native.ps1`, `npm run overlay:package`, then `.\tools\deploy-native.ps1` with the game closed.

Deploying copies over REDnode's own files and the samples. Other packages in the apps folder, REDagent's included, stay. The launcher shows the new version at the bottom.

## Removing REDnode

With the game closed:

```powershell
.\tools\deploy-native.ps1 -Remove
```

This deletes the whole `red4ext\plugins\REDnode` folder, **apps folder included**. Copy out any packages you made or want to keep first, and REDagent goes with it. Your settings in `%APPDATA%\@rednode\overlay` stay; delete that folder too if you want REDnode completely gone.
