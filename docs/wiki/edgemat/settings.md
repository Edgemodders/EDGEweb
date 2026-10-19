---
title: EDGEmat settings and commands
nav_title: Settings and commands
section: EDGEmat
order: 8
description: "Every EDGEmat setting with its default and when to change it, and every EDGEmat command and button."
reviewed: 2026-10-19
---

# Settings and <span class="y">commands</span>

## Settings

Open VS Code's settings (`Ctrl+,`) and search for `edgemat`. Most people never change any of these: with REDcode set up, EDGEmat uses REDcode's game folder and REDbridge, and otherwise finds the game on its own.

{% include shot.html caption="EDGEmat in VS Code's settings" shows="VS Code's Settings editor filtered to edgemat, showing its three settings, all empty." %}

| Setting | Default | What it does | Change it when |
|---|---|---|---|
| `edgemat.gamePath` | empty | The Cyberpunk 2077 folder (the one with `bin`, `archive` and `r6`). Empty means REDcode's game folder, else a search of Steam, GOG and Epic | EDGEmat finds no game, or the wrong one. **Set Game Folder** sets it for you |
| `edgemat.bridgePath` | empty | `REDbridge.exe`, or its folder. Empty means REDcode's `redcode.bridgePath`, then REDbridge on your PATH. When REDcode is running with the same game, EDGEmat uses REDcode's running REDbridge instead | You don't use REDcode, or you build REDbridge yourself |
| `edgemat.dotnetRoot` | empty | The .NET location for EDGEmat's own REDbridge process only. Empty means REDcode's `redcode.dotnetRoot` | .NET 10 is installed for your user only and REDbridge can't find it |

> **Never set `DOTNET_ROOT` for your whole Windows account.** Every .NET program then looks only there, and it breaks other tools. Use `edgemat.dotnetRoot`, which applies to EDGEmat's REDbridge alone.

Changing any of these, or REDcode's game folder or REDbridge, makes EDGEmat start over: it restarts its REDbridge and checks the library against the game.

## Commands

Open the command palette (`Ctrl+Shift+P`) and type `EDGEmat`. Most are also buttons in EDGEmat's views; the ones that act on a row appear only on that row.

### The Library

| Command | Where | Does |
|---|---|---|
| Open Setup... | Library title bar (go-to-file icon) | Opens a setup from the game, a file on disk, or a mod's archive |
| Search Library | Library title bar (magnifier) | Filters the Library by plain words |
| Clear Search | Library title bar, while searching | Shows the full Library again |
| Rebuild Library | Library title bar (refresh) | Builds the library again from the game |
| Set Game Folder | Library's **`...`** menu | Picks the Cyberpunk 2077 install EDGEmat reads, from the ones it found or a folder you browse to |
| Show Log | Library's **`...`** menu | EDGEmat's log in the Output panel |
| Open | Clicking a surface or microblend | Its [surface page](surfaces.html) |
| Copy Game Path | Hover a row (copy icon), or right-click | The file's game path to the clipboard |

### Find

| Command | Where | Does |
|---|---|---|
| Find... | The button in the empty Find view, or Find's title bar (magnifier, shown on hover) | Searches garments by name and meshes by path |
| Clear Find | Find's title bar, after a search | Empties the view |
| Open Setup | Clicking a layered material | Its setup in the setup editor, with the mesh's own mask set |
| View in 3D | Hover a mesh row (eye icon), or right-click | The mesh in REDcode's 3D viewer, with its colors from EDGEmat |
| Copy Game Path | Hover a mesh or layered material (copy icon), or right-click | The mesh's path, or the material's setup path |

### In the setup editor and surface pages

These are buttons and switches on the page itself, not commands: **Keep open**, **Copy**, **Raw values**, **Hide unused slots**, **All layers** / **Selected layer**, **Change** (the mask set) and **Open** (a layer's surface or microblend). Each is explained on its page: [Surface pages](surfaces.html), [The setup editor](setup-editor.html).

The setup editor is also an editor you can pick for any `.mlsetup`: **Reopen Editor With...** › **EDGEmat Setup Editor**.
