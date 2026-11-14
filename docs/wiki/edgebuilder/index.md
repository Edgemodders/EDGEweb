---
title: EDGEbuilder
nav_title: Overview
section: EDGEbuilder
order: 0
description: "EDGEbuilder, a world builder that runs inside Cyberpunk 2077: place objects and people, arrange them into scenes, and bake scenes into the world. What it does, what it needs, and where to start."
reviewed: 2026-11-13
---

# EDGE<span class="y">builder</span>

EDGEbuilder is a world builder for Cyberpunk 2077 that runs inside the game. You search the game's own 3D models and people, and your mods', drop one into the world in front of you, and move, turn and scale it until it sits right. You save your work as named scenes, and you can bake a scene into a mod, so the objects are part of Night City for anyone who installs it.

{% include shot.html src="/assets/shots/edgebuilder/overview.webp" caption="EDGEbuilder in the game" shows="The game with Edit on: a cargo crate selected with its gizmo (red, green and blue arrows and a yellow ring), the EDGEbuilder panel on the right with its six tabs (Assets, Scene, Library, Bake, Settings, About) and the Assets tab open, and the help line at the bottom centre." %}

**New here?** Read this page, then [Install and set up](install.html), then build [your first scene](first-scene.html). The first scene takes about 20 minutes. You don't need to code.

## What it's for

Night City is built from hundreds of thousands of pieces: crates, signs, lamps, vending machines, walls. Adding your own furniture to an apartment, a barricade to a street or props for a photo has always meant guessing coordinates in a file, or learning a separate 3D tool, then starting the game to see whether it worked.

EDGEbuilder lets you do it where you can see it: in the game, with the real lighting, from any angle.

| You want to | You do this | Read |
|---|---|---|
| Find something to place | Search the game's models, the game's people, and the models in your mods | [Browsing and dropping](browsing.html) |
| Put it in the world | Pick it and drop it where you look, or where you click | [Browsing and dropping](browsing.html#drop-it) |
| Get it exactly right | Move, turn and scale it with the mouse, with keys or with typed numbers | [Positioning objects](positioning.html) |
| See it from anywhere | Fly a camera of EDGEbuilder's own, while V stays put | [The camera and builder mode](camera.html) |
| Build something bigger | Select several objects, group them, copy and paste them, undo | [Arranging a scene](arranging.html) |
| Keep your work | Save it as a named scene, and open it again later | [Scenes and the Library](scenes.html) |
| Make it part of the game | Bake the scene into a mod | [Baking](baking.html) |

Two words you will meet on every page:

- A **preview** is an object you placed that is not baked yet. Only you see it, and only while EDGEbuilder is running. Loading a save removes previews from the world, but your scene remembers them, and EDGEbuilder puts them back a moment later.
- To **bake** a scene is to turn it into a mod. After a bake, the objects are in the world without EDGEbuilder, and for anyone who installs the mod.

## Why you'd want it

- **Build where you see it.** Place objects in the running game, in its own lighting, instead of guessing coordinates in a file.
- **The game's own models, with nothing to download.** EDGEbuilder reads a list of about 31,500 models from your own game files, in a few seconds, and about 6,600 of the game's people.
- **Your mods' models too.** The models in your installed mods are listed beside the game's, tagged with the mod they come from.
- **Precise placement.** Drag with the mouse, use the keys G, R and S, or type exact numbers. Snap to steps, and drop an object onto the floor.
- **A free camera that leaves V alone.** Fly anywhere to place objects from any angle. V stays where V stood.
- **Arrange like a 3D program.** Select several objects, group them, duplicate, copy and paste, and undo the last 100 changes.
- **Nothing is lost.** A scene is saved after every change, and opens again the next time you play.
- **A real mod at the end.** A baked scene works with EDGEbuilder closed or uninstalled.

## What you need, in short

| To | You need |
|---|---|
| Place and arrange objects | Cyberpunk 2077 version 2.5 on PC, [REDnode](../rednode/), Codeware and [REDbridge](../redbridge/) |
| Bake a scene into a mod | Also [REDcode](../redcode/) and [EDGEdeck](../edgedeck/), which run in VS Code (a free code editor), and ArchiveXL |

[Install and set up](install.html) has the full list, with versions and links.

## Status

**Released, as a public preview.** The latest is EDGEbuilder 0.10.9 (2026-11-12), for game 2.5, on [Nexus Mods](https://www.nexusmods.com/cyberpunk2077/mods/36627) and [GitHub](https://github.com/Edgemodders/EDGEbuilder/releases). Everything on these pages passed its test in the game, unless a page says otherwise.

| | |
|---|---|
| **Works today** | Meshes and entities from the game, your mods and your REDcode project. People (NPCs). The editor camera. Groups, copy and paste, undo. Named scenes. Baking into a REDcode project, with solid meshes and a draw distance for each object. Bakes kept in the EDGE Library |
| **Not baked yet** | People. They show while EDGEbuilder is running, and a bake leaves them out |
| **Coming next** | Importing your own 3D model. Built, and being tested in the game; not released yet |
| **Planned, not started** | Picking and changing what the game itself placed. Places for quests. Lights, decals, effects and sounds. Favourites and prefabs. Working on a scene in REDcode with the game closed |

EDGEbuilder is inspired by World Builder by keanuWheeze, a Cyber Engine Tweaks mod that showed a world editor can live inside the running game. EDGEbuilder is its own design and uses none of World Builder's code, files or data.

## How it fits into EDGE

EDGEbuilder is an add-on that [REDnode](../rednode/) runs inside the game. REDnode calls such an add-on a [package](../glossary.html#edge-terms). The other EDGE tools each do one job for it:

| Toolkit | What it does for EDGEbuilder |
|---|---|
| [REDnode](../rednode/) | Runs it. Draws the editor over the game, and places, moves and removes the objects |
| [REDbridge](../redbridge/) | Reads the game's files, and your mods', to build the list of models. Writes the files of a bake |
| [EDGEdeck](../edgedeck/) | Installs EDGEbuilder from its zip. Later it also installs the mod that holds your baked scenes |
| [REDcode](../redcode/) | Holds the project your bakes go into and packs it into a mod. The project's own models are listed in EDGEbuilder too |

## In this section

| Page | |
|---|---|
| [Install and set up](install.html) | What you need, installing, allowing its two permissions, the three status pills |
| [Your first scene](first-scene.html) | A walk through from start to finish: make a scene, drop and stack crates, group and copy them, undo, bake them into the world |
| [Browsing and dropping](browsing.html) | Meshes, entities and people, search, your mods and project, appearances, dropping |
| [Positioning objects](positioning.html) | The Edit switch, the gizmo, G R S, typed numbers, snapping, drop to floor |
| [The camera and builder mode](camera.html) | Flying the editor camera, orbit, pan, frame, the hidden HUD and other windows |
| [Arranging a scene](arranging.html) | Several objects at once, groups, duplicate, copy, cut and paste, undo and redo |
| [Scenes and the Library](scenes.html) | Previews and scenes, where scenes are kept, the Scene tab, the Library tab |
| [Baking](baking.html) | Turning a scene into a mod: what you need, solid objects, draw distance, sharing, bakes in the Library |
| [Settings and keys](settings.html) | Every tab, setting, key and mouse control |
| [Troubleshooting](troubleshooting.html) | What to do when something goes wrong |

## Reference

- [EDGEbuilder docs](https://edgemodders.github.io/EDGEbuilder/): the design, and the result of each test in the game
- [Changelog](https://edgemodders.github.io/EDGEbuilder/changelog.html): what changed in each release
- [Scene format](https://edgemodders.github.io/EDGEbuilder/scene.html), for mod makers
- [Source and issues](https://github.com/Edgemodders/EDGEbuilder)
