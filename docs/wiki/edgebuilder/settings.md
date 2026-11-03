---
title: EDGEbuilder settings and keys
nav_title: Settings and keys
section: EDGEbuilder
order: 7
description: "Every EDGEbuilder setting, button, key and mouse control, in one place."
reviewed: 2026-11-03
---

# Settings and <span class="y">keys</span>

Everything in EDGEbuilder 0.5.8, in one place. The pages before this one explain each in context.

## The panel

EDGEbuilder's panel sits at the right of the screen. Its title bar holds the **Edit** switch. Under it are three status pills (see [Install and set up](install.html#open-edgebuilder)), a message line, the busy bar with **Stop** while a long change runs (see [Arranging a scene](arranging.html#when-edgebuilder-is-busy)), and four tabs.

| Tab | What's in it |
|---|---|
| **Assets** | Search, the **All**, **Meshes** and **Entities** tabs, the **Everywhere**, **Game**, **Mods** and **Project** tabs, a line saying what was found in your mods and project, the results, and the **Picked** panel with **Drop where I look** and **Drop at click**. Typing anywhere on this tab searches. See [Browsing and dropping](browsing.html) |
| **Scene** | The count, what the scene needs, the **Undo**, **Redo**, **Duplicate**, **Group** and **Ungroup** buttons, every object and group in the scene, and the **Selected** panel with **Group name** for a group. See [Browsing and dropping](browsing.html#the-scene-tab), [Positioning objects](positioning.html#typing-numbers) and [Arranging a scene](arranging.html) |
| **Settings** | The settings below |
| **About** | A short summary of the keys and what's next |

{% include shot.html caption="The Settings tab" shows="EDGEbuilder's Settings tab: the REDbridge.exe and Game folder fields, Save and restart REDbridge, the While Edit is on panel with its two switches, and the Rebuild asset index and Restart REDbridge buttons." %}

## Settings

| Setting | Default | What it does |
|---|---|---|
| **REDbridge.exe** | Empty: found by itself | A path to a REDbridge of your choice. Leave it empty in nearly every case. When empty, the field shows `Automatic:` and the copy in use |
| **Game folder** | Empty: found from where REDnode runs | The game folder, for when EDGEbuilder can't find it. When empty, the field shows `Automatic:` and the folder in use |
| **Use EDGEbuilder's own camera (V stays put)** | On | Off: Edit works from V's own view instead, as in 0.2 |
| **Hide the game's HUD** | On | Off: the HUD stays on screen while Edit is on |

**Save and restart REDbridge** saves the two fields and restarts REDbridge if its path changed. The two switches apply as soon as you flip them, even while Edit is on (from 0.3.3; before that, switch Edit off and on to see the change).

Below them, the tab shows which REDbridge is in use, where the asset index is, and the path of the settings file.

| Button | What it does |
|---|---|
| **Rebuild asset index** | Reads the game's archives again and rebuilds the list of assets. Use it if assets seem to be missing |
| **Restart REDbridge** | Stops and starts REDbridge |

## Keys and mouse with Edit on

Keys work while Edit is on and no text field in the panel has focus.

### Selecting and positioning

| Key or mouse | Does |
|---|---|
| Click an object | Select it, or its whole group. Click empty space to select nothing |
| **Ctrl+click** | Add an object to the selection, or take it out |
| **Shift+drag** | Select everything in a box |
| **Alt+click** | Select one object out of its group |
| Drag an arrow | Move along that axis (red X, green Y, blue Z) |
| Drag the ring | Turn around the vertical |
| **G**, **R**, **S** | Start moving, turning or scaling (meshes only) the selected object |
| **X**, **Y**, **Z** | During G, R or S: lock to that axis. Again to unlock |
| Digits, `.`, `-`, **Backspace** | During G, R or S: type an exact amount |
| **Ctrl** | While dragging: snap to 0.25 m, 15° or 0.25 scale steps |
| **Enter** or a click | Keep |
| **Esc** or a right-click | Cancel: the object goes back |
| **Ctrl+E** | Drop the selection to the floor |
| **Delete** | Remove the selection |
| Click, after **Drop at click** | Drop the picked asset there. **Esc** or a right-click cancels |
| **Enter** in a Selected field | Apply it and leave the field |

### Arranging

| Key | Does |
|---|---|
| **Ctrl+G** | Group the selection |
| **Ctrl+Shift+G** | Ungroup |
| **Ctrl+D** | Duplicate: the copy follows the mouse until a click places it. **Esc** or a right-click takes it back |
| **Ctrl+C** | Copy the selection |
| **Ctrl+X** | Cut: copy, then delete |
| **Ctrl+V** | Paste where the cursor points |
| **Ctrl+Z** | Undo |
| **Ctrl+Y** or **Ctrl+Shift+Z** | Redo |

In the game, Ctrl+Z, Ctrl+Y, Ctrl+C, Ctrl+X, Ctrl+V and Esc need REDnode 0.52.0 or later. With an older REDnode, use the Scene tab's buttons, and a right-click to cancel.

### The camera

| Key or mouse | Does |
|---|---|
| Right mouse button held | Look around |
| Right mouse held, **W**, **A**, **S**, **D** | Fly forward, left, back, right |
| Right mouse held, **Q**, **E** | Fly down, up |
| **Shift**, **Ctrl** while flying | Faster, slower |
| Mouse wheel while flying | Change the flying speed |
| Middle mouse button held | Orbit the selection, or a point 10 m ahead |
| **Shift** with the middle mouse button | Pan |
| Mouse wheel | Move closer or further |
| **F** | Frame the selection |
| **Esc** while looking | End the cursor lock without leaving Edit (REDnode 0.22.0 or later) |

The camera keys need **Use EDGEbuilder's own camera** on.

## REDnode keys

| Key | Does |
|---|---|
| **F10** | Opens the REDnode launcher and cycles its modes. EDGEbuilder's Edit needs the interactive mode, where REDnode's windows take the mouse |
| **Esc** with nothing in progress | Leaves REDnode's interactive mode |

See [REDnode](../rednode/).
