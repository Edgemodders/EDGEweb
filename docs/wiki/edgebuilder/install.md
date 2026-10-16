---
title: Install and set up EDGEbuilder
nav_title: Install and set up
section: EDGEbuilder
order: 1
description: "What EDGEbuilder needs, installing it with REDdeck, allowing REDbridge, and opening it in the game."
reviewed: 2026-10-16
---

# Install and set up <span class="y">EDGEbuilder</span>

## What you need

| You need | Notes |
|---|---|
| Cyberpunk 2077 on Windows | And a save to load: EDGEbuilder works in the world, not in the menus |
| [REDnode](../rednode/) 0.17 or later | Runs EDGEbuilder in the game. Version 0.22.0 or later also holds the cursor still while you look around. REDnode has no packaged release yet: it installs from source, following its [developer setup](https://edgemodders.github.io/REDnode/dev-setup.html) |
| [Codeware](https://www.nexusmods.com/cyberpunk2077/mods/7780) 1.14 or later | REDnode's world calls, which spawn and move objects, need it. EDGEbuilder says so in its manifest, and REDnode's Mod Manager checks it |
| [REDbridge](../redbridge/) 0.6.0 or later | Reads the game's files to build the asset list. The easiest way to get it is REDdeck's **Get REDbridge** |
| [REDdeck](../reddeck/) 0.20.0 or later | Installs EDGEbuilder. From 0.21.1, a new EDGEbuilder version takes the old one's place in the same row |
| A 16:9 screen | The editor covers a 1920 x 1080 area, scaled to your screen. Ultrawide screens aren't covered yet |

Codeware is a framework mod: add it to REDdeck like any other mod and deploy. RED4ext, which REDnode and Codeware both need, goes in the same way. See [Frameworks and game patches](../reddeck/frameworks.html).

## Install EDGEbuilder

1. Download `edgebuilder-<version>.zip` from the [EDGEbuilder releases page](https://github.com/Edgemodders/EDGEbuilder/releases). The newest is 0.3.2.
2. In REDdeck, press **Add mod** and pick the zip. REDdeck sees the `rednode-app.json` inside and files it as a `rednode` mod, bound for REDnode's apps folder. See [Adding mods](../reddeck/adding-mods.html).
3. Make sure it's ticked, and press **Deploy**.

Do this with the game closed. REDnode must already be deployed in the game folder.

{% include shot.html caption="EDGEbuilder in REDdeck" shows="The REDdeck Mods view with EDGEbuilder added from its zip, its kind chip showing rednode, and the Deploy button counting the change." %}

## Allow REDbridge

EDGEbuilder asks REDnode for the REDbridge that REDdeck downloaded. REDnode hands it over only once you allow it, because REDbridge can read and write files.

1. Start the game and load a save.
2. Press **F10** to open the REDnode launcher, and open the **Mod Manager**.
3. Select **EDGEbuilder**. Under **Permissions**, switch **Allowed** on.

Within about five seconds EDGEbuilder picks REDbridge up by itself. Until then its second status pill says **Allow REDbridge**: hover it for the same steps.

While you're in the Mod Manager, EDGEbuilder's **Requires** line should list Codeware with a tick.

{% include shot.html caption="Allowing REDbridge" shows="REDnode's Mod Manager with EDGEbuilder selected, its Requires line showing Codeware with a tick, and the Allowed switch under Permissions." %}

## Open EDGEbuilder

EDGEbuilder doesn't open by itself. In the Mod Manager, switch **EDGEbuilder** on, and pin it to the launcher so it's one click away next time.

The panel opens at the right of the screen. Three pills at its top say how things stand:

| Pill | Ready looks like | Otherwise |
|---|---|---|
| The game | **World ready** | **No game** (REDnode isn't linked to a running game), **Load a save**, or **Needs Codeware 1.14+** |
| REDbridge | **REDbridge** and its version, in green | **Allow REDbridge (hover)**, **REDbridge starting**, **No REDbridge** or **REDbridge failed**. Hover for the reason |
| The asset index | A count, about **31,500 assets** | **Indexing...** while it's built, **No index** or **Index failed** |

The first time, the index takes a few seconds to build. After that it loads straight away when EDGEbuilder starts, so search works even before REDbridge is ready. It is built again only when the game version changes, or when you ask in the Settings tab.

{% include shot.html caption="The status pills" shows="The top of the EDGEbuilder panel with all three pills green: World ready, REDbridge with its version, and the asset count." %}

## Where EDGEbuilder keeps things

EDGEbuilder keeps its settings, the asset index and your working scene in a data folder of its own, which REDnode gives each package. Updates don't touch it. The **Settings** tab shows the settings file's path; the index and the scene sit beside it.

## Updating

Add the newer zip to REDdeck the same way and deploy. With REDdeck 0.21.1 or later, the new version replaces the old one in the same row. With an older REDdeck, untick the old EDGEbuilder first, or both deploy the same files and conflict.

Your settings, index and scene stay.

## Uninstalling

1. If Edit is on, switch it off, so V's own camera and HUD are back.
2. In REDdeck, untick EDGEbuilder, or remove it, and deploy.

Your scene stays in EDGEbuilder's data folder in case you come back. The previews leave the world the next time a save loads.
