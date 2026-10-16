---
title: Install the EDGEkit extension pack
nav_title: Install the extension pack
section: EDGEkit
order: 1
description: "Install the EDGEkit extension pack in VS Code or VSCodium to get REDcode, REDdeck and the REDnode HUD theme in one go. A preview."
reviewed: 2026-10-16
---

# Install the <span class="y">EDGEkit</span> extension pack

The EDGEkit extension pack is one extension that installs the published EDGE extensions for you. It is for modders who use VS Code or VSCodium, until the EDGEkit app is ready. The pack itself has no features: it is a list, and installing it installs everything on the list.

**It is a preview**, like REDcode and REDdeck inside it. Expect rough edges, and tell us about them.

## What you need

| You need | Notes |
|---|---|
| [VS Code](https://code.visualstudio.com/) 1.80 or later, or [VSCodium](https://vscodium.com/) | |
| Windows x64 for REDcode and REDdeck | They read game files through REDbridge, which runs on Windows only, so they install only there. The theme and REDscript IDE work everywhere |
| Cyberpunk 2077 | For REDcode and REDdeck to be useful |

## What it installs

Checked on 2026-10-16, pack version 0.1.0:

| Extension | What it does | In VS Code | In VSCodium |
|---|---|---|---|
| [REDcode](../redcode/) for Cyberpunk 2077 | The modding workspace: browse the game's archives, edit game files, view textures, meshes and sounds, pack WolvenKit projects | Yes | Yes |
| [REDdeck](../reddeck/) | The mod manager | Yes | Yes |
| REDnode HUD | A dark theme in the EDGE house style | Yes | Yes |
| REDscript IDE, by jac3km4 | Language support for redscript, the game's scripting language | Yes | No: it isn't on Open VSX |

VS Code installs extensions from the Microsoft Marketplace, and VSCodium from Open VSX, so the pack lists only what each one can get. New EDGE extensions join the pack as they are published.

## Install it

1. Open the **Extensions** view (`Ctrl+Shift+X`).
2. Search for **EDGEkit** and pick the one published by Edgemodders (id `edgemodders.edgekit`).
3. Press **Install**. VS Code installs the pack and every extension in it.

Or install it from a terminal:

```powershell
code --install-extension edgemodders.edgekit
```

The listings: [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=edgemodders.edgekit) and [Open VSX](https://open-vsx.org/extension/edgemodders/edgekit).

{% include shot.html caption="The EDGEkit pack in the Extensions view" shows="VS Code's Extensions view with EDGEkit selected, its Extension Pack tab listing REDcode, REDdeck, REDnode HUD and REDscript IDE." %}

## After installing

The pack installs the extensions; each still has its own first steps.

| Extension | First steps |
|---|---|
| REDcode | Run **REDcode: Install REDbridge** from the command palette (`Ctrl+Shift+P`) to fetch the engine it needs. See [REDcode](../redcode/) |
| REDdeck | Click the REDdeck icon in the activity bar and follow its Set up steps. See [Install and set up REDdeck](../reddeck/install.html) |
| REDnode HUD | Optional: pick it with **Preferences: Color Theme** |

## Updates

Each extension updates itself, as VS Code extensions normally do. When a new EDGE extension is published, a new version of the pack adds it.

## Uninstalling

Uninstalling the pack offers to remove its extensions too. You can keep or remove each one on its own. If you remove REDdeck, press **Undo deploy** in REDdeck first, so your game folder goes back to how it was (see [Uninstalling REDdeck](../reddeck/install.html#uninstalling)).
