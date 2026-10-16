---
title: Scenes and baking
section: EDGEbuilder
order: 5
description: "What EDGEbuilder keeps today (one working scene, previews you rebuild), and what Arrange and Bake will add: named scenes, undo, and baking a scene into a mod."
reviewed: 2026-10-16
---

# Scenes and <span class="y">baking</span>

This page is honest about where things stand: EDGEbuilder places objects in the live game today, but it doesn't yet turn them into a mod that keeps them there.

## Previews and the scene

Two things are worth telling apart:

| | What it is | Where it lives |
|---|---|---|
| **The scene** | The list of everything you placed: which asset, which appearance, where, which way round, what size | A file in EDGEbuilder's data folder. It's saved as you work |
| **Previews** | The objects you see in the game | In the running game only. They go when a save loads or the game closes |

The scene is the truth; previews are drawn from it. That's why EDGEbuilder can always put them back.

## What you can do today

- **Keep working across sessions.** The scene is kept when you load a save, quit the game or update EDGEbuilder.
- **Bring the previews back.** After a save loads, the message line says how many objects are in the scene but not in the world. Press **Rebuild previews** in the Scene tab. In the in-game test, all four objects came back in the same second, where they were.
- **Start over.** **Clear scene** removes every object from the world and the scene. There's no undo.

There is **one scene** for now, the working scene. You can't name, save as, or switch between scenes yet.

> **Previews are only previews.** Without EDGEbuilder running, or for anyone else playing, the objects aren't there. Making them part of the world is what Bake is for.

{% include shot.html caption="Rebuilding after a save loads" shows="The Scene tab after loading a save: the objects listed as not in world, the message line saying how many are waiting, and the Rebuild previews button." %}

## Arrange: planned

Phase B3, **Arrange and save**, is next on EDGEbuilder's roadmap. It is planned to add:

- groups, to keep parts of a scene together;
- selecting several objects at once;
- duplicate;
- undo and redo;
- named scene files you save and open again (the **Return** behaviour).

Its plan is still to be agreed.

## Bake: planned

Phase B4, **Bake**, is what turns a scene into a real mod. The plan:

1. You name the scene, pick a [REDcode](../redcode/) project and press **Bake**.
2. [REDbridge](../redbridge/) writes the game files that add the objects to the world: a **streaming sector** (the game's own format for a piece of the world), a streaming block that tells the game where it is, and an [ArchiveXL](../glossary.html) file that loads it.
3. REDcode packs the project into a mod, and [REDdeck](../reddeck/) deploys it.
4. On the next game start, the objects are part of Night City, with EDGEbuilder off.

| Part | Status |
|---|---|
| REDbridge writing the sector from a scene | Built in REDbridge 0.6.0 and checked outside the game. Whether the game streams it in is untested |
| The Bake panel in EDGEbuilder | Not started |
| Scenes in a REDcode project | Not started; asked of REDcode |
| Installing the baked mod with REDdeck | REDdeck can add a REDcode project as a mod already. The full loop is untested |

A baked scene will need **ArchiveXL** in the game, as every mod that adds world sectors does.

## Later

- **B5:** lights, decals, particles, effects, sounds and colliders, each placed and baked.
- **B6:** favourites, prefabs, scatter, snapping and templates.
- **B7:** working on a scene in REDcode with the game closed, then a 3D view there.

For the details, see the [design](https://edgemodders.github.io/EDGEbuilder/design.html) and the [scene format](https://edgemodders.github.io/EDGEbuilder/scene.html) on EDGEbuilder's docs site.
