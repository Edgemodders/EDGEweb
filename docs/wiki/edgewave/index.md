---
title: EDGEwave
nav_title: Overview
section: EDGEwave
order: 0
description: "EDGEwave, the EDGE platform's sound studio: edit, mix and re-voice Cyberpunk 2077's sounds inside VS Code, beside REDcode. In development, not released."
reviewed: 2026-10-16
---

# EDGE<span class="y">wave</span>

EDGEwave is the EDGE platform's sound studio. It is a VS Code extension that works beside [REDcode](../redcode/): REDcode finds and plays a game sound, and one button, **Open in EDGEwave**, takes it into the studio. There you cut, fade and shape the sound, and save the result into the mod you are making.

**It is in development and not released yet.** The first part, the single-sound editor, is built and being hand-tested. Getting your edited sound into the game is a later phase, so today the result is a WAV file in your project, not a working sound mod.

{% include shot.html caption="EDGEwave's sound editor" shows="A game sound open in the EDGEwave editor: the waveform with a selection, the Edits list, and the Render pane, in REDcode's HUD colours." %}

## What it's for

Cyberpunk 2077 stores its sounds in formats that ordinary audio tools can't open, packed inside the game's archives. Changing a gunshot, a menu click or a line of dialogue today means extracting it with one tool, editing it in another and converting it back with a third.

EDGEwave puts those steps in one place, next to the mod project:

- **open any game sound** straight from REDcode's sound browser or audio player;
- **edit it** with the basics: trim, cut, copy and paste, silence, fades, gain, normalize, mono or stereo, loop points;
- **keep the original safe**: your edits are a list of steps saved in a small `.edgewave` file, so you can undo, change or remove any of them later;
- **render** the result to a WAV file in your project.

Later phases add mixing, effects, getting the sound into the game, and a search over all of the game's audio (see [Roadmap](#roadmap)).

## Why you might want it

| If you... | EDGEwave gives you |
|---|---|
| Want to change how something in the game sounds | The game's own sound, opened in one click from REDcode, with no converting by hand |
| Are new to audio editing | The common edits as buttons, with undo and redo like any VS Code file |
| Share your mod's source, for example on GitHub | The `.edgewave` file lists your edits, never the audio itself, so it holds no game data and is safe to share. EDGEwave fetches the sound again from your own game when you open it |
| Make voice mods | A **Voice line** mode, with **Translate** and **Re-Voice** buttons that will reach AI voice services (planned: the buttons only say so for now) |

## How it fits into EDGE

| Toolkit | Role for EDGEwave |
|---|---|
| [REDcode](../redcode/) | Required. Owns the mod project, finds and plays game sounds, and hands them to EDGEwave with **Open in EDGEwave** (REDcode 0.9.0 and later). EDGEwave does not run without it |
| [REDbridge](../redbridge/) | Reads the game's archives and audio for REDcode, which passes the sounds on |
| [REDnode](../rednode/) | Will play sounds in the running game. This waits for REDnode's Sound API, which is planned |
| [EDGEkit](../edgekit/) | Will include EDGEwave once it is released |

## Status

As of 2026-10-16:

| Part | State |
|---|---|
| A0 Scaffold | Done 2026-10-14: the extension skeleton, docs site and design |
| A1 Edit | **Built, hand test nearly finished.** The owner's hand test passed steps 1 to 10. Two fixes followed it (Cut keeps what it cut so you can paste it, and **Open Sound in EDGEwave…** in REDcode's Project view); those two steps wait for a retest |
| Release | None yet. No `.vsix`, not on the Marketplace or Open VSX. Version 0.0.1 |

What A1 can do, once its test is complete: open a sound from REDcode or a sound file (`.wav`, `.ogg`, `.mp3`, `.flac`, `.opus`, `.wem`), listen, select, zoom and loop, apply the edits listed above, and render a WAV at a sample rate you pick. It cannot yet put the sound into the game. The **Translate** and **Re-Voice** buttons only say they are planned.

If you're comfortable building from source, [Try EDGEwave](try-it.html) shows how to run it today.

## Roadmap

In plain words. Each phase ends with a test on the developer's PC.

| Phase | What it adds | Status |
|---|---|---|
| A0 Scaffold | The project itself | Done |
| A1 Edit | The single-sound editor, render to WAV | Built, in hand test |
| A2 Mix | Layer several sounds on tracks; effects such as EQ, pitch, reverb and distortion; presets modders reach for (radio, holocall, PA speaker, muffled through a wall); a quick search to add game sounds | Planned |
| A3 Into the game | Replace a game sound effect, or add a new sound, so the edited sound plays in the game after REDcode packs the mod. Voice lines need research first | Planned |
| A4 Index | Build an index of all the game's audio from your own install, and search it: events, sounds, switches and parameters | Planned |
| A5 Voices and objects | Find dialogue by its text, with subtitles and scenes; weapons, vehicles and radio stations and the sounds they use | Planned |
| A6 EDGE | Tools for AI assistants (MCP); play a sound in the running game through REDnode | Planned. In-game parts wait for REDnode's Sound API |

**Translate** (the same line in another language) and **Re-Voice** (the same words in a different voice) will use third-party AI services. They are ideas for now, with no phase until they are defined.

## Credits

EDGEwave's search (A4) is inspired by [Cyberpunk 2077 SoundDB](https://gitlab.com/cp2077-sounddb/frontend) by Zhincore. It is written from scratch from SoundDB's public documentation, uses none of its code or data, and builds its index from your own game.

## In this section

| Page | |
|---|---|
| [Try EDGEwave](try-it.html) | Run the editor today by building it from source |

The [EDGEwave docs](https://edgemodders.github.io/EDGEwave/), with its [design](https://edgemodders.github.io/EDGEwave/design.html) and the [A1 Edit](https://edgemodders.github.io/EDGEwave/a1-edit.html) page, are the developer reference. Source and issues: [github.com/Edgemodders/EDGEwave](https://github.com/Edgemodders/EDGEwave).
