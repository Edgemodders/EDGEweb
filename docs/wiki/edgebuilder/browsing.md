---
title: Browsing and dropping
section: EDGEbuilder
order: 2
description: "Search the game's meshes and entities in EDGEbuilder, pick an appearance, drop objects into the world, and manage them in the Scene tab."
reviewed: 2026-10-16
---

# Browsing and <span class="y">dropping</span>

**Browse** and **Drop** are the first two behaviours: find an asset in the game's own files, and put it in the world.

## Meshes and entities

The game builds its world from two kinds of asset that EDGEbuilder can place today:

| Kind | What it is | Example |
|---|---|---|
| **Mesh** (`.mesh`) | A 3D model on its own: a shape with materials, and nothing else. Meshes can be scaled | A cargo crate, a bench, a wall panel |
| **Entity** (`.ent`) | A ready-made game object built from one or more meshes, sometimes with lights or other parts. It keeps the size its template gives it | A vending machine, an ATM |

Lights, decals, particles, sounds and the rest are planned for a later phase (B5).

## The asset index

EDGEbuilder doesn't ship a list of game files. When it first starts, it asks [REDbridge](../redbridge/) to read your game's archives and builds an **index**: every mesh and entity, about 31,500 of them, with each one's size and appearances. On the test PC that took about four seconds.

The index is saved and loads at once on later starts. It's built again when the game version changes. **Rebuild asset index** in the Settings tab builds it again by hand.

## Search

1. Open the **Assets** tab.
2. Type in the search box, for example `cargo crate`, `bench` or `vending`.
3. Narrow the list with the **All**, **Meshes** and **Entities** tabs under it.

Results show the file name, with the kind at the right. **PL** before the kind marks an asset from Phantom Liberty. Hover a result for its full path. The count above the list shows how many matched. The list stops at 120 results (the count then shows **120+**), so a longer, more exact search works better than scrolling.

{% include shot.html caption="Searching the asset index" shows="The Assets tab with 'cargo crate' typed in the search box, the Meshes tab selected, a list of results with their kinds, and the count above the list." %}

## Pick an asset

Click a result. The **Picked** panel shows:

- the asset's path in the game's files;
- its size in metres, along X, Y and Z (Z is up);
- a list of its **appearances**, when it has more than one. An appearance is a variant of the same model: other colours, labels or wear. `cargo_crate_a.mesh`, for example, has 18.

Click an appearance to use it for the next drop.

If REDbridge isn't running, the size and appearances may be missing. You can still drop the asset.

## Drop it

Press **Drop where I look**.

| With | The asset lands |
|---|---|
| EDGEbuilder's own camera ([Edit on](camera.html)) | On the first surface the camera looks at, up to 60 m away, turned to face the camera. With nothing in that range, 6 m ahead |
| Edit off, or the editor camera switched off | About 3 m in front of V, facing V |

A drop takes about half a second. The message line under the pills says how long it took. In the in-game test, crates and vending machines both landed in 0.36 to 0.44 s.

If a drop fails, nothing is added to the scene, and the message line says why.

{% include shot.html caption="A dropped crate" shows="A cargo crate standing on the pavement in front of V, with the message line in the EDGEbuilder panel saying how many milliseconds the drop took." %}

## The Scene tab

Everything you drop is listed in the **Scene** tab, with its kind at the right, or **not in world** if its preview isn't in the game right now.

Click an object in the list to select it. The game draws its own outline around the selected object, and the **Selected** panel shows its name, asset, appearance and position.

| Button | What it does |
|---|---|
| **Apply** | Moves the object to the numbers typed in the fields. See [Positioning objects](positioning.html#typing-numbers) |
| **Drop to floor** | Lowers the object onto the surface below it |
| **Delete** | Removes the selected object from the world and the scene |
| **Rebuild previews** | Puts back every object that's in the scene but not in the world, for example after a save loads |
| **Clear scene** | Removes every object at once |

> **There's no undo yet.** **Delete** and **Clear scene** act at once. Undo and redo come with Arrange (B3).

## After a save loads

Loading a save, or starting the game again, takes the previews out of the world. The scene keeps them. EDGEbuilder's message line says how many objects are waiting: press **Rebuild previews** in the Scene tab and they come back where they were. See [Scenes and baking](scenes.html).
