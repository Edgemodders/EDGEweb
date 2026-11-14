---
title: REDcode
nav_title: Overview
section: REDcode
order: 0
description: "REDcode, the EDGE platform's Cyberpunk 2077 modding workspace in VS Code: what it is, what it's for, why you might want it, and where to start."
reviewed: 2026-11-13
---

# RED<span class="y">code</span>

REDcode is the EDGE platform's workspace for making mods that change the game's files: how an item looks, a texture, a sound, a line of text, a stat. It is an add-on (an extension) for VS Code, Microsoft's free code editor, where an AI assistant such as Claude Code can work beside you. In the extension stores it is listed as **REDcode for Cyberpunk 2077**.

REDcode does what [WolvenKit](https://github.com/WolvenKit/WolvenKit), the community's main modding tool, does, with WolvenKit's own engine. That engine runs in [REDbridge](../redbridge/), a small helper program REDcode downloads and starts for you.

{% include shot.html caption="REDcode in VS Code" shows="VS Code with the REDcode sidebar open (Project, Game Assets, TweakDB, LocKeys and Properties views), a game file open in the CR2W editor, and the REDcode status bar item at the bottom." %}

**New here?** Read this page, then [Install and set up](install.html), then make [your first mod](first-mod.html). Allow about half an hour. You don't need to know how to code.

## What it's for

A Cyberpunk 2077 mod is mostly game files that have been changed. Those files live inside the game's **archives** (`.archive` files, each a package of many game files) in a binary format called **CR2W**, which no ordinary editor can open. REDcode gets them out, lets you change them, and packs your changed copies into a mod:

- **browse the game** in a folder tree, with a filter and a search;
- **keep your work in a project**, the same `.cpmodproj` project WolvenKit uses;
- **edit game files** in a tree and property grid, or as readable JSON text;
- **look and listen**: textures, atlases, 3D meshes, animations, voice lines and the game's sound effects;
- **find the items** that wear a mesh, and open a mesh in EDGEmat to change its materials;
- **look things up** in TweakDB, the game's database of items and stats, and start a tweak from any record;
- **find the game's texts** (LocKeys) in any of its 19 languages, and change them;
- **export and import** to formats other tools edit, such as PNG and glTF, and send a model to Blender and back;
- **replace game sound effects** with your own WAV files;
- **pack, install and run**: build the mod, put it in the game (through [EDGEdeck](../edgedeck/) when you have it) and start the game, or swap it into the game while it runs, through [REDnode](../rednode/).

## Where to start

| You want to | Go to |
|---|---|
| Make something work, start to finish | [Your first mod](first-mod.html): rename an item, about 15 minutes |
| Change a name or a text | [The LocKeys view](game-assets.html#the-lockeys-view) |
| Change how something looks | [Finding what you want to change](finding.html), then [Export and import](export-import.html), or [EDGEmat](../edgemat/) for colours |
| Change a price or a stat | [TweakDB and tweaks](tweakdb.html) |
| Replace a sound | [Replacing a sound](viewers.html#replacing-a-sound) |
| Have an assistant do it | [Assistants and MCP](assistants.html) |
| Carry on from WolvenKit | [Projects](projects.html) and [Working with other tools](other-tools.html#wolvenkit) |

## Why you might want it

| If you... | REDcode gives you |
|---|---|
| Want an AI assistant to help you mod | REDcode turns the game's files into text an assistant can read. A companion tool, `redcode-mcp`, lets Claude Code open, search and change them for you |
| Already use WolvenKit | Your projects open in REDcode as they are, and a project made in REDcode opens in WolvenKit. Switch back and forth freely |
| Find big modding tools intimidating | One sidebar, a few lists and a handful of buttons. Plain messages that say what went wrong and offer the fix |
| Want to look before you change | Textures, meshes in 3D, sounds and TweakDB records open with a click, straight from the game, without extracting anything |
| Like VS Code already | Git, themes, extensions, search and your assistant, next to your mod |
| Use EDGEdeck | Install hands your mod to EDGEdeck, so one tool keeps track of everything in the game folder. Installing your mod does not push through other changes you have waiting in EDGEdeck |

## How it fits into EDGE

REDcode is the **Create** stage of the [EDGE platform](../index.html). It works on its own, and other toolkits add to it when they're present:

| Toolkit | What it adds to REDcode |
|---|---|
| [REDbridge](../redbridge/) | Needed. It runs WolvenKit's engine. REDcode downloads and updates it for you |
| [EDGEdeck](../edgedeck/) | Install goes through EDGEdeck, with its record of every file and its undo. EDGEdeck can also copy files from installed mods into your project |
| Claude Code and other assistants | `redcode-mcp` lets an assistant browse the archives, read and change game files, query TweakDB, export, import and pack. The easy way to connect it is [EDGEchat](../edgechat/) |
| [EDGEwave](../edgewave/) | **Open in EDGEwave** hands a sound to the EDGE sound studio |
| [EDGEmat](../edgemat/) | The 3D view shows a mesh's materials as EDGEmat renders them: colours only, approximate. **Open in EDGEmat** puts the mesh on EDGEmat's Desk |
| [REDnode](../rednode/) | **Pack and Play** swaps your mod into the running game through REDnode. REDnode mods and assistants can ask which project is open. Editing and debugging a REDnode mod from REDcode is planned |
| [EDGEbuilder](../edgebuilder/) | Its scenes show in the Project view as **Scenes** |
| [EDGEhack](../edgehack/), [EDGEquest](../edgequest/) and other EDGE tools | They build on REDcode: a click on a TweakDB record can open it in the tool made for it, and they use REDcode's editors and its pack |

## Status

REDcode **0.10.9** is the latest release (12 November 2026). It is on the **VS Code Marketplace**, as a Preview, and on **Open VSX**, under the id `edgemodders.redcode-cyberpunk`, and on [GitHub](https://github.com/Edgemodders/REDcode/releases). [EDGEkit](../edgekit/) has it built in. It runs on Windows and needs REDbridge 0.12.0 or later, which it fetches for you. Its companion for assistants, `redcode-mcp`, is at 0.5.1 on npm.

"Tested" below means tested by hand by REDcode's developer, on game 2.5 with Phantom Liberty.

| State | What |
|---|---|
| **Works, tested** | Projects, Game Assets, the filter and the search |
| | The CR2W editor: tree, property grid, search, the table view for texts, the atlas view, the Properties view, and editing as JSON |
| | The texture viewer, the 3D mesh viewer, the audio player and the game sound list. Game meshes show a colour per material, not their textures |
| | Animations: an `.anims` file plays on its rig, drawn as bones and joints. Bodies on the rig come next |
| | Find Items and Open in EDGEmat in the 3D view |
| | The TweakDB view, the record page, New Tweak from This Record and the hover |
| | The LocKeys view: the game's texts, hovers, Add to Project Onscreens |
| | Export and import, Edit in Blender (with Blender 5.2.2), and replacing a sound effect from a WAV file, as far as the files in the project |
| | Pack: the archive matched a WolvenKit pack of the same project |
| | Install and Uninstall through EDGEdeck, and Run Game |
| | Pack and Play through REDnode, for an archive |
| | Add to Library, and EDGEbuilder's scenes in the Project view |
| | `redcode-mcp`: each group of tools was checked with an MCP client against the game when it was added |
| **Works, not yet tested in a real game** | Install without EDGEdeck: tested only against a stand-in game folder |
| | A replaced sound effect, and a REDmod's custom sound, heard in the game. Swapping a sound mod into the running game |
| | A new mesh from a template with a different number of parts than the model |
| | TweakDB on a game without Phantom Liberty |
| **Planned** | Importing voice lines; bodies on the animation rig |
| | Editing and debugging a REDnode mod from REDcode |
| | A preview of the game's interface widgets, and a branded REDcode app. Graph views for quests and scenes are in [EDGEquest](../edgequest/) instead |

## In this section

| Page | |
|---|---|
| [Install and set up](install.html) | Requirements, installing, REDbridge, the HUD theme, updating |
| [Your first mod](first-mod.html) | A walkthrough: rename an item, from a new project to the game |
| [Projects](projects.html) | New projects, the Project view and its buttons, and how a project is laid out |
| [Game Assets](game-assets.html) | Browsing, filtering and searching the game, taking files out, and the game's texts in the LocKeys view |
| [Finding what you want to change](finding.html) | From an item you know in the game to the files and records behind it |
| [Editing game files](editing.html) | The CR2W editor, the Properties view, and editing as JSON |
| [Textures, meshes and sounds](viewers.html) | The texture viewer, the 3D mesh viewer and Find Items, animations, the audio player, the game's sound effects and replacing one |
| [TweakDB and tweaks](tweakdb.html) | Looking up records, starting a tweak from one, and `.tweak` files |
| [Export and import](export-import.html) | Out to PNG, glTF and Ogg, and back into the game's formats; Blender |
| [Pack, install and run](pack-install.html) | Turning a project into a mod and trying it in the game, with Pack and Play; sharing it |
| [Assistants and MCP](assistants.html) | Let Claude work on your mod with you |
| [Working with other tools](other-tools.html) | EDGEdeck, WolvenKit, EDGEwave, EDGEmat, EDGEbuilder, the EDGE Library, REDnode, redscript, and REDcode's API |
| [Settings and commands](settings.html) | Every setting, command, button and key |
| [Troubleshooting](troubleshooting.html) | What you see, and what to do |

The [REDcode docs](https://edgemodders.github.io/REDcode/) are the developer reference this section draws on: the [design](https://edgemodders.github.io/REDcode/design.html), the [MCP server](https://edgemodders.github.io/REDcode/mcp.html), the [extension API](https://edgemodders.github.io/REDcode/api.html) and the [record of tests](https://edgemodders.github.io/REDcode/testing.html). Source and issues are on [GitHub](https://github.com/Edgemodders/REDcode).

REDcode stands on WolvenKit. Credit for the file formats, the archive reader, the importers and exporters, and years of research belongs to the WolvenKit team and contributors.
