---
title: EDGEwave
nav_title: Overview
section: EDGEwave
order: 0
description: "EDGEwave, the EDGE platform's sound studio for Cyberpunk 2077: find a game sound, edit and mix it inside VS Code, put it into your mod, and make new sounds and voices with ElevenLabs."
reviewed: 2026-11-13
---

# EDGE<span class="y">wave</span>

EDGEwave is the EDGE platform's sound studio for Cyberpunk 2077. It runs inside VS Code. Find one of the game's sounds, such as the sound of V drawing a katana, and listen to it. Open it, cut it, fade it, layer other sounds on it or make it sound like a radio. Then put your version into a mod, and hear it in the game. You can also make new sounds and spoken lines through ElevenLabs, an AI sound service, with your own account.

A **mod project** is a folder that holds your changes until they are packed into a mod. [REDcode](../redcode/), EDGE's editor for game files, makes one for you and packs it. EDGEwave works beside REDcode, and installing EDGEwave installs REDcode too.

**New here?** Read this page, then [Install and set up](install.html), then follow [Tutorial: your first sound mod](tutorial.html). It takes about 20 minutes, with no coding and no paid account.

{% include shot.html caption="EDGEwave's sound editor" shows="A game sound open in the EDGEwave editor: the waveform with a selection, the Edits list, and the Render pane, in REDcode's HUD colours." %}

| On this page | |
|---|---|
| [What it's for](#what-its-for) | Why changing a game sound used to take three tools |
| [What it can do](#what-it-can-do) | The features, each with its page |
| [How the game plays sounds](#how-the-game-plays-sounds) | Events and recordings, in four sentences |
| [Words you'll meet](#words-youll-meet) | Event, variation, hash, track, mix and the rest |
| [Why you might want it](#why-you-might-want-it) | |
| [How it fits into EDGE](#how-it-fits-into-edge) | What it needs from the other tools |
| [Status](#status) | What works, what was heard in the game, what comes next |
| [In this section](#in-this-section) | Every page |

## What it's for

Cyberpunk 2077 stores its sounds in formats that ordinary audio tools can't open, packed inside the game's archives. Changing a gunshot, a menu click or a line of dialogue used to mean extracting it with one tool, editing it in another and converting it back with a third.

EDGEwave puts those steps in one place, next to your mod project. It reads the sound from your own game, lets you change it, and writes the result into the project in the form the game loads.

## What it can do

| You can | Where |
|---|---|
| **Find and hear any game sound**: sound effects, voice lines and music, with a filter by name | [Find and play sounds](finding.html) |
| **Edit a sound**: trim, cut, copy and paste, silence, fades, volume, mono or stereo, with undo | [Edit and mix](editing.html#the-edits) |
| **Mix several sounds** on tracks, each with its own volume, position and speed | [Edit and mix](editing.html#tracks) |
| **Add effects**, or pick a ready-made one: **Radio**, **Holocall**, **PA speaker**, **Muffled through a wall** | [Edit and mix](editing.html#effects-and-presets) |
| **Start from nothing**, or from your own sound files | [Find and play sounds](finding.html#a-new-empty-sound) |
| **Save a WAV file** of the result | [Edit and mix](editing.html#render-a-wav) |
| **Put it into the game**: replace one game sound, replace or silence everything an event plays, or add a new sound that a quest or a script plays by name | [Into the game](into-the-game.html) |
| **Make a sound from a description**, speak a line in a voice, or re-voice a line, through ElevenLabs with your own key | [Voice tools](voices.html) |
| **Voice a quest's dialogue** written in [EDGEquest](../edgequest/), line by line | [Voices for quests and mods](voice-lines.html#voice-a-quest) |
| **Let other REDnode mods speak** lines of text in the running game | [Voices for quests and mods](voice-lines.html#edgewave-voice-for-rednode) |
| **Work through an AI assistant**: Claude can search sound events, make a new sound event and voice lines | [Assistants](assistants.html) |

Your edits are never applied to the game's files. EDGEwave saves them as a list of steps in a small **sound document** (a `.edgewave` file) in your project. The document holds no audio, so it holds no game data and is safe to share. EDGEwave fetches the sound again from your own game when you open it.

## How the game plays sounds

The game doesn't play sound files by name. Its code asks for an **event**, such as `w_melee_katana_equip`, "V draws a katana". An event can have several recordings, called **variations**, and the game picks one each time, so the same action doesn't always sound the same. Each recording is known by a number, its **hash**.

That gives you two ways to change a sound: replace **one recording**, or replace **everything the event plays**. [Into the game](into-the-game.html#which-should-i-pick) compares them.

## Words you'll meet

| Word | Means |
|---|---|
| **Sound effect** | A short game sound such as a shot, a door or a footstep. The game keeps about 73,000 of them packed together |
| **Voice line** | One spoken line of dialogue, a `.wem` file in the game |
| **Music cue** | An event that starts or stops a piece of the game's music. Its name starts with `mus_` |
| **Event** | The game's name for something to play, such as `w_melee_katana_equip`. Quests, scenes and scripts ask for events, never for files |
| **Variation** | One of the recordings an event can play. The game picks one each time |
| **Hash** | The number that stands for one recording, such as `746693166`. Events have one too |
| **Sound document** | The `.edgewave` file EDGEwave keeps for a sound you opened: your edits and your mix, never the audio. These pages also call it a mix |
| **Track** | One sound in a mix, on its own row (its **lane**) |
| **Mix** | Several tracks played together. What goes into the game is the mix of the ticked tracks |
| **Clip** | The selected track's sound, shown as a waveform |
| **Render** | Write the mix out as one sound file |
| **WAV** | A plain, uncompressed sound file that every audio tool reads |
| **Project** | Your mod project: a folder REDcode makes for your changes. It is the same kind of project WolvenKit uses |
| **Pack** | Turn a project into the files the game loads. REDcode does it |
| **Override** | Replace one recording of a game sound effect with yours |
| **REDmod** | CD PROJEKT RED's own mod format. It is the only one that can add new sounds, or replace everything an event plays |
| **Custom sound** | A WAV file in a REDmod that the game plays for an event name |
| **Take** | One attempt from a voice tool. You keep the one you like |
| **Voice clone** | A copy of a voice, made by ElevenLabs from a recording |

More terms are in the wiki's [glossary](../glossary.html).

## Why you might want it

| If you... | EDGEwave gives you |
|---|---|
| Want to change how something in the game sounds | The game's own sound, found by name and opened in one click, with no converting by hand |
| Are new to audio editing | The common edits as buttons, ready-made effects, and undo and redo like any VS Code file |
| Want a sound the game doesn't have | Drop in your own sound file, or describe the sound and let ElevenLabs make it |
| Write quests with [EDGEquest](../edgequest/) | Your own sounds as events a quest can play, a search over the game's sound events, and voices for your lines |
| Share your mod's source, for example on GitHub | Sound documents list your edits, never the audio itself, so they are safe to share |
| Make mods for [REDnode](../rednode/) | A sound your mod's code can play, and a way for mods to speak text aloud |

## How it fits into EDGE

| Part | Role for EDGEwave |
|---|---|
| [REDcode](../redcode/) | Required, 0.10.3 or later. It owns the mod project, reads game sounds for EDGEwave, and packs and installs the mod. Installing EDGEwave installs it |
| [REDbridge](../redbridge/) | The small program that reads the game's files for REDcode, and writes a replaced sound effect in the game's format. REDcode installs it |
| [REDnode](../rednode/) | Optional, in the game. It plays events in the running game for **Play in the Game**, runs packages that play your sounds, and runs EDGEwave Voice. Its [Sound Tools](../rednode/sound-tools.html) show which event the game plays when you do something |
| [EDGEquest](../edgequest/) | Optional. Its sound pickers search and play sounds through EDGEwave, and it hands a quest's lines to EDGEwave to voice. See [Music and sound](../edgequest/music-sound.html) |
| Claude and other assistants | EDGEwave's MCP server lets an AI assistant search sound events, make a sound into a new event and voice lines. See [Assistants](assistants.html) |
| [EDGEkit](../edgekit/) | The EDGEkit app has EDGEwave built in. In VS Code, the EDGEkit extension pack installs it with the other EDGE tools |

EDGEwave ships no game files. It makes no network calls of its own, except to ElevenLabs when you use a voice tool.

## Status

**A preview, released.** The latest is EDGEwave 0.2.0 (2026-11-07), on the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=edgemodders.edgewave), [Open VSX](https://open-vsx.org/extension/edgemodders/edgewave), [GitHub](https://github.com/Edgemodders/EDGEwave/releases) and [Nexus Mods](https://www.nexusmods.com/cyberpunk2077/mods/35493). The first release, 0.1.0, came out on 2026-10-20. Windows only.

| | |
|---|---|
| **Works, and heard in the game** | One game sound replaced (an override). Everything an event plays replaced, and silenced, through REDmod. A new named sound played by a quest. A sound played by a REDnode package made in the game folder. An event played in the running game from VS Code. EDGEwave Voice for REDnode speaking lines |
| **Works, tested in VS Code** | The editor, the mixer, effects and presets, Render WAV. Game Assets and the Sounds view. Generate Sound, Speak Line and Re-Voice, with a real ElevenLabs account. Voice Lines with EDGEquest. The MCP server with Claude Code |
| **Built, not confirmed in the game** | A REDnode package made inside the project, installed while the game runs. An override packed as a REDmod. Swapping a sound mod into a running game: install and restart instead |
| **Not there yet** | Voice lines in the game as real dialogue: you can make and edit them, but the game needs a format (`.wem`) that only Audiokinetic's Wwise tool makes. **Translate**. Pitch without a change of speed |
| **Coming next** | Dialogue into the game through your own Wwise install (the conversion works on its own; the game has not played one yet). A Desk for sounds in progress, and sounds in the EDGE [Library](../library.html). Later, a search over all of the game's audio, with subtitles and what plays each sound |

The tests were run by hand on the developer's PC, on EDGEwave built from its source. An automated test checks the packaged extension. Each version's changes are in EDGEwave's [changelog](https://github.com/Edgemodders/EDGEwave/blob/main/CHANGELOG.md), and every test with its result is on its [Tests page](https://edgemodders.github.io/EDGEwave/testing.html).

## In this section

| Page | What it covers |
|---|---|
| [Install and set up](install.html) | What you need, installing the preview, the first start, where files go |
| [Tutorial: your first sound mod](tutorial.html) | The katana's draw sound through a radio, from finding it to hearing it in the game |
| [Find and play sounds](finding.html) | Game Assets, the filter, opening a sound, a new empty sound, the Sounds view |
| [Edit and mix](editing.html) | The editor window, the edits, tracks, effects and presets, Render WAV |
| [Into the game](into-the-game.html) | Add to Project: the routes, which to pick, how to hear the result and how to take it out |
| [Voice tools](voices.html) | Generate Sound, Speak Line and Re-Voice through ElevenLabs: the key, the cost, voice clones |
| [Voices for quests and mods](voice-lines.html) | Voice Lines for an EDGEquest quest, and EDGEwave Voice for REDnode |
| [Assistants](assistants.html) | Let Claude search sound events, make new ones and voice lines |
| [Settings and commands](settings.html) | Every setting, command, button and key |
| [Troubleshooting](troubleshooting.html) | What you see, and what to do |

## Credits

EDGEwave builds on [WolvenKit](https://github.com/WolvenKit/WolvenKit), through REDbridge, and on the [Cyberpunk 2077 modding wiki](https://wiki.redmodding.org/)'s sound guides. Its planned search is inspired by [Cyberpunk 2077 SoundDB](https://gitlab.com/cp2077-sounddb/frontend) by Zhincore. It is written from scratch from SoundDB's public documentation, uses none of its code or data, and builds its index from your own game. EDGEwave is not affiliated with CD PROJEKT RED, ElevenLabs or Audiokinetic.

## Reference

- [EDGEwave docs](https://edgemodders.github.io/EDGEwave/): the [design](https://edgemodders.github.io/EDGEwave/design.html), the [routes into the game](https://edgemodders.github.io/EDGEwave/a3-game.html) and the research behind them, and the [Tests page](https://edgemodders.github.io/EDGEwave/testing.html). They are the developer reference
- [Source and issues](https://github.com/Edgemodders/EDGEwave)
