---
title: EDGEmat's Desk
nav_title: The Desk
section: EDGEmat
order: 5.5
description: "EDGEmat's Desk: the meshes and setups you are working on, with your edits and variations, kept across restarts until you add them to a mod project."
reviewed: 2026-11-13
---

# The <span class="y">Desk</span>

The Desk is where you try things before they go into a mod. Put a garment's mesh on it, recolor its materials, look at it in 3D, make a second version beside it, and add the one you like to a project when you are ready. Nothing on the Desk touches your projects or the game until you say so, and the Desk keeps everything across restarts.

It is the first view in EDGEmat's sidebar, above [Game Materials](game-materials.html) and [Find](find.html). New in version 0.3.2.

{% include shot.html caption="The Desk" shows="EDGEmat's Desk with two lines for the same jeans mesh, the second named 'blue', both reading 'edited on the Desk', the first unfolded to its looks (leather 'worn by 2 items', default 'no item') and leather's layered material." %}

## Put something on the Desk

| From | Do |
|---|---|
| [Find](find.html) | Find a garment by its name (`comfy rocker`), unfold it to its mesh, and press the **+** on the mesh's row (**Add to Desk**) |
| REDcode's **Game Assets** | Right-click a `.mesh` › **Open in EDGEmat**. Game Assets knows file paths, not in-game names: use its funnel (**Filter Game Assets**) with part of the file name, such as `l1_012_pwa` |
| REDcode's **Project** view, VS Code's Explorer, a mesh's editor tab | Right-click a `.mesh` › **Open in EDGEmat**. A mesh from your project shows **from &lt;project&gt;** |
| REDcode's 3D view | **Open in EDGEmat** on the mesh you are looking at, with the look on screen |
| A game `.mlsetup` in Game Assets | **Open in EDGEmat** puts the setup itself on the Desk and opens it |

The mesh lands on the Desk, selected, with its looks under it. EDGEmat opens the look the most of the game's items wear, and if that look has one layered material, opens it in the [setup editor](setup-editor.html) too (or brings its tab forward). With several layered materials, the status bar asks you to click one.

Each look says who wears it: **worn by 2 items**, or **no item** for a look only NPCs wear. Pick a look V can wear, so you can see your change in the game. Hover a look for the items' names and ids.

## Edit on the Desk

Under a look, click a layered material (the stacked-sheets icon, grey text **multilayered · ...mlsetup**). The setup editor says "on the Desk" and "Ctrl+S saves it on the Desk". Change layers as usual, then press **Ctrl+S**: no question, the edit is kept on the Desk, and the line and the material read **edited on the Desk**.

- **View in 3D** (the eye on a mesh line) shows the Desk's edit. The game's own mesh, opened elsewhere, keeps the game's look.
- The edit lives on the Desk line only. Your projects and the game don't change.

## Variations

Open the same mesh again once its line has an edit, and it comes in fresh as a second line, **..., variation 2**, with the game's colors. Each line keeps its own edits, so you can try two colorways side by side and compare them in 3D.

Right-click a line › **Rename...** to give it a name, such as `blue`: the line then reads **..., blue**. Without an edit, opening the mesh again just selects its line.

## Add to a project

| Button | Adds |
|---|---|
| The **new-file icon** on a line (hover it), or right-click › **Add to Project...** | That line |
| The **+** in the Desk's title bar (**Add the Desk to Project...**) | Every line. When one mesh is there twice, it asks which variation goes in |

If REDcode has a project open, it goes there; otherwise you pick one. A dialog says what will be written, with two buttons: **Add to Project**, or **Add and Take It Off the Desk** (**Add and Clear the Desk** for all).

Each edited setup is saved as a **new setup**, named after your project, and the mesh is copied into the project and pointed at it, so the change shows in the game with no other mod. Meshes the project already has are only pointed at the new setups.

- **A project that isn't open in REDcode** opens afterwards, so you see what went in: in this window, which reloads (the Desk stays as it is), or in a new window when this one has a folder open. REDcode's Project view comes forward, and the message says where the mesh went, with **Pack and Try**.
- **The project already has its own copy of the mesh, with other materials** (for example a [new material](new-material.html) on the look you edited): EDGEmat asks first. **Replace with the Desk's** puts the Desk's mesh in, with your edits. **Keep the Project's** keeps the project's copy, and the Desk line stays on the Desk with its edits.

Then pack and install as usual: [Your mod in the game](in-the-game.html).

## Which item to give V

A setup opened from the Desk has an **In the game** section near the top of the setup editor: the game's items that wear that look, each with its REDnode Console command and a **Copy** button. Right-click a look, a material or an item › **Copy REDnode Command** does the same. See [Your mod in the game](in-the-game.html), "Put the item on V".

## Take things off

| Button | Does |
|---|---|
| The **×** on a line (hover it) | Takes that line off. A line with edits asks first: its edits are deleted |
| **Clear the Desk...** in the title bar | Takes everything off, edits included, after asking |

Your projects keep what you added to them. If a setup tab or 3D view still has one of the Desk's files open, Windows may keep that file a moment: the Desk is empty all the same, a note says so, and EDGEmat deletes the file when it next starts.

## Where it lives

In `%LOCALAPPDATA%\EDGEmat\desk`, on your PC only: one folder per line, shaped like a project's `source\archive`. Each EDGE tool has its own Desk; the shared store for work you keep for good is the [EDGE Library](../library.html).

## For assistants

The MCP tool `mat_desk` lists the Desk, puts a mesh or setup on it, takes lines off and adds them to a project; `mat_edit` with `save: "desk"` saves an edit on a line. See [Assistants](assistants.html).
