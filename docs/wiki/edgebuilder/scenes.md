---
title: Scenes and baking
section: EDGEbuilder
order: 6
description: "How EDGEbuilder keeps your work: named scenes, the Library, previews that come back by themselves, and baking a scene into the world."
reviewed: 2026-11-08
---

# Scenes and <span class="y">baking</span>

EDGEbuilder places objects in the live game as previews, keeps them in named scenes, and bakes a scene into a mod that keeps them there.

## Previews and the scene

Two things are worth telling apart:

| | What it is | Where it lives |
|---|---|---|
| **The scene** | The list of everything you placed: which asset, which appearance, where, which way round, what size, and your groups | A file in the place you chose: the [EDGE Library](../library.html), your REDcode project or EDGEbuilder's data folder. It's saved after every change |
| **Previews** | The objects you see in the game | In the running game only. They go when a save loads or the game closes, and EDGEbuilder puts the open scene's back |

The scene is the truth; previews are drawn from it. That's why EDGEbuilder can always put them back.

## What you can do today

- **Keep working across sessions.** Your scene is kept when you load a save, quit the game or update EDGEbuilder, and the one you had open opens again at the next start.
- **Get the previews back.** When a save loads, the open scene's objects come back by themselves, wherever V is, and the message line says how many. **Rebuild previews** in the Scene tab does the same by hand if any are missing.
- **Arrange it.** Groups, duplicates, copy and paste, undo and redo. See [Arranging a scene](arranging.html).
- **Start over.** **Clear scene** removes every object from the world and the scene. **Ctrl+Z** brings them back, until EDGEbuilder stops.
- **See what it needs.** When the scene uses files from mods or a REDcode project, the Scene tab says which: **This scene needs: EvilClown**.

> **Previews are only previews.** Without EDGEbuilder running, or for anyone else playing, the objects aren't there. Making them part of the world is what [Bake](#bake) is for.

{% include shot.html caption="Rebuild previews" shows="The Scene tab with objects listed as not in world, and the Rebuild previews button." %}

## Named scenes

Phase B3, **Arrange and save**, comes in two halves. The first, B3-1 Arrange, is in [Arranging a scene](arranging.html). The second, **B3-2 Save**, passed in game and was released as EDGEbuilder 0.6.7 on 2026-11-05, on game 2.5 with REDnode 0.58.0. It brings:

- **named scenes** you save and open again (the **Return** behaviour). A scene is saved after every change, as today; **Ctrl+S** confirms it and **Ctrl+Shift+S** saves a copy under a new name;
- three places to keep them: the [EDGE Library](../library.html) (a folder of your own, shared by the EDGE tools, offered at `Documents\EDGE Library`), your REDcode project's `source\scenes` folder (which REDcode 0.10.5 shows as **Scenes**), or **This PC** (EDGEbuilder's own data folder);
- a scene's objects in the world wherever V is, so you can fly to any of them and work there (this is why EDGEbuilder needs REDnode 0.58.0 or later);
- **Close**, which takes a scene's objects out of the world and leaves no scene open;
- a **Library** tab in the panel listing all three as one tree, with New scene, Save here and New folder;
- **Show in world**: another scene's objects appear beside the one you're editing, but can't be selected;
- an **Objects** drawer beside the panel listing a scene's objects: two quick clicks fly the camera to one and select it, and a trash icon deletes one after asking, wherever it is;
- your last scene, and the scenes you showed, come back when you start again, and the open scene's objects come back by themselves when a save loads;
- a way for other mods and AI assistants to ask EDGEbuilder for its scenes and their objects.

## NPCs and scenes other mods can load: planned

Phase B3c was agreed on 2026-10-23, together with [REDnode](../rednode/)'s work on world objects. It is planned to add:

- **NPCs**, picked from the game's characters, standing friendly and idle where you place them;
- **scene files REDnode can load by itself**, so another mod (a quest, for example) can bring an EDGEbuilder scene into the game without EDGEbuilder running.

REDnode's side passed in game on 2026-10-26 (REDnode 0.40.1). EDGEbuilder's side comes after Bake. Baking NPCs into the world is an open question.

## Bake

The **Bake** tab turns the open scene into part of the game world. It writes a **streaming sector** (the game's own format for a piece of the world) into your [REDcode](../redcode/) project. Once the project is packed and installed, the objects stand in Night City from the next game start, even with EDGEbuilder uninstalled.

You need a REDcode project open in VS Code, [REDbridge](../redbridge/) 0.12.1 or later (0.12.0 bakes too, but small meshes are seen only as far as the game allows for their size), and [ArchiveXL](../glossary.html) in the game. Anyone who plays your mod needs ArchiveXL too.

{% include shot.html caption="The Bake tab" shows="EDGEbuilder's Bake tab: the open scene and its object count, the REDcode project it bakes into, what the checks say, the Bake button, and the list of the project's bakes." %}

### From scene to world

1. Open the project in REDcode, and the scene in EDGEbuilder.
2. On the **Bake** tab, read what the checks say, then press **Bake**. It lists the files it wrote.
3. Quit the game. In REDcode, run **Pack and Install**, which puts the project in [EDGEdeck](../edgedeck/) and deploys it.
4. Start the game and load a save. A bake comes in only at a game start, so loading a save without restarting won't show it.

After the first install, EDGEdeck follows the project, so later bakes only need another Pack and Install.

If REDcode's **redcode.pack.redmod** setting is on, the bake installs as a REDmod, and the game must start with `-modded`. EDGEdeck's **Run game** does that for you.

### What stands, and what is solid

| Object | In the baked world |
|---|---|
| **An entity** with its own collision, such as `crate_red.ent` | Solid, and keeps its look |
| **A mesh, Solid on** | Stops V, bullets, melee and cars, stays put and keeps its look. Its collision grows with its scale. It needs collision data of its own: EDGEbuilder says which meshes have none |
| **A mesh, Solid off** | Only drawn: V, bullets and cars pass through |
| **A mesh from a mod** | Bakes too, and the Bake tab names the mod. If a player doesn't have that mod, the game doesn't crash: that object is just absent, and the rest stand |
| **A kind a bake can't make**, such as an NPC | Left out, and the tab says so |

### The Solid switch

Select one mesh, several or a group on the **Scene** tab and switch **Solid when baked** on or off. New meshes start solid; meshes already in your scenes from before 0.8.1 stay as they were until you switch them. Previews in the world are never solid, so you can walk through them while you build.

About 4 in 10 crate-sized meshes have no collision data, and can't be solid this way. The Scene tab and the Bake tab name them; an entity with its own collider, such as `crate_red.ent`, can stand in.

### Seen from

**Seen from, m** on the Scene tab sets how far off an object is seen once baked, for one object, several or a group. Left empty, it goes by the object's size: 40 m for small things, up to 400 m for big ones. A crate set to 120 shows from 120 m (measured from the camera in game). Farther costs frame rate in a full scene. Previews are seen from any distance.

### Frame rate

In the tests, 200 baked crates in one place made no measurable difference to the frame rate: about 76 fps with or without 200 solid crates seen from 120 m, and about 65 fps with or without 200 crates that only draw, at 4K on one PC. The same 200 as previews, while you edit, cost about 6 fps.

### After a bake

- **Nothing stands twice.** When a scene's bake is in the game, its previews stay off, and the tab says so. Press **Rebuild previews** on the Scene tab to edit the scene again. Each object then exists twice in the same place, the baked one and its preview, so it may flicker. Drag a preview away and you'll see the baked object stay behind. Press Ctrl+Z to put it back. The previews stay off again at the next game start.
- **Changing a baked scene.** The tab says when the scene has changed since its bake. Bake again, then Pack and Install, and restart: the objects stand in their new places, with no copies at the old ones.
- **Taking a bake out.** Press the trash icon on the bake in the tab's list, then **Yes**, then Pack and Install again. The objects leave the world and the save is fine. The scene stays. If that scene is still open, you'll keep seeing its objects as previews until you close it, since it no longer has a bake to stand in for them.
- **Renaming a baked scene.** A bake goes by the scene's name, so its bake keeps the old name. Bake again and take the old bake out, or both stand in the world. EDGEbuilder warns you before it renames.

You can bake several scenes into one project, and they all stand. They can be far apart, indoors or in Dogtown.

### What comes next

| Part | Status |
|---|---|
| Bake into a REDcode project | Passed in game, released as 0.7.3 on 2026-11-05 |
| The Solid switch and Seen from | Passed in game, released as 0.8.1 on 2026-11-08 |
| Bakes in the EDGE Library | Next: bakes from several scenes kept in the [Library](../library.html), and included in a project |

## Later

- **B5:** lights, decals, particles, effects, sounds and colliders, each placed and baked.
- **B6:** favourites, prefabs, scatter, snapping and templates.
- **B7:** working on a scene in REDcode with the game closed, then a 3D view there.

For the details, see the [design](https://edgemodders.github.io/EDGEbuilder/design.html) and the [scene format](https://edgemodders.github.io/EDGEbuilder/scene.html) on EDGEbuilder's docs site.
