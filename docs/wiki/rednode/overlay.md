---
title: Using the overlay
section: REDnode
order: 2
description: "REDnode's overlay in the game: F10 and the three modes, the launcher, moving and closing windows, HUD widgets, themes, the Console and keyboard shortcuts."
reviewed: 2026-11-13
---

# Using the <span class="y">overlay</span>

The **overlay** is everything REDnode draws on top of the game: windows, HUD widgets and the launcher. It is drawn as part of each game frame, so it stays smooth and costs very little. This page covers how to show and hide it, open the launcher, move windows, and use the built-in Console.

| On this page | |
|---|---|
| [F10 and the three modes](#f10-and-the-three-modes) | Showing, using and hiding the overlay |
| [The launcher](#the-launcher) | REDnode's home, behind the REDNODE tab |
| [Windows](#windows) | Moving, closing, and the [title-bar buttons](#title-bar-buttons) |
| [HUD widgets](#hud-widgets) | Windows that act like part of the game's HUD |
| [Themes](#themes) | Three looks for every window |
| [The Console](#the-console) | Type commands for the game, with a [first command to try](#try-it-your-first-command) |
| [Keyboard shortcuts](#keyboard-shortcuts) | Every key REDnode uses |
| [Good to know](#good-to-know) | Cost, Alt+Tab, Open at start, what isn't handled yet |

## F10 and the three modes

**F10** switches between three modes, in this order:

| Mode | You see | The mouse and keyboard go to |
|---|---|---|
| **Passive** (the start) | HUD widgets, the REDNODE tab, and windows that are [pinned to the HUD](mod-manager.html#pin-to-launcher-and-pin-to-hud) | The game. You play as normal |
| **Interactive** | Every open window, and a cursor | The windows. Click, type, drag |
| **Hidden** | Nothing from REDnode: no windows, no HUD widgets, no tab | The game |

The Welcome window calls the same three modes Showing, Using and Hidden.

In daily use you need two keys:

| To | Press |
|---|---|
| Use REDnode's windows | **F10** once, from play |
| Go back to playing, with your HUD widgets still showing | **Esc**, or click empty screen away from any window |

> **F10 pressed in interactive mode hides everything.** It does not take you back to play with your widgets: it goes on to hidden mode, and the HUD widgets and the REDNODE tab vanish. Nothing is lost. Press **F10** once more and they are back. To leave interactive mode, use **Esc**.

While a window has your input, the game doesn't get it: V doesn't move or shoot. That's on purpose, the same as Cyber Engine Tweaks' windows.

Careful with **F9**, right beside F10: it is the game's Quick Load, not REDnode's. Pressed by mistake, it loads your last save.

{% include shot.html caption="Interactive mode" src="/assets/shots/rednode/overlay-interactive-mode.png" alt="Gameplay in interactive mode with several REDnode windows open: the launcher, Settings, the Mod Manager, the Counter panel, the Mod log and a round HUD widget, with REDnode&rsquo;s cursor over the Mod Manager." shows="Gameplay in interactive mode: several REDnode windows open, the REDnode cursor over one of them, and the launcher tab at the lower left." %}

## The launcher

The launcher is REDnode's home. Its tab sits at the lower left of the screen: **REDNODE** with a count, such as `· 9/20` (open packages out of all of them). Press F10, then click the tab to open the launcher; click it again to close it.

{% include shot.html caption="The launcher" src="/assets/shots/rednode/overlay-the-launcher.png" alt="The launcher open above its tab: the GAME LINKED status, packages with their switches, the Space row, the Theme buttons with the gear, and the version." shows="The launcher opened above its tab: the GAME LINKED status, the Mod Manager first in the list, a few pinned packages with their switches, and the Space row, the Theme buttons with the gear and the version at the bottom." %}

| Part | What it does |
|---|---|
| **GAME LINKED** or **GAME OFF** | Whether REDnode is connected to the game |
| The list | The **Mod Manager** first, then REDnode's own tools, such as the Mod log and the Console, and every package pinned to the launcher. A package that crashed is listed even if it isn't pinned, so an error never hides |
| "3 more in the Mod Manager · 1 new" | How many packages are not in the launcher, and how many are new. **Open** opens the [Mod Manager](mod-manager.html), which lists them all |
| A package's switch | Turns it on or off: opens or closes an app, starts or stops a mod |
| A line starting **Asks for**, with an **Allowed** switch | A permission the package wants. The feature that needs it waits until you allow it. See [Permissions](mod-manager.html#permissions) |
| A line starting "Needs" | A mod the package requires that your game doesn't have. See [Requirements](mod-manager.html#requirements) |
| A Node mod's row | Also shows whether the mod is running, how much memory it uses, and the last lines it printed or its last error. **Restart** starts it again. See [Node mods: restart and shared process](mod-manager.html#node-mods-restart-and-shared-process) |
| "Window closed" with **Show** | You closed one of the mod's windows. **Show** brings it back |
| The bottom | The [Space row](spaces.html), the **Theme** buttons, the gear that opens the **Settings** drawer beside the launcher, and the REDnode version. See [Settings and controls](settings.html) |

The tab has a striped grip on its left: drag it to move the launcher. When you have more than one [space](spaces.html), the tab also shows **▾** and the current space's name. When a package is in [solo mode](spaces.html#solo-mode), it shows **SOLO**, the package's name and **End**.

Coming in the next release: a filter box at the top of the launcher that finds any installed package by name, in place of the "more in the Mod Manager" line.

## Windows

In interactive mode:

| To | Do |
|---|---|
| Move a window | Drag its title bar, or the handle the app marks (for example a striped grip) |
| Resize it | Drag the grip in its bottom-right corner, if it has one. Not every window can be resized |
| Bring it to the front | Click it. Only the front window gets keyboard input |
| Click what's behind a window | Click where the window is see-through: the click passes to the window behind, or to the game |
| Close it | Its **✕**. For a Node mod's window, the mod keeps running; **Show** in the launcher or Mod Manager brings the window back |
| See what a button does | Hover over it: a tooltip names it. The **Tooltips** setting switches them off |

REDnode remembers where you put each window, and which windows you closed, across game starts. If an update to a mod changes its window's size, that window returns to its default place.

### Title-bar buttons

Windows built with REDnode's UI kit show a few small buttons beside **✕**, right to left, only when they apply:

| Button | Does | Shows when |
|---|---|---|
| Move to space | Puts the window in another [space](spaces.html), or in all of them | You have two or more spaces |
| Roll up | Folds the window down to its title bar, and back | Usually. An app can leave it out |
| Pin to HUD | Keeps the window on screen in passive mode | Usually |
| Reset position | Puts the window back where it started | After you moved or resized it |
| Debug | Opens the window's debugger | [Developer mode](debugging.html#developer-mode) is on |

Up to three buttons fit beside **✕**. When a window has more, the rest go into a **⋯** menu on the far left, each with its name. Some choices, such as which space to move to, open inside that menu, with **‹ Back** to return.

A package can add buttons of its own, such as a gear for its settings. They sit nearest **✕** and count toward the three, so REDnode's buttons that no longer fit move into **⋯**.

## HUD widgets

A HUD widget is a window that acts like part of the game's own HUD: it is drawn, but never takes the mouse or keyboard, even in interactive mode, and you can't drag it. The **Coords HUD** and **Vitals** samples are HUD widgets.

HUD widgets, and other windows that ask for it, hide by themselves:

| While the game shows | Which means |
|---|---|
| A menu | Inventory, map, pause menu and so on |
| Photo mode | While it's on |
| The main menu | The main menu and loading screens |
| A scene | A cinematic scene (a cutscene). Ordinary conversations with NPCs don't count. Which scenes count has not been fully tested yet: if a widget stays up in a cutscene, please report it |

## Themes

The **Theme** buttons at the bottom of the launcher recolour every window built with the UI kit, at once:

| Theme | Look |
|---|---|
| **REDnode** | The EDGE HUD look: dark panels, yellow and cyan |
| **HUD red** | A look-alike of the game's own red UI |
| **EDGE** | Like REDnode, with solid yellow title bars |

An app can choose its own look; it then keeps it whatever you pick. The HUD samples always use HUD red.

## The Console

The **Console** is a command line for the game, built into REDnode. It does the jobs players used Cyber Engine Tweaks' console for, such as giving V an item, and it needs no Cyber Engine Tweaks.

Switch on **Console** in the launcher: its window opens at the top of the screen. Type a line at the bottom and press Enter; the answer shows above.

{% include shot.html caption="The Console" shows="The Console window at the top of the screen after typing addItem with the trousers' id: its answer, 1 × Items.Pants_01_basic_01 added, and the line to type in below." %}

### Try it: your first command

1. **Load a save.** The commands below act on V, and at the main menu V isn't in the world yet: they answer with an error there.
2. Press **F10**, click the **REDNODE** tab and switch on **Console**.
3. Click in the line at the bottom of the Console, type `pos()` and press **Enter**.
4. Type `addItem("Items.money", 1000)` and press **Enter**.
5. Press **Esc** and open the inventory.

| After | You should see |
|---|---|
| Step 2 | The Console at the top of the screen, with a welcome line |
| Step 3 | Where V stands: an x, a y and a z |
| Step 4 | The answer `1000 × Items.money added` |
| Step 5 | V's eddies up by 1,000 |

### Commands

| Type | Does |
|---|---|
| `addItem("Items.Pants_01_basic_01")` | Puts the item in V's inventory. Add a number for more than one: `addItem("Items.money", 1000)` gives V 1,000 eddies. A wrong id gets a red error, not an empty item |
| `removeItem("Items.Pants_01_basic_01")` | Takes the item out of V's inventory. Untested in the game |
| `pos()` | Where V is: x, y and z |
| `tp(x, y, z)` | Moves V there. Untested in the game: save first, since a wrong place can leave V stuck |
| `clear()` | Empties the window |
| `help()` | Lists these shortcuts |

Commands from Cyber Engine Tweaks' console, such as `Game.AddToInventory(...)`, are written in Lua and don't work here: use the shortcuts above.

### Finding an item's id

Every item has an id in **TweakDB**, the game's database of items and stats, such as `Items.Pants_01_basic_01`. Type it exactly as written, in quotes. Ways to find one:

| Way | How |
|---|---|
| Ask an assistant | Ask [REDagent](../redagent/) in the game, or Claude Code with [EDGEchat](../edgechat/): "What is V wearing in the outer torso slot? Give me its TweakDB record id." |
| Look it up in [REDcode](../redcode/tweakdb.html) | Its TweakDB view searches the game's records by name |
| An item list | Community lists of item codes for Cyber Engine Tweaks use the same ids. Take the part in quotes, such as `Items.money` |

### Keys in the Console

| Key | Does |
|---|---|
| **Enter** | Runs the line |
| **Shift+Enter** | Adds a new line without running |
| **Up**, **Down** | Bring back what you typed before, even after a game restart |
| **Tab** | Finishes the name you started typing |
| **Ctrl+L** | Empties the window, like `clear()` |
| **Stop** (a button) | Ends a line that never finishes, such as an endless loop. The Console starts again; the game and your other mods carry on |

Closing the Console's window ends the Console. What you typed before is kept for next time.

**For mod makers:** any JavaScript works in the Console, with the whole `rednode` package ready and no imports. Try a call from the [game API](game-api.html) here before you put it in a package.

## Keyboard shortcuts

| Key | Where | Does |
|---|---|---|
| **F10** | Anywhere in the game | Passive, interactive, hidden, and round again. It always leaves interactive mode |
| **Esc** | Interactive mode | Back to passive. If a window is holding the cursor, for example to turn a 3D camera, the first Esc releases the cursor. A window that asks for Esc, such as the UI Workbench while it picks, gets it instead |
| Click empty screen | Interactive mode | Back to passive |
| **Ctrl+1** to **Ctrl+9** | Interactive mode | Switches to that [space](spaces.html) |
| **Ctrl+C**, **Ctrl+V**, **Ctrl+X**, **Ctrl+A**, **Ctrl+Z**, **Ctrl+Y** | In the front window | Copy, paste, cut, select all, undo, redo. A window with its own undo or copy, such as an editor, handles them itself |
| Double-click, and **Ctrl**, **Shift** or **Alt** with a click | In a window | Reach the window as they would in a desktop program |
| **F9** | Anywhere in the game | Not REDnode's: it is the game's Quick Load. Mind it, right beside F10 |

The F10 key can't be changed yet.

## Good to know

- **REDnode's windows are drawn over everything,** game menus included. That is why HUD widgets hide themselves when a menu opens.
- **The cost is small.** In the developer's tests the overlay took about 0.1 ms of each game frame with every sample open. Each open window does use memory: roughly 60 to 100 MB.
- **Alt+Tab** to the desktop and back keeps interactive mode.
- **Open at start** is a switch in the Settings drawer, on by default. On, the REDNODE tab and your HUD-pinned windows show as soon as the game starts. Off, the game starts with only HUD widgets showing: the tab and the pinned windows wait for your first F10.
- **Where the windows come from.** A separate program beside the game, the overlay host, makes the windows' pictures, and the game draws them. That is why a window can crash without the game noticing.
- **Not yet handled:** HDR brightness matching, frame generation, resolution and window-mode changes and ultrawide screens are planned work. Steam Deck is untested.
