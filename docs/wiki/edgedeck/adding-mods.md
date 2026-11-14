---
title: Adding and removing mods
nav_title: Adding and removing mods
section: EDGEdeck
order: 4
description: "Add mods to EDGEdeck from zip, 7z and rar files, single mod files, folders, Nexus Mods and Vortex; keep several versions; remove a mod; and how EDGEdeck decides where each file goes."
reviewed: 2026-11-13
---

# Adding and removing <span class="y">mods</span>

Adding a mod puts it in your **library**, the folder where EDGEdeck keeps your mods. It doesn't touch the game: the mod goes on your list, and you [deploy](deploying.html) when you're ready.

Never added a mod before? [Your first mod](first-mod.html) walks through it once, start to finish.

| On this page | |
|---|---|
| [From a file or folder](#from-a-file-or-folder) | A download you already have |
| [From Nexus Mods](#from-nexus-mods) | With one click, or from a link |
| [From Vortex](#from-vortex), [from a REDcode project](#from-a-redcode-project) | |
| [Versions](#versions) | Several versions of one mod |
| [Removing a mod](#removing-a-mod) | |
| [How EDGEdeck decides where files go](#how-edgedeck-decides-where-files-go) | Reference: [kinds](#kinds) and folders |

## From a file or folder

First get the file. On a mod's Nexus page, open the **Files** tab and press **Manual download**. Before you do, check the page's **Requirements**: a mod that needs another mod or a [framework](frameworks.html) does nothing without it.

1. Press **Add mod** in the Mods view's title bar, or on the EDGEdeck page's toolbar.
2. Pick the download: a `.zip`, `.7z` or `.rar` file. Don't unpack it first. A folder works too, and so does a single mod file (some mods are just one `.archive`, `.reds` or `.lua` file).
3. EDGEdeck asks **Name for this mod** and suggests one. Press Enter, or type your own.

EDGEdeck unpacks the download, works out what kind of mod it is and where each file belongs in the game folder, and adds it to the list. It asks you only when it can't tell: see [When EDGEdeck asks](#when-edgedeck-asks).

{% include shot.html caption="Adding a mod" shows="Add mod's file picker, then the new mod in the list with its kind chips and the status not deployed yet." %}

| What you should see | |
|---|---|
| A new row at the bottom of the **Mods** group | Ticked, with the status `not deployed yet` |
| The status bar | One more mod, and `Deploy (... changes)` |

Good to know:

- **A new mod arrives switched on.** Untick it if you don't want it in the game at the next deploy.
- **A new mod goes to the bottom of the order**, so it loses to mods already in your list when they change the same thing. See [Who wins](conflicts.html#who-wins).
- **A `.rar` needs [7-Zip](https://7-zip.org) or WinRAR installed.** Zip and 7z work on their own.
- **You can delete your download afterwards.** EDGEdeck keeps its own copy of it in the library's `downloads` folder, so the mod can be added again later. That copy is safe to delete too: see [Disk space](library.html#disk-space).

## From Nexus Mods

| How | Steps |
|---|---|
| **Mod manager download** | Once EDGEdeck [handles Nexus download links](nexus.html#download-links), press **Mod manager download** on any file on Nexus. The file downloads into your library and joins your list, with no file picker and no name to confirm |
| **Paste a link** | If another program has the links, run **Nexus: add from a link** from the command palette and paste an `nxm://` link, the kind the **Mod manager download** button sends |
| **Update from a row** | When a mod says `update 1.2 available`, click it. See [Updates](nexus.html#updates) |

Both ways need EDGEdeck [signed in to Nexus](nexus.html#signing-in). If you aren't, EDGEdeck asks you to sign in when the download starts.

A mod added from Nexus remembers its Nexus page, so EDGEdeck can check it for updates. Each file you download from a page is a mod of its own, for example a 1K and a 4K version of the same textures. Two or more files from one page share a row named after the page. See [Several files from one page](nexus.html#several-files-from-one-page).

## From Vortex

**Import from Vortex** lists the mods Vortex has for Cyberpunk. Tick the ones you want, and EDGEdeck copies them into the library with their names, versions and Nexus links. Vortex keeps its own copies. See [Switch from Vortex](switch-from-vortex.html).

## From a REDcode project

For mod makers: **Add from REDcode project** adds your own project as a mod that follows the project. See [EDGEdeck and REDcode](redcode.html).

## Versions

EDGEdeck can keep several versions of one mod. The list still shows one row for the mod.

| | |
|---|---|
| **What the row shows** | The version that is switched on. If none is on, the newest. A `(+1)` after the version number means one more version is in the library |
| **Add a newer version** | It takes over: it goes where the old one was in the order, it is switched on if the old one was, and the old one is switched off but kept |
| **Add an older version** | It is kept, switched off |
| **Add a version you already have** | Nothing is added twice |
| **Where the version comes from** | From Nexus, or from the end of the file name: `REDnode-0.40.1.zip` becomes REDnode, version 0.40.1 |

To switch, hover the mod's row in the Mods view and press **Switch version...**, or use the version dropdown on the EDGEdeck page. Then deploy.

**An example.** You have Cool Jacket 1.0, switched on. You add Cool Jacket 1.1. The row now reads 1.1 `(+1)` and waits for a deploy. Deploy, play, and the new version turns out to be broken. Press **Switch version...**, pick 1.0, and deploy: you are back on 1.0, and 1.1 stays in the library until you remove it.

## Removing a mod

1. Right-click the mod and choose **Remove**. The detail panel and the EDGEdeck page have a Remove button too.
2. EDGEdeck asks you to confirm, and names the version it will delete.
3. Deploy. If the mod was in the game, this takes its files out.

Only that version is deleted from the library. If you have other versions of the mod, they stay, and the question says so. Conflict counts on other mods may take a moment to update.

Removing is for good: the mod's copy in the library is deleted. To stop using a mod but keep it, untick it.

To clear out more at once: the remove button on a Nexus page's row takes every file from that page, and the one on a section's header takes every mod the section shows. See [Sections](mods-view.html#sections).

## How EDGEdeck decides where files go

You don't need this to use EDGEdeck. It is here for when you want to check what a mod will do.

Mod downloads from Nexus aren't consistent. Some are laid out from the game folder down, some contain only a bare `.archive` file, some have a readme and two option folders. EDGEdeck uses one set of rules: it looks for folder and file names it recognises, and maps every file to its place under the game folder.

| If the download contains | Kind | Files go to |
|---|---|---|
| `archive/pc/mod/`, or a `.archive` file anywhere | `archive` (and `xl` for `.archive.xl` files) | `archive/pc/mod/` |
| A REDmod package (`info.json` with `archives`, `scripts` or `tweaks` beside it) | `redmod` | `mods/<name>/` |
| `r6/scripts/` or `.reds` files | `reds` | `r6/scripts/<mod name>/` |
| `r6/tweaks/` or TweakXL `.yaml` files | `tweak` | `r6/tweaks/<mod name>/` |
| `init.lua` or a `cyber_engine_tweaks/mods/` folder | `cet` | `bin/x64/plugins/cyber_engine_tweaks/mods/<mod name>/` |
| A `rednode-app.json` (a REDnode app or mod) | `rednode` | `red4ext/plugins/REDnode/apps/<id>/` |
| `red4ext/plugins/`, or a `.dll` with no `.exe` beside it | `red4ext` | `red4ext/plugins/<mod name>/` |
| `r6/audioware/`, `r6/input/`, `r6/config/`, `engine/config/` or `.asi` files | `audioware`, `input`, `config`, `asi` | The same path in the game folder |
| A framework's own files (RED4ext, CET, redscript, ArchiveXL, TweakXL and others) | `framework` | The same path, shown in the Frameworks group |

### When EDGEdeck asks

If a download offers a choice (folders such as "Option A" and "Option B" that contain the same kinds of files), EDGEdeck lists the options and you pick one.

If nothing in a download looks like a mod file, EDGEdeck says so and adds nothing. If only some files have no place, the mod is added without them, a message says how many were left out, and the log names them (**Show log** in the **`...`** menu).

> In the library, each mod's folder is laid out exactly as it will deploy. So "what will this mod do to my game folder?" is answered by looking in its folder: right-click the mod and choose **Reveal in File Explorer**.

### Kinds

Each mod shows **kind** chips that say what's inside it. A mod can be several kinds at once: a vehicle mod might be `archive`, `reds`, `cet` and `tweak` together.

| Kind | What's inside |
|---|---|
| `archive` | `.archive` files: packages of models, textures, sounds and other game files |
| `xl` | ArchiveXL files that add new things rather than replace them |
| `reds` | redscript scripts |
| `tweak` | TweakXL files that change the game's database of items and stats |
| `cet` | A Cyber Engine Tweaks Lua mod |
| `red4ext` | A RED4ext plugin |
| `redmod` | A package in CD PROJEKT RED's own REDmod format |
| `rednode` | A [REDnode](../rednode/) app or mod |
| `audioware`, `input`, `config`, `asi` | Sound packs, key bindings, settings overrides, ASI plugins |
| `framework` | One of the [frameworks](frameworks.html) other mods build on |
