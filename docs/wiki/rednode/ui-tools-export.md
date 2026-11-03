---
title: "UI Workbench: Export"
nav_title: "UI Tools: Export"
section: REDnode
order: 10.6
description: "Turn a UI Workbench project into a zip that installs as a mod of its own: where the zip goes, what is in it, how a player installs it, and testing it on your own PC."
reviewed: 2026-11-03
---

# UI Workbench: <span class="y">Export</span>

**Export** turns a project into a mod anyone with REDnode can install. It writes a zip laid out like the game folder, so players add it to Vortex or EDGEdeck, or extract it into the game, like any other mod.

> **Needs the admin permission**, as Projects and Edit do. See [The admin permission](ui-tools.html#the-admin-permission).

## Export a project

Press **Export** in either place:

| Where | |
|---|---|
| The **Projects** tab | On the project's row |
| The **Edit** tab | In the bar, beside Run and Stop. Unsaved changes are saved first |

The status line says where the zip went, how many files and how big, and that the path is on your clipboard:

`Exported My Panel: C:\Users\...\Documents\REDnode\UI exports\my-panel-0.1.0.zip (4 files, 3 KB). The path is copied.` (the size is an example)

Paste the path into Explorer's address bar to open the folder. Point at the status line if it's cut short: its tooltip shows the whole path.

## What's in the zip

| | |
|---|---|
| Its name | `<id>-<version>.zip`, such as `my-panel-0.1.0.zip`. Exporting the same version again writes over it |
| Its folder | `Documents\REDnode\UI exports`, beside your projects |
| Its layout | `red4ext\plugins\REDnode\apps\<id>\`, as in the game folder |
| Inside | Every file of the project (`rednode-app.json`, `panel.ink.html`, `mod.mjs`, and any you added), leaving out dot folders and `node_modules` |
| `README.txt` | Beside the project's files: the mod's name, version and description, what it needs, and how to install it |
| What it needs | Written into the zip's copy of `rednode-app.json`: Codeware 1.16 or later, as every project says, and REDnode 0.55.2 or later when your project names no REDnode version (the template's live slider needs it). Your project's own file is left as it is |

To export a new version, raise `version` in the project's `rednode-app.json` (in its folder, with any text editor), then export again: the new zip has the new number and the old one stays.

{% include shot.html caption="An exported zip" shows="Windows Explorer open on Documents\REDnode\UI exports with my-panel-0.1.0.zip, and the zip opened to show red4ext\plugins\REDnode\apps\my-panel with its files and README.txt." %}

## How a player installs it

The same way as any REDnode package. They need REDnode and Codeware first.

1. Close the game.
2. Add the zip to Vortex or [EDGEdeck](../edgedeck/adding-mods.html) and deploy, or extract it into the Cyberpunk 2077 folder (the one that holds `bin` and `red4ext`). It lands in `red4ext\plugins\REDnode\apps\<id>`.
3. Start the game, press **F10**, open the **Mod Manager**, find the mod by its name and switch it on.

It runs as a mod of its own: the Workbench doesn't need to be installed. This passed in game on 2026-11-03: an exported template project, extracted into the game folder, started as its own mod with its controls window and HUD panel, and the slider drove the panel.

### Share it

Upload the zip to Nexus Mods or anywhere else. On the mod's page, list **REDnode** (name the version you tested with) and **Codeware** as requirements, and say it is for game version 2.5. See [Sharing your package](making-mods.html#sharing-your-package).

## Install it on your own PC

Your projects folder is a [development folder](settings.html#development-folders), and a development copy **wins** over an installed one with the same id: REDnode runs the project from your Documents folder and hides the installed copy, with a **DEV** tag in the Mod Manager.

So before you install your own export to test it as a player would:

1. In **Projects**, **Delete** the project (it goes to `.trash`, so you can take it back), or move its folder out of `UI projects` with Explorer. The Workbench's **Rename** is not enough: it changes the name, and the id stays.
2. Quit the game, install the zip, and start the game again.
3. In the Mod Manager, the mod shows with **no DEV tag**. Switch it on.

To go back to working on it, take the folder back out of `.trash` into `UI projects` (remove the date from the end of its name). Uninstall the exported copy first, or remember the project now wins again.

## Good to know

| | |
|---|---|
| An exported mod is a normal package | Players allow its permissions, pin it and switch it on in the Mod Manager like any other |
| Interactive panels | Native panels can't take clicks yet (phase I3). Put controls in an overlay window, as the template does |
| The project's id | Comes from the project's first name and never changes on Rename. Pick the first name with care if you plan to share it |
