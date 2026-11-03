---
title: "UI Workbench: Projects and Edit"
nav_title: "UI Tools: Projects and Edit"
section: REDnode
order: 10.5
description: "Write native HUD panels in the game with the UI Workbench: making, renaming and deleting projects, the editor with its completion and error lines, the splitter, Save, Run and Stop, and where a project's output goes."
reviewed: 2026-11-03
---

# UI Workbench: Projects and <span class="y">Edit</span>

A **project** is a native HUD panel you make in the Workbench: an [ink markup](ink-markup.html) file that says what the panel looks like, and a script that gives it its data. The **Projects** tab lists them; the **Edit** tab is where you write them and run them in the game.

> **Needs the admin permission.** Run and Stop switch packages on and off, so both tabs need **managing REDnode** allowed for the UI Workbench in the Mod Manager. See [The admin permission](ui-tools.html#the-admin-permission).

## What a project is

Each project is a REDnode package of its own: a folder in `Documents\REDnode\UI projects` with three files.

| File | Holds |
|---|---|
| `rednode-app.json` | Its id, name, version (0.1.0 at first) and description, the script to run, and what it needs (Codeware 1.16 or later) |
| `panel.ink.html` | The markup: the panel's widgets, where it sits on the HUD, and the `{slots}` its data fills |
| `mod.mjs` | The script, a [Node mod](node-mods.html): it loads the markup with `ink.load` and gives it data |

Because a project is a real package, it runs exactly as it will once you share it: in a Node process of its own, with REDnode's clean-up when it stops. A crash in your script stops your project, not the Workbench or the game.

REDnode watches the projects folder as a [development folder](settings.html#development-folders) (the Workbench adds it the first time you use Projects), so your projects run from your Documents folder and never need copying into the game. They show in the Mod Manager with a **DEV** tag. Open the folder in Explorer to edit the files in VS Code or REDcode if you like; the Workbench reads them as they are.

## The Projects tab

{% include shot.html caption="The Projects tab" shows="The UI Workbench's Projects tab: the name box and New at the top, two projects listed with their ids and dates, one marked running, each with Open, Export, Rename and Delete, and the folder line at the bottom." %}

| Part | Does |
|---|---|
| The name box and **New** | Type a name, such as `My Panel`, and press **New** (or Enter). The project is made from the template and opens in **Edit**. Its id comes from the name: `my-panel` |
| A project's row | Its name, its id and when it last changed, newest first, and **running** while it runs in the game |
| **Open** | Opens it in **Edit** |
| **Export** | Writes it as a zip that installs as a mod. See [Export](ui-tools-export.html) |
| **Rename** | Turns its name into a text box: type the new name and press Enter. Its id and folder stay the same |
| **Delete** | Press it, then press **Sure?** within 3 seconds. A running project is stopped first. The folder moves to the projects folder's `.trash`, where REDnode never looks and you can take it back |
| The line at the bottom | Where the projects are, `...\Documents\REDnode\UI projects` |

A name needs at least one letter or digit, and two projects can't share an id: a second **My Panel** is refused with "There is a project "my-panel" already". Pick another name.

### The template

**New** starts from a small working example, so there's something to see at once:

| Part | What it does |
|---|---|
| A HUD panel at the left | A title (the project's name), a level bar with its percentage, a mood line (*Idling*, *In the zone*, *Running hot*, *Overheating!*) and a count of the changes it received |
| A controls window at the right, *&lt;name&gt;: controls* | An overlay window with a **Level** slider and **Reset** |
| What ties them | Dragging the slider calls `view.set()` with the new level, about 20 times a second, and the panel follows while you drag. From 70 the panel turns to the warning colour, from 90 to the danger red |

The controls are in an overlay window because native panels can't take clicks yet (that comes with input, phase I3). The template shows the pattern every native panel uses: the markup reads named data, and the script changes the data. The [tutorial](ui-tools-tutorial.html) changes it step by step.

## The Edit tab

{% include shot.html caption="The Edit tab" shows="The UI Workbench's Edit tab: the project's name with an unsaved dot, Save, Run, Stop and Export, and the markup and the script side by side with highlighting, an error line in the markup's header, and the splitter between them." %}

| Part | Does |
|---|---|
| The project's name | With a **•** after it while there are unsaved changes |
| **Save** | Writes both files. **Ctrl+S** does the same |
| **Run** | Saves if needed, and switches the project on: its panel shows in the game |
| **Stop** | Switches it off: its panel and its windows go |
| **Export** | Saves, and writes the zip. See [Export](ui-tools-export.html) |
| The status line | What just happened, such as `Saved and restarted My Panel`. Point at it to read a cut-off line in full |
| `panel.ink.html` (left) | The markup, with HTML highlighting |
| `mod.mjs` (right) | The script, with JavaScript highlighting |

### Writing in the editor

| Feature | How it helps |
|---|---|
| Highlighting | Tags, attributes, strings and comments in their own colours |
| Completion | As you type, the markup editor offers ink markup's tags and, inside a tag, the attributes that tag takes |
| Errors as you type | The markup is checked as REDnode would read it, and the script's syntax as Node would. A mistake shows in the pane's header with its line, such as `line 6: style: "lable" is not one of: title, subtitle, ...`, and is underlined |
| Keys | The usual editing keys work, Ctrl+Z and Ctrl+Y included. A double-click selects a word |

A header error means the file won't run as it is. You can still save it, but a running project then crashes with the same error in the Mod log. Fix it and save again.

### The splitter

The bar between the two editors sets how much width each gets.

| To | Do |
|---|---|
| Give one editor more room | Drag the bar left or right (each side keeps at least 15 %) |
| Make them equal again | Double-click the bar |

The Workbench keeps where you left it. For more room overall, make the whole window bigger by the grip in its bottom-right corner; **Reset position and size** in its title bar puts the window back.

## Run, Save and Stop

| You press | What happens |
|---|---|
| **Run**, with unsaved changes | The Workbench saves, then switches the project on. The status line says `My Panel runs in the game. Its output and any crash are in the Mod log.` |
| **Run**, with nothing unsaved | It switches the project on without writing a file, so it starts once |
| **Run** while it runs | Nothing new: `My Panel already runs in the game` |
| **Save** while it runs | It writes the files and restarts the project, so the panel shows your change: `Saved and restarted My Panel` |
| **Stop** | It switches the project off: `Stopped My Panel` |

A restart starts your script from the top, so the panel's data starts again too (in the template, the level goes back to 50).

To see the panel, leave interactive mode (Esc): the HUD shows with your panel on it. The project's own windows, like the template's controls, show in interactive mode like any overlay window; press **F10** to use them.

A brand-new project can take a second or two to be found by REDnode. Run keeps asking for about ten seconds before it gives up with "REDnode did not find ... check that the folder is watched".

### Output and crashes

What your script prints with `console.log` goes to REDnode's **Mod log**, tagged with the project's id: switch on **Mod log** in the launcher to watch it live. A crash shows there with its error, and the project's status in the Mod Manager turns to **CRASHED**. Fix the mistake and press **Save**. If the panel doesn't come back, press **Stop**, then **Run**. See [Debugging](debugging.html).

## Good to know

| | |
|---|---|
| Panels go on the HUD | `<mount layer="hud">` is the only layer for now. Menus come later (phase UT4) |
| Buttons in the panel | Not yet. An `on...` attribute must name a function your script declares or puts in its `handlers`, or the markup is refused; nothing fires until phase I3 |
| More files | A project can hold more files: the Workbench edits `panel.ink.html` and `mod.mjs`, and Export takes everything in the folder except dot folders and `node_modules` |
| Editing outside the game | The files are plain text in your Documents folder. Change them in any editor; if the project runs and **Hot reload** is on in the launcher's Settings, REDnode restarts it when they change |
| A project with the same id as an installed mod | The project wins while it is in the projects folder (the **DEV** tag). See [Export](ui-tools-export.html#install-it-on-your-own-pc) |
