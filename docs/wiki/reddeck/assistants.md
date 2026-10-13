---
title: Assistants and the command line
nav_title: Assistants and CLI
section: REDdeck
order: 11
description: "Let Claude or another AI assistant manage your mods through REDdeck's MCP server, or script REDdeck from the command line."
reviewed: 2026-10-13
---

# Assistants and the <span class="y">command line</span>

Everything you can do in REDdeck's Mods view, an AI assistant can do for you. That's the EDGE platform's idea: every tool you use, an agent can use too.

## What you can ask

Once an assistant is connected, ask in plain words:

> Which of my mods are off?

> Add the zip in my Downloads folder and tell me if it conflicts with anything.

> What will the next deploy change?

> Deploy my mods and tell me what changed.

> Save my current setup as a loadout called "photo mode".

The assistant uses REDdeck's tools: list and inspect mods, add, turn on or off, reorder, remove, show pending changes, deploy, undo, changes in the game folder, conflicts, loadouts and Vortex import.

{% include shot.html caption="An assistant managing mods" shows="Claude Code in a terminal answering &quot;which of my mods conflict?&quot; using REDdeck's tools, and the Mods view updating on its own." %}

## Connect an assistant

| Assistant | How |
|---|---|
| **Agents inside VS Code** (VS Code 1.101 and later) | Nothing to do. They see REDdeck's tools as soon as REDdeck is installed |
| **Claude Code** | Run **REDdeck: Connect an assistant (MCP)...** from the command palette, choose "Copy the Claude Code command", and paste it into a terminal once |
| **Other MCP clients** | The same command copies a JSON entry for the client's settings. Or point the client at `node <REDdeck extension folder>/dist/mcp.js --library <folder> --game <folder>` |

Outside VS Code, REDdeck's MCP server runs with Node. If the copied command fails because `node` isn't found, install [Node.js](https://nodejs.org/).

## Safety

- **Deploy and undo ask first.** Those tools change the game folder, so they're marked for the assistant to ask you before using them.
- **What you see stays true.** The Mods view reloads by itself when an assistant changes your library or deploys.
- **Same rules as you.** An assistant goes through REDdeck, so it can only remove files REDdeck placed, and everything it deploys can be undone.

## The command line

The same engine runs from a terminal, for your own scripts. It comes with REDdeck's source: in a checkout of the [REDdeck repo](https://github.com/Edgemodders/REDdeck), run `node bin/reddeck.mjs <command>`. Add `--json` to any command for machine-readable output.

| Command | Does |
|---|---|
| `list [--size]` | What's in the library, with sizes and status. `--size` sorts by size |
| `mod <id>` | One mod in full: files, sizes, source, Nexus data, conflicts |
| `add <file or folder> [--name N] [--option FOLDER]` | Add a mod. `--option` picks one of a download's option folders |
| `on <id>`, `off <id>` | Turn a mod on or off |
| `up <id>`, `down <id>` | Move it in the order (first wins conflicts) |
| `remove <id>` | Remove it from the library |
| `deploy [--keep PATH...] [--restore PATH...]` | Deploy. `--keep` and `--restore` answer the "changed in game folder" question per file |
| `undo` | Undo deploy |
| `changes` | Files changed in the game folder since the last deploy |
| `pending` | What the next deploy would do, and why |
| `conflicts` | Conflicts by file path |
| `loadout save <name>`, `loadout load <file>`, `loadout list` | Loadouts |
| `vortex list`, `vortex import` | See and import Vortex's mods |
| `mcp` | Start the MCP server |

`--library <folder>` and `--game <folder>` override the folders. The command line finds the game the same way the extension does.
