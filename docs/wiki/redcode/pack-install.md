---
title: Pack, install and run
section: REDcode
order: 8
description: "Turn a REDcode project into a mod with Pack, put it in the game through EDGEdeck or directly, swap it into the running game with Pack and Play, take it out again, and start the game."
reviewed: 2026-11-03
---

# Pack, install and <span class="y">run</span>

Three steps take a project into the game: **Pack** builds the mod, **Install** puts it in the game folder, and **Run Game** starts the game. The rocket button in the Project view, **Pack and Install**, does the first two in one go. **Pack and Play**, the flame, sends the mod into a game that's already running, through REDnode or Red Hot Tools.

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
- A project with nothing in `source/archive` is fine: the mod may be tweaks or scripts only. A project with nothing in `source/archive` or `source/resources` has nothing to pack, and REDcode says so.
- Paths with **capital letters or spaces** are listed in REDcode's log, as WolvenKit warns about them.

{% include shot.html caption="Packing" shows="The Project view after a pack: the Pack, Pack and Install and Run Game buttons in the title bar, and Packed expanded to show the mod's archive and a tweak file." %}

### Packing as a REDmod

Turn on `redcode.pack.redmod` to pack the project as a [REDmod](../glossary.html#game-and-modding-terms) instead, as WolvenKit's REDmod option does. The archive and ArchiveXL files go under `packed/mods/<mod name>/archives`, scripts under `packed/mods/<mod name>/scripts`, with an `info.json` written from the project. Most mods ship as plain archives, so it's off by default.

A REDmod can add new sounds: list them under `customSounds` in `source/resources/info.json` and put the WAV files in `source/customSounds`. Pack copies them into the mod, as WolvenKit does, and warns about a listed WAV that's missing. Pack and Install asks before installing a REDmod with a missing sound, because REDmod would refuse it. Custom sounds play only in a REDmod.

## Install

**Install** is in the Project view's **`...`** menu; **Pack and Install** (the rocket) packs first. What Install does depends on whether you have EDGEdeck.

| With | Install does |
|---|---|
| [EDGEdeck](../edgedeck/) | Hands the project to EDGEdeck. The first time, it becomes a mod named after the project, version `dev`. After that, the same mod gets the new files and keeps its place in your list. EDGEdeck deploys it, with its record of every file, its conflict check and its undo. If EDGEdeck already has another mod of the same name, it asks first; cancel there and nothing is installed |
| No EDGEdeck | Copies `packed` into the game folder and records every file in the project's `.redcode/installed.json` |

With EDGEdeck 0.28.0 or later, Install deploys **your mod alone**. Changes to other mods that wait for a deploy keep waiting until you press Deploy in EDGEdeck, and REDcode's log says how many of their files still wait, and whether another mod took any of your files. With an older EDGEdeck, REDcode asks before the deploy takes the other changes along.

Without EDGEdeck, if a file is already in the game, REDcode asks, then backs it up before replacing it. Installing again first removes the previous set of files, so a file you dropped from the project doesn't stay behind. This path has only been tested against a stand-in game folder, not a real install.

> **Use EDGEdeck if you use any mod manager.** A tool that copies files into the game behind a mod manager's back confuses it. Through EDGEdeck, your own mod sits in the same list as everything else, and conflicts with other mods show up. See [EDGEdeck and REDcode](../edgedeck/redcode.html).

If the project hasn't been packed yet, Install says so and offers **Pack and Install**. If the project has no files at all and an earlier install of it is still in the game, REDcode offers **Uninstall**.

{% include shot.html caption="Your mod in EDGEdeck" shows="EDGEdeck's Mods view after Install from REDcode: the project listed as a mod with version dev, switched on and deployed." %}

## Uninstall

**Uninstall**, in the same **`...`** menu, takes your mod out of the game again:

- with EDGEdeck, it turns the mod off in EDGEdeck and takes its files out. With EDGEdeck 0.28.0 or later only your mod's files come out, and other mods' waiting changes keep waiting;
- without EDGEdeck, it removes exactly the files listed in `.redcode/installed.json`, and puts back anything it backed up;
- either way, it also takes your archives out of Red Hot Tools' hot folder, `archive/pc/hot`, if they were put there.

## Pack and Play: into the running game

**Pack and Play**, the flame button in the Project view's title bar (or **REDcode: Pack and Play**), packs, then puts the mod into the game the quickest way it can:

| The game | Pack and Play |
|---|---|
| Running with [REDnode](../rednode/), its **MCP server** switched on in the launcher's Settings drawer | Hands the archive to REDnode, which swaps it into the running game through [REDswap](../rednode/redswap.html) (REDnode 0.41.0 or later). A notification says what was swapped, and what failed and why |
| Running with [Red Hot Tools](https://github.com/psiberx/cp2077-red-hot-tools), and no REDnode switched on | Copies the archive into the game's `archive/pc/hot` folder, where Red Hot Tools reloads it. The notification suggests switching REDnode's MCP server on |
| Neither, or the game closed | **Pack and Install**. Restart the game to see the change. If the game is still running, EDGEdeck asks you to quit it first, because the game keeps mod files open |

Then look at the change. Through REDnode, clothing V wears refreshes on its own; for anything else, respawn or re-equip what uses the archive. See [What a swap does](../rednode/redswap.html#what-a-swap-does).

Before REDcode 0.10.5 this was called **Pack and Try**. It is the same button, and the old command id, `redcode.packAndTry`, still works, so a keybinding you made keeps working.

{% include shot.html caption="Pack and Play through REDnode" shows="REDcode's notification after Pack and Play with the game running: REDnode swapped the project's archive, and how long it took." %}

**How far it's tested:** handing the archive to REDnode was tested by hand on game 2.5, and REDnode's own tests cover the swap. REDcode's test of a full swap through REDswap hasn't been run yet. The Red Hot Tools route is **untested** in REDcode: the developer doesn't have Red Hot Tools installed. Please report how it goes on [Discord]({{ site.discord }}) or in an [issue](https://github.com/Edgemodders/REDcode/issues).

### Sound mods

An archive that replaces game sounds (from [Replacing a sound](viewers.html#replacing-a-sound)) swaps only through REDnode, which pauses the game for a moment and loads the game's sound index again. REDnode's page lists sound swaps on game 2.5 as untested so far. Without REDnode, REDcode won't put a sound archive in the hot folder, because that swap crashes a running game: it offers **Install for Next Start** instead.

### The Hot Folder

Red Hot Tools picks archives up from the hot folder **only while the game runs**. Pressed with the game closed, the archive just waits there and the game starts without it: use **Pack and Install** then. Once loaded, Red Hot Tools moves the archive into `archive/pc/mod`, so it stays installed after the game closes. **Uninstall** takes it out of both folders.

**Install to the Hot Folder (Red Hot Tools)**, a second flame button that appears only when the game has Red Hot Tools, copies an archive you already packed.

> **Capital letters can end the game.** The official Red Hot Tools 1.3.0 can miss an archive it already loaded when the archive's name mixes capital and small letters, such as `MyJacket.archive`, and the game then quits. REDcode refuses that swap, with **Get the Edgemodders Build** and **Install for Next Start**. EDGEmodders' build of Red Hot Tools, [`v1.3.0+edgemodders.1`](https://github.com/CyberbuildsAI/cp2077-red-hot-tools/releases), fixes the name lookup, and REDcode doesn't refuse it; a fix is offered upstream. REDnode's REDswap doesn't have the problem.

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

With REDnode (or Red Hot Tools), keep the game running and press **Pack and Play** in step 2 instead. For a sound mod, see [Sound mods](#sound-mods).

When you're done for the day, nothing needs undoing. When you want the game clean, **Uninstall**.
