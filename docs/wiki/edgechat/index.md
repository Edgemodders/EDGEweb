---
title: EDGEchat
nav_title: Overview
section: EDGEchat
order: 0
description: "EDGEchat, the EDGE plugin for Claude Code: a modding assistant at your desk that reaches the running game, the game's files and your mods. What it is, what it's for, and where to start."
reviewed: 2026-11-25
---

# EDGE<span class="y">chat</span>

EDGEchat makes mods with you by chat. It is the EDGE plugin (an add-on) for [Claude Code](https://code.claude.com/docs/en/overview), Anthropic's AI assistant. You describe a mod in plain words. Claude builds it, tests it in the game with you, and asks before it changes anything in your game.

**Claude Code** is an assistant you chat with in a panel in VS Code or [EDGEkit](../edgekit/), or in a terminal. On its own it knows nothing about Cyberpunk 2077. EDGEchat gives it the modding knowledge, and connects it to the running game, the game's files and your mods.

**What it costs.** EDGEchat is free. Claude Code needs a paid Claude plan that includes it, which you buy from Anthropic.

{% include shot.html caption="EDGEchat in Claude Code" shows="Claude Code's panel in VS Code after /edge:setup, with its table of the seven connections, rednode, redcode, edgedeck, edgemat, edgefab, edgehack and edgequest, all connected." %}

| On this page | |
|---|---|
| [What it's for](#what-its-for) | What you can ask for |
| [Why you might want it](#why-you-might-want-it) | Who it suits |
| [What it adds to Claude Code](#what-it-adds-to-claude-code) | Connections, knowledge, commands |
| [What it doesn't do yet](#what-it-doesnt-do-yet) | Sounds and game scripts |
| [How it fits into EDGE](#how-it-fits-into-edge) | EDGEchat and REDagent, and the tools behind them |
| [Status](#status) | The version, what it works with, what was tested |
| [In this section](#in-this-section) | The pages, in the order to read them |

## What it's for

Making a mod usually means learning several programs and file formats first. With EDGEchat, Claude does that part. It uses the EDGE tools the way you would, tells you what it did, and tells you what to look at in the game.

| You want to | Say, or type |
|---|---|
| Make a mod without writing code | `/edge:new-mod`, then describe it: "I want to see V's money in a corner of the screen" |
| Change how a jacket looks | "Recolor the NCPD badge coat to bright red" |
| See a change in seconds, without restarting the game | "Pack it and swap it into the running game" |
| Find out why a mod doesn't work | `/edge:check-mod` |
| Make a quickhack | "Make a new quickhack from Overheat called Test Burn". It goes on [EDGEhack](../edgehack/)'s Desk, and Claude Code asks you first |
| Understand a quest | "Describe the quest The Rescue in plain words", through [EDGEquest](../edgequest/) |
| Put a prop of your own in a project | "Add the vending machine from my EDGEfab Desk to my project", through [EDGEfab](../edgefab/) |
| Carry on a chat you started with REDagent in the game | Press **VS Code** in [REDagent](../redagent/using.html#continue-in-vs-code), then `/edge:continue` in Claude Code |
| Ask how an EDGE tool works | "How does EDGEdeck's Run game button work?" Claude answers from a copy of this wiki that comes with the plugin |

## Why you might want it

| If you... | EDGEchat gives you |
|---|---|
| Have never made a mod | A step-by-step path, from installing to your own mod in the game, with no code to write. Start at [Install and connect](install.html) |
| Want an assistant at your desk, not only in the game | Claude Code beside your editor, with the EDGE tools. [REDagent](../redagent/) is the assistant inside the game |
| Find setting up seven connections fiddly | One install sets up REDnode, REDcode, EDGEdeck, EDGEmat, EDGEfab, EDGEhack and EDGEquest for Claude, with one settings form. `/edge:setup` checks them all |
| Worry about an AI breaking your game | The EDGE tools ask you before every action that changes the game, its folder or your save, whichever permission setting Claude Code is in. See [Safety](safety.html) |
| Make mods already | Modding knowledge Claude loads by itself: REDnode packages, WolvenKit projects, the game's archives and file types, and the EDGE tools |

## What it adds to Claude Code

| Part | What it does | You use it by |
|---|---|---|
| **Seven connections** | Each one lets Claude use one EDGE tool. `rednode` reaches the running game through [REDnode](../rednode/). `redcode` reads the game's files through [REDbridge](../redbridge/). `edgedeck` manages your mods with [EDGEdeck](../edgedeck/). `edgemat` finds and recolors the materials of clothes with [EDGEmat](../edgemat/). `edgefab` makes props with [EDGEfab](../edgefab/), `edgehack` quickhacks with [EDGEhack](../edgehack/), and `edgequest` reads and makes quests with [EDGEquest](../edgequest/) | Asking in plain words. Claude picks the tools |
| **Modding knowledge** | How REDnode packages, WolvenKit projects, the game's archives and the EDGE tools work | Nothing: Claude loads it when a task needs it |
| **Five commands** | `/edge:setup`, `/edge:new-mod`, `/edge:check-mod`, `/edge:init-project`, `/edge:continue` | Typing them in Claude Code |

Two words you will meet in Claude Code itself: it calls a connection an **MCP server** (see the [glossary](../glossary.html)), and a piece of loadable knowledge a **skill**.

EDGEchat is not a separate AI, and it installs nothing into the game. It is Claude Code, with the EDGE tools plugged in.

## What it doesn't do yet

EDGEchat 0.2.1 connects seven tools. Quests, quickhacks and props are in it now, through EDGEquest, EDGEhack and EDGEfab. Some toolkits are not part of it yet.

| Job | With EDGEchat 0.2.1 |
|---|---|
| Sounds and voices | [EDGEwave](../edgewave/), the sound studio, is not included. Claude can still replace a game sound in a WolvenKit project through the `redcode` connection; that is not among EDGEchat's in-game tests |
| What the game's people do over time, on a timeline | [EDGEdir](../edgedir/), the director's tool, is not included |
| Scripts that change how the game behaves (redscript, RED4ext plugins) | Not covered. Claude says so when you ask for one |

The copy of the wiki in the plugin dates from the plugin's release, 25 November 2026 for 0.2.1. Pages added to this site since then are only here.

## How it fits into EDGE

EDGE has two assistants. They use the same tools, in different places.

| | [REDagent](../redagent/) | EDGEchat |
|---|---|---|
| Where you talk to it | A chat window over the game | Claude Code: a panel in VS Code or [EDGEkit](../edgekit/), or a terminal |
| What it makes | REDnode mods, while you play | REDnode packages, tweaks, clothing recolors and other WolvenKit projects |
| What it reaches | The running game | The running game, the game's files, your mod library and materials |
| What you pay with | Your own Anthropic API key, billed by use | Your Claude plan, if it includes Claude Code |
| Moving a chat between them | **VS Code** in REDagent's chat window hands it over | `/edge:continue` picks it up, with its mods and files |

The other toolkits do the work EDGEchat asks of them:

| Toolkit | What it gives EDGEchat |
|---|---|
| [REDnode](../rednode/) | The running game: reading it, changing it, screenshots and logs. Also [REDswap](../rednode/redswap.html), which swaps a changed mod into the game while it runs |
| [REDbridge](../redbridge/) | The game's archives and files, for the `redcode` and `edgemat` connections |
| [EDGEdeck](../edgedeck/) | Your mod library, and deploys into the game folder that can be undone |
| [EDGEmat](../edgemat/) | The materials of clothes, recolors, and its list of the game's materials, shared with the EDGEmat extension |
| [EDGEfab](../edgefab/) | Props from a 3D model or from words, made ready for the game, from its Desk into your project |
| [EDGEhack](../edgehack/) | The game's quickhacks in plain words, new ones on its Desk, and trying them live in the game |
| [EDGEquest](../edgequest/) | The game's quests in plain words, and new quests from a story file |
| [EDGEkit](../edgekit/) | Has Claude Code built in, and offers to install EDGEchat in one click |

You can also connect each tool to Claude Code by hand, without the plugin: see [Connect Claude Code](../connect-claude-code.html). Don't do both, or Claude sees every tool twice.

## Status

EDGEchat **0.2.1** is the current release (25 November 2026). You install it from inside Claude Code, which downloads it from EDGEchat's GitHub repository. Claude Code calls such a source a marketplace; it is not the VS Code Marketplace. EDGEchat is a plugin for Claude Code, not a game mod, so a mod manager doesn't install it. Its [Nexus Mods page](https://www.nexusmods.com/cyberpunk2077/mods/35680) has news and a zip of the plugin.

| Works with | |
|---|---|
| Game | 2.5. On 2.31, see [Troubleshooting](troubleshooting.html#game-231) |
| [REDnode](../rednode/) | 0.41.0 or later. [Recolor a jacket](recolor.html) uses REDnode's Console, which needs 0.49.5. Trying a quickhack live needs 0.62.0 |
| [REDbridge](../redbridge/) | 0.12.0 or later for game 2.5: it reads every file in 2.5, and finds the items an outfit's mesh belongs to. EDGEfab reads your keys from REDcode's **Keys** through 0.18.0 or later |
| [REDagent](../redagent/) | 0.4.6 or later, for `/edge:continue` |
| Windows | 10 or 11. The connections need Windows |

Tested by its developer, as EDGEchat's [tests](https://edgemodders.github.io/EDGEchat/testing.html) record:

| Tested | Result |
|---|---|
| A clean install from the steps on [Install and connect](install.html), and EDGEkit's one-click install | Passed |
| Signing in to REDnode from VS Code | Passed |
| Asking before every change by an EDGE tool, with Claude Code in auto mode | Passed |
| `/edge:new-mod`: a first mod made and tested in the game | Passed |
| Recolor a jacket, deploy it, swap a new color into the running game, bring EDGEdeck back in step | Passed |
| `/edge:init-project` on a real project | Passed |
| `/edge:check-mod` | Found every problem deliberately put into a test mod, in an automated test |
| All seven connections starting with every setting empty, and answering a first request | Passed (0.2.1) |
| In a session: reading quickhacks, a quest and EDGEfab's Desk without a prompt; Claude Code asking before EDGEhack writes a quickhack, in auto mode, and nothing written after **Deny** | Passed (0.2.1) |
| A prop from EDGEfab's Desk added to a project, with REDbridge found through EDGEchat's own setting | Passed (0.2.1) |
| `/edge:continue`: a REDagent chat picked up, the mod checked and changed in the game | Passed (0.2.1, with REDagent 0.4.6) |

## In this section

**New here?** Do the first seven pages in order: each one builds on the one before, and ends with something you can see in the game. The last three are for looking things up.

| Page | |
|---|---|
| [Install and connect](install.html) | What you need, the three ways to install, the settings, letting Claude into the game, `/edge:setup`, a first question |
| [Your first mod, no code](first-mod.html) | `/edge:new-mod`: a line on screen showing V's money, made and changed by asking |
| [Recolor a jacket](recolor.html) | A clothing mod: Claude changes the jacket's color with EDGEmat, and EDGEdeck puts it in the game |
| [Change it while you play](live.html) | Swap a new color into the running game in seconds, then bring EDGEdeck back in step |
| [When a mod doesn't work](check-mod.html) | `/edge:check-mod`: what's wrong, and a fix for each |
| [Keep a project easy to work on](projects.html) | `/edge:init-project`: a `CLAUDE.md` file, so later sessions know your mod |
| [Safety](safety.html) | What asks you first, what doesn't, and how to take access back |
| [Settings, commands and updates](settings.html) | The five settings, the commands and skills, and getting new versions |
| [Troubleshooting](troubleshooting.html) | Something is missing, red or not changing |

EDGEchat's [guide](https://edgemodders.github.io/EDGEchat/guide.html), [README](https://github.com/Edgemodders/EDGEchat#readme) and [design](https://edgemodders.github.io/EDGEchat/design.html) on its own docs site are the reference this section draws on.

Not affiliated with Anthropic or CD PROJEKT RED. Claude and Claude Code are trademarks of Anthropic.
