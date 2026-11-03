---
title: Library, disk space and loadouts
nav_title: Library and loadouts
section: EDGEdeck
order: 9
description: "Where EDGEdeck keeps your mods, what uses disk space and what's safe to delete, and loadouts you switch between."
reviewed: 2026-11-03
---

# Library, disk space and <span class="y">loadouts</span>

## The library

Everything EDGEdeck knows is kept in plain files in the **library** folder, `%USERPROFILE%\EDGEdeck` by default. **Open library folder** in the Mods view's `...` menu opens it.

**The list is your library.** Every mod in it, on or off, is a copy kept in this folder, and a mod that isn't in the list isn't in the library. The Mods view's header says so, for example `Library: 38 mods · Loadout: Default`. On the EDGEdeck page, **Library** at the right of the loadout row shows the count of mods and versions; click it to open the folder.

| Folder or file | Contents |
|---|---|
| `library/<mod>/` | One folder per mod version, laid out exactly as it deploys, with a `mod.json` beside the files: name, version, kinds, where it came from, Nexus data |
| `library.json` | The order of your mods (first wins), your sections, the active loadout and the game folder |
| `downloads/` | The original downloads, kept so a mod can be added again. Safe to delete |
| `backup/` | Files a deploy moved out of the way. **Undo deploy** puts them back |
| `loadouts/` | Your loadouts |
| `deploys/` | A report of each of the last 30 deploys: every file added, replaced or removed |

The game folder also gets a manifest of what EDGEdeck deployed, which **Undo deploy** reads.

Because the library is plain folders and JSON files, you can look inside it with File Explorer, back it up by copying it, and an AI assistant can read it to answer questions about your mods.

## Moving the library

Choose a folder on the **same drive as the game**, so deploy can use hardlinks and your mods don't take up space twice.

**Move library...** moves it for you (EDGEdeck 0.29.0 or later). It's in the Mods view's `...` menu, in the Set up group as **Move the library to the game's drive** when the library and the game are on different drives, and on the EDGEdeck page's footer while deploy is copying.

1. Choose **Move library...** and pick the new folder.
2. On the same drive, EDGEdeck simply renames the folder. On another drive it copies everything, checks each file, then removes the old folder. A folder that already holds a library is used as it is.
3. EDGEdeck sets `edgedeck.libraryPath` for you. The next deploy turns the game's copies into hardlinks, or the other way round if you moved away from the game's drive. **Show pending changes** says why each file is redone.

Close the game first: Move library won't start while it runs.

> **Don't just edit `edgedeck.libraryPath`.** Changing the setting by hand only points EDGEdeck at another folder; your mods stay where they were. Use **Move library...**.

## Disk space

EDGEdeck shows sizes everywhere: next to every mod, folder and file in the Mods view, in the EDGEdeck page's **Size** column, and in the page's footer, for example `Disk: 160 MB in mods, 1.9 MB in kept downloads`.

| What | Uses space? | Safe to delete? |
|---|---|---|
| **Mods** in the library | Yes, once | Remove mods you no longer want |
| **Deployed files** in the game | No extra space with hardlinks (library on the game's drive). A second copy otherwise | Use **Undo deploy**, never delete them by hand |
| **Kept downloads** | Yes | Yes. The footer link opens the folder |
| **Deploy backups** | Yes, usually little | Only if you'll never need **Undo deploy** to restore them |
| **Old versions** of mods | Yes | Switch to the version you want, then remove the others |

**Largest first** on the EDGEdeck page sorts every mod by size, which is the quickest way to find what's using the most space.

## Loadouts

A **loadout** is a named set of which mods are on, and which version of each. Other mod managers call this a profile. Use loadouts to switch between setups, such as a story playthrough and a photo-mode setup, or to share your setup with a friend.

One loadout is always **active**. It's what the Mods view shows, what changes when you turn mods on or off, and what Deploy puts in the game. Your first one is called Default. The library, your sections and the load order are shared by every loadout.

- **Switch loadout** in the Mods view's title bar makes another loadout active: its mods go on, the others go off. Deploy afterwards. Nothing is lost: every change is saved in the loadout it was made in.
- **Save as new loadout** saves the mods as they are now under a new name. The active loadout stays active.
- On the **EDGEdeck page**, the Loadout dropdown shows any loadout. Pick one that isn't active and the page edits it, without touching the game or the Mods view; a banner says so. **Make active** switches to it. The buttons beside the dropdown make a new loadout (a copy, or every mod off), rename, export, import and delete one. The active one can't be deleted.
- A mod you add arrives off in every loadout but the active one.

Loadouts are plain JSON files in the library's `loadouts` folder, fine to share: **Export the active loadout** writes one to a file, and **Import a loadout** adds one as a new loadout. Someone using yours needs the same mods in their library. When it's made active, EDGEdeck says how many of its mods the library doesn't have, and the log names them. Loadouts saved before EDGEdeck 0.26 still load, but their order is no longer applied.
