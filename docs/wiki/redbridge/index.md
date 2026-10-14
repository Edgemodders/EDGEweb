---
title: REDbridge
nav_title: Overview
section: REDbridge
order: 0
description: "REDbridge, EDGE's engine host: WolvenKit's C# engine as a local service for REDcode, REDdeck and AI agents."
reviewed: 2026-10-14
---

# RED<span class="y">bridge</span>

REDbridge is EDGE's engine room. It runs [WolvenKit](https://github.com/WolvenKit/WolvenKit)'s proven C# libraries in a local process and offers them to the other toolkits, so EDGE never has to reinvent the game's file formats. Most people never run it directly: REDcode and REDdeck start it for you.

## Benefits

- **WolvenKit's own engine.** The same code WolvenKit trusts reads and writes the game's files.
- **Fast.** Indexes a game install's archives (over 580,000 files) in about a second, and opens large game files in a fraction of a second.
- **Exact round trips.** Game files convert to JSON and back byte for byte.
- **Works without the game.** Reads the contents of any mod archive on disk, which is how REDdeck finds conflicts inside archives.
- **One API, many clients.** The same calls serve the REDcode editor, REDdeck, REDnode packages and AI agents through REDcode's `redcode-mcp`.

## How you get it

| You use | REDbridge comes from |
|---|---|
| REDdeck | **Get REDbridge** in REDdeck's Set up group downloads it, plus the .NET 10 runtime if needed, and keeps it updated |
| REDcode | **REDcode: Install REDbridge** downloads the latest release. REDcode checks for a newer one once a session and offers it; **REDcode: Update REDbridge** fetches it too |
| Directly | The [releases page](https://github.com/Edgemodders/REDbridge/releases). The latest release is 0.7.1 |

REDbridge is GPL-3.0, because it links WolvenKit's GPL-3.0 libraries. The tools that talk to it stay MIT.

## Reference

- [REDbridge docs](https://edgemodders.github.io/REDbridge/)
- [Releases](https://github.com/Edgemodders/REDbridge/releases), [source and issues](https://github.com/Edgemodders/REDbridge)
