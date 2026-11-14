---
title: Editing game files
section: REDcode
order: 6
description: "Change game files in REDcode's CR2W editor: reading the tree, the property grid, search, the table and atlas views, the Properties view, undo and save, and editing as JSON."
reviewed: 2026-11-13
---

# Editing game <span class="y">files</span>

Most game files are in a binary format called **CR2W**: data only the game and modding tools can read. REDcode opens them in the **CR2W editor**: a tree of what's in the file on the left, and the selected part's properties on the right, ready to change. WolvenKit's own reader and writer do the work, through REDbridge, so what you save is a file WolvenKit and the game understand.

| On this page | |
|---|---|
| [Which files open in it](#which-files-open-in-it) | About forty file types |
| [Reading the tree](#reading-the-tree) | What you're looking at |
| [Changing values](#changing-values), [Undo, redo and save](#undo-redo-and-save), [Search in a file](#search-in-a-file) | The everyday work |
| [Try it: change one value](#try-it-change-one-value) | A light's radius |
| [Localization files: the table view](#localization-files-the-table-view) | The game's texts |
| [Atlases: the atlas view](#atlases-the-atlas-view) | Interface pictures |
| [The Properties view](#the-properties-view) | The same grid, in the sidebar |
| [Why a value looks different after saving](#why-a-value-looks-different-after-saving) | Three rules of the format |
| [Editing as JSON](#editing-as-json) | The whole file as text |

{% include shot.html caption="The CR2W editor" shows="An .ent file from a project open in the CR2W editor: the tree of chunks on the left with a component selected, its properties in the grid on the right, and the search box in the footer." %}

## Which files open in it

Clicking a game file in the Project view or Game Assets opens the CR2W editor. That covers about forty file types, including entities (`.ent`, `.app`), meshes, atlases (`.inkatlas`), materials (`.mi`, `.mt`, `.mlsetup`, `.mlmask`), animations, rigs, interface widgets, scenes, quests, journals and the world's streaming sectors. [The file types you'll meet](finding.html#the-file-types-youll-meet) says what the common ones are.

- A `.mesh` opens on its [3D view](viewers.html#meshes-in-3d) first, and an `.anims` file on its [Animations view](viewers.html#animations). **Tree** switches to the editor.
- A texture (`.xbm`) opens in the texture viewer. **Open in CR2W Editor** in the Project view's right-click menu shows it in the editor instead, with the image above the grid and the texture's settings (format, compression, flags) in the grid.
- `.json` and `.csv` files that are CR2W inside, such as the game's localization files, offer the editor under **Open With...**.

Files from Game Assets open read-only, with a banner: *This is the game's copy and is read-only. Add the file to the project to edit it.*

## Reading the tree

A game file is a nest of named things. The tree on the left shows them:

- The top entry is the file itself, with its type.
- Under it are its **properties**: named values. Some hold a single value, such as a number or a name. Some hold a list. Some hold another object with properties of its own, which you can open in turn.
- Click any entry (the docs call it a **node**) and the grid on the right shows its properties, each with its type and its value.

In an entity (`.ent`), the list you'll use most is `components`: the parts the object is made of, such as a mesh, a light or a collision shape. Open `components`, click a component, and its settings are in the grid.

## Changing values

Select a node in the tree, and its properties show in the grid. Every kind of value has its own control:

| Value | How you edit it |
|---|---|
| Numbers | Type the new number and press Enter. It's stored as the game stores it (see [Why a value looks different after saving](#why-a-value-looks-different-after-saving)) |
| Names and paths | Edit the text |
| A fixed list of choices (an enum) | Pick from a dropdown |
| On or off | A checkbox |
| Lists (arrays) | Add, remove, and move items up and down |
| An empty place for an object (a handle) | Create the object, with the game's default values |

The footer says what each edit did, such as *Set components.0.radius*. Large files open quickly, because the editor reads only the part you're looking at.

You can drag the line between the tree and the grid to resize them. Double-click it to reset.

## Undo, redo and save

The CR2W editor works like any VS Code editor:

- `Ctrl+Z` and `Ctrl+Y` undo and redo.
- The tab shows a dot while you have unsaved changes.
- `Ctrl+S` writes the file through WolvenKit's writer and refreshes the view.
- If VS Code closes with unsaved changes, they're backed up and restored next time.

## Search in a file

The search box in the editor's footer finds values and property names anywhere in the file. Press Enter to search, click a hit to jump to it in the tree, and press Esc to clear the results.

## Try it: change one value

This changes the reach of a light the game uses in photo mode. It needs a project open ([make one](projects.html#make-a-new-project) if you have none).

1. In **Game Assets**, press **Filter Game Assets** and type `photomode_arealight`.
2. On `base\entities\lights\photomode_arealight.ent`, press **Add to Project**.
3. In the Project view, click the file under **Archive**. It opens in the CR2W editor.
4. In the tree, open `components` and click the first component.
5. In the grid, find `radius`, type `12` and press Enter.
6. Press `Ctrl+S`.

| After | You should see |
|---|---|
| Step 2 | The file selected under Archive in the Project view |
| Step 5 | *Set components.0.radius* in the footer, and a dot on the tab |
| Step 6 | The dot gone. Close and reopen the file: `radius` is 12 |
| Clicking `compiledData` in the tree | A yellow banner and greyed-out fields. See [the rules](#why-a-value-looks-different-after-saving) |

The edit itself was tested this way. What the bigger radius looks like in the game's photo mode has not been checked, so treat this as practice with the editor. Delete the file from your project afterwards (right-click, **Delete**) if you don't want it in your mod.

## Localization files: the table view

The game's text files, such as `onscreens.json` and the subtitle files, open as a **Table**: one row per text, with its key.

- Type in the filter box to narrow the rows by key or text.
- Click a text to edit it in place. Most entries keep their text in `femaleVariant` and leave `maleVariant` empty.
- Drag the edge of a column header to resize a column. Double-click it to fit the column to its keys.
- **Add row** adds a new entry and scrolls to it. Each row has a delete button.
- **Tree** shows the same file as the normal tree.

To find a text by its words across the whole game, use the [LocKeys view](game-assets.html#the-lockeys-view). Its **Add to Project Onscreens** copies an entry into your project's file and opens this table on its row.

{% include shot.html caption="The table view" shows="A localization file in the table view: the filter box, rows with their keys and texts, one text being edited, and the Add row button." %}

## Atlases: the atlas view

An atlas (`.inkatlas`) is one texture cut into many small pictures, called parts, that the game's interface uses: icons, for example. It opens in the **Atlas** view: the texture with every part drawn over it as a rectangle.

- Click a rectangle, or a part in the list, to select it. The list has its own filter.
- Edit a part's rectangle in pixels. REDcode also updates the coordinates the game itself reads, so the two always agree.
- Add and delete parts.
- An atlas can hold the same pictures at more than one size, each in its own **slot**: usually one texture for 4K screens and one for 1080p. The view shows one slot at a time and lets you switch.
- **Fit**, **1:1**, **Pixels** and **Labels** change how the texture shows. **Tree** is one click away.

{% include shot.html caption="The atlas view" shows="An .inkatlas in the atlas view: the texture with part rectangles drawn over it, one part selected and its pixel rectangle in the side list." %}

## The Properties view

The **Properties** view, the last view in the REDcode sidebar, shows the selected node of the editor you're in, in the same grid, and you can edit it there. That lets the editor stay on the table, the atlas or the 3D view while the values sit in the sidebar. An edit in either place shows in the other.

## Why a value looks different after saving

The format has three rules that explain almost every surprise:

| Rule | What you see |
|---|---|
| The game stores numbers to about seven digits | `0.22` reads back as `0.219999999`, which is the same number to the game. A change in the eighth digit or later is lost |
| An `.ent` or `.app` file holds its components twice: in `components`, the list you edit, and in `compiledData`, a ready-to-load copy that is rebuilt from `components` every time the file is saved | REDcode shows `compiledData` read-only, with a note. Edit the component under `components` and `compiledData` follows |
| Values at their default aren't stored | Setting a value back to its default makes the file smaller. Nothing is lost |

## Editing as JSON

Every game file can also be read as **WolvenKit JSON**: the same tree, written out as text. Use it to read a whole file at once, to compare two files, to change many values with find and replace, or to hand the file to an AI assistant. For a single value, the tree is quicker and safer.

- **Open as JSON**, in the right-click menu of the Project view or Game Assets, opens the file as JSON in a normal text tab.
- On a file from your project, change the JSON and press **Save JSON to Project**, the button in the editor's title bar. REDcode asks to confirm, rebuilds the game file in `source/archive` from the JSON, and reads it back into the tab.
- A message then says whether the file reads back exactly as saved. If a value didn't survive, it names it; the rules above are almost always why.
- Plain `Ctrl+S` only saves the JSON text, which REDcode keeps in its own storage folder, outside your project. It isn't part of your mod and never touches the game file, so a half-finished edit can't break anything.

In the JSON, an edit inside `compiledData` vanishes on save, for the reason above. In the CR2W editor that part is read-only, so you can't make that mistake there.

{% include shot.html caption="Save JSON to Project" shows="A project file open as JSON in a text tab, with the Save JSON to Project button in the editor title bar and the confirmation message after saving." %}
