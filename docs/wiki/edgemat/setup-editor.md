---
title: EDGEmat's setup editor
nav_title: The setup editor
section: EDGEmat
order: 4
description: "Open any .mlsetup (from the game, a project, a file or another mod) and see each layer in plain words, a color map of where each layer goes, and what looks wrong."
reviewed: 2026-10-19
---

# The setup <span class="y">editor</span>

A garment's look lives in its **setup**, an `.mlsetup` file: a stack of up to 20 layers, each with a surface, a color, finishes, tiling and a detail texture. The setup editor opens one and lays it out in plain words. In version 0.2 it is read-only: changing layers comes in the next phase (M3).

{% include shot.html caption="The setup editor" shows="The setup editor on the Sunny Ammo sneakers (ml_s1_055_pma_shoe__red_yellow_graphic): the header with '19 of 20 layers show', the color map on the left, and the layer list on the right with layer 7, the sole, selected and its details open." %}

## Opening a setup

| From | How |
|---|---|
| A garment's name | [Find](find.html): type the name, open a body and a mesh, click a layered material. This is the best way: the setup opens with the exact mask set the garment uses |
| The game, by file name | **Open Setup...** (the go-to-file icon in the Library's title bar) › **From the game**, then type words from the file name, such as `s1_055 red yellow`, and pick one |
| A file on disk | **Open Setup...** › **A file on disk**: a binary `.mlsetup`, or WolvenKit's JSON form, `.mlsetup.json`. A file in a WolvenKit project works too |
| Another mod | **Open Setup...** › **A file on disk**, pick the mod's `.archive`, then pick a setup inside it. The mod's own mask sets come along. The mod is only read, never changed |
| REDcode or the Explorer | Open any `.mlsetup`. If REDcode's editor opens instead, right-click the editor tab (or press `Ctrl+Shift+P`) › **Reopen Editor With...** › **EDGEmat Setup Editor**. VS Code may ask which editor to use the first time |

The header names the file and where it came from: "Setup · game file", "project file", "from the mod ...", or the garment you found it through. It also counts the layers that show and the setup's **ratio** (how the detail textures map onto the garment).

## The color map

On the left: the garment's texture, unwrapped flat, with each layer painted in its own color where its mask puts it. It shows *where* each layer goes; it isn't the in-game look, which also has shine, bumps and lighting. (For the garment in 3D, see [View in 3D](view-in-3d.html).)

- **Click a spot** on the map: the layer that shows there is selected, and scrolled into view in the list.
- The switch under the map, **All layers** / **Selected layer**, either shows the whole map or dims it and lights up the selected layer's area, so you can see exactly which parts one layer covers.

## The layers

On the right, every layer from 0 (the base) upwards, each with its index, a color swatch, the surface's thumbnail, "surface · color", its finish in a few words, and its **share**: how much of the texture it covers, with a bar.

Click a layer for its details:

| Row | Shows |
|---|---|
| Surface | Its name, with **Open** for its [surface page](surfaces.html) |
| Color | The plain name and the swatch |
| Roughness, Metal, Bumps | In plain words, such as "mostly rough", "not metal", "faint bumps" |
| Tiling | How many times the surface repeats across the garment, such as ×10.1 |
| Opacity | "full", or a percentage |
| Microblend | Its detail texture, with **Open** for its page, its tiling and contrast |
| Share | "Shows on 11% of the texture" |

### Layers that don't show, and warnings

A layer can be in the file and still not show. EDGEmat dims it and says why:

| You see | Means |
|---|---|
| "not shown: unused slot" | An empty layer. Tick **Hide unused slots** (top right) to leave these out of the list; the header still counts them |
| "not shown: opacity 0" | The layer is there but fully transparent |
| "not shown: no surface" | The layer names no surface |
| "not shown: all presets set to None" | The game hides a layer whose presets are all None (found in EDGEmat's in-game tests) |
| "not shown: no mask" | The mask set has fewer masks than the setup has layers. Mask 5 belongs to layer 5, so a layer past the last mask has nowhere to show. Often a sign of the wrong mask set ([below](#the-mask-set)) |
| "not shown: covered by the layers above, or its mask is empty" | Nothing of it is left to see |
| ⚠ a color the surface lacks "shows white" | The layer names a color its surface doesn't have, and the game draws such a color white. A common mistake in hand-edited setups |

## The mask set

A setup doesn't say which masks it uses: the garment's mesh does. So:

- Opened through **Find**, the setup uses the mask set the mesh names: "(named by the mesh's material)". Always right.
- Opened any other way, EDGEmat picks the best match by name beside the setup, on disk, in the mod, or in the game: "(found beside the setup)". Usually right; if the map looks scrambled, it isn't.
- **Change** on the "Mask set" line under the map lists the other candidates, with a search and a file on disk. Picking one redraws the map.

## Raw values

Tick **Raw values** (top right) to see the game's names and numbers in blue beside the plain words: paths, preset names and their values, RGB, tiling, offsets. The header adds the setup's normal setting and its WolvenKit JSON version. Handy alongside WolvenKit, or when asking for help.

## For assistants

The same view, as data, is the MCP tool `mat_describe`: "describe this jacket's layers". See [Assistants](assistants.html).
