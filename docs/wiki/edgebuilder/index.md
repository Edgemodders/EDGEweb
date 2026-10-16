---
title: EDGEbuilder
nav_title: Overview
section: EDGEbuilder
order: 0
description: "EDGEbuilder, a world builder that runs inside Cyberpunk 2077 on REDnode: what it is, what it's for, and where it stands."
reviewed: 2026-10-16
---

# EDGE<span class="y">builder</span>

EDGEbuilder is a world builder for Cyberpunk 2077 that runs inside the game. You search the game's own 3D models, drop one into the world in front of you, and move, turn and scale it until it sits right. Later phases will let you arrange whole scenes and bake them into the world, so they load like any other mod.

{% include shot.html caption="EDGEbuilder in the game" shows="The game with Edit on: a cargo crate selected with its gizmo (red, green and blue arrows and a yellow ring), the EDGEbuilder panel on the right with the Assets tab open, and the help line at the bottom left." %}

## What it's for

Night City is built from hundreds of thousands of pieces: crates, signs, lamps, vending machines, walls. Adding your own furniture to an apartment, a barricade to a street or props for a photo has always meant guessing coordinates in a file, or learning a separate 3D tool, then starting the game to see whether it worked.

EDGEbuilder lets you do it where you can see it: in the game, with the real lighting, from any angle. It is built around six behaviours:

| Behaviour | What you do | Status |
|---|---|---|
| **Browse** | Search the game's meshes and entities by name | Passed in game |
| **Drop** | Pick one and it appears where you look | Passed in game |
| **Position** | Move, turn and scale it with a gizmo, keys or typed numbers; drop it to the floor | Passed in game |
| **Arrange** | Group, duplicate, hide, undo and redo, save named scenes | Planned |
| **Bake** | Turn a scene into a mod that puts the objects in the world for good | Planned |
| **Return** | Open a saved scene and keep working on it | Partly: your working scene is kept between sessions. Named scenes are planned |

Until Bake exists, what you place is a **preview**: it's in the world while you play, and it goes when a save loads. EDGEbuilder remembers it and can put it back. See [Scenes and baking](scenes.html).

## Benefits

- **Build where you see it.** Place objects in the running game, with its own lighting and the game's own selection outline, instead of guessing coordinates in a file.
- **The game's own assets, no lists to download.** EDGEbuilder reads an index of about 31,500 meshes and entities from your own game files, in a few seconds, once per game version.
- **Precise placement.** A gizmo, the keys G, R and S with axis locks and typed numbers, snapping, drop to floor, and exact X, Y, Z and heading fields.
- **A free camera that leaves V alone.** Fly anywhere to place objects from any angle; V stays where V stood, and the game's HUD gets out of the way.
- **Easy to back out of.** Previews go away when a save loads, and come back only when you ask. Switch Edit off and the view, the HUD and the mouse are the game's again.
- **Part of EDGE, end to end.** REDnode runs it, REDbridge reads the game's files, REDdeck installs it. Baked scenes are planned to land in a REDcode project.

## How it fits into EDGE

EDGEbuilder is a **REDnode package**: an add-on for [REDnode](../rednode/) made of a window drawn over the game (the editor you see) and a Node mod (the part that remembers your scene and talks to the other tools). It is the first mod built on the whole EDGE platform.

| Toolkit | What it does for EDGEbuilder |
|---|---|
| [REDnode](../rednode/) | Runs it. Draws the editor over the game, and gives it the game calls that spawn, move and remove objects |
| [REDbridge](../redbridge/) | Reads the game's archives to build the list of assets, with each one's size and appearances. It will also write the baked files |
| [REDdeck](../reddeck/) | Installs EDGEbuilder from its release zip. Later it will install what you bake, too |
| [REDcode](../redcode/) | Planned: holds your scenes in a project, and packs the bake into a mod |

## Status

| Phase | Status |
|---|---|
| B1 Browse and drop | Passed in game on 2026-10-13 |
| B2a Position | Passed in game on 2026-10-14 |
| B2b Camera | Passed in game on 2026-10-14. The fixes in 0.3.1 and 0.3.2 (the HUD after a save loads, looking across the window, the cursor held still while looking) wait for their in-game retest |
| B3 Arrange and save | Not started |
| B4 Bake | REDbridge's half is built but not yet tried in the game. EDGEbuilder's bake panel is not started |
| B5 Lights and more kinds | Not started. Today you can place meshes and entities only |
| B6 Comfort (favourites, prefabs, snapping) | Not started |
| B7 Scenes in REDcode with the game closed | Not started |

The latest release is **EDGEbuilder 0.3.2** (2026-10-15), on the [releases page](https://github.com/Edgemodders/EDGEbuilder/releases). It needs REDnode, which has no packaged release yet and installs from source. See [Install and set up](install.html).

EDGEbuilder is inspired by World Builder by keanuWheeze, a Cyber Engine Tweaks mod that showed a world editor can live inside the running game. EDGEbuilder is its own design and uses none of World Builder's code, files or data.

## In this section

| Page | |
|---|---|
| [Install and set up](install.html) | What you need, installing with REDdeck, allowing REDbridge, opening it in the game |
| [Browsing and dropping](browsing.html) | The asset index, search, appearances, dropping objects, the Scene tab |
| [Positioning objects](positioning.html) | The Edit switch, the gizmo, G R S, typed numbers, snapping, drop to floor, scale |
| [The camera and builder mode](camera.html) | Flying the editor camera, orbit, pan, frame, and the hidden HUD |
| [Scenes and baking](scenes.html) | What is kept today, and what Arrange and Bake will add |
| [Settings and keys](settings.html) | Every setting, button and key |
| [Troubleshooting](troubleshooting.html) | Symptoms and fixes |

The [EDGEbuilder docs](https://edgemodders.github.io/EDGEbuilder/), with the [design](https://edgemodders.github.io/EDGEbuilder/design.html) and the results of each in-game test, are the reference this section draws on.
