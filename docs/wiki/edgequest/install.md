---
title: Install and set up EDGEquest
nav_title: Install and set up
section: EDGEquest
order: 1
description: "What EDGEquest needs (VS Code, REDcode, ArchiveXL, game 2.5), how to install it from a store or Nexus Mods, and the quest index it builds the first time."
reviewed: 2026-11-04
---

# Install and set up <span class="y">EDGEquest</span>

## What you need

| You need | Why |
|---|---|
| Windows 10 or 11, 64-bit, and Cyberpunk 2077 **2.5** (Steam, GOG or Epic) | The game EDGEquest reads and writes for. Game 2.31 isn't supported |
| [VS Code](https://code.visualstudio.com/) 1.70 or later, or VSCodium, or the [EDGEkit](../edgekit/) app | EDGEquest is an extension for it. EDGEkit 1.140.5 and later come with EDGEquest built in |
| [REDcode](../redcode/install.html) | Finds the game, installs [REDbridge](../redbridge/) (0.11.0 or later) and the .NET 10 runtime, makes the WolvenKit project, and packs and installs your quest |
| [ArchiveXL](https://www.nexusmods.com/cyberpunk2077/mods/4198) in the game | Adds your quest's phase, journal and texts to the game. Only needed to play quests you make |

Optional:

| Add | For |
|---|---|
| [EDGEwave](../edgewave/) | Searching, hearing and making sounds for your quest. See [Music and sound](music-sound.html) for which version |
| [REDnode](../rednode/) 0.43 or later | Hearing a music cue in the running game from the picker |
| [EDGEdeck](../edgedeck/) | Installing your packed quest like any other mod, with undo |

## Install it

1. **Install REDcode first**, and let it find the game and download REDbridge. See [Install and set up REDcode](../redcode/install.html).
2. **Install EDGEquest.** In VS Code, open the Extensions view (`Ctrl+Shift+X`), search for **EDGEquest**, and click **Install**. It updates itself from then on.

   No store? Download the main file from [Nexus Mods](https://www.nexusmods.com/cyberpunk2077/mods/35750) with **Manual download** and extract it. In the Extensions view, click **...** at the top, choose **Install from VSIX...** and pick `edgequest-<version>.vsix`.
3. **Click the EDGEquest icon** in the activity bar. It shows two views: **Project Quests** (your own) and **Game Quests** (the game's).

> **Not a game mod.** EDGEquest is an extension for VS Code. Don't install it with Vortex or EDGEdeck: they would put it in the game folder, where it does nothing.

{% include shot.html caption="The EDGEquest views" shows="The EDGEquest activity bar icon selected, with Project Quests (one quest with its beats and checklist) above Game Quests (folders titled with quest names)." %}

## The quest index

The first time you open EDGEquest, it reads every quest in your game and builds a **quest index**: titles, facts, journal entries, scenes, people, places and trigger areas. It takes about a minute and a half and runs in the background; the status bar shows it. The index is what makes **Find Quest** fast, and what lets a new quest use the game's map markers.

EDGEquest builds it again by itself when the game updates. To build it again by hand, use **Rebuild Quest Index** in the Game Quests view's `...` menu.

## How it finds the game and REDbridge

EDGEquest uses REDcode's game folder and REDcode's REDbridge. When REDcode isn't running, it looks for them itself:

| What | Where EDGEquest looks |
|---|---|
| The game folder | The setting `edgequest.gamePath`, then REDcode's, then EDGEdeck's, then a search of your PC |
| REDbridge | The setting `edgequest.bridgePath`, then REDcode's `redcode.bridgePath`, then REDbridge on your PATH |
| .NET 10 | The setting `edgequest.dotnetRoot`, then REDcode's `redcode.dotnetRoot` |

You only need to set these if EDGEquest can't find something; the Game Quests view says what's missing, with a button to fix it. See [Settings and commands](settings.html).

## Updating and uninstalling

EDGEquest from a store updates itself. A copy installed from a `.vsix` doesn't: download the new file and install it the same way.

To uninstall, click the gear on EDGEquest in the Extensions view and choose **Uninstall**. Your story files and the quest files it made stay in your WolvenKit projects.

## Next steps

- Look inside a quest you know: [Reading the game's quests](reading.html).
- Make your first quest: [Writing a quest](writing.html).
