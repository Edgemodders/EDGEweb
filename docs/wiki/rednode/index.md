---
title: REDnode
nav_title: Overview
section: REDnode
order: 0
description: REDnode, EDGE's runtime for Cyberpunk 2077: Node mods, HTML overlay apps, a typed game API and an MCP server for AI agents.
reviewed: 2026-10-13
---

# RED<span class="y">node</span>

REDnode is EDGE's runtime. It attaches to Cyberpunk 2077 as a RED4ext plugin and lets mods written in JavaScript or TypeScript, and small web apps drawn over the game, talk to the running game. REDagent writes its mods for REDnode.

## Benefits

- **Mods in JavaScript and TypeScript,** with npm packages, instead of a game-specific language.
- **HTML overlay apps.** Build in-game windows and HUD widgets with HTML, CSS and JavaScript, with a UI kit in the house style and the game's own UI sounds.
- **Hot reload.** Change a mod and REDnode restarts it in the running game, with no game restart.
- **Crash isolation.** Mods and overlay apps run in their own process, outside the game. If one crashes, the game keeps running.
- **A typed game API.** Call any game function, with types generated from the game's own type system and a published reference.
- **Agent-ready.** An MCP server gives AI agents mod logs, overlay windows, game types and live game calls, asking you before calls that change the game.
- **Native where it counts.** The overlay is drawn with the game's own Direct3D 12 device.

## Status

| Part | Status |
|---|---|
| HTML overlay apps, UI kit, HUD widgets | Passed in game |
| Node mods and the typed game API | Passed in game |
| MCP server for agents | Passed in game |
| In-game sandboxed code (Tier 1), declarative rules | Not started |
| Live debugging from VS Code | Planned |

REDnode installs from source for now, following its [developer setup](https://edgemodders.github.io/REDnode/dev-setup.html).

## Good to know

- **F10** in the game opens the REDnode launcher and cycles overlay modes: passive (you see the apps, the game gets input), interactive (the apps get input) and hidden. **Esc** returns input to the game.
- REDnode was tested side by side with Cyber Engine Tweaks and other RED4ext plugins.

## Reference

- [REDnode docs](https://edgemodders.github.io/REDnode/), including the [overlay apps guide](https://edgemodders.github.io/REDnode/overlay-apps.html) with tested examples, and the [MCP server](https://edgemodders.github.io/REDnode/mcp.html)
- [Source and issues](https://github.com/Edgemodders/REDnode)
