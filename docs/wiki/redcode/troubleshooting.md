---
title: Troubleshooting REDcode
nav_title: Troubleshooting
section: REDcode
order: 14
description: "What to do when REDcode can't find REDbridge or the game, a view is empty, an edit vanishes, an import isn't offered, a mod doesn't show in the game, or Pack and Play installs instead of swapping."
reviewed: 2026-11-13
---

# Troubleshooting <span class="y">REDcode</span>

Find what you see in the left column of the group where you're stuck. If it isn't here, the [last section](#anything-else) says where to ask.

| Where you're stuck | |
|---|---|
| [Setting up](#setting-up) | Installing, REDbridge, .NET, an empty Game Assets view |
| [Browsing and viewing](#browsing-and-viewing) | TweakDB, the 3D view, Find Items, sounds |
| [Editing, export and import](#editing-export-and-import) | Edits that vanish, imports that aren't offered, Blender |
| [Pack, install and the game](#pack-install-and-the-game) | A mod that doesn't show, a game that won't start, Pack and Play |
| [Other tools](#other-tools) | EDGEdeck, EDGEwave, EDGEmat |

## Start with the log

Click REDcode's item in the status bar, at the bottom of VS Code, or run **REDcode: Show REDbridge log** from the command palette (`Ctrl+Shift+P`). It's also under **View**, **Output**, then **REDcode** in the dropdown. It says which REDbridge started, where the game is, and what each command did. When you ask for help, include it.

## Setting up

| You see | Do this |
|---|---|
| Searching the Marketplace for "REDcode" finds an extension about Core War | That is another extension. Search for **REDcode for Cyberpunk 2077**, publisher Edgemodders, or install by id: `edgemodders.redcode-cyberpunk` |
| "the old ... extension is still installed or loaded" | You still have REDcode Core or the older REDcode from before the Marketplace release, and the two can't run together. Press **Show It** and uninstall the old one, press **Reload Window**, then run **REDcode: Install REDbridge** once more. See [Coming from an older REDcode](install.html#coming-from-an-older-redcode) |
| "bridge not found" in the status bar | REDcode can't find REDbridge. Run **REDcode: Install REDbridge**: it downloads it and sets everything up. If you set `redcode.bridgePath` yourself, check that it points to `REDbridge.exe` or its folder |
| "the bridge needs the .NET 10 runtime, which is not installed" | Press **Install with winget**, which runs the install in a terminal, or **Download page** to get it from Microsoft. Then run **REDcode: Restart REDbridge**. If .NET 10 is installed, but for your user only, set `redcode.dotnetRoot` to its folder. Don't set `DOTNET_ROOT` for your whole Windows account: it breaks other programs |
| "REDbridge ... is older than this extension needs" | A REDcode update needs a newer REDbridge. Press **Update REDbridge**, or run **REDcode: Update REDbridge** |
| Game Assets is empty, with **Set Game Folder**, **Show REDbridge log** and **Restart REDbridge** buttons | REDbridge isn't running, or has no game. Check the status bar for one of the messages above. Then run **REDcode: Set Game Folder** and pick the folder with `bin`, `archive` and `r6`. Then **REDcode: Restart REDbridge** |
| "the bridge stopped (exit code ...)" | REDbridge closed unexpectedly. Press **Restart REDbridge**. If it keeps happening, press **Show log** and include the last lines when you ask for help |
| "REDbridge is being updated in another window" | Another VS Code window is updating REDbridge. Wait: this window restarts its bridge when the update finishes |

## Browsing and viewing

| You see | Do this |
|---|---|
| I can't find the file for an item | Files and records go by internal names. See [Finding what you want to change](finding.html) |
| TweakDB takes a while the first time | Normal. Loading TweakDB takes about 12 seconds, once per session; the view says so while it loads |
| TweakDB doesn't load, on a game without Phantom Liberty | TweakDB hasn't been checked without Phantom Liberty. Please [tell us](https://github.com/Edgemodders/REDcode/issues) what the log says |
| Hovering a record in a tweak file shows nothing | The hover works once TweakDB is loaded. Open the TweakDB view once |
| A mesh shows in flat colours | Normal for game meshes. The 3D view colours each part by its material. With EDGEmat installed it shows EDGEmat's colours for the materials, still approximate. A GLB that carries its own textures shows them, unless **Shading** is set to flat colours |
| Find Items says it needs a newer REDbridge | Run **REDcode: Update REDbridge** |
| Find Items finds nothing for a weapon | Normal. Find Items works for clothing and similar items, not for weapons. For a mesh no item shows, it lists the `.app` looks that use it, to open instead |
| An animation file takes a long time to open | A large `.anims` file takes about a minute the first time, and is quick after that |
| The game sound list shows numbers, not names | About a third of the sound events have no known name: WolvenKit's list doesn't cover them. Filter by a name that is known, or play your way to the sound |
| No sound plays after a game update, or EDGEwave says "could not read sound" | An old REDcode kept sound files from before the update. Update REDcode: it now empties that cache when the game changes |

## Editing, export and import

| You see | Do this |
|---|---|
| Add to Project says to open a project first | REDcode needs somewhere to put the file. Make one with **New Project** in the Project view. See [Projects](projects.html#make-a-new-project) |
| The file is read-only | You opened the game's copy, from Game Assets. Press **Add to Project** on it, and open the copy under **Archive** in the Project view |
| My edit vanished after saving | Most likely it was inside `compiledData` in an `.ent` or `.app` file, which is rebuilt from `components` on every save. Make the same change under `components`. See [Why a value looks different after saving](editing.html#why-a-value-looks-different-after-saving) |
| A number reads back slightly different, such as `0.219999999` for `0.22` | Normal. The game stores numbers to about seven digits, and both are the same number to it |
| Save JSON to Project says values "did not survive" | The message names them, and the log lists them all. It is one of the two cases above: an edit inside `compiledData`, or a number with more digits than the game stores |
| Export to Raw or Import from Raw isn't on a file | Only files that can be converted show them: textures, meshes, sounds and a few more. Entities and appearances are edited in the CR2W editor instead. See [What converts](export-import.html#what-converts) |
| Import from Raw isn't offered on my sound | Only game sound effects import, from a WAV file named exactly after the sound's hash, such as `832549876.wav` (from **Copy Hash** in the game sound list). Voice lines (`.wem`) and WAVs with other names can't be imported. See [Replacing a sound](viewers.html#replacing-a-sound) |
| Edit in Blender says it can't find Blender | REDcode looks in Program Files and your Steam libraries. Press **Open Setting** and set `redcode.blenderPath` to `blender.exe` or its folder |
| Add to Project Onscreens isn't on a LocKeys entry | It needs a project open |

## Pack, install and the game

| You see | Do this |
|---|---|
| My mod doesn't show in the game | Go through [the checklist](#my-mod-doesnt-show-in-the-game) below |
| "nothing to pack" | Your project has no files under Archive or Resources yet. Add a file from Game Assets, or a tweak |
| "packed, but ... path(s) have capital letters or spaces" | The game may not find those files. Press **Show log** to see which. Rename them in small letters without spaces. If the path contains your mod's name, the project's name is the cause: a name such as `my_jacket` avoids it. See [Naming](projects.html#make-a-new-project) |
| "... not under r6\tweaks, so TweakXL will not load it" | Move the tweak file to `r6/tweaks/<mod name>/` under Resources |
| EDGEdeck asks about a mod with the same name | EDGEdeck already has a different mod called what your project is called. Cancel: nothing is installed. Then decide in EDGEdeck which mod keeps the name, and remove or rename the other |
| EDGEdeck asks me to quit the game | The game keeps mod files open, so a mod can't be put in while it runs. Quit the game, then answer. To change a mod while the game runs, use [Pack and Play](pack-install.html#pack-and-play-into-the-running-game) |
| The game doesn't start, or crashes, after I installed my mod | Take the mod out: **Uninstall** in the Project view's **`...`** menu, then start the game again. If that fixes it, the last file you changed is the likely cause: undo that change, or delete the file from your project and add it again from Game Assets. A missing framework can also do this: see step 3 of the checklist |
| Pack and Play installs instead of swapping | It swaps only into a running game, through REDnode. In the game, press **F10**, open the launcher's **Settings** drawer and switch on **MCP server**: that is what lets REDcode reach REDnode. Then press Pack and Play again. REDnode's answer is in REDcode's log |
| "REDnode did not swap the archive: ..." | REDnode refused, and the message says why. The usual reason is that no save is loaded: swaps don't work at the main menu. See [When a swap does not show](../rednode/redswap.html#when-a-swap-does-not-show) |
| Pack and Play swapped, but says part of the mod is "not in the game yet" | A swap carries the archive only. Tweaks, scripts and `.xl` files are read when the game starts. Press **Install for Next Start** and restart the game |
| Pack and Play swapped, but nothing changed | The game still shows the copy it loaded before. Unequip and equip the item, or walk away and come back. See [Pack and Play](pack-install.html#pack-and-play-into-the-running-game) |
| The game closed at a swap | A broken archive crashes the game at a swap as it would at the start. Check that the mod loads after Pack and Install and a normal start |
| The Hot Folder button is gone | REDcode no longer uses Red Hot Tools, which has no build for game 2.5. **Pack and Play** swaps through REDnode instead. See [Red Hot Tools](pack-install.html#red-hot-tools) |

### My mod doesn't show in the game

1. Look in the Project view under **Packed**. If it's empty, **Pack** again and read any warning.
2. Make sure you pressed **Pack and Install**, or **Install**. With EDGEdeck, check the mod is on and deployed in EDGEdeck, and that no other mod higher in the list has the same files.
3. Check the frameworks. A tweak needs TweakXL in the game, and an `.xl` file, such as changed texts, needs ArchiveXL. Both need RED4ext. Install the frameworks your mod uses (see [EDGEdeck's frameworks page](../edgedeck/frameworks.html)).
4. Start the game again. Tweaks, scripts and texts are read only when the game starts.
5. A changed text shows only in the language its file is for. See [the LocKeys view](game-assets.html#the-lockeys-view).
6. A REDmod needs the game started with `-modded`. **Run Game** adds it when `redcode.pack.redmod` is on.
7. Check REDcode's log for paths with capital letters or spaces, which Pack reports.

## Other tools

| You see | Do this |
|---|---|
| Install doesn't use EDGEdeck | Install uses EDGEdeck when it's installed and enabled in the same VS Code. The old REDdeck doesn't count: install [EDGEdeck](../edgedeck/) instead, and reload the window |
| Open in EDGEwave offers to install EDGEwave | EDGEwave isn't installed. See [EDGEwave](../edgewave/) for how to get it |
| Open in EDGEmat says it needs EDGEmat | EDGEmat isn't installed. Press **Install EDGEmat**, or see [EDGEmat](../edgemat/) |
| A package called REDcode is in REDnode's Mod Manager | REDcode put it there. It tells REDnode mods which project is open. See [REDnode](other-tools.html#rednode) |
| An assistant has REDcode's tools twice | `redcode-mcp` is connected both by hand and through EDGEchat. Run `/edge:setup` in Claude Code. See [Assistants and MCP](assistants.html#connect-it-the-easy-way) |

## Anything else

Ask on [Discord]({{ site.discord }}) with your log, or [open an issue](https://github.com/Edgemodders/REDcode/issues) on REDcode's repo. Say which REDcode version you have (the Extensions view shows it).
