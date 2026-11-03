---
title: EDGEchat
nav_title: Overview
section: EDGEchat
order: 0
description: "EDGEchat, the EDGE plugin for Claude Code: a modding assistant at your desk that reaches the running game, the game's files and your mods. What it is, what it's for, and where to start."
reviewed: 2026-11-03
---

# EDGE<span class="y">chat</span>

EDGEchat is the EDGE plugin for [Claude Code](https://code.claude.com/docs/en/overview), Anthropic's coding assistant. One install turns Claude Code into a Cyberpunk 2077 modding assistant: it can see the running game, read the game's own files, manage your mods and recolor clothes, and it knows how mods are made. You describe a mod in plain words; Claude builds it, tests it in the game with you, and asks before it changes anything.

{% include shot.html caption="EDGEchat in Claude Code" shows="Claude Code's panel in VS Code after /edge:setup, with its table of the four connections, rednode, redcode, edgedeck and edgemat, all connected." %}

## What it's for

Making a mod usually means learning several programs and file formats first. With EDGEchat, Claude does that part. It uses the EDGE tools the same way you would, and tells you what it did and what to look at in the game.

| You want to | Say, or type |
|---|---|
| Make a mod without writing code | `/edge:new-mod`, then describe it: "I want to see V's money in a corner of the screen" |
| Change how a jacket looks | "Recolor the jacket of Items.Cop_01_Set_Jacket to bright red" |
| See a change in seconds, without restarting the game | "Pack it and swap it into the running game" |
| Find out why a mod doesn't work | `/edge:check-mod` |
| Ask how an EDGE tool works | "How does EDGEdeck's Run game button work?" Claude answers from this wiki, which the plugin carries |

## Why you might want it

| If you... | EDGEchat gives you |
|---|---|
| Have never made a mod | A step-by-step path, from installing to your own mod in the game, with no code to write: start at [Install and connect](install.html) |
| Want an assistant at your desk, not only in the game | Claude Code beside your editor, with the whole EDGE toolset. [REDagent](../redagent/) is the assistant inside the game |
| Find setting up four connections fiddly | One install sets up REDnode, REDcode, EDGEdeck and EDGEmat for Claude, with one settings form. `/edge:setup` checks them all |
| Worry about an AI breaking your game | Everything that changes the game, its folder or your save asks you first, every time, in every mode. See [Safety](safety.html) |
| Make mods already | Modding knowledge Claude loads by itself: REDnode packages, WolvenKit projects, the game's archives and file types, and the EDGE tools |

## What it adds to Claude Code

| Part | What it does | You use it by |
|---|---|---|
| **Four connections** (MCP servers) | `rednode` reaches the running game through [REDnode](../rednode/). `redcode` reads the game's files through [REDbridge](../redbridge/). `edgedeck` manages your mods with [EDGEdeck](../edgedeck/). `edgemat` finds and recolors garments' materials with [EDGEmat](../edgemat/) | Asking in plain words. Claude picks the tools |
| **Modding knowledge** (skills) | How REDnode packages, WolvenKit projects, the game's archives and the EDGE tools work | Nothing: Claude loads it when a task needs it |
| **Four commands** | `/edge:setup`, `/edge:new-mod`, `/edge:check-mod`, `/edge:init-project` | Typing them in Claude Code |

EDGEchat isn't an agent of its own, and nothing of it runs in the game. It is Claude Code, with the EDGE tools plugged in.

## How it fits into EDGE

EDGE has two assistants. They use the same tools, in different places.

| | [REDagent](../redagent/) | EDGEchat |
|---|---|---|
| Where you talk to it | A chat window over the game | Claude Code: a panel in VS Code or [EDGEkit](../edgekit/), or a terminal |
| What it makes | REDnode mods, while you play | Any kind EDGE supports: REDnode packages, tweaks, clothing and other WolvenKit projects |
| What it reaches | The running game | The running game, the game's files, your mod library and materials |
| What you pay with | Your own Anthropic API key | Your Claude account (a plan that includes Claude Code) |

The other toolkits do the work EDGEchat asks of them:

| Toolkit | What it gives EDGEchat |
|---|---|
| [REDnode](../rednode/) | The running game: reads, calls, screenshots, logs, and [REDswap](../rednode/redswap.html), which swaps a changed mod into the game while it runs |
| [REDbridge](../redbridge/) | The game's archives and files, for the `redcode` and `edgemat` connections |
| [EDGEdeck](../edgedeck/) | Your mod library, and deploys into the game folder that can be undone |
| [EDGEmat](../edgemat/) | Garments' materials, recolors, and its library, shared with the EDGEmat extension |
| [EDGEkit](../edgekit/) | Offers to install EDGEchat in one click (EDGEkit 1.140.2 or later) |

You can also connect each tool to Claude Code by hand, without the plugin: see [Connect Claude Code](../connect-claude-code.html).

## Status

EDGEchat **0.1.1** was released on 2 November 2026 (0.1.0, the first release, on 26 October). It installs from its marketplace on GitHub, and has a [Nexus Mods page](https://www.nexusmods.com/cyberpunk2077/mods/35680) for news and a zip of the plugin. It's a plugin for Claude Code, not a game mod, so a mod manager doesn't install it.

| Works with | |
|---|---|
| Game | 2.5. On 2.31, see [Troubleshooting](troubleshooting.html#game-231) |
| [REDnode](../rednode/) | 0.41.0 or later (0.40.1 is the oldest that can sign in) |
| [REDbridge](../redbridge/) | 0.10.0 or later; 0.11.0 reads every file in 2.5 |
| Windows | 10 or 11. The connections need Windows |

Tested in the game by its developer, as EDGEchat's [tests](https://edgemodders.github.io/EDGEchat/testing.html) record:

| Tested | Result |
|---|---|
| A clean install from the steps on [Install and connect](install.html), and EDGEkit's one-click install | Passed |
| Signing in to REDnode from VS Code | Passed |
| Asking before every change, also in auto mode | Passed |
| `/edge:new-mod`: a first mod made and tested in the game | Passed |
| Recolor a jacket, deploy it, swap a new color into the running game, bring EDGEdeck back in step | Passed |
| `/edge:init-project` on a real project | Passed |
| `/edge:check-mod` | Found every planted problem in the plugin's evals |

## In this section

The pages follow EDGEchat's own guide: do them in order the first time. Each one ends with something you can see in the game.

| Page | |
|---|---|
| [Install and connect](install.html) | What you need, the three ways to install, the settings, letting Claude into the game, `/edge:setup`, a first question |
| [Your first mod, no code](first-mod.html) | `/edge:new-mod`: a line on screen showing V's money, made and changed by asking |
| [Recolor a jacket](recolor.html) | A clothing mod: a WolvenKit project made with EDGEmat, packed and deployed by EDGEdeck |
| [Change it while you play](live.html) | Swap a new color into the running game in seconds, then bring EDGEdeck back in step |
| [When a mod doesn't work](check-mod.html) | `/edge:check-mod`: what's wrong, and a fix for each |
| [Keep a project easy to work on](projects.html) | `/edge:init-project`: a `CLAUDE.md` so later sessions know your mod |
| [Safety](safety.html) | What asks you first, what doesn't, and how to take access back |
| [Settings, commands and updates](settings.html) | The five settings, the commands and skills, and getting new versions |
| [Troubleshooting](troubleshooting.html) | Something is missing, red or not changing |

EDGEchat's [guide](https://edgemodders.github.io/EDGEchat/guide.html), [README](https://github.com/Edgemodders/EDGEchat#readme) and [design](https://edgemodders.github.io/EDGEchat/design.html) on its own docs site are the reference this section draws on.

Not affiliated with Anthropic. Claude and Claude Code are trademarks of Anthropic.
