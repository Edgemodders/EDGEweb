---
title: Library, disk space and loadouts
nav_title: Library and loadouts
section: REDdeck
order: 9
description: "Where REDdeck keeps your mods, what uses disk space and what's safe to delete, and saving lists of mods as loadouts."
reviewed: 2026-10-13
---

# Library, disk space and <span class="y">loadouts</span>

## The library

Everything REDdeck knows is kept in plain files in the **library** folder, `%USERPROFILE%\REDdeck` by default. **Open library folder** in the Mods view's `...` menu opens it.

| Folder or file | Contents |
|---|---|
| `library/<mod>/` | One folder per mod version, laid out exactly as it deploys, with a `mod.json` beside the files: name, version, kinds, where it came from, Nexus data |
| `library.json` | The order of your mods (first wins) and the game folder |
| `downloads/` | The original downloads, kept so a mod can be added again. Safe to delete |
| `backup/` | Files a deploy moved out of the way. **Undo deploy** puts them back |
| `loadouts/` | Your saved loadouts |

The game folder also gets a manifest of what REDdeck deployed, which **Undo deploy** reads.

Because the library is plain folders and JSON files, you can look inside it with File Explorer, back it up by copying it, and an AI assistant can read it to answer questions about your mods.

## Moving the library

Set `reddeck.libraryPath` to the folder you want. Choose a folder on the **same drive as the game**, so deploy can use hardlinks and your mods don't take up space twice. See [Settings and commands](settings.html).

## Disk space

REDdeck shows sizes everywhere: next to every mod, folder and file in the Mods view, in the REDdeck page's **Size** column, and in the page's footer, for example `Disk: 160 MB in mods, 1.9 MB in kept downloads`.

| What | Uses space? | Safe to delete? |
|---|---|---|
| **Mods** in the library | Yes, once | Remove mods you no longer want |
| **Deployed files** in the game | No extra space with hardlinks (library on the game's drive). A second copy otherwise | Use **Undo deploy**, never delete them by hand |
| **Kept downloads** | Yes | Yes. The footer link opens the folder |
| **Deploy backups** | Yes, usually little | Only if you'll never need **Undo deploy** to restore them |
| **Old versions** of mods | Yes | Switch to the version you want, then remove the others |

**Largest first** on the REDdeck page sorts every mod by size, which is the quickest way to find what's using the most space.

## Loadouts

A **loadout** is a saved list: which mods are on and in what order, plus the game version. Use loadouts to switch between setups, such as a story playthrough and a photo-mode setup, or to share your setup with a friend.

- **Save loadout** writes the current list to a file in the library's `loadouts` folder.
- **Load loadout** applies one: mods in it go on, mods not in it go off, and any mods it names that your library doesn't have are listed for you. Deploy afterwards.

Loadouts are plain JSON files, fine to share. Someone loading yours needs the same mods in their library.
