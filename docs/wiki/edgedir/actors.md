---
title: Actors and animations
nav_title: Actors and animations
section: EDGEdir
order: 4
description: "Choosing who acts on a track from the game's characters or V, the Animations view with its search and filters, putting an animation on a track, why an animation must fit the actor's rig, and animations made in REDcode."
reviewed: 2026-11-27
---

# Actors and <span class="y">animations</span>

**EDGEdir is not released yet.** This page describes what is built on its `main`, for review before the first release; see the [Overview](./) for what has been tested.

An **actor** is a character of the game chosen for a track. An **animation** is one movement from the game's files. A clip on an actor's track gives one to the other: this person does this, from here to here. Both come from your own game, read once: see [Read the game](install.html#read-the-game).

| On this page | |
|---|---|
| [Actors](#actors) | Choosing a character, or V |
| [Animations](#animations) | The Animations view, search and filters |
| [Putting an animation on a track](#putting-an-animation-on-a-track) | |
| [The rig rule](#the-rig-rule) | Why some animations do not fit |
| [Made animations](#animations-made-in-edgefab) | Clips made in REDcode |

## Actors

Select an actor track and click **Choose Actor...** in the inspector.

| In the list | |
|---|---|
| The game's characters | About 6,600. Named people come first, then the rest by their record's name. Type any part of a name |
| **V (the player)** | On top, once for each body. A scene has V once at most |
| An appearance | Most characters have several looks. A second list offers them; "Any" lets the game pick |

{% include shot.html src="/assets/shots/edgedir/actors-picker.png" caption="Choosing an actor" shows="The Choose Actor list in VS Code before anything is typed: V on top in two bodies, then characters of the game, each with its record name." %}

The inspector then shows the actor, their **record** (the game's name for the character), appearance and **rig** (their skeleton). **Change Actor...** swaps in someone else and keeps the track's clips.

V in a scene:

| Where | What happens |
|---|---|
| The preview | V shows as the game's base body for V's rig, without a head: your V's own head and looks cannot be read from the game's files |
| The game | **V does not play in the game yet.** V's track is left out, and EDGEdir says so before it plays. REDnode tried it in the game on 2026-11-23: V can be put into the game's own player poses, but the animations of the game's other people do not play on V, whose skeleton is another one. So V will need animations made for V's own skeleton; how EDGEdir offers that is not designed yet |

## Animations

The **Animations** view lists what EDGEdir read from your game.

| Group | Holds |
|---|---|
| **Game** | The game's animation files, about 14,000, by folder. Open a file to see the animations in it, each with its length |
| **Project** | Animations made in REDcode in the open REDcode project |
| **Library** | Made animations kept in your EDGE Library |

{% include shot.html src="/assets/shots/edgedir/animations-view.png" caption="The Animations view" shows="The Animations view with a search typed: a list of the game's animations that match, each with its length and its file. A + shows at the right of a row when the mouse is over it." %}

| In the view's title bar | Does |
|---|---|
| **Search Animations...** | Lists animations whose name or file has every word you type, in any order. **Clear the Search** goes back to the folders |
| **Only What Fits the Selected Actor** | Hides animations made for another rig than the selected track's actor |
| **Only the Selected Actor's Own Files** | Shows only the animation files that actor's character carries in the game: the movements the game itself gives them |
| **Refresh**, **Read the Game Again** | Looks again; reads everything again after a game update |

Right-click an animation for **Copy Animation Name** and **Copy Path**.

## Putting an animation on a track

Select an actor's track, put the playhead where the clip should start, and click the **+** on an animation (**Add to Track**). The clip lands at the playhead, or at the first free moment after it, as long as the animation. It is selected, so its numbers are in the inspector at once: see [An animation clip's numbers](editor.html#an-animation-clips-numbers).

Dragging an animation from the view onto a lane is not built; **+** is the way.

## The rig rule

Every animation is made for one **rig**, a skeleton. Most women of the game share one, most men another, and children, big bodies and others have their own. An animation plays only on an actor with its rig.

| When | What you see |
|---|---|
| You add an animation made for another rig | The clip lands on the track hatched red, and the inspector says **Unfit** and why. It does not play |
| You change the actor to one with another rig | The track's clips stay, hatched red and unfit. They do not play on this actor, in the preview or the game. Nothing is removed |
| You change the actor back, or to anyone with the first rig | The clips play again |

Turning on **Only What Fits the Selected Actor** keeps unfit animations out of sight.

## Made animations {#animations-made-in-edgefab}

[REDcode](../redcode/) is the EDGE tool that makes and edits single animations, from a file or from words. A clip it stores in the open project shows here under **Project**, and goes onto a lane with **+** like the game's; one kept in your EDGE Library is meant to show under **Library**.

Two limits for now. A clip REDcode made in a project was read and put on a track in a test by script on 2026-11-27; **a Library clip REDcode made has not been tried** (only a hand-written one). And **a made animation does not play in the game from EDGEdir yet**: EDGEdir leaves such a clip out of the game and says so, and the clip before it goes on.
