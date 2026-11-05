---
title: EDGEbuilder
nav_title: Overview
section: EDGEbuilder
order: 0
description: "EDGEbuilder, a world builder that runs inside Cyberpunk 2077 on REDnode: what it is, what it's for, and where it stands."
reviewed: 2026-11-05
---

# EDGE<span class="y">builder</span>

EDGEbuilder is a world builder for Cyberpunk 2077 that runs inside the game. You search the game's own 3D models, and your mods', drop one into the world in front of you, and move, turn and scale it until it sits right. You can work on several objects at once, group them, copy them and undo. Later phases will let you save named scenes and bake them into the world, so they load like any other mod.

{% include shot.html caption="EDGEbuilder in the game" shows="The game with Edit on: a cargo crate selected with its gizmo (red, green and blue arrows and a yellow ring), the EDGEbuilder panel on the right with the Assets tab open, and the help line at the bottom centre." %}

## What it's for

Night City is built from hundreds of thousands of pieces: crates, signs, lamps, vending machines, walls. Adding your own furniture to an apartment, a barricade to a street or props for a photo has always meant guessing coordinates in a file, or learning a separate 3D tool, then starting the game to see whether it worked.

EDGEbuilder lets you do it where you can see it: in the game, with the real lighting, from any angle. It is built around six behaviours:

| Behaviour | What you do | Status |
|---|---|---|
| **Browse** | Search the game's meshes and entities by name, and those in your installed mods and your open REDcode project | Passed in game. Mods and the project from 0.4.1 |
| **Drop** | Pick one and it appears where you look, or where you click | Passed in game |
| **Position** | Move, turn and scale it with a gizmo, keys or typed numbers; drop it to the floor | Passed in game |
| **Arrange** | Select several objects, group, duplicate, copy, cut and paste, undo and redo; save named scenes | Passed in game. Named scenes from 0.6.7 |
| **Bake** | Turn a scene into a mod that puts the objects in the world for good | Planned |
| **Return** | Open a saved scene and keep working on it | Passed in game, from 0.6.7 |

Until Bake exists, what you place is a **preview**: it's in the world while you play and EDGEbuilder is running, and it goes when a save loads. EDGEbuilder keeps it in your scene and puts it back by itself. See [Scenes and baking](scenes.html).

## Benefits

- **Build where you see it.** Place objects in the running game, with its own lighting and the game's own selection outline, instead of guessing coordinates in a file.
- **The game's own assets, no lists to download.** EDGEbuilder reads an index of about 31,500 meshes and entities from your own game files, in a few seconds, once per game version.
- **Your mods' assets too.** The meshes and entities in your installed mods and in the project open in REDcode are listed beside the game's, tagged with where they come from.
- **Precise placement.** A gizmo, the keys G, R and S with axis locks and typed numbers, snapping, drop to floor, and exact X, Y, Z and heading fields.
- **A free camera that leaves V alone.** Fly anywhere to place objects from any angle; V stays where V stood, and the game's HUD gets out of the way.
- **Arrange like a 3D program.** Select several objects with Ctrl+click or a box, group them, duplicate, copy and paste, and undo the last 100 changes.
- **Scenes you keep.** Named scenes, saved after every change, in the [EDGE Library](../library.html), your REDcode project or on this PC, and back where you left them at the next start.
- **Easy to back out of.** Undo takes back a change, and **Close** takes a scene's objects out of the world, keeping the scene. Switch Edit off and the view, the HUD and the mouse are the game's again.
- **Part of EDGE, end to end.** REDnode runs it, REDbridge reads the game's files, EDGEdeck installs it. Baked scenes are planned to land in a REDcode project.

## How it fits into EDGE

EDGEbuilder is a **REDnode package**: an add-on for [REDnode](../rednode/) made of a window drawn over the game (the editor you see) and a Node mod (the part that remembers your scene and talks to the other tools). It is the first mod built on the whole EDGE platform.

| Toolkit | What it does for EDGEbuilder |
|---|---|
| [REDnode](../rednode/) | Runs it. Draws the editor over the game, gives it the game calls that spawn, move and remove objects, and hides other packages' windows while you edit ([solo mode](../rednode/spaces.html#solo-mode)) |
| [REDbridge](../redbridge/) | Reads the game's archives, and your mods', to build the list of assets, with each one's size and appearances. It will also write the baked files |
| [EDGEdeck](../edgedeck/) | Installs EDGEbuilder from its release zip. Later it will install what you bake, too |
| [REDcode](../redcode/) | Tells EDGEbuilder which project is open (REDcode 0.10.5 or later), so its meshes and entities are listed too. After REDcode's **Pack and Play**, previews show the new version. Planned: holds your scenes in the project, and packs the bake into a mod |

## Status

| Phase | Status |
|---|---|
| B1 Browse and drop | Passed in game on 2026-10-13 |
| B2a Position | Passed in game on 2026-10-14 |
| B2b Camera | Passed in game on 2026-10-14. The fixes in 0.3.1 and 0.3.2 (the HUD after a save loads, looking across the window, the cursor held still while looking) passed their retest on 2026-10-16. 0.3.3's additions (Drop at click and others) passed on game 2.5 on 2026-10-29 |
| Bake probe | Passed in game on 2026-10-30: a crate baked by REDbridge, without EDGEbuilder, loaded in game 2.5 as part of the world |
| B2c Mod assets | Passed in game on 2026-10-30 (0.4.1): your mods' and your REDcode project's meshes and entities |
| B3-1 Arrange | Passed in game on 2026-11-02 (0.5.8): several objects at once, groups, duplicate, copy, cut and paste, undo and redo |
| B3-2 Save | Passed in game, released as 0.6.7 on 2026-11-05: named scenes you save and open again, kept in the [EDGE Library](../library.html), your REDcode project or on this PC |
| B4 Bake | The bake probe showed that a baked scene loads in the game. EDGEbuilder's bake panel is not started |
| B3c NPCs and scenes through REDnode | Agreed on 2026-10-23: place NPCs, and let REDnode load EDGEbuilder's scene files so other mods can use them. REDnode's side passed in game on 2026-10-26; EDGEbuilder's comes after B4 |
| B3b World objects | Agreed: pick, inspect and copy what the game itself placed. Not started |
| B4b Edit the world | Agreed: hide or change the game's own objects. Not started |
| B4c Quest places | Planned: spots, trigger areas and map markers for EDGEquest's quests |
| B5 Lights and more kinds | Not started. Today you can place meshes and entities only |
| B6 Comfort (favourites, prefabs, snapping) | Not started |
| B7 Scenes in REDcode with the game closed | Not started |

The latest release is **EDGEbuilder 0.6.7** (2026-11-05), on the [releases page](https://github.com/Edgemodders/EDGEbuilder/releases). It was tested on game 2.5 with REDnode 0.58.0. EDGEbuilder is a test build: a first public preview is planned after B4 (Bake). It needs [REDnode](../rednode/) 0.58.0 or later. See [Install and set up](install.html).

EDGEbuilder is inspired by World Builder by keanuWheeze, a Cyber Engine Tweaks mod that showed a world editor can live inside the running game. EDGEbuilder is its own design and uses none of World Builder's code, files or data.

## In this section

| Page | |
|---|---|
| [Install and set up](install.html) | What you need, installing with EDGEdeck, allowing REDbridge, opening it in the game |
| [Browsing and dropping](browsing.html) | The asset index, your mods and project, search, appearances, dropping objects, the Scene tab |
| [Positioning objects](positioning.html) | The Edit switch, the gizmo, G R S, typed numbers, snapping, drop to floor, scale |
| [The camera and builder mode](camera.html) | Flying the editor camera, orbit, pan, frame, the hidden HUD and solo mode |
| [Arranging a scene](arranging.html) | Several objects at once, groups, duplicate, copy, cut and paste, undo and redo, the busy bar |
| [Scenes and baking](scenes.html) | Named scenes and the Library, previews that come back, and what Bake will add |
| [Settings and keys](settings.html) | Every setting, button and key |
| [Troubleshooting](troubleshooting.html) | Symptoms and fixes |

The [EDGEbuilder docs](https://edgemodders.github.io/EDGEbuilder/), with the [design](https://edgemodders.github.io/EDGEbuilder/design.html) and the results of each in-game test, are the reference this section draws on.
