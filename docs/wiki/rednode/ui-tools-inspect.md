---
title: "UI Workbench: Inspect"
nav_title: "UI Tools: Inspect"
section: REDnode
order: 10.2
description: "The UI Workbench's Inspect tab: the game's UI layers and HUD pieces as a tree, Pick under the cursor, Pick inside, a widget's details and properties, and the filters."
reviewed: 2026-11-03
---

# UI Workbench: <span class="y">Inspect</span>

The **Inspect** tab shows the game's own UI the way a browser's developer tools show a web page: as a tree you can open, and a picker that finds what is under your cursor. It only reads. It needs no permission.

New to the words? The game's UI is made of **widgets** (panels, texts, images), grouped into **layers** (the HUD, the menus, notifications), and each piece of the HUD is a **HUD entry**. [Native UI: ink markup](ink-markup.html) explains them.

{% include shot.html caption="The Inspect tab" shows="The UI Workbench's Inspect tab: the bar with Refresh, Pick and Pick inside and the status line saying how many layers and the ink size; the tree at the left with the HUD layer open on its HUD entries; the details of a selected text widget at the right." %}

## The bar

| Button | Does |
|---|---|
| **Refresh** | Reads the game's layers again. Use it after the game spawned something new, such as a HUD piece that wasn't there |
| **Pick** | Starts picking: point at the game's UI and click. Shows **Picking...** while it's on; press it again to stop |
| **Pick inside** | Picks only among the selected widget's children and theirs. Greyed out until you select a widget that has children |
| The status line | What the Workbench just did, such as `N layers, ink size W x H` after a read, or `Pick at x, y: N widgets, M looked at in T ms` after a pick. Point at it for the whole text when it's cut short |

At the start the game may not be ready to answer. The tree then says **Waiting for the game** and the Workbench asks again every 3 seconds until it can read. It reads the layers again after each save load by itself.

## The tree

The left side lists every ink layer the game has, in its order, with how many children it holds and whether it is **active**. Click the arrow on a row to open it; children are read a level at a time, so even a large menu opens at once.

| A row shows | Means |
|---|---|
| A layer's name, such as `inkHUDLayer`, with `12 children, active` | One of the game's UI layers |
| **HUD entries (N)** | Under the HUD layer: each piece of the HUD by its name, such as the health bar, the minimap or the quest tracker |
| `own window` | The HUD piece draws in a window of its own |
| `off` | The game has the piece switched off now |
| `not spawned` | The game makes this piece only when it's needed (a video, a boss fight, a vehicle). Selecting it shows what the game knows of it: its name, whether it's enabled, its controller and the file it will come from |
| A widget: its name, then its class | A widget, such as `Root Canvas`. `(no name)` when the game didn't name it |
| `hidden` | The widget is not visible. It stays in the tree, greyed, so you can still read it and find what shows it |
| A grey label after the class | The widget's game controller, the script that drives it |
| `"text"` | A text widget's text |
| `(14)` | How many children it holds |

Click a row's name to select it: its details show at the right, and it is outlined on the screen behind the Workbench.

### Filter the tree

The **Filter the tree** box at the top keeps the rows whose name, class, controller or text holds what you type, with the rows above them opened so you can see where they are. It searches the rows read so far: open the layers you're interested in first. The **✕** at the box's right empties it and brings back the whole tree.

## Pick

Picking is the quickest way to find a widget.

1. Press **F10** for interactive mode, if you're not in it.
2. Press **Pick**. A line at the top of the screen says what to do.
3. Move the cursor over the HUD or a menu. The widget under it is **outlined** and **named** in a tip beside the cursor as you move.
4. Click. The tree opens down to that widget and selects it, and the details list everything under that point.

{% include shot.html caption="Pick" shows="The HUD while picking: a thin outline around the quest tracker's objective text, a small tip beside the cursor with the widget's name and class, and the hint line at the top of the screen." %}

| Pick offers | Why |
|---|---|
| Only widgets the game draws on screen | A widget whose opacity, with its parents', comes to 0 is left out with its children, and so are the layers the game draws onto surfaces in the world (signs, adverts, screens) |
| The smallest box first, then the deepest | You get the most particular widget under the cursor, not the full-screen panel around it |

Moving the mouse asks the game nothing: the Workbench reads every drawn widget's box when Pick starts, and again every 1.5 seconds, and looks under the cursor itself. A pick looked at about 450 widgets in under 3 ms in the developer's test.

### Reach a widget under another

| How | What happens |
|---|---|
| **Right-click** while picking | Sets the widget under the cursor aside until the pick ends, so the one beneath it shows. Right-click again for the next. The hint counts how many are set aside |
| **Pick inside** | With a widget selected, picks only among its children and theirs. Select the HUD piece you want, press **Pick inside**, and nothing else on screen gets in the way |

### Leave Pick

Press **Esc**, press **Pick** again, or right-click where no widget is. Esc ends the pick without leaving interactive mode: the Workbench asks REDnode for the key while it picks.

## A widget's details

The right side shows the selected widget in parts. Each part folds: click its heading to close or open it, and it stays as you left it for the next widget.

| Part | Shows |
|---|---|
| **Under the cursor (N), smallest first** | After a pick: every widget under that point, with its class and its HUD entry or layer. Point at one to outline it beside the selected one; click it to select it |
| The widget | Its name and class, the action buttons, then a table: id, path, its class and its parents' classes, its box on screen, visible, its text, its controllers, its layer and HUD entry, the `.inkwidget` file it came from (as a path hash), how many children, and its `api` reference |
| **Try** | Live changes to the widget, folded at first. See [Try](ui-tools-try.html) |
| **Properties (N)** | Every property the widget has, with its value. The **Filter properties** box keeps the ones whose name or value holds what you type; its **✕** clears it |

| Button | Does |
|---|---|
| **Path** | Copies the widget's path: its layer and every parent down to it |
| **JSON** | Copies everything the details show, as JSON, for a bug report or your notes |
| **Read all** | Reads every widget under this one in one call and says in the status line how many and how long it took (it stops at 20,000) |
| **To source** | Copies this widget and everything under it into a new project. Needs `admin`. See [To source](ui-tools-to-source.html) |
| **Parent** | Selects the widget that holds this one |

The **api ref**, such as `{"$ref": 12}`, is the live reference `ink.inspect` gives a package, for calling the widget's own functions through the [game API](game-api.html).

## Walkthrough: find what the quest tracker is made of

1. Load a save with a quest tracked, press **F10** and switch on the UI Workbench.
2. Press **Pick**, point at the quest's objective line at the right of the HUD, and click it.
3. The tree opens down to a text widget, and its details show its text: the objective you see on screen.
4. Press **Parent** a few times. Each step selects a larger panel, and the outline on screen grows with it, until it covers the whole tracker.
5. Open **Properties** and type `tint` in its filter: the panel's colour, as the game stores it.
6. Press **Path** and paste it into a note: next time, type part of it in the tree's filter to find the same widget.

> **Tip:** the health bar at the top left hides itself out of combat, so it may show nothing to pick. The quest tracker, the minimap and the clock are on screen most of the time.

## Good to know

| | |
|---|---|
| Widget ids, such as `w12` | Stay the same while a widget lives. A save load rebuilds the HUD with new widgets: pick again |
| The HUD's units | Boxes are in the HUD's own units (the status line's ink size), not the overlay's 1080p pixels |
| Menus | Leave interactive mode (Esc), open the game's menu (such as the Perks screen), press F10 and **Refresh**: menu widgets exist only while their menu is open. Pick works there too; it passed in game on the Perks screen |
| Reading costs little | The Workbench reads only while you use it: Pick every 1.5 s, a tree row once when you open it |
