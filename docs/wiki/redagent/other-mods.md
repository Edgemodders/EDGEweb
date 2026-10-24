---
title: Mods that ask REDagent
nav_title: Mods that ask REDagent
section: REDagent
order: 3
description: "Let other REDnode mods ask REDagent questions: the permission, what their questions can do, daily spending limits, and the Mods view."
reviewed: 2026-10-24
---

# Mods that ask <span class="y">REDagent</span>

Other REDnode mods can ask REDagent questions and show you the answers in their own windows: a mod that suggests a build, explains an error, or tells you what to do nearby. Each answer costs you a little, through your own API key, so you decide which mods may ask and how much they may spend.

## Letting a mod ask

A mod that wants to ask declares the **agent** permission. It can't ask anything until you allow it:

1. Press **F10** and open the **Mod Manager** at the top of the REDnode launcher.
2. Select the mod and allow its permission: "questions to the AI assistant (REDagent); each answer costs you a little".

REDagent itself must be installed and switched on. Withdraw the permission the same way, and the mod's questions are refused again.

REDnode comes with a sample to try it: the [Ask mod](https://github.com/Edgemodders/REDnode/tree/main/packages/overlay/apps/ask-mod). Switch it on in the Mod Manager, allow its permission, and type a question in its window. The answer streams in with its cost.

{% include shot.html caption="The Ask mod" shows="REDnode's Ask mod window with a question typed in and REDagent's answer streaming in below it, with its cost." %}

## What a mod's question can do

| | |
|---|---|
| **Read only** | A mod's question can read logs, the game's state, the game's functions, the text of overlay windows and your mods' files, and use other mods' tools that only read. It never changes your files or your game |
| **Pictures** | Off for every mod. Pictures of windows and of your screen are allowed only for mods you switch **Pictures** on for |
| **Model** | Always **Sonnet 5.5**, whatever your own chat uses, to keep answers cheap |
| **One at a time** | REDagent answers mods' questions one after another |

In REDagent's in-game test, each of the Ask mod's answers cost between $0.008 and $0.02.

## Daily limits

Every mod has its own **daily limit**, **$0.25** unless you change it. Once a mod has spent its limit for the day, its questions are refused, with the reason, until the next day. The day is your PC's local day.

## The Mods view

To see and control what mods spend, press **Chats** in REDagent's footer, then the **Mods** tab. It lists every mod that has asked REDagent anything:

{% include shot.html caption="REDagent's Mods view" shows="The Mods tab in REDagent: the Ask mod with today's spending against its daily limit, its total, the limit field with Set, the Paused and Pictures switches, and its last questions." %}

| You see | What it means or does |
|---|---|
| **Today ... of ...** | What the mod has spent today against its daily limit. Red once the limit is reached |
| **in all** | What the mod has spent since it first asked |
| **Daily limit** | Type a new amount in dollars and press **Set** |
| **Paused** | Switch on to refuse all of the mod's questions until you switch it off |
| **Pictures** | Switch on to let the mod's questions use pictures of windows and of your screen |
| The last questions | The mod's most recent questions, with their time and cost |

If no mod has asked yet, the tab says so and reminds you about the permission.

## For mod makers

Mods ask with `agent.ask` from REDnode's `rednode` package. See [Asking the AI assistant](https://edgemodders.github.io/REDnode/overlay-apps.html#asking-the-ai-assistant) in REDnode's overlay apps guide for the API, and the [REDagent design](https://edgemodders.github.io/REDagent/design.html) for how questions are handled. The Ask mod is a short working example.
