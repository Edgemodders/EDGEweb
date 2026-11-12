---
title: Troubleshooting EDGEhack
nav_title: Troubleshooting
section: EDGEhack
order: 9
description: "Fixes for common EDGEhack problems: an empty Quickhacks view, no mod files, Try Live that doesn't reach the game, a new quickhack's name, icons, scripts, the Library and assistants."
reviewed: 2026-11-11
---

# Troubleshooting <span class="y">EDGEhack</span>

## Start with the log

EDGEhack writes what it does to its output channel: **View › Output**, then pick **EDGEhack** in the list. Reading the game, each save and the files it wrote, Try Live, the Library: all of it is there. When you ask for help, include those lines.

## Problems and fixes

### The Quickhacks view is empty or says REDcode is missing

EDGEhack reads the game through REDcode's REDbridge. Check that REDcode is installed (0.10.8 or later), that its game folder is set, and that its REDbridge runs: REDcode's side bar says so. **REDcode: Restart REDbridge** starts it again. Then **Refresh** in the Quickhacks view's title bar.

### Saving writes no mod files

The page's status says why:

| It says | Fix |
|---|---|
| Saved on the Desk / Saved in the EDGE Library | Desk and Library quickhacks have no mod files. **Add to Project** |
| Not in the project open in REDcode | Open the project the quickhack belongs to in REDcode, and save again |
| It changes nothing yet | Every field is the game's value. Change something |

### Try Live says to start the game, or nothing changes

Try Live needs [REDnode](../rednode/) 0.62.0 or later in the running game, and a loaded save. The first try of a session waits for you to **Allow** EDGEhack in REDnode's **Editor request** window: press **F10** if it's hidden behind the game. If you pressed **Deny**, restart the game to be asked again.

A changed number shows on the next scan, not on a hack already uploading.

### A new quickhack's name shows as LocKey#...

Expected while trying it live: the game reads names only when it starts. **Pack and Play**, then restart the game.

### A new quickhack doesn't show on enemies

Its mod needs **redscript**: each new quickhack's mod ships a small script that lets enemies take it. Check redscript is deployed, and look in `r6\logs\redscript_rCURRENT.log` for errors.

### Own icons don't show

They come with the mod's archive: **Pack and Play**, then restart. Uploads and generated pictures need REDcode 0.10.8 or later. **Generate** needs an OpenAI key with credits: **EDGEhack: Set the OpenAI Key...**.

### A script doesn't run

Scripts need REDnode 0.61.1 or later, and the quickhack in a project (not on the Desk). After **Pack and Play**, REDnode's **Mod log** (F10) shows the mod's own lines and any error in your script. The file must export `canUse` or `onLand`.

### Add to Library put the quickhack in the top folder

The folder list opens right after the first-time question about where the Library goes. Pick **New Folder...** or a folder of yours there, not **The Library's top folder**. To move it, **Remove from Library** and add it again.

### Claude Code doesn't list edgehack

**Connect an Assistant (MCP)...**, then **Connect Claude Code**, and start a **new** Claude Code session: one started before doesn't see it. If it says Claude Code's `claude` command isn't on the PATH, pick **Copy the Command** and run it in a terminal where Claude Code works.
