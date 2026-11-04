---
title: EDGEquest settings and commands
nav_title: Settings and commands
section: EDGEquest
order: 8
description: "Every EDGEquest setting and command in version 0.1.0, what each does, and where to find it."
reviewed: 2026-11-04
---

# Settings and <span class="y">commands</span>

This page lists every setting and command in EDGEquest 0.1.0.

## Settings

Open VS Code's settings (`Ctrl+,`) and search for **edgequest**.

| Setting | Default | What it does | Change it when |
|---|---|---|---|
| `edgequest.makeOnSave` | on | Makes a quest's game files each time its story file is saved. Problems go to the Problems panel | You'd rather make the quest only when you ask, with **Make Quest** |
| `edgequest.author` | empty (asked once) | Your modder name, lower case. A quest's files go in `mod\<author>\<id>`. Empty: New Quest asks, and saves your answer here | You want another name for new quests |
| `edgequest.gamePath` | empty | The Cyberpunk 2077 folder, the one holding `bin`, `archive` and `r6`. Empty: REDcode's game folder, then EDGEdeck's, then a search of your PC | EDGEquest finds the wrong game, or none. **Set Game Folder** sets it for you |
| `edgequest.bridgePath` | empty | REDbridge.exe, or the folder holding it. Empty: REDcode's `redcode.bridgePath`, then REDbridge on your PATH. When REDcode is running with the same game, EDGEquest uses REDcode's REDbridge | The Game Quests view says REDbridge wasn't found |
| `edgequest.dotnetRoot` | empty | Where .NET 10 is, when it's installed for your user only. Empty: REDcode's `redcode.dotnetRoot` | REDbridge can't start because it can't find .NET |

## Commands

Open the command palette (`Ctrl+Shift+P`) and type **EDGEquest**.

### Writing quests

| Command | What it does | Also at |
|---|---|---|
| **EDGEquest: New Quest...** | Starts a quest from the template in the open WolvenKit project: asks a title, an id and once your modder name, writes the story file, opens the Storyboard, and makes the quest | The top of Project Quests |
| **EDGEquest: Open Storyboard** | Opens a story file on the Storyboard | The editor's title bar, when a story file is open as text |
| **EDGEquest: Make Quest** | Makes the quest's game files now, and checks them | The editor's title bar, and each quest in Project Quests |
| **EDGEquest: Made Files...** | Lists the game files made from a story. A phase or scene opens in plain words | Each quest in Project Quests (right-click) |
| **EDGEquest: Refresh** (Project Quests) | Reads the project's quests again | The top of Project Quests |

Open Storyboard, Make Quest and Made Files show in the command palette only while a story file (`.quest.yaml`) is in front. Story files open on the Storyboard by default; to see the text, use **Open YAML** on the Storyboard, or VS Code's **Reopen Editor With...**.

### Reading the game's quests

| Command | What it does | Also at |
|---|---|---|
| **EDGEquest: Find Quest...** | Searches the game's quests by title, file name, fact, journal entry, person or place | The search icon at the top of Game Quests |
| **EDGEquest: Open Quest** | Opens a game quest's page. Used by the views and links; not in the command palette | Clicking a quest in Game Quests |
| **EDGEquest: Refresh** (Game Quests) | Reads the game's quest list again | The top of Game Quests |

### Checking

| Command | What it does | Also at |
|---|---|---|
| **EDGEquest: Check Quest Mod...** | Checks a quest mod's `.archive`, WolvenKit project or extracted files, and names what's wrong | The top of Game Quests; right-click an `.archive` or a folder in the Explorer |

### Setup and maintenance

| Command | What it does | Also at |
|---|---|---|
| **EDGEquest: Set Game Folder** | Picks the Cyberpunk 2077 folder, and saves it in `edgequest.gamePath` | The Game Quests view, when it has no game |
| **EDGEquest: Rebuild Quest Index** | Builds the quest index from your game again (about a minute and a half) | The `...` menu of Game Quests |
| **EDGEquest: Show Log** | Opens EDGEquest's log: what it did, and any errors | The Game Quests view, after an error |

## Views

| View | What it shows |
|---|---|
| **Project Quests** | The quests in your open WolvenKit project, each with what's left to do, its beats and its checklist |
| **Game Quests** | Every quest, phase and scene in the game, in folders titled with their quest's name |

Both are under the EDGEquest icon in the activity bar.
