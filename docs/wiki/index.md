---
title: The EDGE platform
nav_title: The EDGE platform
section: Start here
order: 0
description: "An introduction to EDGE, the agent-based modding platform for Cyberpunk 2077, and the EDGEmodders wiki."
reviewed: 2026-10-27
---

# The EDGE <span class="y">platform</span>

**EDGE** is an open, agent-based modding platform for Cyberpunk 2077, built by the EDGEmodders community. It brings creating, testing, deploying and running mods into one platform. An AI agent works through it with you, using the same tools you do.

Modding Cyberpunk used to mean learning file formats, scripting languages and a toolchain of separate programs before you could make anything. EDGE's goal is that **anyone can mod**. Describe what you want in plain words, see every change before it happens, and try it in the running game straight away.

## The toolkits

EDGE is a family of open-source toolkits. Five of them cover the whole life of a mod. Each works on its own; together they take a mod from idea to running game.

| Stage | Toolkit | What it does |
|---|---|---|
| Ask | [REDagent](redagent/) | A modding agent inside the game, powered by Claude. Writes, runs, checks and fixes mods with you while you play |
| Create | [REDcode](redcode/) | A modding IDE built on VS Code. Browse the game's archives and edit game files as JSON |
| Build | [REDbridge](redbridge/) | WolvenKit's engine as a local service, for the editor and for AI agents |
| Deploy | [EDGEdeck](edgedeck/) | A mod manager inside VS Code. Add, turn on or off, deploy, remove, and undo |
| Run | [REDnode](rednode/) | The runtime. Node mods and HTML overlay apps in the running game, with hot reload |

More toolkits build on those five for particular jobs:

| Job | Toolkit | What it does |
|---|---|---|
| Build in the world | [EDGEbuilder](edgebuilder/) | A world builder inside the game. Find the game's own props, drop them where you look, and position them |
| Sound | [EDGEwave](edgewave/) | A sound studio beside REDcode. Open a game sound, cut, fade, mix and shape it, and put it into the game through your mod. Preview, 0.1.0 on the Marketplace |
| Materials | [EDGEmat](edgemat/) | A material editor: find a garment by name, see its layers in plain words and in 3D, recolour them, or make a new material from your words; or ask an agent. Preview, 0.3.1 on the Marketplace |
| One install | [EDGEkit](edgekit/) | The EDGEmodders editor: an app for Windows with the EDGE tools built in (preview, 1.140.1), or an extension pack that installs them in VS Code in one go |

## Platform benefits

Together, the toolkits' benefits add up to these. Each toolkit's page lists its own.

| Benefit | What it means | From |
|---|---|---|
| **Anyone can mod** | Describe a mod in plain words; an agent writes, runs and fixes it | [REDagent](redagent/) |
| **Agent-ready everywhere** | REDnode, REDcode, EDGEdeck and EDGEmat offer their tools to AI agents through MCP: REDagent in the game, Claude Code on your desktop. REDnode mods can offer tools of their own too | [REDnode](rednode/), [REDcode](redcode/), [EDGEdeck](edgedeck/), [EDGEmat](edgemat/) |
| **You stay in control** | Every file change is shown before it happens, and agent changes and deploys can be undone | [REDagent](redagent/), [EDGEdeck](edgedeck/) |
| **Live in the game** | Mods hot-reload into the running game, and changed archives swap into it; overlay apps draw HTML windows and HUD widgets over it | [REDnode](rednode/) |
| **Crash isolation** | Mods and overlay apps run outside the game process, so a crash doesn't take the game down | [REDnode](rednode/) |
| **Everything is text** | Game files as JSON, tweaks as YAML, mods in JavaScript and TypeScript, with a typed game API | [REDcode](redcode/), [REDnode](rednode/) |
| **WolvenKit inside** | WolvenKit's engine does the file work; WolvenKit projects open and pack as they are | [REDbridge](redbridge/), [REDcode](redcode/) |
| **Simple mod management** | One list, four verbs, conflicts even inside archives, Nexus updates, Vortex import | [EDGEdeck](edgedeck/) |
| **Build where you see it** | Place the game's own objects in the running game with a gizmo and a free camera, instead of typing coordinates | [EDGEbuilder](edgebuilder/) |
| **One install** | The EDGEkit app comes with the EDGE tools built in and keeps them updated; in VS Code, one extension pack installs REDcode, EDGEdeck and the HUD theme | [EDGEkit](edgekit/) |
| **Built on the community, open source** | Works alongside RED4ext, CET, redscript, ArchiveXL and TweakXL. MIT, with GPL-3.0 where WolvenKit requires it | All toolkits |

> **Status:** EDGE is early and moving fast. REDnode (0.41.0) and REDagent (0.3.2) are released for **game version 2.5**; REDnode 0.37.0 and REDagent 0.3.1 stay available for 2.31. EDGEbuilder places objects in the running game (a test build). REDcode, EDGEdeck, EDGEmat and EDGEwave are on the VS Code Marketplace and Open VSX as previews, and the EDGEkit app is a preview for Windows. REDnode, REDagent, REDbridge and EDGEbuilder install from release files on GitHub. The [platform page](/platform.html) shows where each feature stands.

## About this wiki

Each toolkit's docs site is its reference: every setting, the design, the API. This wiki sits on top of them, written for people. It covers how to start, how to do common things, and what to do when something goes wrong.

| Start with | If |
|---|---|
| [Getting started](getting-started.html) | You're new and want to know which toolkit to use for what |
| [FAQ](faq.html) | You have a quick question about cost, safety or compatibility |
| [Glossary](glossary.html) | A word like CR2W, TweakDB or MCP stopped you |
| [Connect Claude Code](connect-claude-code.html) | You want an AI agent on your PC to use the EDGE tools |

The wiki is curated: pages are checked against each toolkit's docs, and each one shows when it was last reviewed. To suggest a page or report a mistake, see [Contribute](contribute.html), or come and talk on [Discord]({{ site.discord }}).
