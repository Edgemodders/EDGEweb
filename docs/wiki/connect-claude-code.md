---
title: Connect Claude Code to the EDGE tools
nav_title: Connect Claude Code
section: Start here
order: 4
description: "Give Claude Code on your PC the EDGE tools over MCP, so it can read game files, manage mods and call the running game."
reviewed: 2026-10-13
---

# Connect <span class="y">Claude Code</span>

REDagent is the agent inside the game. On your desktop, [Claude Code](https://claude.com/claude-code) can use the same kind of tools through MCP, the Model Context Protocol. Three EDGE tools offer an MCP server. Each one adds different powers.

| MCP server | From | Gives the agent | Setup |
|---|---|---|---|
| REDnode kernel | REDnode | Mod logs, overlay windows (text and image), game types, live calls into the running game | [REDnode MCP docs](https://edgemodders.github.io/REDnode/mcp.html) |
| `redcode-mcp` | REDcode | The game's archives, game files as JSON, textures, hashes, node-by-node file editing (through REDbridge) | [REDcode MCP docs](https://edgemodders.github.io/REDcode/mcp.html) |
| REDdeck | REDdeck | The mod library: list, add, turn on or off, reorder, remove, deploy, undo, conflicts, loadouts, Vortex import | [REDdeck guide, section 13](https://edgemodders.github.io/REDdeck/guide.html) |

## In short

1. **REDnode:** in the game, press **F10** to open the REDnode launcher. On the REDNODE tab, switch **MCP server** on, press **Copy setup**, and run the copied command in a terminal.
2. **REDcode:** build the server in your REDcode checkout and register it with `claude mcp add`. The exact commands are in the REDcode MCP docs.
3. **REDdeck:** in VS Code, run **REDdeck: Connect an assistant (MCP)...** from the command palette, pick "Copy the Claude Code command" and run it in a terminal once. Agents inside VS Code 1.101 and later see REDdeck's tools with no setup.

Then start Claude Code and ask, for example:

> What errors are in my mod log?

> Find the texture for the Mantis Blades and show it to me.

> Turn off every mod that conflicts with my weapon pack, then deploy.

## Good to know

- Calls that could change the running game ask you first, and so do REDdeck's deploy and undo.
- Each server's docs page is the reference for its tools and settings. This page only shows you where to start.
- The tools never ship an API key. Claude Code uses your own account.
