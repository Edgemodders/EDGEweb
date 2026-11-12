---
title: Install and set up EDGEhack
nav_title: Install and set up
section: EDGEhack
order: 1
description: "What EDGEhack needs, installing it in VS Code, and its three views."
reviewed: 2026-11-11
---

# Install and set up <span class="y">EDGEhack</span>

## What you need

| You need | Notes |
|---|---|
| Windows and [VS Code](https://code.visualstudio.com/) 1.90 or later | EDGEhack is a VS Code extension. [EDGEkit](../edgekit/) works too |
| Cyberpunk 2077, game 2.5 | EDGEhack reads the game's quickhacks from your own install |
| [REDcode](../redcode/) 0.10.8 or later | EDGEhack builds on it: REDcode installs with EDGEhack from the Marketplace. REDcode fetches [REDbridge](../redbridge/) and .NET 10, which read the game's files, and holds the project EDGEhack writes into |
| A WolvenKit project open in REDcode | Where your mod's files go. Without one, what you make waits on EDGEhack's [Desk](desk-library.html) |
| An OpenAI API key | Optional: only for **Generate**, which draws icons from your words. Each picture is billed to your OpenAI account |

The mods EDGEhack makes need these in the game, as frameworks:

| Framework | For |
|---|---|
| [TweakXL](https://www.nexusmods.com/cyberpunk2077/mods/4197) | Every quickhack mod: its changes are TweakXL files |
| [ArchiveXL](https://www.nexusmods.com/cyberpunk2077/mods/4198) | Names, descriptions and icons of your own |
| [redscript](https://www.nexusmods.com/cyberpunk2077/mods/1511) | New quickhacks: each mod ships one small script that lets enemies take them |
| [REDnode](../rednode/) 0.61.1 or later | Only for [Scripts](scripts.html). [Try Live](try-live.html) needs 0.62.0 |

Add them to EDGEdeck like any other mod and deploy. See [Frameworks and game patches](../edgedeck/frameworks.html).

## Install EDGEhack

From EDGEhack's first release, 0.1.0 (being prepared):

1. In VS Code, open the Extensions view (Ctrl+Shift+X), search for **EDGEhack**, and press **Install**. REDcode installs with it if you don't have it.
2. Or download `EDGEhack-<version>-nexus.zip` from EDGEhack's Nexus Mods page, unzip it, and in the Extensions view's **...** menu pick **Install from VSIX...** and choose the `.vsix` inside.

Then open your WolvenKit project in REDcode, as for any REDcode work.

## Where it shows

EDGEhack has its own icon in VS Code's activity bar: a chip with a bolt. It opens three views:

| View | What it lists |
|---|---|
| **Desk** | Quickhacks you're working on outside a project, then a **Project** group with the open project's quickhacks |
| **Library** | Quickhacks you keep in the EDGE Library, in your own folders |
| **Quickhacks** | The game's quickhacks: People (by category, then family), Devices and Vehicles, each family with its icon |

{% include shot.html src="/assets/shots/edgehack/install-views.webp" caption="EDGEhack's views" shows="VS Code's activity bar with EDGEhack's chip-and-bolt icon selected, and EDGEhack's side bar: the Desk view with a quickhack or two and a Project group, the Library view, and the Quickhacks view open on People with Control Hack and Damage Hack expanded, each family with its icon and its number of tiers." %}

The first time the Quickhacks view opens, REDbridge reads the game's TweakDB, about 15 seconds. After that everything opens at once until VS Code restarts. **Refresh** in the view's title bar reads the game again, after a patch or a mod change.

## Try it

1. Open EDGEhack's icon in the activity bar.
2. In **Quickhacks**, open **People**, then **Damage Hack**, then click **Overheat**.

A read-only page opens with Overheat's six tiers: each one's name, icon, RAM, upload time, damage and effects in plain words. Nothing is written anywhere until you choose **Edit** or **Clone and Modify**.
