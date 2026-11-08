---
title: Scenes and baking
section: EDGEbuilder
order: 7
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

## Named scenes and the Library

Every scene has a name and a place. EDGEbuilder saves the open scene after every change, opens it again at the next start, and brings its objects back when a save loads, wherever V is. Named scenes passed in game and were released in EDGEbuilder 0.6.7 on 2026-11-05.

A scene can live in one of three places:

| Place | Where it is | Good for |
|---|---|---|
| **Library** | A folder of your own, shared by the EDGE tools, offered at `Documents\EDGE Library`. Make your own folders in it. See [The EDGE Library](../library.html) | Most scenes. They're kept apart from any one mod, and you can bake them into any project |
| **Project:** and its name | The open REDcode project's `source\scenes` folder, which REDcode shows as **Scenes** | A scene that belongs to one mod and travels with its project |
| **This PC** | EDGEbuilder's own data folder | Quick tests, or when you don't want a Library |

The Library is never needed: scenes work the same in all three.

### The Scene tab's buttons

| Button or key | Does |
|---|---|
| **Open scene's name** | The open scene's name. Change it and press **Enter** to rename the scene and its file. It asks first: **Rename** or **Keep the name** |
| **Save**, or **Ctrl+S** | Confirms the scene is saved. It's saved after every change anyway |
| **Save as**, or **Ctrl+Shift+S** | A copy under a new name: the Library tab opens with the name ready; pick a folder and press **Save open scene here**. The copy becomes the open scene |
| **New** | An empty scene: the Library tab opens; type a name, pick a folder, press **New scene here** |
| **Open** | The Library tab, to pick a scene |
| **Close** | The scene's objects leave the world, and no scene is open, also at the next start. It stays saved |

The line under the name says where the scene is, for example **In Library > Alleys. Saved after every change.**

### The Library tab

The **Library** tab shows all three places as one tree: **Library** with your folders, **Project:** and the project's name while REDcode has a project open, and **This PC**. Each scene shows its object count and when it changed, and an **open** or **shown** tag.

Click a scene or a folder to pick it. The **Picked** panel under the tree then acts on it:

| Button | Does |
|---|---|
| **Open** | Opens the picked scene. Two quick clicks on a scene in the tree do the same |
| **Close** | Closes the open scene |
| **Show in world** | Shows the picked scene's objects beside the one you're editing. They can't be selected; open the scene to change it. **Hide from world** takes them away |
| **Objects** | Slides out the Objects drawer: see below |
| **Refresh** | Looks at the folders again, after you changed them outside the game |
| **Name** | The name for a new scene or folder. The line under it says where it goes: **In Library > Alleys** |
| **New scene here** | An empty scene in the picked folder, opened |
| **Save open scene here** | A copy of the open scene in the picked folder, which becomes the open scene |
| **New folder** | A folder inside the picked one. Folders are made in the Library only |
| **Bake into Library** | Bakes the picked scene into a Library bake of its own, named by **Name**. See [Bakes in the Library](#bakes-in-the-library) |

Without a Library yet, the tab says **No Library folder yet** and offers **Make the Library**, which makes `Documents\EDGE Library`. To use another folder, type it in **Library folder** on the Settings tab and press **Use this folder**.

{% include shot.html caption="The Library tab" shows="The Library tab: the tree with Library and two folders (Alleys, with Kabuki inside), scenes with their object counts and dates, one tagged open and one shown, Project: EDGEbuilder_Testing and This PC below, and the Picked panel with Open, Close, Show in world, Objects, Refresh, the Name field and New scene here, Save open scene here and New folder." %}

### The Objects drawer

**Objects** on the Library tab slides a drawer out beside the panel, listing every object of the picked scene, or of the open one. Its title names the scene.

- **Two quick clicks** on an object fly the camera to it and select it. For a scene that isn't open, they open it first.
- The **trash icon** on a row deletes that object, after asking, wherever it and the camera are. In a scene that isn't open, that delete can't be undone.

{% include shot.html caption="The Objects drawer" shows="The Objects drawer beside the EDGEbuilder panel, titled Objects: 200 Cargo Crates, its line saying 200 objects. Two clicks fly the camera to an object and select it, and the list of crates with a trash icon on each row." %}

### Try it: the Library

1. Open the **Library** tab. If it offers **Make the Library**, press it.
2. Click **Library** in the tree. Type `Alleys` in **Name** and press **New folder**.
3. Click **Alleys**. Type `Back lot` in **Name** and press **New scene here**. It opens, empty.
4. Drop a crate or two (see [Your first scene](first-scene.html)).
5. Press **Ctrl+Shift+S**. The Library tab opens with the name ready. Change it to `Back lot copy`, click **Alleys**, and press **Save open scene here**. The copy is now the open scene.
6. On the Scene tab, press **Close**. The crates leave the world.
7. On the Library tab, click **Back lot** twice quickly. It opens, and its crates come back.
8. Click **Back lot copy** and press **Show in world**. Its crates appear too, but a click on them selects nothing. Press **Hide from world**.
9. Press **Objects**. Click a crate in the drawer twice quickly: the camera flies to it and selects it.

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

About 4 in 10 crate-sized meshes have no collision data, and can't be solid this way. Under the switch, the Scene tab says so: **No collision data, so this mesh can't be solid.**, or for several, how many can't. The Bake tab names them too. An entity with its own collider, such as `crate_red.ent`, can stand in.

With several meshes selected, the line under the switch counts them, for example **3 of 4 solid.** The switch acts on all of them.

{% include shot.html caption="The Solid switch" shows="The Selected panel for one mesh with Solid when baked switched off and the line under it saying No collision data, so this mesh can't be solid., with the switch's tooltip open." %}

### Seen from

**Seen from, m** on the Scene tab sets how far off an object is seen once baked, for one object, several or a group. Left empty, it goes by the object's size: 40 m for small things, up to 400 m for big ones. A crate set to 120 shows from 120 m (measured from the camera in game). Farther costs frame rate in a full scene. Previews are seen from any distance.

Empty, the field's hint gives the distance by size, for example **40 by size**. With several objects at different distances it says **mixed**. Type metres from 5 to 2000 and press **Enter**; empty it and press **Enter** to go back to the distance by size. Small meshes need REDbridge 0.12.1 or later to be seen that far: with an older one, the Bake tab says so.

{% include shot.html caption="Seen from" shows="The Selected panel with a group of crates selected and Seen from, m reading 120, the message line saying 4 objects: seen from 120 m once baked." %}

### Frame rate

In the tests, 200 baked crates in one place made no measurable difference to the frame rate: about 76 fps with or without 200 solid crates seen from 120 m, and about 65 fps with or without 200 crates that only draw, at 4K on one PC. The same 200 as previews, while you edit, cost about 6 fps.

### After a bake

- **Nothing stands twice.** When a scene's bake is in the game, its previews stay off, and the tab says so. Press **Rebuild previews** on the Scene tab to edit the scene again. Each object then exists twice in the same place, the baked one and its preview, so it may flicker. Drag a preview away and you'll see the baked object stay behind. Press Ctrl+Z to put it back. The previews stay off again at the next game start.
- **Changing a baked scene.** The tab says when the scene has changed since its bake. Bake again, then Pack and Install, and restart: the objects stand in their new places, with no copies at the old ones.
- **Taking a bake out.** Press the trash icon on the bake in the tab's list, then **Yes**, then Pack and Install again. The objects leave the world and the save is fine. The scene stays. If that scene is still open, you'll keep seeing its objects as previews until you close it, since it no longer has a bake to stand in for them.
- **Renaming a baked scene.** A bake goes by the scene's name, so its bake keeps the old name. Bake again and take the old bake out, or both stand in the world. EDGEbuilder warns you before it renames.

You can bake several scenes into one project, and they all stand. They can be far apart, indoors or in Dogtown.

### Try it: Solid, Seen from and taking a bake out

1. Open a scene with a few meshes, and the REDcode project to bake into.
2. On the Scene tab, select one mesh and switch **Solid when baked** off. The Bake tab now says one mesh is set not solid: V walks through it.
3. Select a group, type `80` in **Seen from, m** and press **Enter**. The message says the objects will be seen from 80 m once baked.
4. Open the **Bake** tab and read the checks. Yellow ones are worth reading, and a red one stops the bake. Press **Bake**.
5. Quit, **Pack and Install** in REDcode, start the game: V walks through the one mesh and bumps into the rest.
6. To take the bake out again: on the Bake tab, press the trash icon beside it in **Bakes in this project**, then **Yes**. Quit, **Pack and Install** again, and start. The objects are gone from the world, and the scene is still in the Library.

### Bakes in the Library

A bake can also live in the [EDGE Library](../library.html), beside your scenes, instead of in one project. Making one needs no REDcode project, and it can go into any project later. One Library bake can hold several scenes. Each stays a piece of the world of its own, so it loads only near its own place.

A Library bake is a folder named `<name>.bake` in a Library folder. The Library tab's tree shows it with a **bake** tag, how many scenes it holds and its version. Pick it, and the **Picked** panel says where it is, its version and whether the open project has it, and lists its scenes. Its buttons:

| Button | Does |
|---|---|
| **Bake into Library** | On a picked scene: bakes it into a new Library bake in the same folder, named by **Name**, or by the scene if Name is empty |
| **Include in project** | Copies the bake's files into the REDcode project open in VS Code. The scenes stay in the Library, the one place you edit them. The project notes where the files came from in `source\library.json`. When the project has an older version, the button reads **Update in project to v3** (or whichever version is newest) |
| **Add open scene** | Bakes the open scene into this bake, as one more scene, and raises the version |
| **Bake again** | Bakes each of its scenes as it is now, and raises the version |
| **Delete** | Deletes the bake from the Library, after asking. The scenes stay, and so do copies already in projects |
| The trash icon by a scene | Takes that scene out of the bake, after asking, and raises the version. The scene itself stays |

**Include in project** stops when the project already has its own bake of one of the same scenes: the two would overwrite each other. Take that bake out on the Bake tab first.

In a project that includes it, the Bake tab says **from Kabuki Bakes v2** (the bake's name and version) beside each scene that came from the Library, and offers **Update to v3** when the Library has a newer version. An update also takes out a scene that has left the bake since. Baking one of those scenes straight into the project, with **Bake** on the Bake tab, makes it the project's own again.

Tags in the tree and the Picked panel warn about a Library bake:

| Tag | Means |
|---|---|
| **stale** | A scene changed since the bake: press **Bake again** |
| **scene missing** | A scene in the bake was moved or deleted. The bake still works, and **Bake again** keeps that scene as it was baked. Put the scene back, or take it out with its trash icon |
| **collides** | Another Library bake holds the same scene, so in one game it would stand twice. Picked says which |
| **in project** | The open REDcode project includes it |
| **in game** | The game loaded it at its last start |

{% include shot.html caption="A bake in the Library" shows="The Library tab: the tree with Kabuki Bakes tagged bake and in project, 2 scenes · v2, beside its scenes, and the Picked panel with its place, version and two scenes, each with a trash icon, and Include in project, Add open scene, Bake again and Delete." %}

### Try it: a bake in the Library

1. On the Library tab, pick a scene with a few objects, type `My Bakes` in **Name** and press **Bake into Library**. **My Bakes** shows in the tree, tagged **bake**, with `1 scene · v1`.
2. Open a second scene, pick **My Bakes** and press **Add open scene**. It now holds 2 scenes, at version 2.
3. Open the REDcode project, pick **My Bakes** and press **Include in project**. On the Bake tab, both scenes show **from My Bakes v2**.
4. Quit, **Pack and Install** in REDcode, and start: both scenes stand in the world.
5. Move one object in one of the scenes. **My Bakes** is tagged **stale**. Press **Bake again**: version 3. On the Bake tab, press **Update to v3**, then Pack and Install again.

### What comes next

| Part | Status |
|---|---|
| Bake into a REDcode project | Passed in game, released as 0.7.3 on 2026-11-05 |
| The Solid switch and Seen from | Passed in game, released as 0.8.1 on 2026-11-08 |
| Bakes in the EDGE Library | Passed in game, released as 0.9.0 on 2026-11-08 |
| The first public preview | Next |

## Later

- **B5:** lights, decals, particles, effects, sounds and colliders, each placed and baked.
- **B6:** favourites, prefabs, scatter, snapping and templates.
- **B7:** working on a scene in REDcode with the game closed, then a 3D view there.

For the details, see the [design](https://edgemodders.github.io/EDGEbuilder/design.html) and the [scene format](https://edgemodders.github.io/EDGEbuilder/scene.html) on EDGEbuilder's docs site.
