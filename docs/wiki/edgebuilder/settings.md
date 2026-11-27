---
title: EDGEbuilder settings and keys
nav_title: Settings and keys
section: EDGEbuilder
order: 9
description: "A reference for EDGEbuilder: what is on each of its seven tabs, every setting, and every key and mouse control."
reviewed: 2026-11-27
---

# Settings and <span class="y">keys</span>

A reference to look things up in. The pages before this one explain each part in context.

| On this page | |
|---|---|
| [The panel](#the-panel) | What is on each tab |
| [Settings](#settings) | The Settings tab |
| [Keys and mouse](#keys-and-mouse) | Selecting and positioning, arranging, the camera |
| [REDnode keys](#rednode-keys) | F10 and Esc |

## The panel

EDGEbuilder's panel sits at the right of the screen. From the top:

| Part | What it's for |
|---|---|
| The title bar, with the **Edit** switch | [The Edit switch](positioning.html#the-edit-switch) |
| Three status pills | The game, REDbridge and the list of models. See [Check the three pills](install.html#4-check-the-three-pills) |
| The message line | What just happened, or why something didn't |
| The busy bar, with **Stop** | Shows only while a long change runs. See [When EDGEbuilder is busy](arranging.html#when-edgebuilder-is-busy) |
| Seven tabs | Assets, Scene, Library, World, Bake, Settings and About, below |

Every tab's Selected panel (Selected Asset, Selected Object, Selected Scene and Selected Node; before 0.14.0 Picked, Selected, Picked and Picked in the world) has a pin and, left of it, a minimize button. Minimized, only its title row shows at the bottom of the tab, and the list above it grows. Each tab remembers both.

To the left of the window, one drawer opens at a time: Previews, the Explorer (with its Preview), the Library, Objects, Import's file picker or a sector.

### Assets tab

| Control | Does | See |
|---|---|---|
| The search box | Finds assets by name. Typing anywhere on the tab goes into it. With nothing typed, the list is empty (Mods and Project still list all they hold) | [Search](browsing.html#search) |
| **✕** in the search box | Empties the box and the list | [Search](browsing.html#search) |
| The folder button beside the search box | Opens the Explorer: the game's folders, each mod, the project and the game's people | [The Explorer](browsing.html#the-explorer) |
| **All**, **Meshes**, **Entities**, **NPCs** | Narrow the results by kind | [Search](browsing.html#search) |
| **Everywhere**, **Game**, **Mods**, **Project** | Narrow the results by where the file comes from | [Your mods and your project](browsing.html#your-mods-and-your-project) |
| The **Mods** and **Project** line | Says what was found in your mods and your REDcode project | |
| **Preview**, beside the result count | On: a click on a result also shows it in 3D in the Preview drawer. Remembered | [Seeing it in 3D](browsing.html#seeing-it-in-3d) |
| The eye beside the result count | Opens Previews: the results as small 3D pictures | [Seeing it in 3D](browsing.html#seeing-it-in-3d) |
| The results | Click one to pick it | [Pick an asset](browsing.html#pick-an-asset) |
| The **Selected Asset** panel | The picked asset's path, size and appearances | |
| **Drop where I look**, **Drop at click** | Put the picked asset in the world | [Drop it](browsing.html#drop-it) |
| The pin on the Selected Asset panel | Keeps the panel at the bottom of the tab while the results scroll. On at first | [Pick an asset](browsing.html#pick-an-asset) |

### Scene tab

| Control | Does | See |
|---|---|---|
| **Open scene's name** | Shows the open scene's name. Change it and press Enter to rename the scene | [The Scene tab](scenes.html#the-scene-tab) |
| **Save**, **Save as**, **New**, **Open**, **Close** | Keep, copy, start, open and close scenes | [The Scene tab](scenes.html#the-scene-tab) |
| **Bring V** | Puts V on the floor under the editor camera, facing the way it looks | [The Scene tab](scenes.html#the-scene-tab) |
| **Undo**, **Redo**, **Duplicate**, **Group**, **Ungroup** | The same as their keys | [Arranging a scene](arranging.html) |
| **World edits** | The game's own objects the scene removes, each with **Restore**. Shown when there are some | [Removing the game's doors](doors.html#removing-and-bringing-back) |
| The icon beside the **Objects** title | Moves the list into the Objects drawer, and back | [The object list](scenes.html#the-object-list) |
| The list | Every object and group in the scene. Click to select, two clicks to fly to it | [The object list](scenes.html#the-object-list) |
| The eye and the bin on a row | Show the object's card to the left of the window; delete the object, after asking | [The object list](scenes.html#the-object-list) |
| The **Selected Object** panel: **X**, **Y**, **Z**, **Heading**, **Scale** | The selected object's numbers | [Typing numbers](positioning.html#typing-numbers) |
| **Group name** | Shown for a group | [Groups](arranging.html#groups) |
| **Seen from, m** | How far away the object is drawn once baked | [Seen from](baking.html#seen-from) |
| **Solid when baked** | Whether a baked mesh stops V | [The Solid switch](baking.html#the-solid-switch) |
| **Apply** | Uses the numbers in the fields | [Typing numbers](positioning.html#typing-numbers) |
| **Drop to floor** | Lowers the selection onto the surface below | [Drop to floor](positioning.html#drop-to-floor) |
| **Delete** | Removes the selection | |
| **Rebuild previews** | Places every object that's in the scene but not in the world | [Previews and scenes](scenes.html#previews-and-scenes) |
| **Clear scene** | Removes every object. Ctrl+Z brings them back | |
| The pin on the Selected Object panel | Keeps the panel at the bottom of the tab while the list scrolls. On at first | [The Scene tab](scenes.html#the-scene-tab) |

### Library tab

| Control | Does | See |
|---|---|---|
| The tree | Every scene and bake in the [EDGE Library](../library.html), the open REDcode project and This PC | [The Library tab](scenes.html#the-library-tab) |
| **Collapse all** / **Expand all** | Closes every folder of the tree, or opens them all | [The Library tab](scenes.html#the-library-tab) |
| The out-of-the-window icon, **Library** | Moves the tree into a drawer to the left, and back. Its two arrows make the drawer wider or narrower | [The Library tab](scenes.html#the-library-tab) |
| **Make the Library** | Shown until you have a Library folder | |
| **Open**, **Close**, **Show in world**, **Objects**, **Refresh** | Act on the picked scene | [The Library tab](scenes.html#the-library-tab) |
| **Name**, **New scene here**, **Save open scene here**, **New folder** | Make things in the picked folder | [The Library tab](scenes.html#the-library-tab) |
| **Bake into Library** | Bakes the picked scene into the Library | [Bakes in the Library](baking.html#bakes-in-the-library) |
| **Include in project**, **Add open scene**, **Bake again**, **Delete** | Act on a picked Library bake | [Bakes in the Library](baking.html#bakes-in-the-library) |
| The models under the tree | GLBs in the Library and in the project's `source\raw`, and props on **EDGEfab's Desk** | [Find your model](importing.html#find-your-model) |
| The path box, **Pick** | Picks a model by its full path | [Find your model](importing.html#find-your-model) |
| The folder button beside the path box | Opens the file picker, to find a GLB on your disk | [Find your model](importing.html#find-your-model) |
| The **Selected Scene** panel | What you picked in the tree, and the buttons above. For a model, the Import box | |
| **Name**, **Height, m**, **Solid** / **Solid, a box** / **Not solid**, **Import** | Import the picked model into the open REDcode project and the game | [Import it](importing.html#import-it) |
| The pin on the Selected Scene panel | Keeps the panel at the bottom of the tab while the tree scrolls. On at first | |

### World tab

| Control | Does | See |
|---|---|---|
| **Doors**, **Painted-on doors**, **Meshes** | Which of the game's own objects a click picks and the list shows. EDGEbuilder remembers your choice | [Three kinds of door](doors.html#three-kinds-of-door) |
| **Nearby**, **Sectors** | The tab's two parts: the doors near V, and the game's streaming sectors | [Sectors](sectors.html) |
| **Scan Doors** | On Nearby: reads the doors near V again (Look again before 0.13.2) | |
| **Near V**, **Near the camera**, the text box, the kind switches and levels | On Sectors: which sectors the list shows. A click opens one in the Sector drawer | [Finding sectors](sectors.html#finding-sectors) |
| The list | On Nearby: the doors within 30 m of V, with their state and distance. Hover outlines one, a click picks it and flies the camera there | [Finding a door](doors.html#finding-a-door) |
| The **Selected Node** panel | What you picked, where it is, Solid and Collision data, and any warnings | [Finding a door](doors.html#finding-a-door) |
| **Pick under the cursor** | With Edit on: outlines what a click would pick, picks any mesh or door, and opens its details at the screen's left edge. Remembered | [Pick under the cursor](doors.html#pick-under-the-cursor) |
| **Show tooltip** | With Edit on: a tooltip that follows the cursor, saying what is under it. Remembered | [Pick under the cursor](doors.html#pick-under-the-cursor) |
| **Drop a copy** | In a picked object's drawer: drops a copy of it into the open scene | [Pick under the cursor](doors.html#pick-under-the-cursor) |
| **Remove from world** | Removes the picked door from the world, kept in the open scene. Also **Delete** | [Removing and bringing back](doors.html#removing-and-bringing-back) |
| **Open**, **Close**, **Lock** or **Unlock** | Sets a picked working door, and the open scene keeps it that way | [Opening, closing and locking](doors.html#opening-closing-and-locking) |
| **Restore** | Brings back a door the scene removes, or puts a kept door back as it was | |
| **Go to** | Flies the camera to the picked door | |

### Bake tab

| Control | Does | See |
|---|---|---|
| The top line | **Scene:** and the open scene's name, with what it adds and removes at the right, such as **5 added, 2 removed**. **No scene open** without one | [From scene to world](baking.html#from-scene-to-world) |
| The line under it | The REDcode project it bakes into | [From scene to world](baking.html#from-scene-to-world) |
| **Project** | Shown when more than one REDcode window has a project open: **Follow REDcode** (the window you used last) or one project, which stays EDGEbuilder's while it is open. The Import box has the same row. Needs REDcode 0.10.15 or later | |
| The checks | What was found before the bake. A red one stops it | [The checks](baking.html#the-checks) |
| **Bake** | Writes the scene into the project | |
| **Refresh** | Looks at the project's bakes and the game's again, and asks REDcode which project is open | |
| **The last bake** | The files the last bake wrote | |
| **Bakes for** and the project's name | Each bake in that project (the panel was called Bakes in this project before 0.13.2), with a trash icon. A bake from the Library says **from** and its name, with **Update** when the Library's is newer | [After a bake](baking.html#after-a-bake) |

### Settings and About tabs

The **Settings** tab is described below. From 0.14.0, the **About** tab is a one-page quickstart, with EDGEbuilder's version at the top: the pills, a first scene in five steps, finding and dropping, the camera, the keys for positioning and arranging, scenes and the Library, Import, the game's own objects, baking and settings. Before 0.14.0 it was a short summary of the keys, without the version: look in REDnode's Mod Manager, on EDGEbuilder's row.

{% include shot.html src="/assets/shots/edgebuilder/settings.webp" caption="The Settings tab" shows="EDGEbuilder's Settings tab: the REDbridge.exe and Game folder fields, Save and restart REDbridge, the While Edit is on panel with its two switches, the Library folder field with Use this folder, and the Rebuild asset index and Restart REDbridge buttons." %}

## Settings

| Setting | Default | What it does |
|---|---|---|
| **REDbridge.exe** | Empty: found by itself | A path to a REDbridge of your choice. Leave it empty in nearly every case. When empty, the field shows `Automatic:` and the copy in use |
| **Game folder** | Empty: found from where REDnode runs | The game folder, for when EDGEbuilder can't find it. When empty, the field shows `Automatic:` and the folder in use |
| **Use EDGEbuilder's own camera (V stays put)** | On | Off: Edit works from V's own view. You lose flying, orbit, pan and frame |
| **Hide the game's HUD** | On | Off: the HUD stays on screen while Edit is on |
| **Library folder** | Empty until you make or choose one | The folder of the [EDGE Library](../library.html). Type a folder and press **Use this folder**. The choice is shared by every EDGE tool (it is stored in `%APPDATA%\EDGE\library.json`) |
| **A picture's details before Drop**, under Previews | On | A click on a picture in the [Previews drawer](browsing.html#seeing-it-in-3d) opens its details beside it: the model in 3D, its size, looks and **Drop**. Off: a click on a picture starts Drop at click at once (0.14.0) |
| **A picked object's card**, under Previews | Off | On: with Edit on, a click on one of the scene's objects in the world opens its card at the screen's left edge, so the object in the middle stays clear: the model in 3D, its size, looks and **Drop a copy**, as the eye on its row in the Scene tab shows. For a group, the object you clicked (0.14.0) |

| Button | What it does |
|---|---|
| **Save and restart REDbridge** | Saves the **REDbridge.exe** and **Game folder** fields, and restarts REDbridge if its path changed |
| **Rebuild asset index** | Reads the game's files again and rebuilds the list of models. Use it if assets seem to be missing |
| **Restart REDbridge** | Stops and starts REDbridge |

The two camera and HUD switches apply as soon as you flip them, even while Edit is on.

Below the buttons, the tab shows which REDbridge is in use, where the list of models is kept, and the path of the settings file.

## Keys and mouse

Keys work while [Edit](positioning.html#the-edit-switch) is on and the cursor is not in a text field of the panel. With Edit off, use the buttons on the Scene tab.

### Selecting and positioning

| Key or mouse | Does |
|---|---|
| Click an object | Select it, or its whole group. Click empty space to select nothing |
| **Ctrl+click** | Add an object to the selection, or take it out |
| **Shift+drag** | Select everything in a box |
| **Alt+click** | Select one object out of its group |
| Drag an arrow | Move along that axis (red X, green Y, blue Z) |
| Drag the ring | Turn like a turntable |
| **G**, **R**, **S** | Start moving, turning or scaling (meshes only) the selection |
| **X**, **Y**, **Z** | During G, R or S: lock to that axis. Again to unlock |
| Digits, `.`, `-`, **Backspace** | During G, R or S: type an exact amount |
| **Ctrl** | While dragging: snap to 0.25 m, 15° or 0.25 scale steps |
| **Enter** or a click | Keep |
| **Esc** or a right-click | Cancel: the object goes back |
| **Ctrl+E** | Drop the selection to the floor |
| **Delete** | Remove the selection; with a door of the game's picked, remove that door from the world |
| Click, after **Drop at click** | Drop the picked asset where its outline is. **Esc** or a quick tap of the right button cancels; holding the right button looks around, with the drop still waiting. With V's own camera, a right-click cancels |
| A quick tap of the right button | With a door or another of the game's objects picked: unpick it and close its drawer. With V's own camera, a right-click does it |
| **Enter** in a Selected Object field | Apply it and leave the field |

### Arranging

| Key | Does |
|---|---|
| **Ctrl+A** | Select the whole scene |
| **Ctrl+G** | Group the selection |
| **Ctrl+Shift+G** | Ungroup |
| **Ctrl+D** | Duplicate: the copy follows the mouse until a click places it. **Esc** or a right-click takes it back |
| **Ctrl+C** | Copy the selection |
| **Ctrl+X** | Cut: copy, then delete |
| **Ctrl+V** | Paste where the cursor points |
| **Ctrl+Z** | Undo |
| **Ctrl+Y** or **Ctrl+Shift+Z** | Redo |
| **Ctrl+S** | Confirm the scene is saved: it's saved after every change anyway |
| **Ctrl+Shift+S** | Save a copy under a new name, which becomes the open scene |

### The camera

These need **Use EDGEbuilder's own camera** on. **F10** pauses builder mode, so V gets the view back, and F10 again returns to the editor camera: see [The camera and builder mode](camera.html#what-builder-mode-changes).

| Key or mouse | Does |
|---|---|
| Right mouse button held | Look around |
| Right mouse held, **W**, **A**, **S**, **D** | Fly forward, left, back, right |
| Right mouse held, **Q**, **E** | Fly down, up |
| Right mouse held, **Shift**, **Ctrl** | Faster, slower |
| Right mouse held, mouse wheel | Change the flying speed |
| Middle mouse button held | Orbit the selection, or a point 10 m ahead |
| **Shift** with the middle mouse button | Pan |
| Mouse wheel, no button held | Move closer or further |
| **F** | Frame the selection |

## REDnode keys

| Key | Does |
|---|---|
| **F10** | From play, gives REDnode's windows the mouse and keyboard (interactive mode). EDGEbuilder's Edit needs it |
| **Esc**, with nothing in progress in EDGEbuilder | Leaves interactive mode, so the game has the mouse again. Press **F10** to come back |

See [F10 and the three modes](../rednode/overlay.html#f10-and-the-three-modes).
