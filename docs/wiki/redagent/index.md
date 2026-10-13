---
title: REDagent
nav_title: Overview
section: REDagent
order: 0
description: REDagent, the modding agent inside Cyberpunk 2077, powered by Claude. What it does, what it needs, and where to start.
reviewed: 2026-10-13
---

# RED<span class="y">agent</span>

REDagent is EDGE's modding agent. It lives in a chat window drawn over Cyberpunk 2077 and writes, runs, checks and fixes [REDnode](../rednode/) mods with you, while you play. It is powered by Claude.

## Benefits

- **Ask in plain words.** "Make me a mod that warns me when my health drops below 30%" is enough.
- **It checks its own work.** REDagent reads the mod's log, looks at its overlay window and asks the running game, then fixes what is wrong.
- **You approve every change.** Each file change appears as a diff with **Allow**, **Allow all in this chat** or **Deny**.
- **Everything can be undone.** Every change is backed up and listed with an **Undo** button.
- **Live.** REDnode loads a new or changed mod a moment after REDagent writes it, with no game restart.
- **Clear costs.** Each answer shows what it cost. Pick Opus for building mods or Sonnet for quick questions.

## What it can't do

It sees REDnode's overlay windows, not the game screen itself. It can't press keys in the game, run commands or install npm packages. It only writes inside REDnode's apps folders.

## What you need

| You need | Why |
|---|---|
| Cyberpunk 2077 on PC with REDnode | REDagent is a REDnode package |
| Your own Anthropic API key | REDagent calls Claude with your key; Anthropic bills you per use. A Claude.ai subscription can't be used |
| About 300 MB of disk and 120 MB of memory | Mostly the Claude Agent SDK. It runs in its own process, outside the game |

**Status:** early developer build. Writing mods passed its in-game test on 2026-10-12. There is no packaged release yet: it installs from source.

## In this wiki

| Page | |
|---|---|
| [Your first mod with REDagent](first-mod.html) | From an empty chat to a working mod, step by step |

## Reference

- [REDagent guide](https://edgemodders.github.io/REDagent/): install, first run, changes and undo, your key and data, costs, troubleshooting
- [Design and test results](https://github.com/Edgemodders/REDagent/blob/main/docs/design.md)
- [Source and issues](https://github.com/Edgemodders/REDagent)
