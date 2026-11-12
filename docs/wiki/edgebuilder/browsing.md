---
title: Browsing and dropping
section: EDGEbuilder
order: 3
description: "Search the game's meshes and entities in EDGEbuilder, and your mods' and REDcode project's, pick an appearance, drop objects into the world, and manage them in the Scene tab."
reviewed: 2026-11-08
---

# Browsing and <span class="y">dropping</span>

**Browse** and **Drop** are the first two behaviours: find an asset in the game's own files, and put it in the world.

## Meshes and entities

The game builds its world from two kinds of asset, and fills it with people. EDGEbuilder can place all three today:

| Kind | What it is | Example |
|---|---|---|
| **Mesh** (`.mesh`) | A 3D model on its own: a shape with materials, and nothing else. Meshes can be scaled | A cargo crate, a bench, a wall panel |
| **Entity** (`.ent`) | A ready-made game object built from one or more meshes, sometimes with lights or other parts. It keeps the size its template gives it | A vending machine, an ATM |
| **NPC** | One of the game's people, from its `Character` records: crowd people and story characters alike. It stands where you put it and stays friendly to V | `Character.Judy`, CitizenRichFemale |

Lights, decals, particles, sounds and the rest are planned for a later phase (B5).

## People (NPCs)

From 0.10.9 the **NPCs** tab on the Assets tab lists the game's people, about 6,600 of them, read from the game's own records the first time EDGEbuilder starts (a few seconds) and kept after that.

- **Search** by the name the game shows ("Judy") or by the record (`Character.Judy`).
- **Pick an appearance** from the list, or leave **Any: the game picks** to let the game choose one. EDGEbuilder keeps whichever one the person got, so they look the same next time.
- **Drop** them like anything else. They stand where you put them, hold still, and stay friendly to V: walk into one and they may grumble, nothing more.
- **Move and turn** them with the gizmo or the keys. The gizmo moves on its own while you drag; the person steps to the new place when you let go. People stay upright when turned, and have no Scale, Solid or Seen from.
- **Copy, paste, group and undo** work on people as on any object.

People come back with the scene after a save loads or the game starts. They are **not baked**: a bake leaves them out (the Bake tab names them), and they show only while EDGEbuilder, or another mod that loads the scene through REDnode, runs.

## The asset index

EDGEbuilder doesn't ship a list of game files. When it first starts, it asks [REDbridge](../redbridge/) to read your game's archives and builds an **index**: every mesh and entity, about 31,500 of them, with each one's size and appearances. On the test PC that took about four seconds.

The index is saved and loads at once on later starts. It's built again when the game version changes. **Rebuild asset index** in the Settings tab builds it again by hand.

## Your mods and your project

From 0.4.1, EDGEbuilder also lists the meshes and entities in:

- **your installed mods**: the archives in the game's `archive\pc\mod` folder, and REDmod's `mods\<name>\archives`;
- **the project open in [REDcode](../redcode/)** (0.10.5 or later): its files under `source\archive`.

Mod archives are read once, and again only when one changes. A file you save into the project shows up within a few seconds. A line on the Assets tab says what was found, for example `Mods: 17 in 5 archives  |  Project MyMod: 3`, or **No REDcode project open**.

Mods you deploy with [EDGEdeck](../edgedeck/) count once they're in the game folder.

## Search

1. Open the **Assets** tab.
2. Type in the search box, for example `cargo crate`, `bench` or `vending`. From 0.3.3, typing anywhere on the Assets tab goes to the search box.
3. Narrow the list with the two rows of tabs under it:

| Tabs | Show |
|---|---|
| **All**, **Meshes**, **Entities** | Both kinds, or one |
| **Everywhere**, **Game**, **Mods**, **Project** | Everything, the game's own files, your installed mods, or the project open in REDcode |

**Mods** and **Project** list their files without a search. Typing a mod's name finds that mod's files.

Results show the file name, with tags at the right:

| Tag | Means |
|---|---|
| **mesh** or **entity** | The kind |
| **PL** | An asset from Phantom Liberty |
| A mod's name | The file comes from that mod |
| **project** and a name | The file comes from the REDcode project of that name |
| **changes a game file** | A mod's file at the same path as a game file: the mod replaces it |

Hover a result for its full path, and for a mod's file, the archive it is in. The count above the list says how many matched, in the kind's own word: `1 mesh found`, `4 entities found`, `0 assets found for "chair"`. The list stops at 120 results (the count then shows **120+**), so a longer, more exact search works better than scrolling.

{% include shot.html src="/assets/shots/edgebuilder/browsing-search.webp" caption="Searching the asset index" shows="The Assets tab with cargo crate typed in the search box, the Meshes and Everywhere tabs selected, a list of results with their tags, the count above the list and the Mods and Project line." %}

## Pick an asset

Click a result. The **Picked** panel shows:

- the asset's path in the game's files;
- its size in metres, along X, Y and Z (Z is up);
- a list of its **appearances**, when it has more than one. An appearance is a variant of the same model: other colours, labels or wear. `cargo_crate_a.mesh`, for example, has 18.

Click an appearance to use it for the next drop.

If REDbridge isn't running, the size and appearances may be missing. You can still drop the asset.

For a mod's or a project's file, the size and appearances need REDbridge 0.12.0 or later: update it with EDGEdeck's **Get REDbridge**. With 0.11.0 the Picked panel says so, and the asset drops with a 1 m box for the gizmo.

## Drop it

Press **Drop where I look**.

| With | The asset lands |
|---|---|
| EDGEbuilder's own camera ([Edit on](camera.html)) | On the first surface the camera looks at, up to 60 m away, turned to face the camera. With nothing in that range, 6 m ahead |
| Edit off, or the editor camera switched off | About 3 m in front of V, facing V |

### Drop at click

**Drop at click** beside it lets you choose the spot. Press it (it switches [Edit](positioning.html#the-edit-switch) on if it's off), then click a spot in the world. The asset lands on the surface you clicked, turned to face the camera. **Esc** or a right-click cancels, and nothing is dropped. (With REDnode older than 0.52.0, Esc leaves REDnode's interactive mode instead: use the right-click.)

After a drop, the **Scene** tab opens with the new object selected, so its numbers are at hand.

### How long a drop takes

A drop takes about half a second. The message line under the pills says how long it took. In the in-game test, crates and vending machines both landed in 0.36 to 0.44 s.

If a drop fails, nothing is added to the scene, and the message line says why.

### Files from your project

A file you made in your REDcode project isn't in the game until the project is packed and loaded. Drop it before that and the message says so; if the file has a game file's path, you see the game's version for now. REDcode's **Pack and Play** swaps the packed mod into the running game: previews that use a swapped file come back showing the new version, where they were, and stay selected.

{% include shot.html src="/assets/shots/edgebuilder/browsing-dropped.webp" caption="A dropped crate" shows="A cargo crate standing on the pavement in front of V, with the message line in the EDGEbuilder panel saying how many milliseconds the drop took." %}

## The Scene tab

Everything you drop is listed in the **Scene** tab, with its kind at the right, or **not in world** if its preview isn't in the game right now. Groups show as folders with their objects under them: see [Arranging a scene](arranging.html#groups). Above the list, a count says how many objects and groups there are, and when the scene uses files from mods or a project, a line says which: **This scene needs: EvilClown**.

Click an object in the list to select it, and Ctrl+click to add more. The game draws its own outline around the selected object, and the **Selected** panel shows its name, asset, appearance and position.

| Button | What it does |
|---|---|
| **Apply** | Moves the object to the numbers typed in the fields. See [Positioning objects](positioning.html#typing-numbers) |
| **Drop to floor** | Lowers the object onto the surface below it |
| **Delete** | Removes the selected object from the world and the scene |
| **Rebuild previews** | Puts back every object that's in the scene but not in the world. After a save loads, the open scene's objects come back without it |
| **Clear scene** | Removes every object at once |

Above the list, **Undo**, **Redo**, **Duplicate**, **Group** and **Ungroup** do what their keys do. **Delete** and **Clear scene** can be undone. See [Arranging a scene](arranging.html).

## After a save loads

Loading a save, or starting the game again, takes the previews out of the world. The scene keeps them, and they come back by themselves where they were, once the save is in. If any are missing, press **Rebuild previews** in the Scene tab. See [Scenes and baking](scenes.html).

## Try it: drop something from one of your mods

1. Open the **Assets** tab and click **Mods**. The line above the list says how many of your mods have meshes or entities.
2. Type part of a mod's name. Its files are listed, each tagged with the mod.
3. Click **All** to see both kinds: a **mesh** (a model only) and an **entity** (a game object with its own parts, such as lights, doors or collision).
4. Click a result. The **Picked** panel shows its size and appearances.
5. Press **Drop at click**, then click a spot on the ground. The object lands there, facing the camera. Esc or a right-click cancels.
6. Open the **Scene** tab. The object is listed, and the line above the list says **This scene needs:** and the mod's name. Anyone you share the scene or its bake with needs that mod too.

No mods with models installed? Do the same on the **Game** tab with `bench` or `vending machine`.
