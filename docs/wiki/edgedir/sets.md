---
title: Sets
nav_title: Sets
section: EDGEdir
order: 7
description: "Playing an EDGEdir scene on a set, an EDGEbuilder scene with its props and people: the Sets view, a new scene on a set, how the scene follows the set, what shows in the preview, and what happens in the game."
reviewed: 2026-11-18
---

# <span class="y">Sets</span>

A **set** is the stage a scene plays on. It is a scene made in [EDGEbuilder](../edgebuilder/): props, lights and people placed in the world. The two tools both say "scene" and mean two halves of one thing:

| | EDGEbuilder's scene | EDGEdir's scene |
|---|---|---|
| Is | The stage: what is there, and where | The direction: what the people do, and when |
| In EDGEdir it is called | A **set** | A **scene** |

One set can have many scenes: the same alley, directed three ways.

{% include shot.html src="/assets/shots/edgedir/sets-editor.png" caption="A scene on a set" shows="The scene editor with a scene on a set: the set's props stand in the 3D preview as grey boxes around the two actors, and the inspector's Set section names the set and counts its people and props." %}

| On this page | |
|---|---|
| [Where sets are found](#where-sets-are-found) | |
| [A new scene on a set](#a-new-scene-on-a-set) | |
| [How the scene follows the set](#how-the-scene-follows-the-set) | |
| [In the preview](#in-the-preview) | |
| [In the game](#in-the-game) | |

## Where sets are found

The **Sets** view lists EDGEbuilder scenes (files ending in `.scene.json`) from two places:

| Place | |
|---|---|
| Your EDGE Library | Any folder of it. Save a scene to the Library in EDGEbuilder |
| The open REDcode project | Its `source/scenes` folder |

Each row shows the set's name and how many people it has. Scenes EDGEbuilder keeps only for itself ("This PC") are not listed: save them to the Library or the project first. **Refresh Sets** looks again.

## A new scene on a set

Click the **+** on a set (**New Scene on This Set**). EDGEdir makes a scene on the Desk and opens it, with one actor track for each person of the set, already standing where the set has them. The tracks are empty: a person with no clips stands idle.

A scene that has no set can be given one later, and a set can be taken off: **Choose Set...** and **Remove Set** are in the inspector's **Set** section. Tracks you added yourself stay.

You can also add actors who are not in the set. They stand at a [mark](preview.html#marks) you type, and EDGEdir never writes them into the set.

## How the scene follows the set

EDGEdir reads a set and never changes it. People and props are placed and moved in EDGEbuilder.

| When | What happens |
|---|---|
| A person was moved in EDGEbuilder | Their actor's mark moves when the scene is next opened. It is one step that Undo takes back |
| A person was added to the set | The inspector's Set section offers to add them, as a new track each |
| A person was removed | Their track says so and keeps its clips and its place |
| The set's file cannot be found | The scene opens, says the set is missing, and keeps the places it last read |

An actor placed by the set cannot be moved in EDGEdir: the inspector shows their mark as plain numbers and says to move the person in EDGEbuilder.

## In the preview

Each person stands at their place from the set, facing as placed. Each prop shows as a grey box of its size. The props' real shapes are not drawn yet.

## In the game

A scene on a set plays **where the set is** in the world, not in front of V. When it plays, EDGE Director loads the set's props and its other people, and spawns the people the scene directs at their places. **Stop** removes all of it.

This has run only against a stand-in, not in the game, and only with a set file written by hand in EDGEbuilder's format. Treat it as untested.
