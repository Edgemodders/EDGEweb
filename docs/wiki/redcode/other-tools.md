---
title: Working with other tools
section: REDcode
order: 10
description: "How REDcode works with EDGEdeck, WolvenKit, EDGEwave, EDGEmat, EDGEbuilder, the redscript extension and REDnode, and the API it offers other VS Code extensions."
reviewed: 2026-11-03
---

# Working with other <span class="y">tools</span>

REDcode does one job, making mods, and leaves the rest to tools that do theirs well. This page covers each of them.

## EDGEdeck

[EDGEdeck](../edgedeck/), the EDGE mod manager, is REDcode's partner. Both run in the same VS Code window.

| From | To | What happens |
|---|---|---|
| REDcode's **Install** | EDGEdeck | Your packed project becomes an EDGEdeck mod, version `dev`, and EDGEdeck deploys it: with EDGEdeck 0.28.0 or later, that mod alone. Each later Install refreshes the same mod. See [Pack, install and run](pack-install.html#install) |
| EDGEdeck's **Add from REDcode project** | EDGEdeck | The same, started from EDGEdeck's side |
| EDGEdeck's **Add to Project** | REDcode | Copies files from a mod you have installed into your project. For a mod's `.archive`, REDcode extracts the resources you pick into `source/archive`. Needs REDcode 0.6.1 and REDbridge 0.7.1 or later |

All of this is in [EDGEdeck and REDcode](../edgedeck/redcode.html), from EDGEdeck's side.

EDGEdeck used to be called REDdeck. REDcode looks only for EDGEdeck (`edgemodders.edgedeck`); with only the old REDdeck installed, it installs directly, as with no mod manager.

Today REDcode and EDGEdeck each download their own copy of REDbridge. Sharing one copy is planned on REDcode's side.

## WolvenKit

REDcode isn't a replacement for [WolvenKit](https://github.com/WolvenKit/WolvenKit); it's built on it. WolvenKit's libraries read and write every game file in REDcode, so the results are the same.

- **Projects are shared.** A `.cpmodproj` project opens in both, and REDcode writes the project file exactly as WolvenKit does. Use whichever tool suits the task.
- **Packs match.** REDcode's Pack produces the same `packed` folder as WolvenKit's, with one difference: REDcode keeps TweakXL `.tweak` files in `r6/tweaks`, which WolvenKit leaves out.
- **Not in REDcode:** graph editors for quest, scene and behaviour files, a preview of the game's interface widgets, and importing voice lines. Quest and scene graphs are planned in EDGEquest, and widget preview later in REDcode. For that kind of work, open the same project in WolvenKit.

## EDGEwave

EDGEwave is the EDGE platform's sound studio, for editing, mixing and re-voicing the game's sounds. REDcode finds sounds; EDGEwave works on them.

**Open in EDGEwave**, in REDcode's audio player and the game sound list, hands the sound that's playing to EDGEwave. Without EDGEwave installed, it offers to install it.

EDGEwave 0.1.0, a preview, came out on 21 October 2026 on the VS Code Marketplace and Open VSX. See [EDGEwave](../edgewave/).

## EDGEmat

[EDGEmat](../edgemat/), the EDGE material editor, draws its materials on REDcode's 3D mesh view when both are installed. See [EDGEmat in 3D](../edgemat/view-in-3d.html).

**Open in EDGEmat**, in the 3D view's toolbar, puts the mesh on EDGEmat's Desk with the appearance you're looking at open, ready to change its materials. Without EDGEmat installed, it offers to install it. EDGEmat's own **Open in EDGEmat** shows when you right-click a `.mesh` or `.mlsetup`.

## EDGEbuilder

[EDGEbuilder](../edgebuilder/), the world builder, keeps its scenes in your project's `source\scenes` folder. The Project view shows that folder as **Scenes**, and a `<name>.scene.json` there opens as JSON. Scenes aren't packed: turning them into a mod comes with EDGEbuilder's bake, which is planned. EDGEbuilder finds the project through REDnode, as below.

## Blender

**Edit in Blender** opens a project model in [Blender](https://www.blender.org/) and imports it back each time you save there. See [Edit in Blender](export-import.html#edit-in-blender).

## redscript

REDcode doesn't handle [redscript](../glossary.html#game-and-modding-terms), the game's scripting language. The community's **Redscript IDE** extension for VS Code (`jac3km4.redscript-ide-vscode`, on the VS Code Marketplace) already does, and EDGE reuses it rather than rebuilding it. Install it beside REDcode if you write redscript. Pack copies your `.reds` files under `source/resources` into the mod like any other resource.

## REDnode

[REDnode](../rednode/) runs mods written in JavaScript inside the game. Two things already work between them:

- **Pack and Play** hands your packed archive to REDnode, which swaps it into the running game. See [Pack and Play](pack-install.html#pack-and-play-into-the-running-game).
- **The open project.** When the game has REDnode, REDcode installs a small REDnode package called `redcode`. REDnode mods such as EDGEbuilder ask it which project is open in REDcode (its name, mod name and folders), and hear when it changes. Assistants connected to REDnode get it as the read-only tool `redcode__project`. With several VS Code windows, the one you last used with a project open counts. `redcode.rednode.installPackage` turns the install off. Tested by hand in the game.

The bigger loop is still **planned, not built**: write a REDnode mod in REDcode, send it into the running game without restarting, and see the game's logs and a debugger in VS Code.

## For extension authors: REDcode's API

REDcode hands other VS Code extensions an API, so they can use it without copying its code. Version 1 offers the running REDbridge, the game folder, the open project and its changes, the game's sound effect index, any sound as audio a webview can play, import of a raw file, pack, Pack and Play (`packAndPlay()`; the old `packAndTry()` still works), Edit in Blender, and opening a game file in the CR2W editor at a chosen node. EDGEwave, EDGEmat and EDGEquest use it. See [Extension API](https://edgemodders.github.io/REDcode/api.html) on REDcode's docs site.
