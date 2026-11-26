---
title: Sound
nav_title: Sound
section: EDGEdir
order: 11
description: "EDGEdir's audio tracks: a clip is a sound file kept with the scene, or one of the game's own sounds by name. Adding sounds, trimming and fading them, what the preview plays, and what happens in the game."
reviewed: 2026-11-26
---

# <span class="y">Sound</span>

**EDGEdir is not released yet.** This page describes what is built on its `main`, for review before the first release; see the [Overview](./) for what has been tested.

A scene can have sound. A clip on an **audio track** is one of two things: a **sound file** of your own, such as a spoken line or a piece of music, or one of **the game's own sounds**, named by its sound event.

**Not tested yet.** Sound was built on 2026-11-26 (EDGEdir 0.0.33, EDGE Director 0.7.0). It has not been run in VS Code or in the game. Its page was looked at in a plain browser, and EDGE Director's part ran against a stand-in for the game.

| On this page | |
|---|---|
| [Add a sound file](#add-a-sound-file) | |
| [Trim, volume and fades](#trim-volume-and-fades) | |
| [Add a game sound](#add-a-game-sound) | |
| [In the preview](#in-the-preview) | |
| [In the game](#in-the-game) | |

## Add a sound file

1. **Add Track**, then **Audio**. A scene can have several audio tracks.
2. Select the track and put the playhead where the sound should start.
3. Click **Add Sound File** and pick a WAV, OGG, MP3 or FLAC. Double-clicking an empty place on the lane does the same.

The clip is as long as the file and shows its waveform. EDGEdir **copies the file** into a folder named `audio` beside the scene's file, so the scene still plays when your first file moves. On the Desk that folder is inside the scene's own folder: renaming or deleting the scene takes its sounds along. Adding the same file twice keeps one copy.

The scene must be saved once before a sound file can be added.

## Trim, volume and fades

Drag a clip's edge to play less of the file. The start edge moves the point the sound starts from; both edges stop at the file's ends. **Split** (S) cuts the file with the clip.

Select a clip for its fields:

| Field | Means |
|---|---|
| **Volume** | From 0 to 2. 1 is as recorded |
| **Fade in (s)**, **Fade out (s)** | Seconds the sound takes to come up at its start and die away at its end. Together they cannot be longer than the clip |
| **Follows** | Which of the game's volume sliders the sound obeys: sound effects, dialogue or music |

If the file is no longer in the scene's `audio` folder, the clip says so. It is then silent, and left out of the game.

## Add a game sound

Click **Add Game Sound**. With [EDGEwave](../edgewave/) installed you get its list of the game's sound events: type words of a name and pick one. Without EDGEwave you type the event's name.

| | |
|---|---|
| The clip's length | Yours to set. The sound is started at the clip's start and stopped at its end. When EDGEwave's list knows how long a sound is, the clip starts at that length |
| **Hear** | Plays one recording of the sound in VS Code, through EDGEwave |
| **Change Game Sound...** | Picks another sound for the clip |
| Volume and fades | Not used: a game sound plays at the game's own volume |

The game does not say when it does not know a name. It then plays nothing.

## In the preview

Press Space: every sound file is heard as the playhead reaches its clip, in time with the actors. Starting inside a clip starts the sound from that point of the file. Dragging the playhead is silent.

A game sound is **not** heard when the preview plays. Its clip is hatched and says so. Use **Hear**, or play the scene in the game.

## In the game

EDGE Director plays a scene's sounds with its actors and its weather.

| When | What happens |
|---|---|
| A sound file's clip starts | The file plays from the clip's start point, with its volume and fade in |
| Its clip ends | The sound fades out, or stops |
| A game sound's clip starts and ends | The sound is started, on V, and stopped |
| **Pause** | The sounds stop. **Resume** starts each again from where the scene stands |
| The playhead is dragged | The sounds start again from there |
| **Stop** | Every sound fades out |

Things to know:

| | |
|---|---|
| Every sound is flat | It is heard as if at V, wherever the actors are. A sound has no place in the world yet |
| A game menu | A sound file pauses while a menu is open and the scene's clock does not, so after a menu the sound runs behind |
| A missing file | It is left out, a note says which, and the rest of the scene plays |
| It needs EDGE Director 0.7.0 | An older one plays the scene without its sounds |

A scene with sounds and no actors plays too. A muted audio track is left out of the game.
