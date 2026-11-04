---
title: Troubleshooting EDGEquest
nav_title: Troubleshooting
section: EDGEquest
order: 9
description: "Fixes for common EDGEquest problems: two test quests at one place, a check showing 15 / 20, music that plays on, custom sounds that don't play, a quest that doesn't start, and views that stay empty."
reviewed: 2026-11-04
---

# Troubleshooting <span class="y">EDGEquest</span>

## Start here

- **EDGEquest: Show Log** shows what EDGEquest did, and any errors.
- **EDGEquest: Check Quest Mod...** on your project names what's wrong with the quest's files. See [Checking a quest](checking.html#check-quest-mod).
- The **Problems panel** lists the story file's problems at their line.

## Problems and fixes

### Two quests play their scenes at the same place

Every quest made from the template starts when a save loads and waits at the same door. When two are installed, both scenes play when V arrives, and the game merges their choices into one list; one quest's options may show a second or two before the other's. Nothing is broken, but it's confusing to test.

**Fix:** keep one test quest at a time. Move the old quest's story file out of the project, delete the files it made (see [Made Files](writing.html#saving-makes-the-quest)), and pack and install again.

### An attribute check shows `15 / 20` and can't be picked

That's the game saying V's attribute (15) is below what the check needs (20). Check levels grow with V's level, and at a high level `hard` can ask for 20, the top of the scale. In a conversation, a failed check is dimmed with its tag in the fail colour; that's how the game shows it.

**Fix:** if most players should pass, use `easy` or `medium`. See [Kinds of options](story-file.html#kinds-of-options).

### The music keeps playing after the quest

A `_START` cue plays until its `_STOP`.

**Fix:** add a `music:` step with the matching `_STOP` cue to **every** ending, including the failed ones. See [Music cues](music-sound.html#music-cues).

### My own sound doesn't play

Sounds you make with EDGEwave (`edgewave_<name>`) are REDmod custom sounds, which the game reads only when it starts.

**Fix:**
1. Switch on REDcode's `redcode.pack.redmod`.
2. Pack and Install again.
3. Quit the game and start it again with `-modded`. REDcode's **Run Game** does that.

Making new named sounds needs EDGEwave 0.2.0, which isn't released yet. See [Your own sounds](music-sound.html#your-own-sounds).

### The sound picker has no search or ▶

The picker's search and play button come from EDGEwave 0.2.0, which isn't released yet. Without it, type the event's name. A music cue's ▶ also needs [REDnode](../rednode/) 0.43 or later, running in the game.

### The quest doesn't show in the journal

- **ArchiveXL** must be installed in the game. It adds the quest's phase, journal and texts.
- Did you **Pack and Install** after the last make? Saving the story file changes the project, not the game.
- **Load a save from before you installed the quest.** In a save made after, the quest may already have started or ended.
- Run **Check Quest Mod** on the project, and fix what it names.

### V reaches the place and nothing happens

V arrives by stepping **inside the place's trigger area**, not by being close to the marker. EDGEquest uses the area the game's own quest uses with that marker, unless you name one with `area:`.

**Fix:** walk right up to the spot, as you would in the game's own quest. If it still doesn't fire, run Check Quest Mod: it warns when a quest waits in an area that nothing switches on. Only V's apartment door is tested so far; if another place doesn't work, please report it.

### Lines show, but voices don't

That's expected in this preview. Lines play as subtitles; voiced lines in the game are coming. Write [voice prompts](story-file.html#how-a-line-is-spoken) now, so lines are ready to voice.

### Game Quests stays empty or says something is missing

| It says | Fix |
|---|---|
| It needs your Cyberpunk 2077 folder | Click **Set Game Folder** and pick the folder holding `bin`, `archive` and `r6` |
| REDbridge was not found | Install [REDcode](../redcode/install.html) and run its **Install REDbridge** command, or set `edgequest.bridgePath` to REDbridge.exe |
| Reading the game's quests... | The quest index is being built, which takes about a minute and a half. Wait for the status bar |
| The game's quests could not be read | Click **Show Log** to see why, then **Try Again** |

EDGEquest works with game **2.5** and REDbridge **0.11.0** or later only.

### Project Quests says no project is open

Open a WolvenKit project in REDcode, or open a folder holding a `.cpmodproj` file. Then click **New Quest**.

### A file I changed by hand isn't updated

EDGEquest keeps a made file you changed by hand, so your change isn't lost. To get EDGEquest's version again, delete that file and make the quest.

## Still stuck?

Ask on the [EDGEmodders Discord]({{ site.discord }}) or open an issue on [EDGEquest's GitHub](https://github.com/Edgemodders/EDGEquest/issues). Include what **Show Log** says.
