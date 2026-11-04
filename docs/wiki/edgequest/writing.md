---
title: Writing a quest with EDGEquest
nav_title: Writing a quest
section: EDGEquest
order: 3
description: "Make your first quest: New Quest, the Storyboard and its beat pages, saving makes the quest's game files, then pack, install and play it."
reviewed: 2026-11-04
---

# Writing a <span class="y">quest</span>

In EDGEquest, a quest is one text file in your WolvenKit project, the **story file** (`<id>.quest.yaml`). You write the quest in story words; EDGEquest makes the game's files from it each time you save. You can edit the story file on the **Storyboard**, with cards and buttons, or as text. Both change the same file.

## Your first quest

1. **Open a WolvenKit project in REDcode,** or make one with **REDcode: New Project**. See [Projects](../redcode/projects.html).
2. **Run EDGEquest: New Quest...** (or the **New Quest** button at the top of the Project Quests view).
3. **Give a title and an id.** The title is what the journal shows ("Something at the Door"). The id is short, lower case, with `_` between words (`door_mystery`); it names the quest's files. The first time, EDGEquest also asks your modder name, and remembers it.
4. EDGEquest writes `door_mystery.quest.yaml` at the top of the project, opens it on the Storyboard, and makes the quest's game files.

The new quest already plays. Its objective sends V to the apartment door in Megabuilding H10. When V gets there, V thinks aloud and the player picks one of two options, each leading to its own ending.

## The Storyboard

The Storyboard shows your quest as **cards, one per beat**. A beat is one stage of the quest, with the objective the journal shows while it runs. Each card is titled with that objective.

- **Arrows** show where the quest goes next. An arrow from a choice is labelled with the option that leads there. A grey arrow is what follows when no choice sends the quest elsewhere.
- **Endings** show whether the quest succeeds or fails there.
- **Drag** the board to move it, and use the **mouse wheel** to zoom. The buttons in its corner zoom in, out, to fit and to actual size.
- **Drag the line under the board** to make it taller or shorter; double-click the line to fit the board to the story.
- **Layout** lays the board out afresh and fits it in view. Beats a choice leads to stay together, in the choice's order.

{% include shot.html caption="The Storyboard" shows="The template quest on the Storyboard: four beat cards, Go to your apartment, You're home, Look at the door and Get some rest, with arrows labelled Look closer and Go inside, and the two endings marked succeeded and failed." %}

### A beat's page

Click a card to open its page below the board. There you can:

| Do | How |
|---|---|
| Change a line's words, or an option's text | Click it and type |
| Add lines, choices, options and sounds | The add rows at the end of each scene and option |
| Move a line, option or step up or down, or delete it | The buttons beside it. A choice's `go:` always stays last |
| Add a step | **+ Step**: arrive at a place, play a scene (or a new one), wait, set a fact, music, sound, or end the quest |
| Send a choice to another beat | Pick the beat on the option |
| Make an option yellow or white, or give it a lifepath, an attribute check or a payment | The colour and condition pickers on the option. See [Choices](story-file.html#choices) |
| Say what follows the beat | **Then**: the next beat in the list, another beat, nothing, or an ending |
| Write how a line is spoken | The line's voice prompt. See [How a line is spoken](story-file.html#how-a-line-is-spoken) |
| Tick a checklist item | The checklist on the page |

To add a beat, use **+ Beat** at the top (it adds a beat at the end, linked to nothing, so the story doesn't change), or **+ Beat after** (it goes into the chain, after the beat you are on). You can also rename and delete beats.

{% include shot.html caption="A beat's page" shows="The page of the You're home beat under the Storyboard: its steps (a music cue and a scene), the scene's lines with their voice prompts, and a choice whose options have colour and condition pickers." %}

Every change goes straight into the story file, with your comments kept. **Open YAML** shows the text, and you can edit it there directly. [The story file](story-file.html) describes everything it can hold.

## Saving makes the quest

Each time you save the story file, EDGEquest **makes the quest**: it writes the quest phase, the journal, the scenes, the texts and the ArchiveXL file into your project, and checks them against each other. You can also use **EDGEquest: Make Quest**, or the Storyboard's **Make** button.

- **Problems** show in VS Code's Problems panel, at their line in the story file. A choice that goes to a beat that doesn't exist is one example.
- **The status bar** says, while the story file is in front, when the quest was last made and how much is left on its checklist, or how many problems it has. Click it to see the problems or the made files.
- **A made file you changed by hand is kept,** not overwritten. Files a new make no longer needs are removed, unless you changed them.

**Made Files...** lists the game files made from the story. A phase or scene opens in plain words on the quest page, as the game's own do.

To make the quest only when you ask, switch off `edgequest.makeOnSave`. See [Settings and commands](settings.html).

## The Project Quests view

**Project Quests** lists the quests in REDcode's open project, or in any open folder that is a WolvenKit project. Each shows how much is left to do, its beats and its checklist. Click a quest to open its Storyboard. Each quest also has **Make Quest** and **Made Files**.

## Play it

1. In REDcode, **Pack and Install** the project. See [Pack and install](../redcode/pack-install.html).
2. Make sure [ArchiveXL](https://www.nexusmods.com/cyberpunk2077/mods/4198) is installed in the game.
3. Start the game and **load a save from before you installed the quest.** A quest made from the template starts when a save loads.
4. The quest's objective shows in the journal. Follow its marker.

{% include shot.html caption="The quest in the game" shows="Cyberpunk 2077 with the new quest's objective in the tracker, its map marker at V's apartment door, and the scene's choice on screen with its two options." %}

**To change it:** edit the story, save, pack and install again, and load the same save again.

If something doesn't work, run **EDGEquest: Check Quest Mod...** on the project: it names what's wrong. **EDGEquest: Show Log** shows what EDGEquest did. See [Checking a quest](checking.html) and [Troubleshooting](troubleshooting.html).

> **Keep test quests apart.** Every quest made from the template starts on load and waits at the same door. Two installed together both play there, and their choices merge into one list. Before you test a new quest, move the old test quest's story file out of the project and delete the files it made.
