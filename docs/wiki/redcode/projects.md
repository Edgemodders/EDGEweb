---
title: REDcode projects
nav_title: Projects
section: REDcode
order: 3
description: "Make or open a WolvenKit project in REDcode, find your way around the Project view and its buttons, and learn what goes in each folder."
reviewed: 2026-11-13
---

# <span class="y">Projects</span>

A mod starts as a **project**: a folder where you collect the game files you change, the files you export to edit elsewhere, your scripts and tweaks, and the finished mod. REDcode uses WolvenKit's own project format, so a project moves freely between the two tools.

| On this page | |
|---|---|
| [What a project is](#what-a-project-is) | The folders, and what goes in each |
| [Make a new project](#make-a-new-project), [Open](#open-a-project), [Close](#close-a-project) | |
| [The Project view](#the-project-view) | [Opening files](#opening-files), [the buttons](#the-buttons), [the right-click menu](#the-right-click-menu) |
| [Filter the project](#filter-the-project) | Narrow the list |
| [Getting files into a project](#getting-files-into-a-project) | From the game, a mod, TweakDB or another tool |

## What a project is

A project is any folder with a `.cpmodproj` file in it. That file names the mod and holds a few details such as the author and version.

| Folder | In the Project view | What goes in it |
|---|---|---|
| `source/archive` | **Archive** | Game files you add or change. Each keeps its game path, such as `base\characters\...`. Pack puts them into your mod's `.archive` |
| `source/raw` | **Raw** | Files exported to formats other tools edit: PNG, glTF, Ogg. See [Export and import](export-import.html) |
| `source/resources` | **Resources** | Files the mod ships as they are: [TweakXL](../glossary.html#game-and-modding-terms) tweaks, [ArchiveXL](../glossary.html#game-and-modding-terms) `.xl` files, scripts, [CET](../glossary.html#game-and-modding-terms) mods. They keep their place under the game folder, so `r6/tweaks/my.yaml` lands in the game's `r6/tweaks` |
| `packed` | **Packed** | The finished mod, laid out like the game folder. Pack rebuilds it. See [Pack, install and run](pack-install.html) |

**Why game paths matter.** A mod replaces a game file by shipping a file with the same path. The game then loads the mod's copy wherever it would have loaded its own. That is why a file under Archive must keep its path exactly, and why you only put files there that you mean to change.

Two more folders show only when a project has them:

| Folder | In the Project view | What goes in it |
|---|---|---|
| `source/scenes` | **Scenes** | [EDGEbuilder](../edgebuilder/)'s scenes. They aren't packed |
| `source/customSounds` | **Custom Sounds** | Only in REDmod projects that add new sounds: the WAV files the mod's `info.json` lists. See [Packing as a REDmod](pack-install.html#packing-as-a-redmod) |

REDcode adds one folder of its own, `.redcode`, only when it installs a mod without EDGEdeck. It records which files it put in the game.

## Make a new project

1. Run **REDcode: New Project**, or press the **New Project** button (a folder with a plus) in the Project view's title bar.
2. Type a name, for example `my_jacket`. It's also the mod's name, and the name of the mod's `.archive` file.
3. Choose the folder to create the project in: anywhere outside the game folder. REDcode makes a folder with the project's name there.

**You should see** VS Code open the new folder, and the Project view show the project with **Archive**, **Raw**, **Resources** and **Packed** under it.

**Naming.** REDcode accepts letters, digits, spaces, `-` and `_`. This wiki uses short names in small letters with no spaces, such as `my_jacket`, and recommends you do the same: some features use the mod's name inside game paths (your project's text file is `my_jacket\localization\en-us.json`), and Pack warns about game paths with capital letters or spaces, because the game may not find them.

Set `redcode.author` in VS Code's settings once to have your name written into new projects.

## Open a project

Open the project's folder in VS Code with **File**, **Open Folder...**. REDcode notices the `.cpmodproj` file and the Project view fills in. A project made in WolvenKit opens the same way.

With no project open, the Project view shows **New Project** and **Open Folder** buttons.

## Close a project

**Close Project**, in the Project view's **`...`** menu or the command palette, closes the project's folder, and the Project view goes back to New Project. In a workspace with other folders, only the project's folder is removed. Nothing is deleted.

## The Project view

Click the REDcode icon in the activity bar. The Project view shows the open project as one tree: the project at the top, with the mod name and version beside it, and its folders below.

{% include shot.html caption="The Project view" shows="The Project view with a small project expanded: the project row with mod name and version, then Archive with a few game files, Raw with an exported PNG, Resources with a tweak file, and Packed." %}

### Opening files

Click a file and REDcode opens it in the right place:

| File | Opens in |
|---|---|
| Game files: `.ent`, `.app`, `.mesh`, `.inkatlas`, materials, animations, scenes and the other CR2W types | The [CR2W editor](editing.html). A `.mesh` opens on its [3D view](viewers.html#meshes-in-3d), an `.anims` file on its [Animations view](viewers.html#animations) |
| Textures: `.xbm`, `.dds`, `.tga`, and in the Project view PNG, JPG, BMP and TIFF too | The [texture viewer](viewers.html#textures) |
| Sounds: `.wem`, `.opus` | The [audio player](viewers.html#sounds) |
| `.glb` and `.gltf` | The [3D mesh viewer](viewers.html#meshes-in-3d) |
| Text: tweaks, YAML, Lua, JSON, `.xl` | VS Code's text editor |
| [EDGEbuilder](../edgebuilder/) scenes, `<name>.scene.json` | VS Code's text editor, as JSON |

### The buttons

The view's title bar holds the buttons you use most. Hover over one to see its name.

| Icon | Button | Does |
|---|---|---|
| A package | **Pack** | Builds the mod into `packed` |
| A rocket | **Pack and Install** | Packs, then puts the mod in the game |
| A flame | **Pack and Play** | Packs, then swaps the mod into the running game through REDnode |
| A play triangle | **Run Game** | Starts Cyberpunk 2077 |
| A folder with a plus | **New Project** | Makes a new project |
| A circling arrow | **Refresh Project** | Reads the project folder again |
| A funnel | **Filter the Project** | Narrows the tree as you type |
| **`...`** | The menu | **Install**, **Uninstall** and **Close Project** |

What each of the first four does, and when to use which, is on [Pack, install and run](pack-install.html#which-button).

Hover over a file or folder and more buttons appear on the right of its row: **Export to Raw** or **Import from Raw** where the file can be converted, **Copy Path**, **Reveal in File Explorer** and **Delete**.

### The right-click menu

| Command | Does |
|---|---|
| Export to Raw, Import from Raw | Convert between game formats and editable ones. Shown only on files and folders that can be converted. See [Export and import](export-import.html) |
| Edit in Blender | On a `.glb`, `.gltf` or `.mesh`: opens the model in Blender, and imports it back each time you save there. See [Edit in Blender](export-import.html#edit-in-blender) |
| Add to Library... | On a file under Archive: saves it, with the files it needs, as one item in the [EDGE Library](../library.html), the store the EDGE tools share. See [The EDGE Library](other-tools.html#the-edge-library) |
| Open as JSON | Opens the game file as WolvenKit JSON text. See [Editing as JSON](editing.html#editing-as-json) |
| Open in CR2W Editor | On a texture: opens it in the CR2W editor, with its image above the property grid |
| Open With... | VS Code's list of editors that can open the file, as in the Explorer |
| Copy Path | Copies the full path on disk. The status bar shows what was copied |
| Reveal in File Explorer | Opens the folder in Windows File Explorer |
| Delete | Asks first, counting the files in a folder, then sends it to the Recycle Bin |

## Filter the project

**Filter the Project**, the funnel in the title bar, narrows the tree to matching files as you type. It works the same as the Game Assets filter: see [Filter](game-assets.html#filter). **Clear the Project Filter** brings the whole tree back.

## Getting files into a project

| From | How |
|---|---|
| The game | **Add to Project** in [Game Assets](game-assets.html#add-to-project). The file lands under Archive at its game path |
| The game's texts | **Add to Project Onscreens** in the [LocKeys view](game-assets.html#the-lockeys-view) |
| A mod you have installed in EDGEdeck | EDGEdeck's **Add to Project**. See [EDGEdeck and REDcode](../edgedeck/redcode.html) |
| TweakDB | **New Tweak from This Record** writes a tweak file under Resources. See [TweakDB and tweaks](tweakdb.html) |
| Another tool | Save it under Raw and use **Import from Raw**, or put it under Resources by hand |

Your project is a normal folder, so Git works on it like on any code. Keep game files you haven't changed out of it: they make the mod bigger and can overwrite other mods.

**New to this?** [Your first mod](first-mod.html) makes a project and takes it into the game.
