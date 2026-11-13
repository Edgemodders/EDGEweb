---
title: EDGEmat settings and commands
nav_title: Settings and commands
section: EDGEmat
order: 12
description: "Every EDGEmat setting with its default and when to change it, and every EDGEmat command and button."
reviewed: 2026-11-13
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

Changing any of these, or REDcode's game folder or REDbridge, makes EDGEmat start over: it restarts its REDbridge and checks Game Materials against the game.

## Commands

Open the command palette (`Ctrl+Shift+P`) and type `EDGEmat`. Most are also buttons in EDGEmat's views; the ones that act on a row appear only on that row, when you hover it or in its right-click menu. The views are, top to bottom, the [Desk](desk.html), [Game Materials](game-materials.html) and [Find](find.html).

### The Desk

| Command | Where | Does |
|---|---|---|
| Add the Desk to Project... | Desk title bar (**+**) | Puts every line into a WolvenKit project; asks which variation when a mesh is there twice |
| Clear the Desk... | Desk title bar, when it has lines | Takes everything off, edits included, after asking |
| Add to Project... | A line (new-file icon), or right-click | Puts that line into a project. A project REDcode doesn't have open opens afterwards |
| Rename... | Right-click a line | Names a variation, such as `blue` |
| Take Off the Desk | A line (**×**), or right-click | Takes that line off; asks first if it has edits |
| View in 3D, Copy Game Path, New Material Here..., Copy REDnode Command | Rows under a line | As in Find, below, on the Desk's own copy |

### Game Materials

| Command | Where | Does |
|---|---|---|
| New Material... | Title bar (sparkle) | Opens the [New Material](new-material.html) page, not aimed at a garment |
| Open Setup... | Title bar (a page with an arrow pointing into it) | Opens a setup from the game, a file on disk, or a mod's archive |
| Filter Game Materials | Title bar (funnel) | Narrows the list by plain words |
| Clear Filter | Title bar, while a filter is set | Shows the full list again |
| Rebuild Game Materials | Title bar (refresh) | Builds the list again from the game |
| Set Game Folder | Title bar's **`...`** menu | Picks the Cyberpunk 2077 install EDGEmat reads, from the ones it found or a folder you browse to |
| Show Log | Title bar's **`...`** menu | EDGEmat's log in the Output panel |
| Connect an Assistant (MCP)... | Title bar's **`...`** menu | Connects Claude Code to EDGEmat's MCP server, or copies the command or a JSON entry for another client ([Assistants](assistants.html#connect-claude-code)) |
| Open | Clicking a surface or microblend | Its [surface page](surfaces.html) |
| Copy Game Path | A row (copy icon), or right-click | The file's game path to the clipboard |

Up to 0.3.1 these were **Search Library**, **Clear Search** and **Rebuild Library**, in a view called Library; the command ids are the same.

### Find

| Command | Where | Does |
|---|---|---|
| Find... | The button in the empty Find view, or Find's title bar (magnifier) | Searches garments by name and meshes by path |
| Clear Find | Find's title bar, after a search | Empties the view |
| Open Setup | Clicking a layered material | Its setup in the setup editor, with the mesh's own mask set |
| Add to Desk | A mesh row (**+**), or right-click | Puts the mesh on the [Desk](desk.html) |
| View in 3D | A mesh row (eye), or right-click | The mesh in REDcode's 3D viewer, with its colors from EDGEmat |
| New Material Here... | A material row (sparkle), or right-click | The [New Material](new-material.html) page, aimed at that material on every body's mesh |
| Copy Game Path | A mesh or layered material (copy icon), or right-click | The mesh's path, or the material's setup path |
| Copy REDnode Command | Right-click an item, a look or a material | `addItem("Items....")` for [REDnode's Console](in-the-game.html), to give V the item |

### From other views and the Explorer

| Command | Where | Does |
|---|---|---|
| Open in EDGEmat | Right-click a `.mesh` in REDcode's Game Assets or Project view, VS Code's Explorer or its editor tab; REDcode's 3D view | Puts the mesh on the [Desk](desk.html), with a look open and its layered material in the setup editor. On a game `.mlsetup` in Game Assets, puts the setup on the Desk; on a `.mltemplate`, opens its surface page |
| Open Material in EDGEmat... | Right-click a `.mlsetup`, `.mlsetup.json` or `.mltemplate` in the Explorer (the menu's first item) or on its editor tab; a `.mlsetup` in REDcode's Project view | A setup opens in the setup editor, a surface on its page. A plain click on a `.mlsetup` already opens the setup editor, which is VS Code's default editor for them |

### Saving and image services

| Command | Where | Does |
|---|---|---|
| Save to Project... | The setup editor's title bar (save icon) and its **Save to Project** button; `Ctrl+S` on a game file | Saves the setup into a WolvenKit project ([Save to Project](setup-editor.html#save-to-project)). A setup opened from the Desk saves on the Desk with `Ctrl+S` |
| Set Image Service Key... | Command palette | Stores your Google Gemini or OpenAI key in VS Code's secret storage, after checking it looks right (an OpenAI key starts with `sk-`) |
| Clear Image Service Key... | Command palette | Removes it after asking; the next Generate asks again |

### In the setup editor and surface pages

These are buttons and switches on the page itself, not commands: **Keep open**, **Copy**, **Raw values**, **Hide unused slots**, **All layers** / **Selected layer**, **Change** (the mask set, a layer's surface or microblend) and **Open** (a layer's surface or microblend). In the setup editor, `Ctrl+Z` and `Ctrl+Y` undo and redo. Each is explained on its page: [Surface pages](surfaces.html), [The setup editor](setup-editor.html), [New Material](new-material.html).

The setup editor is also an editor you can pick for any `.mlsetup`: **Reopen Editor With...** › **EDGEmat Setup Editor**.
