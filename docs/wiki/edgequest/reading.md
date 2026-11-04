---
title: Reading the game's quests
section: EDGEquest
order: 2
description: "Read any of Cyberpunk 2077's quests in plain words: the Game Quests view, Find Quest, the quest and scene pages, the step trail, and Raw."
reviewed: 2026-11-04
---

# Reading the game's <span class="y">quests</span>

Reading a quest you know from playing is the quickest way to learn how the game builds quests. It also shows you the places, music cues and facts you can use in your own.

## Game Quests

The **Game Quests** view lists every quest, phase and scene in the game: the main game, Phantom Liberty and the open world's gigs. Folders carry their quest's in-game name, so you see "Pyramid Song" instead of only `sq030`.

Click a quest or phase to open its quest page, and a scene to open its scene page. The buttons at the top of the view are **Find Quest**, **Refresh** and **Check Quest Mod**.

| Word | What it means |
|---|---|
| Quest | A whole quest, as the journal shows it |
| Phase | A part of a quest: a graph of steps. Big quests have many phases, some inside others |
| Scene | A conversation or a moment: who is there, the lines, and the choices |
| Fact | A number the game keeps in your save, to remember what happened ("V met Judy" = 1) |

## Find Quest

**Find Quest...** (the search icon) finds quests and phases by any of these:

- the in-game title, such as "Pyramid Song";
- a file name, such as `sq030`;
- a fact, a journal entry, a person or a place.

Pick a result to open its page.

## The quest page

A quest page shows a quest or phase as **numbered steps in plain words**, in reading order:

- what starts it;
- what it waits for, such as V arriving somewhere or a fact changing;
- the facts it sets and tests;
- the journal entries it adds and updates;
- the scenes and phases it plays, as links;
- music and sound it plays ("Play music mus_q104_drone_flight_01_START").

At the side are the facts, journal entries, scenes, phases, people and places the quest uses. A step that checks a distance says who and what it measures between.

{% include shot.html caption="A quest page" shows="The quest page for a side quest such as sq030, Pyramid Song: numbered steps in plain words with arrow links to other steps, and the facts, journal entries, scenes and places listed at the side." %}

## The scene page

A scene page shows:

- who is in the scene;
- each line, with its speaker and text;
- each choice, with its options and where each one leads.

Options show their tags as the game does: a lifepath, an attribute check or a price, and whether the option is yellow (it moves the story on) or white.

{% include shot.html caption="A scene page" shows="A scene page from a game quest: the people in the scene at the top, lines with speaker names and subtitles, and a choice whose options show their yellow or white colour and a lifepath or attribute tag." %}

## Following a quest: the step trail

A step that leads somewhere has a link, such as **→ 12**. Click it to jump to step 12.

Each jump is added to the **trail**, a row under the page's header that stays in view as you scroll. To go back:

- click a step in the trail; or
- click **← Step** to go back to the step you clicked from.

Following a link from an earlier step starts a new trail from there. **✕** clears the trail. Each page starts with an empty trail.

This is how you can follow a whole side quest, from its phase through its scenes, without opening a single raw file. That was EDGEquest's own test for reading, and it passed on 3 November 2026.

## Raw

**Raw** opens the file in REDcode's editor, when you want to see the nodes themselves. See [Editing files](../redcode/editing.html) in the REDcode section.

## Things worth looking up

| To find | Look at |
|---|---|
| A map marker for your quest's place | The places on a quest page that sends V near where you want. Find Quest also finds a quest by a place's name |
| A music cue | The music steps of a quest whose mood you like. Cues end in `_START` and `_STOP` |
| How a choice is staged | The scene page of a conversation you remember |
| Why a quest mod misbehaves | [Check Quest Mod](checking.html#check-quest-mod) |
