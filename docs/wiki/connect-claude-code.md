---
title: Connect Claude Code to the EDGE tools
nav_title: Connect Claude Code
section: Start here
order: 4
description: "Give Claude Code on your PC the EDGE tools over MCP, so it can read game files, manage mods and call the running game."
reviewed: 2026-10-16
---

# Connect <span class="y">Claude Code</span>

REDagent is the agent inside the game. On your desktop, [Claude Code](https://claude.com/claude-code) can use the same kind of tools through MCP, the Model Context Protocol. Four EDGE tools offer an MCP server. Each one adds different powers.

| MCP server | From | Gives the agent | Setup |
|---|---|---|---|
| REDnode kernel | REDnode | Mod logs, overlay windows (text, image and console), pictures of the game's screen, game types, TweakDB reads, live calls into the running game | [REDnode MCP docs](https://edgemodders.github.io/REDnode/mcp.html) |
| `redcode-mcp` | REDcode | The game's archives, game files as JSON, textures, hashes, node-by-node file editing, TweakDB, game sounds, pack, export and import (through REDbridge) | [REDcode wiki: assistants](redcode/assistants.html) |
| EDGEdeck | EDGEdeck | The mod library: list, add, turn on or off, reorder, remove, deploy, undo, conflicts, loadouts, Vortex import | [EDGEdeck guide, section 13](https://edgemodders.github.io/EDGEdeck/guide.html) |
| `edgemat` | EDGEmat (preview) | A garment's materials from its in-game name, its layers in plain words, recolors saved into your project, new materials from words or an image | [EDGEmat wiki: assistants](edgemat/assistants.html) |

## In short

1. **REDnode:** in the game, press **F10** to open the REDnode launcher. On the REDNODE tab, switch **MCP server** on, press **Copy setup**, and run the copied command in a terminal.
2. **REDcode:** run `claude mcp add redcode -- npx -y @edgemodders/redcode-mcp` in a terminal once. It needs Node, the .NET 10 runtime and REDbridge 0.8.0 or newer (REDcode's **Install REDbridge** fetches it). The [REDcode assistants page](redcode/assistants.html) has the details, including the form Windows sometimes needs.
3. **EDGEdeck:** in VS Code, run **EDGEdeck: Connect an assistant (MCP)...** from the command palette, pick "Copy the Claude Code command" and run it in a terminal once. Agents inside VS Code 1.101 and later see EDGEdeck's tools with no setup.
4. **EDGEmat:** in VS Code, EDGEmat's Library view › **`...`** › **Connect an Assistant (MCP)...** › **Connect Claude Code**. The server comes with the extension. Details on the [EDGEmat assistants page](edgemat/assistants.html).

Then start Claude Code and ask, for example:

> What errors are in my mod log?

> Find the texture for the Mantis Blades and show it to me.

> Turn off every mod that conflicts with my weapon pack, then deploy.

## Good to know

- Calls that could change the running game ask you first, and so do EDGEdeck's deploy and undo.
- Each server's docs page is the reference for its tools and settings. This page only shows you where to start.
- The tools never ship an API key. Claude Code uses your own account.
