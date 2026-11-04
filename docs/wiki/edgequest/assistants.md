---
title: EDGEquest for assistants
nav_title: For assistants
section: EDGEquest
order: 7
description: "EDGEquest's MCP server gives Claude Code and other AI assistants the same quest maker: read and find the game's quests, start a quest, change its story, make it and work through its checklist."
reviewed: 2026-11-04
---

# EDGEquest for <span class="y">assistants</span>

EDGEquest has an **MCP server**, `@edgemodders/edgequest-mcp`. It gives AI assistants such as Claude Code the same quest maker you have in VS Code. You can ask, for example, for a side quest where V finds something odd at the apartment door. The assistant writes the story file, makes the quest and works through its checklist, and you can watch the Storyboard change as it goes.

> **Not on npm yet.** Version 0.1.0 was published on 4 November 2026 and is waiting for its release to be approved on npm. Until it is, the command below can't download it. [EDGEchat](../edgechat/), the EDGE plugin for Claude Code, plans to list it once it's there.

## What you need

- Windows, with Cyberpunk 2077 2.5.
- [REDbridge](../redbridge/) 0.11.0 or later. REDcode's **Install REDbridge** fetches it.
- The .NET 10 runtime, and Node.js 20 or newer.
- ArchiveXL in the game, to play the quests it makes.

## Set it up

With Claude Code:

```
claude mcp add edgequest -- npx -y @edgemodders/edgequest-mcp
```

Other MCP clients use the same command: `npx -y @edgemodders/edgequest-mcp`.

On a PC where REDcode or EDGEquest is set up, the server needs nothing else: it finds the game folder, REDbridge and .NET from their settings. Otherwise, give them on the command line or in the environment:

| What | Command line | Environment |
|---|---|---|
| The game folder | `--game <path>` | `EDGEQUEST_GAME_PATH` |
| REDbridge.exe, or its folder | `--bridge <path>` | `REDBRIDGE_EXE` |
| A per-user .NET runtime | `--dotnet-root <path>` | `DOTNET_ROOT` |
| The quest index's folder | `--cache <path>` | `EDGEQUEST_CACHE` |

## Its tools

| Tool | What it does |
|---|---|
| `quest_index` | Builds the quest index from your game (about a minute and a half, once), and says when the game has changed |
| `quest_find` | Finds quests and phases by title, file name, fact, journal entry, scene, person or place |
| `quest_describe` | A quest, phase or story file in plain words, step by step |
| `quest_scene` | A scene in plain words: who is in it, the lines, the choices and where they lead |
| `quest_check` | Checks a quest mod's files, as [Check Quest Mod](checking.html#check-quest-mod) does |
| `quest_new` | Starts a quest in a WolvenKit project, from the template or from a story the assistant wrote |
| `quest_edit` | Changes a story file in story words: beats, where a choice goes, an option's kind, steps, lines, sounds and music |
| `quest_make` | Makes the quest's game files from its story file, and checks them |
| `quest_checklist` | What's left to do in a quest or a project |
| `quest_voice` | A story's lines with their voice prompts and whether each has a take, ready for EDGEwave |

Each writing tool answers with the quest's beats, its problems and what's left on its checklist. A bad edit is refused, and nothing is written.

The flow of an assistant starting a quest, editing it, preparing its voices and making it worked as written in EDGEquest's test on 24 October 2026.

When the quest is made, pack and install it with REDcode or [EDGEdeck](../edgedeck/), as in [Play it](writing.html#play-it).

For connecting Claude Code to the other EDGE tools, see [Connect Claude Code](../connect-claude-code.html).
