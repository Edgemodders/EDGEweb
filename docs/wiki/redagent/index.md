---
title: REDagent
nav_title: Overview
section: REDagent
order: 0
description: "REDagent, the modding agent inside Cyberpunk 2077, powered by Claude. What it does, what it can make, what it needs, and where to start."
reviewed: 2026-11-13
---

# RED<span class="y">agent</span>

REDagent is an AI assistant inside Cyberpunk 2077. You type what you want into a chat window drawn over the game, and it writes the mod, runs it, checks that it works and fixes it, while you play. It is powered by Claude, the AI made by Anthropic.

{% include shot.html caption="REDagent in the game" src="/assets/shots/redagent/index-redagent-in-the-game.png" alt="Gameplay with the REDagent window on the right: the question How many eddies does V have?, the game calls REDagent made, one of them allowed, the answer with its cost, and the footer with Opus 5.5 and Sonnet 5.5, the chat total, Chats, New and Key." shows="The REDagent chat window on the right of the game screen, with a question, an answer with its cost in dim text, and the footer with the model choice, the chat total, Chats, New and Key." %}

**New here?** Read this page, then [Install and set up](install.html), then make [your first mod](first-mod.html). Allow about half an hour, most of it downloads.

## What it can make

The mods REDagent writes are **REDnode mods**: small programs that run beside the game through [REDnode](../rednode/), EDGE's scripting runtime. They can read what happens in the game, change it, and draw their own windows and HUD pieces over it. They can't add new clothes, cars or quests: those are made of game files, and other EDGE tools make them.

| You want | Can REDagent do it? | Example |
|---|---|---|
| Something on screen that reacts to the game | Yes | "Warn me when V's health drops below 30%." "Show a clock in the corner of the HUD." |
| A window with game information | Yes | "Make a window that shows V's money and level." |
| Answers about your game or your mods | Yes | "How many eddies does V have?" "What's in my mod log?" "Why does this mod crash?" |
| A change to the game right now | Yes, and it asks first | "Give V 500 eddies." |
| A recolored garment | Yes, with [EDGEmat](../edgemat/)'s tools, in a mod project you already have | "Find this jacket's materials and make the leather red." |
| New clothes, weapons, sounds or quests | No. Use [EDGEchat](../edgechat/), [REDcode](../redcode/), [EDGEmat](../edgemat/), [EDGEwave](../edgewave/) or [EDGEquest](../edgequest/) | |

## Why you'd want it

- **Ask in plain words.** You describe the mod. REDagent writes the code.
- **It checks its own work.** After writing a mod, REDagent reads the mod's log, looks at its window and asks the running game, then fixes what is wrong.
- **You approve every change.** Before REDagent creates or changes a file, it shows you the change and waits for **Allow** or **Deny**.
- **Everything can be undone.** Every file it changes is backed up first and listed with an **Undo** button, even after you restart the game.
- **No restart.** REDnode starts a new or changed mod about two seconds after REDagent writes it.
- **Chats are kept.** Close the game and carry on later: your last 30 chats are saved, with their changes.
- **You see what it costs.** Each answer shows its price under it. See [Costs, your key and your data](costs.html).
- **It works with your other mods.** A mod can offer REDagent extra tools, and a mod you allow can ask REDagent questions for you. See [Mods that ask REDagent](other-mods.html).

## What it can't do

- **It can't play for you.** It can't press keys or move the mouse in the game.
- **It sees the game only through pictures.** It reads REDnode's own windows directly. To see the game itself it takes a picture of your screen, and only when it needs one. Pictures on an HDR screen are untested.
- **It can't install software.** It can't run programs or download code libraries onto your PC.
- **It writes files in one place only.** Every file REDagent creates or changes is inside REDnode's apps folder, where REDnode keeps its mods (and in a [development folder](../rednode/settings.html#development-folders), if you set one). It can't touch the game's own files, and it can't change itself.

One exception to know about: tools that other EDGE software gives it can change other things. EDGEmat's tools, for example, change a material in your own mod project. Each of those changes asks you first, the same way.

## What you need

| You need | Why |
|---|---|
| Cyberpunk 2077 on PC, game version 2.5 | REDagent 0.4.1 is for game 2.5. On a game kept at 2.31, use REDagent 0.3.1 with REDnode 0.37.0 |
| [REDnode](../rednode/install.html) 0.50.2 or later | REDagent runs inside REDnode, which draws its window and connects it to the game |
| Your own Anthropic API key, with some credit | The key lets REDagent use Claude. You pay Anthropic for what you use. [Get a key](install.html#1-get-an-anthropic-api-key) |
| About 300 MB of disk, and a 140 MB download at first start | Mostly Anthropic's Claude Agent SDK, the software REDagent runs on. REDagent downloads it once |
| About 120 MB of memory while the game runs | REDagent runs in its own process, outside the game |

> **A Claude subscription is not an API key.** A Claude.ai plan can't be used with REDagent. To make mods with a Claude plan, at your desk, use [EDGEchat](../edgechat/).

## Status

**Released.** The latest is REDagent 0.4.1 (2026-11-01), for game 2.5, on [Nexus Mods](https://www.nexusmods.com/cyberpunk2077/mods/35670) and [GitHub](https://github.com/Edgemodders/REDagent/releases). Everything on these pages passed its test in the game, except pictures on an HDR screen.

| | |
|---|---|
| **Coming next** | Making and changing quickhacks with [EDGEhack](../edgehack/)'s tools. Built, and passed in the game on 2026-11-11; not released yet |
| **Planned, not started** | REDagent inside REDcode, with changes reviewed in VS Code |

## In this section

| Page | |
|---|---|
| [Install and set up](install.html) | Getting an API key, installing, the first start, updating and removing |
| [Your first mod](first-mod.html) | From an empty chat to a working mod, step by step |
| [Using REDagent](using.html) | The window, what to ask, changes and Undo, saved chats, every control |
| [Costs, your key and your data](costs.html) | What it costs, how to keep costs down, and what is sent where |
| [Mods that ask REDagent](other-mods.html) | Letting other mods ask questions, daily limits and the Mods view |
| [Troubleshooting](troubleshooting.html) | What to do when something goes wrong |

## Reference

- [REDagent guide](https://edgemodders.github.io/REDagent/guide.html): the project's own short guide
- [Changelog](https://edgemodders.github.io/REDagent/changelog.html): what changed in each release
- [Design and test results](https://edgemodders.github.io/REDagent/design.html), for developers
- [Source and issues](https://github.com/Edgemodders/REDagent)
