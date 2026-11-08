---
title: Troubleshooting EDGEbuilder
nav_title: Troubleshooting
section: EDGEbuilder
order: 9
description: "Fixes for common EDGEbuilder problems: red status pills, REDbridge not allowed, drops that fail, keys that do nothing, a stuck camera, windows you can't click, mods and projects, missing previews, and bakes that don't show, aren't solid or pop in."
reviewed: 2026-11-08
---

# Troubleshooting <span class="y">EDGEbuilder</span>

## Start with the pills and the logs

The three pills at the top of the panel say what's wrong most of the time. **Hover a red pill** for the reason.

For anything else, quit the game and look in the game folder's `red4ext/logs`:

| Log | What's in it |
|---|---|
| `rednode-mods.log` | EDGEbuilder's own lines, marked `[edgebuilder]`: REDbridge, the index, drops, builder mode |
| `rednode-overlay.log` | REDnode's host, which runs EDGEbuilder's window |
| `rednode-<date>.log` | REDnode's plugin in the game. Useful when the cursor misbehaves |

When you ask for help, include the `[edgebuilder]` lines.

## Problems and fixes

### The first pill says "No game" or "Load a save"

**No game**: REDnode isn't linked to a running game. Searching still works; dropping needs the game. Start the game with REDnode deployed.

**Load a save**: EDGEbuilder works in the world, not in the main menu. Load a save.

### The first pill says "Needs Codeware 1.14+"

REDnode's world calls need Codeware 1.14 or later. Add Codeware to EDGEdeck, deploy, and start the game again. REDnode's Mod Manager shows EDGEbuilder's **Requires** line with a tick when it's right.

### The second pill says "Allow REDbridge"

You haven't allowed EDGEbuilder to use REDbridge yet. Press **F10**, open the **Mod Manager**, select **EDGEbuilder**, and under **Permissions** switch **Allowed** on. EDGEbuilder looks again every five seconds. See [Install and set up](install.html#allow-redbridge).

### The second pill says "No REDbridge" or "REDbridge failed"

- **No REDbridge**: none was found. In EDGEdeck, use **Get REDbridge** in the Set up group. See [Install EDGEdeck](../edgedeck/install.html#getting-redbridge). If you have it and the pill still says so, update REDnode: EDGEdeck was called REDdeck before 2026-10-17, and REDnode releases from before then look for REDbridge under the old name.
- **REDbridge failed**: it started and stopped. Hover the pill for its last words. Try **Restart REDbridge** in the Settings tab. If you set a path in **REDbridge.exe**, empty it and press **Save and restart REDbridge**, so EDGEbuilder uses EDGEdeck's copy.

If the message says the game folder wasn't found, put it in **Game folder** in the Settings tab.

### Search finds nothing, or assets are missing

Check the third pill. **No index** or **Index failed** means the index needs REDbridge: fix the second pill first, then press **Rebuild asset index** in the Settings tab.

Remember that only meshes and entities are listed today. Lights and other kinds come later.

Check the **Everywhere**, **Game**, **Mods** and **Project** tabs too: **Game** hides your mods' files, and **Mods** hides the game's. The count says what it's filtered by.

### The Mods tab doesn't list my mod

EDGEbuilder reads the archives in the game's `archive\pc\mod` folder and REDmod's `mods\<name>\archives`. A mod in EDGEdeck's library counts once it's deployed. Only meshes and entities are listed, so a mod that changes only textures or items has nothing to show.

### The Project tab says "No REDcode project open"

- You need REDcode 0.10.5 or later, with a project open in VS Code.
- REDcode tells EDGEbuilder through a small REDnode package, `redcode`, that it installs into the game. Check that it's in REDnode's Mod Manager, and that REDcode's setting `redcode.rednode.installPackage` isn't off.
- With several VS Code windows, the last one you used with a project open counts.

### A mod's mesh has no size, or drops with a 1 m box

The size and appearances of a mod's or a project's mesh need REDbridge 0.12.0 or later: update it with EDGEdeck's **Get REDbridge**. With 0.11.0 the asset still drops, with a 1 m box for the gizmo. Many entities have no size even in the game's own files, because their meshes are in an appearance file: those get the 1 m box too.

### My project's file shows the game's version, or doesn't show

A project file is in the game only once the project is packed and loaded. Use REDcode's **Pack and Play**: previews that use a swapped file come back showing the new version. See [Files from your project](browsing.html#files-from-your-project).

### A drop doesn't happen

The message line under the pills says why:

| Message | Fix |
|---|---|
| "Not connected to the game..." | Start the game with REDnode, then load a save |
| "Load a save first." | Load a save |
| "The world is not ready yet; try again in a moment." | Wait a moment after a save loads, and try again |
| "Drop failed, nothing was added: ..." | The game refused the drop; the rest of the line says why. Nothing is left behind. If it keeps happening with one asset, report it with the log |

### Ctrl+Z, Ctrl+C or another Ctrl key does nothing

In the game, Ctrl+Z, Ctrl+Y, Ctrl+C, Ctrl+X and Ctrl+V reach EDGEbuilder only from REDnode 0.52.0. Update REDnode. Until then, use **Undo**, **Redo** and **Duplicate** on the Scene tab.

Also check that no field in the panel has the cursor: a key then goes to the field. Press **Enter** or click in the world first.

### Esc closes REDnode's overlay instead of cancelling

With REDnode older than 0.52.0, Esc always leaves REDnode's interactive mode. Use a right-click to cancel a drag, a Drop at click, a box or a copy. From 0.52.0, Esc cancels while something is in progress, and leaves interactive mode otherwise.

### EDGEbuilder is busy, or my clicks seem to do nothing

A long change, such as an undo or **Rebuild previews** with many objects, runs first, and later clicks wait behind it. The busy bar says what's running and how many changes wait. Wait for it, or press **Stop** to place no more previews for that change. See [When EDGEbuilder is busy](arranging.html#when-edgebuilder-is-busy).

### Rebuild previews or Undo leaves objects out

The message says how many the game didn't place, and `rednode-mods.log` says why. They're still in the scene: press **Rebuild previews** again.

### Drop to floor or Drop at click finds nothing

The game's ground is solid only near the camera, even where you can see it from afar. Fly closer and try again.

### Edit does nothing, or the mouse still moves V

The overlay must be interactive. Press **F10** until REDnode's windows take the mouse, then switch **Edit** on.

### "No camera yet" in the help line

EDGEbuilder hasn't got the game's camera yet. Load a save if you haven't. After a save loads, it picks up the new camera by itself.

### V's view is stuck, or the HUD is gone

EDGEbuilder probably stopped while Edit was on. **Load a save**: that gives V's camera back. EDGEbuilder also puts the camera and the HUD back by itself the next time it starts. If you only want the HUD back, switch **Hide the game's HUD** off in the Settings tab. See [The camera and builder mode](camera.html#if-vs-view-gets-stuck).

### The HUD came back after loading a save with Edit on

That was the behaviour in 0.3.0. Update to 0.3.1 or later, which hides the HUD again when the game brings it back (retested in game on 2026-10-16). If you still see it, check that **Hide the game's HUD** is on in the Settings tab, then report it with the log.

### I can't click other REDnode windows, or they don't hide

While Edit is on, EDGEbuilder's layer covers them. Switch **Edit** off, use the other window, and switch Edit back on.

To have them hide while Edit is on, allow EDGEbuilder **Hiding every other package's windows (solo mode)** in REDnode's Mod Manager. See [Install and set up](install.html#allow-redbridge).

### The cursor stops at the edge of the screen while looking around

That's how looking works with REDnode older than 0.22.0, or EDGEbuilder older than 0.3.2. Update both, and the cursor is held still while you look. Until then, let go of the button, move the mouse back, and carry on.

### Right mouse does nothing, or the HUD stays on with Edit on

One of the Settings tab's switches is off: **Use EDGEbuilder's own camera** or **Hide the game's HUD**. Switch it back on. From 0.3.3 the message line says so when Edit goes on with a switch off.

### Pressing S says "Only meshes scale"

Entities keep the size their template gives them. Only meshes can be scaled.

### My objects are gone after loading a save

They're still in the scene, and the open scene's objects come back by themselves a moment after the save is in. If any stay missing, open the **Scene** tab and press **Rebuild previews**. See [Scenes and baking](scenes.html).

### An object I don't remember placing is in the scene

The scene is kept between sessions, including drops from earlier ones. Select it in the Scene tab and press **Delete**.

### "The scene file could not be read"

The scene file was damaged. EDGEbuilder keeps the damaged file beside the new one, named `working.scene.json.unreadable-<time>`, and starts with an empty scene. Share that file when you report it.

### The EDGEbuilder window is in the wrong place

With REDnode older than 0.17.1, a window position saved from an older, smaller EDGEbuilder window can push the new full-screen one aside. Close the game and remove the `"edgebuilder"` entry from `%APPDATA%\@rednode\overlay\window-positions.json`, or update REDnode.

### EDGEbuilder disappears when I open a menu

From 0.9.2 that is on purpose. The whole window, with the gizmo, hides while the game shows a menu: pause, Settings, inventory or map. It comes back when the menu closes, with Edit and the editor camera as they were. A move or a look under way when the menu opened stops there, and the object goes back to where the move started.

### The editor doesn't fill my ultrawide screen

From 0.6.7 the editor covers the whole game view at any width. It was checked on an ultrawide screen with 0.9.1. If it doesn't, check that EDGEbuilder and REDnode are up to date, and tell us on Discord.

## Baking

### The Bake tab says "No scene is open"

Open a scene first: on the **Library** tab, pick one and press **Open**, or make one with **New scene here**. The **Bake** button stays off until the red checks are gone.

### The Bake tab says "No REDcode project is open"

A bake goes into a REDcode project. Open or make one in REDcode, in VS Code, and the tab picks it up. See [REDcode projects](../redcode/projects.html).

### The Bake tab bakes into the wrong project

The tab follows the project REDcode tells it about. With several VS Code windows open, that may not be the window you are looking at. Close the other VS Code windows, so only the right project is open. The line under the scene's name says which project: **Into the REDcode project** and its name. Hover it for the folder.

### My bake doesn't show in the game

1. **Restart the game.** A bake comes in only as the game starts. Loading a save isn't enough, and neither is REDcode's **Pack and Play**.
2. **Pack and Install** after every bake. Baking writes into the project; packing and installing puts it in the game.
3. **Packed as a REDmod?** If REDcode's **redcode.pack.redmod** setting is on, the game must start with `-modded`. EDGEdeck's **Run game** does that for you.
4. **ArchiveXL** must be installed: the game reads a bake through it.
5. Still nothing? Look at the Bake tab after the game starts: **Its bake is in the game** means the game has it, so look where the objects were placed. If it isn't there, check that EDGEdeck deployed the project.

### V walks through a baked mesh

| Cause | Fix |
|---|---|
| **Solid when baked** was off for that mesh | Select it on the Scene tab, switch it on, bake again, Pack and Install, restart |
| The mesh has no collision data | The Scene tab says **No collision data, so this mesh can't be solid.** Use another mesh, or an entity with its own collider, such as `crate_red.ent` |
| REDbridge is older than 0.12.0 | The Bake tab warns that it writes no solid meshes. Update it with EDGEdeck's **Get REDbridge**, then bake again |
| It's a preview, not the bake | Previews are never solid. The Bake tab says whether the scene's bake is in the game |

### Baked objects pop in close, or vanish as I walk away

Each baked object is seen only within its **Seen from** distance, and by its size when that's empty: about 40 m for a crate.

- Select the objects on the Scene tab and type a larger distance in **Seen from, m**, then bake again. See [Seen from](scenes.html#seen-from).
- With REDbridge older than 0.12.1, small meshes are seen only as far as the game allows for their size (about 60 m for a crate), whatever Seen from says. The Bake tab warns about it. Update REDbridge with EDGEdeck's **Get REDbridge**, then bake again.
- Hills and buildings hide objects too: check from the editor camera, high above.

### Objects stand twice, or flicker

The bake and the scene's previews are both in the world. That happens after **Rebuild previews**, which brings the previews back so you can edit a baked scene. Close the scene, or restart the game: a scene whose bake is in the game places no previews by itself.

### My scene's previews came back after I took its bake out

That's on purpose: once the bake leaves the game, the open scene shows its objects as previews again, so you can keep editing. Press **Close** on the Scene tab to take them away. The scene stays saved.

### A bake I renamed stands twice

A bake goes by the scene's name. After a rename, bake again, then take the old bake out with its trash icon in **Bakes in this project**, and Pack and Install.

## Something else

Ask on [Discord]({{ site.discord }}) with the `[edgebuilder]` lines from `rednode-mods.log`, or [open an issue](https://github.com/Edgemodders/EDGEbuilder/issues) on EDGEbuilder's repo.
