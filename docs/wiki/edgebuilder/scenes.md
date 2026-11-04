---
title: Scenes and baking
section: EDGEbuilder
order: 6
description: "What EDGEbuilder keeps today (one working scene, previews you rebuild), and what saving and Bake will add: named scenes and baking a scene into a mod."
reviewed: 2026-11-04
---

# Scenes and <span class="y">baking</span>

This page is honest about where things stand: EDGEbuilder places objects in the live game today, but it doesn't yet turn them into a mod that keeps them there.

## Previews and the scene

Two things are worth telling apart:

| | What it is | Where it lives |
|---|---|---|
| **The scene** | The list of everything you placed: which asset, which appearance, where, which way round, what size, and your groups | A file in EDGEbuilder's data folder. It's saved as you work |
| **Previews** | The objects you see in the game | In the running game only. They go when a save loads or the game closes |

The scene is the truth; previews are drawn from it. That's why EDGEbuilder can always put them back.

## What you can do today

- **Keep working across sessions.** The scene is kept when you load a save, quit the game or update EDGEbuilder.
- **Bring the previews back.** After a save loads, the message line says how many objects are in the scene but not in the world. Press **Rebuild previews** in the Scene tab. In the in-game test, all four objects came back in the same second, where they were, groups and all. Objects more than 300 m from V and the camera wait until you're near them.
- **Arrange it.** Groups, duplicates, copy and paste, undo and redo. See [Arranging a scene](arranging.html).
- **Start over.** **Clear scene** removes every object from the world and the scene. **Ctrl+Z** brings them back, until EDGEbuilder stops.
- **See what it needs.** When the scene uses files from mods or a REDcode project, the Scene tab says which: **This scene needs: EvilClown**.

There is **one scene** for now, the working scene. You can't name, save as, or switch between scenes yet.

> **Previews are only previews.** Without EDGEbuilder running, or for anyone else playing, the objects aren't there. Making them part of the world is what Bake is for.

{% include shot.html caption="Rebuilding after a save loads" shows="The Scene tab after loading a save: the objects listed as not in world, the message line saying how many are waiting, and the Rebuild previews button." %}

## Saving scenes: built, being tested

Phase B3, **Arrange and save**, comes in two halves. The first, B3-1 Arrange, passed in game on 2026-11-02 and is in 0.5.8: see [Arranging a scene](arranging.html). The second, **B3-2 Save**, was built on 2026-11-03 as EDGEbuilder 0.6.0. It hasn't had its in-game test yet and isn't released, so treat everything below as untested:

- **named scenes** you save and open again (the **Return** behaviour). A scene is saved after every change, as today; **Ctrl+S** confirms it and **Ctrl+Shift+S** saves a copy under a new name;
- three places to keep them: the [EDGE Library](../library.html) (a folder of your own, shared by the EDGE tools, offered at `Documents\EDGE Library`), your REDcode project's `source\scenes` folder (which REDcode 0.10.5 shows as **Scenes**), or **This PC** (EDGEbuilder's own data folder);
- a **Library** tab in the panel listing all three as one tree, with New scene, Save here and New folder;
- **Show in world**: another scene's objects appear beside the one you're editing, but can't be selected;
- an **Objects** drawer beside the panel listing a scene's objects: two quick clicks fly the camera to one and select it, and a trash icon deletes one after asking, wherever it is;
- your last scene, and the scenes you showed, come back when you start again, and the open scene's objects near you come back by themselves when a save loads;
- a way for other mods and AI assistants to ask EDGEbuilder for its scenes and their objects.

## NPCs and scenes other mods can load: planned

Phase B3c was agreed on 2026-10-23, together with [REDnode](../rednode/)'s work on world objects. It is planned to add:

- **NPCs**, picked from the game's characters, standing friendly and idle where you place them;
- **scene files REDnode can load by itself**, so another mod (a quest, for example) can bring an EDGEbuilder scene into the game without EDGEbuilder running.

REDnode's side passed in game on 2026-10-26 (REDnode 0.40.1). EDGEbuilder's side comes after Bake. Baking NPCs into the world is an open question.

## Bake: planned

Phase B4, **Bake**, is what turns a scene into a real mod. The plan:

1. You name the scene, pick a [REDcode](../redcode/) project and press **Bake**.
2. [REDbridge](../redbridge/) writes the game files that add the objects to the world: a **streaming sector** (the game's own format for a piece of the world), a streaming block that tells the game where it is, and an [ArchiveXL](../glossary.html) file that loads it.
3. REDcode packs the project into a mod, and [EDGEdeck](../edgedeck/) deploys it.
4. On the next game start, the objects are part of Night City, with EDGEbuilder off.

| Part | Status |
|---|---|
| REDbridge writing the sector from a scene | REDbridge 0.11.0 writes game 2.5 sectors. In EDGEbuilder's **bake probe** on 2026-10-30, a crate it baked loaded in game 2.5 with EDGEbuilder off, and went and came back with the street like the game's own props. The probe's ArchiveXL file was written by hand in a form REDbridge's next release writes |
| What the probe taught | A plain mesh has no collision once baked: V walks through it. An entity with a physical mesh, such as `crate_red.ent`, is solid. Each object can set how far away it stays loaded. The bake will pick solid node types |
| The Bake panel in EDGEbuilder | Not started |
| Scenes in a REDcode project | REDcode 0.10.5 shows a project's scenes. EDGEbuilder saving them there comes with B3-2 |
| Installing the baked mod with EDGEdeck | EDGEdeck can add a REDcode project as a mod already. The full loop is untested |

A baked scene will need **ArchiveXL** in the game, as every mod that adds world sectors does.

## Later

- **B5:** lights, decals, particles, effects, sounds and colliders, each placed and baked.
- **B6:** favourites, prefabs, scatter, snapping and templates.
- **B7:** working on a scene in REDcode with the game closed, then a 3D view there.

For the details, see the [design](https://edgemodders.github.io/EDGEbuilder/design.html) and the [scene format](https://edgemodders.github.io/EDGEbuilder/scene.html) on EDGEbuilder's docs site.
