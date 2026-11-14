---
title: Working with other tools
section: REDcode
order: 12
description: "How REDcode works with EDGEdeck, EDGEmat, EDGEwave, EDGEbuilder, the EDGE Library, REDnode, WolvenKit, Blender and the redscript extension, and the API it offers other VS Code extensions."
reviewed: 2026-11-13
---

# Working with other <span class="y">tools</span>

REDcode does one job, making mods from game files, and leaves the rest to tools that do theirs well. This page covers each of them.

| EDGE toolkits | Other tools |
|---|---|
| [EDGEdeck](#edgedeck), [EDGEmat](#edgemat), [EDGEwave](#edgewave), [EDGEbuilder](#edgebuilder), [the EDGE Library](#the-edge-library), [REDnode](#rednode), [EDGEhack and EDGEquest](#edgehack-and-edgequest) | [WolvenKit](#wolvenkit), [Blender](#blender), [redscript](#redscript), [REDcode's API](#for-extension-authors-redcodes-api) |

## EDGEdeck

[EDGEdeck](../edgedeck/), the EDGE mod manager, is REDcode's partner. Both run in the same VS Code window.

| You press | In | What happens |
|---|---|---|
| **Install** or **Pack and Install** | REDcode | Your packed project becomes an EDGEdeck mod, version `dev`, and EDGEdeck deploys that mod alone. Each later Install refreshes the same mod. See [Pack, install and run](pack-install.html#install) |
| **Add from REDcode project** | EDGEdeck | The same, started from EDGEdeck's side |
| **Add to Project** | EDGEdeck | Copies files from a mod you have installed into your REDcode project. For a mod's `.archive`, you pick the files, and REDcode extracts them into `source/archive` |

All of this is in [EDGEdeck and REDcode](../edgedeck/redcode.html), from EDGEdeck's side.

EDGEdeck used to be called REDdeck. REDcode looks only for EDGEdeck; with only the old REDdeck installed, it installs directly, as with no mod manager.

Today REDcode and EDGEdeck each download their own copy of REDbridge. Sharing one copy is planned on REDcode's side.

## EDGEmat

[EDGEmat](../edgemat/), the EDGE material editor, draws its materials on REDcode's 3D mesh view when both are installed. See [EDGEmat in 3D](../edgemat/view-in-3d.html).

**Open in EDGEmat**, in the 3D view's toolbar, puts the mesh on EDGEmat's Desk with the appearance you're looking at open, ready to change its materials. Without EDGEmat installed, it offers to install it. EDGEmat's own **Open in EDGEmat** shows when you right-click a `.mesh` or `.mlsetup`.

## EDGEwave

[EDGEwave](../edgewave/) is the EDGE platform's sound studio, for editing, mixing and re-voicing the game's sounds. REDcode finds sounds; EDGEwave works on them.

**Open in EDGEwave**, in REDcode's audio player and the game sound list, hands the sound that's playing to EDGEwave. Without EDGEwave installed, it offers to install it.

## EDGEbuilder

[EDGEbuilder](../edgebuilder/), the world builder, keeps its scenes in your project's `source\scenes` folder. The Project view shows that folder as **Scenes**, and a `<name>.scene.json` there opens as JSON. Scenes aren't packed: turning them into a mod comes with EDGEbuilder's bake, which is planned. EDGEbuilder finds the project through REDnode, as below.

## The EDGE Library

The [EDGE Library](../library.html) is one folder of your own where the EDGE tools keep things for good, outside any project.

**Add to Library...**, in the right-click menu of a file in Game Assets or under a project's Archive, saves that file as one Library item, together with the files it needs: a mesh takes its materials, masks and textures, and an entity also its appearances and meshes. Files the whole game shares, such as base materials, stay in the game and are only referred to.

- It asks which Library folder the item goes in, offers **New Folder...**, and **Use the game path**, which files the item under its game folders.
- With no Library yet, it asks where to make one, and suggests `Documents\EDGE Library`.
- An item that is already there can be replaced or added again beside it.

## REDnode

[REDnode](../rednode/) runs mods written in JavaScript inside the game. Two things already work between them:

- **Pack and Play** hands your packed archive to REDnode, which swaps it into the running game. See [Pack and Play](pack-install.html#pack-and-play-into-the-running-game).
- **A package called REDcode in REDnode's Mod Manager.** When the game has REDnode, REDcode puts a small package named `redcode` into REDnode's apps folder. It has no window. Its one job is to tell REDnode mods, such as EDGEbuilder, which project is open in REDcode, so they can save into it. You can leave it alone. To stop REDcode adding it, turn off `redcode.rednode.installPackage`.

For developers: the package answers with the project's name, mod name and folders, and says when the project changes. Assistants connected to REDnode get it as the read-only tool `redcode__project`. With several VS Code windows, the one you last used with a project open counts.

The bigger loop is still **planned, not built**: write a REDnode mod in REDcode, send it into the running game without restarting, and see the game's logs and a debugger in VS Code.

## EDGEhack and EDGEquest

[EDGEhack](../edgehack/) (quickhacks) and [EDGEquest](../edgequest/) (quests) are their own extensions and build on REDcode through its API: its REDbridge, its editors, its import and its pack. A tool like these can claim the TweakDB records it is made for, so a click on one in REDcode's TweakDB view opens it in that tool. See [The TweakDB view](tweakdb.html#the-tweakdb-view).

## WolvenKit

REDcode isn't a replacement for [WolvenKit](https://github.com/WolvenKit/WolvenKit); it's built on it. WolvenKit's libraries read and write every game file in REDcode, so the results are the same.

- **Projects are shared.** A `.cpmodproj` project opens in both, and REDcode writes the project file exactly as WolvenKit does. Use whichever tool suits the task.
- **Packs match.** REDcode's Pack produces the same `packed` folder as WolvenKit's: on the developer's test project, the archives matched file for file. One difference, on purpose: REDcode keeps TweakXL `.tweak` files in `r6/tweaks`, which WolvenKit leaves out.
- **Not in REDcode:** graph editors for quest, scene and behaviour files, a preview of the game's interface widgets, and importing voice lines. Quest and scene graphs are in EDGEquest, and a widget preview is planned for REDcode. For that kind of work, open the same project in WolvenKit.

## Blender

**Edit in Blender** opens a project model in [Blender](https://www.blender.org/) and imports it back each time you save there. See [Edit in Blender](export-import.html#edit-in-blender).

## redscript

REDcode doesn't handle [redscript](../glossary.html#game-and-modding-terms), the game's scripting language. The community's **Redscript IDE** extension for VS Code (`jac3km4.redscript-ide-vscode`, on the VS Code Marketplace) already does, and EDGE reuses it rather than rebuilding it. Install it beside REDcode if you write redscript. Pack copies your `.reds` files under `source/resources` into the mod like any other resource.

## For extension authors: REDcode's API

REDcode hands other VS Code extensions an API, so they can use its REDbridge, its project, its editors, its import and its pack without copying its code. EDGEwave, EDGEmat, EDGEquest and EDGEhack use it. See [Extension API](https://edgemodders.github.io/REDcode/api.html) on REDcode's docs site.
