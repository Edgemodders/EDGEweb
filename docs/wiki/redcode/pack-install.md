---
title: Pack, install and run
section: REDcode
order: 8
description: "Turn a REDcode project into a mod with Pack, put it in the game through REDdeck or directly, take it out again, and start the game."
reviewed: 2026-10-16
---

# Pack, install and <span class="y">run</span>

Three steps take a project into the game: **Pack** builds the mod, **Install** puts it in the game folder, and **Run Game** starts the game. The rocket button in the Project view, **Pack and Install**, does the first two in one go.

## Pack

**REDcode: Pack**, the package button in the Project view's title bar, builds your project's `packed` folder: the finished mod, laid out like the game folder. `Ctrl+Shift+B` runs it too, as VS Code's build task `redcode: pack`.

Pack does what WolvenKit's pack does, so the result installs the same way. On the developer's test project, REDcode's archive matched WolvenKit's file for file.

| From your project | Goes to |
|---|---|
| Everything in `source/archive` | One archive, `packed/archive/pc/mod/<mod name>.archive`, written by WolvenKit's packer |
| ArchiveXL files (`.xl`) under `source/resources` | Beside the archive |
| Other files under `source/resources` | The same path under `packed`, so `resources/r6/tweaks/my.yaml` becomes `packed/r6/tweaks/my.yaml` |

A few files are left out, as in WolvenKit: `.script` and `.ws` files, `info.json`, and `.tweak` files outside `r6/tweaks`. One difference on purpose: REDcode packs `.tweak` files in `r6/tweaks`, which WolvenKit drops.

- `packed` is **emptied first**, so a file you removed from the project doesn't linger in the mod. The setting is `redcode.pack.clean`.
- A project with nothing in `source/archive` is fine: the mod may be tweaks or scripts only.
- Paths with **capital letters or spaces** are listed in REDcode's log, as WolvenKit warns about them.

{% include shot.html caption="Packing" shows="The Project view after a pack: the Pack, Pack and Install and Run Game buttons in the title bar, and Packed expanded to show the mod's archive and a tweak file." %}

### Packing as a REDmod

Turn on `redcode.pack.redmod` to pack the project as a [REDmod](../glossary.html#game-and-modding-terms) instead, as WolvenKit's REDmod option does. The archive and ArchiveXL files go under `packed/mods/<mod name>/archives`, scripts under `packed/mods/<mod name>/scripts`, with an `info.json` written from the project. Most mods ship as plain archives, so it's off by default.

## Install

**Install** is in the Project view's **`...`** menu; **Pack and Install** (the rocket) packs first. What Install does depends on whether you have REDdeck.

| With | Install does |
|---|---|
| [REDdeck](../reddeck/) 0.21.0 or later | Hands the project to REDdeck. The first time, it becomes a mod named after the project, version `dev`. After that, the same mod gets the new files and keeps its place in your list. REDdeck deploys it, with its record of every file, its conflict check and its undo |
| No REDdeck | Copies `packed` into the game folder and records every file in the project's `.redcode/installed.json` |

With REDdeck, if other mods also have changes waiting to deploy, REDcode asks before the deploy takes them along.

Without REDdeck, if a file is already in the game, REDcode asks, then backs it up before replacing it. Installing again first removes the previous set of files, so a file you dropped from the project doesn't stay behind. This path has only been tested against a stand-in game folder, not a real install.

> **Use REDdeck if you use any mod manager.** A tool that copies files into the game behind a mod manager's back confuses it. Through REDdeck, your own mod sits in the same list as everything else, and conflicts with other mods show up. See [REDdeck and REDcode](../reddeck/redcode.html).

If the project hasn't been packed yet, Install says so and offers **Pack and Install**.

{% include shot.html caption="Your mod in REDdeck" shows="REDdeck's Mods view after Install from REDcode: the project listed as a mod with version dev, switched on and deployed." %}

## Uninstall

**Uninstall**, in the same **`...`** menu, takes your mod out of the game again:

- with REDdeck, it turns the mod off in REDdeck and deploys;
- without REDdeck, it removes exactly the files listed in `.redcode/installed.json`, and puts back anything it backed up.

## Install to the Hot Folder

[Red Hot Tools](https://github.com/psiberx/cp2077-red-hot-tools) is a mod for modders that reloads archives **while the game is running**. When the game has it, a flame button appears in the Project view: **Install to the Hot Folder (Red Hot Tools)**. It copies your packed archive into the game's `archive/pc/hot` folder, where Red Hot Tools picks it up.

**Untested:** the developer doesn't have Red Hot Tools installed, so this hasn't been tried against it. Please report how it goes on [Discord]({{ site.discord }}) or in an [issue](https://github.com/Edgemodders/REDcode/issues).

## Run Game

**Run Game**, the play button, starts Cyberpunk 2077.

- For a Steam install it starts the game through Steam, so the overlay and achievements work. Otherwise it starts `bin\x64\Cyberpunk2077.exe`.
- `redcode.launch` chooses: `auto` (the default, as above), `steam` or `exe`.
- If the project packs as a REDmod, REDcode adds `-modded`, the game's launch option for REDmods.

## The everyday loop

1. Change something: a value in the CR2W editor, a texture, a tweak.
2. Press **Pack and Install**.
3. Press **Run Game** and look.
4. Close the game, and go back to 1.

When you're done for the day, nothing needs undoing. When you want the game clean, **Uninstall**.
