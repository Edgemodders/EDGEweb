---
title: Checking a quest
section: EDGEquest
order: 6
description: "The checklist EDGEquest keeps in each story file, and Check Quest Mod, which reads any quest mod's archive, project or files and names what is wrong in plain words."
reviewed: 2026-11-04
---

# Checking a <span class="y">quest</span>

EDGEquest checks a quest in two ways. The **checklist** says what you still have to do in your own quest. **Check Quest Mod** finds what's broken in any quest mod, yours or someone else's.

## The checklist

Each story file has a list at its end, under `todo:`. It names what in the quest is still a stand-in, and the EDGE tool that can do each item:

```yaml
todo:
  - do: Voice the 4 lines in the scene at_the_door. Until then they show as text only.
    found: voice/at_the_door
    tool: EDGEwave
```

- **It keeps itself up to date.** Each make adds new items, and an item ticks itself (`done: true`) once the thing is done.
- **Your own items stay.** Items you or an assistant write by hand are kept as they are. Write `done: true` to tick one, or tick it on a beat's page.
- **Open items never stop the quest from playing.** They are reminders, not errors.

Typical items:

| Item | What to do |
|---|---|
| The template's description is still there | Write your own `description:` |
| Lines have no voice prompt | Write how each line is spoken (see [How a line is spoken](story-file.html#how-a-line-is-spoken)) |
| Lines aren't voiced yet | Voice them with EDGEwave. Voiced lines in the game are coming |
| A sound name EDGEquest doesn't know | Check the spelling, or make the sound with EDGEwave (see [Your own sounds](music-sound.html#your-own-sounds)) |

The **Project Quests** view and the status bar show how many items are left. The checklist counts a line as voiced only when its take is current: a line whose words changed since its take counts as not voiced.

## Check Quest Mod

**EDGEquest: Check Quest Mod...** reads a quest mod and names what's wrong, in plain words. It works on:

- a mod's `.archive` file (right-click it in VS Code's Explorer);
- a WolvenKit project, or a folder of extracted files (right-click the folder);
- from the Game Quests view, the checklist icon at the top.

It checks the mod's files against each other and against the game. Among other things it finds:

| Problem | What it means |
|---|---|
| Missing files, or entries that point nowhere | A journal entry, a scene or a phase the mod names but doesn't have |
| Texts that aren't there | Lines with no subtitle, or leftover texts from a copied scene |
| Lines and options numbered wrongly | A choice that shows no text, and can crash the game when picked |
| A phase nothing starts | Part of the quest that can never run |
| A wait in a trigger area nothing switches on | V can never arrive |
| Map markers at the world's origin | The marker shows far away, often in a strange place |
| Subtitle files nothing loads, or that replace the game's own | Lines with no text, or the game's own lines broken |
| The game's own facts written | The mod changes what the game itself remembers |

On a published quest mod it found every fault already known from studying the mod by hand, and two more that the hand study had missed.

When your own quest is made, the same checks run, and their findings go to the Problems panel.

{% include shot.html caption="Check Quest Mod" shows="The result of Check Quest Mod on a quest mod's archive: a list of errors, warnings and notes in plain words, each naming the file and what is wrong." %}
