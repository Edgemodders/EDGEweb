---
title: Music and sound in a quest
nav_title: Music and sound
section: EDGEquest
order: 5
description: "Music cues and sound events in an EDGEquest quest: music and sound steps, sounds in scenes, START and STOP cues, your own sounds made with EDGEwave, and the picker with its play button."
reviewed: 2026-11-04
---

# Music and <span class="y">sound</span>

A quest plays music and sounds **by the game's event names**, as the game's own quests do. You don't add sound files to play the game's own music: you name the cue.

| Where | Write | What it does |
|---|---|---|
| A beat's steps | `music: <cue>` | Starts or stops one of the game's music cues |
| A beat's steps | `sound: <event>` | Plays a sound event on V |
| A scene, between lines, or in an option | `sound: <event>` | Plays a sound event on V at that point |

```yaml
beats:
  at_home:
    objective: You're home
    steps:
      - music: mus_q104_drone_flight_01_START
      - scene: at_the_door
  look_closer:
    objective: Look at the door
    steps:
      - music: mus_q104_drone_flight_02_STOP
      - done

scenes:
  at_the_door:
    - V: Home. Something feels different.
    - sound: sa_airdrop_package_land
    - choice:
        Look closer:
          - go: look_closer
```

All of this passed in the game on 3 November 2026: a music cue from another quest started and stopped, and both a game sound and a sound of the tester's own played, from a beat and from a scene.

## Music cues

The game's quests play their music as **cues**, one per moment. A cue whose name ends in `_START` begins the music; a matching `_STOP` ends it. For example, `mus_q104_drone_flight_01_START`, then later `mus_q104_drone_flight_02_STOP`.

- **Start the music in one beat and stop it in every ending.** A cue with no stop plays on after your quest is over.
- **Cues work outside their own quest.** The q104 cues above start and stop from a new quest.
- **To find cues,** read the music steps of a game quest whose mood you like, on its [quest page](reading.html#the-quest-page).

## Sound events

Any of the game's sound events works, such as `sa_airdrop_package_land`. EDGEquest knows the game's event names. A name it doesn't know, and that isn't one of your project's own sounds, goes on the [checklist](checking.html#the-checklist).

## Your own sounds

A sound you make with EDGEwave can be a **new event of its own**, named `edgewave_<name>`. A quest plays it like any other. EDGEwave adds it to the project's `source\resources\info.json` and copies the WAV file beside it.

To hear it in the game:

1. **Switch on REDcode's setting `redcode.pack.redmod`.** Your own sounds are packed only as a REDmod. See [Packing as a REDmod](../redcode/pack-install.html#packing-as-a-redmod).
2. **Pack and Install** the project.
3. **Start the game again, with `-modded`.** REDcode's **Run Game** does this for you. The game reads custom sounds only when it starts, so loading a save isn't enough.

If the story names an `edgewave_` sound the project doesn't have, the checklist says so, and suggests making it with EDGEwave.

> **Which EDGEwave?** Making a new named sound for a project, and the picker's search and **▶**, need **EDGEwave 0.2.0**. That version is prepared but not released yet; the released one is 0.1.0. EDGEquest's own test used EDGEwave from its development branch. Until 0.2.0 is out, type a game event's name yourself.

## The picker

On the [Storyboard](writing.html#the-storyboard):

- **+ Step** has **Music** and **Sound**;
- every scene's add row has **+ Sound**;
- click a sound's name to pick another.

With EDGEwave (0.2.0) installed, the picker searches your project's own sounds first, then the game's events. **▶** plays one before you pick it:

| What | Where it plays |
|---|---|
| A sound event | At once, in VS Code |
| A music cue | In the running game, through [REDnode](../rednode/) 0.43 or later, since music lives in the game's sound banks |

Closing the picker stops the sound. Without EDGEwave, you type the name.

{% include shot.html caption="The sound picker" shows="The Storyboard's sound picker searching for q104 drone, with the project's own edgewave_ sounds listed first, game events below, and a play button beside each." %}

## Voices

Voiced lines in the game are coming: they wait for EDGEwave to put voice lines into the game. Until then, lines show as subtitles, and you can write each line's [voice prompt](story-file.html#how-a-line-is-spoken) now so it is ready.
