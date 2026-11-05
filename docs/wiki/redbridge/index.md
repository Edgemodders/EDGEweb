---
title: REDbridge
nav_title: Overview
section: REDbridge
order: 0
description: "REDbridge, EDGE's engine host: WolvenKit's C# engine as a local service for REDcode, EDGEdeck, REDnode packages and AI agents."
reviewed: 2026-11-05
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
| [EDGEbuilder](../edgebuilder/) | List the game's meshes and entities, and your mods', with their sizes, appearances and whether they can be solid. Bake a scene into the world as a mod, with EDGEbuilder's Bake, which is being tested. Read the world's own sectors and what is placed in them, for its world map and inspector, still to come |
| AI assistants | REDcode's MCP server, `redcode-mcp`, gives Claude and other assistants the same abilities as tools. The EDGE plugin for Claude Code, a preview, sets it up for you |

## Benefits

- **WolvenKit's own engine.** The same code WolvenKit trusts reads and writes the game's files.
- **Ready for game 2.5.** Since 0.11.0 it is built with WolvenKit's first release for game 2.5, and reads all of 2.5's files.
- **Fast.** Indexes a game install's archives (over 580,000 files) in about a second, and opens large game files in a fraction of a second.
- **Exact round trips.** Game files convert to JSON and back byte for byte.
- **Works without the game running.** Reads any mod archive on disk, which is how EDGEdeck finds conflicts inside archives, and reads the game's TweakDB (its database of items, stats and more) straight from the game folder.
- **One engine, many clients.** The same calls serve REDcode, EDGEdeck, REDnode packages and AI agents.
- **Fetched for you.** EDGEdeck, REDcode and REDnode's Mod Manager download it with one click, and offer updates. EDGEdeck and REDnode also install the .NET runtime it needs.

## Reading and building the world

Since 0.12.0, tools can read Night City's own layout from the game's files, read a mod's files the way they read the game's, and write solid objects. EDGEbuilder is the first user. If you're making a tool of your own, these are the calls:

| Call | What it gives |
|---|---|
| `sector.find` | The world's streaming sectors, the pieces the game loads around you (26,347 in game 2.5), each with its box in the world. Ask for the ones in an area, of a kind or at a level. The first call takes a second or two, then milliseconds |
| `sector.nodes` | What one sector places: each mesh, entity, decal or effect, with its world position, the file it shows and how far away it stays loaded, and one position per copy for instanced meshes. Most sectors read in under 100 ms |
| `mesh.info`, `mesh.infoMany` | A mesh's or entity's size and appearances, and for a mesh `hasCollision`: whether it can be solid. Pass `archive` (a mod's `.archive`) or `root` (a folder of loose files, such as a REDcode project's `source\archive`) to look there before the game's archives |
| `sector.build` | Writes a scene into a REDcode project as a sector, its block and an ArchiveXL file. Takes `archive` and `root` too, and `"solid": true` on a mesh |

### Solid objects

A mesh baked the plain way only draws: V, bullets and cars pass through it. With `"solid": true` on a scene's mesh, the bake writes the kind of node EDGEbuilder's probe proved in game 2.5:

```json
{ "id": "crate", "kind": "mesh", "resource": "base\\...\\cargo_crate_a.mesh", "solid": true, "transform": { } }
```

| Case | What you get |
|---|---|
| A mesh with collision data | Stops V, bullets, melee and cars, stays put, looks the same and takes an appearance. Its collision grows with its scale |
| A mesh with no collision data | It shows, but it isn't solid. The bake still runs, and a warning names the mesh. About 4 in 10 of the crate-sized meshes EDGEbuilder sampled have none; `hasCollision` tells you before you bake |
| An entity | Its collision comes from what it's made of, so `solid` does nothing and the bake warns. An entity with a physical mesh, such as `crate_red.ent`, is solid already |

The node `solid` writes is byte for byte the one that passed in game, but a bake through `solid` itself hasn't been run in the game yet: EDGEbuilder's Solid switch, still to come, will be the first.

Full call shapes are in the [changelog](https://github.com/Edgemodders/REDbridge/blob/main/CHANGELOG.md).

## Status

The latest release is **0.12.0** (5 November 2026), built with WolvenKit 10.0.0-beta.1, for game 2.5. It adds:

- [the world's sectors and what they place, and solid objects](#reading-and-building-the-world);
- **a mod's files**: the sizes and appearances of the meshes and entities inside a mod's archive or a REDcode project, and baking scenes that use them;
- a bake's ArchiveXL file in the form the game loaded in EDGEbuilder's probe, named `<name>.archive.xl`;
- two fixes for REDcode: **Find Items** now finds outfit sets, glasses, helmets, masks and more, and searching a mesh finds its materials' values, such as its `.mlsetup`.

0.11.0 (26 October 2026) was the first REDbridge for game 2.5: it reads all of 2.5's quest streaming sectors, where 0.10.0 failed 262 of them, and writes sectors in 2.5's form. It also added:

- the game's **spoken lines** (subtitles), with their voice files and lengths, for EDGEquest;
- **texture settings** for image imports (colour, normal map or greyscale), for EDGEmat;
- **the items that use a mesh**, which REDcode 0.10.5's Find Items shows.

> **On game 2.31, keep REDbridge 0.10.0** if you read streaming sectors (the files that place objects in the world): 0.11.0 reads 2.31's sectors wrong. Everything else still works on 2.31. See [Which version do I need?](install.html#which-version-do-i-need)

0.10.0 before it added the game's on-screen texts (LocKeys) in all 19 languages, which REDcode's LocKeys view uses. 0.9.0 added replacing game sound effects from WAV files, and turning a 3D model (GLB) into a new mesh from a game mesh. 0.8.0 added offline TweakDB reading.

REDbridge runs on Windows x64 and needs Microsoft's free .NET 10 runtime. It has no window and no settings of its own.

The scene baking it does for EDGEbuilder has loaded in the game: in EDGEbuilder's bake probes on 2026-10-30 and 2026-11-05, baked crates stood in the world in game 2.5, in the ArchiveXL form 0.12.0 writes, and streamed in and out at the distances the scene set. EDGEbuilder's Bake tab, which uses it, is in a test build.

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
