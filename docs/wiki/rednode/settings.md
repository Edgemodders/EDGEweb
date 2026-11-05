---
title: REDnode settings and controls
nav_title: Settings and controls
section: REDnode
order: 11
description: "Every REDnode setting, key, permission and manifest field, and where REDnode keeps its files."
reviewed: 2026-11-05
---

# Settings and <span class="y">controls</span>

## Launcher settings

REDnode's settings are in the **Settings** drawer: press F10, open the launcher with the REDNODE tab, then press the gear at the right of the **Theme** row. The drawer opens beside the launcher, one setting a row with a line on what it does. REDnode saves them and remembers them across game starts.

{% include shot.html caption="The Settings drawer" src="/assets/shots/rednode/settings-the-settings-drawer.png" alt="The launcher with the Settings drawer open beside it: Keys, GPU sharing, Hot reload, MCP server with Copy setup and Connected assistants, and Developer mode." shows="The REDnode launcher with the Settings drawer open beside it: GPU sharing, Hot reload, MCP server with Copy setup, Developer mode, Open at start and Tooltips." %}

| Setting | Default | What it does | Change it when |
|---|---|---|---|
| **Keys** | | Opens the Keys panel beside the drawer: your AI service keys, shared by every EDGE tool on your PC. See [Shared keys](#shared-keys) | You set up REDagent, or another tool that uses an AI service |
| **GPU sharing** | on | Windows reach the game as shared GPU textures, with no copying of pixels. Off, they're copied through the CPU instead. Switching reopens every window | A window looks wrong (garbage, flicker, stale pictures). If GPU sharing fails, REDnode switches it off by itself for that session |
| **Hot reload** | off for players | Restarts a mod, or reloads an app's page, when its files change | You're making or editing a package, or REDagent is |
| **MCP server** | off for players | Lets Claude Code and other programs on your PC use REDnode's [MCP tools](agents.html). A warning line under it names any program holding the port, while REDnode waits for it (REDnode 0.58.0) | You want Claude Code to see and call the game |
| **Copy setup** | | Copies a command that adds REDnode to Claude Code with a fixed token | For other MCP clients; Claude Code can [sign in](agents.html#connect-claude-code) instead (REDnode 0.40.1 or later) |
| **Connected assistants** | | The assistants you allowed in the game, each with **Revoke** | You want to cut one off; it has to ask again |
| **Developer mode** | off | A debug button on every window's title bar, and the **Development folders** list | You're [debugging](debugging.html) or making a package |
| **Open at start** | on | Off: the game starts with only HUD widgets showing, until your first F10 | You want a clean screen at start |
| **Tooltips** | on | Hints when you hover a control, in every window | You know REDnode well and they get in the way |

The bottom of the launcher itself has:

| Setting | Default | What it does |
|---|---|---|
| **Space**: **New**, **Rename**, **Delete** | one space, Main | Your [spaces](spaces.html) |
| **Theme**: **REDnode**, **HUD red**, **EDGE** | REDnode | The look of every UI kit window |

### Development folders

With **Developer mode** on, the Settings drawer lists **Development folders**: folders outside the game, such as your own project, whose packages run in the game with hot reload instead of their installed copies. Paste a folder's full path and press **Enter**; its packages start at once. A folder can be one package or hold several in subfolders. The Mod Manager marks such a package **DEV** and names the installed copy it hides. **Remove** takes a folder off the list. Folders are kept even with Developer mode off, but the list shows only with it on. REDagent may write inside these folders too, still showing you each change first.

Per package, in the launcher or the [Mod Manager](mod-manager.html):

| Setting | Default | What it does |
|---|---|---|
| On or off | From the package (`open`) | Whether the app is open or the mod runs |
| **Pin to launcher** | Off for new packages | Lists the package in the launcher |
| **Pin to HUD** | Off for new packages | Keeps its windows on screen during gameplay |
| **Shared process** | Off | Runs the Node mod in one process with other shared mods, to save memory |
| **Allowed**, per permission | Off | Grants a permission the package asks for |
| Space | The space you were in when it first opened | Where its windows show |
| **Debug (Node inspector)** | Off, not saved | Runs the Node mod with Node's inspector for debugging |

### Shared keys

Tools that use an AI service need your own key for it, such as an Anthropic key for REDagent. From REDnode 0.49.5 you set each key once, in the game, and every EDGE tool on your PC that supports shared keys can read it. REDagent does from 0.4.1. Open the Settings drawer and press **Open** on the **Keys** line: the Keys panel slides out beside it.

{% include shot.html caption="The Keys panel" shows="The launcher's Settings drawer with the Keys panel open beside it: an Anthropic line showing four dots and the key's last four characters with Used by REDagent, other services Not set with Set, and Other service id at the bottom." %}

| A line shows | Means |
|---|---|
| `•••• abcd` | Set: the key's last 4 characters. The key itself is never shown again |
| From `GEMINI_API_KEY` | An environment variable holds the key, and wins over the saved one |
| Unreadable here | Saved by another Windows user or on another PC: set it again |
| Not set | No key yet |
| Used by ... | The tools that have read it |

The panel has a line for each service EDGE tools know: Anthropic, Google Gemini, OpenAI, ElevenLabs and, from REDnode 0.56.1, **Tripo** (the 3D service EDGEmat's Wardrobe Designer uses), so you can set a key before any tool asks for it.

**Set** and **Replace** open a box that shows dots: paste the key and press Enter. A key that doesn't look right for its service is refused: an Anthropic key starts with `sk-ant-`, an OpenAI key with `sk-`. **Remove** asks once more, because it removes the key for every tool. **Other service id** adds a line for any other service.

Keys are kept encrypted for your Windows user, one file per service, in `%APPDATA%\Edgemodders\keys`. A package reads a key only when it asks for the `keys:<service>` permission and you allow it. It can open REDnode's own **Key request** window, so you paste the key into REDnode, never into the package. More in REDnode's [shared keys guide](https://edgemodders.github.io/REDnode/keys.html).

## Keys

| Key | Where | Does |
|---|---|---|
| **F10** | In the game | Passive, interactive, hidden, and round again |
| **Esc** | Interactive mode | Back to passive. Ends a held cursor first. A page that asks for Esc, such as the UI Workbench while it picks, gets it instead; F10 always leaves |
| Click empty screen | Interactive mode | Back to passive |
| **Ctrl+1** to **Ctrl+9** | Overlay open | Switch [space](spaces.html) |
| **Ctrl+C**, **Ctrl+V**, **Ctrl+X**, **Ctrl+A**, **Ctrl+Z**, **Ctrl+Y** | The front window | Copy, paste, cut, select all, undo, redo in a text field. From REDnode 0.56.1 they reach the page as keys, so a page with its own undo or copy, such as the UI Workbench's editor, takes them |

The F10 key can't be changed yet.

## Permissions

What a package can ask for in its manifest's `permissions`, and the name you see in the launcher:

| In the manifest | The launcher says it asks for | Gives |
|---|---|---|
| `mcp` | REDnode's tools for AI agents (the kernel MCP server) | `kernel.mcp()`: the [MCP tools](agents.html#for-packages) for its own agent |
| `agent` | questions to the AI assistant (REDagent); each answer costs you a little | `agent.ask` |
| `bridge` | REDbridge, WolvenKit's engine: reads the game's archives and files, and can write files where the package asks | `kernel.bridge()` |
| `front` | staying above other packages' windows, with REDnode's own tools | The [tool layer](spaces.html#the-tool-layer) |
| `solo` | hiding every other package's windows while it asks (solo mode) | `ui.solo()` |
| `archives` | swapping archives in the game's mod folder while the game runs (hot-loading) | `archives.reload()`, through [REDswap](redswap.html) |
| `keys:<service>`, such as `keys:anthropic` | your Anthropic key (or the service's), shared with every EDGE tool (calls with it may cost you) | `secrets.shared()` and `secrets.askShared()`: the player's [shared key](#shared-keys) |
| `admin` | managing REDnode: what every package costs, ending or restarting any package, and switching AI assistants' tools on and off | `admin`, as the [Admin Tools pack](index.html#optional-packs) uses; also switching packages on and off (`admin.setOpen`), a projects folder under Documents (`admin.projectsFolder`) and changing the game's own UI widgets live (`ink.try`), as the [UI Workbench](ui-tools.html#the-admin-permission) uses. The Mod Manager shows a warning under it |

## Manifest fields

Every field of `rednode-app.json`:

| Field | For | Means |
|---|---|---|
| `id` | All | Unique. Lowercase letters, digits, `-` and `_`. Settings and positions are saved under it |
| `name`, `version`, `author`, `description` | All | Shown in the launcher and Mod Manager |
| `main` | Node mods | The file to run, relative to the folder. `.mjs` for `import` syntax |
| `service` | Node mods | A `.mjs` or `.js` file whose exported functions other packages can call. See [Mod services](making-mods.html#mod-services). A package may have a service and no `main` |
| `sounds` | All | The package's own sound files, played by name with `audio.play`: `{ "alarm": "sounds/alarm.ogg" }`. `.wav`, `.ogg`, `.mp3` or `.flac` |
| `entry` | Apps | The page to show, relative to the folder |
| `width`, `height` | Apps | Window size in pixels at 1080p, 1 to 4096. Needed with `entry` |
| `anchor` | Apps | `top-left` (default), `top`, `top-right`, `left`, `center`, `right`, `bottom-left`, `bottom`, `bottom-right` |
| `x`, `y` | Apps | Offset from the anchor in 1080p pixels. With `bottom-right`, `x: -40` is 40 px in from the right edge |
| `kind` | Apps | `window` (default) or `hud`: drawn, never focused, never dragged |
| `resizable`, `minWidth`, `minHeight` | Apps | The player can resize the window by a grip in its corner, down to the minimum size. See [Overlay apps](overlay-apps.html#window-size-and-the-whole-screen) |
| `fill` | Apps | `screen`: the page covers the whole game view at any aspect ratio |
| `hideWith` | Apps | Game states that hide the window: `menu`, `photo-mode`, `scene`, `main-menu` |
| `open` | All | Start open or running, until the player changes it |
| `isolation` | Node mods | `process`: always its own process, never shared. For mods with native addons |
| `permissions` | All | Powers to ask the player for (above) |
| `requires` | All | What it needs, with version ranges: game mods, `rednode`, `redbridge`, or another REDnode package by its id. See [Requirements](making-mods.html#requirements) |
| `provides` | All | [Roles](making-mods.html#roles) it answers for other packages through its service file, such as `voice`. `agent` is REDagent's |

## Files and folders

| What | Where |
|---|---|
| REDnode | `red4ext\plugins\REDnode` in the game folder: `REDnode.dll`, `Scripts`, `host`, `apps` |
| Packages | `red4ext\plugins\REDnode\apps`, one folder each |
| Settings, positions, spaces, permissions, development folders, secrets, packages' data | `%APPDATA%\@rednode\overlay` |
| Shared keys | `%APPDATA%\Edgemodders\keys`, one encrypted file per service |
| The editor channel's port and token, rewritten each run | `%LOCALAPPDATA%\REDnode\editor.json` |
| REDbridge, when **Get REDbridge** installed it | `%LOCALAPPDATA%\REDnode\bridge` |
| The [UI Workbench](ui-tools.html)'s projects, and its exports | `Documents\REDnode\UI projects` (watched as a development folder) and `Documents\REDnode\UI exports` |
| Logs | `red4ext\logs` in the game folder: `rednode-overlay.log` (and `rednode-overlay.prev.log`, the last session's), `rednode-mods.log`, the plugin's `rednode-*.log`, and `rednode-faults.log` around archive swaps |

The MCP server's port, 41820, can be changed as `mcp.port` in the host's `settings.json` in that folder. In the same file, `"editorChannel": "off"` turns off the editor channel, which lets tools on your PC play game sounds in the running game, `"edgematTools": "all"` also lists EDGEmat's tools to desktop assistants such as Claude Code, and `"edgematBridge": "own"` keeps EDGEmat on [a REDbridge of its own](agents.html#edgemats-tools-for-in-game-assistants). Close the game first.

## For developers: running the host by hand

From a REDnode checkout you can run the overlay host yourself instead of the packaged one, with switches the launcher doesn't have, such as several apps folders at once or a forced render path. Hot reload and the MCP server are then on by default. The options are in the [overlay host README](https://github.com/Edgemodders/REDnode/tree/main/packages/overlay). Only one host runs at a time: one you started first keeps the game's connection. A host you start by hand uses MCP port 41821, since 41820 is kept for the game's (`--mcp-port=<n>` for another; REDnode 0.58.0).
