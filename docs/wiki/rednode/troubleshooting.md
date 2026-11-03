---
title: Troubleshooting REDnode
nav_title: Troubleshooting
section: REDnode
order: 12
description: "Fixes for common REDnode problems: no launcher tab, the wrong game version, missing windows, crashed mods, packages that need something, archive swaps, Claude Code not connecting, and the UI Tools pack's UI Workbench."
reviewed: 2026-11-03
---

# Troubleshooting <span class="y">REDnode</span>

## Start with the logs

REDnode writes its logs to `red4ext\logs` in the game folder. Close the game first: some are only complete after it exits.

| Log | Look for |
|---|---|
| `red4ext-*.log` | A line saying REDnode `has been loaded`. If it's missing, REDnode never started |
| `rednode-*.log` | The plugin: `REDnode 0.56.1 loading` (with your version), and that it started the host |
| `rednode-overlay.log` | The overlay host: packages found, started and refused, permissions, the MCP server. The last session's is kept as `rednode-overlay.prev.log` |
| `rednode-mods.log` | What Node mods printed, and their crashes |
| `r6\logs\redscript_rCURRENT.log` | Script errors, if the game stopped at startup |

When you ask for help, include the first lines of the plugin and host logs, and the lines around the problem.

## Problems and fixes

### No REDNODE tab at the main menu

1. Check your game version against REDnode's: REDnode 0.38.1 and later are for game **2.5**, and 0.37.0 is for **2.31**. RED4ext won't load a REDnode built for the other version. Update RED4ext too (1.31 or later for 2.5).
2. Check `red4ext-*.log` for REDnode. If RED4ext has no log at all, RED4ext itself isn't working: install or update it for your game version.
3. If RED4ext loaded but REDnode isn't mentioned, REDnode went somewhere else. Check that `red4ext\plugins\REDnode\REDnode.dll` is inside your game folder; install the zip again if not.
4. If REDnode loaded, check `rednode-overlay.log`. If it's missing or old, the host didn't start. Make sure `red4ext\plugins\REDnode\host\REDnode-overlay.exe` exists; if not, install the zip again.
5. Security software may stop a game plugin from starting another program. If the host is blocked, allow `REDnode-overlay.exe`.

### The launcher says GAME OFF

The overlay host isn't connected to the game. It can show for a moment while the game starts. If it stays, quit the game and start it again, then check `rednode-overlay.log` and the plugin log for errors. Only one host can run at a time: if you started one by hand (`npm run overlay`), close it before starting the game, or the game's own host exits.

### The game stops at startup after deploying

Usually a script error: check `r6\logs\redscript_rCURRENT.log`. REDnode needs redscript installed. To check whether REDnode is the cause, move the `red4ext\plugins\REDnode` folder out of the game folder (it holds your packages too) and start the game again.

### Building from source: the deploy script stops

| Message | Fix |
|---|---|
| `RED4ext not found under ...` | Your game isn't in the default Steam folder. Add `-GameDir '<your game folder>'` |
| `Close the game first.` | The game locks REDnode's files while it runs. Quit it, wait for it to close, and run the script again |
| `Nothing staged. Run tools\build-native.ps1 first.` | Build first: `.\tools\build-native.ps1`, then `npm run overlay:package` |

### Building from source: the build fails

| Problem | Fix |
|---|---|
| The Build Tools install runs out of memory or hangs | Close Steam and your browser. If an install is already running in the background, wait for it instead of starting another |
| The first plugin build fails to download | Its first run downloads the RED4ext SDK. Check your internet connection and run it again |
| Packaging says Electron is missing | Run `node node_modules/electron/install.js` once in the REDnode folder |

The [developer setup](https://edgemodders.github.io/REDnode/dev-setup.html) has every tool's exact version.

### A window I expect isn't showing

Work down this list:

| Check | Fix |
|---|---|
| Is the overlay hidden? | Press **F10** until windows show |
| Is it pinned to the HUD? | Unpinned windows show only in interactive mode. Pin it in the [Mod Manager](mod-manager.html#pin-to-launcher-and-pin-to-hud) or from its title bar |
| Is it in another space? | Check the Mod Manager's **Space** column, or switch spaces with Ctrl+1 to 9 |
| Is a package in solo mode? | The tab shows **SOLO**. Press **End** |
| Did you close it? | "Window closed" with **Show** in the launcher or Mod Manager brings it back |
| Is a game menu open? | Many windows hide with menus, photo mode and loading screens |
| Is the package on? | Switch it on in the Mod Manager |

### A new package isn't in the launcher

New packages start unpinned. Open the Mod Manager and use the **New** filter, then switch it on and pin it. If it isn't in the Mod Manager either, check `rednode-overlay.log`: a package whose manifest names a file that doesn't exist yet is skipped until the file is there.

### A mod shows CRASHED or NOT RESPONDING

Only that mod is affected; the game and other mods keep running. Read **Last error** in the Mod Manager or the [Mod log](debugging.html#the-mod-log), then press **Restart**. If it keeps crashing, send its author the error: **Copy** in the Mod log puts it on the clipboard. A mod stopped at a debugger breakpoint shows NOT RESPONDING too; that's expected.

### A package says NEEDS, or "Needs ..."

It requires a mod your game doesn't have, or has in an older version. The Mod Manager's **Requires** list says which and what version. Install it with [EDGEdeck](../edgedeck/) or your mod manager and restart the game.

### A package's feature does nothing

It may be waiting for a permission. Look for **Asks for ...** in its launcher row or Mod Manager details, and switch **Allowed** on if you trust it. Features that need REDbridge also need REDbridge installed: press **Get REDbridge** in the package's details in the Mod Manager.

### An archive swap is refused

| Message is about | Fix |
|---|---|
| The main menu | Load a save first |
| RED Hot Tools | Install [RED Hot Tools](https://github.com/psiberx/cp2077-red-hot-tools/releases) 1.3 or later and restart the game |
| Upper- and lowercase names | The official RED Hot Tools would end the game on this swap. Install the [Edgemodders build](https://github.com/CyberbuildsAI/cp2077-red-hot-tools/releases) over it, then restart the game |
| A permission | Allow the package's "swapping archives" permission in the Mod Manager |

After a swap, things already in the world can keep the old look until they load again; clothes V wears update straight away. A swapped archive stays installed: remove it from `archive\pc\mod` when you're done testing.

### "That game object no longer exists"

A mod used a game object from before a save load, or one the game removed. It's the mod's mistake, not yours: it should fetch objects again after each load. Restarting the mod usually clears it.

### "V is not in the world yet"

A package called a game function that reaches the world (weather, time, districts) while the game was starting, at the main menu or during a load. From REDnode 0.49.5 REDnode refuses such calls instead of letting them crash the game. Load a save and try again. If a mod shows it often, tell its author: the mod should wait for `game.state().world` (see [Game API](game-api.html#rules-worth-knowing)).

### Windows flicker, show garbage or don't update

Switch **GPU sharing** off in the launcher's Settings drawer (the gear). Every window reopens with the other way of drawing. If that fixes it, report it with your graphics card and the host log.

### The cursor vanishes, or interactive mode ends by itself

Press F10 to get back to interactive mode. Fixes for both went into earlier versions and passed their tests, so if it happens on a current version, report it with the plugin log: it records when the game leaves and comes back to the front. If the arrow blinks with DLSS on, update your GPU driver: an older NVIDIA driver caused it on one laptop.

### A HUD widget stays up in a cutscene, or hides in a conversation

Which scenes count as cutscenes is still being confirmed. Note what was happening and report it: it helps settle it.

### The game runs slowly, or runs out of memory

The game alone needs 12 to 16 GB of RAM. Each open REDnode window adds roughly 60 to 100 MB and each mod process about 100 MB. Switch off windows you don't need, put mods in a **shared process**, and close other programs. The **Perf** sample shows what the overlay costs.

### Claude Code can't reach REDnode

| Check | Fix |
|---|---|
| Is the game running? | The server only runs with the game. `claude mcp list` showing `rednode` failing while the game is closed is normal |
| Is **MCP server** on? | Switch it on in the launcher's Settings drawer (the gear) |
| Did you connect it? | Run `claude mcp add --transport http --scope user rednode http://127.0.0.1:41820/mcp` once, then `/mcp` › `rednode` › **Authenticate** and **Allow** in the game (REDnode 0.40.1 or later). Or press **Copy setup** and run the command in a terminal once |
| Did you press **Revoke**? | A revoked assistant asks again: **Authenticate** in `/mcp` and **Allow** in the game |
| Is it a new session? | Claude Code loads MCP servers when a session starts. Start a new one |

### Hot reload doesn't pick up my changes

Switch **Hot reload** on in the launcher's Settings drawer. Make sure you're editing the copy REDnode runs: the one in the game's apps folder, or one in a [development folder](settings.html#development-folders) you added. The Mod Manager marks a development copy **DEV**.

### I pressed F9 and lost progress

F9 is the game's Quick Load, not REDnode's: it loads your last save. It sits right beside F10, so mind it.

### Something else

Ask on [Discord]({{ site.discord }}) with your logs' first lines, or [open an issue](https://github.com/Edgemodders/REDnode/issues) on REDnode's repo.

## UI Tools

Problems with the optional [UI Tools](ui-tools.html) pack's **UI Workbench**.

### "Edit and Projects need the admin permission"

The Workbench is missing the `admin` permission, which Try, To source, Edit, Projects and Export need. In the Mod Manager, select **UI Workbench**, and under **Permissions** switch **Allowed** on for **managing REDnode**. Then open the tab again. A **Try** without it answers with the reason instead of changing the widget. **Inspect** works without it. See [The admin permission](ui-tools.html#the-admin-permission).

### The UI Workbench isn't in the Mod Manager

| Check | Fix |
|---|---|
| Is it installed? | `red4ext\plugins\REDnode\apps\ui-workbench` must exist in the game folder. Install the [pack's zip](ui-tools.html#install) again |
| Is your REDnode new enough? | It needs REDnode 0.56.0 or later. The Mod Manager shows **NEEDS** for an older one: [update REDnode](install.html#updating-rednode) |
| Is Codeware installed? | It needs Codeware 1.16 or later; without it the Workbench shows **NEEDS** and reads no layers |

### The tree says "Waiting for the game"

The game didn't answer yet: at the start, before a save loads, or during a load. The Workbench asks again every 3 seconds by itself. Load a save; if it still waits, press **Refresh**. If it never reads, check that Codeware is installed for your game version.

### Pick finds nothing, or a HUD piece is missing

| What you see | Why, and what to do |
|---|---|
| "No drawn widget of the game is under that point." | Nothing the game draws is there, or what is there is fully transparent. Pick leaves out widgets at opacity 0 and the layers drawn onto surfaces in the world (signs, adverts, screens) |
| The health bar can't be picked | It hides itself out of combat. Pick it in a fight, or use the quest tracker, the minimap or the clock |
| A HUD entry says **not spawned** | The game makes that piece only when it's needed (a video, a boss fight, a vehicle). Once it's on screen, press **Refresh** and select it again |
| A menu's widgets aren't in the tree | Menu widgets exist only while their menu is open. Open the menu, then press **Refresh** |
| The widget you want is under another | Right-click while picking to set the top one aside, or select its parent and use **Pick inside**. See [Pick](ui-tools-inspect.html#reach-a-widget-under-another) |

### Try's changes are gone

| When | Why |
|---|---|
| After a save load | The game rebuilds its HUD with fresh widgets, so the ones you changed are gone, and the new ones show the game's own values. Pick again |
| After the Workbench was switched off or closed | On purpose: REDnode puts back every change it tried. Nothing Try does is kept |
| A text changes back by itself | The game's own controller writes it again, such as a clock's. The property belongs to the controller |

### Run says "REDnode did not find ..."

The full message ends "check that the folder is watched (the launcher's Settings, Development folders)". REDnode runs projects from `Documents\REDnode\UI projects` as a development folder, and the Workbench adds that folder the first time it opens Projects in a session.

1. In the launcher's Settings drawer, switch on **Developer mode** and look at **Development folders**: `...\Documents\REDnode\UI projects` should be listed.
2. If you removed it, switch the Workbench off and on, and open **Projects** again: it adds the folder back. Or paste the folder's path into the list yourself.
3. A project made a moment ago can take a second or two to be found; press **Run** again.
4. Check `rednode-overlay.log` for the project's id: a project whose `rednode-app.json` doesn't read is skipped.

### "There is a project ... already"

Two projects can't share an id, and the id comes from the name. Pick another name. A project you deleted is in `.trash` and doesn't count.

### A project shows CRASHED

Its script stopped with an error. Read it in the **Mod log** (switch it on in the launcher): it names the file and line. A mistake shown in the editor's header (the markup's or the script's) does this if you save it while the project runs. Fix it, press **Save**, and if the panel doesn't come back, **Stop** and **Run**.

### The panel doesn't show on the HUD

| Check | Fix |
|---|---|
| Is the overlay in front? | Press **Esc** to leave interactive mode, so the HUD shows clearly |
| Is the project running? | The Projects tab marks it **running**. Press **Run** in Edit |
| Is there an error in its header? | The panel doesn't load until the markup reads. Fix it and save |
| Did you move it off screen? | Check the `<mount>` line's `anchor`, `x` and `y`. They are in the HUD's units, which are larger than the overlay's 1080p pixels (3840 x 2160 across the screen in the developer's tests) |
| Is a game menu open? | Panels go on the HUD; menus cover it |

### My installed export shows DEV, or runs the old version

A project in `Documents\REDnode\UI projects` wins over an installed mod with the same id: the Mod Manager marks it **DEV** and runs the project instead. Delete the project in **Projects** (it goes to `.trash`), or move its folder out of `UI projects`, then restart the game. Renaming the project in the Workbench isn't enough: the id stays. See [Install it on your own PC](ui-tools-export.html#install-it-on-your-own-pc).

### Where's my deleted project?

In `Documents\REDnode\UI projects\.trash`, in a folder named after its id with the date and time it was deleted. Move it back into `UI projects` and rename the folder to its id (the part before the date).
