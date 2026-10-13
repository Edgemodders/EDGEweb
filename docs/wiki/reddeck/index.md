---
title: REDdeck
nav_title: Overview
section: REDdeck
order: 0
description: "REDdeck, EDGE's mod manager for Cyberpunk 2077 inside VS Code. One list of mods, four verbs, every deploy undoable."
reviewed: 2026-10-13
---

# RED<span class="y">deck</span>

REDdeck is EDGE's mod manager. It runs inside VS Code and REDcode: one list of mods and four verbs, **add**, **turn on or off**, **deploy**, **remove**.

## Benefits

- **Simple.** One list, four verbs, plain words. It decides where files go and asks only when a wrong guess could lose data.
- **Undoable.** Your mods live in a library outside the game. Deploys are hardlinked and recorded in a manifest, and **Undo deploy** removes exactly those files.
- **Sees deeper conflicts.** With REDbridge, REDdeck shows conflicts between files *inside* mod archives, with a "Let ... win" button.
- **Knows the frameworks.** Recognises RED4ext, CET, redscript, ArchiveXL, TweakXL, REDmod and more, and warns after a game patch.
- **Nexus Mods built in.** Daily update checks, version switching and **Mod manager download** links.
- **Moves in from Vortex.** Imports your Vortex mods and leaves Vortex's copies alone.
- **Agent-ready.** A command line and an MCP server with the same verbs, so an assistant can manage your mods. It asks before deploying.

## Install

Download `reddeck-<version>.vsix` from the [releases page](https://github.com/Edgemodders/REDdeck/releases) and install it in VS Code with **Install from VSIX...**. A **Set up** group then walks you through finding the game, getting REDbridge, Nexus sign-in and Vortex import.

## In this wiki

| Page | |
|---|---|
| [Switch from Vortex to REDdeck](switch-from-vortex.html) | Move your existing mods over safely |

## Reference

- [REDdeck guide](https://edgemodders.github.io/REDdeck/guide.html): every view, setting and command, plus troubleshooting
- [Design](https://edgemodders.github.io/REDdeck/design.html)
- [Releases](https://github.com/Edgemodders/REDdeck/releases), [source and issues](https://github.com/Edgemodders/REDdeck)
