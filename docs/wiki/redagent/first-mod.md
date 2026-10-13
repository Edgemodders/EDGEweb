---
title: Your first mod with REDagent
nav_title: Your first mod
section: REDagent
order: 1
description: Make a working Cyberpunk 2077 mod with REDagent, from setup to undo, without writing code.
reviewed: 2026-10-13
---

# Your first mod with <span class="y">REDagent</span>

This walkthrough follows REDagent's own in-game test. By the end you'll have a mod that warns you when V's health is low, and you'll know how to approve, check and undo changes.

## Before you start

- REDnode and REDagent are installed. See the [REDagent guide's install steps](https://edgemodders.github.io/REDagent/).
- You have an Anthropic API key from [console.anthropic.com](https://console.anthropic.com/). Keys start with `sk-ant-`.

## 1. Set up once

1. Start the game and load a save. The REDagent window opens on the right.
2. Press **F10** to open the REDnode launcher. Find REDagent and switch **Allowed** on for "REDnode's tools for AI agents". Without this, REDagent can chat but can't see your mod log, the game or overlay windows.
3. Click the key field in REDagent, press **Ctrl+V** to paste your key, then **Save key**. The chat appears.

## 2. Warm up

Ask something small, to check that everything works:

> What's in my mod log?

REDagent reads the log and summarizes it. Under the answer you'll see what it cost.

## 3. Ask for the mod

> Make a mod that shows a warning when V's health is below 30%.

REDagent looks up the game's health functions, then plans the files. Before it writes each file, a **change card** shows it as a diff: added lines in green.

| Button | What happens |
|---|---|
| **Allow** | This one change is made |
| **Allow all in this chat** | This and every later change in this chat are made without asking, until **New chat** |
| **Deny** | Nothing changes; REDagent asks what you want instead |

Press **Allow** on the first card. Once you trust where it's going, **Allow all in this chat** saves clicks.

## 4. Watch it run

REDnode starts the new mod a moment after its files exist. REDagent checks the mod's log and fixes anything that fails. Get hurt below 30% health, or ask REDagent to lower V's health (it asks before any call that changes the game), and the warning shows.

## 5. Change it or undo it

- Ask for changes in plain words: "make the warning red and put it at the top of the screen".
- Every change is listed with **Undo**. The strip above the input counts this chat's changes; **Show** lists them all.
- Undo puts a file back as it was, or removes a file REDagent created. REDagent is told what you undid.

## Tips

- **New chat when you change topic.** The whole chat is sent with each question, so long chats cost more per answer.
- **Sonnet for quick questions,** Opus (the default) for writing and fixing mods.
- **Something wrong?** Open the REDnode Mod log app. REDagent's lines start with `[redagent]`. The [guide's troubleshooting table](https://edgemodders.github.io/REDagent/) covers common messages.
