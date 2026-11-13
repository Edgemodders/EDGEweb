---
title: "Sound Tools: Sound Tracer, Sound Search and Hot swap"
nav_title: Sound Tools
section: REDnode
order: 4.6
description: "REDnode's optional Sound Tools pack: see every sound the game plays as it plays, search and play the game's sound events, and swap an archive into the running game with Hot swap."
reviewed: 2026-11-13
---

# Sound <span class="y">Tools</span>

**REDnode Sound Tools** is an optional pack of three apps for sound modders, and for anyone who wants to swap an archive into the running game by hand.

| App | What it does |
|---|---|
| [Sound Tracer](#sound-tracer) | Shows every sound the game plays, as it plays it |
| [Sound Search](#sound-search) | Searches the game's sound events, over 23,000 of them, and plays any recording |
| [Hot swap](#hot-swap) | Swaps an archive into the running game, with no restart |

A **sound event** is the game's name for something to play, such as a footstep on concrete. One event can have several recordings.

**Status:** released, for game 2.5. All three apps passed a check in the game. Swapping an archive that changes the game's *sound* is untested on game 2.5; other archives swap as on [REDswap](redswap.html)'s page.

## Install

| You need | |
|---|---|
| REDnode 0.41.0 or later | [Install REDnode](install.html) first |
| The pack's zip, `REDnode-Sound-Tools-<version>.zip` | From [Nexus Mods](https://www.nexusmods.com/cyberpunk2077/mods/35537) or [REDnode's releases](https://github.com/Edgemodders/REDnode/releases) |
| [REDbridge](../redbridge/), optional | For sound events' names. Without it, events show as numbers. The Mod Manager's [Get REDbridge](mod-manager.html#get-redbridge) button installs it |

1. With the game closed, add the zip to EDGEdeck or Vortex and deploy, or extract it into the game folder. The three apps land in REDnode's apps folder, as `sound-tracer`, `sound-search` and `hot-swap`.
2. Start the game, press **F10** and open the [Mod Manager](mod-manager.html). Switch on the apps you want. They start off.
3. For **Hot swap**, switch **Allowed** on for "swapping archives in the game's mod folder while the game runs".

To remove the pack, remove it in your mod manager or delete the three folders. REDnode stays.

## Sound Tracer

Press **Start trace** and play. Two columns fill as the game makes sound:

| Column | Shows | Buttons on each row |
|---|---|---|
| **Played** | Every sound event the game starts: the time, the event's name (or `#` and a number without REDbridge) and what it plays on | **▶** plays the event's recordings in turn. **G** plays the event through the game on V, with the game's own mix. Stop, Copy |
| **Loaded** | Every recording the game loads | **▶** plays it. Stop, Copy |

Also there: a filter over both columns, **Pause** and **Resume**, **Clear**, a box that plays a name or number you paste, and **Stop all**. Each column keeps its newest 2,000 rows. Every row is also written to `red4ext\logs\rednode-sound-trace.log` in the game folder. Closing the window stops the trace.

**▶** is greyed for an event with no recording of its own, such as one that stops a sound.

{% include shot.html caption="The Sound Tracer" shows="The Sound Tracer over the game while V draws a katana: the Played column on the left with named events, the Loaded column on the right, and the play buttons on each row." %}

## Sound Search

Type, and the results come as you type:

| You type | It finds |
|---|---|
| Words, like `fs concrete walk` | Events whose name or tags hold every word, in any order |
| An event's number | That event |
| A recording's number | The events that play that recording |

On each result, **▶** plays its recordings in turn, **▸** lists them so you can play one, and **G** plays the event through the game. Names arrive a few seconds after the first search, while REDbridge starts.

**☆** saves an event or a recording to the **Scratch** tab, which is kept between game sessions. **Copy all** puts the list on the clipboard.

## Hot swap

Hot swap puts a packed mod, an `.archive` file, into the running game through [REDswap](redswap.html). It works for any archive, not only sound mods.

1. Load a save. Swaps don't work at the main menu.
2. Type the archive's name, if it is already in the game's `archive\pc\mod` folder, or paste its full path. A path from Windows' **Copy as path**, quotes and all, works.
3. Press **Swap** or Enter.

| You should see | |
|---|---|
| An answer under the box | What was swapped, how long it took, and why anything was not |
| The swap under **Recent** | Your last 30 swaps are kept between sessions. **↻** swaps one again, so after your next build it is one press |

For what changes in the game after a swap, and what to do when nothing seems to change, see [REDswap](redswap.html#what-a-swap-does).

**Sound archives.** For an archive that changes the game's sound, REDnode pauses the game for a moment around the swap, so the new sounds play without a restart. A sound that played just before the swap can keep its old version until the game loads it again: for a weapon, equip it again. This is untested on game 2.5.

## A sound modding loop

1. **Trace:** do the thing in the game, such as drawing the katana, and read its event in the Sound Tracer.
2. **Search:** open that event in Sound Search, play its recordings and find the one to change. Save it to Scratch.
3. **Make** your version, for example with [EDGEwave](../edgewave/), and pack it as an archive.
4. **Hot swap** it in, and hear it in the game without leaving it. Change it, build it, press **↻**.

## More

REDnode's own [Sound Tools guide](https://edgemodders.github.io/REDnode/sound-tools.html) has pictures of each app and, for mod makers, the calls behind them.
