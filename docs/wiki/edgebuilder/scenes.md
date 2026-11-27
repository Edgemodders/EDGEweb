---
title: Scenes and the Library
section: EDGEbuilder
order: 7
description: "How EDGEbuilder keeps your work: previews and scenes, the three places a scene can be kept, the Scene tab, Bring V, the Library tab and its drawer, the Objects drawer, and giving a scene to someone else."
reviewed: 2026-11-27
---

# Scenes and the <span class="y">Library</span>

EDGEbuilder keeps everything you place in a **scene**, saves it after every change, and opens it again the next time you play. This page is about keeping scenes. Turning one into a mod is on the next page, [Baking](baking.html).

| On this page | |
|---|---|
| [Previews and scenes](#previews-and-scenes) | What is saved, and what you see |
| [Where a scene is kept](#where-a-scene-is-kept) | Library, Project or This PC |
| [The Scene tab](#the-scene-tab) | The open scene: its name, its objects, the Selected Object panel, Bring V |
| [The Library tab](#the-library-tab) | Every scene you have, as one tree, in the window or in a drawer |
| [The Objects drawer](#the-objects-drawer) | A scene's objects as a list, each with a 3D card |
| [Try it](#try-it-the-library) | Folders, copies, open and close, a card, Bring V |
| [Giving a scene to someone else](#giving-a-scene-to-someone-else) | |
| [Scenes with people](#scenes-with-people) | And a note for mod makers |

## Previews and scenes

Two things are worth telling apart:

| | What it is | Where it lives |
|---|---|---|
| **The scene** | The list of everything you placed: which asset, which appearance, where, which way round, what size, and your groups | A file on your disk. It's saved after every change |
| **Previews** | The objects you see in the game | In the running game only. They go when a save loads or the game closes |

The scene is the record, and the previews are drawn from it. That's why EDGEbuilder can always put them back:

- **When a save loads**, the open scene's objects come back by themselves a moment later, wherever V is. The message line says how many.
- **At the next game start**, the scene you had open opens again.
- **If any are missing**, press **Rebuild previews** on the Scene tab.

> **Previews are only previews.** Without EDGEbuilder running, or for anyone else playing, the objects aren't there. Making them part of the world is what [baking](baking.html) is for.

{% include shot.html src="/assets/shots/edgebuilder/scenes-rebuild.webp" caption="Rebuild previews" shows="The Scene tab with objects listed as not in world, and the Rebuild previews button." %}

<a id="named-scenes-and-the-library"></a>

## Where a scene is kept

Every scene has a name and a place. There are three places:

| Place | Where it is | Good for |
|---|---|---|
| **Library** | A folder of your own, shared by the EDGE tools: `Documents\EDGE Library` unless you choose another. You can make folders in it. See [The EDGE Library](../library.html) | Most scenes. They're kept apart from any one mod, and you can bake them into any project |
| **Project:** and its name | The open REDcode project's `source\scenes` folder, which REDcode shows as **Scenes** | A scene that belongs to one mod and travels with its project |
| **This PC** | EDGEbuilder's own data folder | Quick tests, or when you don't want a Library |

The Library is never required. Scenes work the same in all three.

**Before you name a scene.** On a fresh install, EDGEbuilder opens a scene called **Working scene**, kept on This PC, so your first drops have somewhere to go. Make a named scene when you want to keep something: see [Try it](#try-it-the-library).

**With no scene open.** After **Close**, no scene is open. A drop then does nothing, and the message says **No scene is open: open one or make one on the Library tab.**

## The Scene tab

The **Scene** tab shows the open scene. From top to bottom:

| Part | What it's for |
|---|---|
| **Open scene's name** | A field holding the open scene's name. To rename the scene and its file, change the name and press **Enter**. It asks first: **Rename** or **Keep the name** |
| The line under it | Where the scene is, for example **In Library > Alleys. Saved after every change.** |
| **Save**, **Save as**, **New**, **Open**, **Close**, and **Bring V** at the right | See the next table |
| The count | What the scene does to the world, how many groups, and how many are selected: **5 added, 2 removed, 1 group; 3 selected** means five objects of yours and two of the game's own removed |
| **World edits** | Shown when the scene removes some of the game's own objects or keeps a door open, closed or locked: each one, with **Restore** to put it back. See [Removing the game's doors](doors.html) |
| **This scene needs:** | Shown when the scene uses files from mods or a REDcode project. It names them. Without that mod installed, those objects can't be placed |
| **Undo**, **Redo**, **Duplicate**, **Group**, **Ungroup** | The same as their keys. See [Arranging a scene](arranging.html) |
| **Objects** and the list | Every object, with its kind, and at the far right an eye and a bin. Groups show as folders. See [The object list](#the-object-list) |
| The **Selected Object** panel | The selected object's name, asset and numbers, and the buttons that act on it. Before 0.14.0 it was called **Selected** |

The scene buttons:

| Button or key | Does |
|---|---|
| **Save**, or **Ctrl+S** | Confirms the scene is saved. It's saved after every change anyway |
| **Save as**, or **Ctrl+Shift+S** | Makes a copy under a new name. The Library tab opens with the name ready: pick a folder and press **Save open scene here**. The copy becomes the open scene |
| **New** | Starts an empty scene. The Library tab opens: type a name, pick a folder, press **New scene here** |
| **Open** | Goes to the Library tab, to pick a scene |
| **Close** | Takes the scene's objects out of the world and leaves no scene open. Nothing is deleted: the scene is still saved. EDGEbuilder will not reopen it at the next start |
| **Bring V** | With EDGEbuilder's own camera, V stands on the floor under the camera, facing the way it looks, so you can try what you placed as V (0.14.0). Edit stays on: switch it off to play V there. With V's own camera, or no floor within 300 m below, the message says why and V stays |

### The object list

Above the list is the **Objects** title.

| Do | What happens |
|---|---|
| One click on an object's row | Selects it. **Ctrl+click** adds more |
| Two quick clicks | Edit goes on, the camera flies to the object, and it is selected (0.14.0) |
| The **eye** at the far right of a row | Shows the object's card to the left of the window: the object in 3D as it is in the scene, its size at its scale, look, Solid, Seen from and place, and **Drop a copy**. The eye again hides it. A group's row has no eye |
| The **bin** at the far right of a row | The row asks **Delete?** with **Yes** and **No**. Yes deletes the object; **Ctrl+Z** brings it back |
| The icon at the right of the **Objects** title | Moves the list out of the window into the [Objects drawer](#the-objects-drawer), on the open scene. An **Objects** button takes its place and opens the drawer again. The drawer's own icon, beside its ✕, or the tab's brings the list back. EDGEbuilder remembers your choice |

**Drop a copy**, on a card, starts [Drop at click](browsing.html#drop-it) with a copy that keeps the original's look, scale, Solid and Seen from (and a person's settings). Its outline is drawn at the copy's size.

To get a card by clicking an object in the world, switch on **A picked object's card** on the [Settings tab](settings.html#settings). With Edit on, a click on one of the scene's objects then opens its card at the screen's left edge, so the object in the middle stays clear.

### The Selected Object panel

Its buttons:

| Button | Does |
|---|---|
| **Apply** | Moves the object to the numbers typed in the fields. See [Typing numbers](positioning.html#typing-numbers) |
| **Drop to floor** | Lowers the object onto the surface below it. See [Drop to floor](positioning.html#drop-to-floor) |
| **Delete** | Removes the selected objects from the world and the scene. **Ctrl+Z** brings them back |
| **Rebuild previews** | Places every object that's in the scene but not in the world |
| **Clear scene** | Removes every object at once. **Ctrl+Z** brings them back, until you close the game |

**Not in world.** An object whose preview isn't in the game right now shows **not in world** in the list, in place of its kind. That happens before a save is loaded, after you pressed **Stop** on the busy bar, or when the game couldn't place it. Press **Rebuild previews**. If it stays that way, the object most likely comes from a mod that isn't installed: check the **This scene needs:** line.

**The pin.** The Selected Object panel has a pin in its top right corner. Pinned, the panel stays at the bottom of the tab while the list scrolls, so the numbers and buttons are always in view. It starts pinned. Click the pin to let the panel scroll with the tab. EDGEbuilder remembers your choice.

**Minimize.** Left of the pin, the minimize button (0.14.0) shrinks the panel to its title row at the bottom of the tab, and the object list grows into the room. The square in its place shows the panel again. Every Selected panel has one: Selected Asset, Selected Object, Selected Scene and Selected Node. EDGEbuilder remembers each.

## The Library tab

The **Library** tab shows all three places as one tree: **Library** with your folders, **Project:** and the project's name while REDcode has a project open, and **This PC**. Each scene shows what it adds and removes, such as **+5 −2** (five objects added, two of the game's removed), and when it changed, and an **open** or **shown** tag.

Without a Library yet, the tab says **No Library folder yet** and offers **Make the Library**, which makes `Documents\EDGE Library`. To use another folder, see [Library folder](settings.html#settings) on the Settings tab.

Click a scene or a folder to pick it. The **Selected Scene** panel under the tree then acts on it (before 0.14.0 it was called **Picked**). It has a pin and a minimize button, like the [Selected Object panel](#the-selected-object-panel).

| Button | Does |
|---|---|
| **Open** | Opens the picked scene. Two quick clicks on a scene in the tree do the same |
| **Close** | Closes the open scene |
| **Show in world** | Shows the picked scene's objects beside the one you're editing. Useful to line a new scene up against one you made earlier. They can't be selected: open the scene to change it. **Hide from world** takes them away |
| **Objects** | Slides out the [Objects drawer](#the-objects-drawer) |
| **Refresh** | Looks at the folders again, after you changed them outside the game |
| **Name** | The name for a new scene or folder. The line under it says where it goes: **In Library > Alleys** |
| **New scene here** | Makes an empty scene in the picked folder, and opens it |
| **Save open scene here** | Saves a copy of the open scene in the picked folder. The copy becomes the open scene |
| **New folder** | Makes a folder inside the picked one. You can only make folders inside **Library**, not under Project or This PC |
| **Bake into Library** | Bakes the picked scene into the Library. See [Bakes in the Library](baking.html#bakes-in-the-library) |

Two buttons sit at the right of the **Library** title, above the tree (0.14.0):

| Button | Does |
|---|---|
| **Collapse all** | Closes every folder of the tree, leaving the places at the top. Once all are closed it turns into **Expand all**, which opens every folder |
| The out-of-the-window icon | Moves the tree into a drawer to the left of the window, with more room. A **Library** button takes its place and opens the drawer again. The same icon, in the tab or in the drawer's title, brings the tree back. EDGEbuilder remembers your choice |

In the drawer the Library works as in the window: a pick there shows the Library tab with its Selected Scene panel. The drawer's two arrows make it wider, in steps up to 840 px, or narrower again, and EDGEbuilder remembers the width.

{% include shot.html src="/assets/shots/edgebuilder/scenes-library.webp" caption="The Library tab" shows="The Library tab: the tree with Library and two folders (Alleys, with Kabuki inside), scenes with their object counts and dates, one tagged open and one shown, Project: EDGEbuilder_Testing and This PC below, and the Selected Scene panel with Open, Close, Show in world, Objects, Refresh, the Name field and New scene here, Save open scene here and New folder." %}

## The Objects drawer

**Objects** on the Library tab slides a drawer out beside the panel. It lists every object of the picked scene, or of the open one. Its title names the scene. When the Scene tab's list is [out of the window](#the-object-list), the drawer holds the open scene's list.

| Do | What happens |
|---|---|
| **Two quick clicks** on an object | The camera flies to it and selects it. For a scene that isn't open, the scene is opened first |
| Press the **eye** on a row | Shows the object's card beside the drawer: the object in 3D as it is in the scene, its size at its scale, look, Solid, Seen from and place, and **Drop a copy** (0.14.0). The eye is lit; another row's eye shows that object, and the same eye again closes the card |
| **Drop a copy** | Starts [Drop at click](browsing.html#drop-it) with a copy that keeps the original's look, scale, Solid and Seen from (and a person's settings) |
| Click the **trash icon** on a row | Deletes that object, after asking, wherever it and the camera are. In a scene that isn't open, that delete can't be undone |

Use the drawer to find one object in a big scene, or to see what is where.

{% include shot.html src="/assets/shots/edgebuilder/scenes-objects.webp" caption="The Objects drawer" shows="The Objects drawer beside the EDGEbuilder panel, titled Objects: 200 Cargo Crates, its line saying 200 objects. Two clicks fly the camera to an object and select it, and the list of crates with a trash icon on each row." %}

## Try it: the Library

1. Open the **Library** tab. If it offers **Make the Library**, press it.
2. Click **Library** in the tree. Type `Alleys` in **Name** and press **New folder**.
3. Click **Alleys**. Type `Back lot` in **Name** and press **New scene here**. It opens, empty.
4. Drop a crate or two (see [Your first scene](first-scene.html#3-find-a-crate-and-drop-it)).
5. Press **Ctrl+Shift+S**. The Library tab opens with the name ready. Change it to `Back lot copy`, click **Alleys**, and press **Save open scene here**. The copy is now the open scene.
6. On the Scene tab, press **Close**. The crates leave the world.
7. On the Library tab, click **Back lot** twice quickly. It opens, and its crates come back.
8. Click **Back lot copy** and press **Show in world**. Its crates appear too, but a click on them selects nothing. Press **Hide from world**.
9. Press **Objects**. Click a crate in the drawer twice quickly: the camera flies to it and selects it.
10. Press the eye on another crate's row: its card shows beside the drawer. Press **Drop a copy** and click in the world: a copy, with the same look and size, joins the scene.
11. With Edit on, fly up onto a roof and press **Bring V** on the Scene tab. Switch Edit off: V stands on the roof.

## Giving a scene to someone else

There are two ways, for two kinds of reader:

| They | Give them |
|---|---|
| Play the game, and should just see your objects | A baked mod. See [Sharing a baked scene](baking.html#sharing-a-baked-scene) |
| Use EDGEbuilder, and want to open and change the scene | The scene's file. A scene is one file ending in `.scene.json`, in the folder its place names (in the Library, under `Documents\EDGE Library`). They copy it into their own Library folder and press **Refresh** on the Library tab |

Either way, if the Scene tab says **This scene needs:** a mod, they need that mod too.

Handing over a scene file follows from how scenes are stored. It was not part of the tests in the game.

## Scenes with people

A scene can hold the game's people as well as objects: see [People (NPCs)](browsing.html#people-npcs). They are saved with the scene and come back with it. People are not baked.

**For mod makers.** REDnode can load an EDGEbuilder scene file by itself, people included, without EDGEbuilder running. A REDnode mod does it with `world.load`, and an AI assistant with REDnode's `world_load` tool. See [Scenes, and what's near V](../rednode/world.html#scenes-and-whats-near-v) and the [scene format](https://edgemodders.github.io/EDGEbuilder/scene.html).

<a id="bake"></a><a id="the-solid-switch"></a><a id="seen-from"></a><a id="after-a-bake"></a><a id="bakes-in-the-library"></a>

## Baking

Baking turns a scene into a mod. It has a page of its own: [Baking](baking.html), with [the Solid switch](baking.html#the-solid-switch), [Seen from](baking.html#seen-from), [After a bake](baking.html#after-a-bake) and [Bakes in the Library](baking.html#bakes-in-the-library).
