---
title: Browsing and dropping
section: EDGEbuilder
order: 3
description: "Find something to place in EDGEbuilder and put it in the world: the game's meshes, entities and people (NPCs), your mods' and your REDcode project's models, search, Previews in 3D, the Explorer, appearances, Drop where I look and Drop at click."
reviewed: 2026-11-27
---

# Browsing and <span class="y">dropping</span>

Everything starts on the **Assets** tab: find a thing in the game's own files, pick it, and drop it into the world.

| On this page | |
|---|---|
| [What you can place](#what-you-can-place) | Meshes, entities and people |
| [Search](#search) | The search box, the two rows of tabs, the tags |
| [Your mods and your project](#your-mods-and-your-project) | Models that aren't the game's own |
| [Seeing it in 3D](#seeing-it-in-3d) | Previews, the Preview switch |
| [The Explorer](#the-explorer) | The game's folders, your mods, the project and the game's people |
| [Pick an asset](#pick-an-asset) | The Selected Asset panel, sizes and appearances |
| [Drop it](#drop-it) | Drop where I look, and Drop at click |
| [People (NPCs)](#people-npcs) | Placing the game's people |
| [Files from your project](#files-from-your-project) | Seeing a model you are still making |
| [After the drop](#after-the-drop) | Where the object goes next |
| [Try it](#try-it-drop-something-from-one-of-your-mods) | Drop something from one of your mods, and find a crate in the Explorer |

## What you can place

| Kind | What it is | Example |
|---|---|---|
| **Mesh** (`.mesh`) | A 3D model on its own: a shape with its surface, and nothing else. A mesh can be scaled | A cargo crate, a bench, a wall panel |
| **Entity** (`.ent`) | A ready-made game object, built from one or more meshes, sometimes with lights, doors or other working parts. Its size is fixed by its own file, so it can't be scaled | A vending machine, an ATM |
| **NPC** | One of the game's people: crowd people and story characters alike. See [People (NPCs)](#people-npcs) | Judy, a rich citizen |

An **asset** is any one of these. Lights, decals, effects and sounds are planned, not built.

EDGEbuilder doesn't come with a list of game files. The first time it starts, it asks [REDbridge](../redbridge/) to read your game and builds its own list: about 31,500 meshes and entities, and about 6,600 people. That takes a few seconds, once. The list is saved, and is built again when the game is updated. **Rebuild asset index** on the Settings tab builds it again by hand.

## Search

1. Open the **Assets** tab.
2. Type what you are looking for, for example `cargo crate`, `bench` or `vending`. You don't need to click the search box first: typing anywhere on the Assets tab goes into it.
3. Narrow the list with the two rows of tabs under the box:

| Tabs | Show |
|---|---|
| **All**, **Meshes**, **Entities**, **NPCs** | Every kind, or only one. **All** includes people |
| **Everywhere**, **Game**, **Mods**, **Project** | Everything, the game's own files, your installed mods, or the project open in REDcode |

On **Mods** and **Project** the list is filled straight away. You don't need to type anything. Typing a mod's name finds that mod's files. People are the game's own, so they show under **Everywhere** and **Game** only.

With nothing typed, the other tabs list nothing, and the count asks for a name (before 0.14.0 they listed the first 120 assets). The **✕** inside the box, on the right, empties the box and the list. It is dimmed while the box is empty.

Each result shows a name, with tags at the right:

| Tag | Means |
|---|---|
| **mesh**, **entity** or **NPC** | The kind |
| **PL** | An asset from Phantom Liberty |
| A mod's name | The file comes from that mod |
| **project** and a name | The file comes from the REDcode project of that name |
| **changes a game file** | A mod's file that replaces one of the game's own, so dropping it shows the mod's version |

Hover a result for its full path, and for a mod's file, the archive it is in.

The count above the list says how many matched: `1 mesh found`, `4 entities found`, `0 assets found for "chair"`. The list stops at 120 results, and the count then shows **120+**. A longer, more exact search works better than scrolling.

{% include shot.html src="/assets/shots/edgebuilder/browsing-search.webp" caption="Searching the asset index" shows="The Assets tab with cargo crate typed in the search box, the Meshes and Everywhere tabs selected, a list of results with their tags, the count above the list and the Mods and Project line." %}

## Your mods and your project

EDGEbuilder also lists the meshes and entities in:

- **your installed mods**: the archives in the game's `archive\pc\mod` folder, and in REDmod's `mods\<name>\archives`. A mod in [EDGEdeck](../edgedeck/) is listed once you have deployed it;
- **the project open in [REDcode](../redcode/)**: its files under `source\archive`.

A line on the Assets tab says what was found, for example `Mods: 17 in 5 archives  |  Project MyMod: 3`, or **No REDcode project open**.

Mod archives are read once, and again only when one changes. A file you save into the project shows up within a few seconds.

A scene that uses a mod's file needs that mod. The Scene tab says so: **This scene needs: EvilClown**. Anyone you give the scene or its bake to needs the same mod. See [Sharing a baked scene](baking.html#sharing-a-baked-scene).

## Seeing it in 3D

From 0.14.0, you can look at a result in 3D before you drop it. Two controls sit at the right of the result count:

| Control | Does |
|---|---|
| The **eye** | Opens **Previews**, a drawer to the left of the window with the results as small 3D pictures |
| **Preview** | A switch. On, a click on a result also shows it in the **Preview** drawer to the left. EDGEbuilder remembers it |

**Previews.** The pictures are grey models: meshes, and entities drawn from their meshes. People show by name only for now, and an entity with no mesh of its own says "no picture". The first time, the pictures fill in within a few seconds, as they come into view while you scroll. They are kept, so the next time they show at once.

| In the Previews drawer | What happens |
|---|---|
| Rest the mouse on a picture | It turns slowly, and stops when the mouse leaves |
| Click a picture | Its details open beside the pictures, and the picture is outlined in yellow: the model in 3D, its size, its looks and a **Drop** button. Click another picture to see that one. The details' **✕** closes the details only |
| **Drop** | Closes the drawers and starts [Drop at click](#drop-it) with that asset |

To skip the details, switch **A picture's details before Drop** off on the [Settings tab](settings.html#settings). A click on a picture then starts Drop at click at once.

**The Preview drawer.** With the Preview switch on, a click on a result shows it to the left of the window: the model in 3D on top, **Properties** and **Appearances** under it, and **Drop** at the bottom. Drag in the picture to turn it, and turn the wheel over it to come nearer; it starts turning by itself again two seconds after you let go. With the Previews pictures open, the result shows beside them instead.

Only one drawer is open at a time to the left of the window: Previews, the Explorer (with its Preview), the Library, Objects, Import's file picker or a sector. Opening one closes the other.

## The Explorer

The **Explorer** is for finding things the way the game's files are laid out, folder by folder, when you don't know a name to search for (0.14.0). Press the folder button at the right end of the search box. A wide drawer opens to the left of the window, with these places at the top, each with how many objects it holds:

| Place | Holds |
|---|---|
| **Game** | The game's own folders, such as `base > environment > decoration > containers` |
| Each mod | The meshes and entities in one of your installed mods |
| **Project** | The project open in REDcode, when there is one |
| **People** | The game's people, grouped by the first word of the game's name for them, such as `afterlife` |

| Do | What happens |
|---|---|
| Click a folder | It opens. A second click closes it. The folder you clicked last is yellow, and its files are listed under its folders |
| Type in its filter | Only what matches, in the folder you clicked last and below it, with how many match. The **✕** clears it |
| Click a file | The **Preview** drawer opens to the Explorer's left: the model in 3D (drag to turn it, the wheel to come nearer), and under it its name, path, kind, where it comes from, size, whether it can be solid, its file size and its appearances. A person has no 3D picture yet |
| **Drop** | Both drawers close, Edit goes on, and Drop at click starts with that object, in the appearance you picked |
| The two arrows in its title | Make it wider, in steps up to 840 px, or narrower again. Its Preview moves with it. EDGEbuilder remembers the width |

With the Explorer open, a search result you click is found in it too: its folders open down to it, its row is picked and scrolled into view, and the Explorer's filter then looks in that folder.

## Pick an asset

Click a result. The **Selected Asset** panel at the bottom of the tab shows:

- the asset's path in the game's files;
- its size in metres, along X, Y and Z. Z is up, so the third number is its height;
- a list of its **appearances**, when it has more than one. An appearance is a variant of the same model: other colours, labels or wear. `cargo_crate_a.mesh`, for example, has 18.

Click an appearance to use it for the next drop.

| If | Then |
|---|---|
| REDbridge isn't running | The size and appearances may be missing. You can still drop the asset |
| The asset has no size | It still drops. EDGEbuilder doesn't know its shape, so the box drawn around it when selected is a 1 m cube. Many entities are like this |

**The pin.** The Selected Asset panel has a pin in its top right corner. Pinned, the panel stays at the bottom of the tab while the results scroll, so the Drop buttons are always in view. It starts pinned. Click the pin to let the panel scroll with the tab instead. EDGEbuilder remembers your choice. The Selected Scene panel on the Library tab, the Selected Object panel on the Scene tab and the Selected Node panel on the World tab have the same pin.

**Minimize.** Left of the pin, the minimize button (0.14.0) shrinks the panel to its title row at the bottom of the tab, and the list above it grows into the room. The square in its place shows the panel again. Every Selected panel has one, and EDGEbuilder remembers each tab's.

Before 0.14.0, the Selected Asset panel was called **Picked**.

## Drop it

Press **Drop where I look**.

| With | The asset lands |
|---|---|
| [Edit](positioning.html#the-edit-switch) on | On the first surface the camera looks at, up to 60 m away, turned to face the camera. With nothing in that range, 6 m ahead |
| Edit off (or Edit on with **Use EDGEbuilder's own camera** switched off in Settings) | About 3 m in front of V, facing V |

**Drop at click** beside it lets you choose the spot:

1. Press **Drop at click**. It switches Edit on if it's off. The help line at the bottom of the screen names what you are dropping.
2. Move the mouse over the world. From 0.14.0, the object's own outline, drawn in white lines, sits where a click would put it and follows the mouse. It turns **amber** when nothing is under the cursor, such as the sky: the object would land 8 m along that line. For a person, or an object with very many edges, it is a box, and it is a box for a moment while the outline is worked out.
3. To look around or fly first, hold the right mouse button, as anywhere else. Drop at click stays on, and the outline keeps up with what is under the cursor.
4. Click a spot in the world. The asset lands where the outline was, turned to face the camera.

**Esc** or a quick tap of the right button cancels, and nothing is dropped. With **Use EDGEbuilder's own camera** off, a right-click cancels at once. Started from a button in a drawer, the outline shows once the mouse moves into the world.

**What you should see:** the object in the world, the **Scene** tab open with the new object selected, and a message such as **Dropped cargo_crate_a.mesh in 412 ms.** A drop takes about half a second. If it fails, nothing is added to the scene, and the message line says why.

{% include shot.html src="/assets/shots/edgebuilder/browsing-dropped.webp" caption="A dropped crate" shows="A cargo crate standing on the pavement in front of V, with the message line in the EDGEbuilder panel saying how many milliseconds the drop took." %}

## People (NPCs)

The **NPCs** tab lists the game's people, about 6,600 of them. The game keeps a list of every person it can spawn, each under a name such as `Character.Judy`. EDGEbuilder reads that list once, the first time it starts, and remembers it.

| To | Do |
|---|---|
| Find someone | Search by the name the game shows (`Judy`) or by the game's own name for them (`Character.Judy`) |
| Choose how they look | Click an appearance in the Selected Asset panel, or leave **Any: the game picks**. EDGEbuilder keeps whichever one the person got, so they look the same next time |
| Place them | Drop them like anything else |
| Move and turn them | With the gizmo or the keys, as on [Positioning objects](positioning.html) |
| Copy, paste, group, undo | As for any object: see [Arranging a scene](arranging.html) |

What to expect from a placed person:

- They stand where you put them, hold still, and stay friendly to V. Walk into one and they may grumble, nothing more.
- While you drag, only the gizmo moves. The person steps to the new place when you let go. That is how the game moves its people.
- They always stand upright, however you turn them.
- They can't be scaled, and the settings for a bake (**Solid when baked** and **Seen from, m**) don't apply to them.
- They come back with the scene after a save loads or the game starts.

> **People are not baked.** A bake leaves them out, and the Bake tab lists which. They appear only while EDGEbuilder is running.

### Try it: stand Judy beside V

1. On the **Assets** tab, click **NPCs** and type `judy`.
2. Click a result. Leave the appearance on **Any: the game picks**.
3. Press **Drop where I look**. Judy stands about 3 m in front of V.
4. Switch **Edit** on, click her, and drag the yellow ring. Let go: she turns to face the new way.
5. Press **Delete** to send her away again, or **Ctrl+Z** to bring her back.

## Files from your project

This is for when you are making or changing a model in REDcode and want to see it in the world.

A file in your REDcode project isn't in the game until the project is packed and loaded. If you drop it before that, the message says so. If the file replaces one of the game's own files, you see the game's version for now.

To see your version:

1. Save the file in the project.
2. In REDcode, press **Pack and Play**. It packs the project and swaps it into the running game.
3. Look at the world. The previews that use the file come back by themselves, in the same place and still selected, showing the new version.

See REDcode's [Pack and Play](../redcode/pack-install.html#pack-and-play-into-the-running-game).

## After the drop

- **The object is in your scene.** Everything you drop is listed on the Scene tab. See [The Scene tab](scenes.html#the-scene-tab).
- **Put it exactly right.** See [Positioning objects](positioning.html).
- **It survives a load.** Loading a save takes previews out of the world. They come back by themselves a moment after the save is in. See [Previews and scenes](scenes.html#previews-and-scenes).

## Try it: drop something from one of your mods

1. Open the **Assets** tab and click **Mods**. The line above the list says how many models your mods have.
2. Type part of a mod's name. Its files are listed, each tagged with the mod.
3. Click **All** to see both kinds: a **mesh** (a model only) and an **entity** (a game object with its own parts, such as lights or doors).
4. Click a result. The **Selected Asset** panel shows its size and appearances.
5. Press **Drop at click**, then click a spot on the ground. The object lands there, facing the camera.
6. Open the **Scene** tab. The object is listed, and the line above the list says **This scene needs:** and the mod's name.

No mods with models installed? Do the same on the **Game** tab with `bench` or `vending machine`.

## Try it: find a crate in the Explorer

1. On the **Assets** tab, press the folder button at the right of the search box. The Explorer opens with **Game**.
2. Open `base`, `environment`, `decoration`, `containers`, `crates` and `delivery_crate`, one click each.
3. Click `delivery_crate_a.mesh`. Its Preview opens beside the Explorer: drag in the picture to turn it.
4. With `containers` clicked last, type `barrel` in the Explorer's filter: only the barrels in that folder are left.
5. Pick one and press **Drop**. Move the mouse over the ground: the barrel's white outline follows it. Click to drop it.
