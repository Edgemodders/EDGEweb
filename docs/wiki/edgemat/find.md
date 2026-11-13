---
title: Find a garment's materials with EDGEmat
nav_title: Find
section: EDGEmat
order: 5
description: "EDGEmat's Find view: from a garment's in-game name to its looks for each body type, its meshes and its materials, with the setup and masks each one uses."
reviewed: 2026-11-13
---

# <span class="y">Find</span>

"I want to recolor the punk jeans": the hard part has always been finding which files that means. A garment reaches its look through a chain of files (its item record, an entity, an appearance file, one or more meshes, and their materials), and the two body types can even wear different meshes. Find walks that chain for you.

Find is the third view in EDGEmat's sidebar, below the [Desk](desk.html) and [Game Materials](game-materials.html). It is often collapsed at the bottom: click its **FIND** header to open it.

Find is a search: it looks through the game's clothing, which no file name shows, and lists what it found. (Game Materials' funnel is a filter: it only narrows its own list.)

{% include shot.html caption="The Find view" shows="The Find view after searching 'sunny ammo': the Items group with 'Sunny Ammo synthetic high-tops' expanded into Feminine body and Masculine body, one of them open down to its mesh and its two materials, red_yellow_graphic and dec_lights." %}

## Search

Press **Find...** (the button in the empty view, or the magnifier in Find's title bar, shown when you hover its header) and type:

| Type | Finds |
|---|---|
| A garment's in-game name, or part of it | `punk jeans`, `Sunny Ammo`, `samurai jacket`. The names come from your game, in English |
| A record id | `Items.Pants_03_basic_01`, or part of it such as `CasualShoes_01` |
| Part of a mesh's path | `s1_055`, `t2_078 samurai` |

The first search reads the game's list of clothing (about 2,000 items) and takes a few seconds; after that, searches are instant. The view's header line counts the results: `"sunny ammo": 3 items, 0 meshes`. Exact phrases come first, and the game's own items before crafting copies.

Results come in two groups: **Items** (clothing) and **Meshes** (files). **Clear Find** in the title bar empties the view.

## From a garment to its materials

Open an item and Find walks its chain:

| Level | What it is |
|---|---|
| The item | Its in-game name, described by its slot and record id. Hover it for its entity and appearance names |
| **Feminine body**, **Masculine body** | One look per body type. They often use different meshes: the punk jeans' feminine body wears other pants (`l1_066`) than the masculine (`l1_062`) |
| The mesh | The `.mesh` file the look uses, described by its mesh appearance ("look red_yellow_graphic") and how many of its materials are layered |
| The materials | Each material on that mesh. A layered one shows a layers icon and its setup file; others show their base material, such as `metal_base.remt` |

**Click a layered material** to open its setup in the [setup editor](setup-editor.html), with the exact mask set this mesh uses, and the garment named in the editor's header. Hover a material for its setup, mask and other paths. The setup editor's **In the game** section then lists the items that wear that look, with the command that gives V one ([Your mod in the game](in-the-game.html)).

A mesh found by path opens the other way round: into its appearances (looks), each into its materials. Handy for comparing a mesh's looks, such as a jacket with and without its bags.

## Buttons on the rows

| Button | On | Does |
|---|---|---|
| **Eye** (View in 3D) | Mesh rows | Opens the mesh in REDcode's 3D viewer with its colors. See [View in 3D](view-in-3d.html) |
| **Copy** (Copy Game Path) | Mesh rows and layered materials | Copies the mesh's path, or the material's setup path |
| **Sparkle** (New Material Here) | Material rows | Opens [New Material](new-material.html), aimed at that material on every body's mesh of the garment |
| **+** (Add to Desk) | Mesh rows | Puts the mesh on the [Desk](desk.html), with the look you found it under open, and its layered material in the setup editor |

All appear when you hover a row, and in its right-click menu. The right-click menu of an item, a look or a material also has **Copy REDnode Command**: the `addItem(...)` command that gives V the item, for [REDnode's Console](in-the-game.html). Hover a look for the items that wear it.

## Limits

- Find knows the game's own clothing. Items added by mods (through ArchiveXL) aren't followed yet; find their meshes by path instead.
- Your open project isn't searched yet: open its setups with **Open Setup...** › **A file on disk**, or right-click one › **Open Material in EDGEmat...**. A mesh in your project goes on the Desk with **Open in EDGEmat** in REDcode's Project view.
- Under an item, Find shows the game's files. A [new material](new-material.html) made from them still goes onto your project's own copy of the mesh when the project has one.

## For assistants

The same walk is the MCP tool `mat_find`: "which materials do the punk jeans use?" See [Assistants](assistants.html).
