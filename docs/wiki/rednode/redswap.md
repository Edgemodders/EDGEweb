---
title: "REDswap: swapping archives into the running game"
nav_title: REDswap
section: REDnode
order: 8.5
description: "REDswap, the plugin that loads a changed archive into the running game on version 2.5: what it does, how to use it from REDnode, AI assistants and your own tools, and what to do when a swap does not show."
reviewed: 2026-10-27
---

# RED<span class="y">swap</span>

**REDswap** loads a changed `.archive` into the running game. Edit a mesh, a material or a texture, pack it, swap it in, and see it on V or in the world a moment later, with no restart. It is a small RED4ext plugin for game version **2.5**. REDnode installs it and uses it for every archive swap; it also has its own [Nexus page](https://www.nexusmods.com/cyberpunk2077/mods/36172) for tools and players who want it alone.

> **Status:** passed in game on 2.5 on 27 October 2026 (four swaps, no crash, about 50 ms each). It ships with **REDnode 0.41.0**, not released yet, and as REDswap 1.0.0 on its own. Until then, REDnode 0.40.1 swaps through RED Hot Tools, which has no build for 2.5 yet.

## Why you'd want it

| | |
|---|---|
| **No restart** | A full game restart to check a colour or a seam takes minutes. A swap takes about a twentieth of a second |
| **It shows on V at once** | With REDnode, what V wears shows the new version straight away, without taking it off, Equipment-EX's slots included. The inventory's preview of V updates too, open or closed |
| **Safe on game updates** | REDswap checks the game before it touches anything. After a patch it says it cannot swap, instead of crashing the game |
| **Works with your tools** | REDnode's apps, AI assistants through REDnode, and any script or plugin can call it |

## How it fits EDGE

You rarely use REDswap directly. You make the change in [REDcode](../redcode/) or [EDGEmat](../edgemat/), and the swap goes through REDnode:

| Where | How you swap |
|---|---|
| Claude Code or REDagent | Ask "swap my changed archive into the game". The assistant calls REDnode's `archives_reload`, and REDnode asks you in the game first. See [Agents and MCP](agents.html) |
| REDnode apps | The Sound Tools pack's **Hot swap** app, or any package with the `archives` permission. See [The game API](game-api.html#swapping-archives-into-the-running-game) |
| Your own mod | `archives.reload([...])` from the `rednode` package |
| A script or plugin without REDnode | REDswap's own functions; examples in the [REDswap docs](https://edgemodders.github.io/REDnode/redswap.html) |

## What a swap does

1. Your file is **copied** into the game: an archive the game already loaded is replaced where it is, and a new one is added to `archive\pc\mod`. The file you built stays where it is.
2. The game's own loader loads it, and what the old archive held is dropped from the game's memory, so whatever loads it next gets your version.
3. ArchiveXL, if installed, reloads its `.xl` and `.yaml` files.
4. With REDnode: what V wears, the inventory preview, REDnode's own spawned objects and nearby objects that use the swapped files are refreshed.

Anything else already in the world keeps the old version until the game loads it again: walk away and back, or change the item.

## Install

| You have | What to do |
|---|---|
| REDnode 0.41.0 or later | Nothing: REDswap is already in `red4ext\plugins\REDswap\` |
| No REDnode | Install REDswap from its [Nexus page](https://www.nexusmods.com/cyberpunk2077/mods/36172) with [EDGEdeck](../edgedeck/) or Vortex, or extract its zip into the game folder. It needs RED4ext 1.31 or later |
| Both | They carry the same files. If your mod manager shows a conflict, either copy works; let the newer one win |
| RED Hot Tools too | Fine. They can sit side by side; REDnode uses REDswap |

{% include shot.html caption="A swap from Claude Code" shows="Claude Code asking to swap an archive, REDnode's question in the game, and the jacket on V in its new colour" %}

## When a swap does not show

| What you see | Why, and what to do |
|---|---|
| "cannot swap archives in this game" | REDswap's checks failed: usually a game patch REDswap does not know yet. Its log, `red4ext\logs\redswap-*.log`, says which check. Wait for an update |
| The swap worked but nothing changed | The object loaded the old version before the swap. Clothing V wears refreshes on its own with REDnode; for anything else, make the game load it again |
| "Load a save first" | Swaps work in a loaded save, not at the main menu |
| The game closed at the swap | A broken archive, or a mod missing its other parts, crashes the game at the swap as it would at start. Check the mod loads after a normal restart |
| A sound mod | Archives with the game's sound swap through REDnode, which pauses the game for a moment around it. Untested on 2.5 so far |

## For mod makers

REDswap adds three functions the game's scripts and other plugins can call: `REDswap_Version()`, `REDswap_Check()` (empty when it can swap) and `REDswap_Swap(files)` (absolute paths joined by `|`, answering what each file became). The [REDswap docs](https://edgemodders.github.io/REDnode/redswap.html) have examples in REDnode's JavaScript, redscript and C++, and the full answer.

REDswap's swap is ported from [RED Hot Tools](https://github.com/psiberx/cp2077-red-hot-tools) by psiberx (MIT), with thanks.
