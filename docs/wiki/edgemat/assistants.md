---
title: EDGEmat and AI assistants
nav_title: Assistants
section: EDGEmat
order: 7
description: "Connect Claude Code to EDGEmat's MCP server, so an assistant can find a garment's materials, describe its layers and pick colors for you."
reviewed: 2026-10-19
---

# EDGEmat and <span class="y">assistants</span>

EDGEmat comes with an **MCP server**, so an AI assistant such as [Claude Code](https://claude.com/claude-code) can use EDGEmat the way you do: find a garment's materials, describe its layers, and find the closest color a surface offers. Every EDGEmat feature comes to the buttons and the assistant together. In version 0.2 the assistant can look, not change: editing comes in the next phase, with a tool to recolor.

## Connect Claude Code

You need [Node.js](https://nodejs.org/) 20 or later, and Cyberpunk 2077 and REDbridge as for the extension ([Install and set up](install.html)).

1. From EDGEmat's [releases page](https://github.com/Edgemodders/EDGEmat/releases), download `edgemat-mcp-<version>.cjs`, the server in one file, and keep it somewhere stable, such as `%USERPROFILE%\EDGE\`.
2. In a terminal, run once (with your path):

   ```powershell
   claude mcp add --scope user edgemat -- node "C:\Users\<you>\EDGE\edgemat-mcp-0.2.0.cjs"
   ```

   `--scope user` makes EDGEmat available in every folder. Without it, Claude Code only sees EDGEmat in the folder where you ran the command.
3. Start a new Claude Code session. It sees EDGEmat's tools. To check, run `claude mcp list`: EDGEmat shows as connected.

The server finds the game and REDbridge from your VS Code settings, the same way the extension does (EDGEmat's settings, then REDcode's), so on a PC with REDcode set up it needs nothing more. It shares the extension's material library; with none built yet, ask the assistant to build it first. It starts its own REDbridge while it runs.

To point it elsewhere, add options after the file name, or set environment variables (an empty one counts as not set):

| Option | Environment variable | What |
|---|---|---|
| `--game <folder>` | `EDGEMAT_GAME_PATH` | The Cyberpunk 2077 folder |
| `--bridge <path>` | `REDBRIDGE_EXE` | `REDbridge.exe`, or its folder |
| `--cache <folder>` | `EDGEMAT_CACHE` | Where the library lives, `%LOCALAPPDATA%\EDGEmat` by default |

For the other EDGE tools' servers, see [Connect Claude Code](../connect-claude-code.html).

{% include shot.html caption="Claude Code asking EDGEmat" shows="A Claude Code session in a terminal answering 'describe the Arasaka samurai jacket's layers' with EDGEmat's mat_describe: the layers in plain words and their shares." %}

## What it can do

| Tool | Does | Like the UI's |
|---|---|---|
| `mat_find` | Finds a garment by in-game name or record id, or a mesh by path, and walks it to its looks per body type, meshes and materials, with each setup and the mask set it uses | [Find](find.html) |
| `mat_describe` | Describes a setup layer by layer, in plain words and raw values: surface, color, finishes, tiling, opacity, detail texture, share of the garment, and what looks wrong | [The setup editor](setup-editor.html) |
| `mat_colors` | One surface's colors with plain names, and the closest to a color given in words, hex or RGB; its finishes in plain words | [Surface pages](surfaces.html) |
| `mat_templates` | Searches the surfaces by plain words | [The Library](library.html)'s search |
| `mat_microblends` | Searches the detail textures by plain words | The Library's Microblends |
| `mat_library` | Says whether the library is built and current, and builds it | Rebuild Library |

## Things to ask

> Which materials do the punk jeans use, for each body?

> Describe the Sunny Ammo sneakers' layers. Which one is the sole?

> What's the closest dark red the leather on the Arasaka jacket can take?

> Find me a worn chrome surface and show its colors.

> I opened a setup from a mod and one layer looks white in the game. Why?

The assistant answers from the same data you see, and names the files behind it, so you can open them yourself.

## Good to know

- The server makes no network calls of its own, and sends no telemetry. Claude Code talks to Claude with your own account.
- It reads the game and never writes to it.
- Some asks match many items ("samurai" fits 19). The assistant then gets a list and picks one, or asks you.
