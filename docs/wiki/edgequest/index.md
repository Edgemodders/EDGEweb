---
title: EDGEquest
nav_title: Overview
section: EDGEquest
order: 0
description: "EDGEquest, the EDGE platform's quest maker for Cyberpunk 2077: read the game's quests in plain words, and write your own as a short story. What it is, what it's for, and where it stands."
reviewed: 2026-11-04
---

# EDGE<span class="y">quest</span>

EDGEquest is the EDGE platform's quest maker for Cyberpunk 2077. It is an extension for VS Code. It does two things:

- **It reads the game's quests to you.** Open any quest in the game and see it as numbered steps in plain words: what starts it, where V has to go, who says what, which choices lead where, and what goes in the journal.
- **It writes quests from a story.** You write your quest as a short text file: its objectives, the places V goes, the lines V says and the choices the player makes. EDGEquest turns that into the game's own quest files.

{% include shot.html caption="EDGEquest in VS Code" shows="VS Code with the EDGEquest activity bar open: the Project Quests and Game Quests views on the left, and a quest's Storyboard on the right, with beat cards joined by arrows labelled with choices." %}

## What it's for

Quests are among the hardest things to mod in Cyberpunk 2077. A quest is a graph of hundreds of nodes, spread over several binary files that must all agree: the quest phase, the journal, the scenes, the subtitles and an ArchiveXL file. One wrong number and a choice shows no text, or the game crashes.

EDGEquest does that part for you:

| You want to | EDGEquest gives you |
|---|---|
| Learn how the game builds a quest | Any quest or scene as plain words, with links you can follow from step to step |
| Find where a quest is | **Find Quest** by its in-game title, a person, a place, a fact or a journal entry |
| Make your own side quest | **New Quest** starts one from a template that already plays in the game |
| Change your quest without touching nodes | The **Storyboard**: your quest as cards, edited with buttons, or the story file as text |
| Know what's left to do | A checklist in the story file, kept up to date each time you save |
| Find out why a quest mod doesn't work | **Check Quest Mod** names what's wrong in plain words |
| Let an AI assistant write the quest | An MCP server with the same quest maker |

## Why you might want it

| If you... | EDGEquest gives you |
|---|---|
| Have never opened a quest file | Plain words instead of nodes. The raw file is one click away when you want it |
| Want V to go somewhere, think aloud and choose | A quest you write in a few lines, with places, beats, scenes and choices |
| Want choices that feel like the game's | Yellow or white options, lifepath options, attribute checks and payments, shown with the game's own tags |
| Want music and sound in your quest | The game's music cues and sound events, by name, in a beat or between lines |
| Worry about breaking your game | EDGEquest only writes into your WolvenKit project. Nothing reaches the game until you pack and install it |

## How it fits into EDGE

EDGEquest is a specialist toolkit. It builds on the core toolkits:

| Toolkit | What it does for EDGEquest |
|---|---|
| [REDcode](../redcode/) | Required. Finds the game, installs REDbridge, makes the WolvenKit project, and packs and installs your quest |
| [REDbridge](../redbridge/) | Reads and writes the game's files, through WolvenKit's libraries. REDcode installs it |
| [EDGEwave](../edgewave/) | Optional. Finds, plays and makes sounds for your quest (see [Music and sound](music-sound.html) for which version) |
| [REDnode](../rednode/) | Optional. Plays a music cue in the running game, so you can hear it before you pick it |
| [EDGEdeck](../edgedeck/) | Optional. Installs your packed quest like any other mod, with undo |
| Claude and other assistants | EDGEquest's MCP server gives them the same quest maker. See [For assistants](assistants.html) |

## Status

EDGEquest **0.1.0** came out on 4 November 2026 as a **preview**. It's on the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=edgemodders.edgequest), [Open VSX](https://open-vsx.org/extension/edgemodders/edgequest) and [Nexus Mods](https://www.nexusmods.com/cyberpunk2077/mods/35750). It works with game **2.5** only.

What passed in the game, from EDGEquest's [test record](https://edgemodders.github.io/EDGEquest/testing.html):

| Feature | Result |
|---|---|
| Reading the game's quests: Game Quests, quest and scene pages, Find Quest, Raw | Passed the owner's hand test (21 October). Following a whole side quest on the quest page alone passed on 3 November, and the step trail on 4 November |
| The template quest: marker, arriving, the scene, the choice, the end | Passed in the game on 2.31 (22 October) and on 2.5 (31 October) |
| A choice that branches the quest to two endings | Passed in the game (23 and 31 October) |
| The Storyboard, New Quest, saving makes the quest | Passed the owner's hand tests (23 and 24 October) |
| Kinds of options: yellow, white, lifepath, attribute check, payment | Passed in the game (3 November). Not tried yet: a lifepath option hidden from a V with another lifepath |
| Music cues and sounds, including a sound of your own | Passed in the game (3 November), with an EDGEwave newer than 0.1.0 |
| Check Quest Mod | Found every known fault in a published quest mod, and two more |
| The MCP server | An assistant's whole flow worked in a test script (24 October). On npm, but waiting for its release to be approved there |

**Not in 0.1.0, coming:** phone calls, copying a game scene into your quest, people standing in a scene, voiced lines in the game, and happenings (scripted moments in the city that aren't a quest). In this preview, V is alone in scenes, and lines show as subtitles.

**Tested places:** V's apartment door in Megabuilding H10, the template's place. Other map markers are made the same way but haven't been tried in the game yet.

## In this section

| Page | |
|---|---|
| [Install and set up](install.html) | What you need, installing, the quest index |
| [Reading the game's quests](reading.html) | Game Quests, Find Quest, the quest and scene pages, the step trail, Raw |
| [Writing a quest](writing.html) | New Quest, the Storyboard, saving makes the quest, playing it |
| [The story file](story-file.html) | Places, beats and steps, scenes, choices and their kinds, facts, voice prompts, what saving makes |
| [Music and sound](music-sound.html) | Music cues, sound events, your own sounds, and the picker |
| [Checking a quest](checking.html) | The checklist, and Check Quest Mod |
| [For assistants](assistants.html) | The MCP server and its tools |
| [Settings and commands](settings.html) | Every setting and command |
| [Troubleshooting](troubleshooting.html) | Fixes for common problems |

For the developer reference and design notes, see [EDGEquest's docs](https://edgemodders.github.io/EDGEquest/).
