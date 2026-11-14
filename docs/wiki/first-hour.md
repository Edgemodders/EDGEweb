---
title: Your first hour with EDGE
nav_title: Your first hour
section: Start here
order: 2
description: "One route from nothing to a first mod in Cyberpunk 2077 with the EDGE tools: what you need, the choice between your desk and the game, and each step with its time, cost and result."
reviewed: 2026-11-13
---

# Your first <span class="y">hour</span>

This page is a route, not a manual. It takes you from nothing installed to a first mod in your game, by sending you through pages that already exist, in order. Each step says how long it takes, what it costs and what you should have at the end.

You don't need to know how to code, and you don't need to have modded before.

## Before you start

| You need | Notes |
|---|---|
| A Windows PC with Cyberpunk 2077 | EDGE is for the single-player game on Windows |
| Game version 2.5 | The game's main menu shows the version. Still on 2.31? See [Which game versions](faq.html#which-game-versions-and-stores-does-it-work-with) |
| About an hour | Much of it is downloads and the game starting |
| Nothing to pay, unless you want the AI | Every EDGE tool is free. The two AI assistants use your own Anthropic account: see [What does EDGE cost?](faq.html#what-does-edge-cost) |

Everything on this route can be undone. Each step's page says how to remove what it installed, and the FAQ has [one list for all of it](faq.html#how-do-i-uninstall).

## Choose where you want to work

There is one choice to make. Both ways end with a mod in your game.

| | At your desk | Inside the game |
|---|---|---|
| **You install** | One app, [EDGEkit](edgekit/): an editor with the EDGE tools built in | Two mods, [REDnode](rednode/) and [REDagent](redagent/), into the game folder |
| **You work in** | A window on your desktop, beside the game | A chat window drawn over the game, while you play |
| **Your first result** | A mod from Nexus Mods working in your game. Or a mod you made by asking Claude | A mod you made by asking REDagent: a warning when V's health is low |
| **What the assistant can make** | Mods that run beside the game, changed game values, recolored clothes and other mods made of game files | Mods that run beside the game: they read it, change it and draw on the HUD. Not new clothes, sounds or quests |
| **What it costs** | Nothing to install and manage mods. Asking Claude needs a Claude plan that includes Claude Code | Your own Anthropic API key, paid per use. A small mod cost well under a dollar in REDagent's tests |
| **Pick it if** | You want to use mods made by others, or to make mods of many kinds | You want to stay in the game and ask for small mods as you play |

Can't decide? Start at your desk. Its first three steps cost nothing, and you can add the in-game tools later.

## Route A: at your desk

| Step | Page | Time | Cost | At the end you have |
|---|---|---|---|---|
| 1. Install the EDGEkit app | [Install the app](edgekit/install.html) | 10 minutes | Free | EDGEkit open on its Welcome page |
| 2. Set it up | [Your first session](edgekit/first-session.html#set-up-the-tools) | 10 minutes | Free | EDGEkit knows where the game is, REDbridge (the helper that reads the game's files) is downloaded, and EDGEdeck, the mod manager, is ready |
| 3. Then one of the two below | | | | |

**3a. Install your first mod.** No AI, and nothing to pay.

| Step | Page | Time | Cost | At the end you have |
|---|---|---|---|---|
| Get the frameworks, add a mod, deploy, play | [Your first mod with EDGEdeck](edgedeck/first-mod.html) | 20 minutes | Free. Downloading from Nexus Mods needs a free Nexus account | The six frameworks most mods need, and one mod from Nexus Mods, working in the game. You know the routine: add, turn on, deploy, play |

Already use Vortex? Read [Switch from Vortex](edgedeck/switch-from-vortex.html) before you deploy.

**3b. Make a mod by asking Claude.** Claude Code is Anthropic's AI assistant, and EDGEchat is the free add-on that makes it a modding assistant.

| Step | Page | Time | Cost | At the end you have |
|---|---|---|---|---|
| Install what Claude needs, and connect it | [Install and connect EDGEchat](edgechat/install.html) | 20 to 40 minutes | A Claude plan that includes Claude Code, paid to Anthropic | Claude Code with EDGEchat, REDnode in the game, and `/edge:setup` showing four connections working |
| Ask for a mod | [Your first mod, no code](edgechat/first-mod.html) | 15 minutes | Part of your Claude plan | A line on screen showing V's money, made and changed by asking |

Next on this route: [Recolor a jacket](edgechat/recolor.html) makes a clothing mod the same way.

## Route B: inside the game

| Step | Page | Time | Cost | At the end you have |
|---|---|---|---|---|
| 1. Get RED4ext and redscript | [What REDnode needs](rednode/install.html#what-you-need) | 5 minutes | Free | The two frameworks REDnode needs. Most modded games already have them |
| 2. Install REDnode | [Install and set up REDnode](rednode/install.html) | 15 minutes | Free | The REDNODE tab in the game, and F10 showing and hiding REDnode's windows |
| 3. Get an API key, install REDagent | [Install and set up REDagent](redagent/install.html) | 20 minutes | A few dollars of Anthropic credit is plenty to start | REDagent's chat window in the game, and an answer to a first question |
| 4. Ask for a mod | [Your first mod with REDagent](redagent/first-mod.html) | 10 minutes | Well under a dollar of your credit, in REDagent's own test | A warning on the HUD when V's health is low. You know how to approve, change and undo what REDagent writes |

Before step 3, read [what REDagent costs](redagent/costs.html): there is no spending limit except the credit you bought.

## What next

Pick what you came for. Each of these is a walkthrough that ends with something in your game.

| You want to | Go to | Needs |
|---|---|---|
| Recolor a piece of clothing | [Tutorial: recolor a jacket](edgemat/tutorial-recolor.html) | EDGEkit, or VS Code with EDGEmat |
| Change a quickhack, or make one | [Change a game quickhack](edgehack/edit-quickhack.html), then [Your first quickhack](edgehack/first-quickhack.html) | EDGEkit, or VS Code with EDGEhack |
| Change a game sound | [Tutorial: your first sound mod](edgewave/tutorial.html) | EDGEkit, or VS Code with EDGEwave |
| Write a small quest | [Your first quest](edgequest/first-quest.html) | EDGEkit, or VS Code with EDGEquest |
| Rename an item, by hand | [Your first mod with REDcode](redcode/first-mod.html) | EDGEkit, or VS Code with REDcode |
| Place objects in Night City | [Your first scene](edgebuilder/first-scene.html) | REDnode and EDGEbuilder, in the game |
| Look up which tool does what | [Getting started](getting-started.html) | |

Stuck on a word? The [Glossary](glossary.html) explains it. Stuck on a step? Ask on [Discord]({{ site.discord }}): someone can walk you through it.
