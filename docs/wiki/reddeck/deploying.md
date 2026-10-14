---
title: Deploying and undo
section: REDdeck
order: 5
description: "What REDdeck's Deploy does, hardlinks and copies, load order, REDmod, files changed outside REDdeck, and Undo deploy."
reviewed: 2026-10-14
---

# Deploying and <span class="y">undo</span>

**Deploy** is the one REDdeck word worth learning. Turning mods on and off only changes your list, the active [loadout](library.html#loadouts). Deploy makes the game folder match it.

## Turn on, then deploy

1. Tick the mods you want, untick the ones you don't.
2. The **Deploy** button counts the changes waiting, for example **Deploy (3 changes)**.
3. Press **Deploy**. Progress shows in the status bar; a short message says how many files went in for how many mods, how many mods are in the game now, and how many conflicts there are.
4. **View** on that message opens a report of every file the deploy added, replaced or removed, mod by mod. The last 30 reports stay in the library's `deploys` folder.

{% include shot.html caption="Deploy waiting" shows="The Mods view with a few mods switched on, their status not deployed yet, and the Deploy button counting the changes waiting." %}

## Check before you deploy

**Show pending changes** lists every file the next deploy will touch, and why:

| Reason | Meaning |
|---|---|
| Added | A mod you turned on puts this file in the game |
| Replaced | A mod higher in the list wins this file |
| Put back | A file REDdeck moved aside earlier comes back |
| Relinked | The library copy was rebuilt (for example a REDcode project packed again) |
| Removed | A mod you turned off or removed takes this file out |

On the REDdeck page, a mod's status links to the same list for that mod only.

{% include shot.html caption="Pending changes" shows="The pending-changes list before a deploy: each file with its reason (added, replaced, put back, removed) and the mod it belongs to." %}

## What deploy does

1. **Places the files** of every mod that's on into the game folder.
    - If your library is on the **same drive** as the game, REDdeck uses **hardlinks**: the file appears in the game folder without taking any extra space, because it's the same file as the one in your library.
    - If the library is on **another drive**, REDdeck **copies** the files instead.
    - The REDdeck page's footer says which one it's using.
2. **Writes the archive load order** to `modlist.txt` in `archive/pc/mod`, from the order of your list.
3. **Prepares REDmod packages** with the game's own `redMod.exe` when any REDmod mods are on. You don't have to run REDmod's deploy step yourself.
4. **Records everything** in a manifest in the game folder: every file it placed, and the game version.

## Changes made outside REDdeck

Other things touch the game folder too: a Steam **Verify integrity of game files**, a game update, a framework's own updater, or you editing a file by hand. REDdeck notices when a file it deployed has changed, and the mod shows `changed in game folder`.

At the next deploy it asks **one question per file**:

| Answer | What happens |
|---|---|
| **Keep the changed file** | The changed file is copied into your library, so it becomes the mod's version |
| **Put the mod's file back** | The game gets the mod's own file again |

If a deployed file has simply gone missing, deploy puts it back without asking.

### Files in the way

If a file that REDdeck needs to place is already in the game folder and isn't REDdeck's, deploy moves it into the library's `backup` folder first. **Undo deploy** puts it back.

## Undo deploy

**Undo deploy** removes every file in the manifest, and nothing else. It then puts back any files deploy moved aside and removes folders it emptied. Your library isn't touched: turn the mods on again and deploy to bring them back.

Use it to:

- go back to a clean game, for example to check whether a problem comes from a mod;
- hand the game back to another mod manager;
- prepare to uninstall REDdeck.

> **REDdeck never deletes a file it didn't put there.** Everything it removes is in its manifest, and hardlinks are checked to be the very same file before they're removed.

## Living with Vortex

While Vortex has files deployed in the game folder, REDdeck refuses to deploy. Purge in Vortex first (**Mods**, **Purge**). After that, both can be installed side by side, as long as only one of them has deployed. See [Switch from Vortex](switch-from-vortex.html).

## Load order, in short

- **Your list is the load order.** Higher wins.
- For **archives**, REDdeck writes `modlist.txt`, which tells the game which archives to load first. You don't need to rename archives with `#` or `00_` prefixes to control order.
- For **REDmod packages**, REDdeck passes the same order to `redMod.exe`.
- **Scripts, CET mods and plugins** have no load order: they all load together.

See [Conflicts](conflicts.html) for choosing who wins.
