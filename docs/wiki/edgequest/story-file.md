---
title: The story file
section: EDGEquest
order: 4
description: "Everything an EDGEquest story file can hold: the quest, places, beats and steps, scenes and lines, choices (yellow or white, lifepath, attribute checks, payments), facts, voice prompts, and the files saving makes."
reviewed: 2026-11-04
---

# The story <span class="y">file</span>

A quest in EDGEquest is one file in your WolvenKit project: `<id>.quest.yaml`, the **story file**. It's written in YAML, a plain text format: `key: value` lines, with indentation for what belongs inside what, and `#` for a comment. The [Storyboard](writing.html#the-storyboard) edits this file for you, so you never have to type it. This page explains what it holds, so you know what the Storyboard is doing and can edit the text when you'd rather.

For the full reference, see [The story file](https://edgemodders.github.io/EDGEquest/story.html) in EDGEquest's docs.

## A whole quest

```yaml
quest: Something at the Door      # the title the journal shows
id: door_mystery                   # names the files and starts every fact
author: yourname                   # your modder name
type: side                         # side or minor
description: Go home and see what happens.

places:
  home:
    marker: quests/minor_quest/mq055_romance_apartment/01_megabuilding/judy_megabuilding/apartment

beats:
  go_home:
    objective: Go to your apartment
    marker: home
    steps:
      - arrive: home
  at_home:
    objective: You're home
    steps:
      - scene: at_the_door
  look_closer:
    objective: Look at the door
    steps:
      - done
  go_inside:
    objective: Get some rest
    steps:
      - failed

scenes:
  at_the_door:
    - V: Home. Something feels different.
    - choice:
        Look closer:
          - go: look_closer
        Go inside:
          - go: go_inside
```

In words: the quest starts when a save loads. The journal says "Go to your apartment", with a map marker on V's door. When V gets there, V says a line and the player picks an option. "Look closer" ends the quest as succeeded; "Go inside" ends it as failed.

## The quest

The lines at the top describe the quest itself.

| Key | What it is |
|---|---|
| `quest` | The title the journal shows |
| `id` | Lower case letters, digits and `_`, starting with a letter. It names the quest's files and starts every fact the quest sets. Keep it unique: two quests with the same id overwrite each other |
| `author` | Your modder name, in the same letters. The quest's files go in `mod\<author>\<id>` in the project |
| `type` | `side` (a side job) or `minor` |
| `description` | The text the journal shows under the title |

## Places

A place is a **map marker the game already has**. You name it under `places:` and use that name in the beats.

| Key | What it is |
|---|---|
| `marker` | The marker's path, as the game's journal names it. A game quest's [page](reading.html#the-quest-page) lists the places it uses |
| `area` | Optional: the trigger area V must step into, in quotes because it starts with `#` (`"#mq000_tr_vs_apartment"`). Leave it out and EDGEquest uses the area the game's own quest uses with that marker |

V arrives when V is **inside the trigger area**, as in the game's own quests, never by distance to the marker. EDGEquest knows 4,394 of the game's markers and its 10,795 quest trigger areas.

Only V's apartment door has been tried in the game so far. Other markers are made the same way.

## Beats

Under `beats:` the quest is a list of beats, in order. The first one starts the quest. Each beat has a name (lower case, digits and `_`) and these keys:

| Key | What it is |
|---|---|
| `objective` | The objective the journal shows while the beat runs |
| `marker` | Optional: a place whose map marker the objective shows |
| `steps` | What happens, in order (below) |
| `next` | Optional: the beat that follows. Without it, the next beat in the list follows. `next: none` stops there, leaving the quest open |

### Steps

| Step | What it does |
|---|---|
| `arrive: <place>` | Waits until V is inside the place's trigger area |
| `scene: <scene>` | Plays one of the story's scenes, and waits until it ends |
| `wait: <seconds>` | Waits that long |
| `set: <fact>` | Sets a fact (see [Facts](#facts)) |
| `music: <cue>` | Starts or stops a music cue (see [Music and sound](music-sound.html)) |
| `sound: <event>` | Plays a sound event on V |
| `done` | Ends the quest, succeeded. Last in its beat |
| `failed` | Ends the quest, failed. Last in its beat |

A beat that ends with `done` or `failed` is an **ending**. A quest can have several, and branches can join again before them. You never handle the branching yourself: EDGEquest builds it from the choices.

## Scenes

Scenes are listed under `scenes:` by name. A scene is a list of items, played in order:

| Item | What it is |
|---|---|
| `V: <text>` | A line V says. It shows as a subtitle |
| `choice:` | Options the player picks from (below) |
| `set: <fact>` | Sets a fact at this point |
| `sound: <event>` | Plays a sound event on V between lines |
| `go: <beat>` | Ends the scene and sends the quest to that beat. Always last in its list |

In this preview, **V is alone in scenes**, and lines play as subtitles only. People standing in a scene, phone calls and voiced lines are coming.

### How a line is spoken

A line can carry a **voice prompt**, for voicing it later with [EDGEwave](../edgewave/):

```yaml
    - V: Here it is.
      voice:
        direction: Quiet and a little unsure, thinking aloud.
        say: "[quietly] Here it is."
```

`direction` describes the delivery in plain words, for a voice actor or a text-to-speech service. `say` is the line with delivery tags in square brackets, such as `[softly]` or `[sighs]`. When EDGEquest makes the quest it adds an `id` to each voice prompt: leave it alone, since a recorded take is matched to its line by it.

Voicing lines and hearing them in the game is coming. Today, **Generate** on a line copies it for EDGEwave's **Speak Line**.

## Choices

A choice is a list of options. Each option has the text the player sees, and what happens when it's picked. The short form lists those items right under the option:

```yaml
    - choice:
        Look closer:
          - V: Huh. Same as ever.
          - go: look_closer
```

The long form gives the option a **kind**, with its items under `then:`:

```yaml
        Pay the doorman:
          pay: 500
          then:
            - V: Keep the change.
            - go: look_closer
```

An option with nothing after it (`then: []`) ends the scene, and the beat carries on with its next step.

### Kinds of options

| Key | What it does | In the game |
|---|---|---|
| `main: yes` or `main: no` | Yellow or white text. Without it, an option that goes to a beat or sets a fact is yellow, as the game marks options that move the story on | Yellow or white |
| `lifepath: corpo`, `nomad` or `streetkid` | Only a V with that lifepath sees the option | The lifepath's tag in front of it |
| `check: { body: hard }` | V needs that attribute at that level. Attributes: `body`, `intelligence`, `reflexes`, `tech` (Technical Ability), `cool`. Levels: `easy`, `medium`, `hard`, `impossible` | The attribute's tag. Passed: V's value, and the option can be picked. Failed: V's value over the number needed (`15 / 20`), dimmed and locked |
| `pay: 500` or `pay: medium` | V pays on picking it: that many eddies, or a price that grows with V's level | The price's tag. Locked when V has too little; picking it takes the money |

One kind per option. Every choice must keep at least one option open to everyone, so no V is ever stuck.

**Checks grow with V's level.** At a high level, `hard` can ask for 20, the top of the scale. For a check most players can pass, use `easy` or `medium`.

A failed check in a conversation is dimmed, with only its tag in the fail colour. That's how the game shows it in dialogue; the all-red prompt you may know is for objects, such as forcing a door.

{% include shot.html caption="Kinds of options in the game" shows="A choice in the game with five options: a yellow one, a white one, one with the Corpo lifepath tag, a dimmed Body check showing 15 / 20, and one with a 500 eddies price tag." %}

## Facts

A fact is a number the game keeps in the save. Quests use facts to remember what happened.

| Written | What it does |
|---|---|
| `set: looked` | Sets the quest's fact `looked` to 1 |
| `set: { fact: looked, to: 2 }` | Sets it to 2 |
| `set: { fact: visits, add: 1 }` | Adds 1 to it |

A fact you name belongs to your quest: EDGEquest puts the quest's id in front (`door_mystery_looked`), so two quests never share one by mistake. To set one of the game's own facts, write `game:` in front (`set: game:some_fact`). Take care with those: they change what the game itself remembers.

## The checklist

Under `todo:` at the end, EDGEquest keeps a list of what is still a stand-in, such as lines with no voice yet. See [Checking a quest](checking.html#the-checklist).

## What saving makes

| File in the project | What it is |
|---|---|
| `mod\<author>\<id>\<id>.questphase` | The quest's steps, as the game's quest nodes |
| `mod\<author>\<id>\<id>.journal` | The journal entry: title, description, objectives and map markers |
| `mod\<author>\<id>\scenes\<scene>.scene` | Each scene |
| `mod\<author>\<id>\loc\en-us\...` | The texts: subtitles and on-screen texts |
| `source\resources\<id>.archive.xl` | Tells ArchiveXL to add the quest to the game |

You don't need to open any of these. [Made Files](writing.html#saving-makes-the-quest) shows them, and opens a phase or scene in plain words.
