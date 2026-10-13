---
title: Adding mods to REDdeck
nav_title: Adding mods
section: REDdeck
order: 4
description: "Add mods to REDdeck from zip, 7z and rar files, folders, Nexus Mods and Vortex, and how REDdeck decides where each file goes."
reviewed: 2026-10-13
---

# Adding <span class="y">mods</span>

Adding a mod puts it in your [library](library.html). It doesn't touch the game: the mod goes on the list, and you [deploy](deploying.html) when you're ready.

## From a file or folder

1. Press **Add mod** in the Mods view's title bar, or on the REDdeck page's toolbar.
2. Pick a `.zip`, `.7z` or `.rar` file, or a folder.

REDdeck unpacks it, works out what kind of mod it is and where each file belongs in the game folder, and adds it to the list. It asks you only when it can't tell, for example when the download contains a choice of options.

{% include shot.html caption="Adding a mod" shows="Add mod's file picker, then the new mod in the list with its kind chips and the status not deployed yet." %}

> **Tip:** keep the original download. REDdeck keeps a copy of it in its `downloads` folder too, so a mod can be added again later. See [Library, disk space and loadouts](library.html).

## How REDdeck decides where files go

Mod downloads from Nexus aren't consistent. Some are laid out from the game folder down, some contain only a bare `.archive` file, some have a readme and two option folders. Other managers handle this with dozens of special-case installers. REDdeck uses one set of rules: it looks for folder and file names it recognises, and maps every file to its place under the game folder.

| If the download contains | Kind | Files go to |
|---|---|---|
| `archive/pc/mod/`, or a `.archive` file anywhere | `archive` (and `xl` for `.archive.xl` files) | `archive/pc/mod/` |
| A REDmod package (`info.json` with `archives`, `scripts` or `tweaks` beside it) | `redmod` | `mods/<name>/` |
| `r6/scripts/` or `.reds` files | `reds` | `r6/scripts/<mod name>/` |
| `r6/tweaks/` or TweakXL `.yaml` files | `tweak` | `r6/tweaks/<mod name>/` |
| `init.lua` or a `cyber_engine_tweaks/mods/` folder | `cet` | `bin/x64/plugins/cyber_engine_tweaks/mods/<mod name>/` |
| `red4ext/plugins/`, or a `.dll` with no `.exe` beside it | `red4ext` | `red4ext/plugins/<mod name>/` |
| `r6/audioware/`, `r6/input/`, `r6/config/`, `engine/config/` or `.asi` files | `audioware`, `input`, `config`, `asi` | The same path in the game folder |
| A framework's own files (RED4ext, CET, redscript, ArchiveXL, TweakXL and others) | `framework` | The same path, shown in the Frameworks group |

### When REDdeck asks

If nothing matches, or a download offers a choice (folders such as "Option A" and "Option B" that contain the same kinds of files), REDdeck asks. It shows the folder tree with its best guess, and you correct it once. The answer is stored with the mod, so it isn't asked again.

> In the library, each mod's folder is laid out exactly as it will deploy. So "what will this mod do to my game folder?" is answered by looking in its folder, and you or an assistant can check or fix a mod with File Explorer.

## From Nexus Mods

| How | Steps |
|---|---|
| **Mod manager download** | With REDdeck handling Nexus download links, press **Mod manager download** on any file on Nexus. The file lands in your library |
| **Paste a link** | Without link handling, copy the `nxm://` link (right-click **Mod manager download**, copy link) and use **Nexus: add from a link** |
| **Update from a row** | When a mod says `update 1.2 available`, click it. See [Nexus Mods](nexus.html#updates) |

Mods added from Nexus remember their Nexus id, so REDdeck can check them for updates.

## From Vortex

**Import from Vortex** copies the mods Vortex has for Cyberpunk into the library, with their names, versions and Nexus ids. Vortex keeps its own copies. See [Switch from Vortex](switch-from-vortex.html).

## From a REDcode project

**Add from REDcode project** adds a REDcode or WolvenKit project's packed output as a mod that follows the project. Pack the project again and the library copy refreshes. See [REDdeck and REDcode](redcode.html).

## Versions

A mod has one row however many of its versions are in the library. The newest, or the one that's on, stands for it. The others wait in the version dropdown on the REDdeck page and in **Switch version...** on the right-click menu. Adding a version the library already has does nothing.

To go back to an older version, switch to it and deploy. To clear out old versions, see [Library, disk space and loadouts](library.html).

## Removing a mod

Right-click it and choose **Remove**, or use the detail panel. This deletes the mod from the library. If it was deployed, its files come out of the game at the next deploy.
