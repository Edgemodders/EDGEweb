---
title: REDbridge
nav_title: Overview
section: REDbridge
order: 0
description: "REDbridge, EDGE's engine host: WolvenKit's C# engine as a local service for REDcode, REDdeck, REDnode packages and AI agents."
reviewed: 2026-10-16
---

# RED<span class="y">bridge</span>

REDbridge is EDGE's engine room. It runs [WolvenKit](https://github.com/WolvenKit/WolvenKit)'s proven C# libraries in a small local program and offers them to the other toolkits, so EDGE never has to reinvent the game's file formats. Most people never run it directly: REDcode, REDdeck and REDnode start it when they need it.

{% include shot.html caption="REDbridge at work" shows="The REDdeck page's footer with the green dot and the running REDbridge version, next to REDcode's status bar showing the bridge it uses." %}

## What it's for

Cyberpunk 2077 keeps its models, textures, sounds and game data packed inside `.archive` files, in formats only specialist tools can read. WolvenKit is the community's tool for that, built over years. REDbridge puts WolvenKit's engine behind a simple local connection, so tools written in other languages (VS Code extensions, Node mods, AI assistants) can ask it to do the reading and writing.

You don't talk to REDbridge yourself. You notice it through what the other toolkits can do with it:

| Toolkit | What REDbridge lets it do |
|---|---|
| [REDdeck](../reddeck/) | See [conflicts inside mod archives](../reddeck/conflicts.html), and list an archive's contents for Add to Project |
| [REDcode](../redcode/) | Browse the game's archives, open and edit game files, view textures and meshes, play game sounds with their names, browse TweakDB, export, import and pack mods |
| [REDnode](../rednode/) | Packages you allow can read the game's archives while you play |
| AI assistants | REDcode's MCP server, `redcode-mcp`, gives Claude and other assistants the same abilities as tools |

## Benefits

- **WolvenKit's own engine.** The same code WolvenKit trusts reads and writes the game's files.
- **Fast.** Indexes a game install's archives (over 580,000 files) in about a second, and opens large game files in a fraction of a second.
- **Exact round trips.** Game files convert to JSON and back byte for byte.
- **Works without the game running.** Reads any mod archive on disk, which is how REDdeck finds conflicts inside archives, and reads the game's TweakDB (its database of items, stats and more) straight from the game folder.
- **One engine, many clients.** The same calls serve REDcode, REDdeck, REDnode packages and AI agents.
- **Fetched for you.** REDdeck and REDcode download it, and the .NET runtime it needs, with one click, and offer updates.

## Status

The latest release is **0.8.0** (15 October 2026), built with WolvenKit 9.1.0. It added offline TweakDB reading, which REDcode's TweakDB view uses; 0.7.2 before it added the names of the game's sound events, for REDcode's sound browser. Since 15 October REDbridge takes WolvenKit from WolvenKit's own published packages, so it can follow each new WolvenKit release more easily.

REDbridge runs on Windows x64 and needs Microsoft's free .NET 10 runtime. It has no window and no settings of its own.

The scene baking it does for EDGEbuilder is written and checked by reading the files back, but hasn't been loaded in the game yet.

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
