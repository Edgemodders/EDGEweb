---
title: The EDGE platform
nav_title: The EDGE platform
section: Start here
order: 0
description: "An introduction to EDGE, the modding platform for Cyberpunk 2077 where you and an AI assistant build mods together, and the way into the EDGEmodders wiki."
reviewed: 2026-11-13
---

# The EDGE <span class="y">platform</span>

**EDGE** is a set of free, open-source tools for making and using Cyberpunk 2077 mods, built by the EDGEmodders community. An AI assistant can work through the tools with you, using the same buttons you do.

Modding Cyberpunk used to mean learning file formats, scripting languages and a chain of separate programs before you could make anything. EDGE's goal is that **anyone can mod**. Describe what you want in plain words, see every change before it happens, and try it in the running game straight away.

> **New here?** [Your first hour](first-hour.html) is one route from nothing installed to a first mod in your game. [Getting started](getting-started.html) says which tool does what, and the [FAQ](faq.html) covers cost, safety and saves.

## The toolkits

EDGE is a family of toolkits. Five of them cover the whole life of a mod, and they build on each other: each toolkit's Overview says what it needs.

| Stage | Toolkit | What it does | Latest release |
|---|---|---|---|
| Ask | [REDagent](redagent/) | An AI assistant inside the game, powered by Claude. It writes, runs, checks and fixes mods with you while you play | 0.4.1 |
| Create | [REDcode](redcode/) | An editor for the game's files, built on VS Code. Browse the game's files, change them and pack your mod | 0.10.9, a preview |
| Build | [REDbridge](redbridge/) | The helper that reads and writes the game's files for the other tools, with WolvenKit's own code. The tools download it for you | 0.12.1 |
| Deploy | [EDGEdeck](edgedeck/) | A mod manager. Add mods, turn them on or off, deploy them to the game, and undo | 0.31.0, a preview |
| Run | [REDnode](rednode/) | The part that runs in the game. Mods load and reload while you play, and draw their windows over the game | 0.62.4 |

More toolkits build on those five for particular jobs:

| Job | Toolkit | What it does | Latest release |
|---|---|---|---|
| Ask at your desk | [EDGEchat](edgechat/) | The EDGE plugin for Claude Code, Anthropic's AI assistant. One install connects Claude to the running game, the game's files, your mods and their materials | 0.1.1 |
| One install | [EDGEkit](edgekit/) | The EDGEmodders editor: an app for Windows with the EDGE editor tools built in. Or an extension pack that installs them in VS Code | App 1.140.6 and pack 0.6.0, both previews |
| Materials | [EDGEmat](edgemat/) | A material editor. Recolor clothes layer by layer, or make a new material by describing it | 0.3.2, a preview |
| Quickhacks | [EDGEhack](edgehack/) | A quickhack editor. Read any quickhack in plain words, change it, or make new ones and try them in the running game | 0.1.2, a preview |
| Sound | [EDGEwave](edgewave/) | A sound studio. Find a game sound, cut, fade and mix it, and put your version into the game | 0.2.0, a preview |
| Quests | [EDGEquest](edgequest/) | A quest maker. Read the game's quests in plain words, and write a small quest of your own as a short story | 0.1.1, a preview |
| Build in the world | [EDGEbuilder](edgebuilder/) | A world builder inside the game. Place the game's own objects and people, arrange them, and bake a scene into a mod | 0.10.9, a public preview |

EDGE is made for **game version 2.5** on Windows. A **preview** is released and usable, but young. Each toolkit's Overview has a **Status** section: what was tested in the game, what was not, and what comes next. [Getting started](getting-started.html#how-each-tool-installs-today) says where each tool installs from, and the [FAQ](faq.html#which-game-versions-and-stores-does-it-work-with) covers a game kept on 2.31.

REDsave, a save game manager, is built into EDGEkit too. It has no section here yet: see [REDsave's docs](https://edgemodders.github.io/REDsave/).

## Platform benefits

Together, the toolkits add up to these. Each toolkit's Overview says why you might want it.

| Benefit | What it means | From |
|---|---|---|
| **Anyone can mod** | Describe a mod in plain words. An assistant writes it, runs it and fixes it: in the game, or at your desk | [REDagent](redagent/), [EDGEchat](edgechat/) |
| **You stay in control** | REDagent shows every file change before it happens, and its changes and EDGEdeck's deploys can be undone. With Claude Code, the EDGE tools ask before anything changes the running game, your save or the game folder | [REDagent](redagent/), [EDGEchat](edgechat/safety.html), [EDGEdeck](edgedeck/) |
| **Assistants can use every tool** | Seven toolkits offer their tools to AI assistants through [MCP](glossary.html#mcp-server): REDnode, REDcode, EDGEdeck, EDGEmat, EDGEquest, EDGEhack and EDGEwave. EDGEchat connects the first four in one install; the others [connect by hand](connect-claude-code.html) | [EDGEchat](edgechat/), [Connect Claude Code](connect-claude-code.html) |
| **Live in the game** | Change a mod and see it in the running game, with no restart. Mods can draw their own windows over the game or add panels to the game's HUD | [REDnode](rednode/) |
| **A crash stays small** | Mods and their windows run outside the game, so a crash in one doesn't take the game down | [REDnode](rednode/) |
| **Everything is text** | Game files, game values and scripts open as plain text, so you and an assistant can read any of it | [REDcode](redcode/), [REDnode](rednode/) |
| **WolvenKit inside** | WolvenKit's own code does the file work, and WolvenKit projects open and pack as they are | [REDbridge](redbridge/), [REDcode](redcode/) |
| **Simple mod management** | One list and four things to learn: add, turn on or off, deploy, remove. Conflicts are shown even inside mod archives. The frameworks most mods need come in one click, and Vortex mods can be imported | [EDGEdeck](edgedeck/) |
| **Materials and sound in plain controls** | Recolor a garment layer by layer, or make a new material from your words. Cut, fade and mix a game sound and hear your version in the game | [EDGEmat](edgemat/), [EDGEwave](edgewave/) |
| **Quickhacks in plain words** | Every tier's cost, upload time, damage and effects, read from your own game. Change them, or make new quickhacks, and try them in the running game | [EDGEhack](edgehack/) |
| **Quests in plain words** | Read any of the game's quests as steps and lines, and write a small quest of your own as a story with places, choices and music | [EDGEquest](edgequest/) |
| **Build where you see it** | Place the game's own objects and people in the running game by dragging them, with a free camera, instead of typing coordinates. Bake a scene into a mod | [EDGEbuilder](edgebuilder/) |
| **One install** | The EDGEkit app comes with the editor tools built in and keeps them updated. The tools that run in the game install separately | [EDGEkit](edgekit/) |
| **Built on the community, open source** | Works alongside RED4ext, CET, redscript, ArchiveXL and TweakXL. MIT, with GPL-3.0 where WolvenKit requires it | All toolkits |

The [platform page](../platform.html) shows the same benefits with where each one stands today.

## About this wiki

Each toolkit's docs site is its reference: every setting, the design, the API. This wiki sits on top of them, written for people. It covers how to start, how to do common things, and what to do when something goes wrong.

| Start with | If |
|---|---|
| [Your first hour](first-hour.html) | You want to be led from nothing installed to a first mod |
| [Getting started](getting-started.html) | You want to know which toolkit to use for what, and what you need |
| [FAQ](faq.html) | You have a question about cost, safety, saves or compatibility |
| [Glossary](glossary.html) | A word like archive, framework or MCP stopped you |
| [Connect Claude Code](connect-claude-code.html) | You want Claude Code on your PC to use the EDGE tools. [EDGEchat](edgechat/) does most of it in one install |
| [The EDGE Library](library.html) | You want to keep scenes and quickhacks for good, outside any one mod, and use them in several |

The wiki is curated: pages are checked against each toolkit's docs, and each one shows when it was last reviewed. To suggest a page or report a mistake, see [Contribute](contribute.html), or come and talk on [Discord]({{ site.discord }}).
