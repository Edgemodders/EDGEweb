---
title: EDGEhack with assistants
nav_title: Assistants
section: EDGEhack
order: 7
description: "Claude Code and REDagent making and changing quickhacks with EDGEhack's MCP server: connecting, what they can do, and what they ask first."
reviewed: 2026-11-11
---

# EDGEhack with <span class="y">assistants</span>

EDGEhack has an MCP server, so an AI assistant can make and change quickhacks with you: [Claude Code](../connect-claude-code.html) on your desktop, or [REDagent](../redagent/) in the game. It runs without VS Code, and reads the game from your install through REDbridge.

## What they can do

| Tool | What it does | Asks you first |
|---|---|---|
| `hack_find` | Searches the game's quickhacks, and your quickhacks in the project, on the Desk and in the Library | No |
| `hack_describe` | A quickhack's tiers in plain words, or what one of yours changes | No |
| `hack_effects` | The status effects to add, other quickhacks' effects, and what EDGEhack builds | No |
| `hack_new` | A new quickhack from a game family, a change to a family, or a Desk or Library quickhack added to a project | Yes |
| `hack_edit` | Changes a quickhack as the editor's page does: costs, texts, cooldown, effects, Get it, feature lines | Yes |
| `hack_script` | Writes its scan check or on-land function | Yes |
| `hack_pack` | Packs the project. It doesn't install the mod | Yes |
| `hack_try` | Try Live in the running game, and Stop | Yes |

Claude Code asks you before every call of a tool marked **Yes**, in every permission mode. So does REDagent. Every answer names the quickhack's file: open it in VS Code to see the change in EDGEhack's editor. Adding to the Library stays yours, since its folders are yours.

## Claude Code

1. In VS Code, open EDGEhack's Desk view, its **...** menu, and pick **Connect an Assistant (MCP)...**. The command palette has it too.
2. Pick **Connect Claude Code**. It registers EDGEhack for every Claude Code session.
3. Start a **new** Claude Code session in your WolvenKit project's folder. `/mcp` lists `edgehack` with its eight tools.

A session started before step 2 doesn't see it. The server works in the project of the folder Claude Code starts in; you can name another project in your request. With no project, new quickhacks go on the Desk. VS Code's own agents see EDGEhack's tools without Connect.

{% include shot.html src="/assets/shots/edgehack/assistants-claude.webp" caption="Claude Code making a quickhack" shows="A Claude Code session asking to run edgehack's hack_edit, with the changes listed (RAM on every tier, an added poison), and the Allow and Deny choices." %}

## REDagent in the game

From REDnode 0.63.0, REDnode runs EDGEhack's server for its in-game assistant, as it does EDGEmat's. Ask REDagent for a quickhack while you play: it lands on EDGEhack's Desk, and REDagent can try it live, putting the tier you asked for in V's backpack. Add it to a project in VS Code later. REDnode shares its own REDbridge with the server, so a second one doesn't run.

A REDnode release carries EDGEhack's server once EDGEhack's first release puts it on npm.

{% include shot.html src="/assets/shots/edgehack/assistants-redagent.webp" caption="REDagent making a quickhack" shows="The game with REDagent's window: the player's request for a new quickhack, REDagent's ask card for hack_new, and its answer saying the quickhack is on EDGEhack's Desk." %}

## Try it

Ask Claude Code, in your project's folder: "Make a new quickhack from Overheat called Static Bloom, with 2 more RAM on every tier and Contagion's poison added." It asks before each change, then names the file. Open it in VS Code to see the page.
