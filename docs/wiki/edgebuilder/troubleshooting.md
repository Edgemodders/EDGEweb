---
title: Troubleshooting EDGEbuilder
nav_title: Troubleshooting
section: EDGEbuilder
order: 10
description: "What to do when EDGEbuilder's pills are red, REDbridge is missing, a search or a drop fails, keys do nothing, the camera is stuck, previews are missing, or a bake doesn't show, isn't solid or pops in."
reviewed: 2026-11-13
---

# Troubleshooting <span class="y">EDGEbuilder</span>

Find the part where you are stuck, then what you see in the left column. If it isn't here, the [last section](#anything-else) says where to look and where to ask.

| Where you are stuck | |
|---|---|
| [Setting up and the three pills](#setting-up-and-the-three-pills) | EDGEbuilder is missing, or a pill isn't green |
| [Finding assets](#finding-assets) | Search, mods, the project |
| [Dropping](#dropping) | A drop fails or lands wrong |
| [Keys and mouse](#keys-and-mouse) | A key or a click does nothing |
| [The camera and the HUD](#the-camera-and-the-hud) | A stuck view, a missing HUD, other windows |
| [Scenes and previews](#scenes-and-previews) | Objects gone, or not in world |
| [People](#people) | NPCs |
| [Baking](#baking) | The Bake tab, a bake that doesn't show, isn't solid or pops in |
| [Anything else](#anything-else) | The logs, and where to ask |

**Start with the pills.** The three pills at the top of the panel say what's wrong most of the time. Hover one that isn't green for the reason.

## Setting up and the three pills

| You see | Do this |
|---|---|
| EDGEbuilder isn't in the launcher | A new package is listed only in the Mod Manager. Press **F10**, open the launcher, switch on **Mod Manager**, click **EDGEbuilder**, and switch it on and **Pin to launcher** on. See [Open it and allow its permissions](install.html#3-open-it-and-allow-its-permissions) |
| EDGEbuilder isn't in the Mod Manager either | It isn't in the game folder. In EDGEdeck, check that EDGEbuilder is ticked and deployed. See [Install EDGEbuilder](install.html#2-install-edgebuilder) |
| First pill: **No game** | REDnode isn't connected to a running game. Searching still works, dropping doesn't. Start the game with REDnode deployed |
| First pill: **Load a save** | EDGEbuilder works in the world, not in the main menu. Load a save |
| First pill: **Needs Codeware 1.14+** | Add Codeware to EDGEdeck, deploy, and start the game again. In REDnode's Mod Manager, EDGEbuilder's **Requires** line shows a tick when it's right |
| Second pill: **Allow REDbridge (hover)** | You haven't allowed EDGEbuilder to use REDbridge. In the Mod Manager, click **EDGEbuilder**, and under **Permissions** switch **Allowed** on for the REDbridge line. EDGEbuilder looks again every five seconds |
| Second pill: **No REDbridge** | None was found on this PC. In EDGEdeck, press **Get REDbridge** in the Set up group. See [Get the frameworks and REDbridge](install.html#1-get-the-frameworks-and-redbridge) |
| Second pill: **REDbridge failed** | Hover the pill to see the error it reported. Press **Restart REDbridge** on the Settings tab. If you typed a path in **REDbridge.exe**, empty it and press **Save and restart REDbridge**. If the error says the game folder wasn't found, type it in **Game folder**. For more, see [REDbridge's troubleshooting](../redbridge/troubleshooting.html) |
| Third pill: **No index** or **Index failed** | The list of models needs REDbridge. Fix the second pill first, then press **Rebuild asset index** on the Settings tab |

## Finding assets

| You see | Do this |
|---|---|
| Search finds nothing | Check the third pill (see above). Then check the two rows of tabs: **Game** hides your mods' files, **Mods** hides the game's, and **Meshes**, **Entities** or **NPCs** hide the other kinds. Click **All** and **Everywhere** |
| A light, a decal or a sound isn't listed | Only meshes, entities and people can be placed today. The other kinds are planned |
| The **Mods** tab doesn't list my mod | EDGEbuilder reads the archives in the game's `archive\pc\mod` folder and REDmod's `mods\<name>\archives`. A mod in EDGEdeck counts once it's deployed. Only meshes and entities are listed, so a mod that changes only textures or items has nothing to show |
| **No REDcode project open**, though one is | See [The Bake tab doesn't see my REDcode project](#the-bake-tab-doesnt-see-my-redcode-project): the cause is the same |
| A mod's model has no size or appearances | Your REDbridge is older than 0.12.0, most likely a copy another tool fetched a while ago. Update it: EDGEdeck's **Update REDbridge**, or **Update REDbridge** in REDnode's Mod Manager |
| An entity has no size, and its selection box is a 1 m cube | Many entities have no size in the game's own files. They drop and move as usual |
| My project's file shows the game's version, or doesn't show | A project file is in the game only once the project is packed and loaded. Press **Pack and Play** in REDcode. See [Files from your project](browsing.html#files-from-your-project) |

## Dropping

The message line under the pills says why a drop failed:

| Message | Do this |
|---|---|
| "Not connected to the game..." | Start the game with REDnode, then load a save |
| "Load a save first." | Load a save |
| "The world is not ready yet; try again in a moment." | Wait a moment after a save loads, and try again |
| "No scene is open: open one or make one on the Library tab." | You closed the scene. Open one, or make a new one, on the Library tab |
| "Drop failed, nothing was added: ..." | The game refused the drop, and the rest of the line says why. Nothing is left behind. If it keeps happening with one asset, report it with the log |

| You see | Do this |
|---|---|
| **Drop at click** or **Drop to floor** finds nothing | The game makes its ground solid only near the camera, even where you can see it from afar. Fly closer and try again |
| An object dropped to the floor falls through another object of mine | Previews aren't solid. Drop to floor lands only on the game's own ground and objects. Lift the object with **G**, **Z** and a number instead |

## Keys and mouse

| You see | Do this |
|---|---|
| **Edit** does nothing, or the mouse still moves V | REDnode's windows don't have the mouse. Press **F10** once, so a cursor shows, then switch **Edit** on |
| G, R, S, Delete or a Ctrl key does nothing | Check three things. **Edit** must be on. The cursor must not be in a text field of the panel: click in the world first. And REDnode's windows must have the keyboard: press **F10** |
| Ctrl+Z undoes my typing, not the move | The cursor is still in a field. Click in the world, then press Ctrl+Z |
| **Esc** made the cursor vanish and the game took over | With nothing in progress, Esc leaves REDnode's interactive mode. Press **F10** to come back. To cancel a move, press Esc while it is still going, or right-click |
| Pressing **S** says "Only meshes scale" | An entity's size is fixed by its own file. Only meshes can be scaled |
| A person doesn't follow the gizmo while I drag | That is how people move: see [People](#people) |
| My clicks seem to do nothing, and a bar shows at the top | A long change is running, and your clicks wait behind it. Wait, or press **Stop**. See [When EDGEbuilder is busy](arranging.html#when-edgebuilder-is-busy) |

## The camera and the HUD

| You see | Do this |
|---|---|
| "No camera yet" in the help line | EDGEbuilder hasn't got the game's camera yet. Load a save if you haven't. After a save loads, it picks the camera up by itself |
| V's view is stuck on the editor camera, or the HUD is gone, with EDGEbuilder closed | EDGEbuilder stopped while Edit was on. **Load a save**: that gives V's camera back. EDGEbuilder also repairs it by itself the next time it starts. See [If V's view gets stuck](camera.html#if-vs-view-gets-stuck) |
| The right mouse button doesn't look around | **Use EDGEbuilder's own camera** is off on the Settings tab. Switch it on |
| The HUD stays on screen with Edit on | **Hide the game's HUD** is off on the Settings tab. Switch it on |
| I can't click another REDnode window while Edit is on | EDGEbuilder's layer covers it. Switch **Edit** off, use the other window, and switch Edit back on |
| Other REDnode windows stay on screen while Edit is on | EDGEbuilder isn't allowed solo mode. See [Builder mode and other windows](camera.html#builder-mode-and-other-windows) |
| <a id="edgebuilder-disappears-when-i-open-a-menu"></a>EDGEbuilder disappears when I open a menu | That is on purpose. The whole window, with the gizmo, hides while the game shows a menu: pause, Settings, inventory or map. It comes back when the menu closes, with Edit and the camera as they were. A move under way when the menu opened is cancelled |
| The editor doesn't fill my ultrawide screen | It should cover the whole game view at any width. Check that EDGEbuilder and REDnode are up to date, and tell us on Discord |

## Scenes and previews

| You see | Do this |
|---|---|
| My objects are gone after loading a save | They're still in the scene, and they come back by themselves a moment after the save is in. If any stay missing, press **Rebuild previews** on the Scene tab |
| An object says **not in world**, and **Rebuild previews** doesn't bring it back | The game couldn't place it. Most often it comes from a mod that isn't installed any more: look at the **This scene needs:** line on the Scene tab, and install or deploy that mod. `rednode-mods.log` says why each one failed |
| Rebuild previews or Undo leaves objects out | The message says how many the game didn't place. They're still in the scene: press **Rebuild previews** again |
| "The scene open last time ... is no longer there" | The scene's file was moved, renamed or deleted outside the game, or the Library folder was moved. EDGEbuilder opened another scene instead. Put the file back and press **Refresh** on the Library tab. If you moved the Library, set **Library folder** on the Settings tab |
| "The scene file could not be read" | The file was damaged. EDGEbuilder set the damaged file aside, beside the scene, with `.unreadable-` and the time added to its name, and started the scene empty. Send us that file when you report it |
| An object I don't remember placing is in the scene | A scene is kept between sessions, including drops from earlier ones. Select it on the Scene tab and press **Delete** |
| My scene's previews came back after I took its bake out | That is on purpose: without a bake in the game, the open scene shows its objects as previews again, so you can keep editing. Press **Close** on the Scene tab to take them away. The scene stays saved |

## People

| You see | Do this |
|---|---|
| A person doesn't follow the gizmo while I drag | That is how people move. Only the gizmo moves while you drag. When you let go, the person steps to the new place. The game moves its people only through their own behaviour, so a live drag would make them jump |
| A person won't tilt or scale | People always stand upright, and can't be scaled |
| A person I placed is gone after baking | People are not baked. They show only while EDGEbuilder is running and their scene is open. If the scene's bake is in the game, its previews stay off, people included: press **Rebuild previews** to see them |
| The NPCs tab is empty | The list of people is read from the game the first time, which takes a few seconds and needs REDbridge. Check the second pill |

## Baking

| You see | Do this |
|---|---|
| The Bake tab says "No scene is open" | On the **Library** tab, pick a scene and press **Open**, or make one with **New scene here** |
| The **Bake** button is off, or a check is red | A red check stops the bake. [The checks](baking.html#the-checks) lists each one with its fix |
| The Bake tab says "No REDcode project is open" | A bake goes into a REDcode project. Open or make one in REDcode, in VS Code, then press **Refresh** on the Bake tab. If it still says so, see [below](#the-bake-tab-doesnt-see-my-redcode-project) |
| The Bake tab bakes into the wrong project | The tab follows the project REDcode tells it about. With several VS Code windows open, that is the last one you used. Close the other windows. The line under the scene's name says which project: hover it for the folder |
| Baked objects pop in close, or vanish as I walk away | Each baked object is drawn only within its **Seen from** distance: about 40 m for a crate when the field is empty. Select the objects, type a larger distance in **Seen from, m**, and bake again. See [Seen from](baking.html#seen-from). If the Bake tab warns that REDbridge does not pass Seen from on, update REDbridge first. Hills and buildings hide objects too: check from the editor camera, high above |
| Objects are there twice, or flicker | The bake and the scene's previews are both in the world. That happens after **Rebuild previews** on a baked scene. Close the scene, or restart the game |
| A bake I renamed is in the world twice | A bake is named after its scene. After a rename, bake again, then take the old bake out with its trash icon in **Bakes in this project**, and Pack and Install |

<a id="my-bake-doesnt-show-in-the-game"></a>

### My bake doesn't show in the game

1. **Restart the game.** A bake comes in only as the game starts. Loading a save isn't enough, and neither is REDcode's **Pack and Play**.
2. **Pack and Install** after every bake. Baking writes into the project. Packing and installing puts it in the game.
3. **ArchiveXL** must be deployed in the game: the game reads a bake through it. In EDGEdeck, look for it in the Frameworks group. See [What you need to bake](baking.html#what-you-need-to-bake).
4. **Packed as a REDmod?** If you switched REDcode's `redcode.pack.redmod` setting on, the game must start with `-modded`. EDGEdeck's **Run game** does that for you.
5. Still nothing? Look at the Bake tab after the game starts. **Its bake is in the game** means the game has it, so look where the objects were placed: press **Objects** on the Library tab and click an object twice to fly to it. If the line isn't there, check in EDGEdeck that the project's mod is ticked and deployed.

### V walks through a baked mesh

| Cause | Fix |
|---|---|
| **Solid when baked** was off for that mesh | Select it on the Scene tab, switch it on, bake again, Pack and Install, restart |
| The mesh has no collision data | The Scene tab says **No collision data, so this mesh can't be solid.** Use another mesh, or an entity that is solid in the game, such as `crate_red.ent`. See [The Solid switch](baking.html#the-solid-switch) |
| REDbridge is older than 0.12.0 | The Bake tab warns that it writes no solid meshes. Update REDbridge, then bake again |
| It's a preview, not the bake | Previews are never solid. The Bake tab says whether the scene's bake is in the game |

### The Bake tab doesn't see my REDcode project

REDcode tells EDGEbuilder which project is open through a small REDnode package of its own, called `redcode`, which it puts in the game by itself.

1. Press **Refresh** on the Bake tab. It asks REDcode again.
2. If the tab says REDcode's package is not in the game, open VS Code's settings and search for REDcode. **Game Path** must be your game folder, and **REDnode: Install Package** must be on (it is by default). REDcode's output then says "Installed REDcode's REDnode package". Press **Refresh** again.
3. In REDnode's Mod Manager, check that a package called `redcode` is listed.
4. With several VS Code windows, the last one you used with a project open counts.

## Anything else

REDnode writes its logs to `red4ext\logs` in the game folder (the folder where Cyberpunk 2077 is installed). Close the game before you read them.

| Log | What's in it |
|---|---|
| `rednode-mods.log` | EDGEbuilder's own lines, marked `[edgebuilder]`: REDbridge, the list of models, drops, builder mode |
| `rednode-overlay.log` | REDnode's side: the program that runs EDGEbuilder's window |
| `rednode-<date>.log` | REDnode inside the game. Useful when the cursor misbehaves |

To find EDGEbuilder's lines, open `rednode-mods.log` in Notepad and search for `[edgebuilder]`. While the game runs, REDnode's [Mod log](../rednode/debugging.html#the-mod-log) window shows the same lines.

Still stuck? Ask on [Discord]({{ site.discord }}) or [open an issue](https://github.com/Edgemodders/EDGEbuilder/issues). Say which EDGEbuilder, REDnode and REDbridge versions you have, and paste the `[edgebuilder]` lines.
