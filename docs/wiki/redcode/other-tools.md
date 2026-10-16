---
title: Working with other tools
section: REDcode
order: 10
description: "How REDcode works with REDdeck, WolvenKit, EDGEwave, the redscript extension and REDnode, and the API it offers other VS Code extensions."
reviewed: 2026-10-16
---

# Working with other <span class="y">tools</span>

REDcode does one job, making mods, and leaves the rest to tools that do theirs well. This page covers each of them.

## REDdeck

[REDdeck](../reddeck/), the EDGE mod manager, is REDcode's partner. Both run in the same VS Code window.

| From | To | What happens |
|---|---|---|
| REDcode's **Install** | REDdeck | Your packed project becomes a REDdeck mod, version `dev`, and REDdeck deploys it. Each later Install refreshes the same mod. See [Pack, install and run](pack-install.html#install) |
| REDdeck's **Add from REDcode project** | REDdeck | The same, started from REDdeck's side |
| REDdeck's **Add to Project** | REDcode | Copies files from a mod you have installed into your project. For a mod's `.archive`, REDcode extracts the resources you pick into `source/archive`. Needs REDcode 0.6.1 and REDbridge 0.7.1 or later |

All of this is in [REDdeck and REDcode](../reddeck/redcode.html), from REDdeck's side.

Today REDcode and REDdeck each download their own copy of REDbridge. Sharing one copy is the next planned change to REDcode.

## WolvenKit

REDcode isn't a replacement for [WolvenKit](https://github.com/WolvenKit/WolvenKit); it's built on it. WolvenKit's libraries read and write every game file in REDcode, so the results are the same.

- **Projects are shared.** A `.cpmodproj` project opens in both, and REDcode writes the project file exactly as WolvenKit does. Use whichever tool suits the task.
- **Packs match.** REDcode's Pack produces the same `packed` folder as WolvenKit's, with one difference: REDcode keeps TweakXL `.tweak` files in `r6/tweaks`, which WolvenKit leaves out.
- **Not in REDcode yet:** graph editors for quest, scene and behaviour files, a preview of the game's interface widgets, and putting changed sounds back into the game. These are planned for later. For that kind of work, open the same project in WolvenKit.

## EDGEwave

EDGEwave is the EDGE platform's sound studio, for editing, mixing and re-voicing the game's sounds. REDcode finds sounds; EDGEwave works on them.

**Open in EDGEwave**, in REDcode's audio player and the game sound list, hands the sound that's playing to EDGEwave. Without EDGEwave installed, it offers to install it.

EDGEwave is **still in development** and has no release yet, so for now the button is only useful to people running EDGEwave from its source.

## redscript

REDcode doesn't handle [redscript](../glossary.html#game-and-modding-terms), the game's scripting language. The community's **Redscript IDE** extension for VS Code (`jac3km4.redscript-ide-vscode`, on the VS Code Marketplace) already does, and EDGE reuses it rather than rebuilding it. Install it beside REDcode if you write redscript. Pack copies your `.reds` files under `source/resources` into the mod like any other resource.

## REDnode

[REDnode](../rednode/) runs mods written in JavaScript inside the game. The plan is one loop between the two: write a REDnode mod in REDcode, send it into the running game without restarting, and see the game's logs and a debugger in VS Code. That will be a separate add-on, `redcode-rednode`. It's **planned, not built**: it waits for a development connection on REDnode's side.

## For extension authors: REDcode's API

REDcode hands other VS Code extensions an API, so they can use it without copying its code. Version 1 offers the running REDbridge, the game folder, the open project and its changes, the game's sound effect index, any sound as audio a webview can play, import of a raw file, and pack. EDGEwave uses it. See [Extension API](https://edgemodders.github.io/REDcode/api.html) on REDcode's docs site.
