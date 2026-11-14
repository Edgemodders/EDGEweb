---
title: Game Assets
section: REDcode
order: 4
description: "Browse the game's archives in REDcode's Game Assets view, filter and search them, open any file read-only, add files to your project, and find the game's texts in the LocKeys view."
reviewed: 2026-11-13
---

# Game <span class="y">Assets</span>

The game keeps its files in **archives**: `.archive` files, each a package of thousands of game files. The **Game Assets** view shows what's inside them as one folder tree, as if they were unpacked: `base\characters`, `base\gameplay`, `ep1\...` (Phantom Liberty) and so on. Nothing is unpacked on disk: REDbridge reads the archives as you go.

| On this page | |
|---|---|
| [Browsing](#browsing) | Open any game file, read-only |
| [Add to Project](#add-to-project) | Take a file into your mod |
| [Right-click menu](#right-click-menu) | Everything a row can do |
| [Filter](#filter) and [Search](#search) | Two ways to find a file by its path |
| [Sounds, TweakDB and texts](#sounds-tweakdb-and-texts) | The other ways into the game's data |
| [The LocKeys view](#the-lockeys-view) | The game's on-screen texts, with a [Try it](#try-it-find-a-text) |

Don't know what the file you want is called? See [Finding what you want to change](finding.html).

{% include shot.html caption="The Game Assets view" shows="The Game Assets view with base expanded a few levels, folders showing their file counts, and the hover buttons on one file row." %}

## Browsing

Folders open when you expand them and show how many files they hold. Click a file to open it, straight from the game:

| File | Opens in |
|---|---|
| A texture (`.xbm`) | The [texture viewer](viewers.html#textures) |
| A mesh (`.mesh`) | The CR2W editor's [3D view](viewers.html#meshes-in-3d) |
| Animations (`.anims`) | The [Animations view](viewers.html#animations) |
| A sound (`.wem`) | The [audio player](viewers.html#sounds) |
| The sound effect index (`sfx_container.opusinfo`) | The [game sound list](viewers.html#the-games-sound-effects) |
| Any other game file | The [CR2W editor](editing.html) |

Files opened from Game Assets are **read-only**, and a banner says so. The game's own files are never changed. To change a file, add it to your project first.

## Add to Project

**Add to Project** copies a game file, or a whole folder of them, into your project's `source/archive`, at the same game path. It's the first hover button on every row (a page with a plus), and the first item in the right-click menu.

- REDcode then shows what it added in the Project view, opened down to the file, because editing it is usually the next step.
- For a folder, REDcode asks first and says how many files it will add.
- It needs a project open. Without one, make one with **REDcode: New Project**. See [Projects](projects.html).

Only add the files you mean to change. Every file in `source/archive` goes into your mod and replaces the game's copy.

## Right-click menu

| Command | Does |
|---|---|
| Add to Project | Copies the file or folder into the project, as above |
| Extract to... | Copies the file or folder to any folder you choose, as it is in the archive. Use it to look at a file in another program. To change a file for your mod, use Add to Project instead |
| Add to Library... | Saves the file, with the files it needs, as one item in the [EDGE Library](../library.html), the store the EDGE tools share. See [The EDGE Library](other-tools.html#the-edge-library) |
| Open Texture | On a texture: opens it in the texture viewer, as a click does |
| Open in Editor | Opens the file read-only in its editor or viewer, as a click does |
| Open as JSON | Opens a copy of the file as WolvenKit JSON text, for reading. Changes to that copy go nowhere: to change the file, add it to your project. See [Editing as JSON](editing.html#editing-as-json) |
| Copy Game Path | Copies the path inside the game, such as `base\gameplay\...`. Also a hover button. The status bar shows what was copied |

## Filter

The **Filter Game Assets** button (the funnel) in the view's title bar narrows the tree to matching files while you type.

- A pattern is **words separated by spaces**, and a file must match all of them. A plain word matches anywhere in the path, so `osprey mesh` finds the Nokota Osprey's meshes.
- `*` and `?` are wildcards: `ep1\weapons\*.xbm` or `*.inkatlas`. `/` works as well as `\`, and case doesn't matter.
- The folders on the way to the matches open by themselves, and a chain of single folders shows as one row.
- **Enter** keeps the filter. The message above the tree shows the pattern and how many files match. **Clear the Game Assets Filter**, the button next to it, brings the full tree back.
- Game Assets shows at most 5,000 matches, and says so when there are more. Add words to narrow it down.
- **Add to Project** on a folder in a filtered tree takes only the matching files under it.

The filter matches **file paths**, not the names you see in the game. The Osprey works because its files happen to carry its name; many don't. See [Finding what you want to change](finding.html).

{% include shot.html caption="A filtered tree" shows="Game Assets filtered with a pattern such as osprey mesh, the message above the tree showing the pattern and match count, and the matching mesh files with their folders opened." %}

## Search

The **Search game files** button (the magnifier) opens a search box that finds files across all archives as you type, by file name or path. Pick a file and choose what to do with it: **Open as JSON**, **Add to project** or **Copy path**.

**REDcode: Open game file as JSON**, from the command palette, is the same search, and opens the file you pick as JSON straight away.

Filter or search? The filter keeps you in the tree, so you can see where files sit and add whole folders. Search is quicker when you know part of a file's name.

## Sounds, TweakDB and texts

Three more ways into the game's data sit next to Game Assets:

- **Browse Game Sounds**, in the Game Assets **`...`** menu, opens the game's 73,000 sound effects as a list you can filter and play. See [Textures, meshes and sounds](viewers.html#the-games-sound-effects).
- The **TweakDB** view lists the game's database records: items, weapons, vehicles and their stats. See [TweakDB and tweaks](tweakdb.html).
- The **LocKeys** view finds the game's on-screen texts. See below.

## The LocKeys view

The game doesn't store its texts where they're used. An item's name, for example, is a reference such as `LocKey#12345`, and the text for each language sits in the game's localization files. A **LocKey** is that reference: a numbered text. The **LocKeys** view in the REDcode sidebar finds them, for the base game and Phantom Liberty.

| Button | Does |
|---|---|
| **Search LocKeys...** (the magnifier) | Finds texts. Type words that must all be in the text, or a key such as `LocKey#12345`, or just its number. Some entries also carry a name, called a secondary key, and that works too |
| **LocKey Language...** (the globe) | Picks one of the game's 19 languages. The setting is `redcode.loc.language` (default `en-us`) |
| **Clear LocKey Search** | Empties the view |

On each entry:

| Action | Does |
|---|---|
| Click | Opens the entry on its row in its localization file, in the [table view](editing.html#localization-files-the-table-view): the game's copy read-only, your project's to edit |
| **Add to Project Onscreens** (hover button) | Copies the entry into your project, so you can change its text. "Onscreens" is the game's name for its on-screen texts. The first time, REDcode creates your project's text file, `<mod name>\localization\<language>.json` under Archive, and a small `.xl` file under Resources that tells ArchiveXL to load it. It then opens the file on that row, ready to change. Your mod needs [ArchiveXL](../glossary.html#game-and-modding-terms) installed in the game |
| **Copy LocKey** (hover button) | Copies the key, to paste into a tweak or a game file |
| **Copy Text** (right-click) | Copies the text |

The view also searches the texts in your project. Where your project and the game have the same key, it shows yours, with a pencil icon, because that is the one the game will show.

Hover over `LocKey#...` in a tweak, YAML, JSON, Lua or redscript file to see its text. The CR2W editor shows the text beside `LocKey#...` values too.

{% include shot.html caption="The LocKeys view" shows="The LocKeys view with a search for a word, entries with their keys and texts, and the hover buttons on one entry." %}

### Try it: find a text

1. In the LocKeys view, press **Search LocKeys...** and type `johnny silverhand`.
2. Click one of the entries.

**You should see** the game's own text file open as a table, on that entry's row, read-only. To change a text and see it in the game, follow [Your first mod](first-mod.html): it renames an item this way.

## When the view is empty

Game Assets shows **Set Game Folder**, **Show REDbridge log** and **Restart REDbridge** when REDbridge isn't running or has no game loaded. See [Troubleshooting](troubleshooting.html#setting-up).
