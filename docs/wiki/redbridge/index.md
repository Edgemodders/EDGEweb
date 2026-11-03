---
title: REDbridge
nav_title: Overview
section: REDbridge
order: 0
description: "REDbridge, EDGE's engine host: WolvenKit's C# engine as a local service for REDcode, EDGEdeck, REDnode packages and AI agents."
reviewed: 2026-11-03
---

# RED<span class="y">bridge</span>

REDbridge is EDGE's engine room. It runs [WolvenKit](https://github.com/WolvenKit/WolvenKit)'s proven C# libraries in a small local program and offers them to the other toolkits, so EDGE never has to reinvent the game's file formats. Most people never run it directly: REDcode, EDGEdeck, REDnode and the EDGE plugin for Claude Code start it when they need it.

{% include shot.html caption="REDbridge at work" shows="The EDGEdeck page's footer with the green dot and the running REDbridge version, next to REDcode's status bar showing the bridge it uses." %}

## What it's for

Cyberpunk 2077 keeps its models, textures, sounds and game data packed inside `.archive` files, in formats only specialist tools can read. WolvenKit is the community's tool for that, built over years. REDbridge puts WolvenKit's engine behind a simple local connection, so tools written in other languages (VS Code extensions, Node mods, AI assistants) can ask it to do the reading and writing.

You don't talk to REDbridge yourself. You notice it through what the other toolkits can do with it:

| Toolkit | What REDbridge lets it do |
|---|---|
| [EDGEdeck](../edgedeck/) | See [conflicts inside mod archives](../edgedeck/conflicts.html), and list an archive's contents for Add to Project |
| [REDcode](../redcode/) | Browse the game's archives, open and edit game files, view textures and meshes, find the items that use a mesh, play game sounds with their names, browse TweakDB and the game's on-screen texts (LocKeys), export, import and pack mods, replace game sound effects |
| [REDnode](../rednode/) | Packages you allow can read the game's archives while you play |
| [EDGEbuilder](../edgebuilder/) | List the game's meshes and entities, and your mods', with their sizes and appearances. It will also bake EDGEbuilder's scenes into the world |
| AI assistants | REDcode's MCP server, `redcode-mcp`, gives Claude and other assistants the same abilities as tools. The EDGE plugin for Claude Code, a preview, sets it up for you |

## Benefits

- **WolvenKit's own engine.** The same code WolvenKit trusts reads and writes the game's files.
- **Ready for game 2.5.** 0.11.0 is built with WolvenKit's first release for game 2.5, and reads all of 2.5's files.
- **Fast.** Indexes a game install's archives (over 580,000 files) in about a second, and opens large game files in a fraction of a second.
- **Exact round trips.** Game files convert to JSON and back byte for byte.
- **Works without the game running.** Reads any mod archive on disk, which is how EDGEdeck finds conflicts inside archives, and reads the game's TweakDB (its database of items, stats and more) straight from the game folder.
- **One engine, many clients.** The same calls serve REDcode, EDGEdeck, REDnode packages and AI agents.
- **Fetched for you.** EDGEdeck, REDcode and REDnode's Mod Manager download it with one click, and offer updates. EDGEdeck and REDnode also install the .NET runtime it needs.

## Status

The latest release is **0.11.0** (26 October 2026), built with WolvenKit 10.0.0-beta.1, WolvenKit's first build for game 2.5. It is the REDbridge for game 2.5: it reads all of 2.5's quest streaming sectors, where 0.10.0 failed 262 of them, and writes sectors in 2.5's form. It also adds:

- the game's **spoken lines** (subtitles), with their voice files and lengths, for EDGEquest;
- **texture settings** for image imports (colour, normal map or greyscale), for EDGEmat;
- **the items that use a mesh**, which REDcode 0.10.5's Find Items shows.

> **On game 2.31, keep REDbridge 0.10.0** if you read streaming sectors (the files that place objects in the world): 0.11.0 reads 2.31's sectors wrong. Everything else still works on 2.31. See [Which version do I need?](install.html#which-version-do-i-need)

0.10.0 before it added the game's on-screen texts (LocKeys) in all 19 languages, which REDcode's LocKeys view uses. 0.9.0 added replacing game sound effects from WAV files, and turning a 3D model (GLB) into a new mesh from a game mesh. 0.8.0 added offline TweakDB reading.

The next release, 0.12.0, reads the meshes and entities inside a mod's archive or a REDcode project's files, so EDGEbuilder can show their sizes, and writes a bake's ArchiveXL file in the form the game loaded in EDGEbuilder's bake probe. It is built but not released yet.

REDbridge runs on Windows x64 and needs Microsoft's free .NET 10 runtime. It has no window and no settings of its own.

The scene baking it does for EDGEbuilder has loaded in the game once: in EDGEbuilder's bake probe on 2026-10-30, a crate baked by 0.11.0 stood in the world in game 2.5. The probe's ArchiveXL file was written by hand, in the form 0.12.0 will write. EDGEbuilder's Bake button is still to come.

REDbridge is GPL-3.0, because it links WolvenKit's GPL-3.0 libraries. The tools that talk to it stay MIT, and talk to it only through its local connection.

## In this section

| Page | |
|---|---|
| [Install and update](install.html) | How each toolkit gets REDbridge, updating it, the .NET 10 runtime, and installing it by hand |
| [Troubleshooting](troubleshooting.html) | REDbridge missing, too old, or not starting |

## Reference

- [REDbridge docs](https://edgemodders.github.io/REDbridge/) and its [README](https://github.com/Edgemodders/REDbridge#readme), with the list of methods
- [Releases](https://github.com/Edgemodders/REDbridge/releases), [source and issues](https://github.com/Edgemodders/REDbridge)
- [REDcode's MCP server](https://edgemodders.github.io/REDcode/mcp.html), for assistants
