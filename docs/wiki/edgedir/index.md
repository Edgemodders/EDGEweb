---
title: EDGEdir
nav_title: Overview
section: EDGEdir
order: 0
description: "EDGEdir, a director's tool for Cyberpunk 2077: lay out what the game's people do over time on a timeline in VS Code, watch it in 3D, and play and adjust it in the running game with EDGE Director. What it is, what it can do, and where it stands."
reviewed: 2026-11-26
---

# EDGE<span class="y">dir</span>

EDGEdir is a director's tool for Cyberpunk 2077. You make a **scene**: a timeline that says what each person does, and when. You pick the game's own characters as **actors**, give them the game's own **animations** as clips, join the clips so they move as one, and watch it all in a 3D view. Then you play the scene in the running game, on real people, where it belongs.

It has two halves that work on the same scene:

| | EDGEdir, in VS Code | EDGE Director, in the game |
|---|---|---|
| Is | The editor: the timeline, the clips, the 3D preview | A window in the game: the same scene, on real people, in its real place |
| Best at | Building a scene: choosing animations, timing, transitions | Seeing it, and putting things right where they stand |

You don't write code for any of this.

**EDGEdir is not released yet.** It is built and its tests in VS Code have passed. In the game, only the first steps have run so far: EDGE Director played a scene of two people through on 2026-11-20. This section describes what is built; where something is untested, it says so. To try it now you build it from its source: see [Install and set up](install.html).

{% include shot.html src="/assets/shots/edgedir/overview.png" caption="EDGEdir's scene editor" shows="The scene editor: the 3D preview on top with two actors' bodies mid-animation, the transport and the toolbar under it, the timeline with one lane for each actor and their clips, and the inspector on the right." %}

| On this page | |
|---|---|
| [What it's for](#what-its-for) | Why a scene is hard to make by hand |
| [What it can do](#what-it-can-do) | The features, each with its page |
| [Words you'll meet](#words-youll-meet) | Scene, track, clip, actor, mark and the rest |
| [How it fits into EDGE](#how-it-fits-into-edge) | What it needs from the other tools |
| [Status](#status) | What is built, what was tested, what is not |
| [In this section](#in-this-section) | Every page |

## What it's for

The game has about 6,600 characters and about 147,000 animations. Making a person stand somewhere and do three things in a row, in time with someone else, normally means writing game files by hand and restarting the game to see each try.

EDGEdir reads the characters and animations from your own game and lets you lay them out on a timeline, as a video editor lays out film. The 3D preview shows the result at once, with no game running. When it looks right, **EDGE Director** plays it in the game: it spawns the people, starts each on their first animation, and moves each to their next one on time.

## What it can do

| You can | Where |
|---|---|
| **Make a scene** as a timeline with tracks and clips: move, trim, split, copy, undo | [The scene editor](editor.html) |
| **Pick actors** from the game's characters, and V | [Actors and animations](actors.html#actors) |
| **Find animations** by name among the game's, and put them on an actor's track | [Actors and animations](actors.html#animations) |
| **Watch it in 3D**: each actor's body plays the clip under the playhead | [The 3D preview](preview.html) |
| **Place the actors**: where each stands and which way they face | [The 3D preview](preview.html#marks) |
| **Join clips** with a transition, so two animations view as one movement | [Transitions and sequences](transitions.html) |
| **Reuse a run of clips** as a sequence, on any actor with the same skeleton | [Transitions and sequences](transitions.html#sequences) |
| **Use a stage**: play a scene on an [EDGEbuilder](../edgebuilder/) scene, with its props and people | [Sets](sets.html) |
| **Play it in the game**, from VS Code or from a window in the game | [Playing in the game](director.html) |
| **Adjust it in the game**: move an actor to where V stands, nudge and turn them, fix the scene to a spot | [Adjusting and pins](adjust.html) |
| **Name places** with pins, and have actors and the scene follow them | [Adjusting and pins](adjust.html#pins) |
| **Change the weather** for part of a scene | [Weather](weather.html) |
| **Add sound**: your own sound files, and the game's own sounds | [Sound](sound.html) |

Not built yet: camera tracks, packing a scene into a mod other players install, and V acting in a scene in the game. The timeline already has tracks for them, which hold named blocks for now.

## Words you'll meet

| Word | Means |
|---|---|
| **Scene** | One timeline: who does what, and when. A file ending in `.edgedir` |
| **Track** | One lane of the timeline. An **actor track** is one person; there are also audio, camera, weather, script, video and AI tracks |
| **Clip** | A block on a track. On an actor's track a clip is one animation, played for as long as the block is |
| **Actor** | A character of the game chosen for a track, or V |
| **Animation** | One movement from the game's files, such as a wave or a walk |
| **Rig** | A character's skeleton. An animation is made for one rig, and plays only on actors with that rig |
| **Mark** | Where an actor stands in the scene and which way they face: metres right and forward of the scene's middle, and a turn in degrees |
| **Transition** | A short block over the join between two clips that blends one into the other |
| **Sequence** | A run of clips with their transitions, stored by itself and reused |
| **Set** | The stage a scene plays on: an EDGEbuilder scene, with its props and people |
| **Pin** | A named place in the world, dropped where V stands. [REDnode](../rednode/)'s world pins |
| **The Desk** | Where EDGEdir keeps the scenes you are working on, on this PC |
| **EDGE Director** | EDGEdir's app in the game. It plays and adjusts scenes there |

## How it fits into EDGE

| It needs | For |
|---|---|
| [REDbridge](../redbridge/) | Reading your game's characters and animations, and the bodies for the 3D preview. [REDcode](../redcode/) installs it; EDGEdir can also use its own copy |
| [REDnode](../rednode/) in the game | EDGE Director is a REDnode app. REDnode spawns the people, plays their animations and sets the weather |
| [EDGEbuilder](../edgebuilder/), optional | Making a set: the props and people a scene plays among |
| [EDGEdeck](../edgedeck/) or Vortex, optional | Installing EDGE Director's file into the game |

## Status

**Version 0.0.33 with EDGE Director 0.7.0, not released (2026-11-26).**

| Part | Built | Tested |
|---|---|---|
| The scene editor, the Desk | Yes | In VS Code, by script: every step passed |
| Actors, the animation search, animations as clips | Yes | In VS Code, by script: every step passed |
| The 3D preview, marks | Yes | In VS Code, by script: every step passed |
| Transitions and sequences | Yes | In VS Code, by script: every step passed |
| Sets | Yes | In VS Code, by script: every step passed, with a hand-written set file. Not yet with a scene EDGEbuilder itself saved |
| Play in Game from VS Code | Yes | In VS Code against a stand-in for the game: passed. **Not in the game** |
| EDGE Director's window: opening and playing a scene | Yes | By script against a stand-in for the game: 12 of 13 steps passed, and the one miss (a scene played from VS Code was not marked In the game) was fixed in 0.6.1 and passed when run again. **In the game, 2026-11-20:** it started, listed the Desk, and played two people through, on time and on the right sides. Pause, the playhead, Loop and the rest are not run there yet |
| EDGE Director: adjust, pins | Yes | By script against a stand-in for the game, with VS Code open beside it: every step passed. Pins in the scene editor: every step passed. **Not in the game** |
| Weather | Yes | In VS Code and against a stand-in, by script: 8 of 11 steps passed, and the three misses (a weather clip's inspector had no In the game lines) were fixed in 0.0.30 and passed when run again. **Not in the game** |
| Sound | Yes, on 2026-11-26 | **Not tested yet**, in VS Code or in the game. Its page was looked at in a plain browser, and EDGE Director's part ran against a stand-in |
| Camera | No | |
| Packing a scene into a mod | No | |

"By script" means a Claude session ran the test's steps with real mouse and key presses, in a VS Code window or in EDGE Director's page in a browser; nobody watched. A "stand-in" runs EDGE Director's own code with no game and prints each thing it would ask the game to do. The owner's own tests by hand, and everything in the game, are still to come. The full record is on [EDGEdir's Tests page](https://edgemodders.github.io/EDGEdir/testing.html).

What is known not to match yet between the preview and the game is listed on [Playing in the game](director.html#what-the-game-will-not-match).

## In this section

| Page | What it covers |
|---|---|
| [Install and set up](install.html) | What you need, building it from source for now, and EDGE Director in the game |
| [Your first scene](first-scene.html) | A walk-through: one actor, two animations, a transition, the preview |
| [The scene editor](editor.html) | The timeline, clips, the transport, the inspector, the Desk, keys |
| [Actors and animations](actors.html) | Choosing actors, reading the game, searching animations, the rig rule |
| [The 3D preview](preview.html) | The view, the bodies, marks |
| [Transitions and sequences](transitions.html) | Joining clips, and reusing a run of them |
| [Sets](sets.html) | Playing a scene on an EDGEbuilder scene |
| [Playing in the game](director.html) | EDGE Director's window, Play in Game, what the game will not match |
| [Adjusting and pins](adjust.html) | Moving actors and the scene in the game, and named places |
| [Weather](weather.html) | The weather track |
| [Sound](sound.html) | Audio tracks: sound files and the game's own sounds |
| [Settings, commands and keys](settings.html) | Every setting, command, view and key |
| [Troubleshooting](troubleshooting.html) | When something does not work |
