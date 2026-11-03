---
title: Keep a project easy to work on, with EDGEchat
nav_title: Keep a project easy to work on
section: EDGEchat
order: 6
description: "/edge:init-project writes a CLAUDE.md into your mod's folder, so every later Claude Code session knows the mod's layout, where it deploys and how to test it."
reviewed: 2026-11-03
---

# Keep a project <span class="y">easy to work on</span>

Each Claude Code session starts fresh: it doesn't remember yesterday's work. A `CLAUDE.md` file in your mod's folder fixes that. Claude Code reads it at the start of every session in that folder, so Claude knows the mod's layout, where it deploys and how to test it. Allow 5 minutes.

## Step 1: Open Claude Code in the mod's folder

In VS Code, use **File > Open Folder** and pick the mod's folder, such as `Documents\Cyberpunk Mods\red_badge_coat`. In a terminal, `cd` there, then run `claude`.

## Step 2: Run /edge:init-project

Type `/edge:init-project`, or name a folder: `/edge:init-project C:\Users\<you>\Documents\Cyberpunk Mods\red_badge_coat`.

It only runs when you type it; Claude never starts it by itself.

## Step 3: What it does

1. **Works out what the mod is** from its files: a WolvenKit project, a REDnode package, a Cyber Engine Tweaks mod, a REDmod, or loose redscript, TweakXL or ArchiveXL files. A WolvenKit project can hold several kinds at once, and it looks inside to see which.
2. **Checks for a `CLAUDE.md` already there.** If there is one, it shows what it would add and asks first, then adds an `EDGE` section rather than replacing your text.
3. **Writes it**, short: the layout, where the files go in the game, how to build and test this kind of mod, and the house rules (the game's own files never change; deploys go through EDGEdeck).
4. **Shows you the file**, with one line on what it tells later sessions.

Every path in it comes from the project itself or from checked facts. If you want more in it, ask: Claude says which additions it can't check.

{% include shot.html caption="A CLAUDE.md for a mod" shows="VS Code with the CLAUDE.md that /edge:init-project wrote for the red_badge_coat project open: its layout, where it deploys and how to test a change." %}

## Step 4: See it work

Start a new session in the same folder and ask:

> What is this mod, and how do I test a change?

Claude answers from the `CLAUDE.md` straight away, without looking through the folder.

## Good to know

- `CLAUDE.md` is plain text. Edit it yourself any time, for example to add "the coat should stay dark red, not bright".
- Share it with the mod's source if others work on it with Claude Code.
- `/edge:new-mod` offers to write it once a new mod works ([Your first mod](first-mod.html), step 6).

## Check

- The mod's folder has a `CLAUDE.md` describing it.
- A new session answered "what is this mod" from it.

## Where next

You've been through every step a mod goes through: an idea, a first version, the game, changes while playing, finding problems, and keeping the project ready for next time.

| To | Ask, or read |
|---|---|
| Make a bigger mod | `/edge:new-mod`, and grow it one piece at a time |
| Learn how an EDGE tool works | Ask Claude, such as "How does EDGEmat's library work?". It answers from this wiki |
| Learn REDnode packages in depth | [REDnode: Making mods](../rednode/making-mods.html) and [Overlay apps](../rednode/overlay-apps.html) |
| Know what Claude may do without asking | [Safety](safety.html) |

EDGEchat's [lesson 6](https://edgemodders.github.io/EDGEchat/guide-projects.html) covers the same steps.
